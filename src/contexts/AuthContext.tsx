import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabase/client';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface EphemeralWallet {
  address: string;
  publicKey: string;
  createdAt: string;
}

interface User {
  id: string;
  email?: string;
  wallet?: string;
  ephemeralWallet?: EphemeralWallet;
  name?: string;
  kycStatus?: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  signUpWithEmail: (email: string, password: string, name: string) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signInWithWallet: (address: string, signature: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Generate ephemeral wallet (simplified for demonstration)
// In production, use proper cryptographic libraries like ethers.js
function generateEphemeralWallet(): EphemeralWallet {
  const randomBytes = new Uint8Array(32);
  crypto.getRandomValues(randomBytes);
  const address = '0x' + Array.from(randomBytes.slice(0, 20))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  const publicKey = '0x' + Array.from(randomBytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  
  return {
    address,
    publicKey,
    createdAt: new Date().toISOString(),
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    // Check for existing session
    checkSession();
  }, []);

  async function checkSession() {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.access_token) {
        await loadUserProfile(session.access_token);
      }
    } catch (error) {
      console.error('Error checking session:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function loadUserProfile(accessToken: string) {
    try {
      // Mock user profile when edge function is not available
      const { data: { user: authUser } } = await supabase.auth.getUser();
      
      if (authUser) {
        setUser({
          id: authUser.id,
          email: authUser.email,
          name: authUser.user_metadata?.name || authUser.email?.split('@')[0],
          createdAt: authUser.created_at,
        });
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  }

  async function signUpWithEmail(email: string, password: string, name: string) {
    try {
      setIsLoading(true);

      // Sign up directly with Supabase Auth (no edge function needed)
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

      if (signUpError) throw signUpError;

      // Sign in automatically if email confirmation is disabled
      if (authData.session?.access_token) {
        await loadUserProfile(authData.session.access_token);
      }

      setIsAuthModalOpen(false);
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function signInWithEmail(email: string, password: string) {
    try {
      setIsLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.session?.access_token) {
        await loadUserProfile(data.session.access_token);
      }

      setIsAuthModalOpen(false);
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function signInWithWallet(address: string, signature: string) {
    try {
      setIsLoading(true);

      // Mock wallet signin (edge function not available)
      // Generate ephemeral user for wallet
      const ephemeralWallet = generateEphemeralWallet();
      
      const mockUser: User = {
        id: `wallet_${address.slice(0, 10)}`,
        wallet: address,
        ephemeralWallet,
        name: `User ${address.slice(0, 6)}...${address.slice(-4)}`,
        createdAt: new Date().toISOString(),
      };
      
      setUser(mockUser);
      setIsAuthModalOpen(false);
    } catch (error) {
      console.error('Error signing in with wallet:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  async function signOut() {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthModalOpen,
        setIsAuthModalOpen,
        signUpWithEmail,
        signInWithEmail,
        signInWithWallet,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}