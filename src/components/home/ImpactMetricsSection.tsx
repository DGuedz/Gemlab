import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { TrendingUp, Users, Leaf, DollarSign, Coins, BarChart3, GraduationCap, Recycle, Landmark } from "lucide-react";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";

export function ImpactMetricsSection() {
  const metrics = [
    {
      icon: Coins,
      value: "R$ 1,6M",
      label: "Arrecadação Anual Formalizada",
      description: "CFEM e ISS calculados automaticamente via Smart Contract, revertendo evasão fiscal sistêmica",
      color: "#059669",
      bgColor: "bg-emerald-600"
    },
    {
      icon: BarChart3,
      value: "15-40%",
      label: "Valorização ESG Global",
      description: "Premium de mercado para esmeraldas certificadas com origem rastreável e conformidade ambiental",
      color: "#0891b2",
      bgColor: "bg-cyan-600"
    },
    {
      icon: GraduationCap,
      value: "150+",
      label: "Garimpeiros Formalizados",
      description: "Transformação da mão de obra extrativista em Gemólogos Digitais e Operadores Raman certificados",
      color: "#7c3aed",
      bgColor: "bg-purple-600"
    },
    {
      icon: Recycle,
      value: "100%",
      label: "Economia Circular Real",
      description: "Reaproveitamento de Talco Xisto (rejeito) em tijolos ecológicos e adubo remineralizador (IF Goiano)",
      color: "#16a34a",
      bgColor: "bg-green-600"
    }
  ];

  const initiatives = [
    {
      title: "Fundo Municipal On-Chain Auditável",
      description: "Parte da arrecadação formalizada direcionada automaticamente via Smart Contract para fundo público transparente, financiando reabilitação ambiental e pesquisa científica.",
      icon: Landmark,
      badge: "Governança Transparente"
    },
    {
      title: "Capacitação e Emprego Direto",
      description: "Programa 'Mãos de Pedra': escola de lapidação e design de joias para jovens 16-24 anos (parceria SENAI/MME), criando 50+ novos postos de trabalho qualificado.",
      icon: GraduationCap,
      badge: "Desenvolvimento Social"
    },
    {
      title: "Reaproveitamento de Rejeitos Minerais",
      description: "Projeto validado pelo IF Goiano transforma passivo ambiental (Talco Xisto) em produtos comerciais, gerando renda complementar e reduzindo impacto ecológico.",
      icon: Recycle,
      badge: "Sustentabilidade"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge className="mb-6 bg-emerald-600 text-white px-6 py-2.5">
            <TrendingUp className="h-4 w-4 mr-2" />
            Impacto Mensurável ESG
          </Badge>
          <h2 className="font-['Montserrat'] text-4xl lg:text-6xl font-bold text-[#1b1b1b] mb-6">
            Certificar para Prosperar: O Modelo Campos Verdes
          </h2>
          <p className="font-['Inter'] text-xl lg:text-2xl text-gray-600 leading-relaxed">
            Tecnologia que reverte o ciclo de informalidade, gerando{" "}
            <span className="font-bold text-emerald-600">valor econômico, conformidade fiscal e desenvolvimento sustentável</span>
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <Card 
                className="p-8 border-2 border-gray-200 bg-white hover:border-emerald-500 hover:shadow-xl transition-all duration-300 text-center group h-full"
              >
                <div className={`w-20 h-20 rounded-2xl ${metric.bgColor} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <metric.icon className="h-10 w-10 text-white" strokeWidth={2.5} />
                </div>
                <div className="font-['Montserrat'] text-5xl font-bold mb-2" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="font-['Inter'] font-bold text-lg text-[#1b1b1b] mb-4">
                  {metric.label}
                </div>
                <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                  {metric.description}
                </p>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Initiatives Cards */}
        <div className="space-y-6">
          {initiatives.map((initiative, index) => (
            <Card 
              key={index}
              className="p-8 border-2 border-gray-200 hover:border-[#006b4f] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-[#006b4f] p-4 rounded-xl flex-shrink-0 shadow-md">
                  <initiative.icon className="h-10 w-10 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b]">
                      {initiative.title}
                    </h3>
                    <Badge className="bg-[#006b4f]/10 text-[#006b4f] border-[#006b4f]/20">
                      {initiative.badge}
                    </Badge>
                  </div>
                  <p className="font-['Inter'] text-base text-gray-700 leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <Card className="mt-16 p-10 bg-gradient-to-r from-emerald-600 to-[#006b4f] text-white border-none">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-['Montserrat'] text-3xl font-bold mb-4">
              Blockchain como Infraestrutura de Desenvolvimento Regional
            </h3>
            <p className="font-['Inter'] text-lg leading-relaxed">
              O GEMLAB demonstra como tecnologia descentralizada pode resolver problemas reais de{" "}
              <span className="font-bold">evasão fiscal, informalidade e degradação ambiental</span>, 
              criando um modelo replicável de <span className="font-bold">Mineração 4.0 sustentável</span> 
              para o Brasil e América Latina.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}