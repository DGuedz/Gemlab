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
  onAuthSuccess?: () => void;
  setOnAuthSuccess: (callback: (() => void) | undefined) => void;
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
  const [onAuthSuccess, setOnAuthSuccess] = useState<(() => void) | undefined>(undefined);

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
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-6272b4ab/auth/profile`,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  }

  async function signUpWithEmail(email: string, password: string, name: string) {
    try {
      setIsLoading(true);

      // Generate ephemeral wallet for new user
      const ephemeralWallet = generateEphemeralWallet();

      // Create user via server endpoint
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-6272b4ab/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            name,
            ephemeralWallet,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro ao criar conta');
      }

      const data = await response.json();

      // Sign in automatically
      const { data: authData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      if (authData.session?.access_token) {
        await loadUserProfile(authData.session.access_token);
      }

      setIsAuthModalOpen(false);
      if (onAuthSuccess) onAuthSuccess();
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
      if (onAuthSuccess) onAuthSuccess();
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

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-6272b4ab/auth/wallet-signin`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            address,
            signature,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro ao conectar wallet');
      }

      const data = await response.json();
      setUser(data.user);
      setIsAuthModalOpen(false);
      if (onAuthSuccess) onAuthSuccess();
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
        onAuthSuccess,
        setOnAuthSuccess,
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