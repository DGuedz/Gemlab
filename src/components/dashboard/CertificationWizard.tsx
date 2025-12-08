import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Progress } from "../ui/progress";
import {
  FileText,
  Upload,
  Image,
  Fingerprint,
  Award,
  Send,
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

interface CertificationData {
  // Step 1
  stoneRef: string;
  batchId: string;
  weight: string;
  mineId: string;
  extractionDate: string;
  // Step 2
  macroImages: File[];
  microImages: File[];
  video360: File | null;
  pdfReport: File | null;
  // Step 3
  spectrumFile: File | null;
  spectralHash: string;
  // Step 4
  color: string;
  colorIntensity: string;
  clarity: string;
  inclusions: string;
  treatment: string;
  // Step 5
  gemologistNotes: string;
  pgpSignature: string;
  // Step 6
  ipfsCid: string;
  nftTokenId: string;
}

export function CertificationWizard({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [data, setData] = useState<Partial<CertificationData>>({});

  const steps = [
    { number: 1, title: "Identificação", icon: FileText },
    { number: 2, title: "Multimídia", icon: Image },
    { number: 3, title: "Espectro", icon: Fingerprint },
    { number: 4, title: "Gemologia", icon: Award },
    { number: 5, title: "Revisão", icon: Check },
    { number: 6, title: "Tokenização", icon: Send },
  ];

  const progress = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerateSpectralHash = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setData({ ...data, spectralHash: "0x" + Math.random().toString(16).substr(2, 8) });
      setIsProcessing(false);
    }, 2000);
  };

  const handlePinAndMint = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setData({
        ...data,
        ipfsCid: "QmX" + Math.random().toString(36).substr(2, 9),
        nftTokenId: Math.floor(Math.random() * 10000).toString(),
      });
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b]">
              Certificação Gemológica
            </h2>
            <Button variant="ghost" onClick={onClose}>
              ✕
            </Button>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex items-center justify-between mt-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`flex items-center gap-2 ${
                  step.number === currentStep
                    ? "text-[#006b4f]"
                    : step.number < currentStep
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                    step.number === currentStep
                      ? "border-[#006b4f] bg-[#006b4f]/10"
                      : step.number < currentStep
                      ? "border-green-600 bg-green-100"
                      : "border-gray-300"
                  }`}
                >
                  {step.number < currentStep ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span className="text-sm font-semibold">{step.number}</span>
                  )}
                </div>
                <span className="hidden sm:inline font-['Inter'] text-sm font-medium">
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Identificação */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-[#006b4f]" />
                </div>
                <div>
                  <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                    Metadados Iniciais
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Identificação da pedra e vínculo ao lote de origem
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="stoneRef">Referência da Pedra *</Label>
                  <Input
                    id="stoneRef"
                    placeholder="CV-GO-2024-XXXX"
                    value={data.stoneRef || ""}
                    onChange={(e) => setData({ ...data, stoneRef: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="batchId">Batch ID (ERC-1155) *</Label>
                  <Input
                    id="batchId"
                    placeholder="BATCH-2024-XXX"
                    value={data.batchId || ""}
                    onChange={(e) => setData({ ...data, batchId: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Peso (quilates) *</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.01"
                    placeholder="0.00 ct"
                    value={data.weight || ""}
                    onChange={(e) => setData({ ...data, weight: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mineId">ID do Garimpeiro *</Label>
                  <Input
                    id="mineId"
                    placeholder="MINER-XXX"
                    value={data.mineId || ""}
                    onChange={(e) => setData({ ...data, mineId: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="extractionDate">Data de Extração *</Label>
                  <Input
                    id="extractionDate"
                    type="date"
                    value={data.extractionDate || ""}
                    onChange={(e) => setData({ ...data, extractionDate: e.target.value })}
                  />
                </div>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Todos os campos marcados com * são obrigatórios. O Batch ID deve corresponder
                  a um lote ERC-1155 já registrado na blockchain.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Step 2: Upload Multimídia */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                  <Image className="h-6 w-6 text-[#006b4f]" />
                </div>
                <div>
                  <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                    Documentação Visual
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Upload de imagens macro, micro, vídeo 360° e PDF do laudo
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-2 border-dashed border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                  <div className="text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                      Imagens Macro
                    </h4>
                    <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                      Fotos gerais da pedra (mínimo 3 ângulos)
                    </p>
                    <Button variant="outline" className="border-[#006b4f] text-[#006b4f]">
                      Selecionar Arquivos
                    </Button>
                    <p className="font-['Inter'] text-xs text-gray-500 mt-2">
                      Formatos aceitos: JPG, PNG (máx. 10MB cada)
                    </p>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-dashed border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                  <div className="text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                      Imagens Microscópicas
                    </h4>
                    <p className="font-['Inter'] text-sm text-gray-600 mb-4">
                      Fotos de inclusões e características internas
                    </p>
                    <Button variant="outline" className="border-[#006b4f] text-[#006b4f]">
                      Selecionar Arquivos
                    </Button>
                  </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 border-2 border-dashed border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                    <div className="text-center">
                      <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                      <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                        Vídeo 360°
                      </h4>
                      <Button size="sm" variant="outline" className="border-[#006b4f] text-[#006b4f]">
                        Upload
                      </Button>
                      <p className="font-['Inter'] text-xs text-gray-500 mt-2">
                        MP4, máx. 50MB
                      </p>
                    </div>
                  </Card>

                  <Card className="p-6 border-2 border-dashed border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                    <div className="text-center">
                      <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                      <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                        PDF do Laudo
                      </h4>
                      <Button size="sm" variant="outline" className="border-[#006b4f] text-[#006b4f]">
                        Upload
                      </Button>
                      <p className="font-['Inter'] text-xs text-gray-500 mt-2">
                        PDF, máx. 5MB
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Espectro e SpectralHash */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                  <Fingerprint className="h-6 w-6 text-[#006b4f]" />
                </div>
                <div>
                  <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                    Análise Espectroscópica
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Upload do espectro e geração da assinatura única (SpectralHash)
                  </p>
                </div>
              </div>

              <Card className="p-8 border-2 border-dashed border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                <div className="text-center">
                  <Fingerprint className="h-16 w-16 text-[#006b4f] mx-auto mb-4" />
                  <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                    Upload do Espectro (CSV)
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600 mb-6">
                    Arquivo CSV com dados de absorbância/transmitância
                  </p>
                  <Button className="bg-[#006b4f] text-white hover:bg-[#014733]">
                    <Upload className="h-4 w-4 mr-2" />
                    Selecionar Arquivo CSV
                  </Button>
                </div>
              </Card>

              {data.spectrumFile && (
                <Card className="p-6 bg-[#f9fafb]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-1">
                        Espectro Carregado
                      </h4>
                      <p className="font-['Inter'] text-sm text-gray-600">
                        spectrum_cv_2024_1248.csv
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">
                      <Check className="h-3 w-3 mr-1" />
                      Validado
                    </Badge>
                  </div>
                  <Button
                    onClick={handleGenerateSpectralHash}
                    disabled={isProcessing || !!data.spectralHash}
                    className="w-full bg-[#006b4f] text-white hover:bg-[#014733]"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Processando Espectro...
                      </>
                    ) : data.spectralHash ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        SpectralHash Gerado
                      </>
                    ) : (
                      "Gerar SpectralHash"
                    )}
                  </Button>
                </Card>
              )}

              {data.spectralHash && (
                <Alert className="bg-green-50 border-green-200">
                  <Check className="h-4 w-4 text-green-600" />
                  <AlertDescription>
                    <div className="font-['Inter'] font-semibold text-green-900 mb-2">
                      SpectralHash Gerado com Sucesso
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="font-['Inter'] font-mono text-sm bg-white px-3 py-1 rounded border border-green-200">
                        {data.spectralHash}
                      </code>
                      <Button size="sm" variant="outline">
                        Copiar
                      </Button>
                    </div>
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}

          {/* Step 4: Preenchimento Gemológico */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-[#006b4f]" />
                </div>
                <div>
                  <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                    Classificação Gemológica
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Análise de cor, clareza, inclusões e tratamentos
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="color">Cor Base *</Label>
                  <Select value={data.color} onValueChange={(value) => setData({ ...data, color: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a cor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="verde-claro">Verde Claro</SelectItem>
                      <SelectItem value="verde-medio">Verde Médio</SelectItem>
                      <SelectItem value="verde-intenso">Verde Intenso</SelectItem>
                      <SelectItem value="verde-escuro">Verde Escuro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="colorIntensity">Intensidade da Cor *</Label>
                  <Select value={data.colorIntensity} onValueChange={(value) => setData({ ...data, colorIntensity: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a intensidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="leve">Leve</SelectItem>
                      <SelectItem value="moderada">Moderada</SelectItem>
                      <SelectItem value="forte">Forte</SelectItem>
                      <SelectItem value="vivida">Vívida</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clarity">Clareza (GIA) *</Label>
                  <Select value={data.clarity} onValueChange={(value) => setData({ ...data, clarity: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a clareza" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="FL">FL (Flawless)</SelectItem>
                      <SelectItem value="IF">IF (Internally Flawless)</SelectItem>
                      <SelectItem value="VVS1">VVS1 (Very Very Slightly Included)</SelectItem>
                      <SelectItem value="VVS2">VVS2</SelectItem>
                      <SelectItem value="VS1">VS1 (Very Slightly Included)</SelectItem>
                      <SelectItem value="VS2">VS2</SelectItem>
                      <SelectItem value="SI1">SI1 (Slightly Included)</SelectItem>
                      <SelectItem value="SI2">SI2</SelectItem>
                      <SelectItem value="I1">I1 (Included)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="treatment">Tratamento *</Label>
                  <Select value={data.treatment} onValueChange={(value) => setData({ ...data, treatment: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tratamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Nenhum (Natural)</SelectItem>
                      <SelectItem value="oil">Oiling (Óleo)</SelectItem>
                      <SelectItem value="resin">Resin Filling</SelectItem>
                      <SelectItem value="clarity">Clarity Enhancement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="inclusions">Inclusões e Características *</Label>
                  <Textarea
                    id="inclusions"
                    placeholder="Descreva as inclusões observadas (tipo, localização, impacto na clareza)..."
                    rows={4}
                    value={data.inclusions || ""}
                    onChange={(e) => setData({ ...data, inclusions: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Revisão e Assinatura */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                  <Check className="h-6 w-6 text-[#006b4f]" />
                </div>
                <div>
                  <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                    Revisão e Assinatura Digital
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Confirme os dados e assine digitalmente o certificado
                  </p>
                </div>
              </div>

              <Card className="p-6 bg-[#f9fafb]">
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-4">
                  Resumo da Certificação
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="font-['Inter'] text-sm text-gray-500">Referência:</span>
                    <p className="font-['Inter'] font-medium text-[#1b1b1b]">{data.stoneRef || "-"}</p>
                  </div>
                  <div>
                    <span className="font-['Inter'] text-sm text-gray-500">Batch ID:</span>
                    <p className="font-['Inter'] font-medium text-[#1b1b1b]">{data.batchId || "-"}</p>
                  </div>
                  <div>
                    <span className="font-['Inter'] text-sm text-gray-500">Peso:</span>
                    <p className="font-['Inter'] font-medium text-[#1b1b1b]">{data.weight || "-"} ct</p>
                  </div>
                  <div>
                    <span className="font-['Inter'] text-sm text-gray-500">Cor:</span>
                    <p className="font-['Inter'] font-medium text-[#1b1b1b]">{data.color || "-"}</p>
                  </div>
                  <div>
                    <span className="font-['Inter'] text-sm text-gray-500">Clareza:</span>
                    <p className="font-['Inter'] font-medium text-[#1b1b1b]">{data.clarity || "-"}</p>
                  </div>
                  <div>
                    <span className="font-['Inter'] text-sm text-gray-500">SpectralHash:</span>
                    <code className="font-['Inter'] font-mono text-xs text-[#006b4f]">
                      {data.spectralHash || "-"}
                    </code>
                  </div>
                </div>
              </Card>

              <div className="space-y-2">
                <Label htmlFor="notes">Observações do Gemólogo</Label>
                <Textarea
                  id="notes"
                  placeholder="Adicione observações técnicas adicionais..."
                  rows={3}
                  value={data.gemologistNotes || ""}
                  onChange={(e) => setData({ ...data, gemologistNotes: e.target.value })}
                />
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Ao prosseguir, você confirmará a exatidão das informações e assinará digitalmente
                  este certificado. A assinatura PGP será gerada automaticamente.
                </AlertDescription>
              </Alert>
            </div>
          )}

          {/* Step 6: Pin IPFS e Mint NFT */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                  <Send className="h-6 w-6 text-[#006b4f]" />
                </div>
                <div>
                  <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                    Armazenamento e Tokenização
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Pin no IPFS e criação do NFT ERC-721
                  </p>
                </div>
              </div>

              {!data.ipfsCid && !data.nftTokenId && (
                <Card className="p-8 text-center border-2 border-[#e5e7eb]">
                  <Send className="h-16 w-16 text-[#006b4f] mx-auto mb-4" />
                  <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                    Pronto para Tokenização
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-600 mb-6">
                    Todos os arquivos serão enviados para IPFS/Arweave e o NFT será mintado na blockchain
                  </p>
                  <Button
                    onClick={handlePinAndMint}
                    disabled={isProcessing}
                    size="lg"
                    className="bg-[#006b4f] text-white hover:bg-[#014733]"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Enviar e Tokenizar
                      </>
                    )}
                  </Button>
                </Card>
              )}

              {isProcessing && (
                <div className="space-y-4">
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Loader2 className="h-5 w-5 text-[#006b4f] animate-spin" />
                      <span className="font-['Inter'] font-medium text-[#1b1b1b]">
                        Upload para IPFS...
                      </span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </Card>
                  <Card className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
                      <span className="font-['Inter'] font-medium text-gray-500">
                        Aguardando confirmação on-chain...
                      </span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </Card>
                </div>
              )}

              {data.ipfsCid && data.nftTokenId && (
                <div className="space-y-4">
                  <Alert className="bg-green-50 border-green-200">
                    <Check className="h-4 w-4 text-green-600" />
                    <AlertDescription>
                      <div className="font-['Inter'] font-semibold text-green-900 mb-2">
                        Certificação Concluída com Sucesso!
                      </div>
                      <p className="font-['Inter'] text-sm text-green-800">
                        O NFT foi mintado e todos os documentos estão armazenados de forma imutável.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <Card className="p-6 bg-[#f9fafb]">
                    <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-4">
                      Informações da Tokenização
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <span className="font-['Inter'] text-sm text-gray-500">IPFS CID:</span>
                        <div className="flex items-center gap-2 mt-1">
                          <code className="font-['Inter'] font-mono text-sm bg-white px-3 py-1 rounded border flex-1">
                            {data.ipfsCid}
                          </code>
                          <Button size="sm" variant="outline">Copiar</Button>
                        </div>
                      </div>
                      <div>
                        <span className="font-['Inter'] text-sm text-gray-500">NFT Token ID:</span>
                        <div className="flex items-center gap-2 mt-1">
                          <code className="font-['Inter'] font-mono text-sm bg-white px-3 py-1 rounded border flex-1">
                            #{data.nftTokenId}
                          </code>
                          <Button size="sm" variant="outline">Ver no Explorer</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t p-6 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <div className="font-['Inter'] text-sm text-gray-600">
            Etapa {currentStep} de {steps.length}
          </div>
          {currentStep < steps.length ? (
            <Button
              onClick={handleNext}
              className="bg-[#006b4f] text-white hover:bg-[#014733]"
            >
              Próximo
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={onClose}
              className="bg-green-600 text-white hover:bg-green-700"
            >
              <Check className="h-4 w-4 mr-2" />
              Concluir
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
