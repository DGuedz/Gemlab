import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import {
  Code,
  ShieldCheck,
  Anchor,
  Scale,
  DollarSign,
  GitBranch,
  CheckSquare,
  Shield,
  Zap,
  CheckCircle2,
} from "lucide-react";

export function MasterCardsNFT() {
  const masterCards = [
    {
      id: 1,
      title: "GEMLAB TECH",
      subtitle: "A Inteligência • SaaS",
      badge: "I • TECNOLOGIA",
      icon: Code,
      color: "#006b4f",
      glowColor: "rgba(0,107,79,0.4)",
      badgeColor: "#00d4aa",
      description:
        "Empresa de tecnologia e dados (Ltda). Desenvolve o software do protocolo, opera o espectrômetro Raman e emite Laudos Técnicos.",
      role: "Atestador da Prova Científica",
      roleIcon: Shield,
      keyFunction:
        "Assina transação com dados Raman para criar Atestado de Ciência, validando identidade química via ",
      codeTag: "SpectralHash",
      textureAngle: "0deg",
    },
    {
      id: 2,
      title: "COOPESMERALDA",
      subtitle: "Oráculo Operacional & Custodiante",
      badge: "II • LASTRO & AUDITORIA",
      icon: ShieldCheck,
      color: "#014733",
      glowColor: "rgba(1,71,51,0.4)",
      badgeColor: "#10b981",
      description:
        "Cooperativa responsável pela custódia física, emissão de NFe e validação de origem. Único emissor de Nota Fiscal no protocolo.",
      role: "Prova de Origem & Custódia",
      roleIcon: Anchor,
      keyFunction:
        "Emite NFe com hash on-chain (",
      codeTag: "EAS #1",
      extraText:
        "), garante custódia física segregada e monitora compliance tributário (CFEM/ISS).",
      textureAngle: "90deg",
    },
    {
      id: 3,
      title: "VASP/Tokenizadora",
      subtitle: "O Escudo Regulatório",
      badge: "III • FINANCEIRO & REGULATÓRIO",
      icon: Scale,
      color: "#caa34b",
      glowColor: "rgba(202,163,75,0.4)",
      badgeColor: "#caa34b",
      description:
        "Exchange ou Tokenizadora licenciada (CVM 88). Realiza tokenização financeira, custódia e KYC/AML.",
      role: "Conformidade Regulatória",
      roleIcon: DollarSign,
      keyFunction:
        "Remove risco de lavagem através de licença CVM, garantindo operação conforme ",
      codeTag: "BCB/CVM",
      extraTag: "ERC-3643",
      extraText2: " (T-REX).",
      textureAngle: "45deg",
    },
    {
      id: 4,
      title: "Smart Contracts",
      subtitle: "Code is Law • Fluxo Programático",
      badge: "IV • ARQUITETURA EAS",
      icon: GitBranch,
      color: "#8b5cf6",
      glowColor: "rgba(139,92,246,0.4)",
      badgeColor: "#a78bfa",
      description:
        "Contratos inteligentes que orquestram a validação on-chain, garantindo que o token só seja válido SE existirem Atestados recentes.",
      role: "Validação On-Chain",
      roleIcon: CheckSquare,
      keyFunction:
        "Condição: Token só é válido SE existirem Atestados recentes. Desconto automático (Royalties) e Auditabilidade Total via ",
      codeTag: "EAS",
      textureAngle: "135deg",
    },
  ];

  return (
    <div className="mb-32">
      <div className="text-center mb-16">
        <Badge className="mb-6 bg-gradient-to-r from-[#caa34b] to-[#b8923f] text-white border-0 px-6 py-3 shadow-2xl shadow-[#caa34b]/30">
          <Shield className="h-4 w-4 mr-2" />
          GOVERNANÇA & SEGURANÇA
        </Badge>
        <h2 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          Master Cards de Governança
        </h2>
        <p className="font-['Inter'] text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          Arquitetura de{" "}
          <strong className="text-[#caa34b]">
            Confiança Descentralizada
          </strong>{" "}
          com validação científica, jurídica e financeira para rastreabilidade
          completa
        </p>
      </div>

      {/* Grid dos 4 Master Cards Premium NFT */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 max-w-7xl mx-auto">
        {masterCards.map((card) => (
          <Card
            key={card.id}
            className="group relative overflow-hidden border-2 border-white/10 bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#000000] transition-all duration-700 hover:-translate-y-1"
            style={{
              borderColor: `${card.color}20`,
              boxShadow: `0 0 0 ${card.color}00`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = card.color;
              e.currentTarget.style.boxShadow = `0 0 40px ${card.glowColor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${card.color}20`;
              e.currentTarget.style.boxShadow = `0 0 0 ${card.color}00`;
            }}
          >
            {/* Efeito Holográfico de Fundo */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: `linear-gradient(to bottom right, ${card.color}10, transparent, ${card.color}05)`,
              }}
            ></div>

            {/* Padrão de Textura Metálica */}
            <div
              className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700"
              style={{
                backgroundImage: `repeating-linear-gradient(${card.textureAngle}, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`,
              }}
            ></div>

            {/* Borda Superior Líquida */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to right, transparent, ${card.color}, transparent)`,
              }}
            ></div>

            <div className="relative z-10 p-10 lg:p-12">
              {/* Header com Ícone Premium */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div
                      className="absolute inset-0 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"
                      style={{ backgroundColor: card.color }}
                    ></div>
                    <div
                      className="relative text-white p-5 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500"
                      style={{
                        background: `linear-gradient(to bottom right, ${card.color}, ${card.color}dd)`,
                      }}
                    >
                      <card.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <Badge
                      className="mb-3 border backdrop-blur-sm font-mono text-xs tracking-widest"
                      style={{
                        backgroundColor: `${card.color}20`,
                        borderColor: `${card.color}50`,
                        color: card.badgeColor,
                      }}
                    >
                      {card.badge}
                    </Badge>
                    <h3 className="font-['Montserrat'] text-3xl font-bold text-white tracking-tight">
                      {card.title}
                    </h3>
                    <p className="font-['Inter'] text-sm text-[#caa34b] tracking-wide mt-1">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block w-16 h-16 border-2 border-white/5 rounded-tr-2xl border-l-0 border-b-0 group-hover:transition-colors"
                  style={{ borderColor: `${card.color}30` }}
                ></div>
              </div>

              {/* Separator Premium */}
              <div className="relative h-px my-8">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full shadow-lg"
                  style={{
                    backgroundColor: card.color,
                    boxShadow: `0 0 10px ${card.glowColor}`,
                  }}
                ></div>
              </div>

              {/* Descrição */}
              <p className="font-['Inter'] text-base text-white/80 leading-relaxed mb-8">
                {card.description}
              </p>

              {/* Papel no Protocolo EAS */}
              <div
                className="mb-6 p-5 rounded-xl border transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = `${card.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center border"
                    style={{
                      backgroundColor: `${card.color}20`,
                      borderColor: `${card.color}30`,
                    }}
                  >
                    <card.roleIcon className="h-5 w-5" style={{ color: card.color }} />
                  </div>
                  <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] uppercase text-white/60">
                    Papel no Protocolo EAS
                  </span>
                </div>
                <p className="font-['Montserrat'] text-lg font-bold text-white leading-tight pl-13">
                  {card.role}
                </p>
              </div>

              {/* Função-Chave */}
              <div
                className="p-5 rounded-xl border transition-all duration-500"
                style={{
                  background: "linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#caa34b30";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#caa34b]/20 flex items-center justify-center border border-[#caa34b]/30">
                    <Zap className="h-5 w-5 text-[#caa34b]" />
                  </div>
                  <span className="font-['Inter'] text-xs font-bold tracking-[0.2em] uppercase text-white/60">
                    Função-Chave
                  </span>
                </div>
                <p className="font-['Inter'] text-sm text-white/90 leading-relaxed pl-13">
                  {card.keyFunction}
                  <code
                    className="px-2 py-1 rounded font-mono text-xs border ml-1"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.4)",
                      color: card.badgeColor,
                      borderColor: `${card.color}30`,
                    }}
                  >
                    {card.codeTag}
                  </code>
                  {card.extraText && card.extraText}
                  {card.extraTag && (
                    <>
                      {" e implementando "}
                      <code
                        className="px-2 py-1 rounded font-mono text-xs border"
                        style={{
                          backgroundColor: "rgba(0,0,0,0.4)",
                          color: card.badgeColor,
                          borderColor: `${card.color}30`,
                        }}
                      >
                        {card.extraTag}
                      </code>
                      {card.extraText2}
                    </>
                  )}
                </p>
              </div>

              {/* Corner Accent Bottom */}
              <div
                className="absolute bottom-4 left-4 w-20 h-20 border-2 rounded-bl-3xl border-r-0 border-t-0 group-hover:transition-colors"
                style={{ borderColor: `${card.color}20` }}
              ></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
