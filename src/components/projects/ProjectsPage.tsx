import { motion } from "motion/react";
import { 
  GraduationCap, 
  Users, 
  Sprout, 
  Building2, 
  TrendingUp, 
  Heart,
  Landmark,
  Gem,
  Lightbulb,
  Recycle,
  MapPin,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  DollarSign,
  Calendar,
  Award
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import camposVerdesMap from "figma:asset/91d8e4ef371a36b8ffd083fad2b972e4d137e6f5.png";
import feiraCoopesmeraldaImage from "figma:asset/c6ed4c54c8ac12fc2d8d39bc29e01a41c47e9028.png";

interface ProjectsPageProps {
  onNavigateToGovernance?: () => void;
  onNavigateToEcosystem?: () => void;
}

export function ProjectsPage({ onNavigateToGovernance, onNavigateToEcosystem }: ProjectsPageProps = {}) {
  const socialProjects = [
    {
      id: "verdejar",
      name: "Projeto VERDEJAR",
      subtitle: "Capacitação + Geração de Renda",
      icon: Gem,
      color: "#006b4f",
      image: "https://images.unsplash.com/photo-1624588057318-5f1b2eb81012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwamV3ZWxyeSUyMG1ha2luZyUyMGdlbXN0b25lc3xlbnwxfHx8fDE3NjQwNjg1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Capacitação profissional em artesanato mineral, design, fabricação de joias, lapidação e beneficiamento de esmeraldas e dejetos minerais.",
      goals: [
        "Qualificar adolescentes e jovens em lapidação, ourivesaria e artesanato mineral",
        "Criar loja local, site e loja virtual para comercializar as peças produzidas",
        "Destinar parte do faturamento para compra de equipamentos para os alunos",
        "Combater desemprego e doenças herdadas do garimpo (sílica pulmonar)"
      ],
      modules: [
        "Lapidação Profissional",
        "Ourivesaria Completa (cravação, acabamento)",
        "Design e Criação de Joias",
        "Artesanato em Pedras e Rochas",
        "Empreendedorismo e Gestão"
      ]
    },
    {
      id: "maos-de-pedra",
      name: "Projeto Mãos de Pedra",
      subtitle: "Pilar do Lastro Social do RWA • Governança Regenerativa",
      icon: Users,
      color: "#014733",
      image: "https://images.unsplash.com/photo-1526907279934-3c9d2e53170f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1zdG9uZSUyMGZhY2V0aW5nJTIwbWFjaGluZSUyMGhhbmRzJTIwc3RvbmV8ZW58MXx8fHwxNzY0MDcwNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Escola de alta joalheria construída diretamente na mina. Capacitação profissional em lapidação, design, empreendedorismo e operação de equipamentos científicos (Operadores Raman). Transforma extração mineral em desenvolvimento humano, garantindo que o ativo bruto se torne um ativo certificado com +40% de valorização.",
      goals: [
        "Formar Operadores Raman certificados que geram o SpectralHash (gêmeo digital da esmeralda via assinatura molecular)",
        "Capacitar lapidários profissionais com técnicas modernas de transformação de esmeralda bruta",
        "Criar pipeline contínuo de mão de obra qualificada a partir do projeto 'Mineração nas Escolas'",
        "Gerar renda estável através da certificação gemológica e agregação de valor local (+40% de valorização)",
        "Atender ODS da ONU e mitigar Risco ESG para atração de fundos de investimento globais"
      ],
      impact: "O 'Mãos de Pedra' é um dos pilares de sustentabilidade do ecossistema de Governança Regenerativa e faz parte do Lastro Social do Real World Asset (RWA) lastreado em esmeraldas. Financiado pelo CFEM/ISS recuperado e pelo premium de valorização dos tokens, ele funciona como uma ferramenta de blindagem jurídica e atração de investimento, criando um ciclo regenerativo onde o lucro do mineral retorna para a formação de jovens. Em vez de exportar apenas a pedra bruta, ele ensina a criar o diamante lapidado, garantindo que o valor e o conhecimento permaneçam e se multipliquem localmente.",
      modules: [
        "Lapidação Profissional de Esmeraldas",
        "Operação de Espectroscopia Raman",
        "Design e Criação de Joias",
        "Empreendedorismo e Gestão",
        "Certificação Científica GEMLAB"
      ]
    },
    {
      id: "mineracao-escolas",
      name: "Mineração nas Escolas",
      subtitle: "Transformação Cultural de Longo Prazo",
      icon: GraduationCap,
      color: "#caa34b",
      image: "https://images.unsplash.com/photo-1705727210721-961cc64a6895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBzY2llbmNlJTIwbGFifGVufDF8fHx8MTc2NDA2ODczN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Estimula interesse em Geociências e Mineração Sustentável no Ensino Médio, criando pipeline de futuros técnicos e Gemólogos Digitais.",
      goals: [
        "Introduzir Geociências no currículo escolar local",
        "Mitigar Risco ESG através da educação ambiental",
        "Criar pipeline de técnicos qualificados para GEMLAB e COOPESMERALDA",
        "Transformar a percepção cultural sobre mineração sustentável"
      ],
      ods: ["ODS 4 - Educação de Qualidade", "ODS 8 - Trabalho Decente", "ODS 12 - Consumo Responsável"]
    }
  ];

  const infrastructureProjects = [
    {
      name: "Museu de Mineração",
      icon: Landmark,
      description: "Espaço cultural e educativo sobre a história mineral de Campos Verdes",
      status: "Em planejamento",
      image: "https://images.unsplash.com/photo-1735991088706-08d545e36ee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRvdXJpc20lMjBoZXJpdGFnZXxlbnwxfHx8fDE3NjQwNjY3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Mercado Municipal de Artesanato Mineral",
      icon: Building2,
      description: "Centro de comercialização de joias e artesanato local",
      status: "Em desenvolvimento",
      image: feiraCoopesmeraldaImage
    },
    {
      name: "Rotas Turísticas",
      icon: MapPin,
      description: "Infraestrutura para turismo mineral e visitas técnicas",
      status: "Em planejamento",
      image: "https://images.unsplash.com/photo-1705073703471-ce459a78097d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwbWluaW5nJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzY0MDY2Nzc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Plataforma Digital de Comercialização",
      icon: Sparkles,
      description: "Site, catálogo digital, rastreabilidade e marketing territorial",
      status: "Em desenvolvimento",
      image: "https://images.unsplash.com/photo-1593079323074-f1d77349c998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmxlJTIwZWNvbm9teXxlbnwxfHx8fDE3NjQwNjY3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const circularEconomyProjects = [
    {
      name: "Reaproveitamento de Talco Xisto",
      icon: Recycle,
      description: "Transformação de rejeitos em tijolos ecológicos e adubo mineral",
      partner: "IF Goiano",
      impact: "Regeneração Ambiental + Economia Circular"
    },
    {
      name: "Prospecção e Sondagem",
      icon: Target,
      description: "Sistema de avaliação do potencial geológico das áreas minerárias",
      partner: "Poderes Municipal e Estadual",
      impact: "Sustentabilidade da Produção"
    }
  ];

  const communityBenefits = [
    {
      title: "Jovens Capacitados",
      value: "200+",
      description: "Formação profissional em lapidação e joalheria",
      image: "https://images.unsplash.com/photo-1562167055-1afdc7ac7bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBtaW5pbmclMjBjb29wZXJhdGl2ZSUyMHdvcmtlcnN8ZW58MXx8fHwxNzY0MDY4MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Desenvolvimento Local",
      value: "100%",
      description: "Riqueza da esmeralda reinvestida na comunidade",
      image: "https://images.unsplash.com/photo-1647969476632-17261bc91afa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1pbmluZyUyMGVudmlyb25tZW50fGVufDF8fHx8MTc2NDA2ODA4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Rastreabilidade",
      value: "100%",
      description: "Transparência total via blockchain e certificação científica",
      image: "https://images.unsplash.com/photo-1660836709423-9e82461f957a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMHRyYW5zcGFyZW5jeXxlbnwxfHx8fDE3NjQwNjgwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f0fdf4] to-white">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden border-b border-[#e5e7eb]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b1b1b]/90 via-[#014733]/85 to-[#006b4f]/80 z-10" />
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1688883363361-4f92a92e4c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwc21hbGwlMjB0b3duJTIwYnJrazlsJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzY0MDY4MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Vista aérea de Campos Verdes - Goiás"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30"
            >
              <Heart className="h-5 w-5 text-white" />
              <span className="font-['Inter'] text-sm text-white">
                Projetos de Impacto Local • A partir de 2026
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="font-['Montserrat'] text-4xl lg:text-6xl xl:text-7xl text-white drop-shadow-2xl">
              Campos Verdes 2050: <br />
              O Ciclo <span className="text-[#caa34b]">Regenerativo</span> da Esmeralda
            </h1>

            {/* Subtitle */}
            <p className="font-['Inter'] text-lg lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              De volta para a comunidade. A COOPESMERALDA, atuando como <strong>Oráculo Operacional</strong>, 
              reinveste a riqueza da esmeralda na nossa gente através do <strong>Regime Fiscal Automatizado</strong>.
            </p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto"
            >
              <Card className="p-6 border-none bg-white/95 backdrop-blur-lg shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-center space-y-2">
                  <DollarSign className="h-10 w-10 text-[#006b4f] mx-auto mb-2" />
                  <div className="font-['Montserrat'] text-3xl text-[#006b4f]">R$ 240mil</div>
                  <div className="font-['Inter'] text-sm text-gray-600">Investimento Social</div>
                </div>
              </Card>
              <Card className="p-6 border-none bg-white/95 backdrop-blur-lg shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-center space-y-2">
                  <Users className="h-10 w-10 text-[#caa34b] mx-auto mb-2" />
                  <div className="font-['Montserrat'] text-3xl text-[#caa34b]">200+</div>
                  <div className="font-['Inter'] text-sm text-gray-600">Jovens Capacitados</div>
                </div>
              </Card>
              <Card className="p-6 border-none bg-white/95 backdrop-blur-lg shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="text-center space-y-2">
                  <TrendingUp className="h-10 w-10 text-[#014733] mx-auto mb-2" />
                  <div className="font-['Montserrat'] text-3xl text-[#014733]">100%</div>
                  <div className="font-['Inter'] text-sm text-gray-600">Transparência On-Chain</div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section - Campos Verdes Location */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#006b4f] text-[#006b4f]">
                Localização
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Campos Verdes - GO
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Capital das Esmeraldas do Brasil, onde a riqueza mineral encontra o desenvolvimento sustentável
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="overflow-hidden border-2 border-[#006b4f]/30 shadow-2xl">
                <img 
                  src={camposVerdesMap} 
                  alt="Mapa de Campos Verdes - Goiás"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1b1b1b]/90 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#006b4f] flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] text-xl text-white">Campos Verdes</h3>
                      <p className="font-['Inter'] text-sm text-white/80">Goiás, Brasil • GO-154</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossa Comunidade - Visual Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-[#006b4f] text-[#006b4f]">
              Nossa Comunidade
            </Badge>
            <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
              Desenvolvimento Que Transforma Vidas
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
              O impacto real dos projetos GEMLAB na comunidade de Campos Verdes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {communityBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback 
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b]/90 via-[#1b1b1b]/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white drop-shadow-lg">
                      <div className="font-['Montserrat'] text-4xl mb-1 font-bold drop-shadow-md">{benefit.value}</div>
                      <div className="font-['Inter'] text-lg mb-2 font-semibold drop-shadow-md">{benefit.title}</div>
                      <div className="font-['Inter'] text-sm drop-shadow-md">{benefit.description}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COOPESMERALDA Role */}
      <section className="py-16 lg:py-20 bg-white border-y border-[#e5e7eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-10 border-2 border-[#006b4f]/30 bg-gradient-to-br from-white to-[#f0fdf4] shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-20 h-20 rounded-2xl bg-[#006b4f] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1 space-y-5">
                  <div>
                    <h2 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#1b1b1b] mb-2">
                      COOPESMERALDA: Motor do Desenvolvimento Local
                    </h2>
                    <p className="font-['Inter'] text-sm text-[#006b4f]">
                      CNPJ: 34.926.901/0001-20 • Oráculo Operacional e Custodiante
                    </p>
                  </div>
                  <p className="font-['Inter'] text-gray-600 leading-relaxed text-lg">
                    A <strong>Cooperativa de Gemas e Pedras Preciosas – COOPESMERALDA</strong> está projetando 
                    sua transformação de uma cooperativa de garimpeiros para o <strong>gestor operacional do desenvolvimento local</strong>, 
                    integrando atividades de <strong>extração, custódia, industrialização (lapidação/joalheria), 
                    rastreabilidade tecnológica e impacto social</strong>.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#006b4f]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#006b4f] flex-shrink-0" />
                      <span className="font-['Inter'] text-sm text-gray-700">Prova de Origem (EAS #1)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#006b4f]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#006b4f] flex-shrink-0" />
                      <span className="font-['Inter'] text-sm text-gray-700">Único emissor de NFe</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#006b4f]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#006b4f] flex-shrink-0" />
                      <span className="font-['Inter'] text-sm text-gray-700">Custódia física do ativo</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#006b4f]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#006b4f] flex-shrink-0" />
                      <span className="font-['Inter'] text-sm text-gray-700">Gestor de projetos sociais</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Projects Section - With Images */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-[#006b4f] text-[#006b4f]">
              Capital Humano e Geração de Renda
            </Badge>
            <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
              Investimento em Pessoas
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
              Projetos que transformam vidas, combatem problemas históricos e criam 
              o pipeline de profissionais qualificados para o futuro de Campos Verdes
            </p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            {socialProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="overflow-hidden border-2 border-gray-200 hover:border-[#006b4f] transition-all duration-300 hover:shadow-2xl group">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-80 lg:h-auto overflow-hidden">
                      <ImageWithFallback 
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b]/80 to-transparent lg:bg-gradient-to-r" />
                      
                      {/* Project Icon Overlay */}
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border-2 border-white/30" 
                             style={{ backgroundColor: `${project.color}90` }}>
                          <project.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10 space-y-6">
                      {/* Header */}
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#1b1b1b] mb-1">
                            {project.name}
                          </h3>
                          <p className="font-['Inter'] text-sm" style={{ color: project.color }}>
                            {project.subtitle}
                          </p>
                        </div>
                        <p className="font-['Inter'] text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Goals */}
                      {project.goals && (
                        <div className="space-y-3">
                          <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] flex items-center gap-2">
                            <Target className="h-5 w-5" style={{ color: project.color }} />
                            Objetivos:
                          </h4>
                          <div className="space-y-2">
                            {project.goals.map((goal, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: project.color }} />
                                <span className="font-['Inter'] text-sm text-gray-600 leading-relaxed">{goal}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Modules */}
                      {project.modules && (
                        <div className="space-y-3">
                          <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] flex items-center gap-2">
                            <Award className="h-5 w-5" style={{ color: project.color }} />
                            Módulos de Capacitação:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.modules.map((module, idx) => (
                              <Badge key={idx} variant="outline" style={{ borderColor: project.color, color: project.color }}>
                                {module}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Impact */}
                      {project.impact && (
                        <div className="p-4 rounded-lg border-2" style={{ backgroundColor: `${project.color}05`, borderColor: `${project.color}30` }}>
                          <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed">
                            <strong style={{ color: project.color }}>Impacto:</strong> {project.impact}
                          </p>
                        </div>
                      )}

                      {/* ODS */}
                      {project.ods && (
                        <div className="flex flex-wrap gap-2">
                          {project.ods.map((ods, idx) => (
                            <Badge key={idx} className="bg-[#006b4f] text-white">
                              {ods}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Projects - With Images */}
      <section className="py-16 lg:py-20 bg-white border-t border-[#e5e7eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#006b4f] text-[#006b4f]">
                Infraestrutura e Agregação de Valor
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Transformando Campos Verdes
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Projetos de infraestrutura que fortalecem a economia local e 
                posicionam Campos Verdes como Centro Turístico Mineral
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {infrastructureProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full border-2 border-[#006b4f]/20 hover:border-[#006b4f] transition-all duration-300 hover:shadow-xl group">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback 
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b]/70 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center">
                          <project.icon className="h-6 w-6 text-[#006b4f]" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <div>
                        <h3 className="font-['Inter'] text-xl text-[#1b1b1b] mb-2">
                          {project.name}
                        </h3>
                        <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <Badge className="bg-[#006b4f]/10 text-[#006b4f] border border-[#006b4f]/20">
                        {project.status}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#10b981] text-[#10b981]">
                Regeneração Ambiental
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Economia Circular e Sustentabilidade
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Projetos que transformam rejeitos em valor e garantem a 
                sustentabilidade de longo prazo da atividade mineral
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {circularEconomyProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-8 h-full border-2 border-[#10b981]/20 hover:border-[#10b981] transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-[#f0fdf4]">
                    <div className="space-y-5">
                      <div className="w-14 h-14 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                        <project.icon className="h-7 w-7 text-[#10b981]" />
                      </div>
                      <div>
                        <h3 className="font-['Inter'] text-xl text-[#1b1b1b] mb-3">
                          {project.name}
                        </h3>
                        <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="font-['Inter'] text-gray-500">Parceiro:</span>
                            <span className="font-['Inter'] font-semibold text-[#006b4f]">{project.partner}</span>
                          </div>
                          <Badge className="bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                            {project.impact}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analogy Section */}
      <section className="py-16 lg:py-20 bg-white border-t border-[#e5e7eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 border-2 border-[#006b4f]/30 bg-gradient-to-br from-white via-[#f0fdf4] to-white shadow-2xl">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#006b4f] to-[#014733] flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Sprout className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#1b1b1b] mb-4">
                    O Sistema de Irrigação Inteligente
                  </h3>
                </div>
                <p className="font-['Inter'] text-lg text-gray-700 leading-relaxed text-center">
                  Imagine que a <strong className="text-[#006b4f]">Cooperativa e o GEMLAB</strong> são como um 
                  sistema de irrigação inteligente: eles não apenas extraem a riqueza (água) do solo (mina), 
                  mas também <strong>garantem, através de dutos transparentes (blockchain/EAS)</strong>, que 
                  uma parte vital dessa riqueza retorne para <strong className="text-[#014733]">fertilizar a terra</strong> 
                  (os projetos sociais e de infraestrutura), assegurando que o <strong>ecossistema inteiro prospere</strong>, 
                  e não apenas o mineral.
                </p>
                <div className="grid md:grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-6 bg-gradient-to-br from-[#006b4f]/10 to-[#006b4f]/5 rounded-xl border border-[#006b4f]/20">
                    <div className="font-['Montserrat'] text-xl text-[#006b4f] mb-2">Extração</div>
                    <div className="font-['Inter'] text-sm text-gray-600">Da mina para a cooperativa</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[#caa34b]/10 to-[#caa34b]/5 rounded-xl border border-[#caa34b]/20">
                    <div className="font-['Montserrat'] text-xl text-[#caa34b] mb-2">Rastreamento</div>
                    <div className="font-['Inter'] text-sm text-gray-600">Via blockchain transparente</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[#10b981]/10 to-[#10b981]/5 rounded-xl border border-[#10b981]/20">
                    <div className="font-['Montserrat'] text-xl text-[#10b981] mb-2">Reinvestimento</div>
                    <div className="font-['Inter'] text-sm text-gray-600">Direto na comunidade</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#006b4f] via-[#014733] to-[#1b1b1b] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Montserrat'] text-3xl lg:text-5xl mb-6">
                Construindo o Futuro de Campos Verdes, Juntos
              </h2>
              <p className="font-['Inter'] text-lg lg:text-xl opacity-90 leading-relaxed">
                Os projetos da COOPESMERALDA são financiados pelo <strong>Regime Fiscal Automatizado</strong> do 
                Protocolo GEMLAB, garantindo que cada esmeralda certificada contribua para o desenvolvimento da nossa comunidade.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Button 
                size="lg" 
                className="bg-white text-[#006b4f] hover:bg-gray-100 shadow-xl text-lg px-8 py-6"
                onClick={onNavigateToGovernance}
              >
                Ver Modelo de Governança
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-[#006b4f] hover:bg-white/10 text-lg px-8 py-6"
                onClick={onNavigateToEcosystem}
              >
                Explorar Ecossistema
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}