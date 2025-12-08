import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Activity, TrendingUp, TrendingDown, Minus } from "lucide-react";

export function RealTimeStats() {
  const stats = [
    {
      label: "Transações (24h)",
      value: "127",
      change: "+12.5%",
      trend: "up",
      color: "#006b4f",
    },
    {
      label: "Certificações (7d)",
      value: "42",
      change: "+8.2%",
      trend: "up",
      color: "#caa34b",
    },
    {
      label: "Volume Negociado",
      value: "R$ 487k",
      change: "+24.1%",
      trend: "up",
      color: "#10b981",
    },
    {
      label: "Taxa de Sucesso",
      value: "98.7%",
      change: "0%",
      trend: "neutral",
      color: "#014733",
    },
    {
      label: "Tempo Médio (cert)",
      value: "4.2h",
      change: "-15.3%",
      trend: "down",
      color: "#006b4f",
    },
    {
      label: "Whitelists Ativas",
      value: "1,428",
      change: "+5.7%",
      trend: "up",
      color: "#caa34b",
    },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-400" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-[#006b4f]" />
          <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
            Estatísticas em Tempo Real
          </h3>
        </div>
        <Badge className="bg-green-100 text-green-700">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
          Ao Vivo
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="font-['Inter'] text-sm text-gray-600">
                {stat.label}
              </div>
              {getTrendIcon(stat.trend)}
            </div>
            <div className="flex items-baseline gap-2">
              <div
                className="font-['Inter'] text-2xl font-bold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className={`font-['Inter'] text-sm font-medium ${getTrendColor(stat.trend)}`}>
                {stat.change}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
