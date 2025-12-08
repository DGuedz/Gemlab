import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Building,
  Shield,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  FileText,
  Calendar,
  MapPin,
  Hash,
  Send,
  Eye,
  Download,
  Code,
  Wallet,
  Activity,
  DollarSign,
  BarChart3,
  Clock,
  XCircle,
  Loader2,
  Zap,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

export function OracleFiscalDashboard() {
  const [formData, setFormData] = useState({
    batchId: "",
    invoiceHash: "",
    minerCNPJ: "",
    mineLocationID: "",
    extractionDate: "",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [generatedUID, setGeneratedUID] = useState("");
  const [processLogs, setProcessLogs] = useState<string[]>([]);
  const [attestationLog, setAttestationLog] = useState([
    {
      uid: "0x1c8b...A1D1FE",
      schema: "PROVA DE ORIGEM",
      schemaColor: "bg-[#014733]",
      data: "Batch ID: 8879",
      attester: "Prefeitura Municipal",
      status: "valid",
      timestamp: new Date("2024-11-20T10:30:00").toISOString(),
    },
    {
      uid: "0x4f3f...C5386EDF",
      schema: "PROVA CIENTÍFICA",
      schemaColor: "bg-[#006b4f]",
      data: "SpectralHash: 8f43...aa4",
      attester: "GEMLAB Tech",
      status: "valid",
      timestamp: new Date("2024-11-20T11:45:00").toISOString(),
    },
    {
      uid: "0x9b93...70416be5",
      schema: "PROVA DE CUSTÓDIA",
      schemaColor: "bg-[#014733]",
      data: "Vault ID: UG-ALPHA-1",
      attester: "Underground Vault",
      status: "valid",
      timestamp: new Date("2024-11-20T14:20:00").toISOString(),
    },
    {
      uid: "0x7a8a...992fc7",
      schema: "PROVA DE ORIGEM",
      schemaColor: "bg-[#014733]",
      data: "Batch ID: 8880",
      attester: "Prefeitura Municipal",
      status: "valid",
      timestamp: new Date("2024-11-21T09:15:00").toISOString(),
    },
    {
      uid: "0xfc70...01d2cccc",
      schema: "PROVA CIENTÍFICA",
      schemaColor: "bg-[#006b4f]",
      data: "SpectralHash: b902...56a",
      attester: "GEMLAB Tech",
      status: "valid",
      timestamp: new Date("2024-11-21T10:30:00").toISOString(),
    },
    {
      uid: "0x01c5...49901d2c",
      schema: "PROVA DE CUSTÓDIA",
      schemaColor: "bg-[#014733]",
      data: "Vault ID: UG-ALPHA-1",
      attester: "Underground Vault",
      status: "expired",
      timestamp: new Date("2024-11-18T16:00:00").toISOString(),
    },
  ]);

  const [fiscalMetrics, setFiscalMetrics] = useState({
    arrecadacao: 145890.22,
    fundo2050: 48630.07,
    ativosValidados: 1204,
    taxaConformidade: 100,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.batchId) {
      toast.error("Por favor, preencha o Batch ID");
      return false;
    }
    if (!formData.invoiceHash) {
      toast.error("Por favor, preencha o Hash da NFe");
      return false;
    }
    if (!formData.minerCNPJ) {
      toast.error("Por favor, preencha o CNPJ do Minerador");
      return false;
    }
    if (!formData.mineLocationID) {
      toast.error("Por favor, preencha a Geolocalização");
      return false;
    }
    if (!formData.extractionDate) {
      toast.error("Por favor, preencha a Data da Extração");
      return false;
    }
    return true;
  };

  const generateUID = () => {
    const randomHex = Array.from({ length: 64 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join("");
    return `0x${randomHex}`;
  };

  const handleSubmitAttestation = () => {
    if (!validateForm()) return;
    
    // Resetar estados
    setCurrentStep(0);
    setProcessLogs([]);
    setGeneratedUID("");
    setIsDialogOpen(true);
  };

  const executeAttestationProcess = async () => {
    setIsProcessing(true);
    
    // PASSO 1: Configuração do Schema
    setCurrentStep(1);
    setProcessLogs(["[SDK] Inicializando Ethereum Attestation Service (EAS)..."]);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setProcessLogs((prev) => [
      ...prev,
      "[SDK] EAS Contract conectado: 0xC2679fBD37d54388Ce493F1DB75320D236e1815e",
      "[SDK] Signer: Prefeitura Municipal (0xGovt...AE4C170eD35f4Cf77797)",
      "[SDK] Schema UID: 0x8f43b395b2bd2d37dd0f6e4148ac6b9e7ed22f2215107958f95cc1489e4e6289",
    ]);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // PASSO 2: Codificação dos Dados
    setCurrentStep(2);
    const cnpjNumeric = formData.minerCNPJ.replace(/\D/g, "");
    const invoiceHashFormatted = formData.invoiceHash.startsWith("0x")
      ? formData.invoiceHash
      : `0x${formData.invoiceHash}`;
    const extractionTimestamp = new Date(formData.extractionDate).getTime() / 1000;
    
    setProcessLogs((prev) => [
      ...prev,
      "[ENCODER] Codificando dados fiscais da NFe...",
      `[ENCODER] minerCNPJ: ${cnpjNumeric} (uint256)`,
      `[ENCODER] invoiceHash: ${invoiceHashFormatted} (bytes32)`,
      `[ENCODER] extractionDate: ${Math.floor(extractionTimestamp)} (uint48)`,
      `[ENCODER] mineLocationID: "${formData.mineLocationID}" (string)`,
      "[ENCODER] ✓ Dados codificados com sucesso",
    ]);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // PASSO 3: Assinatura e Transação
    setCurrentStep(3);
    setProcessLogs((prev) => [
      ...prev,
      "[SIGNER] Solicitando assinatura da carteira da Prefeitura...",
      "[SIGNER] ✓ Assinatura confirmada",
      "[TX] Transmitindo transação para a blockchain...",
      "[TX] Aguardando confirmação da rede (Sepolia Testnet)...",
    ]);
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const newUID = generateUID();
    setGeneratedUID(newUID);
    const gasUsed = Math.floor(Math.random() * 20000) + 80000;
    const blockNumber = Math.floor(Math.random() * 1000000) + 5000000;
    
    setProcessLogs((prev) => [
      ...prev,
      `[TX] ✓ Transação confirmada!`,
      `[TX] Gas Used: ${gasUsed.toLocaleString("pt-BR")} units`,
      `[TX] Block Number: ${blockNumber}`,
    ]);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // PASSO 4: Confirmação
    setCurrentStep(4);
    setProcessLogs((prev) => [
      ...prev,
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "ATESTADO DE ORIGEM EMITIDO COM SUCESSO",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      `Novo UID: ${newUID}`,
      `Attester: 0xGovt...AE4C170eD35f4Cf77797`,
      `Batch ID: ${formData.batchId}`,
      `Schema: ORIGIN_SCHEMA_UID`,
      "Status: Válido e Irrevogável",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    ]);

    // ATUALIZAR SISTEMA APÓS EMISSÃO
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    setProcessLogs((prev) => [
      ...prev,
      "[SYSTEM] Atualizando Log de Atestados...",
    ]);
    
    // Adicionar novo atestado à tabela
    const newAttestation = {
      uid: `${newUID.substring(0, 6)}...${newUID.substring(newUID.length - 6)}`,
      schema: "PROVA DE ORIGEM",
      schemaColor: "bg-[#014733]",
      data: `Batch ID: ${formData.batchId}`,
      attester: "Prefeitura Municipal",
      status: "valid" as const,
      timestamp: new Date().toISOString(),
    };
    
    setAttestationLog((prev) => [newAttestation, ...prev]);
    
    await new Promise((resolve) => setTimeout(resolve, 500));
    setProcessLogs((prev) => [
      ...prev,
      "[SYSTEM] ✓ Novo atestado adicionado à tabela",
      "[SYSTEM] Atualizando Métricas Fiscais...",
    ]);
    
    // Atualizar métricas
    const cfemImpact = Math.floor(Math.random() * 5000) + 3000;
    const fundoImpact = cfemImpact * 0.333;
    
    setFiscalMetrics((prev) => ({
      arrecadacao: prev.arrecadacao + cfemImpact,
      fundo2050: prev.fundo2050 + fundoImpact,
      ativosValidados: prev.ativosValidados + 1,
      taxaConformidade: 100, // Mantém 100%
    }));
    
    await new Promise((resolve) => setTimeout(resolve, 500));
    setProcessLogs((prev) => [
      ...prev,
      `[SYSTEM] ✓ Arrecadação atualizada: +R$ ${cfemImpact.toLocaleString("pt-BR")}`,
      `[SYSTEM] ✓ Fundo 2050 atualizado: +R$ ${fundoImpact.toLocaleString("pt-BR")}`,
      `[SYSTEM] ✓ Ativos Validados: +1`,
      "[SYSTEM] Sincronização completa!",
    ]);

    setIsProcessing(false);

    // Toast de sucesso
    toast.success("Atestado de Origem emitido com sucesso!", {
      description: `UID: ${newUID.substring(0, 10)}... | Batch ID: ${formData.batchId}`,
      duration: 5000,
    });
    
    // Notificar outros atores do protocolo
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.info("🔔 Notificação enviada para GEMLAB Tech", {
      description: "Aguardando emissão de Prova Científica",
      duration: 4000,
    });
  };

  const resetDialog = () => {
    setIsDialogOpen(false);
    setCurrentStep(0);
    setProcessLogs([]);
    setGeneratedUID("");
    setIsProcessing(false);
  };

  const steps = [
    { number: 1, title: "Configuração do Schema", icon: Code },
    { number: 2, title: "Codificação dos Dados Fiscais", icon: FileText },
    { number: 3, title: "Assinatura e Transação On-Chain", icon: Zap },
    { number: 4, title: "Confirmação", icon: CheckCircle2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] to-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#014733] via-[#006b4f] to-[#014733] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div className="flex items-start gap-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <Building className="h-12 w-12" />
              </div>
              <div>
                <Badge className="bg-[#caa34b] text-white mb-3 px-3 py-1">
                  <Shield className="h-3 w-3 mr-2" />
                  Validador Oficial (Oracle Fiscal)
                </Badge>
                <h1 className="font-['Montserrat'] text-3xl lg:text-4xl font-bold mb-2">
                  Dashboard Oracle Fiscal
                </h1>
                <p className="font-['Inter'] text-lg text-gray-100 mb-4">
                  Prefeitura de Campos Verdes - GO
                </p>
                <div className="flex items-center gap-3 mb-2">
                  <Wallet className="h-4 w-4 text-gray-300" />
                  <code className="font-['Inter'] text-sm font-mono bg-white/10 px-3 py-1 rounded">
                    0xGovt...AE4C170eD35f4Cf77797
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-green-400" />
                  <span className="font-['Inter'] text-sm font-semibold text-green-400">
                    🟢 Operacional e Integrado ao Contrato EAS
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="font-['Inter'] text-xs text-gray-200 mb-2">
                Protocolo GEMLAB
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="font-['Inter'] font-bold">
                  Sistema Ativo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* MÓDULO I: EMISSÃO DE PROVA DE ORIGEM */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#006b4f] text-white w-12 h-12 rounded-lg flex items-center justify-center font-['Montserrat'] text-xl font-bold">
              I
            </div>
            <div>
              <h2 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b]">
                Ação Crítica — Emissão de Prova de Origem
              </h2>
              <p className="font-['Inter'] text-sm text-gray-600">
                Atestado de Prova de Origem (Schema #1) — "Certidão de
                Nascimento" validada pelo Estado
              </p>
            </div>
          </div>

          <Card className="p-8 border-2 border-[#006b4f]/20">
            <div className="mb-6">
              <div className="flex items-start gap-4 p-4 bg-[#006b4f]/5 rounded-lg border border-[#006b4f]/20">
                <Shield className="h-6 w-6 text-[#006b4f] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-['Inter'] font-bold text-[#1b1b1b] mb-2">
                    Credibilidade do Atestado
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed">
                    A credibilidade do Atestado depende da{" "}
                    <span className="font-bold text-[#006b4f]">
                      reputação da entidade
                    </span>{" "}
                    que o emite. A Prefeitura de Campos Verdes é o validador
                    oficial reconhecido pelo Protocolo GEMLAB.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <Label
                  htmlFor="batchId"
                  className="font-['Inter'] text-sm font-semibold text-[#1b1b1b] mb-2 block"
                >
                  Lote (Batch ID)
                </Label>
                <Input
                  id="batchId"
                  name="batchId"
                  type="text"
                  placeholder="Ex: 8881"
                  value={formData.batchId}
                  onChange={handleInputChange}
                  className="font-['Inter']"
                />
                <p className="font-['Inter'] text-xs text-gray-500 mt-1">
                  ID do lote de minério (ERC-1155) extraído pela Cooperativa
                </p>
              </div>

              <div>
                <Label
                  htmlFor="invoiceHash"
                  className="font-['Inter'] text-sm font-semibold text-[#1b1b1b] mb-2 block"
                >
                  Hash da NFe (InvoiceHash)
                </Label>
                <Input
                  id="invoiceHash"
                  name="invoiceHash"
                  type="text"
                  placeholder="0x..."
                  value={formData.invoiceHash}
                  onChange={handleInputChange}
                  className="font-['Inter'] font-mono text-xs"
                />
                <p className="font-['Inter'] text-xs text-gray-500 mt-1">
                  Hash SHA-256 da Nota Fiscal Eletrônica (PDF Off-Chain)
                </p>
              </div>

              <div>
                <Label
                  htmlFor="minerCNPJ"
                  className="font-['Inter'] text-sm font-semibold text-[#1b1b1b] mb-2 block"
                >
                  CNPJ do Minerador (minerCNPJ)
                </Label>
                <Input
                  id="minerCNPJ"
                  name="minerCNPJ"
                  type="text"
                  placeholder="12.345.678/0001-90"
                  value={formData.minerCNPJ}
                  onChange={handleInputChange}
                  className="font-['Inter']"
                />
                <p className="font-['Inter'] text-xs text-gray-500 mt-1">
                  Produtor Mineral Certificado/Cooperativa (COOPESMERALDA)
                </p>
              </div>

              <div>
                <Label
                  htmlFor="mineLocationID"
                  className="font-['Inter'] text-sm font-semibold text-[#1b1b1b] mb-2 block"
                >
                  Geolocalização (mineLocationID)
                </Label>
                <Input
                  id="mineLocationID"
                  name="mineLocationID"
                  type="text"
                  placeholder="ANM-ID-12345"
                  value={formData.mineLocationID}
                  onChange={handleInputChange}
                  className="font-['Inter']"
                />
                <p className="font-['Inter'] text-xs text-gray-500 mt-1">
                  ID da Jazida registrado na ANM (Coordenadas podem ser
                  ofuscadas via ZK)
                </p>
              </div>

              <div className="md:col-span-2">
                <Label
                  htmlFor="extractionDate"
                  className="font-['Inter'] text-sm font-semibold text-[#1b1b1b] mb-2 block"
                >
                  Data da Extração (extractionDate)
                </Label>
                <Input
                  id="extractionDate"
                  name="extractionDate"
                  type="datetime-local"
                  value={formData.extractionDate}
                  onChange={handleInputChange}
                  className="font-['Inter']"
                />
                <p className="font-['Inter'] text-xs text-gray-500 mt-1">
                  Carimbo de tempo Unix do momento da lavra
                </p>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-[#caa34b] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">
                    Requisito de Smart Contract
                  </p>
                  <p className="font-['Inter'] text-xs text-gray-600 leading-relaxed">
                    O Contrato{" "}
                    <code className="bg-gray-100 px-2 py-0.5 rounded font-mono">
                      GemlabResolver
                    </code>{" "}
                    garante que apenas a carteira da Prefeitura pode atestar
                    nesse Schema (RBAC).
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-[#006b4f] hover:bg-[#014733] text-white"
                onClick={handleSubmitAttestation}
              >
                <Send className="h-5 w-5 mr-2" />
                Assinar e Emitir Atestado (On-Chain)
              </Button>
            </div>
          </Card>
        </div>

        {/* MÓDULO II: INCENTIVOS FISCAIS */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#caa34b] text-white w-12 h-12 rounded-lg flex items-center justify-center font-['Montserrat'] text-xl font-bold">
              II
            </div>
            <div>
              <h2 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b]">
                Incentivos Fiscais (O "Royalty Inteligente")
              </h2>
              <p className="font-['Inter'] text-sm text-gray-600">
                Desconto automático via Smart Contract — Motor perpétuo do
                Plano 2050
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card
              className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`bg-[#006b4f]/10 ${"text-[#006b4f]"} p-3 rounded-lg`}
                >
                  <DollarSign className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Arrecadação de CFEM/ISS (Mês)
                  </p>
                  <p className="font-['Inter'] text-2xl font-bold text-[#1b1b1b]">
                    R$ {fiscalMetrics.arrecadacao.toLocaleString("pt-BR")}
                  </p>
                </div>
              </div>
              <p className="font-['Inter'] text-xs text-gray-600 leading-relaxed">
                Imposto sobre Serviços e Royalties Minerários repassados
                automaticamente pelo Smart Contract.
              </p>
            </Card>

            <Card
              className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`bg-[#caa34b]/10 ${"text-[#caa34b]"} p-3 rounded-lg`}
                >
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Fundo de Desenvolvimento 2050
                  </p>
                  <p className="font-['Inter'] text-2xl font-bold text-[#1b1b1b]">
                    R$ {fiscalMetrics.fundo2050.toLocaleString("pt-BR")}
                  </p>
                </div>
              </div>
              <p className="font-['Inter'] text-xs text-gray-600 leading-relaxed">
                Porcentagem descontada automaticamente na liquidação do
                token, assegurando fluxo de caixa para projetos como a
                Escola de Lapidação.
              </p>
            </Card>

            <Card
              className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`bg-[#014733]/10 ${"text-[#014733]"} p-3 rounded-lg`}
                >
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Total de Ativos Validados (NFTs)
                  </p>
                  <p className="font-['Inter'] text-2xl font-bold text-[#1b1b1b]">
                    {fiscalMetrics.ativosValidados} Pedras Gema
                  </p>
                </div>
              </div>
              <p className="font-['Inter'] text-xs text-gray-600 leading-relaxed">
                Volume de ativos que possuem a "Certidão de Nascimento"
                fiscal da Prefeitura.
              </p>
            </Card>

            <Card
              className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`bg-[#006b4f]/10 ${"text-[#006b4f]"} p-3 rounded-lg`}
                >
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-['Inter'] text-xs text-gray-500 mb-1">
                    Taxa de Conformidade
                  </p>
                  <p className="font-['Inter'] text-2xl font-bold text-[#1b1b1b]">
                    {fiscalMetrics.taxaConformidade}%
                  </p>
                </div>
              </div>
              <p className="font-['Inter'] text-xs text-gray-600 leading-relaxed">
                Todas as extrações reportadas e tokenizadas têm Prova de
                Origem atestada.
              </p>
            </Card>
          </div>

          <Card className="p-6 bg-gradient-to-br from-[#006b4f]/5 to-[#014733]/5 border-2 border-[#006b4f]/20">
            <div className="flex items-start gap-4">
              <Code className="h-6 w-6 text-[#006b4f] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-['Inter'] font-bold text-[#1b1b1b] mb-2">
                  Insight: Code is Law
                </h4>
                <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed">
                  O sistema utiliza o{" "}
                  <span className="font-bold text-[#006b4f]">código</span> para
                  garantir o repasse do fundo, não dependendo da "boa vontade"
                  de pagar impostos ou taxas. O desconto é{" "}
                  <span className="font-bold text-[#006b4f]">
                    automático e imutável
                  </span>
                  , assegurando o financiamento do Plano "Campos Verdes 2050".
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* MÓDULO III: RASTREABILIDADE E AUDITORIA */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#014733] text-white w-12 h-12 rounded-lg flex items-center justify-center font-['Montserrat'] text-xl font-bold">
              III
            </div>
            <div>
              <h2 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b]">
                Rastreabilidade e Auditoria (Log de Atestados)
              </h2>
              <p className="font-['Inter'] text-sm text-gray-600">
                "Teia de Confiança" em ação — Status dos ativos tokenizados
                (ERC-721)
              </p>
            </div>
          </div>

          <Card className="p-8 border-2 border-[#e5e7eb] overflow-x-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#006b4f] text-white">
                    <th className="font-['Inter'] text-sm font-bold p-4 text-left border border-[#014733]">
                      UID do Atestado
                    </th>
                    <th className="font-['Inter'] text-sm font-bold p-4 text-left border border-[#014733]">
                      Schema
                    </th>
                    <th className="font-['Inter'] text-sm font-bold p-4 text-left border border-[#014733]">
                      Ativo / Dados Chave
                    </th>
                    <th className="font-['Inter'] text-sm font-bold p-4 text-left border border-[#014733]">
                      Atribuidor (Attester)
                    </th>
                    <th className="font-['Inter'] text-sm font-bold p-4 text-left border border-[#014733]">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {attestationLog.map((log, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[#006b4f]/5 transition-colors"
                    >
                      <td className="font-['Inter'] text-sm p-4 border border-[#e5e7eb]">
                        <code className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                          {log.uid}
                        </code>
                      </td>
                      <td className="font-['Inter'] text-sm p-4 border border-[#e5e7eb]">
                        <Badge className={`${log.schemaColor} text-white`}>
                          {log.schema}
                        </Badge>
                      </td>
                      <td className="font-['Inter'] text-sm p-4 border border-[#e5e7eb]">
                        <code className="font-mono text-xs">{log.data}</code>
                      </td>
                      <td className="font-['Inter'] text-sm p-4 border border-[#e5e7eb]">
                        {log.attester}
                      </td>
                      <td className="font-['Inter'] text-sm p-4 border border-[#e5e7eb]">
                        {log.status === "valid" ? (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle2 className="h-4 w-4" />
                            <span className="font-semibold">Válido</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-orange-600">
                            <AlertCircle className="h-4 w-4" />
                            <span className="font-semibold">Expirado</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="mt-6 p-6 bg-[#014733]/5 border-2 border-[#014733]/20">
            <div className="flex items-start gap-4">
              <Eye className="h-6 w-6 text-[#014733] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-['Inter'] font-bold text-[#1b1b1b] mb-3">
                  Lógica de Status (Smart Contract)
                </h4>
                <ul className="space-y-2">
                  <li className="font-['Inter'] text-sm text-gray-700 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Se o Atestado de Origem (Prefeitura) e o Atestado de
                      Ciência (GEMLAB) existirem e estiverem válidos, o token é
                      considerado <strong>legal e autêntico</strong>.
                    </span>
                  </li>
                  <li className="font-['Inter'] text-sm text-gray-700 flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>
                      O token está marcado como <strong>"Risco"</strong> se o
                      Atestado de Custódia estiver expirado ou revogado.
                    </span>
                  </li>
                  <li className="font-['Inter'] text-sm text-gray-700 flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Se o atestado da Prefeitura precisar de ajuste (ex: erro
                      no CNPJ), ele pode ser{" "}
                      <strong>revogado + novo atestado emitido</strong>,
                      deixando rastro visível do erro para auditoria.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* MÓDULO IV: INTEGRAÇÃO TÉCNICA */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#1b1b1b] text-white w-12 h-12 rounded-lg flex items-center justify-center font-['Montserrat'] text-xl font-bold">
              IV
            </div>
            <div>
              <h2 className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b]">
                Integração Técnica (SDK EAS)
              </h2>
              <p className="font-['Inter'] text-sm text-gray-600">
                Backend do Oracle Fiscal — Ethereum Attestation Service SDK
              </p>
            </div>
          </div>

          <Card className="p-8 border-2 border-[#1b1b1b]/20 bg-[#1b1b1b]/5">
            <div className="mb-6">
              <h3 className="font-['Inter'] font-bold text-[#1b1b1b] mb-3">
                Exemplo de Chamada de Função para Emitir Atestado Fiscal
                (Simplificado)
              </h3>
              <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed mb-6">
                A Prefeitura, através de seu sistema backend, utiliza o SDK
                para assinar os dados da Nota Fiscal e enviá-los para a
                blockchain:
              </p>
            </div>

            <div className="bg-[#1b1b1b] rounded-lg p-6 overflow-x-auto">
              <pre className="font-mono text-xs text-green-400 leading-relaxed overflow-x-auto">
                <code>{`// Definindo a Estrutura do Atestado de Origem (Schema Encoder)
const schemaEncoder = new SchemaEncoder(
  "uint256 minerCNPJ, bytes32 invoiceHash, uint48 extractionDate, string mineLocationID"
);

// Codificando os dados fiscais da NFe (Prefeitura)
const encodedData = schemaEncoder.encodeData([
  { name: "minerCNPJ", value: 12345678000190, type: "uint256" },
  { name: "invoiceHash", value: "0xHASH_DA_NFE", type: "bytes32" },
  { name: "extractionDate", value: 1699891200, type: "uint48" },
  { name: "mineLocationID", value: "ANM-ID-12345", type: "string" }
]);

// A Prefeitura (Signer) envia a transação:
const tx = await eas.attest({
  schema: ORIGIN_SCHEMA_UID,
  data: {
    recipient: TOKEN_CONTRACT_ADDRESS, // O ativo que está sendo validado
    expirationTime: NO_EXPIRATION,
    revocable: true,
    data: encodedData,
  },
});

// newAttestationUID: 0x1c8b...A1D1FE (UID gerado on-chain)
console.log("Atestado de Origem emitido:", tx.newAttestationUID);`}</code>
              </pre>
            </div>
          </Card>

          <Card className="mt-6 p-6 bg-gradient-to-br from-[#006b4f] to-[#014733] text-white">
            <div className="flex items-start gap-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg flex-shrink-0">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-['Montserrat'] text-2xl font-bold mb-4">
                  O Dashboard como Ferramenta Indispensável
                </h3>
                <p className="font-['Inter'] text-base leading-relaxed mb-4">
                  Este dashboard traduz a{" "}
                  <span className="font-bold">burocracia em código</span>,
                  garantindo que o <span className="font-bold">Governo</span>{" "}
                  não apenas fiscalize <em>ex post facto</em>, mas atue como um{" "}
                  <span className="font-bold">
                    participante ativo e indispensável
                  </span>{" "}
                  na validação da riqueza.
                </p>
                <p className="font-['Inter'] text-base leading-relaxed">
                  Isso transforma a CVM de{" "}
                  <span className="font-bold">"fiscalizador externo"</span> em{" "}
                  <span className="font-bold">"observador on-chain"</span>,
                  onde a conformidade é verificável em tempo real, sem
                  necessidade de auditorias manuais.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Final */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
          >
            <Download className="h-5 w-5 mr-2" />
            Exportar Relatório Fiscal
          </Button>
          <Button
            size="lg"
            className="bg-[#006b4f] hover:bg-[#014733] text-white"
          >
            <Eye className="h-5 w-5 mr-2" />
            Ver Atestados na Blockchain
          </Button>
        </div>
      </div>

      {/* Dialog de Processamento */}
      <Dialog open={isDialogOpen} onOpenChange={resetDialog}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-['Montserrat'] text-2xl font-bold text-[#1b1b1b]">
              Simulação: Emissão de Atestado de Prova de Origem
            </DialogTitle>
            <DialogDescription className="font-['Inter'] text-sm text-gray-600">
              Ethereum Attestation Service (EAS) SDK - Batch ID: {formData.batchId}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-6">
            {/* Progress Steps */}
            <div className="grid grid-cols-4 gap-2">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                    currentStep === step.number
                      ? "border-[#006b4f] bg-[#006b4f]/10"
                      : currentStep > step.number
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div
                    className={`rounded-full p-2 ${
                      currentStep === step.number
                        ? "bg-[#006b4f] text-white"
                        : currentStep > step.number
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : currentStep === step.number && isProcessing ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <step.icon className="h-4 w-4" />
                    )}
                  </div>
                  <p
                    className={`font-['Inter'] text-xs text-center font-semibold ${
                      currentStep >= step.number
                        ? "text-[#006b4f]"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Terminal Logs */}
            <Card className="bg-[#1b1b1b] border-2 border-[#006b4f]/20">
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <p className="font-['Inter'] text-xs text-gray-400 ml-2">
                    EAS SDK Terminal - Prefeitura de Campos Verdes
                  </p>
                </div>
                <div className="bg-black rounded p-4 h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-[#006b4f] scrollbar-track-gray-800">
                  {processLogs.length === 0 ? (
                    <p className="font-mono text-xs text-green-400">
                      Aguardando início do processo...
                    </p>
                  ) : (
                    <div className="space-y-1">
                      {processLogs.map((log, idx) => (
                        <p
                          key={idx}
                          className="font-mono text-xs text-green-400 animate-in fade-in duration-200"
                        >
                          {log}
                        </p>
                      ))}
                      {isProcessing && (
                        <p className="font-mono text-xs text-green-400 animate-pulse">
                          ▋
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card>

            {/* Success Card */}
            {generatedUID && (
              <Card className="p-6 bg-gradient-to-br from-green-50 to-[#006b4f]/10 border-2 border-green-500 animate-in slide-in-from-bottom-5 duration-500">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 text-white p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-['Montserrat'] text-lg font-bold text-[#1b1b1b] mb-2">
                      Atestado de Origem Emitido com Sucesso!
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="font-['Inter'] text-sm font-semibold text-gray-700">
                          UID do Atestado:
                        </p>
                        <code className="font-mono text-xs bg-white px-3 py-1 rounded border border-[#006b4f]">
                          {generatedUID}
                        </code>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-['Inter'] text-sm font-semibold text-gray-700">
                          Batch ID:
                        </p>
                        <span className="font-['Inter'] text-sm text-gray-600">
                          {formData.batchId}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-['Inter'] text-sm font-semibold text-gray-700">
                          Attester:
                        </p>
                        <code className="font-mono text-xs text-gray-600">
                          0xGovt...AE4C170eD35f4Cf77797
                        </code>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-['Inter'] text-sm font-semibold text-gray-700">
                          Schema:
                        </p>
                        <Badge className="bg-[#014733] text-white">
                          PROVA DE ORIGEM
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            {currentStep === 0 && !isProcessing && (
              <>
                <Button variant="outline" onClick={resetDialog}>
                  Cancelar
                </Button>
                <Button
                  size="lg"
                  className="bg-[#006b4f] hover:bg-[#014733] text-white"
                  onClick={executeAttestationProcess}
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Iniciar Processo de Assinatura
                </Button>
              </>
            )}
            {isProcessing && (
              <div className="flex items-center gap-3 text-[#006b4f]">
                <Loader2 className="h-5 w-5 animate-spin" />
                <p className="font-['Inter'] text-sm font-semibold">
                  Processando transação on-chain...
                </p>
              </div>
            )}
            {currentStep === 4 && !isProcessing && (
              <Button
                size="lg"
                className="bg-[#006b4f] hover:bg-[#014733] text-white ml-auto"
                onClick={resetDialog}
              >
                <CheckCircle2 className="h-5 w-5 mr-2" />
                Concluir
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}