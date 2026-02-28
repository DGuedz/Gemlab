import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Shield, Building2, Vault, CheckCircle2 } from "lucide-react";

export function CooperativesHighlight() {
  return (
    <section className="py-20 bg-gradient-to-b from-[var(--emerald-green)] to-[#014733]/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="p-12 border-4 border-[#caa34b] bg-white/15 backdrop-blur-md shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '30px 30px',
                }}
              />
            </div>

            {/* Badge Principal */}
            <div className="text-center mb-8 relative z-10">
              <Badge className="bg-[#014733] text-white px-8 py-3 text-lg mb-6">
                <Shield className="h-6 w-6 mr-3" />
                APL DE CAMPOS VERDES
              </Badge>
            </div>

            {/* Conteúdo Principal */}
            <div className="relative z-10 space-y-8">
              <div className="text-center">
                <h2 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-white mb-4">
                  COOPERATIVAS DO APL
                </h2>
                <p className="font-['Inter'] text-2xl font-mono text-[#caa34b] mb-6">
                  Arranjo Produtivo Local
                </p>
                <p className="font-['Inter'] text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Rede de{" "}
                  <span className="font-bold text-[#caa34b]">
                    Cooperativas Credenciadas
                  </span>{" "}
                  e{" "}
                  <span className="font-bold text-[#caa34b]">
                    Produtores Locais
                  </span>{" "}
                  integrados ao Protocolo GEMLAB
                </p>
              </div>

              {/* Responsabilidades */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card className="p-6 bg-white/10 border-2 border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#caa34b] flex items-center justify-center">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-['Montserrat'] text-lg font-bold text-white">
                      Emissão de Prova de Origem
                    </h3>
                    <p className="font-['Inter'] text-sm text-white/80">
                      Atestado EAS #1 que valida a extração legal em Campos
                      Verdes - GO
                    </p>
                  </div>
                </Card>

                <Card className="p-6 bg-white/10 border-2 border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#caa34b] flex items-center justify-center">
                      <Vault className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-['Montserrat'] text-lg font-bold text-white">
                      Custódia Distribuída
                    </h3>
                    <p className="font-['Inter'] text-sm text-white/80">
                      Gestão de cofres credenciados com auditoria IoT + Blockchain
                    </p>
                  </div>
                </Card>

                <Card className="p-6 bg-white/10 border-2 border-white/20 hover:bg-white/15 transition-all">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#caa34b] flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-['Montserrat'] text-lg font-bold text-white">
                      Organização Produtiva
                    </h3>
                    <p className="font-['Inter'] text-sm text-white/80">
                      Rede que reúne garimpeiros e estrutura a cadeia de
                      valor
                    </p>
                  </div>
                </Card>
              </div>

              {/* Papel no Ecossistema */}
              <Card className="p-8 bg-white/5 border-2 border-white/10">
                <h3 className="font-['Montserrat'] text-2xl font-bold text-white mb-6 text-center">
                  Papel Crítico no Ecossistema
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-[#caa34b] flex-shrink-0 mt-1" />
                    <p className="font-['Inter'] text-base text-white/90">
                      <span className="font-bold text-white">
                        Única entidade autorizada
                      </span>{" "}
                      a emitir o Atestado de Origem (EAS #1), validando que a
                      esmeralda foi extraída legalmente
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-[#caa34b] flex-shrink-0 mt-1" />
                    <p className="font-['Inter'] text-base text-white/90">
                      <span className="font-bold text-white">
                        Custodiante oficial
                      </span>{" "}
                      responsável pela guarda física das esmeraldas certificadas
                      no Underground Vault
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-[#caa34b] flex-shrink-0 mt-1" />
                    <p className="font-['Inter'] text-base text-white/90">
                      <span className="font-bold text-white">
                        Representa 150+ garimpeiros formalizados
                      </span>
                      , garantindo distribuição justa de benefícios e compliance
                      trabalhista
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-[#caa34b] flex-shrink-0 mt-1" />
                    <p className="font-['Inter'] text-base text-white/90">
                      <span className="font-bold text-white">
                        Emite títulos regulamentados (CPR/Nota Comercial)
                      </span>{" "}
                      com lastro real, permitindo acesso a capital de giro
                    </p>
                  </div>
                </div>
              </Card>

              {/* Dados da Cooperativa */}
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="p-4 bg-white/10 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-[#caa34b] mb-1">
                    150+
                  </div>
                  <div className="font-['Inter'] text-xs text-white/80">
                    Garimpeiros Formalizados
                  </div>
                </Card>
                <Card className="p-4 bg-white/10 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-[#caa34b] mb-1">
                    1,247
                  </div>
                  <div className="font-['Inter'] text-xs text-white/80">
                    Esmeraldas Custodiadas
                  </div>
                </Card>
                <Card className="p-4 bg-white/10 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-[#caa34b] mb-1">
                    100%
                  </div>
                  <div className="font-['Inter'] text-xs text-white/80">
                    Rastreabilidade EAS
                  </div>
                </Card>
                <Card className="p-4 bg-white/10 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-[#caa34b] mb-1">
                    2024
                  </div>
                  <div className="font-['Inter'] text-xs text-white/80">
                    Ano de Fundação
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
