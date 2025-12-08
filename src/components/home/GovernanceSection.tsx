import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Building, TrendingUp, Lock, Eye, ExternalLink, CheckCircle2 } from "lucide-react";

export function GovernanceSection() {
  const governanceFeatures = [
    {
      title: "Oracle Fiscal Automatizado",
      description: "Prefeitura valida NF-e e envia hash para blockchain, disparando cálculo automático de CFEM (1%) e ISS (5%) via Smart Contract",
      icon: Building
    },
    {
      title: "Fundo Municipal On-Chain",
      description: "20% da arrecadação travada automaticamente em wallet multi-assinatura auditável publicamente em tempo real",
      icon: Lock
    },
    {
      title: "Dashboard Público de Arrecadação",
      description: "Painel transparente mostrando volume de esmeraldas certificadas, impostos arrecadados e destinação de recursos",
      icon: Eye
    },
    {
      title: "Auditoria Descentralizada",
      description: "Histórico imutável de todas as transações fiscais acessível via blockchain explorer (Etherscan/Base)",
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#006b4f] to-[#014733] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge className="mb-6 bg-white/20 border-white/30 text-white px-6 py-2.5">
            <Building className="h-4 w-4 mr-2" />
            Governança Transparente
          </Badge>
          <h2 className="font-['Montserrat'] text-4xl lg:text-6xl font-bold mb-6">
            A Prefeitura como Oracle Fiscal: Combatendo Evasão na Origem
          </h2>
          <p className="font-['Inter'] text-xl lg:text-2xl text-white/90 leading-relaxed">
            Smart Contracts convertem arrecadação tributária em processo{" "}
            <span className="font-bold text-[#caa34b]">automático, transparente e auditável</span>, 
            eliminando margem para sonegação
          </p>
        </div>

        {/* Main Governance Card */}
        <Card className="p-12 bg-white/10 backdrop-blur-md border-2 border-white/20 mb-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Problem → Solution */}
            <div>
              <h3 className="font-['Montserrat'] text-3xl font-bold text-white mb-6">
                Do Problema à Solução
              </h3>
              
              {/* Problem */}
              <div className="bg-red-500/20 border-2 border-red-400/50 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500 text-white p-3 rounded-lg flex-shrink-0">
                    <TrendingUp className="h-6 w-6 rotate-180" />
                  </div>
                  <div>
                    <h4 className="font-['Inter'] font-bold text-white mb-2">
                      Cenário Atual (Informalidade)
                    </h4>
                    <ul className="font-['Inter'] text-sm text-white/80 space-y-2">
                      <li>• 99% das esmeraldas sem NF de origem</li>
                      <li>• ICMS 17% incentiva comércio clandestino</li>
                      <li>• Zero arrecadação de CFEM/ISS</li>
                      <li>• Impossível fiscalizar cadeia fragmentada</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-emerald-500/20 border-2 border-emerald-400/50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500 text-white p-3 rounded-lg flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-['Inter'] font-bold text-white mb-2">
                      Modelo GEMLAB (Formalização)
                    </h4>
                    <ul className="font-['Inter'] text-sm text-white/80 space-y-2">
                      <li>• 100% das pedras com NF-e validada on-chain</li>
                      <li>• Cálculo automático CFEM (1%) + ISS (5%)</li>
                      <li>• R$ 1,6M/ano em arrecadação recuperada</li>
                      <li>• Auditoria pública em tempo real via blockchain</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Flow Diagram */}
            <div>
              <h3 className="font-['Montserrat'] text-3xl font-bold text-white mb-6">
                Fluxo de Validação Fiscal
              </h3>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="bg-white/5 border-l-4 border-[#caa34b] p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#caa34b] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <h4 className="font-['Inter'] font-bold text-white">Extração Legal</h4>
                  </div>
                  <p className="font-['Inter'] text-sm text-white/70 ml-11">
                    Garimpeiro formalizado extrai esmeralda em área licenciada
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white/5 border-l-4 border-[#caa34b] p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#caa34b] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <h4 className="font-['Inter'] font-bold text-white">NF-e Digital</h4>
                  </div>
                  <p className="font-['Inter'] text-sm text-white/70 ml-11">
                    Sistema gera NF-e de origem com hash criptográfico
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white/5 border-l-4 border-[#caa34b] p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#caa34b] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <h4 className="font-['Inter'] font-bold text-white">Oracle Fiscal</h4>
                  </div>
                  <p className="font-['Inter'] text-sm text-white/70 ml-11">
                    Prefeitura valida NF-e e registra hash na blockchain (EAS)
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-white/5 border-l-4 border-[#caa34b] p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#caa34b] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <h4 className="font-['Inter'] font-bold text-white">Smart Contract</h4>
                  </div>
                  <p className="font-['Inter'] text-sm text-white/70 ml-11">
                    Cálculo automático: CFEM 1% + ISS 5% depositados em wallet municipal
                  </p>
                </div>

                {/* Step 5 */}
                <div className="bg-white/5 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <h4 className="font-['Inter'] font-bold text-white">Fundo On-Chain</h4>
                  </div>
                  <p className="font-['Inter'] text-sm text-white/70 ml-11">
                    20% travado automaticamente para reabilitação ambiental e pesquisa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Governance Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {governanceFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/15 transition-all"
            >
              <feature.icon className="h-10 w-10 text-[#caa34b] mb-4" />
              <h4 className="font-['Inter'] font-bold text-white mb-2">
                {feature.title}
              </h4>
              <p className="font-['Inter'] text-sm text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-white text-[#006b4f] hover:bg-gray-100 px-8 font-semibold"
          >
            <Eye className="h-5 w-5 mr-2" />
            Acessar Dashboard Público de Arrecadação
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
          <p className="font-['Inter'] text-sm text-white/60 mt-4">
            Transparência total: verifique em tempo real a arrecadação municipal via blockchain
          </p>
        </div>
      </div>
    </section>
  );
}
