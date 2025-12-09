import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle2, Gem, Microscope, Shield, Smartphone, MapPin, FileCheck } from "lucide-react";

export function ComoFuncionaPage() {
  const etapas = [
    {
      numero: "01",
      titulo: "Origem na Jazida",
      descricao: "Esmeralda extraída em Campos Verdes - GO. Prefeitura Municipal atesta a origem através de sistema Oracle fiscal integrado ao blockchain.",
      icon: MapPin,
      cor: "emerald",
    },
    {
      numero: "02",
      titulo: "Análise Espectroscópica",
      descricao: "Espectroscopia Raman gera SpectralHash único - a impressão digital molecular da gema. Impossível falsificar ou duplicar.",
      icon: Microscope,
      cor: "blue",
    },
    {
      numero: "03",
      titulo: "Certificação Digital",
      descricao: "Gemólogo credenciado emite certificado digital (NFT-EAS) registrando todas as propriedades gemológicas verificáveis on-chain.",
      icon: FileCheck,
      cor: "gold",
    },
    {
      numero: "04",
      titulo: "Custódia Transparente",
      descricao: "Esmeralda física armazenada em custódia auditável. Histórico completo de posse rastreável via blockchain (Sepolia Testnet).",
      icon: Shield,
      cor: "green",
    },
    {
      numero: "05",
      titulo: "Acesso Digital",
      descricao: "Proprietário acessa certificado via app, visualiza histórico, compartilha proveniência e pode comercializar com total transparência.",
      icon: Smartphone,
      cor: "emerald",
    },
  ];

  const pilares = [
    {
      titulo: "Prova de Origem",
      descricao: "Prefeitura de Campos Verdes como Oracle fiscal",
      icon: MapPin,
    },
    {
      titulo: "Prova de Ciência",
      descricao: "SpectralHash via Raman Spectroscopy",
      icon: Microscope,
    },
    {
      titulo: "Prova de Custódia",
      descricao: "Ethereum Attestation Service (EAS) on-chain",
      icon: Shield,
    },
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--emerald-green)]/10 rounded-full mb-6">
                  <Gem className="h-4 w-4 text-[var(--emerald-green)]" />
                  <span className="font-['Inter'] text-sm text-[var(--emerald-green)] uppercase tracking-wider">
                    Protocolo GEMLAB
                  </span>
                </div>
                <h1 className="font-['Montserrat'] mb-6 text-[var(--mineral-black)]">
                  Como Funciona a Certificação Digital
                </h1>
                <p className="font-['Inter'] text-xl text-[var(--gray-600)] mb-8 leading-relaxed">
                  Do garimpo ao certificado: entenda o fluxo completo de rastreabilidade 
                  que transforma esmeraldas em ativos digitais verificáveis.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Tríade de Confiança */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="font-['Montserrat'] mb-4 text-[var(--mineral-black)]">
                  Tríade de Confiança EAS
                </h2>
                <p className="font-['Inter'] text-lg text-[var(--gray-600)] max-w-2xl mx-auto">
                  Três camadas de verificação que garantem autenticidade imutável
                </p>
              </div>
            </FadeInWhenVisible>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pilares.map((pilar, index) => {
                const IconComponent = pilar.icon;
                return (
                  <FadeInWhenVisible key={index} delay={index * 0.2}>
                    <Card className="border-2 hover:border-[var(--emerald-green)] transition-all duration-300 h-full">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-[var(--emerald-green)]/10 flex items-center justify-center mb-4 mx-auto">
                          <IconComponent className="h-8 w-8 text-[var(--emerald-green)]" />
                        </div>
                        <CardTitle className="text-center font-['Montserrat']">
                          {pilar.titulo}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-['Inter'] text-center text-[var(--gray-600)]">
                          {pilar.descricao}
                        </p>
                      </CardContent>
                    </Card>
                  </FadeInWhenVisible>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fluxo Completo */}
        <section className="py-20 bg-[var(--gray-50)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="font-['Montserrat'] mb-4 text-[var(--mineral-black)]">
                  Fluxo de Certificação Passo a Passo
                </h2>
                <p className="font-['Inter'] text-lg text-[var(--gray-600)] max-w-2xl mx-auto">
                  Acompanhe a jornada da esmeralda desde a extração até seu certificado digital
                </p>
              </div>
            </FadeInWhenVisible>

            <div className="max-w-4xl mx-auto space-y-12">
              {etapas.map((etapa, index) => {
                const IconComponent = etapa.icon;
                return (
                  <FadeInWhenVisible key={index} delay={index * 0.1}>
                    <div className="flex items-start gap-6 group">
                      {/* Número */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--emerald-green)] to-[var(--dark-green)] flex flex-col items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="font-['Montserrat'] text-2xl text-white font-bold">
                            {etapa.numero}
                          </span>
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <Card className="flex-1 border-2 hover:border-[var(--emerald-green)] transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[var(--emerald-green)]/10 flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-[var(--emerald-green)]" />
                            </div>
                            <CardTitle className="font-['Montserrat']">
                              {etapa.titulo}
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="font-['Inter'] text-[var(--gray-600)] leading-relaxed">
                            {etapa.descricao}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </FadeInWhenVisible>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="max-w-4xl mx-auto">
                <h2 className="font-['Montserrat'] mb-12 text-center text-[var(--mineral-black)]">
                  Por que escolher o Protocolo GEMLAB?
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Rastreabilidade completa da origem à venda",
                    "Certificação científica com SpectralHash único",
                    "Conformidade fiscal através de Oracle governamental",
                    "Transparência total via blockchain público",
                    "Impossível falsificar ou duplicar certificados",
                    "Histórico de custódia imutável e auditável",
                  ].map((beneficio, index) => (
                    <FadeInWhenVisible key={index} delay={index * 0.1}>
                      <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-[var(--emerald-green)]/5 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-[var(--emerald-green)] flex-shrink-0 mt-0.5" />
                        <span className="font-['Inter'] text-[var(--gray-700)]">
                          {beneficio}
                        </span>
                      </div>
                    </FadeInWhenVisible>
                  ))}
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
                  Pronto para certificar suas esmeraldas?
                </h2>
                <p className="font-['Inter'] text-lg text-[var(--gray-600)] mb-8">
                  Entre em contato conosco e descubra como implementar o Protocolo GEMLAB 
                  em sua operação.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contato"
                    className="px-8 py-3 bg-[var(--emerald-green)] text-white rounded-lg hover:bg-[var(--dark-green)] transition-colors font-['Inter'] font-medium"
                  >
                    Falar com Especialista
                  </a>
                  <a
                    href="https://github.com/DGuedz/Gemlab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 border-2 border-[var(--emerald-green)] text-[var(--emerald-green)] rounded-lg hover:bg-[var(--emerald-green)]/10 transition-colors font-['Inter'] font-medium"
                  >
                    Ver Documentação Técnica
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
