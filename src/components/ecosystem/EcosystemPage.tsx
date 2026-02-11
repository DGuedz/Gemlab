import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import React from "react";
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
  Copy,
  Check,
} from "lucide-react";

export function EcosystemPage() {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null);
  
  const handleCopyNftId = (nftId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(nftId);
    setCopiedId(nftId);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
          name: "Cooperativa Local",
          subtitle: "Oráculo Operacional & Custodiante Central",
          description:
            "Oráculo Operacional e Custodiante Central do ecossistema GEMLAB. Responsável pela custódia física segregada, emissão de NFe, Atestado de Origem (EAS #1) e operação do Oráculo Delegado para cálculo e pagamento de tributos (CFEM/ISS) que gera a Prova Tributária (EAS #5). Único emissor de Nota Fiscal no protocolo e ponto de contato com o garimpeiro.",
          role: "Atestador de Origem (EAS #1) + Operador do Oráculo Tributário (EAS #5)",
          keyFunction:
            "Custodia ativo físico, emite NFe com hash on-chain, gera Atestado de Origem (EAS #1), opera Oráculo Delegado para cálculo/pagamento CFEM/ISS (base da Prova Tributária EAS #5), organiza fluxo econômico (produção mineral, beneficiamento, lapidação e comércio de biojoias). Indispensável para rastreabilidade RWA e integridade física/fiscal.",
          icon: Building,
        },
        {
          name: "Custodiante Operacional",
          subtitle: "Gestor da Custódia Segregada",
          description:
            "Instalação segura onde um Ator Verificado supervisiona a cadeia de custódia do ativo físico (RWA). Garante o lastro físico inquebrável para a emissão de títulos digitais. Através da Prova de Custódia (EAS), atesta a existência física e fiscal do ativo, garantindo auditabilidade total do ecossistema.",
          role: "Prova de Custódia (EAS)",
          keyFunction:
            "Atesta existência física e fiscal do ativo através da Prova de Custódia (EAS). Garante lastro físico inquebrável, supervisiona cadeia de custódia segregada e proporciona auditabilidade contínua do ecossistema RWA.",
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
          detail: "Cooperativa Local emite NFe + Atestado EAS #1 on-chain",
        },
        {
          name: "Prova Científica",
          detail: "GEMLAB Tech atesta SpectralHash/identidade",
        },
        {
          name: "Prova de Custódia",
          detail: "Custodiante atesta existência física/fiscal (EAS)",
        },
        {
          name: "Prova Tributária",
          detail: "Cooperativa Local opera Oráculo Delegado CFEM/ISS (EAS #5)",
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
    <div className="min-h-screen bg-gradient-to-b from-[#0a4d3c] to-[#083d30] transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#0d6654] via-[#0f7d62] to-[#0d6654] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20 animate-pulse" />
        </div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af6a] rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#10b981] rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#caa34b] text-white mb-6 px-6 py-2.5 hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer">
              <Target className="h-4 w-4 mr-2" />
              Tese de Integração Estratégica
            </Badge>
            <h1 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#caa34b]">
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
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/30 hover:border-[#caa34b] hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <p className="font-['Inter'] text-sm text-gray-200 mb-1">
                  Protocolo
                </p>
                <p className="font-['Inter'] font-bold text-lg group-hover:text-[#caa34b] transition-colors">GEMLAB</p>
                <p className="font-['Inter'] text-xs text-[#caa34b] font-mono mt-1">
                  EAS Protocol
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/30 hover:border-[#caa34b] hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <p className="font-['Inter'] text-sm text-gray-200 mb-1">
                  Blockchain
                </p>
                <p className="font-['Inter'] font-bold text-lg group-hover:text-[#caa34b] transition-colors">
                  Base Network
                </p>
                <p className="font-['Inter'] text-xs text-[#caa34b] font-mono mt-1">
                  Layer 2 • EVM
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/30 hover:border-[#caa34b] hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <p className="font-['Inter'] text-sm text-gray-200 mb-1">
                  Atestações
                </p>
                <p className="font-['Inter'] font-bold text-lg group-hover:text-[#caa34b] transition-colors">1,247</p>
                <p className="font-['Inter'] text-xs text-[#caa34b] font-mono mt-1">
                  On-chain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Atores e Instituições */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-['Montserrat'] text-3xl lg:text-4xl font-bold text-white mb-4">
              Atores e Instituições
            </h2>
            <p className="font-['Inter'] text-lg text-white/90 max-w-3xl mx-auto">
              Ecossistema completo de validação científica, jurídica e
              financeira para rastreabilidade de esmeraldas
            </p>
          </div>

          <div className="space-y-12">
            {actors.map((category, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`${category.bgColor} text-white p-3 rounded-lg`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-['Montserrat'] text-2xl font-bold text-white">
                      {category.category}
                    </h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.entities.map((entity, entityIdx) => {
                    const nftId = `#${(idx * 100 + entityIdx + 1).toString().padStart(4, '0')}`;
                    const cardId = `${idx}-${entityIdx}`;
                    const isHovered = hoveredCard === cardId;
                    const isCopied = copiedId === nftId;
                    
                    return (
                      <Card
                        key={entityIdx}
                        className="relative p-0 border border-white/20 bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] hover:border-[#caa34b] transition-all duration-500 hover:shadow-[0_0_30px_rgba(202,163,75,0.3)] group overflow-hidden cursor-pointer animate-slide-up"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                          animationDelay: `${entityIdx * 100}ms`,
                          animationFillMode: 'both',
                        }}
                        onMouseEnter={() => setHoveredCard(cardId)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#caa34b]/0 via-[#caa34b]/0 to-[#caa34b]/0 group-hover:from-[#caa34b]/10 group-hover:via-[#caa34b]/5 group-hover:to-[#caa34b]/0 transition-all duration-500 pointer-events-none" />
                        
                        {/* SVG Background Pattern */}
                        <svg className="absolute inset-0 w-full h-full opacity-5 group-hover:opacity-10 transition-opacity duration-500" preserveAspectRatio="xMidYMid slice">
                          <defs>
                            <pattern id={`grid-${idx}-${entityIdx}`} width="20" height="20" patternUnits="userSpaceOnUse">
                              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#caa34b]"/>
                            </pattern>
                            <linearGradient id={`nft-gradient-${idx}-${entityIdx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{ stopColor: category.color, stopOpacity: 0.1 }} />
                              <stop offset="100%" style={{ stopColor: category.color, stopOpacity: 0 }} />
                            </linearGradient>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#grid-${idx}-${entityIdx})`} />
                          <rect width="100%" height="100%" fill={`url(#nft-gradient-${idx}-${entityIdx})`} />
                        </svg>

                        {/* Corner Accent Lines */}
                        <svg className="absolute top-0 right-0 w-16 h-16 text-[#caa34b] opacity-30 group-hover:opacity-60 transition-opacity" viewBox="0 0 64 64">
                          <line x1="64" y1="0" x2="64" y2="32" stroke="currentColor" strokeWidth="1" />
                          <line x1="32" y1="0" x2="64" y2="0" stroke="currentColor" strokeWidth="1" />
                          <line x1="64" y1="12" x2="52" y2="0" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                        </svg>

                        <svg className="absolute bottom-0 left-0 w-16 h-16 text-[#caa34b] opacity-30 group-hover:opacity-60 transition-opacity" viewBox="0 0 64 64">
                          <line x1="0" y1="64" x2="0" y2="32" stroke="currentColor" strokeWidth="1" />
                          <line x1="0" y1="64" x2="32" y2="64" stroke="currentColor" strokeWidth="1" />
                          <line x1="0" y1="52" x2="12" y2="64" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                        </svg>

                        {/* Content Container */}
                        <div className="relative p-6">
                          {/* Header with NFT ID */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-4 flex-1">
                              {/* Hexagonal Icon Container */}
                              <div className="relative flex-shrink-0">
                                {/* Animated Hexagonal Border */}
                                <svg className="absolute inset-0 w-14 h-14 -left-1 -top-1" viewBox="0 0 100 100">
                                  <defs>
                                    <linearGradient id={`icon-gradient-${idx}-${entityIdx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" style={{ stopColor: category.color, stopOpacity: 0.8 }} />
                                      <stop offset="100%" style={{ stopColor: category.color, stopOpacity: 0.4 }} />
                                    </linearGradient>
                                    
                                    {/* Rotating gradient for animation */}
                                    <linearGradient id={`icon-gradient-animated-${idx}-${entityIdx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" style={{ stopColor: '#caa34b', stopOpacity: 1 }}>
                                        <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
                                      </stop>
                                      <stop offset="50%" style={{ stopColor: category.color, stopOpacity: 0.6 }}>
                                        <animate attributeName="offset" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                                      </stop>
                                      <stop offset="100%" style={{ stopColor: '#caa34b', stopOpacity: 1 }}>
                                        <animate attributeName="offset" values="1;0;1" dur="3s" repeatCount="indefinite" />
                                      </stop>
                                    </linearGradient>
                                  </defs>
                                  
                                  {/* Base hexagon */}
                                  <polygon 
                                    points="50 5, 90 28, 90 72, 50 95, 10 72, 10 28" 
                                    fill="none" 
                                    stroke={`url(#icon-gradient-${idx}-${entityIdx})`}
                                    strokeWidth="2"
                                    className="opacity-60 group-hover:opacity-0 transition-opacity duration-300"
                                  />
                                  
                                  {/* Animated hexagon on hover */}
                                  <polygon 
                                    points="50 5, 90 28, 90 72, 50 95, 10 72, 10 28" 
                                    fill="none" 
                                    stroke={`url(#icon-gradient-animated-${idx}-${entityIdx})`}
                                    strokeWidth="2.5"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    strokeDasharray="300"
                                    strokeDashoffset="300"
                                  >
                                    <animate
                                      attributeName="stroke-dashoffset"
                                      from="300"
                                      to="0"
                                      dur="1s"
                                      begin="indefinite"
                                      fill="freeze"
                                      className="group-hover:animate"
                                    />
                                  </polygon>
                                </svg>
                                
                                {/* Icon with glow effect */}
                                <div
                                  className={`${category.bgColor} text-white p-3 rounded-lg flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(202,163,75,0.5)] transition-all duration-300 relative z-10`}
                                >
                                  {entity.name === "GEMLAB TECH" ? (
                                    <div className="w-5 h-5 flex items-center justify-center">
                                      <Gem className="h-5 w-5" />
                                    </div>
                                  ) : (
                                    <entity.icon className="h-5 w-5" />
                                  )}
                                </div>
                              </div>

                              <div className="flex-1 min-w-0">
                                <h4 className="font-['Montserrat'] text-lg font-bold text-white mb-1 group-hover:text-[#caa34b] transition-colors truncate">
                                  {entity.name}
                                </h4>
                                <p className="font-['Inter'] text-sm font-medium text-white/70">
                                  {entity.subtitle}
                                </p>
                              </div>
                            </div>

                            {/* NFT ID Badge */}
                            <div className="flex flex-col items-end gap-1 flex-shrink-0">
                              <div 
                                className="group/badge font-['Inter'] font-mono text-[10px] text-[#caa34b] border border-[#caa34b]/30 px-2 py-0.5 rounded bg-[#caa34b]/5 hover:bg-[#caa34b]/20 hover:border-[#caa34b] transition-all cursor-pointer flex items-center gap-1 relative"
                                onClick={(e) => handleCopyNftId(nftId, e)}
                                title="Click to copy NFT ID"
                              >
                                <span>{nftId}</span>
                                {isCopied ? (
                                  <Check className="h-3 w-3 animate-in fade-in zoom-in duration-200" />
                                ) : (
                                  <Copy className="h-3 w-3 opacity-0 group-hover/badge:opacity-100 transition-opacity" />
                                )}
                                
                                {/* Tooltip */}
                                {isHovered && !isCopied && (
                                  <div className="absolute -top-8 right-0 bg-[#1b1b1b] text-white text-[9px] px-2 py-1 rounded whitespace-nowrap border border-[#caa34b]/30 animate-in fade-in slide-in-from-bottom-2 duration-200">
                                    Copy ID
                                    <svg className="absolute -bottom-1 right-2 w-2 h-1 text-[#1b1b1b]" viewBox="0 0 8 4">
                                      <path d="M0 0 L4 4 L8 0 Z" fill="currentColor" />
                                    </svg>
                                  </div>
                                )}
                                
                                {/* Copied Feedback */}
                                {isCopied && (
                                  <div className="absolute -top-8 right-0 bg-[#006b4f] text-white text-[9px] px-2 py-1 rounded whitespace-nowrap animate-in fade-in slide-in-from-bottom-2 duration-200">
                                    Copied!
                                    <svg className="absolute -bottom-1 right-2 w-2 h-1 text-[#006b4f]" viewBox="0 0 8 4">
                                      <path d="M0 0 L4 4 L8 0 Z" fill="currentColor" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                              
                              {/* Verification Badge with Pulse */}
                              <div className="relative group/verify">
                                <svg width="16" height="16" viewBox="0 0 16 16" className="text-[#caa34b] animate-pulse" style={{ animationDuration: '3s' }}>
                                  <path
                                    d="M8 0L10.5 2.5L14 2L14.5 5.5L16 8L14.5 10.5L14 14L10.5 13.5L8 16L5.5 13.5L2 14L1.5 10.5L0 8L1.5 5.5L2 2L5.5 2.5L8 0Z"
                                    fill="currentColor"
                                    opacity="0.9"
                                  />
                                  <path
                                    d="M6 8L7.5 9.5L10 6.5"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                  />
                                </svg>
                                
                                {/* Verified Tooltip */}
                                {isHovered && (
                                  <div className="absolute -top-8 -left-8 bg-[#1b1b1b] text-white text-[9px] px-2 py-1 rounded whitespace-nowrap border border-[#caa34b]/30 animate-in fade-in slide-in-from-bottom-2 duration-200">
                                    Verified Actor
                                    <svg className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 text-[#1b1b1b]" viewBox="0 0 8 4">
                                      <path d="M0 0 L4 4 L8 0 Z" fill="currentColor" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="font-['Inter'] text-sm text-white/70 font-normal mb-4 leading-relaxed min-h-[60px]">
                            {entity.description}
                          </p>

                          {/* Divider with SVG */}
                          <div className="relative my-4 h-px">
                            <svg className="w-full h-px" preserveAspectRatio="none">
                              <line x1="0" y1="0" x2="100%" y2="0" stroke="url(#divider-gradient)" strokeWidth="1" />
                              <defs>
                                <linearGradient id="divider-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                                  <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 0.2 }} />
                                  <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>

                          {/* Metadata Section */}
                          <div className="space-y-3">
                            {/* Role */}
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded border border-white/10 group-hover:border-[#caa34b]/30 group-hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                              {/* Shimmer effect on hover */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                              </div>
                              
                              <div className="flex items-center gap-2 mb-2 relative z-10">
                                <svg width="12" height="12" viewBox="0 0 12 12" className="text-[#caa34b]">
                                  <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1">
                                    <animate attributeName="r" values="5;5.5;5" dur="2s" repeatCount="indefinite" />
                                  </circle>
                                  <circle cx="6" cy="6" r="2" fill="currentColor">
                                    <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                                  </circle>
                                </svg>
                                <span className="font-['Inter'] text-[10px] font-semibold text-[#caa34b] uppercase tracking-wider">
                                  Papel EAS
                                </span>
                              </div>
                              <p className="font-['Inter'] text-sm font-semibold text-white relative z-10">
                                {entity.role}
                              </p>
                            </div>

                            {/* Key Function */}
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded border border-white/10 group-hover:border-[#caa34b]/30 group-hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                              {/* Shimmer effect on hover */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 delay-100 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                              </div>
                              
                              <div className="flex items-center gap-2 mb-2 relative z-10">
                                <svg width="12" height="12" viewBox="0 0 12 12" className="text-[#caa34b] group-hover:animate-pulse">
                                  <path d="M2 6L6 2L10 6M6 2V10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <animate attributeName="stroke-opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
                                  </path>
                                </svg>
                                <span className="font-['Inter'] text-[10px] font-semibold text-[#caa34b] uppercase tracking-wider">
                                  Função-Chave
                                </span>
                              </div>
                              <p className="font-['Inter'] text-sm text-white/80 font-normal leading-relaxed relative z-10">
                                {entity.keyFunction}
                              </p>
                            </div>
                          </div>

                          {/* Bottom Accent Bar */}
                          <div className="absolute bottom-0 left-0 right-0 h-1">
                            <svg className="w-full h-full" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id={`bottom-gradient-${idx}-${entityIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" style={{ stopColor: category.color, stopOpacity: 0 }} />
                                  <stop offset="50%" style={{ stopColor: category.color, stopOpacity: 0.8 }} />
                                  <stop offset="100%" style={{ stopColor: category.color, stopOpacity: 0 }} />
                                </linearGradient>
                              </defs>
                              <rect width="100%" height="100%" fill={`url(#bottom-gradient-${idx}-${entityIdx})`} className="group-hover:opacity-100 opacity-50 transition-opacity" />
                            </svg>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

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
                className="p-8 border-2 border-white/20 bg-white/5 backdrop-blur-md hover:border-[#caa34b] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <pillar.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Montserrat'] text-xl font-bold text-white group-hover:text-[#caa34b] transition-colors">
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
                    <div key={featureIdx} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-[#caa34b]/50 hover:bg-white/10 transition-all duration-300 group/feature">
                      <ArrowRight className="h-4 w-4 text-[#caa34b] flex-shrink-0 mt-1 group-hover/feature:translate-x-1 transition-transform" />
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

        {/* Provas de Reserva */}
        <div className="mb-20">
          <Card className="p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-white/30 hover:border-[#caa34b] transition-all duration-500 hover:shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white p-4 rounded-xl flex-shrink-0 shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-300">
                <Vault className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-['Montserrat'] text-2xl font-bold text-white mb-4">
                  Sistema de Provas de Reserva
                </h3>
                <p className="font-['Inter'] text-base text-white/90 leading-relaxed mb-4">
                  O sistema de{" "}
                  <span className="font-bold text-[#caa34b]">
                    Provas de Reserva
                  </span>{" "}
                  é estruturado na{" "}
                  <span className="font-bold text-[#caa34b]">
                    Prova de Existência (PoE)
                  </span>
                  , fundamentada na{" "}
                  <span className="font-bold text-[#caa34b]">
                    Custódia Segregada
                  </span>{" "}
                  do Ativo do Mundo Real (RWA) lastreado em esmeraldas.
                </p>
                <p className="font-['Inter'] text-base text-white/90 leading-relaxed mb-4">
                  Um{" "}
                  <span className="font-bold text-[#caa34b]">
                    Ator Verificado
                  </span>{" "}
                  (a Cooperativa) atua como{" "}
                  <span className="font-bold text-[#caa34b]">
                    Custodiante Operacional
                  </span>
                  , responsável por supervisionar o ativo físico e manter a rigorosa{" "}
                  <span className="font-bold text-[#caa34b]">
                    cadeia de custódia
                  </span>{" "}
                  do lote mineral.
                </p>
                <p className="font-['Inter'] text-base text-white/90 leading-relaxed mb-4">
                  Essa custódia garante o{" "}
                  <span className="font-bold text-[#caa34b]">
                    lastro físico inquebrável
                  </span>{" "}
                  necessário para a{" "}
                  <span className="font-bold text-[#caa34b]">
                    emissão de títulos digitais
                  </span>{" "}
                  (Token NFT).
                </p>
                <p className="font-['Inter'] text-base text-white/90 leading-relaxed">
                  A prova é registrada publicamente via{" "}
                  <span className="font-bold text-[#caa34b]">
                    Atestado de Origem (EAS #1)
                  </span>{" "}
                  na <span className="italic">blockchain</span>, vinculando os dados da guarda e o{" "}
                  <span className="font-bold text-[#caa34b]">
                    hash da Nota Fiscal eletrônica (NFe)
                  </span>
                  . Este processo assegura a{" "}
                  <span className="font-bold text-[#caa34b]">
                    integridade fiscal e a auditabilidade total
                  </span>{" "}
                  do ecossistema.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Analogia Final */}
        <Card className="p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-white/30 hover:border-[#caa34b] transition-all duration-500 hover:shadow-2xl">
          <div className="flex items-start gap-6">
            <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white p-4 rounded-xl flex-shrink-0 shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-300">
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
            className="bg-gradient-to-r from-white/20 to-white/10 border-2 border-white/30 hover:border-[#caa34b] hover:from-white/30 hover:to-white/20 backdrop-blur-md text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            onClick={() => {
              const section = document.getElementById('technical-documentation');
              section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <FileCheck className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
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
              {/* Card 1: Definição */}
              <Card 
                className="relative p-0 border border-white/20 bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] hover:border-[#caa34b] transition-all duration-500 hover:shadow-[0_0_30px_rgba(202,163,75,0.3)] group overflow-hidden h-full flex flex-col cursor-pointer"
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
                onMouseEnter={() => setHoveredCard('doc-def')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-5 group-hover:opacity-10 transition-opacity" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="doc-grid-1" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#caa34b]"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#doc-grid-1)" />
                </svg>
                
                {/* Corner Accent */}
                <svg className="absolute top-0 right-0 w-12 h-12 text-[#caa34b] opacity-30 group-hover:opacity-60 transition-opacity" viewBox="0 0 64 64">
                  <line x1="64" y1="0" x2="64" y2="24" stroke="currentColor" strokeWidth="1" />
                  <line x1="40" y1="0" x2="64" y2="0" stroke="currentColor" strokeWidth="1" />
                </svg>
                
                <div className="relative p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="relative flex-shrink-0">
                        <svg className="absolute inset-0 w-16 h-16 -left-1 -top-1" viewBox="0 0 100 100">
                          <polygon points="50 5, 90 28, 90 72, 50 95, 10 72, 10 28" fill="none" stroke="#caa34b" strokeWidth="2" className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                        </svg>
                        <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white p-4 rounded-xl group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(202,163,75,0.5)] transition-all duration-300 relative z-10">
                          <FileCheck className="h-7 w-7" />
                        </div>
                      </div>
                      <h4 className="font-['Montserrat'] text-xl font-bold text-white group-hover:text-[#caa34b] transition-colors">
                        Definição
                      </h4>
                    </div>
                    <div 
                      className="group/badge font-['Inter'] font-mono text-[9px] text-[#caa34b] border border-[#caa34b]/30 px-2 py-1 rounded bg-[#caa34b]/5 hover:bg-[#caa34b]/20 transition-all cursor-pointer flex items-center gap-1"
                      onClick={(e) => handleCopyNftId('#DOC-001', e)}
                      title="Click to copy"
                    >
                      <span>#DOC-001</span>
                      {copiedId === '#DOC-001' ? <Check className="h-2.5 w-2.5" /> : <Copy className="h-2.5 w-2.5 opacity-0 group-hover/badge:opacity-100 transition-opacity" />}
                    </div>
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
                  <div className="absolute bottom-0 left-0 right-0 h-1">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="doc-bottom-1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#caa34b', stopOpacity: 0 }} />
                          <stop offset="50%" style={{ stopColor: '#caa34b', stopOpacity: 0.8 }} />
                          <stop offset="100%" style={{ stopColor: '#caa34b', stopOpacity: 0 }} />
                        </linearGradient>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#doc-bottom-1)" className="group-hover:opacity-100 opacity-50 transition-opacity" />
                    </svg>
                  </div>
                </div>
              </Card>

              {/* Card 2: Função */}
              <Card 
                className="relative p-0 border border-white/20 bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] hover:border-[#caa34b] transition-all duration-500 hover:shadow-[0_0_30px_rgba(202,163,75,0.3)] group overflow-hidden h-full flex flex-col cursor-pointer"
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))', animationDelay: '100ms' }}
                onMouseEnter={() => setHoveredCard('doc-func')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <svg className="absolute inset-0 w-full h-full opacity-5 group-hover:opacity-10 transition-opacity" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="doc-grid-2" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#caa34b]"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#doc-grid-2)" />
                </svg>
                <svg className="absolute top-0 right-0 w-12 h-12 text-[#caa34b] opacity-30 group-hover:opacity-60 transition-opacity" viewBox="0 0 64 64">
                  <line x1="64" y1="0" x2="64" y2="24" stroke="currentColor" strokeWidth="1" />
                  <line x1="40" y1="0" x2="64" y2="0" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="relative p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="relative flex-shrink-0">
                        <svg className="absolute inset-0 w-16 h-16 -left-1 -top-1" viewBox="0 0 100 100">
                          <polygon points="50 5, 90 28, 90 72, 50 95, 10 72, 10 28" fill="none" stroke="#caa34b" strokeWidth="2" className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                        </svg>
                        <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white p-4 rounded-xl group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(202,163,75,0.5)] transition-all duration-300 relative z-10">
                          <Target className="h-7 w-7" />
                        </div>
                      </div>
                      <h4 className="font-['Montserrat'] text-xl font-bold text-white group-hover:text-[#caa34b] transition-colors">
                        Função
                      </h4>
                    </div>
                    <div 
                      className="group/badge font-['Inter'] font-mono text-[9px] text-[#caa34b] border border-[#caa34b]/30 px-2 py-1 rounded bg-[#caa34b]/5 hover:bg-[#caa34b]/20 transition-all cursor-pointer flex items-center gap-1"
                      onClick={(e) => handleCopyNftId('#DOC-002', e)}
                      title="Click to copy"
                    >
                      <span>#DOC-002</span>
                      {copiedId === '#DOC-002' ? <Check className="h-2.5 w-2.5" /> : <Copy className="h-2.5 w-2.5 opacity-0 group-hover/badge:opacity-100 transition-opacity" />}
                    </div>
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
                  <div className="absolute bottom-0 left-0 right-0 h-1">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                      <rect width="100%" height="100%" fill="url(#doc-bottom-1)" className="group-hover:opacity-100 opacity-50 transition-opacity" />
                    </svg>
                  </div>
                </div>
              </Card>

              {/* Card 3: Estrutura */}
              <Card 
                className="relative p-0 border border-white/20 bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] hover:border-[#caa34b] transition-all duration-500 hover:shadow-[0_0_30px_rgba(202,163,75,0.3)] group overflow-hidden h-full flex flex-col cursor-pointer"
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))', animationDelay: '200ms' }}
                onMouseEnter={() => setHoveredCard('doc-struct')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <svg className="absolute inset-0 w-full h-full opacity-5 group-hover:opacity-10 transition-opacity" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="doc-grid-3" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#caa34b]"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#doc-grid-3)" />
                </svg>
                <svg className="absolute top-0 right-0 w-12 h-12 text-[#caa34b] opacity-30 group-hover:opacity-60 transition-opacity" viewBox="0 0 64 64">
                  <line x1="64" y1="0" x2="64" y2="24" stroke="currentColor" strokeWidth="1" />
                  <line x1="40" y1="0" x2="64" y2="0" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="relative p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="relative flex-shrink-0">
                        <svg className="absolute inset-0 w-16 h-16 -left-1 -top-1" viewBox="0 0 100 100">
                          <polygon points="50 5, 90 28, 90 72, 50 95, 10 72, 10 28" fill="none" stroke="#caa34b" strokeWidth="2" className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                        </svg>
                        <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white p-4 rounded-xl group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(202,163,75,0.5)] transition-all duration-300 relative z-10">
                          <Network className="h-7 w-7" />
                        </div>
                      </div>
                      <h4 className="font-['Montserrat'] text-xl font-bold text-white group-hover:text-[#caa34b] transition-colors">
                        Estrutura
                      </h4>
                    </div>
                    <div 
                      className="group/badge font-['Inter'] font-mono text-[9px] text-[#caa34b] border border-[#caa34b]/30 px-2 py-1 rounded bg-[#caa34b]/5 hover:bg-[#caa34b]/20 transition-all cursor-pointer flex items-center gap-1"
                      onClick={(e) => handleCopyNftId('#DOC-003', e)}
                      title="Click to copy"
                    >
                      <span>#DOC-003</span>
                      {copiedId === '#DOC-003' ? <Check className="h-2.5 w-2.5" /> : <Copy className="h-2.5 w-2.5 opacity-0 group-hover/badge:opacity-100 transition-opacity" />}
                    </div>
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
                  <div className="absolute bottom-0 left-0 right-0 h-1">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                      <rect width="100%" height="100%" fill="url(#doc-bottom-1)" className="group-hover:opacity-100 opacity-50 transition-opacity" />
                    </svg>
                  </div>
                </div>
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
                              Custodiante
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
                    . Se o Custodiante falhar em renovar o Atestado de
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
              {/* Card 1: Incentivo Político */}
              <Card 
                className="relative p-0 border border-white/20 bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] hover:border-[#caa34b] transition-all duration-500 hover:shadow-[0_0_30px_rgba(202,163,75,0.3)] group overflow-hidden h-full flex flex-col"
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
                onMouseEnter={() => setHoveredCard('inc-pol')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <svg className="absolute inset-0 w-full h-full opacity-5 group-hover:opacity-10 transition-opacity" preserveAspectRatio="xMidYMid slice">
                  <pattern id="inc-grid-1" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#caa34b" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#inc-grid-1)" />
                </svg>
                <svg className="absolute top-0 right-0 w-12 h-12 text-[#caa34b] opacity-30 group-hover:opacity-60 transition-opacity" viewBox="0 0 64 64">
                  <line x1="64" y1="0" x2="64" y2="24" stroke="currentColor" strokeWidth="1" />
                  <line x1="40" y1="0" x2="64" y2="0" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="relative p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="relative">
                        <svg className="absolute inset-0 w-14 h-14 -left-1 -top-1" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="#caa34b" strokeWidth="2" className="opacity-60 group-hover:opacity-100 transition-opacity" />
                        </svg>
                        <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white w-12 h-12 rounded-full flex items-center justify-center font-['Montserrat'] text-xl font-bold shadow-lg group-hover:scale-110 transition-all relative z-10">
                          1
                        </div>
                      </div>
                      <h4 className="font-['Montserrat'] text-xl font-bold text-white group-hover:text-[#caa34b] transition-colors">
                        Incentivo Político Perpétuo
                      </h4>
                    </div>
                    <div 
                      className="font-['Inter'] font-mono text-[9px] text-[#caa34b] border border-[#caa34b]/30 px-2 py-1 rounded bg-[#caa34b]/5 hover:bg-[#caa34b]/20 transition-all cursor-pointer flex items-center gap-1"
                      onClick={(e) => handleCopyNftId('#INC-001', e)}
                    >
                      <span>#INC-001</span>
                      {copiedId === '#INC-001' ? <Check className="h-2.5 w-2.5" /> : <Copy className="h-2.5 w-2.5 opacity-0 hover:opacity-100 transition-opacity" />}
                    </div>
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
                  <div className="absolute bottom-0 left-0 right-0 h-1">
                    <svg className="w-full h-full"><rect width="100%" height="100%" fill="url(#doc-bottom-1)" className="group-hover:opacity-100 opacity-50 transition-opacity" /></svg>
                  </div>
                </div>
              </Card>

              {/* Card 2: Garantia de Lastro */}
              <Card 
                className="relative p-0 border border-white/20 bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] hover:border-[#caa34b] transition-all duration-500 hover:shadow-[0_0_30px_rgba(202,163,75,0.3)] group overflow-hidden h-full flex flex-col"
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))', animationDelay: '100ms' }}
                onMouseEnter={() => setHoveredCard('inc-lastro')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <svg className="absolute inset-0 w-full h-full opacity-5 group-hover:opacity-10 transition-opacity" preserveAspectRatio="xMidYMid slice">
                  <pattern id="inc-grid-2" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#caa34b" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#inc-grid-2)" />
                </svg>
                <svg className="absolute top-0 right-0 w-12 h-12 text-[#caa34b] opacity-30 group-hover:opacity-60 transition-opacity" viewBox="0 0 64 64">
                  <line x1="64" y1="0" x2="64" y2="24" stroke="currentColor" strokeWidth="1" />
                  <line x1="40" y1="0" x2="64" y2="0" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="relative p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="relative">
                        <svg className="absolute inset-0 w-14 h-14 -left-1 -top-1" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="#caa34b" strokeWidth="2" className="opacity-60 group-hover:opacity-100 transition-opacity" />
                        </svg>
                        <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white w-12 h-12 rounded-full flex items-center justify-center font-['Montserrat'] text-xl font-bold shadow-lg group-hover:scale-110 transition-all relative z-10">
                          2
                        </div>
                      </div>
                      <h4 className="font-['Montserrat'] text-xl font-bold text-white group-hover:text-[#caa34b] transition-colors">
                        Garantia de Lastro
                      </h4>
                    </div>
                    <div 
                      className="font-['Inter'] font-mono text-[9px] text-[#caa34b] border border-[#caa34b]/30 px-2 py-1 rounded bg-[#caa34b]/5 hover:bg-[#caa34b]/20 transition-all cursor-pointer flex items-center gap-1"
                      onClick={(e) => handleCopyNftId('#INC-002', e)}
                    >
                      <span>#INC-002</span>
                      {copiedId === '#INC-002' ? <Check className="h-2.5 w-2.5" /> : <Copy className="h-2.5 w-2.5 opacity-0 hover:opacity-100 transition-opacity" />}
                    </div>
                  </div>
                  <p className="font-['Inter'] text-sm lg:text-base text-white/80 leading-relaxed flex-1">
                    Se o Custodiante falhar em renovar o{" "}
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
                  <div className="absolute bottom-0 left-0 right-0 h-1">
                    <svg className="w-full h-full"><rect width="100%" height="100%" fill="url(#doc-bottom-1)" className="group-hover:opacity-100 opacity-50 transition-opacity" /></svg>
                  </div>
                </div>
              </Card>

              {/* Card 3: Segurança */}
              <Card 
                className="relative p-0 border border-white/20 bg-gradient-to-br from-[#1b1b1b] to-[#0a0a0a] hover:border-[#caa34b] transition-all duration-500 hover:shadow-[0_0_30px_rgba(202,163,75,0.3)] group overflow-hidden h-full flex flex-col"
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))', animationDelay: '200ms' }}
                onMouseEnter={() => setHoveredCard('inc-seg')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <svg className="absolute inset-0 w-full h-full opacity-5 group-hover:opacity-10 transition-opacity" preserveAspectRatio="xMidYMid slice">
                  <pattern id="inc-grid-3" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#caa34b" strokeWidth="0.5"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#inc-grid-3)" />
                </svg>
                <svg className="absolute top-0 right-0 w-12 h-12 text-[#caa34b] opacity-30 group-hover:opacity-60 transition-opacity" viewBox="0 0 64 64">
                  <line x1="64" y1="0" x2="64" y2="24" stroke="currentColor" strokeWidth="1" />
                  <line x1="40" y1="0" x2="64" y2="0" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="relative p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="relative">
                        <svg className="absolute inset-0 w-14 h-14 -left-1 -top-1" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="#caa34b" strokeWidth="2" className="opacity-60 group-hover:opacity-100 transition-opacity" />
                        </svg>
                        <div className="bg-gradient-to-br from-[#caa34b] to-[#b8923f] text-white w-12 h-12 rounded-full flex items-center justify-center font-['Montserrat'] text-xl font-bold shadow-lg group-hover:scale-110 transition-all relative z-10">
                          3
                        </div>
                      </div>
                      <h4 className="font-['Montserrat'] text-xl font-bold text-white group-hover:text-[#caa34b] transition-colors">
                        Segurança para o Investidor
                      </h4>
                    </div>
                    <div 
                      className="font-['Inter'] font-mono text-[9px] text-[#caa34b] border border-[#caa34b]/30 px-2 py-1 rounded bg-[#caa34b]/5 hover:bg-[#caa34b]/20 transition-all cursor-pointer flex items-center gap-1"
                      onClick={(e) => handleCopyNftId('#INC-003', e)}
                    >
                      <span>#INC-003</span>
                      {copiedId === '#INC-003' ? <Check className="h-2.5 w-2.5" /> : <Copy className="h-2.5 w-2.5 opacity-0 hover:opacity-100 transition-opacity" />}
                    </div>
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
                  <div className="absolute bottom-0 left-0 right-0 h-1">
                    <svg className="w-full h-full"><rect width="100%" height="100%" fill="url(#doc-bottom-1)" className="group-hover:opacity-100 opacity-50 transition-opacity" /></svg>
                  </div>
                </div>
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