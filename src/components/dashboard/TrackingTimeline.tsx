import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { MapPin, Package, CheckCircle, Truck, Store, Clock } from 'lucide-react';

interface TrackingEvent {
  id: string;
  stage: 'mining' | 'registered' | 'certified' | 'tokenized' | 'transit' | 'delivered';
  title: string;
  description: string;
  location?: string;
  timestamp: string;
  txHash?: string;
}

interface TrackedAsset {
  id: string;
  name: string;
  tokenId: string;
  currentStage: string;
  events: TrackingEvent[];
}

interface TrackingTimelineProps {
  trackedAssets: TrackedAsset[];
}

export function TrackingTimeline({ trackedAssets }: TrackingTimelineProps) {
  const getStageIcon = (stage: TrackingEvent['stage']) => {
    switch (stage) {
      case 'mining':
        return <MapPin className="h-5 w-5" />;
      case 'registered':
        return <Package className="h-5 w-5" />;
      case 'certified':
        return <CheckCircle className="h-5 w-5" />;
      case 'tokenized':
        return <Package className="h-5 w-5" />;
      case 'transit':
        return <Truck className="h-5 w-5" />;
      case 'delivered':
        return <Store className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  const getStageColor = (stage: TrackingEvent['stage']) => {
    switch (stage) {
      case 'mining':
        return 'bg-amber-100 text-amber-700';
      case 'registered':
        return 'bg-blue-100 text-blue-700';
      case 'certified':
        return 'bg-green-100 text-green-700';
      case 'tokenized':
        return 'bg-purple-100 text-purple-700';
      case 'transit':
        return 'bg-orange-100 text-orange-700';
      case 'delivered':
        return 'bg-teal-100 text-teal-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-1">
            Rastreabilidade
          </h3>
          <p className="font-['Inter'] text-sm text-gray-600">
            Acompanhe o ciclo de vida dos seus ativos
          </p>
        </div>
        <MapPin className="h-6 w-6 text-[#006b4f]" />
      </div>

      {trackedAssets.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#006b4f]/10 mb-4">
            <MapPin className="h-8 w-8 text-[#006b4f]" />
          </div>
          <h4 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-2">
            Nenhum ativo em rastreamento
          </h4>
          <p className="font-['Inter'] text-sm text-gray-600">
            Registre ativos para acompanhar sua rastreabilidade
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {trackedAssets.map((asset) => (
            <div key={asset.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-['Inter'] text-base font-semibold text-[#1b1b1b]">
                    {asset.name}
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Token ID: <span className="font-mono">#{asset.tokenId}</span>
                  </p>
                </div>
                <Badge className="bg-[#006b4f] text-white">
                  {asset.currentStage}
                </Badge>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gray-200" />

                <div className="space-y-6">
                  {asset.events.map((event, index) => (
                    <div key={event.id} className="relative flex gap-4">
                      {/* Icon */}
                      <div
                        className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${getStageColor(
                          event.stage
                        )}`}
                      >
                        {getStageIcon(event.stage)}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-6">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                              {event.title}
                            </h5>
                            <span className="font-['Inter'] text-xs text-gray-500 whitespace-nowrap ml-2">
                              {new Date(event.timestamp).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </span>
                          </div>
                          <p className="font-['Inter'] text-sm text-gray-700 mb-2">
                            {event.description}
                          </p>
                          {event.location && (
                            <div className="flex items-center gap-1 text-xs text-gray-600">
                              <MapPin className="h-3 w-3" />
                              <span className="font-['Inter']">{event.location}</span>
                            </div>
                          )}
                          {event.txHash && (
                            <div className="mt-2">
                              <a
                                href={`https://etherscan.io/tx/${event.txHash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-['Inter'] text-xs text-[#006b4f] hover:text-[#014733] font-mono"
                              >
                                TX: {event.txHash.slice(0, 10)}...{event.txHash.slice(-8)}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
