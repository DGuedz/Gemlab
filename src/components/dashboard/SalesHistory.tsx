import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { TrendingUp, ArrowUpRight, ArrowDownRight, ExternalLink } from 'lucide-react';

interface Sale {
  id: string;
  type: 'buy' | 'sell';
  assetName: string;
  tokenId: string;
  amount: number;
  price: number;
  buyer?: string;
  seller?: string;
  status: 'completed' | 'pending' | 'cancelled';
  date: string;
  txHash?: string;
}

interface SalesHistoryProps {
  sales: Sale[];
}

export function SalesHistory({ sales }: SalesHistoryProps) {
  const getStatusBadge = (status: Sale['status']) => {
    const statusConfig = {
      completed: { label: 'Concluída', color: 'bg-green-100 text-green-700' },
      pending: { label: 'Pendente', color: 'bg-yellow-100 text-yellow-700' },
      cancelled: { label: 'Cancelada', color: 'bg-red-100 text-red-700' },
    };
    
    const config = statusConfig[status];
    return (
      <Badge className={config.color}>
        {config.label}
      </Badge>
    );
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-1">
            Histórico de Transações
          </h3>
          <p className="font-['Inter'] text-sm text-gray-600">
            Compras e vendas realizadas
          </p>
        </div>
        <TrendingUp className="h-6 w-6 text-[#006b4f]" />
      </div>

      {sales.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#caa34b]/10 mb-4">
            <TrendingUp className="h-8 w-8 text-[#caa34b]" />
          </div>
          <h4 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-2">
            Nenhuma transação ainda
          </h4>
          <p className="font-['Inter'] text-sm text-gray-600">
            Suas compras e vendas aparecerão aqui
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {sales.map((sale) => (
            <div
              key={sale.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:border-[#006b4f] transition-colors"
            >
              <div className="flex items-start gap-4 flex-1">
                <div
                  className={`${
                    sale.type === 'buy'
                      ? 'bg-green-50 text-green-600'
                      : 'bg-blue-50 text-blue-600'
                  } p-3 rounded-lg`}
                >
                  {sale.type === 'buy' ? (
                    <ArrowDownRight className="h-5 w-5" />
                  ) : (
                    <ArrowUpRight className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-['Inter'] text-base font-semibold text-[#1b1b1b]">
                      {sale.type === 'buy' ? 'Compra' : 'Venda'}: {sale.assetName}
                    </h4>
                    {getStatusBadge(sale.status)}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm mb-2">
                    <div>
                      <span className="font-['Inter'] text-gray-500">Token ID:</span>
                      <span className="font-['Inter'] font-mono text-[#1b1b1b] ml-1">
                        #{sale.tokenId}
                      </span>
                    </div>
                    <div>
                      <span className="font-['Inter'] text-gray-500">Valor:</span>
                      <span className="font-['Inter'] text-[#1b1b1b] font-semibold ml-1">
                        R$ {sale.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div>
                      <span className="font-['Inter'] text-gray-500">Data:</span>
                      <span className="font-['Inter'] text-[#1b1b1b] ml-1">
                        {new Date(sale.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>
                  {sale.type === 'buy' && sale.seller && (
                    <p className="font-['Inter'] text-xs text-gray-600">
                      De: <span className="font-mono">{truncateAddress(sale.seller)}</span>
                    </p>
                  )}
                  {sale.type === 'sell' && sale.buyer && (
                    <p className="font-['Inter'] text-xs text-gray-600">
                      Para: <span className="font-mono">{truncateAddress(sale.buyer)}</span>
                    </p>
                  )}
                </div>
              </div>
              {sale.txHash && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 sm:mt-0 text-[#006b4f] hover:text-[#014733]"
                  onClick={() => window.open(`https://etherscan.io/tx/${sale.txHash}`, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver TX
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
