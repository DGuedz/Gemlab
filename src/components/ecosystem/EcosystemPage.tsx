import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { PrefeituraOracleCard } from "./PrefeituraOracleCard";
import { MasterCardsNFT } from "./MasterCardsNFT";
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
  Code,
  ShieldCheck,
  Anchor,
  DollarSign,
  GitBranch,
  CheckSquare,
} from "lucide-react";

export function EcosystemPage() {
  const actors = [
    {
      category: "Entidade Tecnológica",
      icon: Cpu,
      color: "#006b4f",
      bgColor: "bg-[#006b4f]",
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
      bgColor: "bg-[#caa34b]",
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
      color: "#014733",
      bgColor: "bg-[#014733]",
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
          name: "Underground Vault",
          subtitle: "Gestor do Cofre",
          description:
            "Responsável pela custódia segura e cadeia de custódia do ativo físico.",
          role: "Prova de Custódia (Bailment)",
          keyFunction:
            "Garante lastro físico para emissão de títulos através de gestão de cofre auditável.",
          icon: Vault,
        },
      ],
    },
    {
      category: "Agentes Financeiros e Regulatórios",
      icon: Scale,
      color: "#1b1b1b",
      bgColor: "bg-[#1b1b1b]",
      entities: [
        {
          name: "Parceiro VASP/Tokenizadora",
          subtitle: "O Escudo Regulatório",
          description:
            "Exchange ou Tokenizadora licenciada (CVM 88). Realiza tokenização financeira, custódia e KYC/AML.",
          role: "Conformidade Regulatória",
          keyFunction:
            "Remove risco de lavagem através de licença CVM, garantindo operação conforme BCB/CVM.",
          icon: Shield,
        },
        {
          name: "Investidores Institucionais",
          subtitle: "Compradores Certificados",
          description:
            "Exigem conformidade total. Recebem Token ERC-721 na carteira representando Nota Comercial.",
          role: "Demandantes de Compliance",
          keyFunction:
            "Validam modelo através de requisitos de due diligence e auditoria institucional.",
          icon: TrendingUp,
        },
      ],
    },
  ];

  const unionPillars = [
    {
      title: "Arquitetura de Atestados (EAS)",
      description:
        "Ethereum Attestation Service - protocolo de confiança com validações criptográficas",
      icon: Network,
      features: [
        {
          name: "Teia de Confiança",
          detail: "Soma de validações assinadas por diferentes atores",
        },
        {
          name: "Prova de Origem",
          detail: "COOPESMERALDA emite NFe com hash on-chain",
        },
        {
          name: "Prova Científica",
          detail: "GEMLAB Tech atesta SpectralHash/identidade",
        },
        {
          name: "Prova de Custódia",
          detail: "Underground Vault atesta lastro físico",
        },
      ],
    },
    {
      title: "Smart Contracts e Fluxo Programático",
      description:
        "Code is Law - cumprimento automático de regras através de contratos inteligentes",
      icon: FileCheck,
      features: [
        {
          name: "Vínculo do Ativo",
          detail:
            "Rastreamento de linhagem do minério (ERC-1155 → ERC-721) via OriginBatchID",
        },
        {
          name: "Validação On-Chain",
          detail:
            "Token só é válido SE existirem Atestados recentes e válidos",
        },
        {
          name: "Fluxo Financeiro Automático",
          detail:
            'Desconto automático para Fundo 2050 via "Royalty Inteligente"',
        },
        {
          name: "Auditabilidade Total",
          detail:
            "Toda transação registrada imutavelmente na blockchain pública",
        },
      ],
    },
    {
      title: "Conformidade e Segurança Jurídica",
      description:
        "Estrutura legal/operacional garantindo segurança para todos os envolvidos",
      icon: Lock,
      features: [
        {
          name: "Acordo de Entidades",
          detail:
            "Memorando de Entendimento (MoU) entre GEMLAB, Prefeitura e Cooperativa",
        },
        {
          name: "KYC/AML Automatizado",
          detail:
            'ERC-3643 (T-REX) + Whitelists - somente carteiras com "Selo EAS"',
        },
        {
          name: "Prova de Propriedade",
          detail:
            "Corrente de atestados imutáveis como prova judicial de propriedade",
        },
        {
          name: "Segregação Patrimonial",
          detail:
            "Ativo do investidor protegido em caso de falência da GEMLAB",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--emerald-green)] transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#014733] via-[#006b4f] to-[#014733] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#caa34b] text-white mb-6 px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              Tese de Integração Estratégica
            </Badge>
            <h1 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold mb-6">
              Campos Verdes 2050
            </h1>
            <p className="font-['Inter'] text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed">
              Arranjo Produtivo sustentado por uma arquitetura que conecta{" "}
              <span className="font-bold text-[#caa34b]">
                visão de longo prazo
              </span>{" "}
              com{" "}
              <span className="font-bold text-[#caa34b]">
                realidade operacional
              </span>
              , utilizando tecnologia como mecanismo de{" "}
              <span className="font-bold text-[#caa34b]">
                financiamento e governança
              </span>
              .
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="font-['Inter'] text-sm text-gray-200 mb-1">
                  Protocolo
                </p>
                <p className="font-['Inter'] font-bold text-lg">GEMLAB</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="font-['Inter'] text-sm text-gray-200 mb-1">
                  Origem
                </p>
                <p className="font-['Inter'] font-bold text-lg">
                  Campos Verdes - GO
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <p className="font-['Inter'] text-sm text-gray-200 mb-1">
                  Visão
                </p>
                <p className="font-['Inter'] font-bold text-lg">2050</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NOVA SEÇÃO: Destaque Prefeitura Oracle */}
      <PrefeituraOracleCard />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Master Cards de Governança Premium NFT */}
        <MasterCardsNFT />

        {/* Como Eles Se Unem */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] text-3xl lg:text-4xl font-bold text-white mb-4">
              Como Eles Se Unem
            </h2>
            <p className="font-['Inter'] text-lg text-white/90 max-w-3xl mx-auto">
              O Protocolo GEMLAB codifica geologia, lei e economia em um único
              registro imutável
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {unionPillars.map((pillar, idx) => (
              <Card
                key={idx}
                className="p-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[#caa34b] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#caa34b] text-white p-4 rounded-lg">
                    <pillar.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Montserrat'] text-xl font-bold text-white">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="font-['Inter'] text-sm text-white/80 mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                <Separator className="my-6 bg-white/20" />

                <div className="space-y-4">
                  {pillar.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <ArrowRight className="h-4 w-4 text-[#caa34b] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-['Inter'] text-sm font-semibold text-white mb-1">
                          {feature.name}
                        </p>
                        <p className="font-['Inter'] text-xs text-white/70 leading-relaxed">
                          {feature.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Analogia Final */}
        <Card className="p-8 bg-white/10 backdrop-blur-sm border-2 border-white/30">
          <div className="flex items-start gap-6">
            <div className="bg-[#caa34b] text-white p-4 rounded-lg flex-shrink-0">
              <Eye className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] text-2xl font-bold text-white mb-4">
                A Orquestra do Protocolo
              </h3>
              <p className="font-['Inter'] text-base text-white/90 leading-relaxed mb-4">
                O sistema funciona como uma{" "}
                <span className="font-bold text-[#caa34b]">
                  orquestra regida por um contrato inteligente
                </span>
                : ninguém pode tocar a melodia (validar o ativo e transferir o
                token) a menos que receba uma{" "}
                <span className="font-bold text-[#caa34b]">
                  certificação criptográfica (um atestado)
                </span>{" "}
                do músico anterior — seja o governo, o laboratório ou o gestor
                do cofre.
              </p>
              <p className="font-['Inter'] text-base text-white/90 leading-relaxed">
                Esta arquitetura garante que{" "}
                <span className="font-bold text-[#caa34b]">
                  todos os atores tenham incentivos alinhados
                </span>{" "}
                e que o sistema seja{" "}
                <span className="font-bold text-[#caa34b]">
                  resistente a fraudes
                </span>
                , com cada parte validando apenas sua área de competência e
                assinando digitalmente sua responsabilidade.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-white/20 border-2 border-white/30 hover:bg-white/30 backdrop-blur-sm text-white transition-all duration-300"
            onClick={() => {
              const section = document.getElementById('technical-documentation');
              section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <FileCheck className="h-5 w-5 mr-2" />
            Ver Documentação Técnica Completa
          </Button>
        </div>
      </div>

      {/* Documentação Técnica Completa - EAS */}
      <div id="technical-documentation" className="border-t border-white/20 py-20 bg-gradient-to-b from-[var(--emerald-green)] to-[#014733]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header da Documentação */}
          <div className="text-center mb-20">
            <Badge className="bg-white/20 border border-white/30 text-white mb-6 px-6 py-2.5 text-sm">
              <FileCheck className="h-4 w-4 mr-2" />
              Documentação Técnica Completa
            </Badge>
            <h2 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-white mb-6">
              A Orquestra do Protocolo
            </h2>
            <p className="font-['Inter'] text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Arquitetura completa do GEMLAB utilizando o{" "}
              <span className="font-bold text-[#caa34b]">
                Ethereum Attestation Service (EAS)
              </span>{" "}
              para criar um sistema de{" "}
              <span className="font-bold text-[#caa34b]">
                confiança descentralizada
              </span>
              .
            </p>
          </div>

          {/* Introdução ao EAS */}
          <Card className="p-10 mb-16 border-2 border-white/30 bg-white/15 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white p-5 rounded-xl flex-shrink-0 shadow-lg">
                <Network className="h-10 w-10" />
              </div>
              <div className="flex-1">
                <h3 className="font-['Montserrat'] text-3xl font-bold text-white mb-6">
                  Ethereum Attestation Service (EAS)
                </h3>
                <p className="font-['Inter'] text-base lg:text-lg text-white/90 leading-relaxed mb-4">
                  O EAS é um protocolo{" "}
                  <span className="font-bold text-[#caa34b]">
                    livre e aberto
                  </span>{" "}
                  para{" "}
                  <span className="font-bold text-[#caa34b]">
                    atestações on-chain
                  </span>{" "}
                  em blockchains compatíveis com EVM. Serve como a{" "}
                  <span className="font-bold text-[#caa34b]">
                    camada fundamental de auditoria
                  </span>{" "}
                  que coordena todos os atores do ecossistema.
                </p>
                <p className="font-['Inter'] text-base lg:text-lg text-white/90 leading-relaxed">
                  Esta arquitetura garante{" "}
                  <span className="font-bold text-[#caa34b]">
                    coerência e resistência à fraude
                  </span>
                  , alinhando os incentivos dos atores através de{" "}
                  <span className="font-bold text-[#caa34b]">
                    certificações criptográficas
                  </span>{" "}
                  (atestados).
                </p>
              </div>
            </div>
          </Card>

          {/* 1. A Natureza da Certificação */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white w-14 h-14 rounded-xl flex items-center justify-center font-['Montserrat'] text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="font-['Montserrat'] text-3xl lg:text-4xl font-bold text-white">
                A Natureza da Certificação (O Atestado)
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[#caa34b] hover:bg-white/15 transition-all duration-300 h-full flex flex-col group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <FileCheck className="h-7 w-7" />
                  </div>
                  <h4 className="font-['Montserrat'] text-xl font-bold text-white">
                    Definição
                  </h4>
                </div>
                <p className="font-['Inter'] text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                  Um atestado é essencialmente uma{" "}
                  <span className="font-bold text-[#caa34b]">
                    assinatura digital em dados estruturados
                  </span>
                  . Pense nele como um{" "}
                  <span className="font-bold text-[#caa34b]">
                    selo digital de aprovação ou verificação
                  </span>
                  .
                </p>
              </Card>

              <Card className="p-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[#caa34b] hover:bg-white/15 transition-all duration-300 h-full flex flex-col group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-7 w-7" />
                  </div>
                  <h4 className="font-['Montserrat'] text-xl font-bold text-white">
                    Função
                  </h4>
                </div>
                <p className="font-['Inter'] text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                  Estabelecer{" "}
                  <span className="font-bold text-[#caa34b]">
                    confiança e credibilidade online
                  </span>
                  . Atuam como{" "}
                  <span className="font-bold text-[#caa34b]">
                    ponte entre os mundos digital e físico
                  </span>
                  , fornecendo um mecanismo para{" "}
                  <span className="font-bold text-[#caa34b]">
                    validar alegações
                  </span>
                  .
                </p>
              </Card>

              <Card className="p-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[#caa34b] hover:bg-white/15 transition-all duration-300 h-full flex flex-col group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Network className="h-7 w-7" />
                  </div>
                  <h4 className="font-['Montserrat'] text-xl font-bold text-white">
                    Estrutura
                  </h4>
                </div>
                <p className="font-['Inter'] text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                  Cada atestado é único e segue um{" "}
                  <span className="font-bold text-[#caa34b]">
                    Esquema (Schema)
                  </span>{" "}
                  que define a{" "}
                  <span className="font-bold text-[#caa34b]">
                    estrutura e o formato dos dados
                  </span>{" "}
                  que estão sendo validados.
                </p>
              </Card>
            </div>
          </div>

          {/* 2. A Especialização dos Músicos */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white w-14 h-14 rounded-xl flex items-center justify-center font-['Montserrat'] text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="font-['Montserrat'] text-3xl lg:text-4xl font-bold text-white">
                A Especialização dos Músicos (Atores e Seus Schemas)
              </h3>
            </div>

            <Card className="p-10 border-2 border-white/30 bg-white/15 backdrop-blur-md shadow-xl">
              <p className="font-['Inter'] text-base lg:text-lg text-white/90 mb-8 leading-relaxed">
                Para o sistema funcionar como uma orquestra coesa, cada ator
                (Attester) só valida sua área de competência, definindo sua
                responsabilidade através de um esquema específico:
              </p>

              <div className="overflow-x-auto -mx-10 px-10">
                <table className="w-full border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#caa34b] to-[#b8923f] text-white">
                      <th className="font-['Montserrat'] text-sm lg:text-base font-bold p-5 text-left border border-[#014733] rounded-tl-lg">
                        Músico (Ator/Attester)
                      </th>
                      <th className="font-['Montserrat'] text-sm lg:text-base font-bold p-5 text-left border border-[#014733]">
                        Instrumento (Atestado)
                      </th>
                      <th className="font-['Montserrat'] text-sm lg:text-base font-bold p-5 text-left border border-[#014733] rounded-tr-lg">
                        Área de Competência Validada
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/10 transition-colors">
                      <td className="font-['Inter'] text-sm lg:text-base p-5 border border-white/20">
                        <div className="flex items-center gap-4">
                          <Building className="h-6 w-6 text-[#caa34b] flex-shrink-0" />
                          <div>
                            <p className="font-bold text-white">
                              O Governo
                            </p>
                            <p className="text-xs lg:text-sm text-white/70">
                              Prefeitura/Oracle Fiscal
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="font-['Inter'] text-sm lg:text-base p-5 border border-white/20">
                        <Badge className="bg-[#014733] text-white whitespace-nowrap">
                          Prova de Origem
                        </Badge>
                      </td>
                      <td className="font-['Inter'] text-sm lg:text-base p-5 border border-white/20 text-white/90">
                        Atesta a{" "}
                        <span className="font-bold text-white">
                          legalidade fiscal e a proveniência
                        </span>
                        . Isso serve como a "Certidão de Nascimento" do ativo,
                        validada pelo Estado.
                      </td>
                    </tr>
                    <tr className="hover:bg-white/10 transition-colors">
                      <td className="font-['Inter'] text-sm lg:text-base p-5 border border-white/20">
                        <div className="flex items-center gap-4">
                          <Cpu className="h-6 w-6 text-[#caa34b] flex-shrink-0" />
                          <div>
                            <p className="font-bold text-white">
                              O Laboratório
                            </p>
                            <p className="text-xs lg:text-sm text-white/70">
                              GEMLAB Tech
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="font-['Inter'] text-sm lg:text-base p-5 border border-white/20">
                        <Badge className="bg-[#006b4f] text-white whitespace-nowrap">
                          Prova Científica
                        </Badge>
                      </td>
                      <td className="font-['Inter'] text-sm lg:text-base p-5 border border-white/20 text-white/90">
                        Atesta a{" "}
                        <span className="font-bold text-white">
                          identidade química única
                        </span>{" "}
                        da pedra através do SpectralHash (assinatura ótica).
                        Isso{" "}
                        <span className="font-bold text-white">
                          elimina a fraude de substituição
                        </span>{" "}
                        da pedra.
                      </td>
                    </tr>
                    <tr className="hover:bg-white/10 transition-colors">
                      <td className="font-['Inter'] text-sm lg:text-base p-5 border border-white/20">
                        <div className="flex items-center gap-4">
                          <Vault className="h-6 w-6 text-[#caa34b] flex-shrink-0" />
                          <div>
                            <p className="font-bold text-white">
                              O Gestor do Cofre
                            </p>
                            <p className="text-xs lg:text-sm text-white/70">
                              Underground Vault
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="font-['Inter'] text-sm lg:text-base p-5 border border-white/20">
                        <Badge className="bg-[#014733] text-white whitespace-nowrap">
                          Prova de Custódia
                        </Badge>
                      </td>
                      <td className="font-['Inter'] text-sm lg:text-base p-5 border border-white/20 text-white/90">
                        Atesta que o ativo físico{" "}
                        <span className="font-bold text-white">
                          existe e está seguro em custódia
                        </span>
                        . Este atestado garante o{" "}
                        <span className="font-bold text-white">
                          lastro físico
                        </span>{" "}
                        necessário para a emissão de títulos regulamentados pela
                        CVM.
                      </td>
                    </tr>
                    <tr className="hover:bg-white/10 transition-colors">
                      <td className="font-['Inter'] text-sm lg:text-base p-5 border border-white/20 rounded-bl-lg">
                        <div className="flex items-center gap-4">
                          <Shield className="h-6 w-6 text-[#caa34b] flex-shrink-0" />
                          <div>
                            <p className="font-bold text-white">
                              O Parceiro Financeiro
                            </p>
                            <p className="text-xs lg:text-sm text-white/70">
                              VASP Licenciado
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="font-['Inter'] text-sm lg:text-base p-5 border border-white/20">
                        <Badge className="bg-[#caa34b] text-white whitespace-nowrap">
                          Selo de Verificação KYC
                        </Badge>
                      </td>
                      <td className="font-['Inter'] text-sm lg:text-base p-5 border border-white/20 text-white/90 rounded-br-lg">
                        Atesta que a carteira do investidor{" "}
                        <span className="font-bold text-white">
                          passou por verificação KYC/AML
                        </span>
                        .
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {/* 3. O Regente (Smart Contract) */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white w-14 h-14 rounded-xl flex items-center justify-center font-['Montserrat'] text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="font-['Montserrat'] text-3xl lg:text-4xl font-bold text-white">
                O Regente (O Smart Contract) e a Resistência à Fraude
              </h3>
            </div>

            <Card className="p-10 border-2 border-white/30 bg-white/15 backdrop-blur-md shadow-xl mb-8">
              <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                <div className="bg-gradient-to-br from-[#014733] to-[#006b4f] text-white p-5 rounded-xl flex-shrink-0 shadow-lg">
                  <Lock className="h-10 w-10" />
                </div>
                <div className="flex-1">
                  <h4 className="font-['Montserrat'] text-2xl lg:text-3xl font-bold text-white mb-4">
                    O Contrato Inteligente do Token (ERC-721)
                  </h4>
                  <p className="font-['Inter'] text-base lg:text-lg text-white/90 leading-relaxed">
                    Atua como o{" "}
                    <span className="font-bold text-[#caa34b]">
                      regente da orquestra
                    </span>{" "}
                    e é a principal fonte de{" "}
                    <span className="font-bold text-[#caa34b]">
                      resistência à fraude
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 p-8 rounded-xl border border-white/20 h-full flex flex-col group hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="h-7 w-7 text-[#caa34b] group-hover:scale-110 transition-transform" />
                    <h5 className="font-['Montserrat'] text-lg font-bold text-white">
                      Validação Condicional
                    </h5>
                  </div>
                  <p className="font-['Inter'] text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                    O Smart Contract é{" "}
                    <span className="font-bold text-white">
                      "EAS Aware"
                    </span>
                    . Ele consulta o contrato do EAS para verificar se os
                    atestados necessários estão{" "}
                    <span className="font-bold text-white">
                      válidos e recentes
                    </span>
                    .
                  </p>
                </div>

                <div className="bg-white/5 p-8 rounded-xl border border-white/20 h-full flex flex-col group hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="h-7 w-7 text-[#caa34b] group-hover:scale-110 transition-transform" />
                    <h5 className="font-['Montserrat'] text-lg font-bold text-white">
                      Imutabilidade
                    </h5>
                  </div>
                  <p className="font-['Inter'] text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                    Uma vez emitido on-chain, o atestado{" "}
                    <span className="font-bold text-white">
                      não pode ser alterado
                    </span>
                    . Erros exigem{" "}
                    <span className="font-bold text-white">
                      revogação + novo atestado
                    </span>
                    , deixando rastro auditável.
                  </p>
                </div>

                <div className="bg-white/5 p-8 rounded-xl border border-white/20 h-full flex flex-col group hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-7 w-7 text-[#caa34b] group-hover:scale-110 transition-transform" />
                    <h5 className="font-['Montserrat'] text-lg font-bold text-white">
                      Enquadramento Regulatório
                    </h5>
                  </div>
                  <p className="font-['Inter'] text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                    Token só permite transferências entre carteiras com{" "}
                    <span className="font-bold text-white">
                      "Selo EAS"
                    </span>{" "}
                    de VASP licenciada, bloqueando automaticamente lavagem de
                    dinheiro.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/10 border-2 border-white/20 backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <Eye className="h-8 w-8 text-[#caa34b] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-['Inter'] text-base lg:text-lg text-white/90 leading-relaxed">
                    <span className="font-bold text-[#caa34b]">
                      Exemplo prático:
                    </span>{" "}
                    O token só é transferível ou válido se houver um{" "}
                    <span className="font-bold text-white">
                      Atestado de Custódia ativo
                    </span>{" "}
                    e um{" "}
                    <span className="font-bold text-white">
                      Atestado de Ciência imutável
                    </span>
                    . Se o Underground Vault falhar em renovar o Atestado de
                    Custódia, o token{" "}
                    <span className="font-bold text-white">
                      perde valor ou é pausado
                    </span>
                    , expondo o risco em tempo real para o investidor e para a
                    CVM.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* 4. Alinhamento de Incentivos */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white w-14 h-14 rounded-xl flex items-center justify-center font-['Montserrat'] text-2xl font-bold shadow-lg">
                4
              </div>
              <h3 className="font-['Montserrat'] text-3xl lg:text-4xl font-bold text-white">
                Alinhamento de Incentivos (Perenidade do Sistema)
              </h3>
            </div>

            <p className="font-['Inter'] text-base lg:text-lg text-white/90 mb-10 leading-relaxed max-w-4xl">
              Esta arquitetura de atestados garante que todos os atores tenham{" "}
              <span className="font-bold text-[#caa34b]">
                incentivos alinhados
              </span>
              , pois o valor e a liquidez do ativo dependem diretamente do{" "}
              <span className="font-bold text-[#caa34b]">
                cumprimento contínuo
              </span>{" "}
              de suas responsabilidades:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[#caa34b] hover:bg-white/15 transition-all duration-300 h-full flex flex-col group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white w-12 h-12 rounded-full flex items-center justify-center font-['Montserrat'] text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <h4 className="font-['Montserrat'] text-xl font-bold text-white">
                    Incentivo Político Perpétuo
                  </h4>
                </div>
                <p className="font-['Inter'] text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                  Ao posicionar a{" "}
                  <span className="font-bold text-white">
                    Prefeitura como Validador de Origem (Oracle Fiscal)
                  </span>
                  , a arrecadação automática de impostos (CFEM/ISS) torna-se
                  dependente da manutenção do sistema GEMLAB. Isso cria um{" "}
                  <span className="font-bold text-white">
                    incentivo político perpétuo
                  </span>{" "}
                  para manter o projeto rodando, independente da gestão.
                </p>
              </Card>

              <Card className="p-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[#caa34b] hover:bg-white/15 transition-all duration-300 h-full flex flex-col group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white w-12 h-12 rounded-full flex items-center justify-center font-['Montserrat'] text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <h4 className="font-['Montserrat'] text-xl font-bold text-white">
                    Garantia de Lastro
                  </h4>
                </div>
                <p className="font-['Inter'] text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                  Se o Underground Vault (custodiante) falhar em renovar o{" "}
                  <span className="font-bold text-white">
                    Atestado de Custódia
                  </span>
                  , o token{" "}
                  <span className="font-bold text-white">
                    perde valor ou é pausado
                  </span>
                  , expondo o risco em{" "}
                  <span className="font-bold text-white">tempo real</span>{" "}
                  para o investidor e para a CVM.
                </p>
              </Card>

              <Card className="p-8 border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:border-[#caa34b] hover:bg-white/15 transition-all duration-300 h-full flex flex-col group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white w-12 h-12 rounded-full flex items-center justify-center font-['Montserrat'] text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <h4 className="font-['Montserrat'] text-xl font-bold text-white">
                    Segurança para o Investidor
                  </h4>
                </div>
                <p className="font-['Inter'] text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                  A{" "}
                  <span className="font-bold text-white">
                    "corrente de atestados"
                  </span>{" "}
                  assinados por todas as partes funciona como{" "}
                  <span className="font-bold text-white">
                    prova judicial de propriedade
                  </span>{" "}
                  para o investidor em caso de falência, garantindo a{" "}
                  <span className="font-bold text-white">
                    segregação patrimonial clara
                  </span>
                  .
                </p>
              </Card>
            </div>
          </div>

          {/* Conclusão Final */}
          <Card className="p-10 bg-gradient-to-br from-[#006b4f] to-[#014733] text-white border-2 border-white/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl flex-shrink-0 shadow-lg">
                <Zap className="h-10 w-10" />
              </div>
              <div className="flex-1">
                <h3 className="font-['Montserrat'] text-3xl font-bold mb-6">
                  Síntese: A Melodia Coesa
                </h3>
                <p className="font-['Inter'] text-base lg:text-lg leading-relaxed mb-4">
                  O sistema funciona como uma{" "}
                  <span className="font-bold text-white">orquestra coesa</span>, onde a
                  "melodia" (o ativo digital) só pode ser tocada (validada e
                  negociada) se todos os músicos (o governo, o laboratório e o
                  custodiante) tiverem endossado criptograficamente sua parte da
                  partitura.
                </p>
                <p className="font-['Inter'] text-base lg:text-lg leading-relaxed">
                  Esta arquitetura garante que{" "}
                  <span className="font-bold text-white">
                    todos os atores tenham incentivos alinhados
                  </span>{" "}
                  e que o sistema seja{" "}
                  <span className="font-bold text-white">resistente a fraudes</span>, com
                  cada parte validando apenas sua área de competência e assinando
                  digitalmente sua responsabilidade.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}