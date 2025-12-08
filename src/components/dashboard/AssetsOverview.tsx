import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Gem, Eye, ArrowRight } from 'lucide-react';

interface Asset {
  id: string;
  tokenId: string;
  type: 'ERC1155' | 'ERC721';
  name: string;
  weight: number;
  quality: string;
  status: 'registered' | 'certified' | 'tokenized' | 'sold';
  createdAt: string;
}

interface AssetsOverviewProps {
  assets: Asset[];
  onViewDetails: (assetId: string) => void;
}

export function AssetsOverview({ assets, onViewDetails }: AssetsOverviewProps) {
  const getStatusBadge = (status: Asset['status']) => {
    const statusConfig = {
      registered: { label: 'Registrado', color: 'bg-blue-100 text-blue-700' },
      certified: { label: 'Certificado', color: 'bg-green-100 text-green-700' },
      tokenized: { label: 'Tokenizado', color: 'bg-purple-100 text-purple-700' },
      sold: { label: 'Vendido', color: 'bg-gray-100 text-gray-700' },
    };
    
    const config = statusConfig[status];
    return (
      <Badge className={config.color}>
        {config.label}
      </Badge>
    );
  };

  const getTypeBadge = (type: Asset['type']) => {
    return type === 'ERC1155' ? (
      <Badge className="bg-[#006b4f] text-white">Lote</Badge>
    ) : (
      <Badge className="bg-[#caa34b] text-white">Individual</Badge>
    );
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-1">
            Meus Ativos
          </h3>
          <p className="font-['Inter'] text-sm text-gray-600">
            Esmeraldas registradas e certificadas
          </p>
        </div>
        <Button className="bg-[#006b4f] hover:bg-[#014733] text-white">
          <Gem className="h-4 w-4 mr-2" />
          Registrar Novo
        </Button>
      </div>

      {assets.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#006b4f]/10 mb-4">
            <Gem className="h-8 w-8 text-[#006b4f]" />
          </div>
          <h4 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-2">
            Nenhum ativo registrado
          </h4>
          <p className="font-['Inter'] text-sm text-gray-600 mb-6">
            Comece registrando sua primeira esmeralda na plataforma GemLab
          </p>
          <Button className="bg-[#006b4f] hover:bg-[#014733] text-white">
            Registrar Primeira Esmeralda
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {assets.map((asset) => (
            <div
              key={asset.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:border-[#006b4f] transition-colors"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-[#006b4f]/10 p-3 rounded-lg">
                  <Gem className="h-6 w-6 text-[#006b4f]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-['Inter'] text-base font-semibold text-[#1b1b1b]">
                      {asset.name}
                    </h4>
                    {getTypeBadge(asset.type)}
                    {getStatusBadge(asset.status)}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="font-['Inter'] text-gray-500">Token ID:</span>
                      <span className="font-['Inter'] font-mono text-[#1b1b1b] ml-1">
                        #{asset.tokenId}
                      </span>
                    </div>
                    <div>
                      <span className="font-['Inter'] text-gray-500">Peso:</span>
                      <span className="font-['Inter'] text-[#1b1b1b] ml-1">
                        {asset.weight}ct
                      </span>
                    </div>
                    <div>
                      <span className="font-['Inter'] text-gray-500">Qualidade:</span>
                      <span className="font-['Inter'] text-[#1b1b1b] ml-1">
                        {asset.quality}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 sm:mt-0 border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                onClick={() => onViewDetails(asset.id)}
              >
                <Eye className="h-4 w-4 mr-2" />
                Ver Detalhes
              </Button>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
