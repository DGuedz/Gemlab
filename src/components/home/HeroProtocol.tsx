import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Sparkles, Shield, ExternalLink, ChevronRight } from "lucide-react";
import emeraldImage from "figma:asset/6a237bc12f4350ad6590bd2bf6ba13330b46cd61.png";
import { motion } from "motion/react";
import { GEMLABSeal } from "../GEMLABSeal";

export function HeroProtocol() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-[var(--emerald-dark)] via-[var(--emerald-green)] to-[var(--mineral-black)] text-white overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={emeraldImage} 
          alt="Esmeralda Certificada GEMLAB"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--emerald-green)]/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main Content */}
          <div className="space-y-8">
            <Badge className="mb-6 bg-[var(--gold-soft)] text-white px-6 py-3 text-sm">
              <Shield className="h-4 w-4 mr-2" />
              Protocolo de Confiança para Mineração 4.0
            </Badge>
            
            <h1 className="font-['Montserrat'] text-5xl lg:text-7xl font-bold leading-tight">
              GEMLAB: A Espinha Dorsal Tecnológica que{" "}
              <span className="text-[var(--gold-soft)]">Certifica para Prosperar</span>
            </h1>
            
            <p className="font-['Inter'] text-xl lg:text-2xl text-gray-100 leading-relaxed">
              Primeira infraestrutura de rastreabilidade científica + fiscal integrada para esmeraldas, 
              quebrando o ciclo de <span className="font-bold text-red-300">"pedra sem CEP"</span> que 
              perpetua evasão fiscal e desvalorização.
            </p>

            <p className="font-['Inter'] text-lg text-gray-200 leading-relaxed">
              Combinamos <span className="font-bold text-[var(--gold-soft)]">Espectrometria Raman</span> (impressão digital óptica), 
              <span className="font-bold text-[var(--gold-soft)]"> Ethereum Attestation Service</span> (atestações imutáveis) e{" "}
              <span className="font-bold text-[var(--gold-soft)]">Oracle Fiscal Municipal</span> para criar o protocolo de 
              confiança que conecta geologia, lei e economia.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-[var(--gold-soft)] text-white hover:bg-[var(--gold-hover)] px-8 font-semibold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(202,163,75,0.4)] transition-all duration-300"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Verificar Certificado NFT (ERC-721)
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/95 text-[var(--emerald-green)] hover:bg-white hover:border-[var(--gold-soft)] px-8 font-semibold backdrop-blur-sm transition-all duration-300"
              >
                Conhecer o Protocolo
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="font-['Montserrat'] text-3xl font-bold text-[var(--gold-soft)]">99%</div>
                <div className="font-['Inter'] text-xs text-gray-300">Sem Rastreabilidade</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="font-['Montserrat'] text-3xl font-bold text-[var(--gold-soft)]">R$ 1,6M</div>
                <div className="font-['Inter'] text-xs text-gray-300">Evasão Fiscal/Ano</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-colors">
                <div className="font-['Montserrat'] text-3xl font-bold text-[var(--gold-soft)]">100%</div>
                <div className="font-['Inter'] text-xs text-gray-300">Certificação GEMLAB</div>
              </div>
            </div>
          </div>

          {/* Right: Certificate Showcase Card */}
          <div className="relative">
            <Card className="p-8 bg-white/95 backdrop-blur-md border-2 border-white/50 shadow-2xl hover:shadow-[0_20px_80px_rgba(0,107,79,0.3)] transition-all duration-500">
              {/* Certificate Badge */}
              <div className="flex items-center justify-between mb-6">
                <Badge className="bg-[var(--emerald-green)] text-white px-4 py-2">
                  GEMLAB CERTIFIED
                </Badge>
                <Badge className="bg-[var(--gold-soft)] text-white px-4 py-2">
                  NFT ERC-721
                </Badge>
              </div>

              {/* Emerald Image Placeholder */}
              <div className="w-full aspect-square bg-gradient-to-br from-[var(--emerald-green)] to-[var(--emerald-light)] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={emeraldImage} 
                  alt="Esmeralda Certificada GEMLAB"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Selo GEMLAB Minimalista - Canto Superior Direito */}
                <div className="absolute top-4 right-4 z-20">
                  <GEMLABSeal size={140} className="drop-shadow-xl" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
                    <div className="font-['Inter'] text-xs mb-1">SpectralHash (SHA-256)</div>
                    <div className="font-['Mono'] text-[10px] break-all">
                      0x7f9a3b2c...d4e1f6a8
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-[var(--gray-200)]">
                  <span className="font-['Inter'] text-sm text-[var(--gray-600)]">Origem</span>
                  <span className="font-['Inter'] text-sm font-semibold text-[var(--mineral-black)]">Campos Verdes - GO</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[var(--gray-200)]">
                  <span className="font-['Inter'] text-sm text-[var(--gray-600)]">Peso</span>
                  <span className="font-['Inter'] text-sm font-semibold text-[var(--mineral-black)]">3.42 ct</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-[var(--gray-200)]">
                  <span className="font-['Inter'] text-sm text-[var(--gray-600)]">Qualidade</span>
                  <span className="font-['Inter'] text-sm font-semibold text-[var(--mineral-black)]">VS1 - Vivid Green</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-['Inter'] text-sm text-[var(--gray-600)]">Status Fiscal</span>
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    ✓ Oracle Validado
                  </Badge>
                </div>
              </div>

              {/* Atestations */}
              <div className="mt-6 pt-6 border-t border-[var(--gray-200)]">
                <div className="font-['Inter'] text-xs font-semibold text-[var(--gray-600)] mb-3">
                  Atestações EAS Ativas
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-[var(--emerald-green)]/10 text-[var(--emerald-green)] border-[var(--emerald-green)]/20 text-xs">
                    ✓ Origem
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-xs">
                    ✓ Ciência
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-xs">
                    ✓ Custódia
                  </Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}