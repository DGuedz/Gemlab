import { Crown, Shield, Building, Microscope, Code, Handshake, GraduationCap, Sparkles, BookOpen, Target, Award } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "strategic" | "technical" | "operational" | "partner";
  description: string;
  responsibilities: string[];
  icon: any;
  color: string;
  remuneration: string;
  source: string;
  duration: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "diego",
    name: "Diego Guedes",
    role: "Founder & CTO",
    category: "strategic",
    description: "Líder tecnológico e visionário do projeto GEMLAB.",
    responsibilities: [
      "Desenvolvimento do algoritmo SpectralHash",
      "Arquitetura de smart contracts",
      "Gestão da propriedade intelectual",
      "Liderança técnica"
    ],
    icon: Crown,
    color: "#caa34b",
    remuneration: "R$ 25.620,00",
    source: "Pró-Labore",
    duration: "12 meses"
  },
  {
    id: "marcelo",
    name: "Marcelo Silva",
    role: "Consultor Estratégico",
    category: "strategic",
    description: "Especialista em governança e compliance.",
    responsibilities: [
      "Blindagem regulatória Bacen/LIFT",
      "Governança corporativa",
      "Conexão com redes ReFi",
      "Compliance ISSB-IFRS"
    ],
    icon: Shield,
    color: "#006b4f",
    remuneration: "R$ 24.000,00",
    source: "Serviços PJ",
    duration: "6 meses"
  },
  {
    id: "carlos",
    name: "Carlos Vaz",
    role: "Articulador Institucional",
    category: "operational",
    description: "Responsável pela interface política.",
    responsibilities: [
      "Implementação do piloto",
      "Interface com prefeitura",
      "Engajamento de cooperativas",
      "Mitigação cultural"
    ],
    icon: Building,
    color: "#014733",
    remuneration: "R$ 18.000,00",
    source: "Bolsa SET-A",
    duration: "6 meses"
  },
  {
    id: "gemologo",
    name: "Gemólogo Sênior",
    role: "Responsável Técnico",
    category: "technical",
    description: "Especialista em validação científica.",
    responsibilities: [
      "Validação espectroscópica",
      "Emissão de laudos",
      "Ponte academia-empresa",
      "Lastro físico"
    ],
    icon: Microscope,
    color: "#7c3aed",
    remuneration: "R$ 15.000,00",
    source: "Bolsa DTI-B",
    duration: "5 meses"
  },
  {
    id: "dev",
    name: "Desenvolvedor Full Stack",
    role: "Desenvolvedor",
    category: "technical",
    description: "Especialista em desenvolvimento.",
    responsibilities: [
      "Plataforma GEMLAB",
      "Smart contracts",
      "Integração blockchain",
      "Metodologias científicas"
    ],
    icon: Code,
    color: "#2563eb",
    remuneration: "R$ 17.000,00",
    source: "Bolsa DTI-C",
    duration: "8 meses"
  },
  {
    id: "yatha",
    name: "Yatha Services",
    role: "Parceiro Técnico",
    category: "partner",
    description: "Análises espectroscópicas Raman.",
    responsibilities: [
      "Análises de alta precisão",
      "Workshop de capacitação",
      "Nivelamento técnico",
      "Validação SpectralHash"
    ],
    icon: Handshake,
    color: "#dc2626",
    remuneration: "R$ 20.780,00",
    source: "Serviços PJ",
    duration: "Contrato"
  },
  {
    id: "ufg",
    name: "UFG/IFG",
    role: "Parceiro Acadêmico",
    category: "partner",
    description: "Validação cruzada e infraestrutura.",
    responsibilities: [
      "Validação científica",
      "Acesso a laboratórios",
      "Recrutamento",
      "Selo acadêmico"
    ],
    icon: GraduationCap,
    color: "#4f46e5",
    remuneration: "Isento",
    source: "Termo de Cooperação",
    duration: "Parceria"
  }
];

export function TeamPage() {
  const categories = {
    strategic: "Estratégico",
    technical: "Técnico", 
    operational: "Operacional",
    partner: "Parceiros"
  };

  const categoryIcons = {
    strategic: Crown,
    technical: Microscope,
    operational: Building,
    partner: Handshake
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#006b4f] via-[#014733] to-[#1b1b1b] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-[#caa34b] text-white">
            Equipe de Excelência
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Conheça o Time que vai
            <span className="text-[#caa34b] block">Transformar a Gemologia</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Equipe multidisciplinar com expertise técnica, governança institucional 
            e conhecimento local
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-[#caa34b] hover:bg-[#b8923f]">
              <Sparkles className="mr-2" />
              Ver Projeto
            </Button>
            <Button variant="outline" className="border-white text-white">
              <BookOpen className="mr-2" />
              Documentação
            </Button>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <main className="container mx-auto px-4 py-20">
        {Object.entries(categories).map(([key, label]) => {
          const members = teamMembers.filter(m => m.category === key);
          if (members.length === 0) return null;
          const CategoryIcon = categoryIcons[key as keyof typeof categoryIcons];

          return (
            <section key={key} className="mb-16">
              <div className="text-center mb-12">
                <div className="flex justify-center items-center mb-4">
                  <CategoryIcon className="h-8 w-8 text-[#006b4f] mr-3" />
                  <Badge className="bg-[#006b4f] text-white">
                    {label}
                  </Badge>
                </div>
                <h2 className="text-3xl font-bold text-[#1b1b1b] mb-4">
                  Nível {label}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member) => (
                  <Card key={member.id} className="p-6 border-2 hover:border-[#006b4f]">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#006b4f] to-[#014733] flex items-center justify-center">
                        <member.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="bg-[#006b4f]/10 text-[#006b4f]" style={{ backgroundColor: `${member.color}10`, color: member.color }}>
                        {member.role}
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-[#1b1b1b] mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {member.description}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Responsabilidades:</h4>
                      <ul className="space-y-1">
                        {member.responsibilities.slice(0, 3).map((resp, index) => (
                          <li key={index} className="flex items-start">
                            <Target className="h-3 w-3 text-[#006b4f] mr-2 mt-1" />
                            <span className="text-xs text-gray-600">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs font-semibold">{member.remuneration}</p>
                          <p className="text-xs text-gray-500">{member.source}</p>
                        </div>
                        <Badge className="bg-[#caa34b]/10 text-[#caa34b]">
                          {member.duration}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}

        {/* Financial Summary */}
        <section className="bg-gradient-to-r from-[#006b4f] to-[#014733] rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Award className="h-12 w-12 text-[#caa34b] mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Investimento Total: R$ 135.400,00
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-white/10 backdrop-blur-md border-2 border-white/20">
                <h3 className="text-xl font-bold mb-4">💰 Subvenção (R$ 85.400,00)</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Pró-Labore</span>
                    <span className="font-semibold">R$ 25.620,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consultoria</span>
                    <span className="font-semibold">R$ 24.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Yatha Services</span>
                    <span className="font-semibold">R$ 20.780,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hardware IA</span>
                    <span className="font-semibold">R$ 15.000,00</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/10 backdrop-blur-md border-2 border-white/20">
                <h3 className="text-xl font-bold mb-4">🎓 Bolsas CNPq (R$ 50.000,00)</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Carlos Vaz</span>
                    <span className="font-semibold">R$ 18.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gemólogo</span>
                    <span className="font-semibold">R$ 15.000,00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dev Full Stack</span>
                    <span className="font-semibold">R$ 17.000,00</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}