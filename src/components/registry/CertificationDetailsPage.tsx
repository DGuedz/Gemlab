import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  ArrowLeft,
  Download,
  Share2,
  CheckCircle2,
  Sparkles,
  FileText,
  QrCode,
  Shield,
  Package,
  MapPin,
  Calendar,
  Eye,
  ExternalLink,
  Fingerprint,
  Database,
  Lock,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface CertificationData {
  id: string;
  spectralHash: string;
  images: string[];
  weight: number;
  color: string;
  clarity: string;
  cut: string;
  dimensions: string;
  origin: string;
  certificationDate: string;
  batchId: string;
  status: "Disponível" | "Reservado" | "Custodiado";
  availability: "Público" | "Credenciado";
  blockchainTx: string;
  ramanSpectrum: string;
  xrfAnalysis: string;
  gemologist: string;
  custodiante: string;
}

export function CertificationDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - dados completos da certificação
  const certification: CertificationData = {
    id: "GML-ESM-2024-00001",
    spectralHash: "0x7f3a8b2d9c4e1f6a5b8c3d7e2f9a4b6c8d1e3f5a7b9c2d4e6f8a1b3c5d7e9f",
    images: [
      "https://images.unsplash.com/photo-1605821771565-35e0d046a2fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwZ2Vtc3RvbmUlMjBqZXdlbHJ5fGVufDF8fHx8MTc2NjY5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1669867660200-810bd0921333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGVtZXJhbGQlMjBjcnlzdGFsfGVufDF8fHx8MTc2NjY5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1676617481869-613bc310c0f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwc3RvbmUlMjBnZW9sb2d5fGVufDF8fHx8MTc2NjY5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1667419941709-7db68fe7828f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaW91cyUyMGdlbXN0b25lJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjY2OTMyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    weight: 2.45,
    color: "Verde Intenso",
    clarity: "VS1",
    cut: "Esmeralda",
    dimensions: "8.2 x 6.5 x 4.3 mm",
    origin: "COOPESMERALDA - Lote A-001",
    certificationDate: "15/12/2024",
    batchId: "#3184",
    status: "Disponível",
    availability: "Público",
    blockchainTx: "0x9f4b3a8e7c2d1f6a5b9c8d3e2f1a7b6c5d4e3f2a1b9c8d7e6f5a4b3c2d1e",
    ramanSpectrum: "Espectro Raman SHA-256: a8f3b2c1d9e4f5a6b7c8...",
    xrfAnalysis: "Be: 0.14%, Cr: 0.08%, Fe: 0.23%, V: 0.05%",
    gemologist: "Dr. Ana Silva (CRQ 12345)",
    custodiante: "COOPESMERALDA - Custodiante Operacional",
  };

  // Timeline de rastreabilidade
  const timeline = [
    {
      date: "05/11/2024",
      title: "Extração na Jazida",
      description: "Esmeralda extraída no Lote A-001",
      location: "Campos Verdes - GO",
      icon: MapPin,
      status: "completed",
    },
    {
      date: "08/11/2024",
      title: "Recebimento COOPESMERALDA",
      description: "Registro de entrada e triagem inicial",
      location: "COOPESMERALDA - Campos Verdes",
      icon: Package,
      status: "completed",
    },
    {
      date: "10/11/2024",
      title: "Validação Fiscal",
      description: "Emissão de NF e validação de origem",
      location: "Prefeitura de Campos Verdes",
      icon: Shield,
      status: "completed",
    },
    {
      date: "12/11/2024",
      title: "Análise Laboratorial",
      description: "Espectroscopia Raman e análise XRF",
      location: "GEMLAB - Laboratório de Certificação",
      icon: Sparkles,
      status: "completed",
    },
    {
      date: "15/12/2024",
      title: "Certificação Emitida",
      description: "Certificado gemológico completo e registro blockchain",
      location: "GEMLAB Registry",
      icon: CheckCircle2,
      status: "completed",
    },
    {
      date: "15/12/2024",
      title: "Custodiado",
      description: "Armazenamento em custódia segregada",
      location: "Custodiante Operacional",
      icon: Lock,
      status: "current",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponível":
        return "bg-[#006b4f] text-white";
      case "Reservado":
        return "bg-[#caa34b] text-white";
      case "Custodiado":
        return "bg-[#1b1b1b] text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-white">
      {/* Header */}
      <div className="bg-white border-b-2 border-[#e5e7eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className="text-[#006b4f] hover:text-[#014733] hover:bg-[#006b4f]/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar ao Registry
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-[#e5e7eb] text-gray-600 hover:border-[#006b4f] hover:text-[#006b4f]"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-[#e5e7eb] text-gray-600 hover:border-[#006b4f] hover:text-[#006b4f]"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <Card className="overflow-hidden border-2 border-[#e5e7eb]">
              <div className="relative aspect-square bg-gradient-to-br from-[#006b4f]/5 to-white">
                <ImageWithFallback
                  src={certification.images[selectedImage]}
                  alt={`Esmeralda ${certification.id}`}
                  className="w-full h-full object-cover"
                />
                <Badge className={`absolute top-4 right-4 ${getStatusColor(certification.status)}`}>
                  {certification.status}
                </Badge>
                {certification.availability === "Credenciado" && (
                  <Badge className="absolute top-4 left-4 bg-[#caa34b] text-white">
                    <Lock className="h-3 w-3 mr-1" />
                    Acesso Credenciado
                  </Badge>
                )}
              </div>
            </Card>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {certification.images.map((image, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden cursor-pointer border-2 ${
                    selectedImage === index
                      ? "border-[#006b4f]"
                      : "border-[#e5e7eb] hover:border-[#006b4f]/50"
                  } transition-all`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-square">
                    <ImageWithFallback
                      src={image}
                      alt={`Thumb ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              ))}
            </div>

            {/* Verification Card */}
            <Card className="p-6 border-2 border-[#006b4f] bg-gradient-to-br from-[#006b4f]/5 to-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#006b4f] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-2">
                    Certificação Verificada
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600 mb-3">
                    Esta esmeralda foi certificada cientificamente pelo GEMLAB com
                    rastreabilidade completa e registro blockchain imutável
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                  >
                    <QrCode className="h-4 w-4 mr-2" />
                    Ver QR Code
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <Badge className="mb-3 bg-[#006b4f] text-white">
                Certificação Gemológica Científica
              </Badge>
              <h1 className="font-['Montserrat'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-2">
                Esmeralda Certificada
              </h1>
              <p className="font-['Inter'] text-sm font-mono text-gray-500">
                {certification.id}
              </p>
            </div>

            {/* SpectralHash */}
            <Card className="p-4 border-2 border-[#e5e7eb] bg-[#f9fafb]">
              <div className="flex items-start gap-3">
                <Fingerprint className="h-5 w-5 text-[#006b4f] mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    SpectralHash (Identidade Digital)
                  </p>
                  <code className="font-['Inter'] text-xs font-mono text-[#006b4f] break-all">
                    {certification.spectralHash}
                  </code>
                </div>
              </div>
            </Card>

            {/* Características Gemológicas */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#006b4f]" />
                Características Gemológicas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-['Inter'] text-sm text-gray-500 mb-1">Peso</p>
                  <p className="font-['Inter'] text-lg font-bold text-[#1b1b1b]">
                    {certification.weight.toFixed(2)} quilates
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-500 mb-1">Cor</p>
                  <p className="font-['Inter'] text-lg font-bold text-[#1b1b1b]">
                    {certification.color}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-500 mb-1">Clareza</p>
                  <p className="font-['Inter'] text-lg font-bold text-[#1b1b1b]">
                    {certification.clarity}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-500 mb-1">Corte</p>
                  <p className="font-['Inter'] text-lg font-bold text-[#1b1b1b]">
                    {certification.cut}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="font-['Inter'] text-sm text-gray-500 mb-1">Dimensões</p>
                  <p className="font-['Inter'] text-lg font-bold text-[#1b1b1b]">
                    {certification.dimensions}
                  </p>
                </div>
              </div>
            </Card>

            {/* Origem e Certificação */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#006b4f]" />
                Origem e Certificação
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-['Inter'] text-sm text-gray-500 mb-1">Origem</p>
                  <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                    {certification.origin}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-500 mb-1">Lote</p>
                  <Badge className="bg-[#5b7ce6] text-white">
                    {certification.batchId}
                  </Badge>
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-500 mb-1">
                    Data de Certificação
                  </p>
                  <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                    {certification.certificationDate}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-500 mb-1">Gemólogo</p>
                  <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                    {certification.gemologist}
                  </p>
                </div>
                <div>
                  <p className="font-['Inter'] text-sm text-gray-500 mb-1">Custodiante</p>
                  <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                    {certification.custodiante}
                  </p>
                </div>
              </div>
            </Card>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-[#006b4f] text-white hover:bg-[#014733]" size="lg">
                <ExternalLink className="h-5 w-5 mr-2" />
                Manifestar Interesse Comercial
              </Button>
              <Button variant="outline" className="w-full border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white" size="lg">
                <Lock className="h-5 w-5 mr-2" />
                Solicitar Credenciamento
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="blockchain" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            <TabsTrigger value="analysis">Análises</TabsTrigger>
            <TabsTrigger value="timeline">Rastreabilidade</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
            <TabsTrigger value="verification">Verificação</TabsTrigger>
          </TabsList>

          {/* Blockchain Tab */}
          <TabsContent value="blockchain" className="space-y-4">
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                  <Database className="h-6 w-6 text-[#006b4f]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-2">
                    Registro Blockchain
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Certificação registrada imutavelmente em blockchain pública
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#f9fafb] rounded-lg">
                  <p className="font-['Inter'] text-xs text-gray-500 mb-2">
                    Transaction Hash
                  </p>
                  <code className="font-['Inter'] text-sm font-mono text-[#006b4f] break-all">
                    {certification.blockchainTx}
                  </code>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                      Network
                    </p>
                    <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                      Polygon PoS
                    </p>
                  </div>
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                      Timestamp
                    </p>
                    <p className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                      15/12/2024 14:32:18 UTC
                    </p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
                >
                  Ver no Block Explorer
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Analysis Tab */}
          <TabsContent value="analysis" className="space-y-4">
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-4">
                Espectroscopia Raman
              </h3>
              <div className="p-4 bg-[#f9fafb] rounded-lg mb-4">
                <p className="font-['Inter'] text-sm text-gray-600 mb-2">
                  {certification.ramanSpectrum}
                </p>
              </div>
              <p className="font-['Inter'] text-sm text-gray-600">
                A espectroscopia Raman identifica a assinatura molecular única da
                esmeralda, criando uma "impressão digital" impossível de falsificar
              </p>
            </Card>

            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-4">
                Análise XRF (Fluorescência de Raios-X)
              </h3>
              <div className="p-4 bg-[#f9fafb] rounded-lg mb-4">
                <p className="font-['Inter'] text-sm text-gray-600">
                  Composição química elementar:
                </p>
                <p className="font-['Inter'] text-sm font-mono text-[#1b1b1b] mt-2">
                  {certification.xrfAnalysis}
                </p>
              </div>
              <p className="font-['Inter'] text-sm text-gray-600">
                Análise não-destrutiva que determina a composição química exata da
                esmeralda
              </p>
            </Card>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-4">
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-6">
                Timeline de Rastreabilidade Completa
              </h3>
              <div className="space-y-6">
                {timeline.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          event.status === "current"
                            ? "bg-[#006b4f]"
                            : "bg-[#006b4f]/20"
                        }`}
                      >
                        <event.icon
                          className={`h-5 w-5 ${
                            event.status === "current"
                              ? "text-white"
                              : "text-[#006b4f]"
                          }`}
                        />
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-[#e5e7eb] mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-['Inter'] font-bold text-[#1b1b1b]">
                          {event.title}
                        </h4>
                        <span className="font-['Inter'] text-xs text-gray-500">
                          {event.date}
                        </span>
                      </div>
                      <p className="font-['Inter'] text-sm text-gray-600 mb-1">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-1 text-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span className="font-['Inter'] text-xs">{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Certificado Gemológico Completo",
                  type: "PDF",
                  size: "2.4 MB",
                  date: "15/12/2024",
                },
                {
                  title: "Laudo de Espectroscopia Raman",
                  type: "PDF",
                  size: "1.8 MB",
                  date: "14/12/2024",
                },
                {
                  title: "Análise XRF Detalhada",
                  type: "PDF",
                  size: "1.2 MB",
                  date: "13/12/2024",
                },
                {
                  title: "Nota Fiscal de Origem",
                  type: "PDF",
                  size: "0.8 MB",
                  date: "10/11/2024",
                },
              ].map((doc, index) => (
                <Card
                  key={index}
                  className="p-4 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#006b4f]/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-[#006b4f]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-['Inter'] font-medium text-[#1b1b1b] text-sm mb-1 truncate">
                        {doc.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{doc.type}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.date}</span>
                      </div>
                    </div>
                    <Download className="h-4 w-4 text-gray-400 group-hover:text-[#006b4f] transition-colors" />
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Verification Tab */}
          <TabsContent value="verification" className="space-y-4">
            <Card className="p-6 border-2 border-[#006b4f] bg-gradient-to-br from-[#006b4f]/5 to-white">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#006b4f] flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-2">
                    Sistema de Verificação Multi-Camada
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Esta certificação passou por múltiplas camadas de validação científica
                    e fiscal
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    label: "Análise Científica (Raman + XRF)",
                    status: "Verificado",
                  },
                  {
                    label: "Validação Fiscal (Prefeitura)",
                    status: "Verificado",
                  },
                  {
                    label: "Registro Blockchain",
                    status: "Verificado",
                  },
                  {
                    label: "Custódia Física Segregada",
                    status: "Verificado",
                  },
                  {
                    label: "Auditoria COOPESMERALDA",
                    status: "Verificado",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-[#e5e7eb]"
                  >
                    <span className="font-['Inter'] text-sm text-[#1b1b1b]">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#006b4f]" />
                      <span className="font-['Inter'] text-sm font-medium text-[#006b4f]">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <Card className="mt-12 p-8 border-2 border-[#006b4f] bg-gradient-to-br from-[#006b4f]/5 to-white">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b]">
              Interessado nesta Esmeralda?
            </h3>
            <p className="font-['Inter'] text-gray-600">
              Entre em contato com nossos distribuidores autorizados ou solicite
              credenciamento comercial para acessar informações de disponibilidade
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-[#006b4f] text-white hover:bg-[#014733]">
                Contatar Distribuidor Autorizado
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
              >
                Solicitar Credenciamento
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
