import { useState } from "react";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import {
  Microscope,
  Pickaxe,
  ShoppingCart,
  Building2,
  ArrowRight,
  Shield,
  Link2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface LabPortalProps {
  onNavigate?: (page: string) => void;
}

export default function LabPortal({ onNavigate }: LabPortalProps = {}) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const profiles = [
    {
      id: "gemologist",
      icon: Microscope,
      title: "Gemólogo",
      subtitle: "Certificação & Análise Técnica",
      description:
        "Acesse ferramentas de certificação gemológica, geração de SpectralHash, emissão de laudos técnicos e tokenização ERC-721.",
      features: [
        "Wizard de certificação completo",
        "Análise espectral Raman",
        "Emissão de NFTs certificados",
        "Histórico de laudos",
      ],
      color: "#006b4f",
      gradient: "from-[#006b4f] to-[#014733]",
      route: "gemologist",
    },
    {
      id: "miner",
      icon: Pickaxe,
      title: "Garimpeiro/Minerador",
      subtitle: "Registro & Simulação de Lotes",
      description:
        "Simule lotes minerais ERC-1155, registre jazidas, acompanhe produção e prepare esmeraldas para certificação gemológica.",
      features: [
        "Simulação de lotes (ERC-1155)",
        "Registro de jazidas",
        "Rastreamento de produção",
        "Integração com gemólogos",
      ],
      color: "#caa34b",
      gradient: "from-[#caa34b] to-[#a08538]",
      route: "miner",
    },
    {
      id: "coop",
      icon: Shield,
      title: "Administrador COOPESMERALDA",
      subtitle: "Oráculo Operacional & Custodiante",
      description:
        "Dashboard completo com governança operacional, desempenho econômico e impacto social. Monitore custódia, EAS, compliance tributário e projetos sociais.",
      features: [
        "Custódia física (Underground Vault)",
        "Prova de Origem (EAS #1)",
        "Desempenho econômico e taxas",
        "Lastro social e projetos de impacto",
      ],
      color: "#014733",
      gradient: "from-[#014733] to-[#006b4f]",
      route: "coop-dashboard",
    },
    {
      id: "buyer",
      icon: ShoppingCart,
      title: "Comprador/Investidor",
      subtitle: "Marketplace & Verificação",
      description:
        "Explore o marketplace de esmeraldas certificadas, verifique autenticidade via blockchain, gerencie sua carteira de NFTs.",
      features: [
        "Marketplace tokenizado",
        "Verificação de autenticidade",
        "Carteira de NFTs",
        "Histórico completo de custódia",
      ],
      color: "#006b4f",
      gradient: "from-[#014733] to-[#006b4f]",
      route: "marketplace",
    },
    {
      id: "admin",
      icon: Building2,
      title: "Administrador Municipal",
      subtitle: "Fundo Municipal & Governança",
      description:
        "Gerencie o Fundo Municipal On-Chain, monitore arrecadação de CFEM/ISS, acompanhe compliance e visualize analytics do ecossistema.",
      features: [
        "Fundo Municipal On-Chain",
        "Arrecadação CFEM/ISS",
        "Dashboard de compliance",
        "Analytics do ecossistema",
      ],
      color: "#1b1b1b",
      gradient: "from-[#1b1b1b] to-[#404040]",
      route: "admin",
    },
  ];

  const handleProfileClick = (route: string) => {
    if (onNavigate) {
      onNavigate(route);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#006b4f] to-[#014733] py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(202,163,75,0.3),transparent)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#caa34b] text-white px-6 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Portal GemLab
            </Badge>
            <h1 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-white mb-6">
              A Ponte Entre Segurança e Rastreabilidade
            </h1>
            <p className="font-['Inter'] text-lg text-gray-100 leading-relaxed mb-8">
              Plataforma completa de certificação gemológica, tokenização e
              rastreabilidade para todos os atores do ecossistema de esmeraldas
              de Campos Verdes – GO
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-[#caa34b]" />
                <span className="font-['Inter'] text-sm">
                  Protocolo GEMLAB
                </span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-[#caa34b]" />
                <span className="font-['Inter'] text-sm">
                  Blockchain ERC-1155 → ERC-721
                </span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-[#caa34b]" />
                <span className="font-['Inter'] text-sm">KYC/AML Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Central Message */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-16">
        <Card className="p-8 bg-white shadow-xl border-2 border-[#e5e7eb]">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#006b4f] to-[#014733] flex items-center justify-center flex-shrink-0">
              <Link2 className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b] mb-3">
                Infraestrutura Confiável para Todos os Stakeholders
              </h2>
              <p className="font-['Inter'] text-gray-700 leading-relaxed">
                A GemLab conecta gemólogos, garimpeiros, compradores e
                administradores públicos em um ecossistema digital seguro,
                transparente e rastreável. Cada ator tem ferramentas
                especializadas para sua função, garantindo compliance total
                desde a jazida até o varejo.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Profile Selection */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="font-['Montserrat'] text-3xl font-bold text-[#1b1b1b] mb-4">
            Selecione Seu Perfil
          </h2>
          <p className="font-['Inter'] text-gray-600">
            Acesse as ferramentas específicas para sua atuação no ecossistema
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <Card
                key={profile.id}
                className={`relative overflow-hidden border-2 transition-all duration-300 cursor-pointer group ${
                  hoveredCard === profile.id
                    ? "border-opacity-100 shadow-2xl scale-[1.02]"
                    : "border-[#e5e7eb] hover:border-opacity-50 hover:shadow-xl"
                }`}
                style={{
                  borderColor:
                    hoveredCard === profile.id ? profile.color : undefined,
                }}
                onMouseEnter={() => setHoveredCard(profile.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleProfileClick(profile.route)}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${profile.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative p-8">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: profile.color }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b] mb-1">
                          {profile.title}
                        </h3>
                        <p
                          className="font-['Inter'] text-sm font-semibold"
                          style={{ color: profile.color }}
                        >
                          {profile.subtitle}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      className={`h-6 w-6 transition-all duration-300 ${
                        hoveredCard === profile.id
                          ? "translate-x-1 opacity-100"
                          : "opacity-0"
                      }`}
                      style={{ color: profile.color }}
                    />
                  </div>

                  {/* Description */}
                  <p className="font-['Inter'] text-gray-700 leading-relaxed mb-6">
                    {profile.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {profile.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: profile.color }}
                        />
                        <span className="font-['Inter'] text-sm text-gray-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full text-white transition-all duration-300"
                    style={{
                      backgroundColor: profile.color,
                    }}
                    onClick={() => handleProfileClick(profile.route)}
                  >
                    Acessar {profile.title}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <Sparkles
                    className="w-full h-full"
                    style={{ color: profile.color }}
                  />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <Card className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-white border-2 border-[#e5e7eb] max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-[#006b4f] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                Acesso Seguro com Account Abstraction
              </h4>
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                Todos os acessos são protegidos com Account Abstraction (ERC-4337),
                permitindo login social (Google, GitHub) e gestão simplificada de
                carteiras. KYC/AML integrado para compliance total.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}