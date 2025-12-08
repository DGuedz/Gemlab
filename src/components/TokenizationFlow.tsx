import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Box, Gem, Shield, FileCheck, Coins } from "lucide-react";

export function TokenizationFlow() {
  const phases = [
    {
      phase: "Fase 1: Lote Mineral",
      standard: "ERC-1155",
      icon: Box,
      color: "#014733",
      events: [
        { name: "RawExtraction", desc: "Registro do lote extraído" },
        { name: "BatchProcessed", desc: "Processamento e beneficiamento" },
        { name: "PreGrading", desc: "Classificação preliminar" },
      ],
      data: [
        "Georreferenciamento da extração",
        "Licenças ambientais (hash)",
        "Peso bruto e concentrado",
        "Data/hora e responsável",
        "Splits e merges do lote",
      ],
    },
    {
      phase: "Fase 2: Pedra Individual",
      standard: "ERC-721",
      icon: Gem,
      color: "#006b4f",
      events: [
        { name: "StoneMinted", desc: "NFT único da pedra" },
        { name: "CutPerformed", desc: "Lapidação e corte" },
        { name: "GemCertified", desc: "Certificação gemológica" },
      ],
      data: [
        "ID único e vínculo ao lote",
        "Peso em quilates (ct)",
        "Características: cor/clareza",
        "SpectralHash (assinatura única)",
        "Fotos, vídeos 360°, laudos",
      ],
    },
    {
      phase: "Fase 3: Compliance & Trading",
      standard: "ERC-3643",
      icon: Shield,
      color: "#caa34b",
      events: [
        { name: "BuyerWhitelisted", desc: "KYC/AML verificado" },
        { name: "ValuationUpdated", desc: "Avaliação atualizada" },
        { name: "RoyaltyComputed", desc: "Cálculo de taxas" },
      ],
      data: [
        "Whitelist de participantes",
        "ZK proofs para compliance",
        "Base de preço e avaliação",
        "CFEM e ISS calculados",
        "NF digital (hash on-chain)",
      ],
    },
    {
      phase: "Fase 4: Disponibilização",
      standard: "Escrow",
      icon: Coins,
      color: "#006b4f",
      events: [
        { name: "ListingCreated", desc: "Listagem para venda" },
        { name: "AssetTransferred", desc: "Transferência e liquidação" },
        { name: "FundDeposit", desc: "Depósito no fundo municipal" },
      ],
      data: [
        "Preço e condições de venda",
        "Transferência NFT + pagamento",
        "Fundo Municipal On-Chain",
        "Histórico completo auditável",
        "Prêmio de 15-40% no mercado",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#006b4f] text-white">
            Arquitetura Técnica
          </Badge>
          <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
            Tokenização em Duas Camadas
          </h2>
          <p className="font-['Inter'] text-lg text-gray-800">
            Framework definitivo de tokenização mineral: do lote bruto (ERC-1155)
            à pedra certificada (ERC-721), com compliance total
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div key={index}>
              <Card className="p-8 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Phase Header */}
                  <div className="lg:col-span-1 space-y-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${phase.color}15` }}
                    >
                      <phase.icon
                        className="h-8 w-8"
                        style={{ color: phase.color }}
                      />
                    </div>
                    <div>
                      <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-2">
                        {phase.phase}
                      </h3>
                      <Badge
                        variant="outline"
                        className="font-mono text-xs"
                        style={{
                          borderColor: phase.color,
                          color: phase.color,
                        }}
                      >
                        {phase.standard}
                      </Badge>
                    </div>
                  </div>

                  {/* Events */}
                  <div className="space-y-3">
                    <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] text-sm uppercase tracking-wide">
                      Eventos On-Chain
                    </h4>
                    {phase.events.map((event, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div
                          className="w-2 h-2 rounded-full mt-1.5"
                          style={{ backgroundColor: phase.color }}
                        />
                        <div>
                          <code className="font-['Inter'] text-xs font-mono text-[#006b4f] font-semibold">
                            {event.name}
                          </code>
                          <p className="font-['Inter'] text-xs text-gray-600 mt-0.5">
                            {event.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Data Registered */}
                  <div className="space-y-3">
                    <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] text-sm uppercase tracking-wide">
                      Dados Registrados
                    </h4>
                    <ul className="space-y-2">
                      {phase.data.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 font-['Inter'] text-sm text-gray-600"
                        >
                          <FileCheck
                            className="h-4 w-4 text-[#006b4f] flex-shrink-0 mt-0.5"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Arrow between phases */}
              {index < phases.length - 1 && (
                <div className="flex justify-center py-4">
                  <ArrowRight className="h-8 w-8 text-[#006b4f]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technical Note */}
        <div className="mt-12 p-6 bg-gradient-to-r from-[#1b1b1b] to-[#014733] rounded-2xl">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-[#caa34b] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-['Inter'] font-semibold text-white mb-2">
                Resultado: RWA Mineral Puro
              </h4>
              <p className="font-['Inter'] text-sm text-gray-300 leading-relaxed">
                O resultado final é um ativo digital (NFT) lastreado em ativo
                mineral físico (Real World Asset), com prova de origem e
                certificação auditável do subsolo ao varejo. Documentos em
                IPFS/Arweave com hashes on-chain, compliance via whitelist/KYC,
                e rastreabilidade completa da jazida à joalheria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}