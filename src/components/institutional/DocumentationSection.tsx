import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  BookOpen,
  Fingerprint,
  Database,
  Shield,
  Users,
  FileCode,
  TrendingUp,
  Lock,
  Award,
} from "lucide-react";

export function DocumentationSection() {
  const sections = [
    {
      id: "overview",
      label: "Visão Geral",
      icon: BookOpen,
      content: {
        title: "GEMLAB — Laboratório Comunitário",
        subtitle: "Certificação, Rastreabilidade e Tokenização Mineral",
        description:
          "O GEMLAB é uma infraestrutura técnica e digital criada para transformar Campos Verdes em um polo internacional de certificação, lapidação e tokenização de esmeraldas, integrando gemologia, tecnologia geológica e blockchain.",
        objectives: [
          {
            title: "Origem e Autenticidade",
            description:
              "Garantir origem, autenticidade e rastreabilidade completa das esmeraldas desde a extração até o mercado final.",
          },
          {
            title: "Formação Profissional",
            description:
              "Criar novas especializações para a população local em gemologia digital, lapidação técnica e tecnologia blockchain.",
          },
          {
            title: "Economia Digital",
            description:
              "Conectar a produção mineral à economia digital via blockchain e NFTs, aumentando o valor agregado localmente.",
          },
          {
            title: "Formalização da Cadeia",
            description:
              "Formalizar a cadeia produtiva e abrir novas frentes de trabalho qualificadas com auditoria completa.",
          },
        ],
      },
    },
    {
      id: "pipeline",
      label: "Pipeline",
      icon: Fingerprint,
      content: {
        title: "Pipeline de Rastreabilidade",
        subtitle: "Do Garimpo à Blockchain",
        stages: [
          {
            stage: "01",
            title: "Prospecção & Cadastro",
            description:
              "Registro da jazida com georreferenciamento preciso, upload de documentos técnicos em IPFS e geração do identificador único da mina (mineId).",
            technical: "CIDs IPFS, coordenadas GPS, documentação inicial",
          },
          {
            stage: "02",
            title: "Extração de Lotes",
            description:
              "Cada lote extraído recebe um batchId único, com registro de peso total, fotografias e geolocalização. Evento on-chain: RawExtraction.",
            technical: "ERC-1155, peso em quilates, hash fotográfico",
          },
          {
            stage: "03",
            title: "Beneficiamento",
            description:
              "Registro de rendimentos, splits de lotes e classificação inicial entre uso gemológico, industrial ou rejeito. Evento on-chain: BatchProcessed.",
            technical: "Splits on-chain, classificação técnica, rendimento",
          },
          {
            stage: "04",
            title: "Seleção Gemológica",
            description:
              "Pedras de qualidade gemológica iniciam análise completa com registro fotográfico macro, micro e 360° de alta resolução.",
            technical: "Fotos profissionais, pré-análise visual, separação",
          },
          {
            stage: "05",
            title: "Análise Completa",
            description:
              "Medidas de peso, dimensões, cor, clareza e inclusões. Espectroscopia Raman gera o spectralHash (identidade digital única). Laudo técnico padronizado.",
            technical: "Espectro Raman, spectralHash, laudo gemológico",
          },
          {
            stage: "06",
            title: "Upload IPFS",
            description:
              "Envio seguro de imagens, vídeos, laudo PDF, espectro e JSON com metadados para IPFS/Pinata. Sistema retorna CIDs únicos para cada documento.",
            technical: "CID_json, CID_report, CID_spectrum, CID_images",
          },
          {
            stage: "07",
            title: "Mint do NFT",
            description:
              "Criação do NFT ERC-721 incluindo tokenId, originBatchId, spectralHash, tokenURI e dados gemológicos completos. Evento on-chain: StoneMinted.",
            technical: "ERC-721, tokenURI IPFS, metadados imutáveis",
          },
          {
            stage: "08",
            title: "Certificação",
            description:
              "Laboratório emite attestation via AttestationHub. Registro permanente da certificadora e CID do certificado. Evento: GemCertified.",
            technical: "Attestation on-chain, labId, certCID verificável",
          },
        ],
      },
    },
    {
      id: "structure",
      label: "Estrutura",
      icon: Database,
      content: {
        title: "Estrutura Operacional",
        subtitle: "Integração Física e Digital",
        components: [
          {
            title: "Laboratório Físico",
            description:
              "Estrutura completa para análise gemológica e espectroscópica com equipamentos de precisão (espectrômetro Raman, microscópio gemológico, balança digital calibrada).",
            features: [
              "Espectrômetro Raman para análise molecular",
              "Microscópio gemológico binocular 10-80x",
              "Balança digital de precisão (0,001ct)",
              "Cabine fotográfica profissional 360°",
              "Equipamentos de medição e análise de cor",
            ],
          },
          {
            title: "Sistema Digital",
            description:
              "Dashboard completo do gemólogo com upload de arquivos, geração automática de spectralHash, preenchimento de laudo digital e pinagem de CIDs em tempo real.",
            features: [
              "Uploader multimídia (macro/micro/360°)",
              "Processador de espectro → spectralHash",
              "Gerador de JSON padronizado",
              "Assinatura digital PGP",
              "Sistema de mint automático",
              "Logs de auditoria completos",
            ],
          },
          {
            title: "Blockchain",
            description:
              "Registro de todos os eventos na blockchain com mint de NFTs (ERC-721) e controle de lotes (ERC-1155). Integração com Oracle Fiscal municipal.",
            features: [
              "Smart contracts auditados",
              "Eventos on-chain rastreáveis",
              "Integração com Oracle Fiscal",
              "Whitelist KYC automatizada",
              "Governança transparente",
            ],
          },
          {
            title: "Armazenamento Descentralizado",
            description:
              "Pinagem redundante em IPFS via Pinata e backup permanente em Arweave para garantir disponibilidade e imutabilidade dos documentos.",
            features: [
              "IPFS/Pinata (pinagem redundante)",
              "Arweave (backup permanente)",
              "CIDs verificáveis publicamente",
              "Redundância geográfica",
              "Disponibilidade 24/7",
            ],
          },
        ],
      },
    },
    {
      id: "contracts",
      label: "Smart Contracts",
      icon: FileCode,
      content: {
        title: "Arquitetura de Contratos",
        subtitle: "Sistema Modular e Auditável",
        contracts: [
          {
            name: "Registry",
            type: "Conformidade e Whitelist",
            description:
              "Cadastro de entidades verificadas (minas, laboratórios, custodians, avaliadores) com controle de acesso KYC inspirado em ERC-3643.",
            functions: [
              "registerEntity() — cadastro de novas entidades",
              "verifyKYC() — validação de documentos",
              "updateWhitelist() — controle de acesso",
              "isWhitelisted() — verificação pública",
            ],
          },
          {
            name: "BatchToken (ERC-1155)",
            type: "Lotes Minerais",
            description:
              "Representa lotes de minério bruto com registro de splits, merges e proveniência completa desde a extração.",
            functions: [
              "mintBatch() — criação de novo lote",
              "splitBatch() — divisão de lote",
              "mergeBatches() — fusão de lotes",
              "getBatchOrigin() — rastreabilidade",
            ],
          },
          {
            name: "StoneToken (ERC-721)",
            type: "Pedras Individuais",
            description:
              "Cada pedra certificada é um NFT único armazenando spectralHash, origem, custódia e transferência condicionada à whitelist.",
            functions: [
              "mintStone() — criação do NFT da pedra",
              "setSpectralHash() — registro da assinatura",
              "updateCustody() — controle de custódia",
              "safeTransferFrom() — transferência KYC",
            ],
          },
          {
            name: "AttestationHub",
            type: "Certificações",
            description:
              "Repositório público de attestations gemológicas emitidas por laboratórios credenciados. Registro imutável e verificável.",
            functions: [
              "issueAttestation() — emissão de certificado",
              "verifyAttestation() — verificação pública",
              "revokeAttestation() — revogação (casos excepcionais)",
              "getLabHistory() — histórico do laboratório",
            ],
          },
        ],
      },
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Shield,
      content: {
        title: "Dashboard do Gemólogo",
        subtitle: "Interface Técnica de Certificação",
        description:
          "O painel GEMLAB é a interface central para gemólogos certificados realizarem análises completas, gerarem spectralHash e emitirem certificações digitais imutáveis.",
        workflow: [
          {
            step: "01",
            title: "Recepção da Pedra",
            description:
              "Cadastro inicial com código de identificação temporário, peso bruto e dados do solicitante.",
          },
          {
            step: "02",
            title: "Documentação Visual",
            description:
              "Upload de fotografias macro, micro e vídeo 360° em alta resolução. Formatos aceitos: JPEG, PNG, MP4.",
          },
          {
            step: "03",
            title: "Análise Espectroscópica",
            description:
              "Captura do espectro Raman da amostra. Upload do arquivo CSV/TXT e geração automática do spectralHash único.",
          },
          {
            step: "04",
            title: "Preenchimento do Laudo",
            description:
              "Formulário estruturado com campos técnicos: dimensões, peso (ct), cor (GIA), clareza, tipo de corte, inclusões observadas.",
          },
          {
            step: "05",
            title: "Assinatura Digital",
            description:
              "Assinatura PGP do gemólogo responsável garantindo autenticidade e responsabilidade técnica do laudo.",
          },
          {
            step: "06",
            title: "Pinagem IPFS",
            description:
              "Sistema envia automaticamente todos os arquivos para IPFS/Pinata e retorna CIDs verificáveis para cada documento.",
          },
          {
            step: "07",
            title: "Mint do NFT",
            description:
              "Geração automática do NFT (ERC-721) com todos os metadados, spectralHash e CIDs. Transação enviada à blockchain.",
          },
          {
            step: "08",
            title: "Emissão do Certificado",
            description:
              "Certificado digital PDF gerado com QR Code de verificação, dados completos e link para visualização on-chain.",
          },
        ],
      },
    },
    {
      id: "impact",
      label: "Impacto Social",
      icon: Users,
      content: {
        title: "Impacto Econômico e Social",
        subtitle: "Transformação de Campos Verdes",
        description:
          "O GEMLAB inaugura novas profissões técnicas e qualificadas, formalizando a cadeia produtiva e gerando valor agregado localmente.",
        professions: [
          {
            title: "Gemólogo Digital",
            description:
              "Profissional formado em análise gemológica tradicional com especialização em tecnologia blockchain e certificação digital.",
            skills: [
              "Análise gemológica (GIA/ICA)",
              "Espectroscopia Raman",
              "Blockchain e NFTs",
              "IPFS e armazenamento descentralizado",
            ],
          },
          {
            title: "Lapidário Certificado",
            description:
              "Especialista em corte e lapidação de esmeraldas com técnicas modernas e certificação de qualidade.",
            skills: [
              "Técnicas de lapidação",
              "Cortes modernos e clássicos",
              "Polimento de precisão",
              "Análise de rendimento",
            ],
          },
          {
            title: "Técnico de Laboratório",
            description:
              "Operador de equipamentos de precisão para análise espectroscópica e documentação técnica.",
            skills: [
              "Operação de espectrômetro Raman",
              "Microscopia gemológica",
              "Fotografia técnica 360°",
              "Controle de qualidade",
            ],
          },
          {
            title: "Especialista Blockchain",
            description:
              "Desenvolvedor e auditor de smart contracts focado em rastreabilidade e tokenização de ativos reais.",
            skills: [
              "Smart contracts (Solidity)",
              "Integração Web3",
              "Auditoria de segurança",
              "APIs e oracles",
            ],
          },
        ],
        transformation: [
          {
            metric: "Formalização",
            description:
              "Registro oficial de garimpeiros, mineradores e comerciantes com emissão de documentação fiscal completa.",
          },
          {
            metric: "Valor Agregado",
            description:
              "Aumento de 15-40% no valor das pedras certificadas comparado ao mercado informal tradicional.",
          },
          {
            metric: "Empregos Qualificados",
            description:
              "Criação de 50+ postos de trabalho técnico qualificado nos primeiros 24 meses de operação.",
          },
          {
            metric: "Arrecadação Municipal",
            description:
              "Sistema de Oracle Fiscal com cálculo transparente de taxas e royalties.",
          },
        ],
      },
    },
    {
      id: "security",
      label: "Segurança",
      icon: Lock,
      content: {
        title: "Segurança e Conformidade",
        subtitle: "Padrões de Auditoria e Compliance",
        measures: [
          {
            category: "Armazenamento",
            title: "Redundância de Dados",
            description:
              "Pinagem redundante em Pinata (IPFS) com backup permanente em Arweave garantindo disponibilidade perpétua dos documentos.",
            technical: [
              "Múltiplos nós IPFS",
              "Gateway redundante",
              "Backup Arweave automático",
              "Verificação periódica de CIDs",
            ],
          },
          {
            category: "Autenticação",
            title: "Assinaturas Digitais",
            description:
              "Todos os laudos técnicos são assinados digitalmente via PGP pelos gemólogos responsáveis, garantindo autenticidade e não-repúdio.",
            technical: [
              "Assinatura PGP dos gemólogos",
              "Timestamp on-chain",
              "Hash dos documentos",
              "Verificação pública disponível",
            ],
          },
          {
            category: "Compliance",
            title: "KYC/AML",
            description:
              "Whitelist obrigatória para transferência de NFTs com verificação KYC completa e controles AML integrados.",
            technical: [
              "Verificação de identidade",
              "Checagem de sanções",
              "Limite de transações",
              "Relatórios de conformidade",
            ],
          },
          {
            category: "Auditoria",
            title: "Rastreabilidade Completa",
            description:
              "Todos os eventos são registrados on-chain com logs imutáveis e auditáveis por qualquer parte interessada.",
            technical: [
              "Eventos indexados",
              "Histórico completo",
              "API de consulta pública",
              "Dashboard de transparência",
            ],
          },
        ],
        standards: [
          "ISO 17025 (laboratórios de ensaio)",
          "GIA (Gemological Institute of America)",
          "ICA (International Colored Gemstone Association)",
          "ERC-721 (NFT Standard)",
          "ERC-1155 (Multi Token Standard)",
          "IPFS/Filecoin (armazenamento descentralizado)",
        ],
      },
    },
  ];

  return (
    <section id="docs" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#006b4f] text-white px-4 py-2">
            Documentação Oficial
          </Badge>
          <h2 className="font-['Inter'] text-3xl lg:text-5xl font-bold text-[#1b1b1b] mb-6">
            Documentação Técnica GEMLAB
          </h2>
          <p className="font-['Inter'] text-lg text-gray-600 leading-relaxed">
            Arquitetura completa do protocolo de certificação, rastreabilidade e
            tokenização de esmeraldas. Conheça cada etapa do processo técnico e
            a infraestrutura que sustenta o ecossistema GEMLAB.
          </p>
        </div>

        {/* Tabs de Documentação */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-7 gap-2 bg-transparent h-auto p-0 mb-8">
            {sections.map((section) => (
              <TabsTrigger
                key={section.id}
                value={section.id}
                className="data-[state=active]:bg-[#006b4f] data-[state=active]:text-white border-2 border-[#e5e7eb] data-[state=active]:border-[#006b4f] py-3 px-4 rounded-xl font-['Inter'] flex items-center justify-center gap-2"
              >
                <section.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{section.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content: Visão Geral */}
          <TabsContent value="overview" className="mt-8">
            <Card className="p-8 lg:p-12 border-2 border-[#006b4f]/20">
              <div className="mb-8">
                <h3 className="font-['Inter'] text-2xl lg:text-3xl font-bold text-[#1b1b1b] mb-2">
                  {sections[0].content.title}
                </h3>
                <p className="font-['Inter'] text-xl text-[#006b4f] mb-4">
                  {sections[0].content.subtitle}
                </p>
                <p className="font-['Inter'] text-gray-600 leading-relaxed text-lg">
                  {sections[0].content.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {sections[0].content.objectives.map((objective, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-gradient-to-br from-[#006b4f]/5 to-transparent border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#006b4f] text-white flex items-center justify-center font-bold mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                      {objective.title}
                    </h4>
                    <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                      {objective.description}
                    </p>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-[#caa34b]/10 rounded-xl border-2 border-[#caa34b]/20">
                <p className="font-['Inter'] text-[#1b1b1b] leading-relaxed">
                  <strong>Transição Estratégica:</strong> O GEMLAB representa a
                  evolução de Campos Verdes de um modelo de mineração
                  extrativista tradicional para um ecossistema de alto valor
                  tecnológico, auditável e globalmente integrado, posicionando a
                  cidade como referência internacional em esmeraldas éticas e
                  rastreáveis.
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Tab Content: Pipeline */}
          <TabsContent value="pipeline" className="mt-8">
            <Card className="p-8 lg:p-12 border-2 border-[#006b4f]/20">
              <div className="mb-8">
                <h3 className="font-['Inter'] text-2xl lg:text-3xl font-bold text-[#1b1b1b] mb-2">
                  {sections[1].content.title}
                </h3>
                <p className="font-['Inter'] text-xl text-[#006b4f] mb-4">
                  {sections[1].content.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {sections[1].content.stages.map((stage, index) => (
                  <Card
                    key={index}
                    className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#006b4f] to-[#014733] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {stage.stage}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-['Inter'] text-xl font-semibold text-[#1b1b1b] mb-2">
                          {stage.title}
                        </h4>
                        <p className="font-['Inter'] text-gray-600 leading-relaxed mb-3">
                          {stage.description}
                        </p>
                        <Badge
                          variant="outline"
                          className="font-['Inter'] text-xs text-[#006b4f] border-[#006b4f]"
                        >
                          {stage.technical}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#006b4f]/10 to-[#014733]/10 rounded-xl border-2 border-[#006b4f]/20">
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-3">
                  Eventos On-Chain Principais
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="font-['Inter'] text-sm">
                    <strong className="text-[#006b4f]">RawExtraction:</strong>{" "}
                    Registro de novo lote
                  </div>
                  <div className="font-['Inter'] text-sm">
                    <strong className="text-[#006b4f]">BatchProcessed:</strong>{" "}
                    Beneficiamento concluído
                  </div>
                  <div className="font-['Inter'] text-sm">
                    <strong className="text-[#006b4f]">StoneMinted:</strong>{" "}
                    NFT criado
                  </div>
                  <div className="font-['Inter'] text-sm">
                    <strong className="text-[#006b4f]">GemCertified:</strong>{" "}
                    Certificação emitida
                  </div>
                  <div className="font-['Inter'] text-sm">
                    <strong className="text-[#006b4f]">
                      CustodyTransferred:
                    </strong>{" "}
                    Mudança de custódia
                  </div>
                  <div className="font-['Inter'] text-sm">
                    <strong className="text-[#006b4f]">SaleCompleted:</strong>{" "}
                    Venda finalizada
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Tab Content: Estrutura */}
          <TabsContent value="structure" className="mt-8">
            <Card className="p-8 lg:p-12 border-2 border-[#006b4f]/20">
              <div className="mb-8">
                <h3 className="font-['Inter'] text-2xl lg:text-3xl font-bold text-[#1b1b1b] mb-2">
                  {sections[2].content.title}
                </h3>
                <p className="font-['Inter'] text-xl text-[#006b4f] mb-4">
                  {sections[2].content.subtitle}
                </p>
              </div>

              <div className="space-y-8">
                {sections[2].content.components.map((component, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center text-[#006b4f] font-bold text-lg">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h4 className="font-['Inter'] text-xl font-semibold text-[#1b1b1b]">
                          {component.title}
                        </h4>
                      </div>
                    </div>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed mb-4 ml-15">
                      {component.description}
                    </p>
                    <div className="ml-15 grid md:grid-cols-2 gap-3">
                      {component.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-start gap-2 font-['Inter'] text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#006b4f] mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    {index < sections[2].content.components.length - 1 && (
                      <div className="mt-6 border-b border-[#e5e7eb]" />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Tab Content: Smart Contracts */}
          <TabsContent value="contracts" className="mt-8">
            <Card className="p-8 lg:p-12 border-2 border-[#006b4f]/20">
              <div className="mb-8">
                <h3 className="font-['Inter'] text-2xl lg:text-3xl font-bold text-[#1b1b1b] mb-2">
                  {sections[3].content.title}
                </h3>
                <p className="font-['Inter'] text-xl text-[#006b4f] mb-4">
                  {sections[3].content.subtitle}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {sections[3].content.contracts.map((contract, index) => (
                  <Card
                    key={index}
                    className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-1">
                          {contract.name}
                        </h4>
                        <Badge className="bg-[#006b4f]/10 text-[#006b4f] text-xs">
                          {contract.type}
                        </Badge>
                      </div>
                      <FileCode className="h-8 w-8 text-[#006b4f]" />
                    </div>
                    <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed mb-4">
                      {contract.description}
                    </p>
                    <div className="space-y-2">
                      <p className="font-['Inter'] text-xs font-semibold text-[#1b1b1b] uppercase tracking-wide">
                        Funções Principais:
                      </p>
                      {contract.functions.map((func, fIndex) => (
                        <div
                          key={fIndex}
                          className="font-['Inter'] text-xs font-mono bg-[#1b1b1b] text-[#caa34b] p-2 rounded"
                        >
                          {func}
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#006b4f]/10 to-[#caa34b]/10 rounded-xl border-2 border-[#006b4f]/20">
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-3">
                  Auditoria e Segurança
                </h4>
                <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                  Todos os smart contracts passam por auditoria externa
                  completa, testes automatizados (coverage &gt; 95%) e análise
                  de segurança com ferramentas especializadas (Slither, Mythril,
                  Echidna). Código-fonte verificado e publicado em exploradores
                  blockchain para transparência total.
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Tab Content: Dashboard */}
          <TabsContent value="dashboard" className="mt-8">
            <Card className="p-8 lg:p-12 border-2 border-[#006b4f]/20">
              <div className="mb-8">
                <h3 className="font-['Inter'] text-2xl lg:text-3xl font-bold text-[#1b1b1b] mb-2">
                  {sections[4].content.title}
                </h3>
                <p className="font-['Inter'] text-xl text-[#006b4f] mb-4">
                  {sections[4].content.subtitle}
                </p>
                <p className="font-['Inter'] text-gray-600 leading-relaxed">
                  {sections[4].content.description}
                </p>
              </div>

              <div className="space-y-4">
                {sections[4].content.workflow.map((item, index) => (
                  <Card
                    key={index}
                    className="p-5 border-l-4 border-l-[#006b4f] bg-gradient-to-r from-[#006b4f]/5 to-transparent"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#006b4f] text-white flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-1">
                          {item.title}
                        </h4>
                        <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-[#006b4f]/5 border-2 border-[#006b4f]/20">
                  <Shield className="h-8 w-8 text-[#006b4f] mb-3" />
                  <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                    Controle de Acesso
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                    Apenas gemólogos certificados e cadastrados no Registry
                    podem acessar o dashboard. Autenticação via carteira Web3 e
                    verificação on-chain de credenciais.
                  </p>
                </Card>
                <Card className="p-6 bg-[#caa34b]/5 border-2 border-[#caa34b]/20">
                  <Database className="h-8 w-8 text-[#caa34b] mb-3" />
                  <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                    Auditoria Completa
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                    Cada ação no dashboard gera logs imutáveis com timestamp e
                    hash de verificação. Histórico completo acessível para
                    auditoria e conformidade.
                  </p>
                </Card>
              </div>
            </Card>
          </TabsContent>

          {/* Tab Content: Impacto Social */}
          <TabsContent value="impact" className="mt-8">
            <Card className="p-8 lg:p-12 border-2 border-[#006b4f]/20">
              <div className="mb-8">
                <h3 className="font-['Inter'] text-2xl lg:text-3xl font-bold text-[#1b1b1b] mb-2">
                  {sections[5].content.title}
                </h3>
                <p className="font-['Inter'] text-xl text-[#006b4f] mb-4">
                  {sections[5].content.subtitle}
                </p>
                <p className="font-['Inter'] text-gray-600 leading-relaxed">
                  {sections[5].content.description}
                </p>
              </div>

              {/* Novas Profissões */}
              <div className="mb-8">
                <h4 className="font-['Inter'] text-xl font-semibold text-[#1b1b1b] mb-6">
                  Novas Profissões Criadas
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {sections[5].content.professions.map((profession, index) => (
                    <Card
                      key={index}
                      className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-[#006b4f] text-white flex items-center justify-center font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <h5 className="font-['Inter'] font-semibold text-[#1b1b1b]">
                          {profession.title}
                        </h5>
                      </div>
                      <p className="font-['Inter'] text-sm text-gray-600 mb-4 leading-relaxed">
                        {profession.description}
                      </p>
                      <div className="space-y-2">
                        <p className="font-['Inter'] text-xs font-semibold text-[#1b1b1b] uppercase tracking-wide">
                          Competências:
                        </p>
                        {profession.skills.map((skill, sIndex) => (
                          <div
                            key={sIndex}
                            className="flex items-center gap-2 font-['Inter'] text-xs text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#006b4f]" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Transformação da Cadeia */}
              <div>
                <h4 className="font-['Inter'] text-xl font-semibold text-[#1b1b1b] mb-6">
                  Indicadores de Transformação
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {sections[5].content.transformation.map((item, index) => (
                    <Card
                      key={index}
                      className="p-5 text-center border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors hover:shadow-lg"
                    >
                      <TrendingUp className="h-8 w-8 text-[#006b4f] mx-auto mb-3" />
                      <h5 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                        {item.metric}
                      </h5>
                      <p className="font-['Inter'] text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#caa34b]/10 to-[#006b4f]/10 rounded-xl border-2 border-[#caa34b]/20">
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-3">
                  Visão de Longo Prazo
                </h4>
                <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                  O GEMLAB estabelece as bases para Campos Verdes tornar-se um
                  centro de excelência em gemologia digital e blockchain
                  aplicado a ativos reais. A formação contínua de profissionais
                  qualificados garante sustentabilidade econômica e fortalece a
                  posição do município como referência internacional em
                  certificação mineral.
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Tab Content: Segurança */}
          <TabsContent value="security" className="mt-8">
            <Card className="p-8 lg:p-12 border-2 border-[#006b4f]/20">
              <div className="mb-8">
                <h3 className="font-['Inter'] text-2xl lg:text-3xl font-bold text-[#1b1b1b] mb-2">
                  {sections[6].content.title}
                </h3>
                <p className="font-['Inter'] text-xl text-[#006b4f] mb-4">
                  {sections[6].content.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {sections[6].content.measures.map((measure, index) => (
                  <Card
                    key={index}
                    className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors"
                  >
                    <Badge className="mb-3 bg-[#006b4f] text-white">
                      {measure.category}
                    </Badge>
                    <h4 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-2">
                      {measure.title}
                    </h4>
                    <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed mb-4">
                      {measure.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {measure.technical.map((tech, tIndex) => (
                        <div
                          key={tIndex}
                          className="flex items-start gap-2 font-['Inter'] text-xs text-gray-700"
                        >
                          <Shield className="h-4 w-4 text-[#006b4f] flex-shrink-0 mt-0.5" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Padrões e Standards */}
              <div className="mt-8 p-6 bg-[#1b1b1b] text-white rounded-xl">
                <h4 className="font-['Inter'] font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#caa34b]" />
                  Padrões e Certificações Seguidos
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {sections[6].content.standards.map((standard, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 font-['Inter'] text-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#caa34b]" />
                      <span>{standard}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-[#006b4f]/10 to-[#014733]/10 rounded-xl border-2 border-[#006b4f]/20">
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-3">
                  Compromisso com a Conformidade
                </h4>
                <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                  O GEMLAB adota as melhores práticas internacionais de
                  segurança, auditoria e conformidade. Todas as operações são
                  rastreáveis, verificáveis e aderentes aos padrões GIA, ICA e
                  regulamentações blockchain. A transparência total é um pilar
                  fundamental do protocolo.
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Download Documentos */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#006b4f] to-[#014733] rounded-2xl text-white text-center">
          <BookOpen className="h-12 w-12 text-[#caa34b] mx-auto mb-4" />
          <h3 className="font-['Inter'] text-2xl font-bold mb-3">
            Documentos Oficiais para Download
          </h3>
          <p className="font-['Inter'] text-gray-200 mb-6 max-w-2xl mx-auto">
            Acesse os documentos técnicos completos, whitepapers e
            especificações detalhadas do protocolo GEMLAB.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Badge className="bg-[#caa34b] text-white px-4 py-2">
              Whitepaper Técnico
            </Badge>
            <Badge className="bg-[#caa34b] text-white px-4 py-2">
              Roadmap de Implementação
            </Badge>
            <Badge className="bg-[#caa34b] text-white px-4 py-2">
              Indicadores de Impacto
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}