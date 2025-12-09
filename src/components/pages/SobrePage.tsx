import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Target, Eye, Award, Sparkles, TrendingUp, Users, Globe2, Shield } from "lucide-react";

export function SobrePage() {
  const valores = [
    {
      titulo: "Transparência Radical",
      descricao: "Dados on-chain públicos e auditáveis por qualquer pessoa",
      icon: Globe2,
    },
    {
      titulo: "Ciência em Primeiro",
      descricao: "Decisões baseadas em evidências científicas comprovadas",
      icon: Sparkles,
    },
    {
      titulo: "Compliance Total",
      descricao: "Conformidade absoluta com CVM, RFB e legislação brasileira",
      icon: Shield,
    },
    {
      titulo: "Impacto Local",
      descricao: "Desenvolvimento econômico sustentável em Campos Verdes",
      icon: Users,
    },
  ];

  const marcos = [
    { ano: "2024", evento: "Seleção CENTELHA - Programa de Inovação FAPEG" },
    { ano: "2024", evento: "Parceria com COOPESMERALDA - Cooperativa de Garimpeiros" },
    { ano: "2024", evento: "Desenvolvimento do Protótipo v0.1.0-alpha" },
    { ano: "2024", evento: "Deploy em Sepolia Testnet (Ethereum)" },
    { ano: "2025", evento: "MVP em Produção (roadmap)" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[var(--emerald-green)]/5 to-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-['Montserrat'] mb-6 text-[var(--mineral-black)]">
                  Sobre o GemLab
                </h1>
                <p className="font-['Inter'] text-xl text-[var(--gray-600)] leading-relaxed">
                  Empresa de tecnologia e certificação científica que está revolucionando 
                  a rastreabilidade de esmeraldas brasileiras através do Protocolo GEMLAB.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <FadeInWhenVisible>
                <Card className="border-2 border-[var(--emerald-green)]/20 hover:border-[var(--emerald-green)] transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-[var(--emerald-green)]/10 flex items-center justify-center mb-4">
                      <Target className="h-8 w-8 text-[var(--emerald-green)]" />
                    </div>
                    <CardTitle className="font-['Montserrat'] text-2xl">
                      Nossa Missão
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-['Inter'] text-[var(--gray-600)] leading-relaxed text-lg">
                      Combater a evasão fiscal sistêmica na mineração de gemas através de 
                      tecnologia blockchain, certificação científica e governança fiscal 
                      transparente, gerando desenvolvimento econômico sustentável para 
                      Campos Verdes - GO.
                    </p>
                  </CardContent>
                </Card>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <Card className="border-2 border-[var(--gold-soft)]/20 hover:border-[var(--gold-soft)] transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-[var(--gold-soft)]/10 flex items-center justify-center mb-4">
                      <Eye className="h-8 w-8 text-[var(--gold-soft)]" />
                    </div>
                    <CardTitle className="font-['Montserrat'] text-2xl">
                      Nossa Visão
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-['Inter'] text-[var(--gray-600)] leading-relaxed text-lg">
                      Tornar-se o padrão global de rastreabilidade e certificação para 
                      esmeraldas, expandindo o modelo para outras gemas preciosas e criando 
                      um ecossistema de mineração 4.0 totalmente transparente e sustentável.
                    </p>
                  </CardContent>
                </Card>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20 bg-[var(--gray-50)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="font-['Montserrat'] mb-4 text-[var(--mineral-black)]">
                  Nossos Valores
                </h2>
                <p className="font-['Inter'] text-lg text-[var(--gray-600)] max-w-2xl mx-auto">
                  Princípios que guiam cada decisão técnica e estratégica
                </p>
              </div>
            </FadeInWhenVisible>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {valores.map((valor, index) => {
                const IconComponent = valor.icon;
                return (
                  <FadeInWhenVisible key={index} delay={index * 0.1}>
                    <Card className="text-center border-2 hover:border-[var(--emerald-green)] transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-[var(--emerald-green)]/10 flex items-center justify-center mb-4 mx-auto">
                          <IconComponent className="h-8 w-8 text-[var(--emerald-green)]" />
                        </div>
                        <CardTitle className="font-['Montserrat']">
                          {valor.titulo}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-['Inter'] text-sm text-[var(--gray-600)]">
                          {valor.descricao}
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInWhenVisible>
                );
              })}
            </div>
          </div>
        </section>

        {/* O que fazemos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <FadeInWhenVisible>
                <h2 className="font-['Montserrat'] mb-12 text-center text-[var(--mineral-black)]">
                  O que Fazemos
                </h2>
              </FadeInWhenVisible>

              <div className="space-y-8">
                <FadeInWhenVisible delay={0.1}>
                  <div className="bg-[var(--emerald-green)]/5 p-8 rounded-2xl border-2 border-[var(--emerald-green)]/20">
                    <h3 className="font-['Montserrat'] text-xl mb-3 text-[var(--mineral-black)]">
                      Certificação Científica
                    </h3>
                    <p className="font-['Inter'] text-[var(--gray-600)] leading-relaxed">
                      Utilizamos espectroscopia Raman para gerar SpectralHash único de cada esmeralda, 
                      criando uma impressão digital molecular impossível de falsificar. Nossa tecnologia 
                      une gemologia tradicional com blockchain para certificação definitiva.
                    </p>
                  </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.2}>
                  <div className="bg-[var(--gold-soft)]/5 p-8 rounded-2xl border-2 border-[var(--gold-soft)]/20">
                    <h3 className="font-['Montserrat'] text-xl mb-3 text-[var(--mineral-black)]">
                      Rastreabilidade Blockchain
                    </h3>
                    <p className="font-['Inter'] text-[var(--gray-600)] leading-relaxed">
                      Implementamos o protocolo EAS (Ethereum Attestation Service) para criar registros 
                      imutáveis e públicos da jornada de cada esmeralda, desde a jazida até o consumidor 
                      final, com custódia transparente e verificável.
                    </p>
                  </div>
                </FadeInWhenVisible>

                <FadeInWhenVisible delay={0.3}>
                  <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200">
                    <h3 className="font-['Montserrat'] text-xl mb-3 text-[var(--mineral-black)]">
                      Governança Fiscal
                    </h3>
                    <p className="font-['Inter'] text-[var(--gray-600)] leading-relaxed">
                      Trabalhamos com a Prefeitura de Campos Verdes como Oracle fiscal, registrando 
                      oficialmente a origem de cada gema e combatendo a evasão fiscal que afeta o 
                      desenvolvimento da região mineradora.
                    </p>
                  </div>
                </FadeInWhenVisible>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline/Marcos */}
        <section className="py-20 bg-[var(--gray-50)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="font-['Montserrat'] mb-4 text-[var(--mineral-black)]">
                  Nossa Jornada
                </h2>
                <p className="font-['Inter'] text-lg text-[var(--gray-600)] max-w-2xl mx-auto">
                  Marcos importantes na construção do ecossistema GEMLAB
                </p>
              </div>
            </FadeInWhenVisible>

            <div className="max-w-3xl mx-auto">
              {marcos.map((marco, index) => (
                <FadeInWhenVisible key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-6 mb-8 group">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--emerald-green)] to-[var(--dark-green)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="font-['Montserrat'] text-sm text-white font-bold">
                          {marco.ano}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border-2 border-gray-100 group-hover:border-[var(--emerald-green)] transition-all duration-300">
                      <p className="font-['Inter'] text-[var(--gray-700)]">
                        {marco.evento}
                      </p>
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        {/* Reconhecimentos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--gold-soft)]/10 rounded-full mb-6">
                  <Award className="h-5 w-5 text-[var(--gold-soft)]" />
                  <span className="font-['Inter'] text-sm text-[var(--gold-soft)] uppercase tracking-wider">
                    Reconhecimentos
                  </span>
                </div>
                <h2 className="font-['Montserrat'] mb-6 text-[var(--mineral-black)]">
                  Apoio Institucional
                </h2>
                <p className="font-['Inter'] text-lg text-[var(--gray-600)] mb-12 leading-relaxed">
                  O GEMLAB é fruto de parceria entre inovação tecnológica, ciência e 
                  políticas públicas de desenvolvimento regional.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-[var(--emerald-green)]/5 rounded-2xl border-2 border-[var(--emerald-green)]/20">
                    <h3 className="font-['Montserrat'] text-lg mb-2 text-[var(--mineral-black)]">
                      Programa CENTELHA
                    </h3>
                    <p className="font-['Inter'] text-sm text-[var(--gray-600)]">
                      Financiamento FAPEG para desenvolvimento de inovação tecnológica
                    </p>
                  </div>

                  <div className="p-8 bg-[var(--gold-soft)]/5 rounded-2xl border-2 border-[var(--gold-soft)]/20">
                    <h3 className="font-['Montserrat'] text-lg mb-2 text-[var(--mineral-black)]">
                      COOPESMERALDA
                    </h3>
                    <p className="font-['Inter'] text-sm text-[var(--gray-600)]">
                      Cooperativa de garimpeiros de Campos Verdes - Parceiro estratégico
                    </p>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-[var(--emerald-green)]/5 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-['Montserrat'] mb-6 text-[var(--mineral-black)]">
                  Quer fazer parte dessa história?
                </h2>
                <p className="font-['Inter'] text-lg text-[var(--gray-600)] mb-8">
                  Estamos abertos a parcerias estratégicas, investimento e colaboração técnica.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contato"
                    className="px-8 py-3 bg-[var(--emerald-green)] text-white rounded-lg hover:bg-[var(--dark-green)] transition-colors font-['Inter'] font-medium"
                  >
                    Entre em Contato
                  </a>
                  <a
                    href="/carreiras"
                    className="px-8 py-3 border-2 border-[var(--emerald-green)] text-[var(--emerald-green)] rounded-lg hover:bg-[var(--emerald-green)]/10 transition-colors font-['Inter'] font-medium"
                  >
                    Trabalhe Conosco
                  </a>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}