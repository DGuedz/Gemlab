import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  TrendingUp,
  DollarSign,
  Users,
  Building2,
  Sparkles,
  Globe,
  BarChart3,
  LineChart,
  PieChart,
  Activity,
} from "lucide-react";

export function EconomicImpact() {
  const benefits = [
    {
      title: "Precificação Justa",
      icon: DollarSign,
      color: "#caa34b",
      impact: "+15% a +40%",
      description:
        "Prêmio no mercado internacional devido à certificação e rastreabilidade ética comprovada",
    },
    {
      title: "Formalização",
      icon: Building2,
      color: "#006b4f",
      impact: "150+ garimpeiros",
      description:
        "Acesso a crédito bancário, exportação direta e mercados premium antes inacessíveis",
    },
    {
      title: "Valor Agregado",
      icon: Sparkles,
      color: "#014733",
      impact: "3x valor médio",
      description:
        "Esmeraldas certificadas alcançam valores significativamente superiores no varejo",
    },
    {
      title: "Mercado Global",
      icon: Globe,
      color: "#006b4f",
      impact: "Exportação ativa",
      description:
        "Reconhecimento internacional como fonte de esmeraldas éticas e rastreáveis",
    },
  ];

  const economicMetrics = [
    {
      metric: "Receita Anual Estimada",
      value: "[Projeção Confidencial]",
      growth: "+156%",
      period: "Projeção 2025",
      icon: BarChart3,
      iconColor: "#006b4f",
    },
    {
      metric: "Arrecadação Municipal",
      value: "[Confidencial]",
      growth: "+280%",
      period: "CFEM + ISS + Royalties",
      icon: PieChart,
      iconColor: "#014733",
    },
    {
      metric: "Empregos Gerados",
      value: "450+",
      growth: "+85%",
      period: "Diretos e indiretos",
      icon: Activity,
      iconColor: "#caa34b",
    },
    {
      metric: "Esmeraldas Certificadas",
      value: "1.247",
      growth: "+320%",
      period: "Últimos 12 meses",
      icon: LineChart,
      iconColor: "#006b4f",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#caa34b] text-white">
            Impacto Econômico
          </Badge>
          <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
            Valorização Real da Cadeia Produtiva
          </h2>
          <p className="font-['Inter'] text-lg text-gray-800">
            A certificação blockchain agrega valor em toda a cadeia, desde o
            garimpeiro até o mercado internacional premium
          </p>
        </div>

        {/* Economic Metrics Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {economicMetrics.map((item, index) => {
            const IconComponent = item.icon;
            // Extrair o número do percentual para a barra de progresso
            const progressValue = parseInt(item.growth.replace(/[+%]/g, ""));
            // Normalizar para escala de 0-100 (max 320% = 100%)
            const normalizedProgress = Math.min((progressValue / 320) * 100, 100);
            
            return (
              <Card
                key={index}
                className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300 hover:shadow-xl group"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Container */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.iconColor}15` }}
                  >
                    <IconComponent
                      className="h-7 w-7"
                      style={{ color: item.iconColor }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-['Inter'] font-bold text-[#1b1b1b]">
                        {item.metric}
                      </h3>
                      <Badge 
                        className="font-semibold shrink-0"
                        style={{ 
                          backgroundColor: `${item.iconColor}20`,
                          color: item.iconColor,
                          borderColor: item.iconColor
                        }}
                      >
                        {item.growth}
                      </Badge>
                    </div>

                    <p className="font-['Inter'] text-xs text-gray-600 mb-3">
                      {item.period}
                    </p>

                    {/* Progress Bar with SVG */}
                    <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <svg
                        className="absolute inset-0 w-full h-full"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient
                            id={`gradient-${index}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              style={{ stopColor: item.iconColor, stopOpacity: 1 }}
                            />
                            <stop
                              offset="100%"
                              style={{ stopColor: item.iconColor, stopOpacity: 0.6 }}
                            />
                          </linearGradient>
                        </defs>
                        <rect
                          x="0"
                          y="0"
                          width="100%"
                          height="100%"
                          fill={`url(#gradient-${index})`}
                          className="transition-all duration-1000 ease-out"
                          style={{
                            transform: `scaleX(${normalizedProgress / 100})`,
                            transformOrigin: "left",
                            animation: `fillProgress 1.5s ease-out forwards`,
                            animationDelay: `${index * 0.2}s`,
                          }}
                        />
                      </svg>
                    </div>

                    {/* Value Display */}
                    <div className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mt-3">
                      {item.value}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <style>{`
          @keyframes fillProgress {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
        `}</style>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <benefit.icon
                    className="h-8 w-8"
                    style={{ color: benefit.color }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-2">
                    {benefit.title}
                  </h3>
                  <div
                    className="font-['Inter'] text-2xl font-bold mb-3"
                    style={{ color: benefit.color }}
                  >
                    {benefit.impact}
                  </div>
                  <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Value Chain */}
        <Card className="p-8 bg-gradient-to-r from-[#006b4f] to-[#014733] text-white">
          <div className="text-center mb-8">
            <h3 className="font-['Inter'] text-2xl font-bold mb-2">
              Cadeia de Valor Digitalizada
            </h3>
            <p className="font-['Inter'] text-sm text-white/95">
              Agregação de valor através da certificação e tokenização
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { stage: "Extração", value: "Base", color: "#e5e7eb" },
              { stage: "Beneficiamento", value: "+50%", color: "#d1fae5" },
              { stage: "Classificação", value: "+90%", color: "#6ee7b7" },
              { stage: "Certificação", value: "+180%", color: "#fde68a" },
              { stage: "Tokenização", value: "+260%", color: "#86efac" },
            ].map((stage, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center group hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="font-['Inter'] text-xs text-white/90 mb-2 group-hover:text-white transition-colors duration-300">
                  {stage.stage}
                </div>
                <div
                  className="font-['Inter'] text-xl font-bold relative group-hover:scale-110 transition-all duration-300"
                  style={{
                    color: stage.color,
                    textShadow: "0 0 0 transparent",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = `0 0 20px ${stage.color}, 0 0 30px ${stage.color}, 0 0 40px ${stage.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = "0 0 0 transparent";
                  }}
                >
                  {stage.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="font-['Inter'] text-sm text-white/95">
              <span className="text-[#fde68a] font-semibold">260% de valorização</span>{" "}
              com rastreabilidade completa e certificação internacional
            </p>
          </div>
        </Card>

        {/* Strategic Positioning */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 border-2 border-[#caa34b]/20">
            <div className="flex items-start gap-4">
              <Users className="h-8 w-8 text-[#006b4f] flex-shrink-0" />
              <div>
                <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-3">
                  Campos Verdes: Referência Global em Mineração Ética
                </h3>
                <p className="font-['Inter'] text-gray-600 leading-relaxed mb-4">
                  O Protocolo GEMLAB posiciona Campos Verdes como modelo pioneiro
                  de mineração inteligente, rastreável e investível. A
                  combinação de tecnologia blockchain, certificação gemológica
                  internacional e governança transparente cria um ecossistema
                  completo que beneficia toda a cadeia produtiva.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#006b4f]/5 rounded-lg">
                    <div className="font-['Inter'] font-semibold text-[#006b4f] mb-1">
                      Indicação Geográfica
                    </div>
                    <p className="font-['Inter'] text-xs text-gray-600">
                      Processo em andamento para reconhecimento oficial
                    </p>
                  </div>
                  <div className="p-4 bg-[#014733]/5 rounded-lg">
                    <div className="font-['Inter'] font-semibold text-[#014733] mb-1">
                      Centro Integrado
                    </div>
                    <p className="font-['Inter'] text-xs text-gray-600">
                      Lapidação, joalheria e turismo mineral
                    </p>
                  </div>
                  <div className="p-4 bg-[#caa34b]/5 rounded-lg">
                    <div className="font-['Inter'] font-semibold text-[#caa34b] mb-1">
                      Capacitação Local
                    </div>
                    <p className="font-['Inter'] text-xs text-gray-600">
                      Formação de gemólogos e lapidários
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}