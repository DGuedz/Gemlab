import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Shield,
  CheckCircle2,
  Lock,
  Eye,
  EyeOff,
  Fingerprint,
  Mountain,
  Gem,
  User,
  Building2,
  ArrowRight,
  QrCode,
  Download,
  ExternalLink,
  AlertCircle,
  Info,
  Sparkles,
  FileCheck,
  MapPin,
} from "lucide-react";

interface EmeraldVerificationProps {
  onNavigate?: (page: string) => void;
}

export function EmeraldVerification({ onNavigate }: EmeraldVerificationProps) {
  const [showPrivacyDetails, setShowPrivacyDetails] = useState(false);

  // Dados simulados da esmeralda
  const emeraldData = {
    nftId: "GEMLAB-CV-2026-0042",
    tokenStandard: "ERC-721",
    spectralHash: "0x7a8b9c...3d4e5f",
    weight: "3.42 ct",
    color: "Verde Intenso",
    clarity: "VS1",
    cut: "Oval",
    certificationDate: "15/01/2026",
    qrCode: "https://gemlab.example/verify/0042",
  };

  // Histórico de propriedade
  const ownershipHistory = [
    {
      id: 1,
      step: "Registro da Jazida",
      actor: "Garimpeiro José Silva",
      actorType: "Minerador",
      icon: Mountain,
      date: "10/01/2026",
      location: "Campos Verdes - GO",
      description: "Jazida registrada com prova de legalidade ZK",
      zkProof: true,
      status: "verified",
      color: "#caa34b",
    },
    {
      id: 2,
      step: "Criação do Lote",
      actor: "Cooperativa COOPESMERALDA",
      actorType: "Custodiante",
      icon: Gem,
      date: "12/01/2026",
      location: "Campos Verdes - GO",
      description: "Lote ERC-1155 #789 - 15kg run-of-mine",
      zkProof: false,
      status: "verified",
      color: "#006b4f",
    },
    {
      id: 3,
      step: "Certificação Individual",
      actor: "Dr. Maria Santos - Gemóloga",
      actorType: "Gemólogo Certificado",
      icon: Fingerprint,
      date: "15/01/2026",
      location: "Laboratório GemLab",
      description: "NFT ERC-721 criado com SpectralHash Raman",
      zkProof: false,
      status: "verified",
      color: "#014733",
    },
    {
      id: 4,
      step: "Venda Legal",
      actor: "João Oliveira",
      actorType: "Comprador Verificado",
      icon: User,
      date: "18/01/2026",
      location: "São Paulo - SP",
      description: "Transação com prova ZK de pagamento de impostos",
      zkProof: true,
      status: "verified",
      color: "#006b4f",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#006b4f] to-[#014733] py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(202,163,75,0.3),transparent)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#caa34b] text-white px-6 py-2">
              <Shield className="h-4 w-4 mr-2" />
              Verificação de Autenticidade
            </Badge>
            <h1 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-white mb-6">
              A História Completa da Sua Esmeralda
            </h1>
            <p className="font-['Inter'] text-lg text-gray-100 leading-relaxed">
              Rastreabilidade total desde a jazida até você. Cada passo
              registrado, cada ator verificado, cada imposto comprovado.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Seção Principal - Informações da Esmeralda */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Coluna 1: Imagem e QR Code */}
          <div className="lg:col-span-1 space-y-6">
            {/* Imagem da Esmeralda */}
            <Card className="p-6 border-2 border-[#006b4f]">
              <div className="aspect-square bg-gradient-to-br from-[#006b4f]/20 to-[#014733]/20 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                <Gem className="h-32 w-32 text-[#006b4f] opacity-50" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(202,163,75,0.2),transparent)]" />
                <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Verificada
                </Badge>
              </div>
              <h3 className="font-['Montserrat'] font-bold text-[#1b1b1b] mb-2">
                Esmeralda Certificada
              </h3>
              <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                NFT #{emeraldData.nftId}
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-['Inter'] text-gray-500">Peso</span>
                  <p className="font-['Inter'] font-semibold text-[#1b1b1b]">
                    {emeraldData.weight}
                  </p>
                </div>
                <div>
                  <span className="font-['Inter'] text-gray-500">Cor</span>
                  <p className="font-['Inter'] font-semibold text-[#1b1b1b]">
                    {emeraldData.color}
                  </p>
                </div>
                <div>
                  <span className="font-['Inter'] text-gray-500">
                    Claridade
                  </span>
                  <p className="font-['Inter'] font-semibold text-[#1b1b1b]">
                    {emeraldData.clarity}
                  </p>
                </div>
                <div>
                  <span className="font-['Inter'] text-gray-500">Lapidação</span>
                  <p className="font-['Inter'] font-semibold text-[#1b1b1b]">
                    {emeraldData.cut}
                  </p>
                </div>
              </div>
            </Card>

            {/* QR Code */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <div className="text-center">
                <div className="w-40 h-40 bg-white border-2 border-[#006b4f] rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <QrCode className="h-32 w-32 text-[#006b4f]" />
                </div>
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                  Verificação Rápida
                </h4>
                <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                  Escaneie o QR Code para verificar a autenticidade
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Baixar
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Abrir
                  </Button>
                </div>
              </div>
            </Card>

            {/* Privacidade Garantida */}
            <Card className="p-6 border-2 border-purple-200 bg-purple-50">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-['Inter'] font-semibold text-purple-900 mb-1">
                    Privacidade Garantida
                  </h4>
                  <p className="font-['Inter'] text-xs text-purple-700">
                    Tecnologia ZK-Snarks
                  </p>
                </div>
              </div>
              <p className="font-['Inter'] text-sm text-purple-800 leading-relaxed mb-3">
                <strong>O que é?</strong> Uma tecnologia que prova que algo é
                verdadeiro (ex: impostos pagos, área legal) sem revelar os
                detalhes sensíveis (coordenadas da mina, valores exatos).
              </p>
              <Button
                size="sm"
                variant="ghost"
                className="w-full text-purple-700 hover:bg-purple-100"
                onClick={() => setShowPrivacyDetails(!showPrivacyDetails)}
              >
                {showPrivacyDetails ? (
                  <>
                    <EyeOff className="h-4 w-4 mr-2" />
                    Ocultar detalhes
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4 mr-2" />
                    Ver como funciona
                  </>
                )}
              </Button>
              {showPrivacyDetails && (
                <div className="mt-4 pt-4 border-t border-purple-200">
                  <p className="font-['Inter'] text-sm text-purple-800 leading-relaxed">
                    <strong>Na prática:</strong> O garimpeiro registra sua
                    jazida e prova que tem licença legal, mas as coordenadas
                    exatas ficam protegidas. Os compradores e auditores veem
                    apenas "✓ Origem Legal Verificada" sem acesso ao segredo de
                    negócio.
                  </p>
                </div>
              )}
            </Card>
          </div>

          {/* Coluna 2 e 3: Histórico de Rastreabilidade */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header do Histórico */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-['Montserrat'] text-3xl font-bold text-[#1b1b1b] mb-2">
                  Histórico de Rastreabilidade
                </h2>
                <p className="font-['Inter'] text-gray-600">
                  Cada passo da jornada registrado na blockchain
                </p>
              </div>
              <Badge className="bg-[#006b4f] text-white px-4 py-2">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                {ownershipHistory.length} Etapas Verificadas
              </Badge>
            </div>

            {/* Prova de Legalidade ZK - Destaque */}
            <Card className="p-6 border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Montserrat'] text-xl font-bold text-green-900 mb-2">
                    ✓ Origem e Impostos Validados (Prova ZK)
                  </h3>
                  <p className="font-['Inter'] text-sm text-green-800 leading-relaxed mb-4">
                    Esta esmeralda possui <strong>Prova de Legalidade ZK</strong>,
                    garantindo conformidade total com CARF/DeCripto, impostos
                    pagos (CFEM), e área de extração legalmente licenciada —
                    tudo verificado sem expor dados sensíveis do produtor.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-600 text-white">
                      <Shield className="h-3 w-3 mr-1" />
                      Conformidade CARF
                    </Badge>
                    <Badge className="bg-green-600 text-white">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      CFEM Pago
                    </Badge>
                    <Badge className="bg-purple-600 text-white">
                      <Lock className="h-3 w-3 mr-1" />
                      Dados Protegidos
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Timeline de Rastreabilidade */}
            <div className="relative space-y-6">
              {/* Linha vertical */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#caa34b] via-[#006b4f] to-[#014733]" />

              {ownershipHistory.map((step, index) => {
                const Icon = step.icon;
                const isLast = index === ownershipHistory.length - 1;

                return (
                  <Card
                    key={step.id}
                    className={`relative ml-16 border-2 transition-all hover:shadow-lg ${
                      step.zkProof
                        ? "border-purple-300 bg-purple-50/50"
                        : "border-[#e5e7eb] bg-white"
                    }`}
                  >
                    {/* Ícone circular na linha */}
                    <div
                      className="absolute -left-[52px] top-6 w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-['Montserrat'] font-bold text-[#1b1b1b]">
                              {step.step}
                            </h3>
                            {step.zkProof && (
                              <Badge className="bg-purple-500 text-white text-xs">
                                <Lock className="h-3 w-3 mr-1" />
                                Prova ZK
                              </Badge>
                            )}
                            <Badge className="bg-green-500 text-white text-xs">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Verificado
                            </Badge>
                          </div>
                          <p className="font-['Inter'] text-sm text-gray-600 mb-1">
                            <strong>{step.actor}</strong> • {step.actorType}
                          </p>
                          <p className="font-['Inter'] text-sm text-gray-500 flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            {step.location} • {step.date}
                          </p>
                        </div>
                      </div>

                      <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {step.zkProof && (
                        <div className="flex items-start gap-2 p-3 bg-purple-100 rounded-lg border border-purple-200">
                          <Info className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <p className="font-['Inter'] text-xs text-purple-800 leading-relaxed">
                            <strong>Privacidade Protegida:</strong>{" "}
                            {step.id === 1
                              ? "Coordenadas da jazida mantidas em sigilo. Apenas auditores autorizados têm acesso."
                              : "Valores e margens de lucro protegidos. Prova criptográfica de conformidade fiscal."}
                          </p>
                        </div>
                      )}

                      {!isLast && (
                        <div className="mt-4 flex items-center text-gray-400">
                          <ArrowRight className="h-4 w-4 mr-2" />
                          <span className="font-['Inter'] text-xs">
                            Próxima etapa
                          </span>
                        </div>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Informações Técnicas */}
            <Card className="p-6 border-2 border-[#e5e7eb] bg-gray-50">
              <h3 className="font-['Montserrat'] font-bold text-[#1b1b1b] mb-4 flex items-center gap-2">
                <Fingerprint className="h-5 w-5 text-[#006b4f]" />
                Informações Técnicas do NFT
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-['Inter'] text-sm text-gray-600 mb-1">
                    Token Standard
                  </p>
                  <p className="font-['Inter'] font-semibold text-[#1b1b1b]">
                    {emeraldData.tokenStandard}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-600 mb-1">
                    SpectralHash (Raman)
                  </p>
                  <p className="font-['Inter'] font-mono text-sm text-[#1b1b1b]">
                    {emeraldData.spectralHash}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-600 mb-1">
                    Data de Certificação
                  </p>
                  <p className="font-['Inter'] font-semibold text-[#1b1b1b]">
                    {emeraldData.certificationDate}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-600 mb-1">
                    ID do NFT
                  </p>
                  <p className="font-['Inter'] font-mono text-sm text-[#1b1b1b]">
                    {emeraldData.nftId}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Seção: O Que Isso Significa Para Você */}
        <Card className="p-8 border-2 border-[#caa34b] bg-gradient-to-r from-amber-50 to-yellow-50 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#caa34b] flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b] mb-2">
                O Que Isso Significa Para Você?
              </h2>
              <p className="font-['Inter'] text-gray-700">
                Traduzindo a tecnologia em benefícios práticos
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-[#e5e7eb]">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mb-3">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                Preço Mais Justo
              </h4>
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                Compradores pagam mais por esmeraldas com origem verificada e
                história limpa. Sem dúvidas = sem desconto.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e7eb]">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mb-3">
                <Lock className="h-5 w-5 text-purple-600" />
              </div>
              <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                Segredo Protegido
              </h4>
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                Suas coordenadas e margens de lucro ficam protegidas. Você
                prova legalidade sem expor seus segredos de negócio.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#e5e7eb]">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                Conformidade Total
              </h4>
              <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                Conformidade com CARF/DeCripto automática. Menos burocracia,
                mais tempo para trabalhar.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Final */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#006b4f] text-white hover:bg-[#014733] px-8 py-6"
            onClick={() => onNavigate?.("lab-portal")}
          >
            Certificar Minha Esmeralda
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          <p className="font-['Inter'] text-sm text-gray-500 mt-4">
            Comece a construir a história da sua pedra hoje
          </p>
        </div>
      </div>
    </div>
  );
}
