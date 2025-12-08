import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../utils/supabase/client';
import { DashboardStats } from './DashboardStats';
import { AssetsOverview } from './AssetsOverview';
import { SalesHistory } from './SalesHistory';
import { TrackingTimeline } from './TrackingTimeline';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { 
  User, 
  Mail, 
  Wallet, 
  LogOut, 
  Copy, 
  Check, 
  Settings,
  Link as LinkIcon,
  AlertCircle
} from 'lucide-react';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

export function UserDashboard() {
  const { user, signOut } = useAuth();
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<any>(null);

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  async function loadDashboardData() {
    try {
      setLoading(true);
      
      // Mock dashboard data (edge function not available)
      const mockData = {
        stats: {
          totalAssets: 0,
          totalValue: 0,
          pendingVerifications: 0,
          completedTransactions: 0,
        },
        recentActivity: [],
        assets: [],
      };
      
      setDashboardData(mockData);
    } catch (error) {
      console.error('Error loading dashboard:', error);
    } finally {
      setLoading(false);
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleViewAssetDetails = (assetId: string) => {
    console.log('View asset details:', assetId);
    // TODO: Implementar navegação para detalhes do ativo
  };

  if (!user) return null;

  // Default empty data structure
  const stats = dashboardData?.stats || {
    totalAssets: 0,
    totalValue: 0,
    pendingVerifications: 0,
    completedTransactions: 0,
  };

  const assets = dashboardData?.assets || [];
  const sales = dashboardData?.sales || [];
  const trackedAssets = dashboardData?.trackedAssets || [];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="font-['Montserrat'] text-3xl font-bold text-[#1b1b1b] mb-2">
                Dashboard
              </h1>
              <p className="font-['Inter'] text-gray-600">
                Bem-vindo de volta, {user.name || 'Usuário'}
              </p>
            </div>

            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  {user.name && (
                    <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                      {user.name}
                    </p>
                  )}
                  {user.email && (
                    <p className="font-['Inter'] text-xs text-gray-600">
                      {user.email}
                    </p>
                  )}
                  {user.ephemeralWallet && (
                    <div className="flex items-center gap-2 mt-1">
                      <p className="font-['Inter'] text-xs font-mono text-gray-500">
                        {truncateAddress(user.ephemeralWallet.address)}
                      </p>
                      <button
                        onClick={() => copyToClipboard(user.ephemeralWallet!.address)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        {copied ? (
                          <Check className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-[#006b4f]"
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={signOut}
                    className="text-gray-500 hover:text-red-600"
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* KYC Alert */}
        {user.kycStatus !== 'approved' && (
          <Card className="p-4 mb-8 border-[#caa34b] bg-[#caa34b]/5">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-[#caa34b] flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-['Inter'] text-sm font-semibold text-[#1b1b1b] mb-1">
                  Complete seu KYC/AML
                </h4>
                <p className="font-['Inter'] text-sm text-gray-700 mb-3">
                  Para acessar todas as funcionalidades da plataforma, complete o processo de verificação de identidade.
                </p>
                <Button size="sm" className="bg-[#caa34b] hover:bg-[#b8923f] text-white">
                  Iniciar Verificação
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Stats */}
        <div className="mb-8">
          <DashboardStats stats={stats} />
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="assets" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="assets">Ativos</TabsTrigger>
            <TabsTrigger value="sales">Transações</TabsTrigger>
            <TabsTrigger value="tracking">Rastreabilidade</TabsTrigger>
          </TabsList>

          <TabsContent value="assets" className="space-y-6">
            <AssetsOverview 
              assets={assets}
              onViewDetails={handleViewAssetDetails}
            />
          </TabsContent>

          <TabsContent value="sales" className="space-y-6">
            <SalesHistory sales={sales} />
          </TabsContent>

          <TabsContent value="tracking" className="space-y-6">
            <TrackingTimeline trackedAssets={trackedAssets} />
          </TabsContent>
        </Tabs>

        {/* Account Details */}
        <Card className="p-6 mt-8">
          <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-4">
            Informações da Conta
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {user.ephemeralWallet && (
              <div className="p-4 bg-[#006b4f]/5 border border-[#006b4f]/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-[#caa34b]" />
                    <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                      Wallet Efêmera
                    </p>
                  </div>
                  <Badge className="bg-[#caa34b] text-white text-xs">
                    Auto-gerada
                  </Badge>
                </div>
                <p className="font-['Inter'] text-xs font-mono text-gray-700 break-all">
                  {user.ephemeralWallet.address}
                </p>
                <p className="font-['Inter'] text-xs text-gray-600 mt-2">
                  Criada automaticamente para você. Pode conectar sua própria wallet.
                </p>
              </div>
            )}

            {user.wallet && (
              <div className="p-4 bg-gray-50 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <LinkIcon className="h-5 w-5 text-[#006b4f]" />
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    Wallet Conectada
                  </p>
                </div>
                <p className="font-['Inter'] text-xs font-mono text-gray-700 break-all">
                  {user.wallet}
                </p>
              </div>
            )}

            <div className="p-4 bg-gray-50 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <User className="h-5 w-5 text-[#006b4f]" />
                <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                  Status KYC
                </p>
              </div>
              <Badge
                className={
                  user.kycStatus === 'approved'
                    ? 'bg-green-100 text-green-700'
                    : user.kycStatus === 'rejected'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                }
              >
                {user.kycStatus === 'approved' 
                  ? 'Aprovado' 
                  : user.kycStatus === 'rejected' 
                  ? 'Rejeitado' 
                  : 'Pendente'}
              </Badge>
            </div>

            <div className="p-4 bg-gray-50 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="h-5 w-5 text-[#006b4f]" />
                <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                  Membro desde
                </p>
              </div>
              <p className="font-['Inter'] text-sm text-gray-700">
                {new Date(user.createdAt).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}