import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Coins,
  TrendingUp,
  Users,
  Leaf,
  GraduationCap,
  FlaskConical,
  ExternalLink,
  PieChart,
} from "lucide-react";

interface MunicipalFundProps {
  onNavigateToOracleDashboard?: () => void;
  onNavigateToGovernance?: () => void;
  onNavigateToProjects?: () => void;
}

export function MunicipalFund({ onNavigateToOracleDashboard, onNavigateToGovernance, onNavigateToProjects }: MunicipalFundProps = {}) {
  const fundAllocation = [
    {
      category: "Reabilitação Ambiental",
      percentage: 30,
      icon: Leaf,
      color: "#10b981",
      description: "Recuperação de áreas degradadas e reflorestamento",
    },
    {
      category: "Pesquisa Geológica",
      percentage: 25,
      icon: FlaskConical,
      color: "#006b4f",
      description: "Mapeamento de jazidas e estudos mineralógicos",
    },
    {
      category: "Capacitação Técnica",
      percentage: 25,
      icon: GraduationCap,
      color: "#caa34b",
      description: "Formação de lapidários, ourives e gemólogos",
    },
    {
      category: "Infraestrutura",
      percentage: 20,
      icon: Users,
      color: "#014733",
      description: "Centro Integrado da Mineração e equipamentos",
    },
  ];

  const metrics = [
    {
      label: "Arrecadação Projetada/Ano",
      value: "[Dados Internos]",
      icon: Coins,
      color: "#006b4f",
    },
    {
      label: "Garimpeiros Formalizados",
      value: "150+",
      icon: Users,
      color: "#014733",
    },
    {
      label: "Prêmio de Mercado",
      value: "15-40%",
      icon: TrendingUp,
      color: "#caa34b",
    },
    {
      label: "Transparência",
      value: "100%",
      icon: PieChart,
      color: "#10b981",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#006b4f] text-white">
            Fundo Municipal On-Chain
          </Badge>
          <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
            Transparência Fiscal Total
          </h2>
          <p className="font-['Inter'] text-lg text-gray-800">
            CFEM, ISS e royalties depositados automaticamente em carteira
            municipal auditável. Toda aplicação de recursos rastreável via
            blockchain.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="p-6 text-center border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${metric.color}15` }}
              >
                <metric.icon className="h-6 w-6" style={{ color: metric.color }} />
              </div>
              <div
                className="font-['Inter'] text-2xl font-bold mb-1"
                style={{ color: metric.color }}
              >
                {metric.value}
              </div>
              <div className="font-['Inter'] text-sm text-gray-600">
                {metric.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Fund Allocation */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-8 text-center">
            Alocação de Recursos
          </h3>
          <div className="space-y-4">
            {fundAllocation.map((item, index) => (
              <Card key={index} className="p-6 border-2 border-[#e5e7eb]">
                <div className="flex items-center gap-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="h-8 w-8" style={{ color: item.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-['Inter'] font-semibold text-[#1b1b1b]">
                        {item.category}
                      </h4>
                      <Badge
                        className="font-['Inter']"
                        style={{ backgroundColor: item.color, color: "white" }}
                      >
                        {item.percentage}%
                      </Badge>
                    </div>
                    <p className="font-['Inter'] text-sm text-gray-600 mb-3">
                      {item.description}
                    </p>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-4">
            Impacto Regional
          </h3>
          <p className="font-['Inter'] text-gray-600 leading-relaxed mb-6">
            O Fundo Municipal financia diretamente o{" "}
            <span className="text-[#006b4f] font-semibold">
              Projeto Avança Campos Verdes
            </span>{" "}
            e a implantação do{" "}
            <span className="text-[#006b4f] font-semibold">
              Centro Integrado da Mineração
            </span>
            , promovendo formação de mão de obra, turismo mineral, comércio
            local e busca pela Indicação Geográfica das Esmeraldas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-[#006b4f] text-white px-4 py-2">
              Mineração Ética
            </Badge>
            <Badge className="bg-[#014733] text-white px-4 py-2">
              Desenvolvimento Sustentável
            </Badge>
            <Badge className="bg-[#caa34b] text-white px-4 py-2">
              Transparência Total
            </Badge>
          </div>
          <div className="mt-6">
            <Button
              className="bg-[#006b4f] text-white hover:bg-[#014733]"
              onClick={onNavigateToProjects}
            >
              Ver Projetos de Impacto Local
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
