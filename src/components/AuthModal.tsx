import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Wallet, Mail, Sparkles, Shield, Lock } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

export function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, signUpWithEmail, signInWithEmail, signInWithWallet } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sign Up State
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpName, setSignUpName] = useState('');

  // Sign In State
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      await signUpWithEmail(signUpEmail, signUpPassword, signUpName);
      setSuccess('Conta criada com sucesso! Wallet efêmera gerada automaticamente.');
      setSignUpEmail('');
      setSignUpPassword('');
      setSignUpName('');
    } catch (err: any) {
      setError(err.message || 'Erro ao criar conta');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      await signInWithEmail(signInEmail, signInPassword);
      setSuccess('Login realizado com sucesso!');
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleWalletConnect = async () => {
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === 'undefined') {
        throw new Error('MetaMask não está instalado. Por favor, instale a extensão MetaMask.');
      }

      // Request account access
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const address = accounts[0];

      // Create message to sign
      const message = `GemLab Authentication\n\nSign this message to prove you own this wallet.\n\nAddress: ${address}\nTimestamp: ${Date.now()}`;

      // Request signature
      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, address],
      });

      await signInWithWallet(address, signature);
      setSuccess('Wallet conectada com sucesso!');
    } catch (err: any) {
      if (err.code === 4001) {
        setError('Conexão cancelada pelo usuário');
      } else {
        setError(err.message || 'Erro ao conectar wallet');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] flex items-center gap-2">
            <Shield className="h-6 w-6 text-[#006b4f]" />
            Autenticação GemLab
          </DialogTitle>
          <DialogDescription className="font-['Inter'] text-gray-600">
            Acesse a plataforma de certificação e tokenização de esmeraldas
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Entrar</TabsTrigger>
            <TabsTrigger value="signup">Criar Conta</TabsTrigger>
          </TabsList>

          {/* Sign In Tab */}
          <TabsContent value="signin" className="space-y-4">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signin-email" className="font-['Inter']">
                  Email
                </Label>
                <Input
                  id="signin-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                  required
                  className="font-['Inter']"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signin-password" className="font-['Inter']">
                  Senha
                </Label>
                <Input
                  id="signin-password"
                  type="password"
                  placeholder="••••••••"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                  required
                  className="font-['Inter']"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#006b4f] hover:bg-[#014733] text-white font-['Inter']"
                disabled={isLoading}
              >
                <Mail className="h-4 w-4 mr-2" />
                {isLoading ? 'Entrando...' : 'Entrar com Email'}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500 font-['Inter']">
                  ou
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-[#caa34b] text-[#caa34b] hover:bg-[#caa34b] hover:text-white font-['Inter']"
              onClick={handleWalletConnect}
              disabled={isLoading}
            >
              <Wallet className="h-4 w-4 mr-2" />
              {isLoading ? 'Conectando...' : 'Conectar Wallet (MetaMask)'}
            </Button>
          </TabsContent>

          {/* Sign Up Tab */}
          <TabsContent value="signup" className="space-y-4">
            <div className="bg-[#006b4f]/5 border border-[#006b4f]/20 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-[#caa34b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-['Inter'] text-sm text-[#1b1b1b] font-semibold mb-1">
                    Wallet Efêmera Automática
                  </p>
                  <p className="font-['Inter'] text-xs text-gray-600">
                    Uma carteira blockchain será criada automaticamente para você. Você poderá conectar sua própria wallet depois.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name" className="font-['Inter']">
                  Nome Completo
                </Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Seu nome"
                  value={signUpName}
                  onChange={(e) => setSignUpName(e.target.value)}
                  required
                  className="font-['Inter']"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email" className="font-['Inter']">
                  Email
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  required
                  className="font-['Inter']"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password" className="font-['Inter']">
                  Senha
                </Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  required
                  minLength={6}
                  className="font-['Inter']"
                />
                <p className="font-['Inter'] text-xs text-gray-500">
                  Mínimo de 6 caracteres
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#006b4f] hover:bg-[#014733] text-white font-['Inter']"
                disabled={isLoading}
              >
                <Lock className="h-4 w-4 mr-2" />
                {isLoading ? 'Criando conta...' : 'Criar Conta com Email'}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500 font-['Inter']">
                  ou
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full border-[#caa34b] text-[#caa34b] hover:bg-[#caa34b] hover:text-white font-['Inter']"
              onClick={handleWalletConnect}
              disabled={isLoading}
            >
              <Wallet className="h-4 w-4 mr-2" />
              {isLoading ? 'Conectando...' : 'Conectar Wallet (MetaMask)'}
            </Button>
          </TabsContent>
        </Tabs>

        {error && (
          <Alert variant="destructive">
            <AlertDescription className="font-['Inter']">{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="border-green-200 bg-green-50">
            <AlertDescription className="font-['Inter'] text-green-800">
              {success}
            </AlertDescription>
          </Alert>
        )}

        <div className="text-center">
          <p className="font-['Inter'] text-xs text-gray-500">
            Ao criar uma conta, você concorda com os Termos de Uso e Política de Privacidade do Protocolo GEMLAB
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
