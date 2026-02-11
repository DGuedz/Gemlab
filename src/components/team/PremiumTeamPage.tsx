import { Crown, Shield, Building, Microscope, Code, Handshake, GraduationCap, Sparkles, BookOpen, Target, Award, Globe, Rocket, Users, BarChart3, Lightbulb } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "leadership" | "technology" | "operations" | "research" | "partnerships";
  description: string;
  expertise: string[];
  icon: any;
  previousExperience: string[];
  impact: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "diego",
    name: "Diego Guedes",
    role: "Founder & CTO",
    category: "leadership",
    description: "Visionário por trás do algoritmo SpectralHash e arquiteto da revolução na rastreabilidade gemológica.",
    expertise: [
      "Blockchain Architecture",
      "Cryptographic Algorithms", 
      "IP Strategy",
      "Tech Leadership"
    ],
    icon: Crown,
    previousExperience: [
      "Patente SpectralHash Internacional",
      "15+ anos em tecnologia",
      "Especialista em Web3"
    ],
    impact: "Liderança técnica e estratégica global"
  },
  {
    id: "marcelo",
    name: "Marcelo Silva",
    role: "Consultor Estratégico",
    category: "leadership", 
    description: "Especialista em compliance regulatório com validação do Banco Central/LIFT Lab e expertise em Finanças Regenerativas.",
    expertise: [
      "Regulatory Compliance",
      "Central Bank Relations",
      "Sustainable Finance",
      "Corporate Governance"
    ],
    icon: Shield,
    previousExperience: [
      "Pesquisador LIFT Lab (Bacen)",
      "Expertise ISSB-IFRS",
      "Rede Global ReFi"
    ],
    impact: "Blindagem regulatória internacional"
  },
  {
    id: "carlos",
    name: "Carlos Vaz",
    role: "Articulador Institucional",
    category: "operations",
    description: "Especialista em articulação política e implementação de projetos de impacto social em comunidades produtoras.",
    expertise: [
      "Government Relations",
      "Community Engagement",
      "Project Implementation",
      "Stakeholder Management"
    ],
    icon: Building,
    previousExperience: [
      "10+ anos em desenvolvimento local",
      "Interface prefeituras/cooperativas",
      "Especialista em economia solidária"
    ],
    impact: "Ponte entre tecnologia e realidade local"
  },
  {
    id: "gemologo",
    name: "Gemólogo Sênior",
    role: "Responsável Técnico",
    category: "technology",
    description: "Especialista em gemologia com expertise em identificação, classificação e validação de esmeraldas.",
    expertise: [
      "Gem Identification",
      "Quality Grading",
      "Spectroscopic Analysis",
      "Technical Validation"
    ],
    icon: Microscope,
    previousExperience: [
      "Certificação internacional em gemologia",
      "15+ anos no setor gemológico",
      "Especialista em esmeraldas brasileiras"
    ],
    impact: "Excelência técnica e garantia de qualidade"
  },
  {
    id: "dev",
    name: "Desenvolvedor Full Stack",
    role: "Desenvolvedor Full Stack",
    category: "technology",
    description: "Especialista em desenvolvimento de plataformas web e mobile com foco em escalabilidade e performance.",
    expertise: [
      "Full Stack Development",
      "API Architecture",
      "Mobile Applications",
      "Performance Optimization"
    ],
    icon: Code,
    previousExperience: [
      "5+ anos em desenvolvimento web",
      "Experiência em startups scale-up",
      "Especialista em React/Node.js"
    ],
    impact: "Desenvolvimento robusto da plataforma"
  },
  {
    id: "yatha",
    name: "Yatha Services",
    role: "Parceiro Técnico",
    category: "partnerships",
    description: "Laboratório de ponta em análises espectroscópicas Raman e capacitação técnica de alta precisão.",
    expertise: [
      "Raman Analysis",
      "Technical Training",
      "Equipment Provision",
      "Quality Standards"
    ],
    icon: Handshake,
    previousExperience: [
      "Equipamentos de última geração",
      "Certificação internacional",
      "Parceiro de laboratórios globais"
    ],
    impact: "Infraestrutura técnica de excelência"
  },
  {
    id: "academia",
    name: "UFG/IFG",
    role: "Parceiro Acadêmico",
    category: "partnerships",
    description: "Consórcio acadêmico para validação científica cruzada, pesquisa e desenvolvimento de talentos.",
    expertise: [
      "Scientific Validation",
      "Talent Development",
      "Research Collaboration",
      "Academic Excellence"
    ],
    icon: GraduationCap,
    previousExperience: [
      "100+ pesquisadores",
      "Laboratórios de ponta",
      "Publicações internacionais"
    ],
    impact: "Base científica e desenvolvimento de talentos"
  }
];

export function PremiumTeamPage() {
  const categories = {
    leadership: "Liderança Executiva",
    technology: "Tecnologia & Engenharia", 
    operations: "Operações & Relações",
    research: "Pesquisa & Desenvolvimento",
    partnerships: "Parcerias Estratégicas"
  };

  const categoryIcons = {
    leadership: Crown,
    technology: Code,
    operations: Building,
    research: Microscope,
    partnerships: Handshake
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#006b4f] via-[#014733] to-[#0f2d23] text-white py-24">
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-[#caa34b] text-white px-6 py-2 text-lg">
            🚀 Time de Classe Mundial
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            O Ecossistema que vai
            <span className="text-[#caa34b] block">Revolucionar a Gemologia Global</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            US$ 1M investidos na equipe de elite que está construindo o padrão ouro 
            em rastreabilidade, tecnologia e impacto social para o setor gemológico mundial
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            <div className="text-center">
              <Globe className="h-12 w-12 text-[#caa34b] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Escala Global</h3>
              <p className="text-gray-300">Time com experiência internacional e visão mundial</p>
            </div>
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-[#caa34b] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">US$ 1M Investido</h3>
              <p className="text-gray-300">Recursos para atrair os melhores talentos globais</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-[#caa34b] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Excelência Comprovada</h3>
              <p className="text-gray-300">Track record de sucesso em startups unicórnio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <main className="container mx-auto px-4 py-24">
        {Object.entries(categories).map(([key, label]) => {
          const members = teamMembers.filter(m => m.category === key);
          if (members.length === 0) return null;
          const CategoryIcon = categoryIcons[key as keyof typeof categoryIcons];

          return (
            <section key={key} className="mb-24">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="flex items-center justify-center mb-6">
                  <CategoryIcon className="h-10 w-10 text-[#006b4f] mr-4" />
                  <Badge className="bg-[#006b4f] text-white px-6 py-2 text-lg">
                    {label}
                  </Badge>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1b1b1b] mb-6">
                  {label}
                </h2>
                <div className="w-24 h-1 bg-[#caa34b] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member) => (
                  <Card 
                    key={member.id}
                    className="p-8 border-2 border-gray-200/80 hover:border-[#006b4f] transition-all duration-300 hover:shadow-2xl bg-white/95 backdrop-blur-sm"
                  >
                    {/* Member Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#006b4f] to-[#014733] flex items-center justify-center shadow-lg">
                        <member.icon className="h-8 w-8 text-white" />
                      </div>
                      <Badge 
                        className="bg-[#006b4f]/10 text-[#006b4f] px-4 py-1 text-sm font-medium"
                        style={{ backgroundColor: '#006b4f10', color: '#006b4f' }}
                      >
                        {member.role}
                      </Badge>
                    </div>

                    {/* Member Info */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#1b1b1b] mb-3">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {member.description}
                      </p>
                    </div>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#1b1b1b] mb-3 uppercase tracking-wide">
                        Áreas de Excelência
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.slice(0, 4).map((exp, index) => (
                          <span 
                            key={index}
                            className="inline-block bg-[#006b4f]/10 text-[#006b4f] px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Previous Experience */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#1b1b1b] mb-3 uppercase tracking-wide">
                        Experiência Anterior
                      </h4>
                      <ul className="space-y-2">
                        {member.previousExperience.slice(0, 3).map((exp, index) => (
                          <li key={index} className="flex items-start">
                            <Target className="h-4 w-4 text-[#006b4f] mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                              {exp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center">
                        <Sparkles className="h-4 w-4 text-[#caa34b] mr-2" />
                        <span className="text-sm font-semibold text-[#caa34b]">
                          {member.impact}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}

        {/* Investment Impact */}
        <section className="bg-gradient-to-r from-[#006b4f] to-[#014733] rounded-3xl p-12 text-white shadow-2xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Rocket className="h-16 w-16 text-[#caa34b] mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                US$ 1.000.000 em Talento de Classe Mundial
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto">
                Investimento estratégico para construir o time que vai liderar a transformação 
                digital do setor gemológico global
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20">
                  <Users className="h-12 w-12 text-[#caa34b] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">15+ Especialistas</h3>
                  <p className="text-gray-200">Top talent global recrutado</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20">
                  <Lightbulb className="h-12 w-12 text-[#caa34b] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">5 PhDs</h3>
                  <p className="text-gray-200">Excelência em pesquisa e desenvolvimento</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20">
                  <Globe className="h-12 w-12 text-[#caa34b] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">8 Países</h3>
                  <p className="text-gray-200">Experiência internacional diversificada</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20">
                  <Award className="h-12 w-12 text-[#caa34b] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">100+ Anos</h3>
                  <p className="text-gray-200">Experiência combinada do time</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}