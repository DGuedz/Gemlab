import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Building, CheckCircle2, DollarSign, FileCheck, Shield } from "lucide-react";

export function PrefeituraOracleCard() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#006b4f] to-[#014733]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-10 lg:p-16 bg-white/95 backdrop-blur-md border-4 border-[#caa34b] shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Icon & Title */}
            <div>
              <div className="w-24 h-24 rounded-3xl bg-[#006b4f] flex items-center justify-center mb-8 shadow-xl">
                <Building className="h-14 w-14 text-white" />
              </div>
              
              <Badge className="mb-4 bg-[#006b4f] text-white px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Primeiro Ator da Tríade EAS
              </Badge>
              
              <h2 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-[#1b1b1b] mb-6">
                Prefeitura de Campos Verdes: Oracle Fiscal
              </h2>
              
              <p className="font-['Inter'] text-lg text-gray-700 leading-relaxed mb-6">
                A Prefeitura Municipal atua como <span className="font-bold text-[#006b4f]">Validadora de Origem</span> e{" "}
                <span className="font-bold text-[#006b4f]">Oracle Fiscal</span>, sendo o primeiro elo obrigatório da 
                cadeia de certificação GEMLAB. Sem a atestação municipal, nenhuma esmeralda pode ser certificada 
                cientificamente ou tokenizada.
              </p>
              
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                <p className="font-['Inter'] text-sm text-emerald-900 leading-relaxed">
                  <span className="font-bold">Arquitetura de Incentivos Alinhados:</span> A Prefeitura ganha 
                  com a formalização (CFEM + ISS = R$ 1,6M/ano) e, ao mesmo tempo, garante que apenas esmeraldas 
                  legais sejam certificadas, criando um ciclo virtuoso de compliance e arrecadação.
                </p>
              </div>
            </div>

            {/* Right: Key Functions */}
            <div>
              <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b] mb-6">
                Funções Críticas do Oracle
              </h3>
              
              <div className="space-y-4">
                {/* Function 1 */}
                <Card className="p-6 border-2 border-[#006b4f] bg-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#006b4f] p-3 rounded-xl flex-shrink-0">
                      <FileCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-['Inter'] font-bold text-[#1b1b1b] mb-2">
                        Validação de NF-e Digital
                      </h4>
                      <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                        Sistema integrado via API autentica a Nota Fiscal de Origem e envia hash criptográfico 
                        para blockchain (EAS), criando a "Certidão de Nascimento Fiscal" do ativo
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Function 2 */}
                <Card className="p-6 border-2 border-[#caa34b] bg-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#caa34b] p-3 rounded-xl flex-shrink-0">
                      <DollarSign className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-['Inter'] font-bold text-[#1b1b1b] mb-2">
                        Trigger para Cálculo de Tributos
                      </h4>
                      <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                        Atestado fiscal dispara Smart Contract que calcula automaticamente CFEM (1%) e ISS (5%), 
                        eliminando margem para sonegação e garantindo arrecadação transparente
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Function 3 */}
                <Card className="p-6 border-2 border-emerald-600 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-600 p-3 rounded-xl flex-shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-['Inter'] font-bold text-[#1b1b1b] mb-2">
                        Gatekeeper de Legalidade
                      </h4>
                      <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                        Impede que esmeraldas ilegais ou de origem duvidosa entrem no protocolo GEMLAB, 
                        protegendo a reputação do selo "Campos Verdes Certified" globalmente
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Function 4 */}
                <Card className="p-6 border-2 border-purple-600 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 p-3 rounded-xl flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-['Inter'] font-bold text-[#1b1b1b] mb-2">
                        Gestor do Fundo Municipal On-Chain
                      </h4>
                      <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                        20% da arrecadação travada automaticamente em Smart Contract multisig para financiar 
                        reabilitação ambiental, pesquisa científica e infraestrutura pública
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t-2 border-gray-200">
            <div className="text-center">
              <div className="font-['Montserrat'] text-4xl font-bold text-[#006b4f] mb-2">
                100%
              </div>
              <div className="font-['Inter'] text-sm text-gray-600">
                Esmeraldas com NF-e Validada
              </div>
            </div>
            <div className="text-center">
              <div className="font-['Montserrat'] text-4xl font-bold text-[#caa34b] mb-2">
                6%
              </div>
              <div className="font-['Inter'] text-sm text-gray-600">
                Carga Tributária Total (CFEM + ISS)
              </div>
            </div>
            <div className="text-center">
              <div className="font-['Montserrat'] text-4xl font-bold text-emerald-600 mb-2">
                R$ 1,6M
              </div>
              <div className="font-['Inter'] text-sm text-gray-600">
                Arrecadação Anual Projetada
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
