import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  FileText,
  Upload,
  Microscope,
  Fingerprint,
  Award,
  Send,
  Clock,
  CheckCircle2,
  AlertCircle,
  Eye,
  Home,
  ShoppingBag,
  Mountain,
  Shield,
} from "lucide-react";
import { CertificationWizard } from "./CertificationWizard";
import { PageHeader } from "../navigation/PageHeader";
import { QuickActions } from "../navigation/QuickActions";
import { SpectralOrb } from "../icons/SpectralOrb";

interface GemologistDashboardProps {
  onNavigateToHome?: () => void;
  onNavigateToRegistry?: () => void;
  onNavigateToMiner?: () => void;
  onNavigateToAdmin?: () => void;
}

export function GemologistDashboard({
  onNavigateToHome,
  onNavigateToRegistry,
  onNavigateToMiner,
  onNavigateToAdmin,
}: GemologistDashboardProps = {}) {
  const [activeTab, setActiveTab] = useState("pending");
  const [showWizard, setShowWizard] = useState(false);

  const pendingAnalyses = [
    {
      id: "BATCH-2024-089",
      stoneRef: "CV-GO-2024-1248",
      receivedDate: "2024-11-14",
      weight: "3.85 ct",
      origin: "Campos Verdes - Setor A3",
      priority: "high",
      daysWaiting: 2,
    },
    {
      id: "BATCH-2024-088",
      stoneRef: "CV-GO-2024-1247",
      receivedDate: "2024-11-13",
      weight: "2.42 ct",
      origin: "Campos Verdes - Setor B1",
      priority: "medium",
      daysWaiting: 3,
    },
    {
      id: "BATCH-2024-087",
      stoneRef: "CV-GO-2024-1246",
      receivedDate: "2024-11-12",
      weight: "5.12 ct",
      origin: "Campos Verdes - Setor A3",
      priority: "medium",
      daysWaiting: 4,
    },
  ];

  const recentAnalyses = [
    {
      id: "GEM-2024-1247",
      stoneRef: "CV-GO-2024-1245",
      completedDate: "2024-11-15",
      weight: "3.42 ct",
      status: "Certificado",
      spectralHash: "0x7f3a92c4",
      txHash: "0x9b2f..3c8d",
    },
    {
      id: "GEM-2024-1246",
      stoneRef: "CV-GO-2024-1244",
      completedDate: "2024-11-14",
      weight: "2.18 ct",
      status: "Tokenizado",
      spectralHash: "0x4b2d81f3",
      txHash: "0x7a4e..5f2b",
    },
    {
      id: "GEM-2024-1245",
      stoneRef: "CV-GO-2024-1243",
      completedDate: "2024-11-13",
      weight: "4.67 ct",
      status: "Certificado",
      spectralHash: "0x9c5e73a1",
      txHash: "0x3d8b..9a1f",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <PageHeader
        title="Dashboard Gemológico"
        subtitle="Lab Certificado #LAB-042 - Dr. Renato Silva"
        icon={Microscope}
        badge={{ text: "Gemólogo Certificado", variant: "success" }}
        actions={
          <Button
            className="bg-[#006b4f] text-white hover:bg-[#014733]"
            onClick={() => setShowWizard(true)}
          >
            <Upload className="h-4 w-4 mr-2" />
            Nova Análise
          </Button>
        }
        breadcrumbs={[
          { label: "Início", onClick: onNavigateToHome },
          { label: "Gemólogo", active: true },
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        {(onNavigateToRegistry || onNavigateToMiner || onNavigateToAdmin) && (
          <div className="mb-8">
            <QuickActions
              title="Navegação Rápida"
              actions={[
                ...(onNavigateToRegistry
                  ? [
                      {
                        label: "Ver Registry",
                        description: "Consultar certificados públicos",
                        icon: ShoppingBag,
                        onClick: onNavigateToRegistry,
                        variant: "default" as const,
                      },
                    ]
                  : []),
                ...(onNavigateToMiner
                  ? [
                      {
                        label: "Painel Garimpeiro",
                        description: "Simular e enviar lotes",
                        icon: Mountain,
                        onClick: onNavigateToMiner,
                        variant: "default" as const,
                      },
                    ]
                  : []),
                ...(onNavigateToAdmin
                  ? [
                      {
                        label: "Painel Admin",
                        description: "Gerenciar sistema",
                        icon: Shield,
                        onClick: onNavigateToAdmin,
                        variant: "default" as const,
                      },
                    ]
                  : []),
              ]}
            />
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-2 border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center"
              >
                <Clock className="h-6 w-6 text-[#006b4f]" />
              </div>
              <Badge className="bg-orange-100 text-orange-700">
                Pendentes
              </Badge>
            </div>
            <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b] mb-1">
              3
            </div>
            <div className="font-['Inter'] text-sm text-gray-600">
              Análises aguardando
            </div>
          </Card>

          <Card className="p-6 border-2 border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-12 h-12 rounded-xl bg-[#caa34b]/10 flex items-center justify-center"
              >
                <Microscope className="h-6 w-6 text-[#caa34b]" />
              </div>
              <Badge className="bg-blue-100 text-blue-700">
                Em Análise
              </Badge>
            </div>
            <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b] mb-1">
              5
            </div>
            <div className="font-['Inter'] text-sm text-gray-600">
              Em processamento
            </div>
          </Card>

          <Card className="p-6 border-2 border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center"
              >
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <Badge className="bg-green-100 text-green-700">
                Este Mês
              </Badge>
            </div>
            <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b] mb-1">
              42
            </div>
            <div className="font-['Inter'] text-sm text-gray-600">
              Certificados emitidos
            </div>
          </Card>

          <Card className="p-6 border-2 border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-12 h-12 rounded-xl bg-[#014733]/10 flex items-center justify-center"
              >
                <Award className="h-6 w-6 text-[#014733]" />
              </div>
              <Badge className="bg-purple-100 text-purple-700">
                Total
              </Badge>
            </div>
            <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b] mb-1">
              328
            </div>
            <div className="font-['Inter'] text-sm text-gray-600">
              Certificações completas
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="pending">
              Análises Pendentes ({pendingAnalyses.length})
            </TabsTrigger>
            <TabsTrigger value="history">
              Histórico
            </TabsTrigger>
            <TabsTrigger value="workflow">
              Novo Workflow
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <div className="space-y-4">
              {pendingAnalyses.map((analysis) => (
                <Card
                  key={analysis.id}
                  className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                          {analysis.stoneRef}
                        </h3>
                        <Badge
                          className={
                            analysis.priority === "high"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }
                        >
                          {analysis.priority === "high"
                            ? "Alta Prioridade"
                            : "Prioridade Média"}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                            Batch ID
                          </div>
                          <div className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                            {analysis.id}
                          </div>
                        </div>
                        <div>
                          <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                            Peso Inicial
                          </div>
                          <div className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                            {analysis.weight}
                          </div>
                        </div>
                        <div>
                          <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                            Origem
                          </div>
                          <div className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                            {analysis.origin}
                          </div>
                        </div>
                        <div>
                          <div className="font-['Inter'] text-xs text-gray-500 mb-1">
                            Aguardando
                          </div>
                          <div className="font-['Inter'] text-sm font-medium text-orange-600">
                            {analysis.daysWaiting} dias
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#006b4f] text-[#006b4f]"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Ver Detalhes
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#006b4f] text-white hover:bg-[#014733]"
                      >
                        Iniciar Análise
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card className="border-2 border-[#e5e7eb]">
              <div className="p-6">
                <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-6">
                  Análises Recentes
                </h3>
                <div className="space-y-4">
                  {recentAnalyses.map((cert) => (
                    <div
                      key={cert.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            cert.status === "Tokenizado"
                              ? "bg-purple-100"
                              : "bg-green-100"
                          }`}
                        >
                          {cert.status === "Tokenizado" ? (
                            <Fingerprint className="h-5 w-5 text-purple-600" />
                          ) : (
                            <Award className="h-5 w-5 text-green-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-['Inter'] font-semibold text-[#1b1b1b]">
                              {cert.id}
                            </span>
                            <Badge
                              className={
                                cert.status === "Tokenizado"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-green-100 text-green-700"
                              }
                            >
                              {cert.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Ref: </span>
                              <span className="text-[#1b1b1b]">
                                {cert.stoneRef}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-500">Peso: </span>
                              <span className="text-[#1b1b1b]">
                                {cert.weight}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-500">Hash: </span>
                              <div className="inline-flex items-center gap-2">
                                <SpectralOrb size={16} animated={false} />
                                <code className="text-[#006b4f] font-mono text-xs">
                                  {cert.spectralHash}
                                </code>
                              </div>
                            </div>
                            <div>
                              <span className="text-gray-500">TX: </span>
                              <code className="text-[#006b4f] font-mono text-xs">
                                {cert.txHash}
                              </code>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="workflow">
            <Card className="p-8 border-2 border-[#e5e7eb]">
              <div className="max-w-3xl mx-auto text-center">
                <div
                  className="w-16 h-16 rounded-2xl bg-[#006b4f]/10 flex items-center justify-center mx-auto mb-6"
                >
                  <FileText className="h-8 w-8 text-[#006b4f]" />
                </div>
                <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-4">
                  Workflow de Certificação em 6 Etapas
                </h3>
                <p className="font-['Inter'] text-gray-600 mb-8">
                  Processo completo de análise gemológica, upload multimídia,
                  geração de spectralHash e tokenização
                </p>
                <Button
                  size="lg"
                  className="bg-[#006b4f] text-white hover:bg-[#014733]"
                >
                  Iniciar Nova Certificação
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Certification Wizard Modal */}
      {showWizard && <CertificationWizard onClose={() => setShowWizard(false)} />}
    </div>
  );
}