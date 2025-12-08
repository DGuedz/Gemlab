import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import {
  Calculator,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  DollarSign,
  Users,
  Calendar,
  ArrowRight,
  Download,
  Share2
} from "lucide-react";
import { motion } from "motion/react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";

export function ROICalculator() {
  // Estado dos inputs
  const [kgEsmeralda, setKgEsmeralda] = useState(10);
  const [mesesProjecao, setMesesProjecao] = useState(12);
  const [numeroCooperados, setNumeroCooperados] = useState(25);
  const [precoMedioKg, setPrecoMedioKg] = useState(8500);

  // Cálculos
  const calcularMetricas = () => {
    // Valores base
    const producaoMensal = kgEsmeralda;
    const producaoTotal = producaoMensal * mesesProjecao;
    
    // Cenário SEM GemLab (atravessadores pegam 70% do valor)
    const valorBrutoSemGemlab = producaoTotal * precoMedioKg;
    const descontoAtravessadores = valorBrutoSemGemlab * 0.70;
    const receitaSemGemlab = valorBrutoSemGemlab - descontoAtravessadores;
    const rendaPorCooperadoSemGemlab = receitaSemGemlab / numeroCooperados / mesesProjecao;

    // Cenário COM GemLab (venda direta, apenas 8% de taxas)
    const valorBrutoComGemlab = producaoTotal * precoMedioKg;
    const taxasGemlab = valorBrutoComGemlab * 0.08; // 8% (plataforma + certificação)
    const receitaComGemlab = valorBrutoComGemlab - taxasGemlab;
    const rendaPorCooperadoComGemlab = receitaComGemlab / numeroCooperados / mesesProjecao;

    // Ganho
    const ganhoAbsoluto = receitaComGemlab - receitaSemGemlab;
    const ganhoPercentual = ((receitaComGemlab / receitaSemGemlab - 1) * 100).toFixed(0);
    const ganhoPorCooperado = rendaPorCooperadoComGemlab - rendaPorCooperadoSemGemlab;

    // CFEM estimado (3% sobre receita bruta)
    const cfemEstimado = valorBrutoComGemlab * 0.03;

    return {
      producaoTotal,
      receitaSemGemlab,
      receitaComGemlab,
      ganhoAbsoluto,
      ganhoPercentual,
      rendaPorCooperadoSemGemlab,
      rendaPorCooperadoComGemlab,
      ganhoPorCooperado,
      cfemEstimado,
      descontoAtravessadores,
      taxasGemlab
    };
  };

  const metricas = calcularMetricas();

  // Dados para gráfico de evolução mensal
  const gerarDadosEvoluçãoMensal = () => {
    const dados = [];
    for (let i = 1; i <= mesesProjecao; i++) {
      const semGemlab = (metricas.receitaSemGemlab / mesesProjecao) * i;
      const comGemlab = (metricas.receitaComGemlab / mesesProjecao) * i;
      dados.push({
        mes: i,
        semGemlab: Math.round(semGemlab),
        comGemlab: Math.round(comGemlab),
        ganho: Math.round(comGemlab - semGemlab)
      });
    }
    return dados;
  };

  const dadosEvolucao = gerarDadosEvoluçãoMensal();

  // Dados para comparação de cenários
  const dadosComparacao = [
    {
      cenario: "Sem GemLab",
      receita: Math.round(metricas.receitaSemGemlab),
      perdas: Math.round(metricas.descontoAtravessadores)
    },
    {
      cenario: "Com GemLab",
      receita: Math.round(metricas.receitaComGemlab),
      perdas: Math.round(metricas.taxasGemlab)
    }
  ];

  const exportarRelatorio = () => {
    alert("Exportando relatório de simulação ROI...");
  };

  const compartilhar = () => {
    alert("Compartilhando calculadora com cooperativa...");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="font-['Montserrat'] text-[#1b1b1b] mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Calculadora ROI para Cooperativas
          </h1>
          <p className="text-[#1b1b1b]/70">
            Simule o retorno financeiro da sua cooperativa eliminando atravessadores com o Protocolo GemLab
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={compartilhar}
            variant="outline"
            className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white gap-2"
          >
            <Share2 className="h-4 w-4" />
            Compartilhar
          </Button>
          <Button 
            onClick={exportarRelatorio}
            className="bg-[#caa34b] hover:bg-[#caa34b]/90 text-white gap-2"
          >
            <Download className="h-4 w-4" />
            Exportar PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Painel de Inputs */}
        <Card className="lg:col-span-1 border-2 border-[#006b4f]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-[#006b4f]" />
              Dados da Cooperativa
            </CardTitle>
            <CardDescription>Insira as informações para calcular o ROI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Produção Mensal */}
            <div className="space-y-3">
              <Label htmlFor="kg-esmeralda" className="flex items-center justify-between">
                <span>Produção Mensal (kg)</span>
                <Badge variant="outline">{kgEsmeralda} kg</Badge>
              </Label>
              <Slider
                id="kg-esmeralda"
                min={1}
                max={100}
                step={1}
                value={[kgEsmeralda]}
                onValueChange={(value) => setKgEsmeralda(value[0])}
                className="w-full"
              />
            </div>

            {/* Número de Cooperados */}
            <div className="space-y-3">
              <Label htmlFor="cooperados" className="flex items-center justify-between">
                <span>Número de Cooperados</span>
                <Badge variant="outline">{numeroCooperados}</Badge>
              </Label>
              <Slider
                id="cooperados"
                min={5}
                max={200}
                step={5}
                value={[numeroCooperados]}
                onValueChange={(value) => setNumeroCooperados(value[0])}
                className="w-full"
              />
            </div>

            {/* Preço Médio por KG */}
            <div className="space-y-3">
              <Label htmlFor="preco-medio">Preço Médio/kg (R$)</Label>
              <Input
                id="preco-medio"
                type="number"
                value={precoMedioKg}
                onChange={(e) => setPrecoMedioKg(Number(e.target.value))}
                className="border-[#006b4f] focus:ring-[#006b4f]"
              />
              <p className="text-xs text-[#1b1b1b]/60">
                Média nacional: R$ 8.500/kg para esmeraldas certificadas
              </p>
            </div>

            {/* Período de Projeção */}
            <div className="space-y-3">
              <Label htmlFor="meses" className="flex items-center justify-between">
                <span>Período de Projeção</span>
                <Badge variant="outline">{mesesProjecao} meses</Badge>
              </Label>
              <Slider
                id="meses"
                min={3}
                max={36}
                step={3}
                value={[mesesProjecao]}
                onValueChange={(value) => setMesesProjecao(value[0])}
                className="w-full"
              />
            </div>

            <Separator />

            {/* Resumo Rápido */}
            <div className="space-y-2 p-4 bg-[#006b4f]/5 rounded-lg">
              <div className="flex justify-between text-sm">
                <span className="text-[#1b1b1b]/70">Produção Total:</span>
                <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>{metricas.producaoTotal.toFixed(1)} kg</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#1b1b1b]/70">Valor Bruto:</span>
                <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>
                  R$ {(metricas.producaoTotal * precoMedioKg).toLocaleString('pt-BR')}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#1b1b1b]/70">CFEM Estimado:</span>
                <span className="font-['Montserrat'] text-[#caa34b]" style={{ fontWeight: 600 }}>
                  R$ {metricas.cfemEstimado.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Painel de Resultados */}
        <div className="lg:col-span-2 space-y-6">
          {/* Cards de Métricas Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 border-[#006b4f] bg-gradient-to-br from-[#006b4f]/5 to-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-[#006b4f]" />
                    Ganho Total com GemLab
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-['Montserrat'] text-[#006b4f] mb-1" style={{ fontSize: '2rem', fontWeight: 700 }}>
                    R$ {metricas.ganhoAbsoluto.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </p>
                  <Badge className="bg-[#006b4f] text-white gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +{metricas.ganhoPercentual}% vs. atravessadores
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="border-2 border-[#caa34b] bg-gradient-to-br from-[#caa34b]/5 to-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#caa34b]" />
                    Renda/Cooperado com GemLab
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-['Montserrat'] text-[#caa34b] mb-1" style={{ fontSize: '2rem', fontWeight: 700 }}>
                    R$ {metricas.rendaPorCooperadoComGemlab.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}/mês
                  </p>
                  <p className="text-sm text-[#1b1b1b]/60">
                    +R$ {metricas.ganhoPorCooperado.toLocaleString('pt-BR', { maximumFractionDigits: 0 })} vs. modelo atual
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Comparação Cenários */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-[#006b4f]" />
                Comparação: Modelo Tradicional × GemLab
              </CardTitle>
              <CardDescription>
                Impacto dos atravessadores (desconto de 70%) vs. modelo direto GemLab (taxa de 8%)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dadosComparacao}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="cenario" stroke="#1b1b1b" />
                  <YAxis stroke="#1b1b1b" />
                  <Tooltip 
                    formatter={(value) => `R$ ${Number(value).toLocaleString('pt-BR')}`}
                  />
                  <Legend />
                  <Bar dataKey="receita" fill="#006b4f" name="Receita Líquida" />
                  <Bar dataKey="perdas" fill="#dc2626" name="Perdas/Taxas" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Evolução Mensal */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#caa34b]" />
                Projeção de Receita Acumulada ({mesesProjecao} meses)
              </CardTitle>
              <CardDescription>
                Evolução mensal comparando modelo com e sem GemLab
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={dadosEvolucao}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="mes" 
                    stroke="#1b1b1b"
                    label={{ value: 'Mês', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis stroke="#1b1b1b" />
                  <Tooltip 
                    formatter={(value) => `R$ ${Number(value).toLocaleString('pt-BR')}`}
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="semGemlab" 
                    stackId="1"
                    stroke="#dc2626" 
                    fill="#dc2626" 
                    fillOpacity={0.3}
                    name="Sem GemLab"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="comGemlab" 
                    stackId="2"
                    stroke="#006b4f" 
                    fill="#006b4f" 
                    fillOpacity={0.3}
                    name="Com GemLab"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Benchmark e Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-[#dc2626] border-2">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-[#dc2626]" />
                  Modelo com Atravessadores
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-[#1b1b1b]/70">Receita Bruta:</span>
                  <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>
                    R$ {(metricas.producaoTotal * precoMedioKg).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between text-[#dc2626]">
                  <span className="text-sm">Desconto Atravessadores (70%):</span>
                  <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>
                    -R$ {metricas.descontoAtravessadores.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm">Receita Líquida:</span>
                  <span className="font-['Montserrat']" style={{ fontWeight: 700 }}>
                    R$ {metricas.receitaSemGemlab.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Renda/Cooperado:</span>
                  <span className="font-['Montserrat']" style={{ fontWeight: 700 }}>
                    R$ {metricas.rendaPorCooperadoSemGemlab.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}/mês
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#006b4f] border-2">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#006b4f]" />
                  Modelo GemLab (Venda Direta)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-[#1b1b1b]/70">Receita Bruta:</span>
                  <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>
                    R$ {(metricas.producaoTotal * precoMedioKg).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between text-[#caa34b]">
                  <span className="text-sm">Taxas GemLab (8%):</span>
                  <span className="font-['Montserrat']" style={{ fontWeight: 600 }}>
                    -R$ {metricas.taxasGemlab.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm">Receita Líquida:</span>
                  <span className="font-['Montserrat'] text-[#006b4f]" style={{ fontWeight: 700 }}>
                    R$ {metricas.receitaComGemlab.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Renda/Cooperado:</span>
                  <span className="font-['Montserrat'] text-[#006b4f]" style={{ fontWeight: 700 }}>
                    R$ {metricas.rendaPorCooperadoComGemlab.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}/mês
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefícios Adicionais */}
          <Card className="border-[#caa34b] border-2 bg-gradient-to-br from-[#caa34b]/5 to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#caa34b]" />
                Benefícios Adicionais do Protocolo GemLab
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <DollarSign className="h-8 w-8 text-[#caa34b]" />
                  <p className="text-sm text-[#1b1b1b]/90" style={{ fontWeight: 600 }}>Transparência Fiscal</p>
                  <p className="text-xs text-[#1b1b1b]/60">
                    Conformidade 100% com ANM/Receita Federal, eliminando riscos fiscais
                  </p>
                </div>
                <div className="space-y-2">
                  <CheckCircle2 className="h-8 w-8 text-[#006b4f]" />
                  <p className="text-sm text-[#1b1b1b]/90" style={{ fontWeight: 600 }}>Certificação Científica</p>
                  <p className="text-xs text-[#1b1b1b]/60">
                    SpectralHash + EAS garante autenticidade e valorização das gemas
                  </p>
                </div>
                <div className="space-y-2">
                  <Users className="h-8 w-8 text-[#014733]" />
                  <p className="text-sm text-[#1b1b1b]/90" style={{ fontWeight: 600 }}>Acesso a Mercados Premium</p>
                  <p className="text-xs text-[#1b1b1b]/60">
                    Venda direta a joalherias e colecionadores sem intermediários
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
