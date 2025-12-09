import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";
import { FileText, Download, Github, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

export function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-gradient-to-b from-[var(--emerald-green)]/5 to-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--emerald-green)]/10 rounded-full mb-6">
                  <FileText className="h-4 w-4 text-[var(--emerald-green)]" />
                  <span className="font-['Inter'] text-sm text-[var(--emerald-green)] uppercase tracking-wider">
                    Documentação Técnica
                  </span>
                </div>
                <h1 className="font-['Montserrat'] mb-6 text-[var(--mineral-black)]">
                  Whitepaper Técnico GEMLAB
                </h1>
                <p className="font-['Inter'] text-xl text-[var(--gray-600)] leading-relaxed mb-8">
                  Documentação completa do Protocolo GEMLAB: arquitetura, implementação técnica 
                  e fundamentos científicos do sistema de rastreabilidade de esmeraldas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-[var(--emerald-green)] hover:bg-[var(--dark-green)] text-white px-8 py-6 text-lg"
                    onClick={() => alert("Whitepaper em desenvolvimento. Consulte a documentação no GitHub.")}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF (Em breve)
                  </Button>
                  <a
                    href="https://github.com/DGuedz/Gemlab#readme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="outline"
                      className="border-2 border-[var(--emerald-green)] text-[var(--emerald-green)] hover:bg-[var(--emerald-green)]/10 px-8 py-6 text-lg"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      Ver no GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <FadeInWhenVisible>
                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 mb-12">
                  <h2 className="font-['Montserrat'] text-2xl mb-4 text-amber-900 mt-0">
                    Documentação Disponível no GitHub
                  </h2>
                  <p className="font-['Inter'] text-amber-800 mb-6">
                    A documentação técnica completa do GEMLAB está disponível em formato open-source no GitHub. 
                    Acesse os links abaixo para informações detalhadas:
                  </p>

                  <div className="space-y-3">
                    <a
                      href="https://github.com/DGuedz/Gemlab#readme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-amber-100 transition-colors border border-amber-300"
                    >
                      <ExternalLink className="h-5 w-5 text-[var(--emerald-green)] flex-shrink-0" />
                      <div>
                        <div className="font-['Inter'] font-semibold text-[var(--mineral-black)]">
                          README Principal
                        </div>
                        <div className="font-['Inter'] text-sm text-[var(--gray-600)]">
                          Visão geral do projeto e quick start
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://github.com/DGuedz/Gemlab/blob/main/README-DEV.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-amber-100 transition-colors border border-amber-300"
                    >
                      <ExternalLink className="h-5 w-5 text-[var(--emerald-green)] flex-shrink-0" />
                      <div>
                        <div className="font-['Inter'] font-semibold text-[var(--mineral-black)]">
                          Documentação Técnica (README-DEV.md)
                        </div>
                        <div className="font-['Inter'] text-sm text-[var(--gray-600)]">
                          Arquitetura, stack tecnológico e implementação detalhada
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://github.com/DGuedz/Gemlab/blob/main/README-EXECUTIVE.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-amber-100 transition-colors border border-amber-300"
                    >
                      <ExternalLink className="h-5 w-5 text-[var(--emerald-green)] flex-shrink-0" />
                      <div>
                        <div className="font-['Inter'] font-semibold text-[var(--mineral-black)]">
                          Visão Executiva (README-EXECUTIVE.md)
                        </div>
                        <div className="font-['Inter'] text-sm text-[var(--gray-600)]">
                          Modelo de negócio, mercado e roadmap estratégico
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://github.com/DGuedz/Gemlab/blob/main/README-COMPLIANCE.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-amber-100 transition-colors border border-amber-300"
                    >
                      <ExternalLink className="h-5 w-5 text-[var(--emerald-green)] flex-shrink-0" />
                      <div>
                        <div className="font-['Inter'] font-semibold text-[var(--mineral-black)]">
                          Framework de Compliance (README-COMPLIANCE.md)
                        </div>
                        <div className="font-['Inter'] text-sm text-[var(--gray-600)]">
                          Conformidade CVM, RFB e regulação blockchain
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://github.com/DGuedz/Gemlab/blob/main/DOCUMENTATION_INDEX.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-amber-100 transition-colors border border-amber-300"
                    >
                      <ExternalLink className="h-5 w-5 text-[var(--emerald-green)] flex-shrink-0" />
                      <div>
                        <div className="font-['Inter'] font-semibold text-[var(--mineral-black)]">
                          Índice de Documentação Completo
                        </div>
                        <div className="font-['Inter'] text-sm text-[var(--gray-600)]">
                          Navegação centralizada de todos os documentos técnicos
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
                  <h2 className="font-['Montserrat'] text-2xl mb-4 text-blue-900 mt-0">
                    Fundamentos Científicos
                  </h2>
                  <p className="font-['Inter'] text-blue-800 mb-4">
                    O Protocolo GEMLAB é fundamentado em três pilares científicos e tecnológicos:
                  </p>
                  <ul className="font-['Inter'] text-blue-800 space-y-2">
                    <li><strong>Espectroscopia Raman:</strong> Análise molecular para geração de SpectralHash único</li>
                    <li><strong>Ethereum Attestation Service (EAS):</strong> Protocolo on-chain para atestações verificáveis</li>
                    <li><strong>Oracle Fiscal:</strong> Integração com poder público para prova de origem certificada</li>
                  </ul>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}