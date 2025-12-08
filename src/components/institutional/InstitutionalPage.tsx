import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { ManifestoSection } from "./ManifestoSection";
import { RamanSpectroscopy } from "./RamanSpectroscopy";
import { TraceabilityMockup } from "./TraceabilityMockup";
import { DocumentationSection } from "./DocumentationSection";
import { TeamSection } from "./TeamSection";
import { FiscalOracleSection } from "./FiscalOracleSection";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Sparkles,
  Award,
  Users,
  TrendingUp,
  Shield,
  ExternalLink,
  BookOpen,
} from "lucide-react";

export function InstitutionalPage() {
  const stats = [
    { label: "Certificados Emitidos", value: "500+", icon: Award },
    { label: "Garimpeiros Formalizados", value: "150+", icon: Users },
    { label: "Rastreabilidade", value: "100%", icon: Shield },
    { label: "Esmeraldas Certificadas", value: "1.247", icon: TrendingUp },
  ];

  const documents = [
    {
      title: "Whitepaper Técnico",
      description: "Arquitetura completa do protocolo GEMLAB",
      icon: BookOpen,
      badge: "PDF",
    },
    {
      title: "Roadmap de Implementação",
      description: "Cronograma e marcos do projeto",
      icon: TrendingUp,
      badge: "PDF",
    },
    {
      title: "Indicadores de Impacto",
      description: "Métricas sociais, econômicas e ambientais",
      icon: Award,
      badge: "PDF",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent />

      {/* Hero Institucional */}
      <section className="relative bg-gradient-to-br from-[#006b4f] via-[#014733] to-[#1b1b1b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#caa34b] text-white px-4 py-2 text-sm">
              Tecnologia de Certificação
            </Badge>
            <h1 className="font-['Inter'] text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              O Padrão Ouro em{" "}
              <span className="text-[#caa34b]">Rastreabilidade de Esmeraldas</span>
            </h1>
            <p className="font-['Inter'] text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Protocolo de certificação científica que conecta a geologia de Campos Verdes ao mercado global com{" "}
              <strong className="text-white">
                transparência absoluta
              </strong>{" "}
              através de espectrometria Raman, blockchain e governança institucional
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#caa34b] text-white hover:bg-[#b8923f] px-8"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Explorar o Protocolo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-[#006b4f] bg-white hover:bg-white/90 px-8 font-semibold"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Documentação Técnica
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 bg-white/10 backdrop-blur-md border-2 border-white/20 text-center hover:bg-white/15 transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 text-[#caa34b] mx-auto mb-3" />
                <div className="font-['Inter'] text-2xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="font-['Inter'] text-sm text-gray-200">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main>
        <ManifestoSection />
        <RamanSpectroscopy />
        
        {/* Oracle Fiscal - NOVO */}
        <FiscalOracleSection />
        
        {/* Equipe Interdisciplinar - NOVO */}
        <TeamSection />
        
        <TraceabilityMockup />

        {/* Partners & Ecosystem */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-[#014733] text-white">
                Ecossistema
              </Badge>
              <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
                Parcerias e Desenvolvimento
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600">
                Sinergia entre instituições públicas, privadas e comunidade para
                impulsionar o desenvolvimento sustentável
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#006b4f]/10 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-[#006b4f]" />
                </div>
                <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-3">
                  Prefeitura de Campos Verdes
                </h3>
                <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                  Oracle Fiscal e validadora de origem. Gestão da infraestrutura pública e institucionalização do modelo Campos Verdes 2050.
                </p>
                <Badge className="bg-[#006b4f]/10 text-[#006b4f]">
                  Poder Público
                </Badge>
              </Card>

              <Card className="p-8 border-2 border-[#e5e7eb] hover:border-[#caa34b] transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#caa34b]/10 flex items-center justify-center mb-6">
                  <Sparkles className="h-8 w-8 text-[#caa34b]" />
                </div>
                <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-3">
                  GEMLAB Tech
                </h3>
                <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                  Hub de inovação responsável pela infraestrutura Web3, espectrometria Raman e emissão de certificados digitais (SaaS).
                </p>
                <Badge className="bg-[#caa34b]/10 text-[#caa34b]">
                  Núcleo Tecnológico
                </Badge>
              </Card>

              <Card className="p-8 border-2 border-[#e5e7eb] hover:border-[#014733] transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#014733]/10 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-[#014733]" />
                </div>
                <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-3">
                  COOPESMERALDA
                </h3>
                <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                  Cooperativa que organiza garimpeiros, detém a produção física e emite títulos (CPR/Nota Comercial) com lastro real.
                </p>
                <Badge className="bg-[#014733]/10 text-[#014733]">
                  Base Produtiva
                </Badge>
              </Card>

              <Card className="p-8 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#006b4f]/10 flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-[#006b4f]" />
                </div>
                <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-3">
                  ANM & SEMAD
                </h3>
                <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                  Órgãos reguladores federal (ANM) e estadual (SEMAD-GO) para regularização minerária e licenciamento ambiental.
                </p>
                <Badge className="bg-[#006b4f]/10 text-[#006b4f]">
                  Regulação
                </Badge>
              </Card>

              <Card className="p-8 border-2 border-[#e5e7eb] hover:border-[#014733] transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#014733]/10 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-[#014733]" />
                </div>
                <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-3">
                  SEBRAE & IF Goiano
                </h3>
                <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                  SEBRAE: consultoria para IG e APL. IF Goiano: pesquisa científica (solo/rejeitos) e validação acadêmica.
                </p>
                <Badge className="bg-[#014733]/10 text-[#014733]">
                  Educação & Fomento
                </Badge>
              </Card>

              <Card className="p-8 border-2 border-[#e5e7eb] hover:border-[#caa34b] transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-[#caa34b]/10 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-[#caa34b]" />
                </div>
                <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-3">
                  Associação Benjamim Cristã
                </h3>
                <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                  Braço social focado no bem-estar das famílias mineradoras e distribuição justa dos benefícios gerados.
                </p>
                <Badge className="bg-[#caa34b]/10 text-[#caa34b]">
                  Impacto Social
                </Badge>
              </Card>
            </div>

            {/* Documents */}
          </div>
        </section>

        {/* Portfólio de Projetos Campos Verdes 2050 */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-[#caa34b] text-white">
                Campos Verdes 2050
              </Badge>
              <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
                Portfólio de Projetos
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600">
                12 iniciativas estratégicas que transformam Campos Verdes em referência global de mineração responsável e rastreável
              </p>
            </div>

            {/* Tecnologia & Governança */}
            <div className="mb-12">
              <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-6 flex items-center">
                <div className="w-2 h-8 bg-[#006b4f] mr-4" />
                Tecnologia & Governança
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                  <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    Plataforma de Rastreabilidade GEMLAB
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Sistema que une espectrômetro Raman ao Blockchain (EAS), gerando SpectralHash — a identidade óptica única de cada esmeralda.
                  </p>
                </Card>
                <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                  <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    Oracle Fiscal Municipal
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Integração via API que permite à Prefeitura validar notas fiscais e calcular CFEM/ISS automaticamente via Smart Contract.
                  </p>
                </Card>
                <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                  <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    Underground Vault (Deep Custody)
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Transformação de minas desativadas em cofres de segurança máxima auditados por IoT e Blockchain para custódia de ativos físicos.
                  </p>
                </Card>
                <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                  <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    Indicação Geográfica Digital (IG)
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Digitalização do selo de origem (SEBRAE/INPI) para blindar a marca "Esmeralda de Campos Verdes" globalmente.
                  </p>
                </Card>
              </div>
            </div>

            {/* Educação & Capacitação */}
            <div className="mb-12">
              <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-6 flex items-center">
                <div className="w-2 h-8 bg-[#014733] mr-4" />
                Educação & Capacitação
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#014733] transition-colors">
                  <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    Mãos de Pedra
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Escola de lapidação, escultura e design de joias para jovens de 16 a 24 anos (parceria SENAI/MME).
                  </p>
                </Card>
                <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#014733] transition-colors">
                  <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    Mineração nas Escolas
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Programa de alfabetização científica e geociências para ensino fundamental, criando cultura de mineração responsável.
                  </p>
                </Card>
                <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#014733] transition-colors">
                  <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    Formação de Gemólogos Digitais
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Curso técnico para capacitar profissionais na operação de espectrômetros e sistemas Web3 (novos postos de trabalho).
                  </p>
                </Card>
              </div>
            </div>

            {/* Ambiental & Sustentabilidade */}
            <div className="mb-12">
              <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-6 flex items-center">
                <div className="w-2 h-8 bg-[#caa34b] mr-4" />
                Ambiental & Sustentabilidade
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#caa34b] transition-colors">
                  <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    Reaproveitamento do Talco Xisto
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Conversão do passivo ambiental (rejeito) em Tijolos Ecológicos e Adubo Remineralizador (validado pelo IF Goiano).
                  </p>
                </Card>
                <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#caa34b] transition-colors">
                  <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    Projeto Verdejar
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Iniciativa da COOPESMERALDA para recuperação de áreas degradadas financiada por créditos de regeneração gerados pelo sistema.
                  </p>
                </Card>
              </div>
            </div>

            {/* Financeiro & Mercado */}
            <div>
              <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-6 flex items-center">
                <div className="w-2 h-8 bg-[#1b1b1b] mr-4" />
                Financeiro & Mercado
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#1b1b1b] transition-colors">
                  <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    Fundo Municipal On-Chain
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Mecanismo de funding automático onde % das taxas é travada em smart contract para reinvestimento em saúde, educação e pesquisa.
                  </p>
                </Card>
                <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#1b1b1b] transition-colors">
                  <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    DeFi Mineral
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Estruturação de ofertas de crédito para pequenos mineradores usando a reserva certificada como garantia real.
                  </p>
                </Card>
                <Card className="p-6 border-2 border-[#e5e7eb] hover:border-[#1b1b1b] transition-colors">
                  <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b] mb-2">
                    Registry B2B Global
                  </h4>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Documentação Oficial */}
        <DocumentationSection />

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-[#006b4f] to-[#014733] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold mb-6">
                A Ciência por trás da Raridade
              </h2>
              <p className="font-['Inter'] text-xl text-gray-200 mb-8">
                Adquira esmeraldas certificadas com origem comprovada e identidade digital única. Campos Verdes estabelece o novo padrão global de esmeraldas rastreáveis.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-[#caa34b] text-white hover:bg-[#b8923f] px-8"
                >
                  Verificar Certificado
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/20 hover:border-[#caa34b] px-8 font-semibold backdrop-blur-sm transition-all duration-300"
                >
                  Conhecer a Tecnologia
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