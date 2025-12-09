import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  QrCode,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Smartphone,
  Download,
  Share2,
  ExternalLink,
  Shield,
  Fingerprint,
  Calendar,
  MapPin
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "motion/react";
import emeraldImage from "figma:asset/c05ad95c188a77d52c4eacd4dd327429bca92e52.png";

interface CertificateData {
  id: string;
  gemId: string;
  name: string;
  weight: string;
  origin: string;
  certificationDate: string;
  spectralHash: string;
  easAttestation: string;
  blockchainTx: string;
  status: "verified" | "invalid" | "pending";
  imageUrl: string;
}

export function QRVerificationSystem() {
  const [verificationInput, setVerificationInput] = useState("");
  const [verificationResult, setVerificationResult] = useState<CertificateData | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  // Dados mockados de certificado
  const mockCertificate: CertificateData = {
    id: "CERT-2024-580",
    gemId: "GEM-2024-580",
    name: "Esmeralda Campos Verdes Premium",
    weight: "3.47 quilates",
    origin: "Campos Verdes, Goiás, Brasil",
    certificationDate: "07/12/2024 14:32:15",
    spectralHash: "SHA256:7f9fade3...2b8c1a",
    easAttestation: "0x1a2b3c4d5e6f7890abcdef",
    blockchainTx: "0x7f9f...3a2b",
    status: "verified",
    imageUrl: emeraldImage
  };

  const handleVerification = () => {
    setIsVerifying(true);
    // Simula verificação blockchain
    setTimeout(() => {
      if (verificationInput.includes("GEM-2024") || verificationInput.includes("CERT-2024")) {
        setVerificationResult(mockCertificate);
      } else {
        setVerificationResult({
          ...mockCertificate,
          status: "invalid"
        });
      }
      setIsVerifying(false);
    }, 1500);
  };

  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `gemlab-qr-${mockCertificate.gemId}.png`;
      link.href = url;
      link.click();
    }
  };

  const shareQRCode = () => {
    alert("Compartilhando QR Code via link público...");
  };

  const verificationUrl = `https://gemlab.com.br/verify/${mockCertificate.id}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-['Montserrat'] text-[#1b1b1b] mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
          Sistema de Verificação por QR Code
        </h1>
        <p className="text-[#1b1b1b]/70">
          Validação pública de certificados via smartphone - qualquer pessoa pode verificar autenticidade
        </p>
      </div>

      <Tabs defaultValue="gerar" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="gerar">Gerar QR Code</TabsTrigger>
          <TabsTrigger value="verificar">Verificar Certificado</TabsTrigger>
        </TabsList>

        {/* Tab Gerar QR Code */}
        <TabsContent value="gerar" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card Gerador */}
            <Card className="border-2 border-[#006b4f]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5 text-[#006b4f]" />
                  QR Code Dinâmico
                </CardTitle>
                <CardDescription>
                  Código verificável conectado ao blockchain Ethereum via EAS
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* QR Code */}
                <div className="flex justify-center p-8 bg-white rounded-lg border-2 border-[#006b4f] border-dashed">
                  <QRCodeSVG
                    value={verificationUrl}
                    size={256}
                    level="H"
                    includeMargin={true}
                    fgColor="#006b4f"
                  />
                </div>

                {/* URL de Verificação */}
                <div className="space-y-2">
                  <p className="text-sm text-[#1b1b1b]/70">URL de Verificação:</p>
                  <div className="flex gap-2">
                    <Input
                      value={verificationUrl}
                      readOnly
                      className="font-mono text-xs"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => navigator.clipboard.writeText(verificationUrl)}
                    >
                      Copiar
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Ações */}
                <div className="flex flex-col gap-2">
                  <Button
                    onClick={downloadQRCode}
                    className="bg-[#006b4f] hover:bg-[#014733] text-white gap-2 w-full"
                  >
                    <Download className="h-4 w-4" />
                    Baixar QR Code (.PNG)
                  </Button>
                  <Button
                    onClick={shareQRCode}
                    variant="outline"
                    className="border-[#caa34b] text-[#caa34b] hover:bg-[#caa34b] hover:text-white gap-2 w-full"
                  >
                    <Share2 className="h-4 w-4" />
                    Compartilhar Link Público
                  </Button>
                </div>

                {/* Info */}
                <div className="p-4 bg-[#006b4f]/5 rounded-lg space-y-2">
                  <div className="flex items-start gap-2">
                    <Smartphone className="h-4 w-4 text-[#006b4f] mt-0.5" />
                    <p className="text-xs text-[#1b1b1b]/80">
                      <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>Uso Mobile:</span> Cliente escaneia com câmera do smartphone
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-[#006b4f] mt-0.5" />
                    <p className="text-xs text-[#1b1b1b]/80">
                      <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>Segurança:</span> Validação on-chain via EAS e SpectralHash
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ExternalLink className="h-4 w-4 text-[#006b4f] mt-0.5" />
                    <p className="text-xs text-[#1b1b1b]/80">
                      <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>Permanente:</span> Link válido eternamente no blockchain
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card Dados do Certificado */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Fingerprint className="h-5 w-5 text-[#caa34b]" />
                  Dados do Certificado
                </CardTitle>
                <CardDescription>
                  Informações vinculadas ao QR Code acima
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Imagem da Gema */}
                <div className="aspect-square rounded-lg overflow-hidden border">
                  <img
                    src={mockCertificate.imageUrl}
                    alt={mockCertificate.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Informações */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-[#1b1b1b]/70 mb-1">ID Certificado</p>
                    <p className="font-['Montserrat']" style={{ fontWeight: 700 }}>{mockCertificate.id}</p>
                  </div>

                  <div>
                    <p className="text-xs text-[#1b1b1b]/70 mb-1">Nome da Gema</p>
                    <p className="font-['Montserrat']" style={{ fontWeight: 600 }}>{mockCertificate.name}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs text-[#1b1b1b]/70 mb-1">Peso</p>
                      <p className="text-sm font-['Montserrat']" style={{ fontWeight: 600 }}>{mockCertificate.weight}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#1b1b1b]/70 mb-1">Origem</p>
                      <p className="text-sm">{mockCertificate.origin.split(",")[0]}</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Descrição Técnica Detalhada */}
                  <div className="p-4 bg-gradient-to-br from-[#006b4f]/5 to-[#caa34b]/5 rounded-lg border border-[#006b4f]/20">
                    <p className="text-xs text-[#1b1b1b]/70 mb-2 flex items-center gap-1">
                      <Fingerprint className="h-3 w-3 text-[#006b4f]" />
                      Descrição Gemológica
                    </p>
                    <p className="text-sm text-[#1b1b1b]/90 leading-relaxed">
                      Esmeralda lapidada em <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>Emerald Cut</span> (lapidação esmeralda), apresentando forma retangular com proporções alongadas, quinas chanfradas e facetas em degraus nas laterais que criam camadas paralelas. A mesa ampla valoriza a transparência e o corpo de cor verde intensa, com distribuição homogênea de inclusões naturais. Este estilo clássico privilegia elegância, profundidade e estabilidade estrutural, sendo especialmente indicado para esmeraldas devido ao comportamento óptico e às características mineralógicas da gema. Cada peça é registrada como <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>NFT ERC-721</span>, vinculada ao <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>SpectralHash</span> obtido por Raman, assegurando identidade molecular única. A autenticidade é sustentada por <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>Atestados EAS</span> que comprovam prova científica, origem fiscal e custódia em cofre. A validade do token exige atestados ativos e atualizados, garantindo lastro, conformidade e rastreabilidade integral.
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="p-3 bg-[#006b4f]/10 rounded-lg">
                      <p className="text-xs text-[#1b1b1b]/70 mb-1">SpectralHash (SHA-256)</p>
                      <code className="text-xs block break-all text-[#006b4f]">
                        {mockCertificate.spectralHash}
                      </code>
                    </div>

                    <div className="p-3 bg-[#006b4f]/10 rounded-lg">
                      <p className="text-xs text-[#1b1b1b]/70 mb-1">EAS Attestation ID</p>
                      <code className="text-xs block break-all text-[#006b4f]">
                        {mockCertificate.easAttestation}
                      </code>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2 text-[#006b4f] border-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                    >
                      Ver no Blockchain Explorer
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab Verificar */}
        <TabsContent value="verificar" className="space-y-6">
          {/* Input de Verificação */}
          <Card className="border-2 border-[#caa34b]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#caa34b]" />
                Verificar Autenticidade
              </CardTitle>
              <CardDescription>
                Digite o ID do certificado ou o ID da gema para validar no blockchain
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Ex: CERT-2024-580 ou GEM-2024-580"
                  value={verificationInput}
                  onChange={(e) => setVerificationInput(e.target.value)}
                  className="border-[#caa34b] focus:ring-[#caa34b]"
                />
                <Button
                  onClick={handleVerification}
                  disabled={isVerifying || !verificationInput}
                  className="bg-[#caa34b] hover:bg-[#caa34b]/90 text-white gap-2"
                >
                  {isVerifying ? (
                    <>Verificando...</>
                  ) : (
                    <>
                      <Shield className="h-4 w-4" />
                      Verificar
                    </>
                  )}
                </Button>
              </div>

              <p className="text-xs text-[#1b1b1b]/60">
                INFO: A verificação consulta o blockchain Ethereum e valida a atestação EAS em tempo real
              </p>
            </CardContent>
          </Card>

          {/* Resultado da Verificação */}
          {verificationResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`border-2 ${
                verificationResult.status === "verified" 
                  ? "border-[#006b4f] bg-gradient-to-br from-[#006b4f]/5 to-white" 
                  : "border-[#dc2626] bg-gradient-to-br from-[#dc2626]/5 to-white"
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      {verificationResult.status === "verified" ? (
                        <>
                          <CheckCircle2 className="h-6 w-6 text-[#006b4f]" />
                          Certificado Autêntico
                        </>
                      ) : (
                        <>
                          <XCircle className="h-6 w-6 text-[#dc2626]" />
                          Certificado Inválido
                        </>
                      )}
                    </CardTitle>
                    <Badge className={
                      verificationResult.status === "verified"
                        ? "bg-[#006b4f] text-white"
                        : "bg-[#dc2626] text-white"
                    }>
                      {verificationResult.status === "verified" ? "VERIFICADO" : "NÃO VERIFICADO"}
                    </Badge>
                  </div>
                  {verificationResult.status === "verified" ? (
                    <CardDescription className="text-[#006b4f]">
                      Este certificado foi validado com sucesso no blockchain Ethereum
                    </CardDescription>
                  ) : (
                    <CardDescription className="text-[#dc2626]">
                      Este certificado não foi encontrado ou a assinatura digital é inválida
                    </CardDescription>
                  )}
                </CardHeader>

                {verificationResult.status === "verified" && (
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Imagem */}
                      <div className="aspect-square rounded-lg overflow-hidden border-2 border-[#006b4f]">
                        <img
                          src={verificationResult.imageUrl}
                          alt={verificationResult.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Detalhes */}
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-[#1b1b1b]/70 mb-1">Nome da Gema</p>
                          <p className="font-['Montserrat'] text-[#1b1b1b]" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                            {verificationResult.name}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-[#1b1b1b]/70 mb-1">Peso</p>
                            <p className="font-['Montserrat']" style={{ fontWeight: 600 }}>{verificationResult.weight}</p>
                          </div>
                          <div>
                            <p className="text-sm text-[#1b1b1b]/70 mb-1">ID Gema</p>
                            <p className="font-['Montserrat']" style={{ fontWeight: 600 }}>{verificationResult.gemId}</p>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-[#1b1b1b]/70 mb-1 flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            Origem
                          </p>
                          <p className="text-sm">{verificationResult.origin}</p>
                        </div>

                        <div>
                          <p className="text-sm text-[#1b1b1b]/70 mb-1 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Data de Certificação
                          </p>
                          <p className="text-sm">{verificationResult.certificationDate}</p>
                        </div>

                        <Separator />

                        {/* Descrição Técnica Detalhada */}
                        <div className="p-4 bg-gradient-to-br from-[#006b4f]/5 to-[#caa34b]/5 rounded-lg border border-[#006b4f]/20">
                          <p className="text-xs text-[#1b1b1b]/70 mb-2 flex items-center gap-1">
                            <Fingerprint className="h-3 w-3 text-[#006b4f]" />
                            Descrição Gemológica
                          </p>
                          <p className="text-sm text-[#1b1b1b]/90 leading-relaxed">
                            Esmeralda lapidada em <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>Emerald Cut</span> (lapidação esmeralda), apresentando forma retangular com proporções alongadas, quinas chanfradas e facetas em degraus nas laterais que criam camadas paralelas. A mesa ampla valoriza a transparência e o corpo de cor verde intensa, com distribuição homogênea de inclusões naturais. Este estilo clássico privilegia elegância, profundidade e estabilidade estrutural, sendo especialmente indicado para esmeraldas devido ao comportamento óptico e às características mineralógicas da gema. Cada peça é registrada como <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>NFT ERC-721</span>, vinculada ao <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>SpectralHash</span> obtido por Raman, assegurando identidade molecular única. A autenticidade é sustentada por <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>Atestados EAS</span> que comprovam prova científica, origem fiscal e custódia em cofre. A validade do token exige atestados ativos e atualizados, garantindo lastro, conformidade e rastreabilidade integral.
                          </p>
                        </div>

                        <Separator />

                        <div className="space-y-3">
                          <div className="p-3 bg-[#006b4f]/10 rounded-lg">
                            <p className="text-xs text-[#1b1b1b]/70 mb-1">SpectralHash (SHA-256)</p>
                            <code className="text-xs block break-all text-[#006b4f]">
                              {verificationResult.spectralHash}
                            </code>
                          </div>

                          <div className="p-3 bg-[#006b4f]/10 rounded-lg">
                            <p className="text-xs text-[#1b1b1b]/70 mb-1">EAS Attestation ID</p>
                            <code className="text-xs block break-all text-[#006b4f]">
                              {verificationResult.easAttestation}
                            </code>
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full gap-2 text-[#006b4f] border-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                          >
                            Ver no Blockchain Explorer
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          )}

          {/* Instruções */}
          {!verificationResult && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-[#006b4f]" />
                  Como Funciona a Verificação?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#006b4f] text-white flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-['Montserrat']" style={{ fontWeight: 600 }}>Escaneie o QR Code</p>
                      <p className="text-sm text-[#1b1b1b]/70">
                        Use a câmera do smartphone para escanear o código na etiqueta da gema
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#caa34b] text-white flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-['Montserrat']" style={{ fontWeight: 600 }}>Validação Blockchain</p>
                      <p className="text-sm text-[#1b1b1b]/70">
                        O sistema consulta a atestação EAS no blockchain Ethereum em tempo real
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#014733] text-white flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-['Montserrat']" style={{ fontWeight: 600 }}>Resultado Instantâneo</p>
                      <p className="text-sm text-[#1b1b1b]/70">
                        Veja todos os dados da certificação, origem e SpectralHash da gema
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
