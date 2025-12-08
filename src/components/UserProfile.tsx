import { useAuth } from '../contexts/AuthContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Wallet, Mail, User, LogOut, Copy, Check, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

export function UserProfile() {
  const { user, signOut } = useAuth();
  const [copied, setCopied] = useState(false);

  if (!user) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <Card className="p-6 max-w-md mx-auto my-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-1">
            Perfil do Usuário
          </h3>
          <Badge
            className={
              user.kycStatus === 'approved'
                ? 'bg-green-100 text-green-700'
                : user.kycStatus === 'rejected'
                ? 'bg-red-100 text-red-700'
                : 'bg-yellow-100 text-yellow-700'
            }
          >
            KYC: {user.kycStatus === 'approved' ? 'Aprovado' : user.kycStatus === 'rejected' ? 'Rejeitado' : 'Pendente'}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={signOut}
          className="text-gray-500 hover:text-red-600"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sair
        </Button>
      </div>

      <div className="space-y-4">
        {user.name && (
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <User className="h-5 w-5 text-[#006b4f]" />
            <div className="flex-1">
              <p className="font-['Inter'] text-xs text-gray-500">Nome</p>
              <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                {user.name}
              </p>
            </div>
          </div>
        )}

        {user.email && (
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <Mail className="h-5 w-5 text-[#006b4f]" />
            <div className="flex-1">
              <p className="font-['Inter'] text-xs text-gray-500">Email</p>
              <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                {user.email}
              </p>
            </div>
          </div>
        )}

        {user.ephemeralWallet && (
          <div className="p-4 bg-[#006b4f]/5 border border-[#006b4f]/20 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-[#caa34b]" />
                <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                  Wallet Efêmera
                </p>
              </div>
              <Badge className="bg-[#caa34b] text-white">
                Auto-gerada
              </Badge>
            </div>
            <div className="space-y-2">
              <div>
                <p className="font-['Inter'] text-xs text-gray-500 mb-1">Endereço</p>
                <div className="flex items-center gap-2">
                  <p className="font-['Inter'] text-xs font-mono text-[#1b1b1b] break-all">
                    {truncateAddress(user.ephemeralWallet.address)}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() => copyToClipboard(user.ephemeralWallet!.address)}
                  >
                    {copied ? (
                      <Check className="h-3 w-3 text-green-600" />
                    ) : (
                      <Copy className="h-3 w-3 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>
              <p className="font-['Inter'] text-xs text-gray-600 mt-2">
                Esta wallet foi criada automaticamente para você. Você pode conectar sua própria wallet posteriormente.
              </p>
            </div>
          </div>
        )}

        {user.wallet && (
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <LinkIcon className="h-5 w-5 text-[#006b4f]" />
            <div className="flex-1">
              <p className="font-['Inter'] text-xs text-gray-500">Wallet Conectada</p>
              <div className="flex items-center gap-2">
                <p className="font-['Inter'] text-sm font-mono font-medium text-[#1b1b1b]">
                  {truncateAddress(user.wallet)}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => copyToClipboard(user.wallet!)}
                >
                  {copied ? (
                    <Check className="h-3 w-3 text-green-600" />
                  ) : (
                    <Copy className="h-3 w-3 text-gray-500" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="font-['Inter'] text-xs text-blue-900">
          <strong>Próximos passos:</strong> Complete o processo de KYC/AML para acessar todas as funcionalidades da plataforma GemLab.
        </p>
      </div>
    </Card>
  );
}