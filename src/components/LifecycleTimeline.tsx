import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import {
  Mountain,
  Package,
  Sparkles,
  Scissors,
  Award,
  DollarSign,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react";

export function LifecycleTimeline() {
  const states = [
    {
      status: "Descoberto",
      icon: Mountain,
      color: "#6b7280",
      description: "Minério identificado na jazida",
      actions: ["Georreferenciamento", "Registro de claim"],
    },
    {
      status: "Extraído",
      icon: Package,
      color: "#014733",
      description: "Lote extraído e processado",
      actions: ["Mint ERC-1155", "BatchProcessed", "Peso registrado"],
    },
    {
      status: "Classificado",
      icon: Sparkles,
      color: "#006b4f",
      description: "Pedras selecionadas individualmente",
      actions: ["PreGrading", "Mint ERC-721", "Características iniciais"],
    },
    {
      status: "Lapidado",
      icon: Scissors,
      color: "#006b4f",
      description: "Corte e lapidação profissional",
      actions: ["CutPerformed", "Novo peso (ct)", "Tipo de lapidação"],
    },
    {
      status: "Certificado",
      icon: Award,
      color: "#caa34b",
      description: "Laudo gemológico completo",
      actions: ["GemCertified", "SpectralHash", "IPFS pinning"],
    },
    {
      status: "Avaliado",
      icon: DollarSign,
      color: "#caa34b",
      description: "Precificação e compliance",
      actions: ["ValuationUpdated", "RoyaltyComputed", "KYC verificado"],
    },
    {
      status: "Listado",
      icon: ShoppingCart,
      color: "#006b4f",
      description: "Disponível para comercialização",
      actions: ["ListingCreated", "Preço definido", "Escrow ativo"],
    },
    {
      status: "Vendido",
      icon: CheckCircle2,
      color: "#10b981",
      description: "Transferência concluída",
      actions: ["AssetTransferred", "Pagamento liquidado", "Fundo depositado"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#006b4f] text-white">
            Ciclo de Vida do Ativo
          </Badge>
          <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
            Do Subsolo ao Mercado
          </h2>
          <p className="font-['Inter'] text-lg text-gray-800">
            Cada esmeralda passa por etapas rastreáveis, da descoberta à venda
            final, com eventos registrados permanentemente on-chain
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#6b7280] via-[#006b4f] to-[#10b981]" />

          <div className="space-y-12">
            {states.map((state, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-5/12">
                  <Card
                    className={`p-6 border-2 hover:shadow-lg transition-all duration-300 ${
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                    style={{ borderColor: `${state.color}40` }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${state.color}15` }}
                      >
                        <state.icon
                          className="h-6 w-6"
                          style={{ color: state.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            style={{
                              backgroundColor: state.color,
                              color: "white",
                            }}
                          >
                            {state.status}
                          </Badge>
                        </div>
                        <p className="font-['Inter'] text-sm text-gray-600 mb-3">
                          {state.description}
                        </p>
                        <ul className="space-y-1">
                          {state.actions.map((action, idx) => (
                            <li
                              key={idx}
                              className="font-['Inter'] text-xs text-gray-500 flex items-center gap-2"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: state.color }}
                              />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white items-center justify-center"
                  style={{ backgroundColor: state.color }}
                >
                  <span className="font-['Inter'] text-xs text-white font-bold">
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
          <Card className="p-6 bg-white border-2 border-[#006b4f]/20">
            <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-3">
              Documentação Imutável
            </h4>
            <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
              Todos os documentos (laudos, fotos, vídeos, licenças) são
              armazenados em IPFS/Arweave. Os hashes (CIDs) são ancorados
              on-chain, garantindo prova de integridade e imutabilidade.
            </p>
          </Card>
          <Card className="p-6 bg-white border-2 border-[#caa34b]/20">
            <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-3">
              Compliance Automatizado
            </h4>
            <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
              KYC/AML via whitelist, cálculo automático de royalties (CFEM/ISS),
              nota fiscal digital com hash on-chain, e depósito automático no
              Fundo Municipal de Desenvolvimento Mineral.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}