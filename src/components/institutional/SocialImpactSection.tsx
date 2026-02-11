import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Users,
  GraduationCap,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Heart,
} from "lucide-react";

export function SocialImpactSection() {
  const projects = [
    {
      name: "Mãos de Pedra",
      budget: "R$ 100.000,00",
      icon: GraduationCap,
      color: "#caa34b",
      objectives: [
        "Capacitação em lapidação profissional",
        "Formação de Operadores Raman",
        "Design de joias com esmeraldas certificadas",
        "Criação de 50+ postos de trabalho qualificado",
      ],
    },
    {
      name: "Mineração nas Escolas",
      budget: "R$ 140.000,00",
      icon: Users,
      color: "#006b4f",
      objectives: [
        "Transformação cultural no Ensino Médio",
        "Geociências como disciplina aplicada",
        "Pipeline de futuros profissionais especializados",
        "Alcance de 1.200+ estudantes/ano",
      ],
    },
  ];

  const additionalProjects = [
    {
      name: "Projeto VERDEJAR",
      description:
        "Capacitação de 200 jovens em artesanato mineral e design de joias",
      icon: Sparkles,
    },
    {
      name: "Escola-Empresa de Lapidação",
      description: "Hub de formação técnica em gemologia e lapidação avançada",
      icon: GraduationCap,
    },
    {
      name: "União Garimpeira - Sindicato Forte",
      description: "Organização representativa da classe garimpeira",
      icon: Users,
    },
    {
      name: "Fundo de Desenvolvimento Mineral",
      description:
        "Fundo municipal para capacitação, pesquisa e infraestrutura",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#006b4f] via-[#014733] to-[#1b1b1b] text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-white/20 border border-white/30 text-white px-6 py-2 backdrop-blur-sm">
            <Heart className="h-4 w-4 mr-2" />
            LASTRO SOCIAL COMPROVADO
          </Badge>
          <h2 className="font-['Montserrat'] text-6xl lg:text-7xl font-bold mb-6 text-[#caa34b]">
            R$ 240.000,00
          </h2>
          <p className="font-['Inter'] text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Investidos em Capital Humano via{" "}
            <span className="font-bold text-white">
              Fluxo Tributário Transparente
            </span>
          </p>
          <p className="font-['Inter'] text-lg text-white/70 mt-4 max-w-3xl mx-auto">
            O GEMLAB não é apenas tecnologia. É um mecanismo de{" "}
            <span className="font-bold text-[#caa34b]">
              desenvolvimento social
            </span>{" "}
            que converte tributos minerários (CFEM/ISS) em projetos de
            capacitação, educação e transformação cultural.
          </p>
        </div>

        {/* Projetos Principais */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="p-10 bg-white/15 backdrop-blur-md border-2 border-white/30 shadow-2xl hover:border-[#caa34b] transition-all duration-300 group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: project.color }}
                >
                  <project.icon className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Montserrat'] text-3xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p
                    className="font-['Inter'] text-4xl font-bold"
                    style={{ color: project.color }}
                  >
                    {project.budget}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {project.objectives.map((objective, objIdx) => (
                  <div key={objIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#caa34b] flex-shrink-0 mt-0.5" />
                    <p className="font-['Inter'] text-base text-white/90 leading-relaxed">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Portfólio Completo de Projetos Estruturantes */}
        <Card className="p-10 bg-white/10 backdrop-blur-sm border-2 border-white/20">
          <h3 className="font-['Montserrat'] text-3xl font-bold text-white mb-8 text-center">
            Portfólio Completo de Projetos Estruturantes (Campos Verdes 2050)
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {additionalProjects.map((project, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#caa34b]/20 flex items-center justify-center flex-shrink-0">
                  <project.icon className="h-6 w-6 text-[#caa34b]" />
                </div>
                <div>
                  <h4 className="font-['Inter'] font-bold text-white mb-2">
                    {project.name}
                  </h4>
                  <p className="font-['Inter'] text-sm text-white/80">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lista Completa dos 14 Projetos */}
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <h4 className="font-['Montserrat'] text-xl font-bold text-white mb-6">
              14 Iniciativas Estratégicas
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Plataforma de Rastreabilidade GEMLAB",
                "Oracle Fiscal Municipal",
                "Underground Vault (Deep Custody)",
                "Indicação Geográfica Digital (IG)",
                "Reaproveitamento do Talco Xisto",
                "Projeto Verdejar (Recuperação Ambiental)",
                "Fundo Municipal On-Chain",
                "DeFi Mineral (Crédito para Mineradores)",
                "Registry B2B Global",
                "Pesquisa de Sondagem de Minérios",
                "Museu de Mineração + Turismo",
                "Distrito Industrial Esmeraldífero",
                "Regularização das PLGs",
                "Selo Origem Campos Verdes (INPI)",
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#caa34b] flex-shrink-0" />
                  <p className="font-['Inter'] text-sm text-white/90">
                    {project}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Impacto Mensurável */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="text-4xl font-bold text-[#caa34b] mb-2">200+</div>
            <div className="font-['Inter'] text-sm text-white/80">
              Jovens Capacitados
            </div>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="text-4xl font-bold text-[#caa34b] mb-2">1,200+</div>
            <div className="font-['Inter'] text-sm text-white/80">
              Estudantes Alcançados
            </div>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="text-4xl font-bold text-[#caa34b] mb-2">50+</div>
            <div className="font-['Inter'] text-sm text-white/80">
              Postos de Trabalho
            </div>
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-center hover:bg-white/15 transition-all">
            <div className="text-4xl font-bold text-[#caa34b] mb-2">14</div>
            <div className="font-['Inter'] text-sm text-white/80">
              Projetos Estruturantes
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
