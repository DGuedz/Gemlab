import { Card } from '../ui/card';
import { TrendingUp, Package, ShoppingBag, DollarSign } from 'lucide-react';

interface StatsData {
  totalAssets: number;
  totalSales: number;
  totalRevenue: number;
  pendingTransactions: number;
}

interface DashboardStatsProps {
  stats: StatsData;
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  const statCards = [
    {
      title: 'Total de Ativos',
      value: stats.totalAssets,
      icon: Package,
      color: 'text-[#006b4f]',
      bgColor: 'bg-[#006b4f]/10',
      suffix: '',
    },
    {
      title: 'Vendas Realizadas',
      value: stats.totalSales,
      icon: ShoppingBag,
      color: 'text-[#caa34b]',
      bgColor: 'bg-[#caa34b]/10',
      suffix: '',
    },
    {
      title: 'Receita Total',
      value: stats.totalRevenue,
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      suffix: '',
      isAmount: true,
    },
    {
      title: 'Transações Pendentes',
      value: stats.pendingTransactions,
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      suffix: '',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-['Inter'] text-sm text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b]">
                  {stat.isAmount && 'R$ '}
                  {stat.isAmount 
                    ? stat.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
                    : stat.value}
                  {stat.suffix}
                </p>
              </div>
              <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
