import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  X,
  Sparkles,
  MapPin,
  Calendar,
  Weight,
  Fingerprint,
  Shield,
  ExternalLink,
  Download,
  Share2,
  FileText,
  CheckCircle2,
  Layers,
} from "lucide-react";

interface GemDetailModalProps {
  gem: {
    uid: string;
    spectralHash: string;
    origin: string;
    weight: number;
    status: string;
    batchId: string;
    certificationDate: string;
  };
  onClose: () => void;
}

export function GemDetailModal({ gem, onClose }: GemDetailModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#006b4f] to-[#014733] text-white p-6 z-10">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="h-6 w-6 text-[#caa34b]" />
                <h2 className="font-['Inter'] text-2xl font-bold">
                  Certificado Gemológico
                </h2>
              </div>
              <code className="font-['Inter'] font-mono text-sm text-gray-200">
                {gem.uid}
              </code>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status Banner */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b]">
                  {gem.status}
                </h4>
                <p className="font-['Inter'] text-sm text-gray-600">
                  Certificado válido e verificado
                </p>
              </div>
            </div>
            <Badge className="bg-[#006b4f] text-white">
              Blockchain Verified
            </Badge>
          </div>

          {/* Main Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Peso */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#006b4f]/10 flex items-center justify-center">
                  <Weight className="h-5 w-5 text-[#006b4f]" />
                </div>
                <div>
                  <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Peso Certificado
                  </div>
                  <div className="font-['Inter'] text-2xl font-bold text-[#1b1b1b]">
                    {gem.weight.toFixed(2)} ct
                  </div>
                </div>
              </div>
            </Card>

            {/* Origem */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#caa34b]/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#caa34b]" />
                </div>
                <div>
                  <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Origem Verificada
                  </div>
                  <div className="font-['Inter'] font-semibold text-[#1b1b1b]">
                    {gem.origin}
                  </div>
                </div>
              </div>
            </Card>

            {/* Data */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Data de Certificação
                  </div>
                  <div className="font-['Inter'] font-semibold text-[#1b1b1b]">
                    {gem.certificationDate}
                  </div>
                </div>
              </div>
            </Card>

            {/* Batch ID */}
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Layers className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Lote de Origem
                  </div>
                  <div className="font-['Inter'] font-semibold text-[#1b1b1b]">
                    {gem.batchId}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* SpectralHash */}
          <Card className="p-6 border-2 border-[#006b4f]/20 bg-gradient-to-br from-[#006b4f]/5 to-white">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#006b4f]/10 flex items-center justify-center flex-shrink-0">
                <Fingerprint className="h-5 w-5 text-[#006b4f]" />
              </div>
              <div className="flex-1">
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                  SpectralHash (Identidade Digital)
                </h4>
                <p className="font-['Inter'] text-sm text-gray-600 mb-3">
                  Hash criptográfico único gerado a partir da análise espectral
                  Raman. Imutável e verificável on-chain.
                </p>
                <div className="p-3 bg-gray-100 rounded-lg">
                  <code className="font-['Inter'] font-mono text-sm text-[#006b4f] break-all">
                    {gem.spectralHash}
                  </code>
                </div>
              </div>
            </div>
          </Card>

          {/* Blockchain Info */}
          <Card className="p-6 border-2 border-[#caa34b]/20 bg-gradient-to-br from-[#caa34b]/5 to-white">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#caa34b]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-[#caa34b]" />
              </div>
              <div className="flex-1">
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                  Validação Blockchain
                </h4>
                <p className="font-['Inter'] text-sm text-gray-600 mb-3">
                  Este certificado está registrado permanentemente na blockchain
                  pública. Validado pela COOPESMERALDA (Oráculo Operacional).
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-700">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    EAS #1: Prova de Origem
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    EAS #2: Certificação Científica
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-700">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    EAS #3: Custódia Física
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button
              variant="outline"
              className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Ver on-chain
            </Button>
            <Button
              variant="outline"
              className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
            >
              <FileText className="h-4 w-4 mr-2" />
              Laudo PDF
            </Button>
            <Button
              variant="outline"
              className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button
              variant="outline"
              className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
