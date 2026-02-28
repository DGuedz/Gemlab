import { Hono } from 'npm:hono';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const auth = new Hono();

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// Sign up with email
auth.post('/signup', async (c) => {
  try {
    const { email, password, name, ephemeralWallet } = await c.req.json();

    if (!email || !password || !name) {
      return c.json({ message: 'Email, senha e nome são obrigatórios' }, 400);
    }

    // Check if user already exists in KV store
    const existingUserId = await kv.get(`user:email:${email}`);
    
    if (existingUserId) {
      // Verify if user actually exists in Supabase Auth
      try {
        const { data: existingUser, error: getUserError } = await supabase.auth.admin.getUserById(existingUserId as string);
        
        if (existingUser?.user) {
          // User exists in both KV and Auth - return conflict
          console.log(`User already exists with email: ${email}`);
          return c.json({ 
            message: 'Um usuário com este email já está registrado. Por favor, faça login.' 
          }, 409);
        } else {
          // User exists in KV but not in Auth - clean up orphaned data
          console.log(`Cleaning up orphaned KV data for email: ${email}`);
          await kv.del(`user:${existingUserId}`);
          await kv.del(`user:email:${email}`);
        }
      } catch (authCheckError) {
        // Error checking auth, clean up KV data to allow retry
        console.log(`Error checking existing user, cleaning up KV data: ${authCheckError}`);
        await kv.del(`user:${existingUserId}`);
        await kv.del(`user:email:${email}`);
      }
    }

    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm email since email server isn't configured
      user_metadata: {
        name,
      },
    });

    if (authError) {
      console.error('Error creating auth user:', authError);
      
      // Handle specific error codes
      if (authError.message?.includes('already been registered') || authError.code === 'email_exists') {
        // User exists in Auth but not in KV - try to sync
        console.log(`User exists in Auth but not in KV, attempting to retrieve: ${email}`);
        
        // Try to get the existing user
        const { data: listData } = await supabase.auth.admin.listUsers();
        const existingAuthUser = listData?.users?.find(u => u.email === email);
        
        if (existingAuthUser) {
          return c.json({ 
            message: 'Um usuário com este email já está registrado. Por favor, faça login.' 
          }, 409);
        }
      }
      
      return c.json({ message: authError.message }, 400);
    }

    // Store user profile with ephemeral wallet in KV store
    const userId = authData.user.id;
    const userProfile = {
      id: userId,
      email,
      name,
      ephemeralWallet,
      kycStatus: 'pending',
      createdAt: new Date().toISOString(),
    };

    await kv.set(`user:${userId}`, userProfile);
    await kv.set(`user:email:${email}`, userId);

    console.log(`User created successfully: ${userId}`);

    return c.json({
      success: true,
      user: userProfile,
    });
  } catch (error) {
    console.error('Error in signup:', error);
    return c.json({ message: 'Erro interno do servidor' }, 500);
  }
});

// Get user profile
auth.get('/profile', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ message: 'Token não fornecido' }, 401);
    }

    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      console.error('Error getting user:', error);
      return c.json({ message: 'Não autorizado' }, 401);
    }

    // Get user profile from KV store
    const userProfile = await kv.get(`user:${user.id}`);

    if (!userProfile) {
      return c.json({ message: 'Perfil de usuário não encontrado' }, 404);
    }

    return c.json(userProfile);
  } catch (error) {
    console.error('Error getting profile:', error);
    return c.json({ message: 'Erro interno do servidor' }, 500);
  }
});

// Sign in with wallet
auth.post('/wallet-signin', async (c) => {
  try {
    const { address, signature } = await c.req.json();

    if (!address || !signature) {
      return c.json({ message: 'Endereço e assinatura são obrigatórios' }, 400);
    }

    // In a production environment, verify the signature here
    // For this demo, we'll trust the signature

    // Check if wallet exists
    const existingUserId = await kv.get(`user:wallet:${address.toLowerCase()}`);

    if (existingUserId) {
      // Return existing user
      const userProfile = await kv.get(`user:${existingUserId}`);
      return c.json({ success: true, user: userProfile });
    }

    // Create new user with wallet
    const userId = crypto.randomUUID();
    const userProfile = {
      id: userId,
      wallet: address,
      kycStatus: 'pending',
      createdAt: new Date().toISOString(),
    };

    await kv.set(`user:${userId}`, userProfile);
    await kv.set(`user:wallet:${address.toLowerCase()}`, userId);

    console.log(`Wallet user created successfully: ${userId}`);

    return c.json({
      success: true,
      user: userProfile,
    });
  } catch (error) {
    console.error('Error in wallet signin:', error);
    return c.json({ message: 'Erro interno do servidor' }, 500);
  }
});

// Link wallet to existing account
auth.post('/link-wallet', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ message: 'Token não fornecido' }, 401);
    }

    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return c.json({ message: 'Não autorizado' }, 401);
    }

    const { address, signature } = await c.req.json();

    if (!address || !signature) {
      return c.json({ message: 'Endereço e assinatura são obrigatórios' }, 400);
    }

    // Get user profile
    const userProfile = await kv.get(`user:${user.id}`);

    if (!userProfile) {
      return c.json({ message: 'Perfil não encontrado' }, 404);
    }

    // Update profile with wallet
    userProfile.wallet = address;
    userProfile.walletLinkedAt = new Date().toISOString();

    await kv.set(`user:${user.id}`, userProfile);
    await kv.set(`user:wallet:${address.toLowerCase()}`, user.id);

    console.log(`Wallet linked to user: ${user.id}`);

    return c.json({
      success: true,
      user: userProfile,
    });
  } catch (error) {
    console.error('Error linking wallet:', error);
    return c.json({ message: 'Erro interno do servidor' }, 500);
  }
});

// DEV ONLY: Delete user account (for testing/development)
auth.delete('/user/:email', async (c) => {
  try {
    const email = c.req.param('email');
    
    if (!email) {
      return c.json({ message: 'Email é obrigatório' }, 400);
    }

    console.log(`Attempting to delete user with email: ${email}`);

    // Get user ID from KV store
    const userId = await kv.get(`user:email:${email}`);
    
    if (userId) {
      // Get full user profile to find wallet if exists
      const userProfile = await kv.get(`user:${userId}`) as any;
      
      // Delete from KV store
      await kv.del(`user:${userId}`);
      await kv.del(`user:email:${email}`);
      
      if (userProfile?.wallet) {
        await kv.del(`user:wallet:${userProfile.wallet.toLowerCase()}`);
      }
      
      console.log(`Deleted user from KV store: ${userId}`);
    }

    // Try to delete from Supabase Auth
    try {
      const { data: listData } = await supabase.auth.admin.listUsers();
      const existingAuthUser = listData?.users?.find(u => u.email === email);
      
      if (existingAuthUser) {
        const { error: deleteError } = await supabase.auth.admin.deleteUser(existingAuthUser.id);
        
        if (deleteError) {
          console.error('Error deleting from Auth:', deleteError);
        } else {
          console.log(`Deleted user from Auth: ${existingAuthUser.id}`);
        }
      }
    } catch (authError) {
      console.error('Error checking/deleting from Auth:', authError);
    }

    return c.json({ 
      success: true, 
      message: 'Usuário removido do sistema' 
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    return c.json({ message: 'Erro ao deletar usuário' }, 500);
  }
});

// DEV ONLY: Clean up inconsistent data (sync KV with Auth)
auth.post('/cleanup', async (c) => {
  try {
    console.log('Starting cleanup of inconsistent data...');
    
    // Get all users from Auth
    const { data: listData } = await supabase.auth.admin.listUsers();
    const authUsers = listData?.users || [];
    
    console.log(`Found ${authUsers.length} users in Auth`);
    
    // Get all email mappings from KV
    const kvEmailKeys = await kv.getByPrefix('user:email:');
    
    console.log(`Found ${kvEmailKeys.length} email mappings in KV`);
    
    const cleanedUp = {
      orphanedKvUsers: 0,
      orphanedAuthUsers: 0,
      synced: 0,
    };
    
    // Check for orphaned KV users (in KV but not in Auth)
    for (const kvEntry of kvEmailKeys) {
      const email = kvEntry.key.replace('user:email:', '');
      const userId = kvEntry.value;
      
      const authUser = authUsers.find(u => u.email === email);
      
      if (!authUser) {
        // Orphaned KV entry - delete it
        console.log(`Cleaning orphaned KV user: ${email}`);
        await kv.del(`user:${userId}`);
        await kv.del(`user:email:${email}`);
        
        const userProfile = await kv.get(`user:${userId}`) as any;
        if (userProfile?.wallet) {
          await kv.del(`user:wallet:${userProfile.wallet.toLowerCase()}`);
        }
        
        cleanedUp.orphanedKvUsers++;
      }
    }
    
    // Check for orphaned Auth users (in Auth but not in KV)
    for (const authUser of authUsers) {
      if (!authUser.email) continue;
      
      const kvUserId = await kv.get(`user:email:${authUser.email}`);
      
      if (!kvUserId) {
        // Auth user exists but no KV profile - create KV profile
        console.log(`Creating KV profile for existing Auth user: ${authUser.email}`);
        
        const userProfile = {
          id: authUser.id,
          email: authUser.email,
          name: authUser.user_metadata?.name || '',
          ephemeralWallet: authUser.user_metadata?.ephemeralWallet,
          kycStatus: 'pending',
          createdAt: authUser.created_at,
        };
        
        await kv.set(`user:${authUser.id}`, userProfile);
        await kv.set(`user:email:${authUser.email}`, authUser.id);
        
        cleanedUp.synced++;
      }
    }
    
    console.log('Cleanup completed:', cleanedUp);
    
    return c.json({ 
      success: true, 
      message: 'Limpeza concluída',
      stats: cleanedUp
    });
  } catch (error) {
    console.error('Error during cleanup:', error);
    return c.json({ message: 'Erro durante limpeza' }, 500);
  }
});

export default auth;