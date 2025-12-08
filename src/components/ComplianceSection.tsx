import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Shield,
  UserCheck,
  Lock,
  FileCheck,
  Database,
  Eye,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export function ComplianceSection() {
  const complianceFeatures = [
    {
      title: "KYC/AML Verificado",
      icon: UserCheck,
      color: "#006b4f",
      description:
        "Verificação de identidade completa para todos os participantes (garimpeiros, labs, compradores).",
      features: [
        "Dados protegidos pela LGPD",
        "ZK proofs para privacidade",
        "Whitelist on-chain",
        "Elegibilidade verificável",
      ],
    },
    {
      title: "Documentação Imutável",
      icon: FileCheck,
      color: "#014733",
      description:
        "Todos os documentos críticos armazenados de forma descentralizada com prova de integridade.",
      features: [
        "Licenças ambientais (hash)",
        "Laudos gemológicos completos",
        "Fotos e vídeos 360°",
        "Certificados de origem",
      ],
    },
    {
      title: "Transferências Reguladas",
      icon: Shield,
      color: "#caa34b",
      description:
        "Regras de compliance aplicadas automaticamente em todas as transferências de ativos.",
      features: [
        "Padrão ERC-3643/1400",
        "Restrições jurisdicionais",
        "Limites de transferência",
        "Auditoria automática",
      ],
    },
    {
      title: "Privacidade & Segurança",
      icon: Lock,
      color: "#006b4f",
      description:
        "Proteção de dados sensíveis com criptografia e provas de conhecimento zero.",
      features: [
        "Dados sensíveis off-chain",
        "Apenas hashes on-chain",
        "ZK-SNARKs para atributos",
        "Conformidade LGPD",
      ],
    },
  ];

  const participants = [
    {
      type: "Laboratórios Gemológicos",
      count: 23,
      verified: 23,
      status: "active",
    },
    {
      type: "Garimpeiros Formalizados",
      count: 150,
      verified: 142,
      status: "active",
    },
    {
      type: "Custodians Certificados",
      count: 8,
      verified: 8,
      status: "active",
    },
    {
      type: "Compradores Whitelisted",
      count: 1247,
      verified: 1247,
      status: "active",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#006b4f] text-white">
            Compliance & Segurança
          </Badge>
          <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
            Conformidade Total e Auditável
          </h2>
          <p className="font-['Inter'] text-lg text-gray-800">
            KYC/AML integrado, regulação automatizada e privacidade garantida via
            zero-knowledge proofs
          </p>
        </div>

        {/* Compliance Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {complianceFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon
                    className="h-6 w-6"
                    style={{ color: feature.color }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 font-['Inter'] text-sm text-gray-700"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#006b4f]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Registry Stats */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Database className="h-6 w-6 text-[#006b4f]" />
            <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b]">
              Registry & Participantes Verificados
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {participants.map((participant, index) => (
              <Card key={index} className="p-6 border-2 border-[#e5e7eb]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="font-['Inter'] text-sm text-gray-500 mb-1">
                      {participant.type}
                    </div>
                    <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b]">
                      {participant.count}
                    </div>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      participant.status === "active"
                        ? "bg-green-100"
                        : "bg-gray-100"
                    }`}
                  >
                    {participant.status === "active" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-['Inter'] text-xs text-gray-500">
                    Verificados
                  </span>
                  <span className="font-['Inter'] text-sm font-semibold text-[#006b4f]">
                    {participant.verified}/{participant.count}
                  </span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full bg-[#006b4f]"
                    style={{
                      width: `${
                        (participant.verified / participant.count) * 100
                      }%`,
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Architecture */}
        <Card className="p-8 bg-gradient-to-r from-[#1b1b1b] to-[#014733] text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-[#caa34b]" />
                <h3 className="font-['Inter'] text-xl font-bold">
                  Arquitetura de Dados
                </h3>
              </div>
              <p className="font-['Inter'] text-sm text-gray-300 mb-6 leading-relaxed">
                Separação inteligente entre dados públicos e privados,
                garantindo transparência e privacidade simultaneamente.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#006b4f] flex items-center justify-center flex-shrink-0">
                    <Eye className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Inter'] font-semibold text-sm mb-1">
                      On-Chain (Público)
                    </h4>
                    <p className="font-['Inter'] text-xs text-gray-300">
                      Hashes de documentos, eventos de certificação, metadata
                      básica, status de whitelist
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#caa34b] flex items-center justify-center flex-shrink-0">
                    <Lock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-['Inter'] font-semibold text-sm mb-1">
                      Off-Chain (IPFS/Arweave)
                    </h4>
                    <p className="font-['Inter'] text-xs text-gray-300">
                      Documentos completos, imagens, vídeos, laudos, dados de
                      KYC, licenças
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="font-['Inter'] font-semibold mb-4">
                Fluxo de Verificação
              </h4>
              <ol className="space-y-3">
                {[
                  "Participante submete dados KYC",
                  "Validação por entidade credenciada",
                  "Geração de ZK proof para atributos",
                  "Whitelist on-chain atualizada",
                  "Acesso liberado para transações",
                  "Auditoria contínua e automática",
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#caa34b] flex items-center justify-center flex-shrink-0 font-['Inter'] text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="font-['Inter'] text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}