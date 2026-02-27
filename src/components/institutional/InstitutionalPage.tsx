import {
  Sparkles,
  Award,
  Users,
  TrendingUp,
  Shield,
  BookOpen,
  CheckCircle2,
  Globe,
  Building2,
  FlaskConical,
  Package,
  Gem,
  Fingerprint,
  Server,
  FileCheck2,
  FolderSearch,
  Scale,
  Newspaper,
  ArrowUpRight,
  Workflow,
  Database,
  ShieldCheck,
  Timer,
  MapPinned,
  FileText,
  Download,
  QrCode,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { Footer } from "../Footer";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import camposVerdesMap from "figma:asset/91d8e4ef371a36b8ffd083fad2b972e4d137e6f5.png";
import whitepaperCover from "./assets/whitepaper-cover.svg";

interface InstitutionalPageProps {
  onNavigateToBlog?: () => void;
}

export function InstitutionalPage({ onNavigateToBlog }: InstitutionalPageProps) {
  const blogPosts = [
    {
      category: "Mercado",
      title: "Certificação Digital On-Chain já é realidade no setor gemológico",
      excerpt:
        "Como casos internacionais validam demanda comercial por certificados digitais e por que isso abre espaço para infraestrutura B2B no Brasil.",
      audience: "Laboratórios e certificadoras",
      cta: "Aplicar no laboratório",
      sourceLabel: "IGI + GET",
      sourceUrl: "https://www.igi.org/blockchain-based-digital-diamond-certificate-ddc/",
    },
    {
      category: "RWA",
      title: "Ativos rastreáveis: o que investidores institucionais realmente procuram",
      excerpt:
        "Leitura prática do apetite por ativos com lastro verificável, dados auditáveis e trilha de conformidade para diligência.",
      audience: "Compradores institucionais",
      cta: "Ver estrutura de dados",
      sourceLabel: "RWA.xyz",
      sourceUrl: "https://app.rwa.xyz/",
    },
    {
      category: "Operação",
      title: "Raman não é suficiente sozinho: por que a camada de atestação define confiança",
      excerpt:
        "Raman identifica; a arquitetura de evidência, atestação on-chain e smart contracts garante integridade ponta a ponta.",
      audience: "Labs e times técnicos",
      cta: "Conhecer arquitetura EAS",
      sourceLabel: "GIA + EAS",
      sourceUrl: "https://www.gia.edu/gems-gemology/winter-2024-raman-spectroscopy-and-xrd",
    },
    {
      category: "Compliance",
      title: "Traceability como requisito comercial no luxo e mineração",
      excerpt:
        "Como padrões setoriais elevam a exigência de origem e rastreabilidade, pressionando a cadeia por infraestrutura verificável.",
      audience: "Compradores B2B/B2G",
      cta: "Avaliar aderência",
      sourceLabel: "RJC + Sarine",
      sourceUrl: "https://www.responsiblejewellery.com/standards/",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const stats = [
    { label: "Status de Operação", value: "Piloto Avançado", icon: Award },
    { label: "Equipe", value: "Time multidisciplinar", icon: Users },
    { label: "Rastreabilidade", value: "Ponta a ponta auditável", icon: Shield },
    { label: "Base de Dados", value: "Pronta para escala", icon: TrendingUp },
  ];

  const pocEvidence = [
    {
      title: "Fluxo técnico documentado",
      detail: "Coleta > análise > spectralHash > atestação > verificação",
      icon: Workflow,
    },
    {
      title: "Contratos inteligentes",
      detail: "Módulos de registro e validação em testnet",
      icon: Database,
    },
    {
      title: "Trilha de compliance",
      detail: "Eventos e histórico auditáveis para diligência",
      icon: ShieldCheck,
    },
  ];

  const roadmap = [
    { phase: "M1-M2", goal: "MVP técnico consolidado", kpi: "Fluxo completo validado" },
    { phase: "M3-M4", goal: "Pilotos operacionais", kpi: "Primeiros casos B2B/B2G em Campos Verdes" },
    { phase: "M5-M6", goal: "Validação de campo", kpi: "Lotes rastreados com evidência técnica" },
    { phase: "M7", goal: "Demonstração pública", kpi: "Entrega do MVP na Feira das Esmeraldas 2026" },
  ];

  const whitepaperTopics = [
    "Problema, oportunidade e tese tecnica.",
    "Arquitetura Raman + SpectralHash + EAS + smart contracts.",
    "Fluxo operacional fim a fim com trilha de compliance.",
    "Modelo de negocio B2B e limites regulatorios.",
    "Roadmap de 7 meses com KPIs e evidencias EDD/PDT.",
  ];

  const showExtendedInstitutionalBlocks = false;

  const whitepaperFlowSteps = [
    {
      id: "01",
      title: "Origem",
      description: "Cadastro do lote e metadados iniciais",
      icon: MapPinned,
      accent: "emerald",
    },
    {
      id: "02",
      title: "Raman",
      description: "Fingerprint espectral da amostra",
      icon: FlaskConical,
      accent: "emerald",
    },
    {
      id: "03",
      title: "SpectralHash",
      description: "Hash determinístico reproduzível",
      icon: Fingerprint,
      accent: "emerald",
    },
    {
      id: "04",
      title: "EAS",
      description: "Atestação técnica on-chain",
      icon: FileCheck2,
      accent: "emerald",
    },
    {
      id: "05",
      title: "Verificação",
      description: "Data room + QR code auditável",
      icon: QrCode,
      accent: "gold",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-white">
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
              Infraestrutura SaaS Web3 Mineral - Fase 2
            </Badge>
            <h1 className="font-['Inter'] text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Infraestrutura de{" "}
              <span className="text-[#caa34b]">Rastreabilidade de Esmeraldas</span>
            </h1>
            <p className="font-['Inter'] text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Certificação científica e tokenização mineral com execução auditável,
              governança e trilha comercial B2B/B2G.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#caa34b] text-white hover:bg-[#b8923f] px-8"
                onClick={() => scrollToSection("resumo-executivo-fase2")}
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Ver Proposta de Valor
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-[#006b4f] bg-white hover:bg-white/90 px-8 font-semibold"
                onClick={() => scrollToSection("prova-tecnica")}
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Ver Prova Técnica
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#caa34b] text-white bg-[#caa34b]/20 hover:bg-[#caa34b]/35 px-8 font-semibold"
                onClick={() => scrollToSection("whitepaper-oficial")}
              >
                <FileText className="h-5 w-5 mr-2" />
                Whitepaper Oficial
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm border border-white/25 text-center rounded-2xl"
              >
                <stat.icon className="h-8 w-8 text-[#caa34b] mx-auto mb-3" />
                <div className="font-['Inter'] text-2xl font-bold mb-1">{stat.value}</div>
                <div className="font-['Inter'] text-sm text-gray-200">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section className="py-16 bg-gradient-to-b from-white to-gray-50" id="resumo-executivo-fase2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <Badge className="mb-4 bg-[#006b4f] text-white">Resumo Executivo</Badge>
              <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
                Solução, Mercado e Impacto
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600">
                Página institucional focada em clareza comercial: o que resolvemos,
                como provamos execução e como escalamos com governança.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <Card className="p-6 border-2 border-[#006b4f]/20 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-[#006b4f] text-white">S</Badge>
                  <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b]">Solução</h3>
                </div>
                <p className="font-['Inter'] text-sm text-gray-600 mb-3">
                  Certificação gemológica com identidade óptica única e registro auditável.
                </p>
                <ul className="space-y-2 font-['Inter'] text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#006b4f] mt-0.5" /> Pipeline técnico ponta a ponta</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#006b4f] mt-0.5" /> Dados críticos ancorados on-chain</li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-[#caa34b]/20 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-[#caa34b] text-white">M</Badge>
                  <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b]">Mercado</h3>
                </div>
                <p className="font-['Inter'] text-sm text-gray-600 mb-3">
                  Modelo B2B/B2G para origem comprovada, compliance e maior confiança comercial.
                </p>
                <ul className="space-y-2 font-['Inter'] text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#caa34b] mt-0.5" /> Jornada de credenciamento por perfil</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#caa34b] mt-0.5" /> Escala condicionada a validação regulatória</li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-[#014733]/20 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-[#014733] text-white">I</Badge>
                  <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b]">Impacto</h3>
                </div>
                <p className="font-['Inter'] text-sm text-gray-600 mb-3">
                  Formalização, capacitação técnica e rastreabilidade fiscal/ambiental mensurável.
                </p>
                <ul className="space-y-2 font-['Inter'] text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#014733] mt-0.5" /> Indicadores operacionais definidos</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-[#014733] mt-0.5" /> Base para política pública local</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white" id="prova-tecnica">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <Badge className="mb-4 bg-[#014733] text-white">Prova Técnica</Badge>
              <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
                Evidência de Execução
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600">
                Três blocos técnicos sustentam a tese: ciência, rastreabilidade e governança de dados.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <FlaskConical className="h-7 w-7 text-[#006b4f] mb-3" />
                <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">Espectroscopia Raman</h3>
                <p className="font-['Inter'] text-sm text-gray-600">
                  Geração de spectralHash para identidade óptica única e verificável.
                </p>
              </Card>
              <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <Shield className="h-7 w-7 text-[#006b4f] mb-3" />
                <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">Registro On-Chain</h3>
                <p className="font-['Inter'] text-sm text-gray-600">
                  Eventos críticos de certificação e custódia com trilha auditável.
                </p>
              </Card>
              <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <Globe className="h-7 w-7 text-[#006b4f] mb-3" />
                <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">Arquitetura Escalável</h3>
                <p className="font-['Inter'] text-sm text-gray-600">
                  Base técnica preparada para expansão regional e integração B2B.
                </p>
              </Card>
            </div>

            <Card className="mt-8 p-6 border-2 border-[#014733]/20 bg-[#f9fafb]">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge className="bg-[#014733] text-white">Prova de Conceito (PoC)</Badge>
                <Badge className="bg-[#caa34b] text-white">Status Pré-Submissão</Badge>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {pocEvidence.map((item, index) => (
                  <div key={index} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
                    <item.icon className="h-5 w-5 text-[#006b4f] mb-2" />
                    <h4 className="font-['Inter'] text-sm font-semibold text-[#1b1b1b] mb-1">{item.title}</h4>
                    <p className="font-['Inter'] text-xs text-gray-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-[#f7faf9] to-white" id="whitepaper-oficial">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-7">
              <Badge className="mb-3 bg-[#014733] text-white">Whitepaper GEMLAB</Badge>
              <h2 className="font-['Inter'] text-2xl lg:text-3xl font-bold text-[#1b1b1b] mb-3">
                Documento técnico oficial para validação de execução
              </h2>
              <p className="font-['Inter'] text-base lg:text-lg text-gray-600">
                O whitepaper consolida arquitetura, fluxos, EDD/PDT, governança e roadmap em um padrão auditável para investidores institucionais e avaliação do edital.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-5 items-start mb-7">
              <Card className="lg:col-span-5 overflow-hidden border-2 border-[#d9efe6] bg-[#081410] p-2 h-fit self-start">
                <div className="overflow-hidden rounded-2xl border-4 border-white/90">
                  <ImageWithFallback
                    src={whitepaperCover}
                    alt="Capa do whitepaper tecnico GEMLAB"
                    className="w-full aspect-[16/10] object-contain bg-[#07130f]"
                  />
                </div>
              </Card>
              <Card className="lg:col-span-7 p-6 lg:p-6 border-2 border-[#e5e7eb] bg-white h-fit">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-[#006b4f] text-white">EDD/PDT</Badge>
                  <Badge className="bg-[#f3f4f6] text-[#014733]">Pré-submissão</Badge>
                </div>
                <h3 className="font-['Inter'] text-2xl lg:text-3xl font-bold text-[#0f172a] mb-3 leading-tight">
                  Conteudo estruturado para nota maxima
                </h3>
                <p className="font-['Inter'] text-base lg:text-lg text-slate-600 mb-5 leading-relaxed">
                  Estrutura orientada a avaliacao tecnica: problema, arquitetura, execucao, governanca e evidencias.
                </p>
                <div className="space-y-2.5 mb-5">
                  {whitepaperTopics.map((topic, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-[#d9efe6] bg-[#f8fffb] px-4 py-2.5"
                    >
                      <p className="font-['Inter'] text-sm lg:text-base font-medium text-[#134e4a] leading-relaxed">
                        {topic}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="/docs/whitepaper_tecnico_gemlab_fase2_centelha_2026-02-26.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button className="bg-[#006b4f] text-white hover:bg-[#014733] w-full sm:w-auto text-sm">
                      <Download className="h-4 w-4 mr-2" />
                      Abrir Whitepaper
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white w-full sm:w-auto text-sm"
                    onClick={() => scrollToSection("prova-tecnica")}
                  >
                    Validar Evidências
                  </Button>
                </div>
              </Card>
            </div>

            <Card
              className="border-2 border-[#d9efe6] p-5 md:p-6"
              style={{ backgroundColor: "#ffffff", color: "#111827" }}
            >
              <div className="mb-6">
                <h3 className="font-['Inter'] text-xl lg:text-2xl font-bold mb-2" style={{ color: "#0f172a" }}>
                  Fluxo de Rastreabilidade GEMLAB
                </h3>
                <p className="font-['Inter'] text-sm lg:text-base" style={{ color: "#475569" }}>
                  Pipeline técnico-operacional com trilha de evidência do lote até a verificação institucional.
                </p>
              </div>

              <div className="relative">
                <div className="hidden lg:block absolute left-[10%] right-[10%] top-[44px] h-[2px] rounded-full bg-gradient-to-r from-[#00a778] to-[#caa34b] opacity-80" />

                <div className="grid gap-4 lg:grid-cols-5 relative">
                  {whitepaperFlowSteps.map((step, index) => {
                    const isGold = step.accent === "gold";
                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="text-center"
                      >
                        <div
                          className="mx-auto h-20 w-20 rounded-full border flex items-center justify-center mb-3"
                          style={{
                            borderColor: isGold ? "#d7a94a" : "#34d399",
                            backgroundColor: isGold ? "#fff7e8" : "#ecfdf5",
                          }}
                        >
                          <step.icon
                            className="h-6 w-6"
                            style={{ color: isGold ? "#a16207" : "#047857" }}
                          />
                        </div>
                        <p
                          className="font-['Inter'] text-xs font-semibold mb-1"
                          style={{ color: isGold ? "#a16207" : "#047857" }}
                        >
                          {step.id}
                        </p>
                        <h4 className="font-['Inter'] text-base font-semibold mb-1" style={{ color: "#0f172a" }}>
                          {step.title}
                        </h4>
                        <p
                          className="font-['Inter'] text-xs lg:text-sm"
                          style={{ color: isGold ? "#92400e" : "#065f46" }}
                        >
                          {step.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {showExtendedInstitutionalBlocks && (
          <>
        <section className="py-12 bg-white" id="arquitetura-operacional">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <Badge className="mb-4 bg-[#006b4f] text-white">Arquitetura Operacional</Badge>
              <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
                Como o GEMLAB executa a rastreabilidade
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <Card className="p-5 border-2 border-[#e5e7eb]">
                <MapPinned className="h-6 w-6 text-[#006b4f] mb-2" />
                <h3 className="font-['Inter'] text-sm font-semibold text-[#1b1b1b] mb-1">1. Origem</h3>
                <p className="font-['Inter'] text-xs text-gray-600">Lote e território registrados com metadados iniciais.</p>
              </Card>
              <Card className="p-5 border-2 border-[#e5e7eb]">
                <FlaskConical className="h-6 w-6 text-[#006b4f] mb-2" />
                <h3 className="font-['Inter'] text-sm font-semibold text-[#1b1b1b] mb-1">2. Análise</h3>
                <p className="font-['Inter'] text-xs text-gray-600">Identificação técnica e geração de identidade espectral.</p>
              </Card>
              <Card className="p-5 border-2 border-[#e5e7eb]">
                <FileCheck2 className="h-6 w-6 text-[#006b4f] mb-2" />
                <h3 className="font-['Inter'] text-sm font-semibold text-[#1b1b1b] mb-1">3. Atestação</h3>
                <p className="font-['Inter'] text-xs text-gray-600">Evento técnico atestado on-chain com trilha verificável.</p>
              </Card>
              <Card className="p-5 border-2 border-[#e5e7eb]">
                <Shield className="h-6 w-6 text-[#006b4f] mb-2" />
                <h3 className="font-['Inter'] text-sm font-semibold text-[#1b1b1b] mb-1">4. Verificação</h3>
                <p className="font-['Inter'] text-xs text-gray-600">Compradores e instituições validam origem e histórico.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-14 bg-[#f9fafb]" id="oportunidades-b2b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <Badge className="mb-4 bg-[#014733] text-white">Oportunidade de Mercado</Badge>
              <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
                Infraestrutura de confiança para cadeia gemológica
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600">
                O GEMLAB atua como camada técnica para certificação digital, rastreabilidade auditável e conformidade comercial.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <Server className="h-7 w-7 text-[#006b4f] mb-3" />
                <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">Lab-as-a-Service B2B</h3>
                <p className="font-['Inter'] text-sm text-gray-600">
                  Certificação digital e trilha auditável para laboratórios gemológicos e certificadoras.
                </p>
              </Card>

              <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <FileCheck2 className="h-7 w-7 text-[#006b4f] mb-3" />
                <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">EAS Attestation Layer</h3>
                <p className="font-['Inter'] text-sm text-gray-600">
                  Atestação on-chain de laudos e eventos com schema dedicado por laboratório.
                </p>
              </Card>

              <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <Scale className="h-7 w-7 text-[#006b4f] mb-3" />
                <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">Compliance Middleware</h3>
                <p className="font-['Inter'] text-sm text-gray-600">
                  Logs, histórico e verificabilidade para compradores, instituições e auditoria regulatória.
                </p>
              </Card>

              <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <FolderSearch className="h-7 w-7 text-[#006b4f] mb-3" />
                <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">Investor-Grade Data Room</h3>
                <p className="font-['Inter'] text-sm text-gray-600">
                  Ativo rastreável com evidência técnica, sem promessa de rentabilidade ou oferta pública.
                </p>
              </Card>
            </div>

            <Card className="p-6 lg:p-8 border-2 border-[#014733]/20 bg-white">
              <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-4">Posicionamento GEMLAB</h3>
              <div className="space-y-3">
                <p className="font-['Inter'] text-base text-gray-700">
                  “GEMLAB não vende investimento; vende infraestrutura de confiança para ativos gemológicos rastreáveis.”
                </p>
                <p className="font-['Inter'] text-base text-gray-700">
                  “Raman + dados laboratoriais + EAS + smart contracts = certificação verificável ponta a ponta.”
                </p>
              </div>
            </Card>
          </div>
        </section>

          </>
        )}

        <section className="py-12 bg-[#f9fafb]" id="fluxo-visual">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <Badge className="mb-4 bg-[#006b4f] text-white">Fluxo Visual</Badge>
              <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
                Do Território ao Registro Digital
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600">
                Visão rápida da operação: origem territorial, processamento técnico e trilha verificável.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden border-2 border-[#e5e7eb]">
                <ImageWithFallback
                  src={camposVerdesMap}
                  alt="Mapa de Campos Verdes em Goiás"
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    Origem Territorial Rastreável
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Georreferenciamento da operação e vínculo da cadeia local ao fluxo de certificação.
                  </p>
                </div>
              </Card>

              <Card className="p-6 border-2 border-[#e5e7eb]">
                <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-4">
                  Fluxo de Certificação em 4 Etapas
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 text-[#006b4f] mt-0.5" />
                    <p className="font-['Inter'] text-sm text-gray-700">
                      Extração e identificação do lote.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FlaskConical className="h-5 w-5 text-[#006b4f] mt-0.5" />
                    <p className="font-['Inter'] text-sm text-gray-700">
                      Análise Raman para geração do spectralHash.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gem className="h-5 w-5 text-[#006b4f] mt-0.5" />
                    <p className="font-['Inter'] text-sm text-gray-700">
                      Emissão do NFT gemológico com metadados técnicos.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Fingerprint className="h-5 w-5 text-[#006b4f] mt-0.5" />
                    <p className="font-['Inter'] text-sm text-gray-700">
                      Registro público com trilha de auditoria on-chain.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </section>

        {showExtendedInstitutionalBlocks && (
          <section className="py-12 bg-gradient-to-b from-gray-50 to-white" id="ecossistema">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <Badge className="mb-4 bg-[#caa34b] text-white">Ecossistema</Badge>
              <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
                Coordenação Institucional
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600">
                Modelo colaborativo entre poder público, ciência aplicada e cadeia produtiva local.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <Building2 className="h-7 w-7 text-[#014733] mb-3" />
                <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">Poder Público</h3>
                <p className="font-['Inter'] text-sm text-gray-600">Integração fiscal e segurança institucional da operação.</p>
              </Card>
              <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <Sparkles className="h-7 w-7 text-[#014733] mb-3" />
                <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">Núcleo Tecnológico</h3>
                <p className="font-['Inter'] text-sm text-gray-600">Infraestrutura SaaS, certificação digital e observabilidade técnica.</p>
              </Card>
              <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <Users className="h-7 w-7 text-[#014733] mb-3" />
                <h3 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">Base Produtiva</h3>
                <p className="font-['Inter'] text-sm text-gray-600">Entidades locais conectadas à rastreabilidade e geração de valor.</p>
              </Card>
            </div>
          </div>
          </section>
        )}

        <section className="py-12 bg-[#f9fafb]" id="roadmap-execucao">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <Badge className="mb-4 bg-[#caa34b] text-white">Roadmap de Execução</Badge>
              <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
                Roadmap de 7 meses até a Feira das Esmeraldas 2026
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600">
                Planejamento orientado a marcos verificáveis e evidência técnica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {roadmap.map((item, index) => (
                <Card key={index} className="p-5 border-2 border-[#e5e7eb] bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Timer className="h-4 w-4 text-[#006b4f]" />
                    <span className="font-['Inter'] text-xs font-semibold text-[#006b4f]">{item.phase}</span>
                  </div>
                  <h3 className="font-['Inter'] text-sm font-bold text-[#1b1b1b] mb-2">{item.goal}</h3>
                  <p className="font-['Inter'] text-xs text-gray-600">{item.kpi}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white" id="blog-gemlab">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <Badge className="mb-4 bg-[#006b4f] text-white">Blog GEMLAB</Badge>
              <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
                Conteúdo orientado a demanda real de mercado
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600">
                Artigos para demonstrar demanda por ativos certificados on-chain e educar o mercado sobre rastreabilidade gemológica com compliance.
              </p>
              {onNavigateToBlog && (
                <div className="mt-6">
                  <Button
                    className="bg-[#006b4f] text-white hover:bg-[#014733]"
                    onClick={onNavigateToBlog}
                  >
                    Abrir pagina de Blog
                  </Button>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-[#f3f4f6] text-[#014733]">{post.category}</Badge>
                    <Newspaper className="h-5 w-5 text-[#006b4f]" />
                  </div>
                  <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-3">
                    {post.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="mb-4 space-y-1">
                    <p className="font-['Inter'] text-xs text-gray-500">
                      Público-alvo: <span className="font-semibold text-[#1b1b1b]">{post.audience}</span>
                    </p>
                    <a
                      href={post.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-['Inter'] text-xs text-[#006b4f] hover:text-[#014733]"
                    >
                      Fonte de referência: {post.sourceLabel}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                    onClick={() => {
                      if (onNavigateToBlog) {
                        onNavigateToBlog();
                        return;
                      }
                      window.open(post.sourceUrl, "_blank", "noopener,noreferrer");
                    }}
                  >
                    {post.cta}
                  </Button>
                </Card>
              ))}
            </div>

            <Card className="mt-6 p-6 border-2 border-[#014733]/20 bg-[#f9fafb]">
              <p className="font-['Inter'] text-sm text-gray-700">
                Linha editorial oficial: o GEMLAB comercializa infraestrutura de confiança (certificação digital, rastreabilidade e compliance)
                e não realiza oferta pública de investimento ou promessa de rentabilidade.
              </p>
            </Card>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
