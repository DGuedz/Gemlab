import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Package,
  Gem,
  Scissors,
  Award,
  ShoppingCart,
  CheckCircle2,
  ExternalLink,
  FileText,
  Fingerprint,
  Upload,
  Database,
  Blocks,
  Activity,
} from "lucide-react";
import { Progress } from "../ui/progress";

export function TraceabilityMockup() {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const phases = [
    {
      phase: "Fase 1: Lote Mineral",
      standard: "ERC-1155",
      color: "#014733",
      icon: Package,
      events: [
        {
          name: "RawExtraction",
          params: "mineId, batchId, weightKg",
          description: "Extração do lote bruto",
          data: {
            batchId: "BATCH-2024-089",
            weightKg: "8.2",
            mineId: "MINER-042",
            location: "Setor A3, Campos Verdes - GO",
            date: "2024-10-05",
            txHash: "0x1a2b3c4d5e6f7g8h9i0j",
          },
        },
        {
          name: "BatchProcessed",
          params: "batchId, yield, newBatchIds[]",
          description: "Beneficiamento e splits",
          data: {
            inputWeight: "8.2 kg",
            outputWeight: "6.4 kg",
            yield: "78%",
            splits: ["BATCH-2024-089-A", "BATCH-2024-089-B"],
            txHash: "0x5e6f7g8h9i0j1k2l3m4n",
          },
        },
        {
          name: "PreGrading",
          params: "batchId, categories",
          description: "Classificação inicial",
          data: {
            gemQuality: 42,
            industrial: 8,
            rejected: 12,
            txHash: "0x9i0j1k2l3m4n5o6p7q8r",
          },
        },
      ],
    },
    {
      phase: "Fase 2: Pedra Individual",
      standard: "ERC-721",
      color: "#006b4f",
      icon: Gem,
      events: [
        {
          name: "StoneMinted",
          params: "tokenId, originBatchId",
          description: "NFT criado após seleção",
          data: {
            tokenId: "1247",
            stoneRef: "CV-GO-2024-1247",
            originBatch: "BATCH-2024-089-A",
            weightCt: "3.42",
            spectralHash: "0x7f3a92c4...",
            txHash: "0x3m4n5o6p7q8r9s0t1u2v",
          },
        },
        {
          name: "CutPerformed",
          params: "tokenId, cutType, newWeightCt, losses",
          description: "Lapidação registrada",
          data: {
            cutType: "Oval",
            previousWeight: "4.85 ct",
            newWeight: "3.42 ct",
            losses: "29.5%",
            lapidary: "LAP-018",
            txHash: "0x7q8r9s0t1u2v3w4x5y6z",
          },
        },
        {
          name: "GemCertified",
          params: "tokenId, labId, certHash, certNo",
          description: "Certificação GEMLAB completa",
          data: {
            labId: "LAB-042",
            certNo: "GEM-2024-1247",
            certHash: "QmX7f3a92c4abc123...",
            spectralHash: "0x7f3a92c4...",
            gemologist: "Dr. Renato Silva",
            txHash: "0x1b2c3d4e5f6g7h8i9j0k",
          },
        },
      ],
    },
    {
      phase: "Fase 3: Compliance & Trading",
      standard: "ERC-3643",
      color: "#caa34b",
      icon: Award,
      events: [
        {
          name: "ValuationUpdated",
          params: "assetId, appraiser, priceBase",
          description: "Avaliação de mercado",
          data: {
            appraiser: "APPR-008",
            baseValue: "[Confidencial]",
            pricePerCt: "[Confidencial]",
            method: "Comparativo de mercado",
            txHash: "0x5l6m7n8o9p0q1r2s3t4u",
          },
        },
        {
          name: "RoyaltyComputed",
          params: "assetId, basis, rate",
          description: "Cálculo automático de taxas",
          data: {
            cfem: "[Calculado]",
            iss: "[Calculado]",
            municipalFund: "[Calculado]",
            nfHash: "0x9v0w1x2y3z4a5b6c...",
            txHash: "0x9t4u5v6w7x8y9z0a1b2c",
          },
        },
        {
          name: "ListingCreated",
          params: "assetId, seller, price",
          description: "Listado para comercialização",
          data: {
            seller: "0x742d35Cc6634C0532925a3...",
            price: "[Sob Consulta]",
            escrowAddress: "0xABC123...",
            listingDate: "2024-11-16",
            txHash: "0x3d4e5f6g7h8i9j0k1l2m",
          },
        },
      ],
    },
  ];

  const handleSimulateFlow = () => {
    setIsProcessing(true);
    let currentPhase = 0;
    
    const interval = setInterval(() => {
      currentPhase++;
      setSelectedPhase(currentPhase);
      
      if (currentPhase >= phases.length - 1) {
        clearInterval(interval);
        setIsProcessing(false);
      }
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#f9fafb] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#006b4f] text-white">
            Mockup de Rastreabilidade
          </Badge>
          <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
            Visualização Interativa do Fluxo On-Chain
          </h2>
          <p className="font-['Inter'] text-lg text-gray-600 mb-6">
            Acompanhe em tempo real os eventos blockchain desde a extração até a
            venda, com dados reais e verificáveis
          </p>
          <Button
            onClick={handleSimulateFlow}
            disabled={isProcessing}
            size="lg"
            className="bg-[#006b4f] text-white hover:bg-[#014733]"
          >
            <Activity className="h-5 w-5 mr-2" />
            {isProcessing ? "Simulando Fluxo..." : "Simular Fluxo Completo"}
          </Button>
        </div>

        {/* Phase Selector */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {phases.map((phase, index) => (
            <div key={index} className="flex items-center gap-2">
              <button
                onClick={() => setSelectedPhase(index)}
                disabled={isProcessing}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedPhase === index
                    ? "border-[#006b4f] bg-[#006b4f] text-white shadow-lg scale-105"
                    : "border-[#e5e7eb] bg-white hover:border-[#006b4f] hover:shadow-md"
                }`}
              >
                <phase.icon className="h-6 w-6" />
                <div className="text-left">
                  <div className="font-['Inter'] text-sm font-semibold">
                    {phase.phase.split(":")[0]}
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs mt-1"
                    style={{
                      borderColor:
                        selectedPhase === index ? "white" : phase.color,
                      color: selectedPhase === index ? "white" : phase.color,
                    }}
                  >
                    {phase.standard}
                  </Badge>
                </div>
              </button>
              {index < phases.length - 1 && (
                <div className="w-8 h-0.5 bg-[#e5e7eb]" />
              )}
            </div>
          ))}
        </div>

        {/* Selected Phase Details */}
        <Card className="p-8 border-2 border-[#e5e7eb] mb-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              {(() => {
                const PhaseIcon = phases[selectedPhase].icon;
                return (
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${phases[selectedPhase].color}15`,
                    }}
                  >
                    <PhaseIcon
                      className="h-8 w-8"
                      style={{ color: phases[selectedPhase].color }}
                    />
                  </div>
                );
              })()}
              <div>
                <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b]">
                  {phases[selectedPhase].phase}
                </h3>
                <Badge
                  className="mt-2"
                  style={{
                    backgroundColor: phases[selectedPhase].color,
                    color: "white",
                  }}
                >
                  {phases[selectedPhase].standard}
                </Badge>
              </div>
            </div>
            {isProcessing && selectedPhase < phases.length - 1 && (
              <Badge className="bg-orange-100 text-orange-700 animate-pulse">
                Processando...
              </Badge>
            )}
          </div>

          <Tabs defaultValue="events" className="space-y-6">
            <TabsList>
              <TabsTrigger value="events">
                <Blocks className="h-4 w-4 mr-2" />
                Eventos On-Chain
              </TabsTrigger>
              <TabsTrigger value="data">
                <Database className="h-4 w-4 mr-2" />
                Dados Registrados
              </TabsTrigger>
              <TabsTrigger value="verification">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Verificação
              </TabsTrigger>
            </TabsList>

            <TabsContent value="events">
              <div className="space-y-4">
                {phases[selectedPhase].events.map((event, idx) => (
                  <Card
                    key={idx}
                    className="p-6 bg-[#f9fafb] border-2 border-[#e5e7eb]"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <code className="font-['Inter'] font-mono text-sm bg-white px-3 py-1 rounded border-2 border-[#006b4f] text-[#006b4f] font-semibold">
                            {event.name}
                          </code>
                          <Badge variant="outline" className="text-xs">
                            Event #{idx + 1}
                          </Badge>
                        </div>
                        <p className="font-['Inter'] text-sm text-gray-600 mb-3">
                          {event.description}
                        </p>
                        <div className="font-['Inter'] text-xs text-gray-500">
                          <span className="font-semibold">Params: </span>
                          <code className="font-mono bg-white px-2 py-1 rounded">
                            {event.params}
                          </code>
                        </div>
                      </div>
                      <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                    </div>

                    <div className="pt-4 border-t border-[#e5e7eb]">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-4 w-4 text-[#006b4f]" />
                        <span className="font-['Inter'] text-xs font-semibold text-gray-700">
                          Transaction Hash:
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="font-['Inter'] font-mono text-xs bg-white px-3 py-2 rounded border flex-1">
                          {event.data.txHash}
                        </code>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="data">
              <Card className="p-6 bg-[#f9fafb] border-2 border-[#e5e7eb]">
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-4">
                  Dados do Último Evento:{" "}
                  {
                    phases[selectedPhase].events[
                      phases[selectedPhase].events.length - 1
                    ].name
                  }
                </h4>
                <div className="space-y-3">
                  {Object.entries(
                    phases[selectedPhase].events[
                      phases[selectedPhase].events.length - 1
                    ].data
                  ).map(([key, value], idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border"
                    >
                      <span className="font-['Inter'] text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}:
                      </span>
                      <code className="font-['Inter'] font-mono text-sm text-[#1b1b1b] font-semibold">
                        {value}
                      </code>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="verification">
              <div className="space-y-4">
                <Card className="p-6 bg-green-50 border-2 border-green-200">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-['Inter'] font-semibold text-green-900 mb-2">
                        Dados Verificáveis On-Chain
                      </h4>
                      <p className="font-['Inter'] text-sm text-green-800 mb-4">
                        Todos os eventos desta fase estão registrados na
                        blockchain e podem ser verificados publicamente.
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg">
                          <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                            Eventos Emitidos
                          </div>
                          <div className="font-['Inter'] font-semibold text-green-900">
                            {phases[selectedPhase].events.length}
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                            Status
                          </div>
                          <Badge className="bg-green-600 text-white">
                            Confirmado
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {selectedPhase === 1 && (
                  <Card className="p-6 bg-[#006b4f]/5 border-2 border-[#006b4f]/20">
                    <div className="flex items-start gap-4">
                      <Fingerprint className="h-6 w-6 text-[#006b4f] flex-shrink-0" />
                      <div>
                        <h4 className="font-['Inter'] font-semibold text-[#006b4f] mb-2">
                          SpectralHash Verificável
                        </h4>
                        <p className="font-['Inter'] text-sm text-gray-700 mb-3">
                          A identidade óptica da pedra foi registrada e pode ser
                          verificada a qualquer momento com nova análise Raman.
                        </p>
                        <div className="bg-white p-4 rounded-lg border-2 border-[#006b4f]/20">
                          <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                            SpectralHash SHA-256
                          </div>
                          <code className="font-['Inter'] font-mono text-sm text-[#006b4f] font-semibold">
                            0x7f3a92c4...
                          </code>
                        </div>
                      </div>
                    </div>
                  </Card>
                )}

                <Card className="p-6 bg-blue-50 border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <Database className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-['Inter'] font-semibold text-blue-900 mb-2">
                        Documentos Off-Chain (IPFS/Arweave)
                      </h4>
                      <p className="font-['Inter'] text-sm text-blue-800 mb-3">
                        Documentos completos armazenados de forma descentralizada
                        e permanente, com hashes ancorados on-chain.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 font-['Inter'] text-sm text-blue-800">
                          <Upload className="h-4 w-4" />
                          Imagens macro e microscópicas
                        </li>
                        <li className="flex items-center gap-2 font-['Inter'] text-sm text-blue-800">
                          <Upload className="h-4 w-4" />
                          Vídeo 360° da pedra
                        </li>
                        <li className="flex items-center gap-2 font-['Inter'] text-sm text-blue-800">
                          <Upload className="h-4 w-4" />
                          PDF do laudo gemológico
                        </li>
                        <li className="flex items-center gap-2 font-['Inter'] text-sm text-blue-800">
                          <Upload className="h-4 w-4" />
                          Arquivo CSV do espectro Raman
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Progress Timeline */}
        <Card className="p-8 bg-gradient-to-r from-[#1b1b1b] to-[#014733] text-white">
          <h3 className="font-['Inter'] text-xl font-bold mb-6">
            Progresso da Rastreabilidade
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span>Fase {selectedPhase + 1} de {phases.length}</span>
              <span>{Math.round(((selectedPhase + 1) / phases.length) * 100)}% completo</span>
            </div>
            <Progress
              value={((selectedPhase + 1) / phases.length) * 100}
              className="h-3"
            />
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="font-['Inter'] text-xs text-gray-300 mb-1">
                  Total de Eventos
                </div>
                <div className="font-['Inter'] text-2xl font-bold">
                  {phases.reduce((acc, phase) => acc + phase.events.length, 0)}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="font-['Inter'] text-xs text-gray-300 mb-1">
                  Eventos Processados
                </div>
                <div className="font-['Inter'] text-2xl font-bold">
                  {phases
                    .slice(0, selectedPhase + 1)
                    .reduce((acc, phase) => acc + phase.events.length, 0)}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="font-['Inter'] text-xs text-gray-300 mb-1">
                  Fase Atual
                </div>
                <div className="font-['Inter'] text-2xl font-bold">
                  {phases[selectedPhase].standard}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}