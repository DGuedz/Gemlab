import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { AlertTriangle, TrendingDown, MapPin, DollarSign } from "lucide-react";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";

export function ProblemSection() {
  const problems = [
    {
      icon: MapPin,
      stat: "99%",
      label: "Pedras Sem CEP",
      description: "Esmeraldas comercializadas sem rastreabilidade de origem, impossibilitando tributação e certificação"
    },
    {
      icon: DollarSign,
      stat: "R$ 1,6M",
      label: "Evasão Fiscal Anual",
      description: "Perda de arrecadação municipal em CFEM e ISS devido à informalidade sistêmica"
    },
    {
      icon: TrendingDown,
      stat: "17%",
      label: "ICMS Estadual",
      description: "Alta tributação incentiva comércio informal e desvaloriza o ativo na origem"
    },
    {
      icon: AlertTriangle,
      stat: "100%",
      label: "Zero Conformidade",
      description: "Ausência total de mecanismos de verificação científica e fiscal integrados"
    }
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-[var(--gray-50)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge className="mb-6 bg-red-100 text-red-700 border-red-200">
            <AlertTriangle className="h-4 w-4 mr-2" />
            O Problema Sistêmico
          </Badge>
          <h2 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-[var(--mineral-black)] mb-6">
            A Informalidade que Devasta o Setor
          </h2>
          <p className="font-['Inter'] text-xl text-[var(--gray-600)] leading-relaxed">
            A ausência de rastreabilidade científica e fiscal cria um ciclo vicioso de{" "}
            <span className="font-bold text-red-600">evasão, desvalorização e ilegalidade</span>
            {" "}que prejudica garimpeiros, município e mercado
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <Card 
                className="p-8 border-2 border-red-100 bg-white hover:border-red-300 transition-all duration-300 text-center group h-full"
              >
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors">
                  <problem.icon className="h-8 w-8 text-red-600" />
                </div>
                <div className="font-['Montserrat'] text-5xl font-bold text-red-600 mb-2">
                  {problem.stat}
                </div>
                <div className="font-['Inter'] font-bold text-lg text-[var(--mineral-black)] mb-3">
                  {problem.label}
                </div>
                <p className="font-['Inter'] text-sm text-[var(--gray-600)] leading-relaxed">
                  {problem.description}
                </p>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Impact Statement */}
        <FadeInWhenVisible delay={0.4}>
          <Card className="p-12 bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 shadow-lg">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="bg-red-600 text-white p-5 rounded-xl flex-shrink-0">
                <AlertTriangle className="h-10 w-10" />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="font-['Montserrat'] text-2xl font-bold text-[var(--mineral-black)]">
                  Ciclo de Informalidade e Desvalorização
                </h3>
                <p className="font-['Inter'] text-base text-[var(--gray-700)] leading-relaxed">
                  A <span className="font-bold">ausência de protocolo científico de origem</span> torna impossível 
                  distinguir esmeraldas éticas de pedras ilegais. Isso força joalherias internacionais a 
                  rejeitarem esmeraldas brasileiras, perpetuando a <span className="font-bold">informalidade, 
                  evasão fiscal e subvalorização</span> do ativo na origem.
                </p>
                <p className="font-['Inter'] text-base text-[var(--gray-700)] leading-relaxed">
                  O GEMLAB quebra esse ciclo ao criar a <span className="font-bold text-[var(--emerald-green)]">primeira infraestrutura 
                  de certificação científica + fiscal integrada</span>, tornando cada esmeralda verificável, 
                  tributável e rastreável do garimpo ao consumidor final.
                </p>
              </div>
            </div>
          </Card>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}