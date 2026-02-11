import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Building2,
  Cpu,
  Pickaxe,
  Users,
  Gem,
  Shield,
  Vault,
  Building,
  Scale,
  TrendingUp,
  Network,
  FileCheck,
  Lock,
  Eye,
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
} from "lucide-react";

export function EcosystemPageCrypto() {
  const actors = [
    {
      category: "Entidade Tecnológica",
      icon: Cpu,
      color: "#00ff00",
      bgColor: "bg-gradient-to-br from-[#00ff00] to-[#00cc00]",
      entities: [
        {
          name: "GEMLAB TECH",
          subtitle: "A Inteligência - SaaS",
          description:
            "Empresa de tecnologia e dados (Ltda). Desenvolve o software do protocolo, opera o espectrômetro Raman e emite Laudos Técnicos.",
          role: "Atestador da Prova Científica",
          keyFunction:
            "Assina transação com dados Raman para criar Atestado de Ciência, validando identidade química via SpectralHash.",
          icon: Cpu,
        },
      ],
    },
    {
      category: "Produtores e Sociedade",
      icon: Pickaxe,
      color: "#caa34b",
      bgColor: "bg-gradient-to-br from-[#caa34b] to-[#b8923f]",
      entities: [
        {
          name: "Garimpeiro/Produtor Mineral",
          subtitle: "Produtor Certificado",
          description:
            "Transiciona de Extração de Subsistência para Produtor Mineral Certificado. Deposita pedra bruta no cofre.",
          role: "Fornecedor do Ativo Físico",
          keyFunction:
            "Entrega pedra ao cofre de segurança e Cooperativa emite título de legalidade.",
          icon: Pickaxe,
        },
        {
          name: "Cooperativa (ou SPE da Mineradora)",
          subtitle: "Emissor de Títulos",
          description:
            "Responsável pela extração de minério em lotes (ERC-1155). Emite título jurídico (CCB ou Nota Comercial).",
          role: "Emissor Legal do Lastro",
          keyFunction:
            "Recebe liquidação financeira da venda do token, garante legalidade da extração.",
          icon: Users,
        },
        {
          name: "Lapidário",
          subtitle: "Mãos de Pedra",
          description:
            "Envolvido na etapa de Corte e Lapidação do ativo, registrada como evento CutPerformed.",
          role: "Beneficiamento do Ativo",
          keyFunction:
            "Transforma pedra bruta em gema lapidada, agregando valor comercial.",
          icon: Gem,
        },
      ],
    },
    {
      category: "Instituições de Lastro e Auditoria",
      icon: Shield,
      color: "cyan-400",
      bgColor: "bg-gradient-to-br from-cyan-400 to-cyan-600",
      entities: [
        {
          name: "COOPESMERALDA",
          subtitle: "Oráculo Operacional & Custodiante",
          description:
            "Cooperativa responsável pela custódia física, emissão de NFe e validação de origem. Único emissor de Nota Fiscal no protocolo.",
          role: "Prova de Origem & Custódia",
          keyFunction:
            "Emite NFe com hash on-chain (EAS #1), garante custódia física segregada e monitora compliance tributário (CFEM/ISS).",
          icon: Building,
        },
        {
          name: "Underground Vault (Deep Custody)",
          subtitle: "Infraestrutura Física",
          description:
            "Cofre subterrâneo para custódia segregada. Equipado com IoT e monitoramento 24/7.",
          role: "Segurança do Lastro Físico",
          keyFunction:
            "Emite atestado de custódia on-chain verificável por smart contract (EAS #3).",
          icon: Vault,
        },
        {
          name: "Registro Civil de Mineração",
          subtitle: "Título Jurídico de Origem",
          description:
            "Título jurídico de propriedade da produção mineral (similar ao Registro de Imóveis).",
          role: "Validação Legal de Legalidade",
          keyFunction:
            "Valida direito de extração do garimpeiro (PLG, Licença ANM, etc.).",
          icon: FileCheck,
        },
      ],
    },
    {
      category: "Infraestrutura Regulatória",
      icon: Building2,
      color: "purple-400",
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
      entities: [
        {
          name: "Prefeitura (Oracle Fiscal)",
          subtitle: "Validador de Tributos",
          description:
            "Valida pagamento de tributos (CFEM/ISS) e beneficia-se de arrecadação automática.",
          role: "Prova de Tributação (EAS #5)",
          keyFunction:
            "Assina atestado de que tributos foram pagos, habilitando transferência do token (tax-conditional token).",
          icon: Building2,
        },
        {
          name: "VASP Licenciada",
          subtitle: "Parceiro Financeiro",
          description:
            "Provedor de Serviços de Ativos Virtuais licenciado para emitir Selo de Verificação KYC.",
          role: "KYC/AML Compliance",
          keyFunction:
            "Assina atestado EAS #7 que qualifica carteira do investidor como compliance.",
          icon: Shield,
        },
        {
          name: "Cartório de Registro de Títulos",
          subtitle: "Publicidade Legal",
          description:
            "Registra títulos financeiros (CCB, Nota Comercial) em cartório, conferindo oponibilidade a terceiros.",
          role: "Eficácia Jurídica Plena",
          keyFunction:
            "Garante que título tenha eficácia legal mesmo fora do blockchain.",
          icon: Scale,
        },
      ],
    },
  ];

  const unionPillars = [
    {
      title: "Prova de Origem (Geologia)",
      icon: Shield,
      description:
        "Validação de que o minério veio de jazida legal e identificada. Baseada em NF-e + Coordenadas Geográficas + PLG validada.",
      features: [
        {
          name: "Hash da NFe (EAS #1)",
          detail:
            "COOPESMERALDA emite NFe com coordenadas + PLG. Hash é publicado on-chain imutável.",
        },
        {
          name: "Geo-Fencing Digital",
          detail:
            "Coordenadas GPS da jazida ficam no blockchain, impedindo fraude de origem.",
        },
      ],
    },
    {
      title: "Prova Científica (Lei Natural)",
      icon: Cpu,
      description:
        "A identidade molecular da esmeralda é validada via espectrometria Raman, criando SpectralHash único.",
      features: [
        {
          name: "SpectralHash (EAS #2)",
          detail:
            "Impressão digital ótica da gema, tornando substituição detectável.",
        },
        {
          name: "Auditoria Científica",
          detail:
            "Laudo técnico assinado por gemólogo registrado, anexado ao atestado.",
        },
      ],
    },
    {
      title: "Prova de Custódia (Economia)",
      icon: Vault,
      description:
        "O lastro físico é verificado em tempo real através de sensores IoT no cofre subterrâneo.",
      features: [
        {
          name: "Atestado de Custódia (EAS #3)",
          detail:
            "Renovado periodicamente, garante que a gema existe e está segura.",
        },
        {
          name: "Deep Custody Proof",
          detail:
            "Cofre subterrâneo com auditoria IoT e monitoramento 24/7.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#0f1419] to-[#000000] transition-colors duration-300">
      {/* Hero Section - Crypto Style */}
      <div className="relative bg-gradient-to-br from-[#006b4f] via-[#014733] to-[#000000] text-white py-32 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 0, 0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating Particles/Nodes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.3 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Protocol Badge */}
            <div className="flex justify-center mb-8">
              <Badge className="bg-gradient-to-r from-[#00ff00]/20 to-cyan-500/20 border-2 border-[#00ff00] text-[#00ff00] mb-6 px-6 py-3 text-sm font-mono backdrop-blur-xl">
                <Network className="h-4 w-4 mr-2" />
                PROTOCOL v1.0 • MAINNET READY
              </Badge>
            </div>

            {/* Main Title with Cyber Effect */}
            <h1 className="font-['Montserrat'] text-5xl lg:text-7xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-white via-[#00ff00] to-cyan-400 bg-clip-text text-transparent">
                GEMLAB Protocol
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-['Inter'] text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed text-center max-w-4xl mx-auto">
              Decentralized infrastructure for{" "}
              <span className="font-bold text-[#00ff00]">
                on-chain emerald certification
              </span>
              , powered by{" "}
              <span className="font-bold text-cyan-400">
                Ethereum Attestation Service
              </span>{" "}
              and{" "}
              <span className="font-bold text-[#caa34b]">
                real-world asset tokenization
              </span>
            </p>

            {/* Protocol Stats - Crypto Dashboard Style */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-[#00ff00] transition-all group">
                <p className="font-['Inter'] text-sm text-gray-400 mb-2 font-mono">
                  PROTOCOL
                </p>
                <p className="font-['Montserrat'] font-bold text-2xl text-white group-hover:text-[#00ff00] transition-colors">
                  GEMLAB
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition-all group">
                <p className="font-['Inter'] text-sm text-gray-400 mb-2 font-mono">
                  BLOCKCHAIN
                </p>
                <p className="font-['Montserrat'] font-bold text-2xl text-white group-hover:text-cyan-400 transition-colors">
                  BASE
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-[#caa34b] transition-all group">
                <p className="font-['Inter'] text-sm text-gray-400 mb-2 font-mono">
                  TVL
                </p>
                <p className="font-['Montserrat'] font-bold text-2xl text-white group-hover:text-[#caa34b] transition-colors">
                  R$ 240K
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-purple-400 transition-all group">
                <p className="font-['Inter'] text-sm text-gray-400 mb-2 font-mono">
                  ATTESTATIONS
                </p>
                <p className="font-['Montserrat'] font-bold text-2xl text-white group-hover:text-purple-400 transition-colors">
                  1,247
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-[#00ff00] to-[#00cc00] text-black hover:from-[#00cc00] hover:to-[#00ff00] font-bold px-8 py-6 text-lg">
                <Network className="h-5 w-5 mr-2" />
                Explore Network
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-xl px-8 py-6 text-lg"
              >
                <FileCheck className="h-5 w-5 mr-2" />
                Read Docs
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Network Actors - Blockchain Node Style */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500 text-purple-300 mb-6 px-4 py-2 font-mono">
              <Network className="h-4 w-4 mr-2" />
              NETWORK TOPOLOGY
            </Badge>
            <h2 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-white mb-6">
              Protocol{" "}
              <span className="bg-gradient-to-r from-[#00ff00] to-cyan-400 bg-clip-text text-transparent">
                Actors
              </span>
            </h2>
            <p className="font-['Inter'] text-lg text-gray-400 max-w-3xl mx-auto">
              Decentralized network of validators, oracles, and attesters
            </p>
          </div>

          <div className="space-y-16">
            {actors.map((category, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`${category.bgColor} text-white p-4 rounded-xl shadow-lg`}
                  >
                    <category.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] text-3xl font-bold text-white">
                      {category.category}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#00ff00] to-transparent mt-2 rounded-full" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.entities.map((entity, entityIdx) => (
                    <Card
                      key={entityIdx}
                      className="group p-8 border-2 border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl hover:border-[#00ff00] transition-all duration-500 hover:shadow-2xl hover:shadow-[#00ff00]/20 relative overflow-hidden"
                    >
                      {/* Animated Corner Accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00ff00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`${category.bgColor} text-white p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                        >
                          <entity.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-['Montserrat'] font-bold text-white mb-2 text-lg">
                            {entity.name}
                          </h4>
                          <p
                            className="font-['Inter'] text-sm font-mono"
                            style={{ color: category.color }}
                          >
                            {entity.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="font-['Inter'] text-sm text-gray-400 mb-6 leading-relaxed">
                        {entity.description}
                      </p>

                      <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent my-6" />

                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge
                              variant="outline"
                              className="text-xs font-mono border-[#00ff00]/50 text-[#00ff00]"
                            >
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              EAS ROLE
                            </Badge>
                          </div>
                          <p className="font-['Inter'] text-sm font-semibold text-white">
                            {entity.role}
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge
                              variant="outline"
                              className="text-xs font-mono border-cyan-500/50 text-cyan-400"
                            >
                              <Zap className="h-3 w-3 mr-1" />
                              FUNCTION
                            </Badge>
                          </div>
                          <p className="font-['Inter'] text-sm text-gray-400 leading-relaxed">
                            {entity.keyFunction}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Protocol Architecture - Smart Contract Flow */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500 text-cyan-300 mb-6 px-4 py-2 font-mono">
              <Cpu className="h-4 w-4 mr-2" />
              SMART CONTRACT ARCHITECTURE
            </Badge>
            <h2 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-white mb-6">
              Protocol{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Flow
              </span>
            </h2>
            <p className="font-['Inter'] text-lg text-gray-400 max-w-3xl mx-auto">
              Immutable attestation chain powered by EAS protocol
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {unionPillars.map((pillar, idx) => (
              <Card
                key={idx}
                className="group p-10 border-2 border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl hover:border-[#caa34b] transition-all duration-500 relative overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#caa34b]/0 to-[#caa34b]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white p-5 rounded-2xl shadow-xl shadow-[#caa34b]/50 group-hover:scale-110 transition-transform">
                      <pillar.icon className="h-10 w-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['Montserrat'] text-2xl font-bold text-white">
                        {pillar.title}
                      </h3>
                      <div className="h-1 w-16 bg-gradient-to-r from-[#caa34b] to-transparent mt-2 rounded-full" />
                    </div>
                  </div>

                  <p className="font-['Inter'] text-base text-gray-300 mb-8 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="h-px bg-gradient-to-r from-[#caa34b]/50 via-white/20 to-transparent my-8" />

                  <div className="space-y-5">
                    {pillar.features.map((feature, featureIdx) => (
                      <div
                        key={featureIdx}
                        className="flex items-start gap-4 group/feature"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#caa34b]/20 flex items-center justify-center flex-shrink-0 group-hover/feature:bg-[#caa34b]/40 transition-colors">
                          <ArrowRight className="h-4 w-4 text-[#caa34b]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-['Inter'] text-sm font-bold text-white mb-1.5">
                            {feature.name}
                          </p>
                          <p className="font-['Inter'] text-sm text-gray-400 leading-relaxed">
                            {feature.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Protocol Analogy - Cyber Card */}
        <Card className="p-12 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border-2 border-white/20 relative overflow-hidden">
          {/* Animated Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff00]/0 via-[#00ff00]/10 to-[#00ff00]/0 animate-pulse" />

          <div className="relative z-10 flex items-start gap-8">
            <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white p-6 rounded-2xl flex-shrink-0 shadow-2xl shadow-[#caa34b]/50">
              <Eye className="h-12 w-12" />
            </div>
            <div className="flex-1">
              <h3 className="font-['Montserrat'] text-3xl font-bold text-white mb-6">
                The Protocol <span className="text-[#00ff00]">Orchestra</span>
              </h3>
              <p className="font-['Inter'] text-lg text-gray-300 leading-relaxed mb-6">
                The system operates as an{" "}
                <span className="font-bold text-[#00ff00]">
                  orchestra conducted by a smart contract
                </span>
                : no one can play the melody (validate the asset and transfer
                the token) unless they receive a{" "}
                <span className="font-bold text-cyan-400">
                  cryptographic certification (an attestation)
                </span>{" "}
                from the previous musician — whether it's the government, the
                laboratory, or the vault manager.
              </p>
              <p className="font-['Inter'] text-lg text-gray-300 leading-relaxed">
                This architecture ensures that{" "}
                <span className="font-bold text-[#caa34b]">
                  all actors have aligned incentives
                </span>{" "}
                and that the system is{" "}
                <span className="font-bold text-[#caa34b]">
                  fraud-resistant
                </span>
                , with each party validating only their area of competence and
                digitally signing their responsibility.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA - Crypto Style */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-white/10 to-white/5 border-2 border-white/20 hover:border-[#00ff00] hover:bg-white/20 backdrop-blur-xl text-white transition-all duration-300 px-10 py-7 text-lg font-mono group"
            onClick={() => {
              const section = document.getElementById(
                "technical-documentation"
              );
              section?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <FileCheck className="h-6 w-6 mr-3 group-hover:text-[#00ff00] transition-colors" />
            VIEW TECHNICAL DOCUMENTATION
            <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* CONTINUA NA PRÓXIMA PARTE... */}
    </div>
  );
}
