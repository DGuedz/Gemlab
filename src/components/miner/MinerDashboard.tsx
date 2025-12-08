import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Progress } from "../ui/progress";
import {
  Mountain,
  Upload,
  Calculator,
  TrendingUp,
  Package,
  MapPin,
  Calendar,
  DollarSign,
  FileText,
  CheckCircle2,
  Send,
  Loader2,
} from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";

export function MinerDashboard() {
  const [activeTab, setActiveTab] = useState<"simulator" | "batches">("simulator");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    weight: "",
    photos: [] as File[],
    location: "",
    description: "",
  });

  const minerStats = {
    totalBatches: 23,
    totalWeight: "142.5 kg",
    averageValue: "R$ 12.400",
    certified: 89,
  };

  const recentBatches = [
    {
      id: "BATCH-2024-089",
      date: "2024-11-14",
      weight: "8.2 kg",
      stones: 42,
      status: "Em Análise",
      estimatedValue: "R$ 18.500",
    },
    {
      id: "BATCH-2024-088",
      date: "2024-11-10",
      weight: "6.5 kg",
      stones: 35,
      status: "Certificado",
      estimatedValue: "R$ 14.200",
    },
    {
      id: "BATCH-2024-087",
      date: "2024-11-05",
      weight: "11.3 kg",
      stones: 58,
      status: "Vendido",
      estimatedValue: "R$ 24.800",
    },
  ];

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setSimulationResult({
        estimatedStones: Math.floor(Math.random() * 30) + 20,
        estimatedValueMin: 8000 + Math.random() * 5000,
        estimatedValueMax: 15000 + Math.random() * 10000,
        qualityDistribution: {
          premium: 15,
          standard: 60,
          basic: 25,
        },
        recommendations: [
          "Peso adequado para lote comercial",
          "Localização com histórico de qualidade premium",
          "Recomendamos análise gemológica completa",
        ],
      });
      setIsSimulating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] mb-1">
                Painel do Garimpeiro
              </h1>
              <p className="font-['Inter'] text-sm text-gray-600">
                Garimpeiro Formalizado #MINER-042 - João Silva
              </p>
            </div>
            <Button className="bg-[#006b4f] text-white hover:bg-[#014733]">
              <Send className="h-4 w-4 mr-2" />
              Enviar Novo Lote
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-2 border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                <Package className="h-6 w-6 text-[#006b4f]" />
              </div>
              <Badge className="bg-blue-100 text-blue-700">Total</Badge>
            </div>
            <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b] mb-1">
              {minerStats.totalBatches}
            </div>
            <div className="font-['Inter'] text-sm text-gray-600">Lotes Enviados</div>
          </Card>

          <Card className="p-6 border-2 border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#caa34b]/10 flex items-center justify-center">
                <Mountain className="h-6 w-6 text-[#caa34b]" />
              </div>
              <Badge className="bg-purple-100 text-purple-700">Peso</Badge>
            </div>
            <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b] mb-1">
              {minerStats.totalWeight}
            </div>
            <div className="font-['Inter'] text-sm text-gray-600">Peso Total Processado</div>
          </Card>

          <Card className="p-6 border-2 border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <Badge className="bg-green-100 text-green-700">Média</Badge>
            </div>
            <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b] mb-1">
              {minerStats.averageValue}
            </div>
            <div className="font-['Inter'] text-sm text-gray-600">Valor Médio/Lote</div>
          </Card>

          <Card className="p-6 border-2 border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#014733]/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-[#014733]" />
              </div>
              <Badge className="bg-orange-100 text-orange-700">Taxa</Badge>
            </div>
            <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b] mb-1">
              {minerStats.certified}%
            </div>
            <div className="font-['Inter'] text-sm text-gray-600">Pedras Certificadas</div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={activeTab === "simulator" ? "default" : "outline"}
            onClick={() => setActiveTab("simulator")}
            className={activeTab === "simulator" ? "bg-[#006b4f] text-white" : ""}
          >
            <Calculator className="h-4 w-4 mr-2" />
            Simulador
          </Button>
          <Button
            variant={activeTab === "batches" ? "default" : "outline"}
            onClick={() => setActiveTab("batches")}
            className={activeTab === "batches" ? "bg-[#006b4f] text-white" : ""}
          >
            <Package className="h-4 w-4 mr-2" />
            Meus Lotes
          </Button>
        </div>

        {/* Simulator Tab */}
        {activeTab === "simulator" && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-8 border-2 border-[#e5e7eb]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-[#006b4f]" />
                </div>
                <div>
                  <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b]">
                    Simulador de Lote
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    Estime o valor do seu próximo lote
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="weight">Peso Estimado (kg) *</Label>
                  <Input
                    id="weight"
                    type="number"
                    step="0.1"
                    placeholder="Ex: 5.5"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Localização da Extração *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="location"
                      placeholder="Ex: Setor A3, Campos Verdes"
                      className="pl-10"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição do Material</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva características visuais do material (cor predominante, transparência, etc.)"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <Card className="p-4 border-2 border-dashed border-[#e5e7eb] hover:border-[#006b4f] transition-colors">
                  <div className="text-center">
                    <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                    <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-1 text-sm">
                      Fotos do Lote (Opcional)
                    </h4>
                    <p className="font-['Inter'] text-xs text-gray-600 mb-3">
                      Adicione fotos para uma estimativa mais precisa
                    </p>
                    <Button size="sm" variant="outline" className="border-[#006b4f] text-[#006b4f]">
                      Selecionar Fotos
                    </Button>
                  </div>
                </Card>

                <Button
                  onClick={handleSimulate}
                  disabled={isSimulating || !formData.weight || !formData.location}
                  className="w-full bg-[#006b4f] text-white hover:bg-[#014733]"
                >
                  {isSimulating ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Simular Lote
                    </>
                  )}
                </Button>
              </div>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {!simulationResult ? (
                <Card className="p-12 border-2 border-dashed border-[#e5e7eb] text-center">
                  <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h4 className="font-['Inter'] font-semibold text-gray-400 mb-2">
                    Aguardando Simulação
                  </h4>
                  <p className="font-['Inter'] text-sm text-gray-500">
                    Preencha os dados e clique em "Simular Lote" para ver a estimativa
                  </p>
                </Card>
              ) : (
                <>
                  <Card className="p-6 bg-gradient-to-r from-[#006b4f] to-[#014733] text-white">
                    <h3 className="font-['Inter'] text-lg font-semibold mb-4">
                      Estimativa de Valor
                    </h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-['Inter'] text-4xl font-bold">
                        R$ {(simulationResult.estimatedValueMin / 1000).toFixed(1)}k
                      </span>
                      <span className="font-['Inter'] text-xl text-gray-200">
                        - {(simulationResult.estimatedValueMax / 1000).toFixed(1)}k
                      </span>
                    </div>
                    <p className="font-['Inter'] text-sm text-gray-200">
                      Faixa estimada baseada em lotes similares
                    </p>
                  </Card>

                  <Card className="p-6 border-2 border-[#e5e7eb]">
                    <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-4">
                      Projeção de Pedras
                    </h4>
                    <div className="flex items-center gap-4 mb-2">
                      <Mountain className="h-8 w-8 text-[#006b4f]" />
                      <div>
                        <div className="font-['Inter'] text-3xl font-bold text-[#1b1b1b]">
                          {simulationResult.estimatedStones}
                        </div>
                        <div className="font-['Inter'] text-sm text-gray-600">
                          Pedras estimadas após triagem
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-2 border-[#e5e7eb]">
                    <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-4">
                      Distribuição de Qualidade
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-['Inter'] text-sm text-gray-600">Premium</span>
                          <span className="font-['Inter'] text-sm font-semibold text-[#caa34b]">
                            {simulationResult.qualityDistribution.premium}%
                          </span>
                        </div>
                        <Progress value={simulationResult.qualityDistribution.premium} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-['Inter'] text-sm text-gray-600">Standard</span>
                          <span className="font-['Inter'] text-sm font-semibold text-[#006b4f]">
                            {simulationResult.qualityDistribution.standard}%
                          </span>
                        </div>
                        <Progress value={simulationResult.qualityDistribution.standard} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-['Inter'] text-sm text-gray-600">Básico</span>
                          <span className="font-['Inter'] text-sm font-semibold text-gray-500">
                            {simulationResult.qualityDistribution.basic}%
                          </span>
                        </div>
                        <Progress value={simulationResult.qualityDistribution.basic} className="h-2" />
                      </div>
                    </div>
                  </Card>

                  <Alert className="bg-blue-50 border-blue-200">
                    <FileText className="h-4 w-4 text-blue-600" />
                    <AlertDescription>
                      <div className="font-['Inter'] font-semibold text-blue-900 mb-2">
                        Recomendações
                      </div>
                      <ul className="space-y-1">
                        {simulationResult.recommendations.map((rec: string, idx: number) => (
                          <li key={idx} className="font-['Inter'] text-sm text-blue-800">
                            • {rec}
                          </li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <Button className="w-full bg-green-600 text-white hover:bg-green-700">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Lote para Certificação
                  </Button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Batches Tab */}
        {activeTab === "batches" && (
          <div className="space-y-4">
            <Card className="p-6 border-2 border-[#e5e7eb]">
              <h3 className="font-['Inter'] text-lg font-semibold text-[#1b1b1b] mb-6">
                Lotes Recentes
              </h3>
              <div className="space-y-4">
                {recentBatches.map((batch) => (
                  <div
                    key={batch.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          batch.status === "Vendido"
                            ? "bg-green-100"
                            : batch.status === "Certificado"
                            ? "bg-blue-100"
                            : "bg-orange-100"
                        }`}
                      >
                        <Package
                          className={`h-6 w-6 ${
                            batch.status === "Vendido"
                              ? "text-green-600"
                              : batch.status === "Certificado"
                              ? "text-blue-600"
                              : "text-orange-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-['Inter'] font-semibold text-[#1b1b1b]">
                            {batch.id}
                          </span>
                          <Badge
                            className={
                              batch.status === "Vendido"
                                ? "bg-green-100 text-green-700"
                                : batch.status === "Certificado"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-orange-100 text-orange-700"
                            }
                          >
                            {batch.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Data: </span>
                            <span className="text-[#1b1b1b]">
                              {new Date(batch.date).toLocaleDateString("pt-BR")}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500">Peso: </span>
                            <span className="text-[#1b1b1b]">{batch.weight}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Pedras: </span>
                            <span className="text-[#1b1b1b]">{batch.stones}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Valor: </span>
                            <span className="text-[#006b4f] font-semibold">
                              {batch.estimatedValue}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
