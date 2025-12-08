import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Building, CheckCircle2, AlertCircle, TrendingUp, DollarSign, FileText, ExternalLink } from "lucide-react";

export function FiscalOracleSection() {
  const oracleFeatures = [
    {
      title: "Validação de NF-e Digital",
      description: "Prefeitura autentica a Nota Fiscal de Origem e envia hash criptográfico para blockchain (EAS)",
      icon: FileText
    },
    {
      title: "Cálculo Automático de Taxas",
      description: "Smart Contract calcula CFEM (1%) e ISS (5%) instantaneamente após validação fiscal",
      icon: DollarSign
    },
    {
      title: "Atestado de Legalidade",
      description: "Prova imutável de origem fiscal que permite certificação científica downstream",
      icon: CheckCircle2
    },
    {
      title: "Combate à Evasão Sistêmica",
      description: "Quebra o ciclo de 'pedra sem CEP' que causa perda de R$ 1,6M/ano em arrecadação municipal",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-6 bg-[#006b4f] text-white px-6 py-2.5">
            <Building className="h-4 w-4 mr-2" />
            Oracle Fiscal Municipal
          </Badge>
          <h2 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-[#1b1b1b] mb-6">
            A Prefeitura como Validadora de Origem e Guardião da Conformidade
          </h2>
          <p className="font-['Inter'] text-xl text-gray-600 leading-relaxed">
            Primeiro ator da <span className="font-bold text-[#006b4f]">Tríade de Confiança EAS</span>, 
            responsável por atestar a legalidade fiscal e disparar cálculos automáticos de tributos via blockchain
          </p>
        </div>

        {/* Main Oracle Card */}
        <Card className="p-12 mb-12 border-2 border-[#006b4f] bg-gradient-to-br from-white to-[#006b4f]/5">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: The Problem */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 p-3 rounded-xl">
                  <AlertCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b]">
                  O Problema da Informalidade
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <div className="font-['Inter'] font-bold text-red-900 mb-2">
                    99% das esmeraldas sem NF de origem
                  </div>
                  <p className="font-['Inter'] text-sm text-red-700">
                    Impossível rastrear, tributar ou certificar esmeraldas que saem direto do garimpo 
                    para atravessadores clandestinos
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <div className="font-['Inter'] font-bold text-red-900 mb-2">
                    ICMS 17% incentiva sonegação
                  </div>
                  <p className="font-['Inter'] text-sm text-red-700">
                    Alta tributação estadual torna economicamente inviável a formalização, 
                    perpetuando o mercado paralelo
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <div className="font-['Inter'] font-bold text-red-900 mb-2">
                    R$ 1,6 milhão/ano em evasão
                  </div>
                  <p className="font-['Inter'] text-sm text-red-700">
                    Prefeitura perde arrecadação de CFEM e ISS que poderiam financiar saúde, 
                    educação e infraestrutura local
                  </p>
                </div>
              </div>
            </div>

            {/* Right: The Solution */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b]">
                  Oracle Fiscal GEMLAB
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <div className="font-['Inter'] font-bold text-emerald-900 mb-2">
                    Validação Automatizada de NF-e
                  </div>
                  <p className="font-['Inter'] text-sm text-emerald-700">
                    Sistema integrado via API valida autenticidade da Nota Fiscal e registra 
                    hash criptográfico na blockchain Ethereum (EAS)
                  </p>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <div className="font-['Inter'] font-bold text-emerald-900 mb-2">
                    Smart Contract Calcula Tributos
                  </div>
                  <p className="font-['Inter'] text-sm text-emerald-700">
                    CFEM (1% sobre valor) e ISS (5% sobre serviços) calculados automaticamente 
                    e depositados em wallet municipal auditável
                  </p>
                </div>

                <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                  <div className="font-['Inter'] font-bold text-emerald-900 mb-2">
                    100% de Rastreabilidade Fiscal
                  </div>
                  <p className="font-['Inter'] text-sm text-emerald-700">
                    Cada esmeralda certificada possui 'Certidão de Nascimento Fiscal' imutável, 
                    tornando impossível comercialização informal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Oracle Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {oracleFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 border-2 border-gray-200 hover:border-[#006b4f] transition-all"
            >
              <feature.icon className="h-10 w-10 text-[#006b4f] mb-4" />
              <h4 className="font-['Inter'] font-bold text-[#1b1b1b] mb-2">
                {feature.title}
              </h4>
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Integration Timeline */}
        <Card className="p-10 bg-[#006b4f] text-white">
          <h3 className="font-['Montserrat'] text-3xl font-bold mb-8 text-center">
            Fluxo de Integração Oracle ↔ Blockchain
          </h3>
          
          <div className="grid md:grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#caa34b] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <div className="font-['Inter'] font-bold mb-2">Extração Legal</div>
              <p className="font-['Inter'] text-xs text-white/80">
                Garimpeiro formalizado extrai esmeralda
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#caa34b] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <div className="font-['Inter'] font-bold mb-2">NF-e Gerada</div>
              <p className="font-['Inter'] text-xs text-white/80">
                Sistema emite nota fiscal digital
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-white text-[#006b4f] flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <div className="font-['Inter'] font-bold mb-2">Oracle Valida</div>
              <p className="font-['Inter'] text-xs text-white/80">
                Prefeitura autentica e registra hash
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#caa34b] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <div className="font-['Inter'] font-bold mb-2">Smart Contract</div>
              <p className="font-['Inter'] text-xs text-white/80">
                Calcula CFEM + ISS automaticamente
              </p>
            </div>

            {/* Step 5 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#caa34b] text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                5
              </div>
              <div className="font-['Inter'] font-bold mb-2">Certificação</div>
              <p className="font-['Inter'] text-xs text-white/80">
                Esmeralda liberada para análise Raman
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button 
              size="lg"
              className="bg-[#caa34b] text-white hover:bg-[#b8923f]"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Ver Dashboard de Arrecadação Municipal
            </Button>
            <p className="font-['Inter'] text-sm text-white/70 mt-4">
              Acesse transparência total das taxas coletadas via blockchain
            </p>
          </div>
        </Card>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="p-8 text-center border-2 border-[#006b4f]">
            <div className="font-['Montserrat'] text-5xl font-bold text-[#006b4f] mb-2">
              100%
            </div>
            <div className="font-['Inter'] font-bold text-lg text-[#1b1b1b] mb-2">
              Origem Rastreável
            </div>
            <p className="font-['Inter'] text-sm text-gray-600">
              Toda esmeralda certificada possui NF-e validada pela Prefeitura
            </p>
          </Card>

          <Card className="p-8 text-center border-2 border-[#caa34b]">
            <div className="font-['Montserrat'] text-5xl font-bold text-[#caa34b] mb-2">
              R$ 1,6M
            </div>
            <div className="font-['Inter'] font-bold text-lg text-[#1b1b1b] mb-2">
              Arrecadação Anual
            </div>
            <p className="font-['Inter'] text-sm text-gray-600">
              Projeção de recuperação fiscal com formalização via GEMLAB
            </p>
          </Card>

          <Card className="p-8 text-center border-2 border-emerald-600">
            <div className="font-['Montserrat'] text-5xl font-bold text-emerald-600 mb-2">
              6%
            </div>
            <div className="font-['Inter'] font-bold text-lg text-[#1b1b1b] mb-2">
              Carga Tributária Total
            </div>
            <p className="font-['Inter'] text-sm text-gray-600">
              CFEM 1% + ISS 5% calculados automaticamente on-chain
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
