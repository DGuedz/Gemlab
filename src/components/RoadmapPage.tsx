import {
  Calendar,
  CheckCircle2,
  Clock,
  TrendingUp,
  Shield,
  Leaf,
  DollarSign,
  Users,
  Building2,
  BookOpen,
  MapPin,
  Target,
  Briefcase,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Footer } from "./Footer";
import { useState } from "react";

interface Project {
  title: string;
  dimension: string;
  dimensionColor: string;
  dimensionIcon: any;
  milestones: string;
  period: string;
  startMonth: string;
}

export function RoadmapPage() {
  const [isOpen, setIsOpen] = useState(false);

  const dimensionIcons: Record<string, any> = {
    Legal: Shield,
    Política: Building2,
    "Meio Ambiente": Leaf,
    Economia: DollarSign,
    Social: Users,
    Tecnologia: Target,
    Sociocultural: BookOpen,
  };

  const dimensionColors: Record<string, string> = {
    Legal: "#006b4f",
    Política: "#014733",
    "Meio Ambiente": "#10b981",
    Economia: "#caa34b",
    Social: "#8b5cf6",
    Tecnologia: "#3b82f6",
    Sociocultural: "#ec4899",
  };

  const q1Projects: Project[] = [
    {
      title: "Programa de Desenvolvimento Sustentável do APL",
      dimension: "Legal",
      dimensionColor: dimensionColors.Legal,
      dimensionIcon: dimensionIcons.Legal,
      milestones: "Início da elaboração dos projetos de desenvolvimento sustentável.",
      period: "2025–2050",
      startMonth: "Jan/26",
    },
    {
      title: "Fortalecimento da Governança e Transformação da Mineração",
      dimension: "Política",
      dimensionColor: dimensionColors.Política,
      dimensionIcon: dimensionIcons.Política,
      milestones:
        "Início da criação e implementação das políticas públicas de desenvolvimento sustentável.",
      period: "2025–2050",
      startMonth: "Jan/26",
    },
    {
      title: "Regularização das PLGs",
      dimension: "Legal",
      dimensionColor: dimensionColors.Legal,
      dimensionIcon: dimensionIcons.Legal,
      milestones:
        "Constituição da equipe, planejamento e análise inicial da legislação para superar entraves legais.",
      period: "2025–2028",
      startMonth: "Jan/26",
    },
    {
      title: "Regulamentação Ambiental das Esmeraldas",
      dimension: "Meio Ambiente",
      dimensionColor: dimensionColors["Meio Ambiente"],
      dimensionIcon: dimensionIcons["Meio Ambiente"],
      milestones:
        "Início da elaboração da pesquisa e aquisição de conhecimento para solicitar instrução normativa à SEMAD.",
      period: "2025–2050",
      startMonth: "Jan/26",
    },
    {
      title: "Investimento via Mantenedora",
      dimension: "Economia",
      dimensionColor: dimensionColors.Economia,
      dimensionIcon: dimensionIcons.Economia,
      milestones: "Início da pesquisa de fontes de investimento.",
      period: "2025–2050",
      startMonth: "Jan/26",
    },
    {
      title: "Audiências Públicas e Participação Cívica",
      dimension: "Social",
      dimensionColor: dimensionColors.Social,
      dimensionIcon: dimensionIcons.Social,
      milestones:
        "Preparação de material educativo para campanhas de conscientização cívica.",
      period: "2026–2050",
      startMonth: "Jan/26",
    },
    {
      title: "Garimpo Legalizado e Sustentável",
      dimension: "Legal",
      dimensionColor: dimensionColors.Legal,
      dimensionIcon: dimensionIcons.Legal,
      milestones:
        "Início da fase de sensibilização e conscientização sobre normas legais e boas práticas.",
      period: "2025–2050",
      startMonth: "Jan/26",
    },
    {
      title: "Planejamento Participativo",
      dimension: "Social",
      dimensionColor: dimensionColors.Social,
      dimensionIcon: dimensionIcons.Social,
      milestones:
        "Implementação da divulgação para promover o planejamento colaborativo.",
      period: "2025–2050",
      startMonth: "Jan/26",
    },
  ];

  const q2Projects: Project[] = [
    {
      title: "Fortalecimento com Apoio da ANM",
      dimension: "Legal",
      dimensionColor: dimensionColors.Legal,
      dimensionIcon: dimensionIcons.Legal,
      milestones:
        "Início da análise de viabilidade para a criação de uma agência regional da ANM para apoiar o APL.",
      period: "2026–2050",
      startMonth: "Mai/26",
    },
    {
      title: "Mineração e Economia Circular",
      dimension: "Política",
      dimensionColor: dimensionColors.Política,
      dimensionIcon: dimensionIcons.Política,
      milestones:
        "Estabelecimento da equipe operacional para definir e implementar políticas públicas de mineração sustentável.",
      period: "2025–2050",
      startMonth: "Abr/26",
    },
    {
      title: "Turismo Mineral e Divulgação",
      dimension: "Social",
      dimensionColor: dimensionColors.Social,
      dimensionIcon: dimensionIcons.Social,
      milestones:
        "Início do desenvolvimento do Plano de Projeto, conteúdos de marketing, design e busca por parcerias para fortalecer o turismo.",
      period: "2025–2050",
      startMonth: "Abr/26",
    },
    {
      title: "Visão para o Futuro Mineral",
      dimension: "Social",
      dimensionColor: dimensionColors.Social,
      dimensionIcon: dimensionIcons.Social,
      milestones:
        "Formação da equipe responsável pelo planejamento e sensibilização dos atores sobre a necessidade de planejamento de longo prazo.",
      period: "2026–2050",
      startMonth: "Abr/26",
    },
    {
      title: "Licenciamento Ambiental Sustentável",
      dimension: "Meio Ambiente",
      dimensionColor: dimensionColors["Meio Ambiente"],
      dimensionIcon: dimensionIcons["Meio Ambiente"],
      milestones:
        "Finalização da Versão Final do termo de compromisso ambiental revisado.",
      period: "2025–2050",
      startMonth: "Abr/26",
    },
  ];

  const q3Projects: Project[] = [
    {
      title: "Acelera Mineração Campos Verdes",
      dimension: "Legal",
      dimensionColor: dimensionColors.Legal,
      dimensionIcon: dimensionIcons.Legal,
      milestones: "Instalação formal do Conselho Municipal de Mineração.",
      period: "2024–2050",
      startMonth: "Jun/26",
    },
    {
      title: "União Garimpeira - Sindicato Forte",
      dimension: "Social",
      dimensionColor: dimensionColors.Social,
      dimensionIcon: dimensionIcons.Social,
      milestones:
        "Início do Estudo de viabilidade jurídica e legal para a criação do sindicato da classe garimpeira.",
      period: "2026–2050",
      startMonth: "Jul/26",
    },
    {
      title: "Captação de Recursos",
      dimension: "Economia",
      dimensionColor: dimensionColors.Economia,
      dimensionIcon: dimensionIcons.Economia,
      milestones: "Elaboração do projeto detalhado para captação de recursos.",
      period: "2024–2027",
      startMonth: "Set/26",
    },
    {
      title: "Formação Profissional / Escola de Lapidação",
      dimension: "Economia",
      dimensionColor: dimensionColors.Economia,
      dimensionIcon: dimensionIcons.Economia,
      milestones:
        "Início da construção, locação ou adaptação de um imóvel para o Centro de Estudos e Formação.",
      period: "2024–2050",
      startMonth: "Jul/26",
    },
    {
      title: "Fundo de Desenvolvimento Mineral",
      dimension: "Economia",
      dimensionColor: dimensionColors.Economia,
      dimensionIcon: dimensionIcons.Economia,
      milestones:
        "Término da estruturação do Fundo, com início previsto para Jan/27.",
      period: "2024–2050",
      startMonth: "Set/26",
    },
  ];

  const q4Projects: Project[] = [
    {
      title: "Infraestrutura e Turismo (Museu/Mercado)",
      dimension: "Economia",
      dimensionColor: dimensionColors.Economia,
      dimensionIcon: dimensionIcons.Economia,
      milestones:
        "Elaboração final dos projetos autossustentáveis e busca ativa de fontes de recursos para as fases iniciais de infraestrutura.",
      period: "2025–2050",
      startMonth: "Out/26",
    },
    {
      title: "Fortalecimento do Garimpo",
      dimension: "Política",
      dimensionColor: dimensionColors.Política,
      dimensionIcon: dimensionIcons.Política,
      milestones:
        "Início das discussões e elaboração das propostas de políticas públicas para evitar evasão de impostos e regularizar áreas de mineração.",
      period: "2025–2050",
      startMonth: "Out/26",
    },
    {
      title: "Pesquisa de Sondagem",
      dimension: "Tecnologia",
      dimensionColor: dimensionColors.Tecnologia,
      dimensionIcon: dimensionIcons.Tecnologia,
      milestones:
        "Continuação da busca por parcerias para mapeamento geológico e plano de sondagem.",
      period: "2025–2050",
      startMonth: "Out/26",
    },
    {
      title: "Projetos Sociais (Mãos de Pedra e Mineração nas Escolas)",
      dimension: "Sociocultural",
      dimensionColor: dimensionColors.Sociocultural,
      dimensionIcon: dimensionIcons.Sociocultural,
      milestones:
        "Manutenção e Gestão Contínua. Implementação das campanhas de divulgação e formação de multiplicadores.",
      period: "2025–2050",
      startMonth: "Out/26",
    },
  ];

  const renderProjectCard = (project: Project) => {
    const Icon = project.dimensionIcon;
    return (
      <Card
        key={project.title}
        className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300 hover:shadow-lg group"
      >
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${project.dimensionColor}15` }}
          >
            <Icon className="h-6 w-6" style={{ color: project.dimensionColor }} />
          </div>
          <div className="flex-1">
            <h4 className="font-['Inter'] font-bold text-[#1b1b1b] mb-2 group-hover:text-[#006b4f] transition-colors">
              {project.title}
            </h4>
            <Badge
              className="text-white text-xs mb-3"
              style={{ backgroundColor: project.dimensionColor }}
            >
              {project.dimension}
            </Badge>
          </div>
        </div>
        <p className="font-['Inter'] text-sm text-gray-600 mb-4 leading-relaxed">
          {project.milestones}
        </p>
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-gray-500">
            <Calendar className="h-4 w-4" />
            <span className="font-['Inter']">{project.startMonth}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Clock className="h-4 w-4" />
            <span className="font-['Inter']">{project.period}</span>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#006b4f] via-[#014733] to-[#1b1b1b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#caa34b] text-white px-4 py-2 text-sm">
              Campos Verdes 2050
            </Badge>
            <h1 className="font-['Inter'] text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Roadmap de Projetos{" "}
              <span className="text-[#caa34b]">Estruturantes</span>
            </h1>
            <p className="font-['Inter'] text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Cronograma estratégico do APL Campos Verdes com{" "}
              <strong className="text-white">22 iniciativas</strong> organizadas
              em 4 trimestres de 2026, focadas em governança, sustentabilidade e
              desenvolvimento econômico
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                <MapPin className="h-5 w-5 text-[#caa34b]" />
                <span className="font-['Inter']">Campos Verdes – GO</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                <Target className="h-5 w-5 text-[#caa34b]" />
                <span className="font-['Inter']">Visão 2025–2050</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            <Card className="p-6 bg-white/10 backdrop-blur-md border-2 border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <Briefcase className="h-8 w-8 text-[#caa34b] mx-auto mb-3" />
              <div className="font-['Inter'] text-2xl font-bold mb-1">22</div>
              <div className="font-['Inter'] text-sm text-gray-200">
                Projetos Estruturantes
              </div>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-md border-2 border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <Calendar className="h-8 w-8 text-[#caa34b] mx-auto mb-3" />
              <div className="font-['Inter'] text-2xl font-bold mb-1">4</div>
              <div className="font-['Inter'] text-sm text-gray-200">
                Trimestres (2026)
              </div>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-md border-2 border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <TrendingUp className="h-8 w-8 text-[#caa34b] mx-auto mb-3" />
              <div className="font-['Inter'] text-2xl font-bold mb-1">7</div>
              <div className="font-['Inter'] text-sm text-gray-200">
                Dimensões Estratégicas
              </div>
            </Card>
            <Card className="p-6 bg-white/10 backdrop-blur-md border-2 border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <CheckCircle2 className="h-8 w-8 text-[#caa34b] mx-auto mb-3" />
              <div className="font-['Inter'] text-2xl font-bold mb-1">2050</div>
              <div className="font-['Inter'] text-sm text-gray-200">
                Horizonte de Impacto
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-gray-50">
        {/* Q1 2026 */}
        <section className="py-20 border-b-4 border-[#006b4f]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#006b4f] to-[#014733] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="font-['Montserrat'] text-2xl font-bold text-white">
                    Q1
                  </span>
                </div>
                <div>
                  <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-2">
                    Janeiro – Março 2026
                  </h2>
                  <p className="font-['Inter'] text-lg text-gray-600">
                    Fundamentos Legais, Governança e Financiamento
                  </p>
                  <Badge className="mt-2 bg-[#006b4f] text-white">
                    8 Projetos
                  </Badge>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {q1Projects.map((project) => renderProjectCard(project))}
              </div>
            </div>
          </div>
        </section>

        {/* Q2 2026 */}
        <section className="py-20 bg-white border-b-4 border-[#014733]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#014733] to-[#006b4f] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="font-['Montserrat'] text-2xl font-bold text-white">
                    Q2
                  </span>
                </div>
                <div>
                  <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-2">
                    Abril – Junho 2026
                  </h2>
                  <p className="font-['Inter'] text-lg text-gray-600">
                    Estruturação Operacional e Turística
                  </p>
                  <Badge className="mt-2 bg-[#014733] text-white">
                    5 Projetos
                  </Badge>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {q2Projects.map((project) => renderProjectCard(project))}
              </div>
            </div>
          </div>
        </section>

        {/* Q3 2026 */}
        <section className="py-20 border-b-4 border-[#caa34b]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#caa34b] to-[#b8923f] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="font-['Montserrat'] text-2xl font-bold text-white">
                    Q3
                  </span>
                </div>
                <div>
                  <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-2">
                    Julho – Setembro 2026
                  </h2>
                  <p className="font-['Inter'] text-lg text-gray-600">
                    Consolidação Institucional e Social
                  </p>
                  <Badge className="mt-2 bg-[#caa34b] text-white">
                    5 Projetos
                  </Badge>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {q3Projects.map((project) => renderProjectCard(project))}
              </div>
            </div>
          </div>
        </section>

        {/* Q4 2026 */}
        <section className="py-20 bg-white border-b-4 border-[#1b1b1b]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1b1b1b] to-[#404040] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="font-['Montserrat'] text-2xl font-bold text-white">
                    Q4
                  </span>
                </div>
                <div>
                  <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-2">
                    Outubro – Dezembro 2026
                  </h2>
                  <p className="font-['Inter'] text-lg text-gray-600">
                    Implementação de Infraestrutura e Gestão do Legado
                  </p>
                  <Badge className="mt-2 bg-[#1b1b1b] text-white">
                    4 Projetos
                  </Badge>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {q4Projects.map((project) => renderProjectCard(project))}
              </div>
            </div>
          </div>
        </section>

        {/* Legend Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-8 text-center">
                Dimensões Estratégicas
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(dimensionColors).map(([dimension, color]) => {
                  const Icon = dimensionIcons[dimension];
                  return (
                    <div
                      key={dimension}
                      className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 bg-white hover:border-[#006b4f] transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        <Icon className="h-5 w-5" style={{ color }} />
                      </div>
                      <span className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                        {dimension}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#006b4f] to-[#014733] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold mb-6">
                Faça Parte da Transformação
              </h2>
              <p className="font-['Inter'] text-xl text-gray-200 mb-8">
                O APL Campos Verdes 2050 está construindo o futuro da mineração
                sustentável no Brasil. Junte-se a nós nesta jornada de impacto
                social, econômico e ambiental.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#caa34b] text-white hover:bg-[#b8923f] px-8"
                >
                  <Target className="h-5 w-5 mr-2" />
                  Baixar Roadmap Completo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-[#006b4f] bg-white hover:bg-white/90 px-8 font-semibold"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Ver Documentação
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}