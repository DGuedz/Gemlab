import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  Leaf, 
  Droplet, 
  Users, 
  DollarSign, 
  FileText,
  Download,
  AlertCircle,
  CheckCircle2,
  Zap
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";
import { motion } from "motion/react";

// Dados mockados para métricas ESG
const esgData = [
  { mes: "Jan", co2: 12.5, agua: 1200, familias: 45 },
  { mes: "Fev", co2: 10.2, agua: 1450, familias: 52 },
  { mes: "Mar", co2: 8.7, agua: 1680, familias: 58 },
  { mes: "Abr", co2: 7.1, agua: 1920, familias: 64 },
  { mes: "Mai", co2: 5.8, agua: 2150, familias: 71 },
  { mes: "Jun", co2: 4.2, agua: 2400, familias: 78 },
];

// Dados de arrecadação CFEM
const cfemData = [
  { trimestre: "Q1 2024", arrecadado: 145000, evitado: 420000 },
  { trimestre: "Q2 2024", arrecadado: 298000, evitado: 560000 },
  { trimestre: "Q3 2024", arrecadado: 412000, evitado: 720000 },
  { trimestre: "Q4 2024", arrecadado: 587000, evitado: 890000 },
];

// Distribuição de certificações
const certDistribution = [
  { name: "Esmeraldas Premium", value: 145, color: "#006b4f" },
  { name: "Esmeraldas Comerciais", value: 312, color: "#caa34b" },
  { name: "Gemas em Processo", value: 89, color: "#e5e7eb" },
  { name: "Aguardando Validação", value: 34, color: "#014733" },
];

// Evolução do volume de certificações
const volumeData = [
  { mes: "Jan", volume: 42, valor: 125000 },
  { mes: "Fev", volume: 58, valor: 187000 },
  { mes: "Mar", volume: 73, valor: 243000 },
  { mes: "Abr", volume: 91, valor: 312000 },
  { mes: "Mai", volume: 118, valor: 428000 },
  { mes: "Jun", volume: 145, valor: 587000 },
];

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  trend: "up" | "down";
  color: string;
}

const MetricCard = ({ title, value, change, icon, trend, color }: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="border-2 hover:shadow-lg transition-all">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm">{title}</CardTitle>
        <div className={`p-2 rounded-lg bg-${color}-100`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="font-['Montserrat'] text-[#1b1b1b]" style={{ fontSize: '2rem', fontWeight: 700 }}>{value}</span>
          <Badge variant={trend === "up" ? "default" : "destructive"} className="gap-1">
            {trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {change}
          </Badge>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

export function ImpactDashboard() {
  const [activeTab, setActiveTab] = useState("esg");

  const exportReport = (format: "pdf" | "excel") => {
    // Simula exportação de relatório
    alert(`Exportando relatório de impacto em formato ${format.toUpperCase()}...`);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="font-['Montserrat'] text-[#1b1b1b] mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Dashboard de Impacto Real-Time
          </h1>
          <p className="text-[#1b1b1b]/70">
            Monitoramento ao vivo de métricas ESG, KPIs fiscais e volume de certificações
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={() => exportReport("pdf")}
            className="bg-[#006b4f] hover:bg-[#014733] text-white gap-2"
          >
            <FileText className="h-4 w-4" />
            Exportar PDF
          </Button>
          <Button 
            onClick={() => exportReport("excel")}
            variant="outline"
            className="border-[#caa34b] text-[#caa34b] hover:bg-[#caa34b] hover:text-white gap-2"
          >
            <Download className="h-4 w-4" />
            Excel
          </Button>
        </div>
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          title="CFEM Arrecadado (2024)"
          value="R$ 1,44M"
          change="+304%"
          icon={<DollarSign className="h-4 w-4 text-[#006b4f]" />}
          trend="up"
          color="green"
        />
        <MetricCard
          title="Evasão Evitada"
          value="R$ 2,59M"
          change="+112%"
          icon={<AlertCircle className="h-4 w-4 text-[#caa34b]" />}
          trend="up"
          color="yellow"
        />
        <MetricCard
          title="CO₂ Reduzido (ton)"
          value="48.5t"
          change="-66%"
          icon={<Leaf className="h-4 w-4 text-[#006b4f]" />}
          trend="down"
          color="green"
        />
        <MetricCard
          title="Famílias Beneficiadas"
          value="368"
          change="+73%"
          icon={<Users className="h-4 w-4 text-[#014733]" />}
          trend="up"
          color="emerald"
        />
      </div>

      {/* Tabs de Visualizações */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[600px]">
          <TabsTrigger value="esg">Métricas ESG</TabsTrigger>
          <TabsTrigger value="fiscal">KPIs Fiscais</TabsTrigger>
          <TabsTrigger value="certificacoes">Certificações</TabsTrigger>
        </TabsList>

        {/* Tab ESG */}
        <TabsContent value="esg" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Emissões CO₂ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-[#006b4f]" />
                  Redução de Emissões CO₂
                </CardTitle>
                <CardDescription>Toneladas de CO₂ evitadas por mês</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={esgData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="mes" stroke="#1b1b1b" />
                    <YAxis stroke="#1b1b1b" />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="co2" 
                      stroke="#006b4f" 
                      fill="#006b4f" 
                      fillOpacity={0.3}
                      name="CO₂ (ton)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Água Reciclada */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplet className="h-5 w-5 text-[#006b4f]" />
                  Água Reciclada
                </CardTitle>
                <CardDescription>Litros de água reutilizada mensalmente</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={esgData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="mes" stroke="#1b1b1b" />
                    <YAxis stroke="#1b1b1b" />
                    <Tooltip />
                    <Bar dataKey="agua" fill="#006b4f" name="Água (L)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Famílias Beneficiadas */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#014733]" />
                  Impacto Social - Famílias Beneficiadas
                </CardTitle>
                <CardDescription>Evolução do número de famílias com renda impactada pelo protocolo</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={esgData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="mes" stroke="#1b1b1b" />
                    <YAxis stroke="#1b1b1b" />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="familias" 
                      stroke="#014733" 
                      strokeWidth={3}
                      name="Famílias"
                      dot={{ fill: "#014733", r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Resumo ESG */}
          <Card className="border-[#006b4f] border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#006b4f]" />
                Resumo de Impacto ESG
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-[#1b1b1b]/70">Redução Total CO₂</p>
                  <p className="font-['Montserrat']" style={{ fontSize: '1.5rem', fontWeight: 700 }}>48.5 ton</p>
                  <p className="text-xs text-[#006b4f]">Equivalente a 240 árvores plantadas</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[#1b1b1b]/70">Água Total Reciclada</p>
                  <p className="font-['Montserrat']" style={{ fontSize: '1.5rem', fontWeight: 700 }}>10.800 L</p>
                  <p className="text-xs text-[#006b4f]">Economia de 90% vs. mineração convencional</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-[#1b1b1b]/70">Renda Média Familiar</p>
                  <p className="font-['Montserrat']" style={{ fontSize: '1.5rem', fontWeight: 700 }}>+R$ 1.240/mês</p>
                  <p className="text-xs text-[#006b4f]">Aumento de 185% vs. garimpo tradicional</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Fiscal */}
        <TabsContent value="fiscal" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Arrecadação CFEM */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-[#caa34b]" />
                  Evolução Arrecadação CFEM vs. Evasão Evitada
                </CardTitle>
                <CardDescription>Comparativo trimestral de arrecadação real e evasão fiscal combatida</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={cfemData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="trimestre" stroke="#1b1b1b" />
                    <YAxis stroke="#1b1b1b" />
                    <Tooltip 
                      formatter={(value) => `R$ ${Number(value).toLocaleString('pt-BR')}`}
                    />
                    <Legend />
                    <Bar dataKey="arrecadado" fill="#006b4f" name="CFEM Arrecadado" />
                    <Bar dataKey="evitado" fill="#caa34b" name="Evasão Evitada" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* KPIs Fiscais */}
            <Card className="lg:col-span-2 border-[#caa34b] border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#caa34b]" />
                  KPIs de Combate à Evasão Fiscal
                </CardTitle>
                <CardDescription>
                  Validação da tese: R$ 1,6M de evasão sistêmica anual em Campos Verdes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-[#006b4f]/10 rounded-lg">
                      <div>
                        <p className="text-sm text-[#1b1b1b]/70">Total Arrecadado 2024</p>
                        <p className="font-['Montserrat']" style={{ fontSize: '1.75rem', fontWeight: 700 }}>R$ 1.442.000</p>
                      </div>
                      <CheckCircle2 className="h-8 w-8 text-[#006b4f]" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[#caa34b]/10 rounded-lg">
                      <div>
                        <p className="text-sm text-[#1b1b1b]/70">Evasão Total Evitada</p>
                        <p className="font-['Montserrat']" style={{ fontSize: '1.75rem', fontWeight: 700 }}>R$ 2.590.000</p>
                      </div>
                      <AlertCircle className="h-8 w-8 text-[#caa34b]" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Taxa de Conformidade</span>
                        <span className="font-['Montserrat']" style={{ fontWeight: 700 }}>97.8%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#006b4f] h-2 rounded-full" style={{ width: '97.8%' }}></div>
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Redução de Subfaturamento</span>
                        <span className="font-['Montserrat']" style={{ fontWeight: 700 }}>89.2%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#caa34b] h-2 rounded-full" style={{ width: '89.2%' }}></div>
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Oracles Ativos (Prefeitura)</span>
                        <span className="font-['Montserrat']" style={{ fontWeight: 700 }}>100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#014733] h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <p className="text-xs text-[#1b1b1b]/60 mt-3">
                      * Dados validados pelo Oracle Fiscal da Prefeitura de Campos Verdes via protocolo EAS
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab Certificações */}
        <TabsContent value="certificacoes" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Distribuição de Certificações */}
            <Card>
              <CardHeader>
                <CardTitle>Distribuição por Categoria</CardTitle>
                <CardDescription>Total de 580 certificações emitidas</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={certDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {certDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Volume e Valor */}
            <Card>
              <CardHeader>
                <CardTitle>Volume × Valor de Certificações</CardTitle>
                <CardDescription>Evolução mensal de quantidade e valor total</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={volumeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="mes" stroke="#1b1b1b" />
                    <YAxis yAxisId="left" stroke="#1b1b1b" />
                    <YAxis yAxisId="right" orientation="right" stroke="#caa34b" />
                    <Tooltip 
                      formatter={(value, name) => {
                        if (name === "Valor (R$)") return `R$ ${Number(value).toLocaleString('pt-BR')}`;
                        return value;
                      }}
                    />
                    <Legend />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="volume" 
                      stroke="#006b4f" 
                      strokeWidth={2}
                      name="Quantidade"
                      dot={{ fill: "#006b4f", r: 5 }}
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="valor" 
                      stroke="#caa34b" 
                      strokeWidth={2}
                      name="Valor (R$)"
                      dot={{ fill: "#caa34b", r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
