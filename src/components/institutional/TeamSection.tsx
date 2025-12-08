import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Users, Code, Leaf, Heart, Award, Building } from "lucide-react";

export function TeamSection() {
  const team = [
    {
      name: "Diego Guedes",
      role: "CTO & Founder",
      pillar: "Liderança Tecnológica",
      contribution: "Arquiteto da espinha dorsal do GEMLAB, responsável pelo SpectralHash e Smart Contracts, garantindo a soberania tecnológica.",
      icon: Code,
      color: "#7c3aed",
      bgColor: "bg-purple-600"
    },
    {
      name: "Leonardo Oliveira",
      role: "Presidente COOPESMERALDA",
      pillar: "Lastro Físico/Institucional",
      contribution: "Garante o lastro físico da gema (RWA) e o alinhamento com a comunidade mineradora (Oráculo Operacional).",
      icon: Building,
      color: "#006b4f",
      bgColor: "bg-[#006b4f]"
    },
    {
      name: "Raiane Ferraz",
      role: "Engenheira Ambiental",
      pillar: "Conformidade ESG/Ambiental",
      contribution: "Lidera o projeto de Economia Circular Real, transformando o rejeito Talco Xisto em tijolos ecológicos e adubo mineral em parceria com o IF Goiano.",
      icon: Leaf,
      color: "#16a34a",
      bgColor: "bg-green-600"
    },
    {
      name: "Katson Xavier",
      role: "Liderança Comunitária",
      pillar: "Social/Comunitária",
      contribution: "Assegura a licença social para operar e o engajamento de stakeholders locais, mitigando riscos sociais.",
      icon: Heart,
      color: "#dc2626",
      bgColor: "bg-red-600"
    },
    {
      name: "Equipe de Capacitação",
      role: "Formação Técnica",
      pillar: "Capacitação",
      contribution: "Mão de obra extrativista está sendo transformada em Gemólogos Digitais e Operadores Raman, com contratação imediata.",
      icon: Award,
      color: "#caa34b",
      bgColor: "bg-[#caa34b]"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-6 bg-[#006b4f] text-white px-6 py-2.5">
            <Users className="h-4 w-4 mr-2" />
            Consórcio Interdisciplinar
          </Badge>
          <h2 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-[#1b1b1b] mb-6">
            Equipe que Garante Credibilidade ao Protocolo
          </h2>
          <p className="font-['Inter'] text-xl text-gray-600 leading-relaxed">
            Alinhamento estratégico de competências necessárias para certificação de{" "}
            <span className="font-bold text-[#006b4f]">Ativos do Mundo Real (RWA)</span>: 
            tecnologia, lastro físico, compliance ambiental e licença social
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="p-8 border-2 border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${member.bgColor} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <member.icon className="h-8 w-8" style={{ color: member.color }} />
              </div>

              {/* Pillar Badge */}
              <Badge 
                className="mb-4 text-xs"
                style={{ 
                  backgroundColor: `${member.color}15`, 
                  color: member.color,
                  borderColor: `${member.color}30`
                }}
              >
                {member.pillar}
              </Badge>

              {/* Name & Role */}
              <h3 className="font-['Montserrat'] text-xl font-bold text-[#1b1b1b] mb-2">
                {member.name}
              </h3>
              <p className="font-['Inter'] text-sm mb-4" style={{ color: member.color }}>
                {member.role}
              </p>

              {/* Contribution */}
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                {member.contribution}
              </p>
            </Card>
          ))}
        </div>

        {/* Bottom Highlight */}
        <Card className="p-10 bg-gradient-to-br from-[#006b4f] to-[#014733] text-white border-none">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl flex-shrink-0">
              <Users className="h-12 w-12" />
            </div>
            <div className="flex-1">
              <h3 className="font-['Montserrat'] text-2xl font-bold mb-4">
                Modelo de Governança Multistakeholder
              </h3>
              <p className="font-['Inter'] text-lg leading-relaxed mb-4">
                A arquitetura GEMLAB exige colaboração entre perfis diversos (tecnólogo, custodiante, 
                órgão público, comunidade) para garantir que cada atestação (Origem, Ciência, Custódia) 
                seja validada por especialista independente.
              </p>
              <p className="font-['Inter'] text-lg leading-relaxed">
                Esta estrutura cria <span className="font-bold text-[#caa34b]">incentivos alinhados</span> e{" "}
                <span className="font-bold text-[#caa34b]">resistência à captura</span>, essencial para 
                compliance regulatório (CVM/Banco Central) e confiança de investidores institucionais.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
