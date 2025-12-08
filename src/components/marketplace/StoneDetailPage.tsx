import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Sparkles,
  Download,
  QrCode,
  Fingerprint,
  Award,
  MapPin,
  Calendar,
  Scale,
  Eye,
  ShoppingCart,
  ExternalLink,
  FileText,
  CheckCircle2,
  Image as ImageIcon,
} from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function StoneDetailPage() {
  const stone = {
    id: "GEM-2024-1247",
    tokenId: 1247,
    stoneRef: "CV-GO-2024-1247",
    weight: 3.42,
    color: "Verde Intenso",
    colorIntensity: "Vívida",
    clarity: "VS1",
    cut: "Oval",
    dimensions: "10.2 x 8.1 x 5.4 mm",
    treatment: "Nenhum (Natural)",
    price: 45800,
    spectralHash: "0x7f3a92c4",
    ipfsCid: "QmX7f3a92c4abc123def456",
    txHash: "0x9b2f3c8d1a4e5f6b7c8d9e0f1a2b3c4d5e6f7g8h",
    certifier: "GemLab Certificado #LAB-042",
    certificationDate: "2024-11-15",
    origin: "Campos Verdes - Setor A3, Goiás, Brasil",
    miner: "MINER-042",
    batchId: "BATCH-2024-089",
    status: "Listado",
    images: 12,
  };

  const provenance = [
    {
      event: "RawExtraction",
      timestamp: "2024-10-05 08:30",
      user: "MINER-042",
      txHash: "0x1a2b...3c4d",
      details: "Extração do lote bruto (8.2 kg)",
    },
    {
      event: "BatchProcessed",
      timestamp: "2024-10-12 14:20",
      user: "Processing Plant #03",
      txHash: "0x5e6f...7g8h",
      details: "Beneficiamento e classificação inicial",
    },
    {
      event: "StoneMinted",
      timestamp: "2024-10-20 10:15",
      user: "LAB-042",
      txHash: "0x9i0j...1k2l",
      details: "NFT criado após pré-classificação",
    },
    {
      event: "GemCertified",
      timestamp: "2024-11-15 16:45",
      user: "LAB-042",
      txHash: "0x3m4n...5o6p",
      details: "Certificação gemológica completa",
    },
    {
      event: "ValuationUpdated",
      timestamp: "2024-11-16 09:00",
      user: "Appraiser #008",
      txHash: "0x7q8r...9s0t",
      details: "Avaliação de mercado realizada",
    },
    {
      event: "ListingCreated",
      timestamp: "2024-11-16 10:30",
      user: "Owner",
      txHash: stone.txHash,
      details: "Listado no marketplace",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#006b4f] to-[#014733] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="h-8 w-8 text-[#caa34b]" />
            <div>
              <code className="font-['Inter'] text-sm font-mono text-gray-200">
                {stone.id}
              </code>
              <h1 className="font-['Inter'] text-3xl font-bold">
                {stone.stoneRef}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge className="bg-green-100 text-green-700">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              {stone.status}
            </Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/20">
              NFT #{stone.tokenId}
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <div className="aspect-square bg-gradient-to-br from-[#006b4f] to-[#014733] rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="h-32 w-32 text-[#caa34b]" />
              </div>
              <div className="grid grid-cols-6 gap-2">
                {[...Array(6)].map((_, idx) => (
                  <div
                    key={idx}
                    className="aspect-square bg-gradient-to-br from-[#006b4f] to-[#014733] rounded-lg flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
                  >
                    <ImageIcon className="h-6 w-6 text-[#caa34b]" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Specifications */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h2 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-6">
                Especificações Gemológicas
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="font-['Inter'] text-sm text-gray-500 mb-1">Peso</div>
                    <div className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                      {stone.weight} quilates
                    </div>
                  </div>
                  <div>
                    <div className="font-['Inter'] text-sm text-gray-500 mb-1">Cor</div>
                    <div className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                      {stone.color}
                    </div>
                  </div>
                  <div>
                    <div className="font-['Inter'] text-sm text-gray-500 mb-1">
                      Intensidade da Cor
                    </div>
                    <div className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                      {stone.colorIntensity}
                    </div>
                  </div>
                  <div>
                    <div className="font-['Inter'] text-sm text-gray-500 mb-1">Clareza</div>
                    <div className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                      {stone.clarity}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="font-['Inter'] text-sm text-gray-500 mb-1">Lapidação</div>
                    <div className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                      {stone.cut}
                    </div>
                  </div>
                  <div>
                    <div className="font-['Inter'] text-sm text-gray-500 mb-1">Dimensões</div>
                    <div className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                      {stone.dimensions}
                    </div>
                  </div>
                  <div>
                    <div className="font-['Inter'] text-sm text-gray-500 mb-1">Tratamento</div>
                    <div className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                      {stone.treatment}
                    </div>
                  </div>
                  <div>
                    <div className="font-['Inter'] text-sm text-gray-500 mb-1">Origem</div>
                    <div className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                      {stone.origin}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Provenance Timeline */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h2 className="font-['Inter'] text-xl font-bold text-[#1b1b1b] mb-6">
                Histórico de Proveniência
              </h2>
              <div className="space-y-4">
                {provenance.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#006b4f] flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      {index < provenance.length - 1 && (
                        <div className="w-0.5 h-full bg-[#006b4f]/20 my-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <code className="font-['Inter'] font-mono text-sm bg-gray-100 px-2 py-1 rounded text-[#006b4f] font-semibold">
                          {event.event}
                        </code>
                        <span className="font-['Inter'] text-xs text-gray-500">
                          {event.timestamp}
                        </span>
                      </div>
                      <p className="font-['Inter'] text-sm text-gray-700 mb-2">
                        {event.details}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Executor: {event.user}</span>
                        <a
                          href="#"
                          className="font-mono text-[#006b4f] hover:underline flex items-center gap-1"
                        >
                          TX: {event.txHash}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Documents */}
            <Tabs defaultValue="certificate">
              <TabsList>
                <TabsTrigger value="certificate">Certificado</TabsTrigger>
                <TabsTrigger value="spectral">Espectro</TabsTrigger>
                <TabsTrigger value="metadata">Metadata</TabsTrigger>
              </TabsList>
              <TabsContent value="certificate">
                <Card className="p-6 border-2 border-[#e5e7eb]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-['Inter'] font-semibold text-[#1b1b1b]">
                      Certificado Gemológico
                    </h3>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-16 w-16 text-gray-400" />
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="spectral">
                <Card className="p-6 border-2 border-[#e5e7eb]">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-['Inter'] font-semibold text-[#1b1b1b]">
                      Assinatura Espectral
                    </h3>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download CSV
                    </Button>
                  </div>
                  <Alert className="bg-[#006b4f]/5 border-[#006b4f]/20 mb-4">
                    <Fingerprint className="h-4 w-4 text-[#006b4f]" />
                    <AlertDescription>
                      <div className="font-['Inter'] font-semibold text-[#006b4f] mb-1">
                        SpectralHash Verificado
                      </div>
                      <code className="font-['Inter'] font-mono text-sm bg-white px-2 py-1 rounded">
                        {stone.spectralHash}
                      </code>
                    </AlertDescription>
                  </Alert>
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Fingerprint className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="font-['Inter'] text-sm text-gray-500">
                        Gráfico do espectro
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="metadata">
                <Card className="p-6 border-2 border-[#e5e7eb]">
                  <div className="space-y-3 font-['Inter'] text-sm font-mono">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Token ID:</span>
                      <span className="text-[#1b1b1b]">#{stone.tokenId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">IPFS CID:</span>
                      <span className="text-[#006b4f] truncate ml-4">{stone.ipfsCid}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Batch ID:</span>
                      <span className="text-[#1b1b1b]">{stone.batchId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Miner ID:</span>
                      <span className="text-[#1b1b1b]">{stone.miner}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Contract:</span>
                      <span className="text-[#006b4f]">EmeraldNFT (ERC-721)</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card className="p-6 border-2 border-[#006b4f] bg-gradient-to-br from-white to-[#006b4f]/5">
              <div className="mb-6">
                <div className="font-['Inter'] text-sm text-gray-600 mb-1">Preço</div>
                <div className="font-['Inter'] text-4xl font-bold text-[#006b4f] mb-1">
                  R$ {stone.price.toLocaleString()}
                </div>
                <div className="font-['Inter'] text-sm text-gray-600">
                  ~R$ {(stone.price / stone.weight).toLocaleString()} por quilate
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full bg-[#006b4f] text-white hover:bg-[#014733]" size="lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Comprar Agora
                </Button>
                <Button variant="outline" className="w-full border-[#006b4f] text-[#006b4f]">
                  <Eye className="h-4 w-4 mr-2" />
                  Fazer Oferta
                </Button>
              </div>
            </Card>

            {/* Certification Info */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-[#caa34b]" />
                <h3 className="font-['Inter'] font-semibold text-[#1b1b1b]">
                  Certificação
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Certificadora
                  </div>
                  <div className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                    {stone.certifier}
                  </div>
                </div>
                <div>
                  <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Data de Certificação
                  </div>
                  <div className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                    {new Date(stone.certificationDate).toLocaleDateString("pt-BR")}
                  </div>
                </div>
              </div>
            </Card>

            {/* QR Code */}
            <Card className="p-6 border-2 border-[#e5e7eb] text-center">
              <QrCode className="h-32 w-32 mx-auto mb-4 text-[#006b4f]" />
              <h3 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                Verificação Rápida
              </h3>
              <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                Escaneie para verificar autenticidade
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Baixar QR Code
              </Button>
            </Card>

            {/* Blockchain Info */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h3 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-4">
                Informações Blockchain
              </h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-['Inter'] text-sm text-gray-700">
                    Ver no Explorer
                  </span>
                  <ExternalLink className="h-4 w-4 text-[#006b4f]" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-['Inter'] text-sm text-gray-700">
                    Ver Metadata IPFS
                  </span>
                  <ExternalLink className="h-4 w-4 text-[#006b4f]" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="font-['Inter'] text-sm text-gray-700">
                    Histórico de Transações
                  </span>
                  <ExternalLink className="h-4 w-4 text-[#006b4f]" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
