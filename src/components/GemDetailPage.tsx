import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { EASVerificationBadge } from "./verification/EASVerificationBadge";
import { SpectralHashViewer } from "./verification/SpectralHashViewer";
import { ShareCertificateModal } from "./modals/ShareCertificateModal";
import { QRCodeGenerator } from "./ui/qr-code-generator";
import { generateCertificatePDF } from "../utils/certificateGenerator";
import { toast } from "sonner";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  ExternalLink,
  Shield,
  FileText,
  Microscope,
  MapPin,
  Calendar,
  Hash,
  Lock,
  Eye,
  Share2,
  QrCode,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import emeraldImage1 from "figma:asset/f7f9158f729120c00ef8e711014954ebdd6e6678.png";
import emeraldImage2 from "figma:asset/7afd83b00f931b4b28c7832cd46b3851eb11afb2.png";
import emeraldImage3 from "figma:asset/64352e7879bd0c0122555126b1aa7e87c30ecead.png";

interface GemDetailPageProps {
  gemId: string;
  onBack: () => void;
}

export function GemDetailPage({ gemId, onBack }: GemDetailPageProps) {
  // Mock data - em produção viria do backend/blockchain
  const gemData = {
    "GEM-2024-1247": {
      id: "GEM-2024-1247",
      weight: "3.42 ct",
      color: "Verde Intenso",
      clarity: "VS1",
      origin: "Campos Verdes - GO",
      status: "Certificado",
      spectralHash: "0x7f3a92c4e8b1d5f3a2c9e4b7d8f1a3c5",
      nftContract: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
      tokenId: "1247",
      certificationDate: "15/11/2024",
      image: emeraldImage1,
      dimensions: "9.2 x 7.8 x 5.4 mm",
      cut: "Oval",
      treatment: "Nenhum",
      fluorescence: "Nenhuma",
      coordinates: "-13.9827, -46.8456",
      miningDate: "08/10/2024",
      labAnalystId: "LAB-042",
      ipfsCid: "QmX7f3a92c4e8b1d5f3a2c9e4b7d8f1a3c5e9b2d4f6",
      arweaveTxId: "a8f3c5e9b2d4f6h1j3k5m7n9p1q3r5s7t9",
    },
    "GEM-2024-1246": {
      id: "GEM-2024-1246",
      weight: "2.18 ct",
      color: "Verde Médio",
      clarity: "VVS2",
      origin: "Campos Verdes - GO",
      status: "Tokenizado",
      spectralHash: "0x4b2d81f3a7c5e9b1d8f2a6c4e7b9d3f1",
      nftContract: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
      tokenId: "1246",
      certificationDate: "14/11/2024",
      image: emeraldImage2,
      dimensions: "7.8 x 6.2 x 4.1 mm",
      cut: "Retangular",
      treatment: "Nenhum",
      fluorescence: "Nenhuma",
      coordinates: "-13.9845, -46.8471",
      miningDate: "02/10/2024",
      labAnalystId: "LAB-039",
      ipfsCid: "QmY4b2d81f3a7c5e9b1d8f2a6c4e7b9d3",
      arweaveTxId: "b9f4d6e8g1h3j5k7m9n1p3q5r7s9t1u3",
    },
    "GEM-2024-1245": {
      id: "GEM-2024-1245",
      weight: "5.67 ct",
      color: "Verde Intenso",
      clarity: "VS2",
      origin: "Campos Verdes - GO",
      status: "Certificado",
      spectralHash: "0x9c5e73a1b4d6f8e2c7a9d3f5b1e8c4a6",
      nftContract: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
      tokenId: "1245",
      certificationDate: "13/11/2024",
      image: emeraldImage3,
      dimensions: "11.5 x 9.3 x 6.8 mm",
      cut: "Cushion",
      treatment: "Nenhum",
      fluorescence: "Nenhuma",
      coordinates: "-13.9812, -46.8439",
      miningDate: "25/09/2024",
      labAnalystId: "LAB-041",
      ipfsCid: "QmZ9c5e73a1b4d6f8e2c7a9d3f5b1e8c4",
      arweaveTxId: "c1g5e9h2i4j6k8m1n3p5q7r9s1t3u5w7",
    },
    "GEM-2024-1244": {
      id: "GEM-2024-1244",
      weight: "1.85 ct",
      color: "Verde Claro",
      clarity: "VVS1",
      origin: "Campos Verdes - GO",
      status: "Tokenizado",
      spectralHash: "0x2f7b94e2d5c8a3f6b9e1d4c7a2f5b8e3",
      nftContract: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
      tokenId: "1244",
      certificationDate: "12/11/2024",
      image: emeraldImage1,
      dimensions: "6.9 x 5.8 x 3.9 mm",
      cut: "Redondo",
      treatment: "Nenhum",
      fluorescence: "Nenhuma",
      coordinates: "-13.9891, -46.8503",
      miningDate: "18/09/2024",
      labAnalystId: "LAB-038",
      ipfsCid: "QmW2f7b94e2d5c8a3f6b9e1d4c7a2f5b8",
      arweaveTxId: "d2h6f1g3h5i7j9k1m3n5p7q9r1s3t5u7",
    },
  };

  const gem = gemData[gemId as keyof typeof gemData];

  if (!gem) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-4">
            Esmeralda não encontrada
          </h2>
          <Button onClick={onBack} className="bg-[#006b4f] hover:bg-[#014733]">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  const timeline = [
    {
      date: gem.miningDate,
      title: "Extração",
      description: "Esmeralda extraída da jazida em Campos Verdes - GO",
      icon: MapPin,
    },
    {
      date: new Date(
        new Date(gem.miningDate.split("/").reverse().join("-")).getTime() +
          7 * 24 * 60 * 60 * 1000
      )
        .toLocaleDateString("pt-BR")
        .toString(),
      title: "Pré-seleção",
      description: "Análise visual e separação de qualidade gemológica",
      icon: Eye,
    },
    {
      date: new Date(
        new Date(gem.miningDate.split("/").reverse().join("-")).getTime() +
          14 * 24 * 60 * 60 * 1000
      )
        .toLocaleDateString("pt-BR")
        .toString(),
      title: "Análise Raman",
      description: "Espectrometria Raman - Assinatura molecular única",
      icon: Microscope,
    },
    {
      date: gem.certificationDate,
      title: "Certificação",
      description: "Laudo gemológico completo emitido pelo GEMLAB",
      icon: FileText,
    },
    {
      date: gem.certificationDate,
      title: "Tokenização",
      description: `NFT ERC-721 mintado - Token ID #${gem.tokenId}`,
      icon: Lock,
    },
  ];

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleDownloadPDF = () => {
    generateCertificatePDF({
      gemId: gem.id,
      weight: gem.weight,
      color: gem.color,
      clarity: gem.clarity,
      origin: gem.origin,
      spectralHash: gem.spectralHash,
      certificationDate: gem.certificationDate,
      nftContract: gem.nftContract,
      tokenId: gem.tokenId,
    });
    toast.success("Certificado pronto para impressão!", {
      description: "Use Ctrl+P ou Cmd+P para salvar como PDF"
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#1b1b1b] text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Registry
          </Button>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-['Montserrat'] text-3xl lg:text-4xl font-bold mb-2">
                {gem.id}
              </h1>
              <p className="font-['Inter'] text-lg text-gray-300">
                Esmeralda Certificada GEMLAB
              </p>
            </div>
            <Badge
              className={`${
                gem.status === "Certificado"
                  ? "bg-[#006b4f]"
                  : "bg-[#caa34b]"
              } text-white text-sm px-4 py-2`}
            >
              <CheckCircle2 className="h-4 w-4 mr-2" />
              {gem.status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-2 border-[#e5e7eb]">
              <div className="relative bg-white p-8">
                <ImageWithFallback
                  src={gem.image}
                  alt={`Esmeralda ${gem.id}`}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                onClick={handleDownloadPDF}
              >
                <Download className="h-4 w-4 mr-2" />
                Baixar Certificado
              </Button>
              <Button
                variant="outline"
                className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                onClick={() => setIsShareModalOpen(true)}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
              <Button
                variant="outline"
                className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                onClick={() => setShowQRCode(true)}
              >
                <QrCode className="h-4 w-4 mr-2" />
                QR Code
              </Button>
              <Button
                variant="outline"
                className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Ver na Blockchain
              </Button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Características Principais */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h3 className="font-['Montserrat'] text-xl font-bold text-[#1b1b1b] mb-4 flex items-center">
                <Microscope className="h-5 w-5 mr-2 text-[#006b4f]" />
                Características Gemológicas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Peso
                  </p>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    {gem.weight}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Dimensões
                  </p>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    {gem.dimensions}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Cor
                  </p>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    {gem.color}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Clareza
                  </p>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    {gem.clarity}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Lapidação
                  </p>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    {gem.cut}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Tratamento
                  </p>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    {gem.treatment}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Fluorescência
                  </p>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    {gem.fluorescence}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Origem
                  </p>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    {gem.origin}
                  </p>
                </div>
              </div>
            </Card>

            {/* Dados Blockchain */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h3 className="font-['Montserrat'] text-xl font-bold text-[#1b1b1b] mb-4 flex items-center">
                <Lock className="h-5 w-5 mr-2 text-[#006b4f]" />
                Identidade Digital
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    SpectralHash (Assinatura Raman)
                  </p>
                  <code className="font-['Inter'] text-xs font-mono text-[#006b4f] bg-[#006b4f]/5 px-2 py-1 rounded break-all">
                    {gem.spectralHash}
                  </code>
                </div>
                <Separator />
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    NFT Contract (ERC-721)
                  </p>
                  <code className="font-['Inter'] text-xs font-mono text-[#1b1b1b] bg-gray-100 px-2 py-1 rounded break-all">
                    {gem.nftContract}
                  </code>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Token ID
                  </p>
                  <code className="font-['Inter'] text-xs font-mono text-[#1b1b1b] bg-gray-100 px-2 py-1 rounded">
                    #{gem.tokenId}
                  </code>
                </div>
                <Separator />
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    IPFS CID (Documentação)
                  </p>
                  <code className="font-['Inter'] text-xs font-mono text-[#1b1b1b] bg-gray-100 px-2 py-1 rounded break-all">
                    {gem.ipfsCid}
                  </code>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Arweave TX ID (Backup Permanente)
                  </p>
                  <code className="font-['Inter'] text-xs font-mono text-[#1b1b1b] bg-gray-100 px-2 py-1 rounded break-all">
                    {gem.arweaveTxId}
                  </code>
                </div>
              </div>
            </Card>

            {/* Rastreabilidade */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h3 className="font-['Montserrat'] text-xl font-bold text-[#1b1b1b] mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-[#006b4f]" />
                Rastreabilidade de Origem
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Coordenadas de Extração
                  </p>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    {gem.coordinates}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Data de Extração
                  </p>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    {gem.miningDate}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Data de Certificação
                  </p>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    {gem.certificationDate}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Analista Responsável
                  </p>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    {gem.labAnalystId}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* NOVO: EAS Verification Badge */}
        <div className="mt-8">
          <EASVerificationBadge 
            attestations={[
              {
                type: "origin",
                status: "active",
                attester: "Prefeitura de Campos Verdes",
                timestamp: "15/11/2024 14:32",
                txHash: "0x8f2a3c5e7b9d1f4a6c8e0b2d4f6a8c0e2",
                easUid: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d"
              },
              {
                type: "science",
                status: "active",
                attester: "GEMLAB Tech",
                timestamp: "15/11/2024 15:18",
                txHash: "0x3c5e7b9d1f4a6c8e0b2d4f6a8c0e2f4a",
                easUid: "0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e"
              },
              {
                type: "custody",
                status: "active",
                attester: "Underground Vault",
                timestamp: "15/11/2024 16:45",
                txHash: "0x5e7b9d1f4a6c8e0b2d4f6a8c0e2f4a6c",
                easUid: "0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f"
              }
            ]}
          />
        </div>

        {/* NOVO: SpectralHash Viewer */}
        <div className="mt-8">
          <SpectralHashViewer 
            spectralHash={gem.spectralHash}
            ipfsCid={gem.ipfsCid}
            arweaveTxId={gem.arweaveTxId}
            certificationDate={gem.certificationDate}
          />
        </div>

        {/* Timeline de Rastreabilidade */}
        <Card className="mt-8 p-8 border-2 border-[#e5e7eb]">
          <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b] mb-8 flex items-center">
            <Calendar className="h-6 w-6 mr-3 text-[#006b4f]" />
            Linha do Tempo - Ciclo de Vida Completo
          </h3>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#e5e7eb]" />

            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#006b4f] text-white">
                      <event.icon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-['Inter'] text-lg font-bold text-[#1b1b1b]">
                        {event.title}
                      </h4>
                      <Badge variant="outline" className="text-xs">
                        {event.date}
                      </Badge>
                    </div>
                    <p className="font-['Inter'] text-sm text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Compliance Notice */}
        <Card className="mt-8 p-6 bg-[#006b4f]/5 border-2 border-[#006b4f]/20">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-[#006b4f] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-['Inter'] font-bold text-[#1b1b1b] mb-2">
                Certificação Científica GEMLAB
              </h4>
              <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed">
                Esta esmeralda foi certificada através de Espectrometria Raman,
                análise gemológica completa e rastreabilidade blockchain. Todos
                os dados são auditáveis e imutáveis. A documentação completa
                está armazenada em IPFS (pinagem redundante via Pinata) e
                Arweave (backup permanente). O NFT ERC-721 associado garante
                identidade digital única e transferência condicionada via
                whitelist KYC/AML.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Share Certificate Modal */}
      <ShareCertificateModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        gemId={gem.id}
        spectralHash={gem.spectralHash}
        certificationDate={gem.certificationDate}
      />

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="bg-white p-6 max-w-sm">
            <h3 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-4 text-center">
              QR Code - {gem.id}
            </h3>
            <QRCodeGenerator
              value={`https://gemlab.tech/certificate/${gem.id}`}
              size={256}
              title="Escaneie para verificar"
            />
            <Button
              className="mt-4 w-full bg-[#006b4f] hover:bg-[#014733] text-white"
              onClick={() => setShowQRCode(false)}
            >
              Fechar
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}