import {
  Shield,
  Vault,
  FileCheck2,
  FlaskConical,
  Coins,
  TrendingUp,
  Users,
  GraduationCap,
  Gem,
  Recycle,
  Building2,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
  DollarSign,
  Package,
  FileText,
  Award,
  Leaf,
  Target,
  BarChart3,
  Activity,
  Database,
  Heart
} from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface CoopDashboardProps {
  onNavigateToProjects?: () => void;
  onNavigateToEcosystem?: () => void;
  onNavigateToGovernance?: () => void;
}

export function CoopDashboard({
  onNavigateToProjects,
  onNavigateToEcosystem,
  onNavigateToGovernance
}: CoopDashboardProps = {}) {
  
  // Módulo I: Governança e Integridade Operacional
  const operationalMetrics = [
    {
      title: "Custódia Física (Underground Vault)",
      value: "12,450",
      unit: "quilates",
      aum: "R$ 2,8M",
      status: "Segregada e Auditada",
      icon: Vault,
      color: "#006b4f",
      description: "Volume total de esmeraldas sob custódia física segregada"
    },
    {
      title: "Prova de Origem (EAS #1)",
      value: "3,847",
      unit: "atestados",
      status: "100% Rastreável",
      icon: FileCheck2,
      color: "#014733",
      description: "Atestados de Origem emitidos com hash NFe vinculado"
    },
    {
      title: "SpectralHash (Raman)",
      value: "3,421",
      unit: "gêmeos digitais",
      status: "Certificação Científica",
      icon: FlaskConical,
      color: "#caa34b",
      description: "Esmeraldas com assinatura molecular (EAS #2) gerada"
    },
    {
      title: "Compliance Tributário (EAS #5)",
      value: "100%",
      unit: "conformidade",
      status: "CFEM/ISS Validado",
      icon: Coins,
      color: "#10b981",
      description: "Protocolo de pagamento verificado e on-chain"
    }
  ];

  // Módulo II: Desempenho Econômico e Financeiro
  const economicMetrics = [
    {
      title: "Valor Agregado (Beneficiamento)",
      current: "R$ 1,2M",
      target: "R$ 1,5M",
      percentage: 80,
      icon: Gem,
      items: [
        { label: "Joias e Biojoias", value: "R$ 680K" },
        { label: "Artesanato Mineral", value: "R$ 320K" },
        { label: "Lapidação Profissional", value: "R$ 200K" }
      ]
    },
    {
      title: "Receita por Taxas de Certificação",
      current: "R$ 14K",
      target: "R$ 20K",
      percentage: 70,
      icon: DollarSign,
      items: [
        { label: "Taxa de Custódia (0,5% AUM/ano)", value: "R$ 9K" },
        { label: "Taxa de Originação (1-2%)", value: "R$ 5K" }
      ]
    },
    {
      title: "Formalização via NFe",
      current: "94%",
      target: "100%",
      percentage: 94,
      icon: FileText,
      items: [
        { label: "Produção Formalizada", value: "3.847 lotes" },
        { label: "Informalidade Histórica Reduzida", value: "-85%" }
      ]
    }
  ];

  // Módulo III: Impacto Social (Lastro Social)
  const socialProjects = [
    {
      id: "maos-de-pedra",
      name: "Projeto Mãos de Pedra",
      icon: Users,
      color: "#014733",
      budget: "R$ 100.000",
      metrics: [
        { label: "Jovens Formados", value: "127", target: "200", unit: "capacitações" },
        { label: "Operadores Raman Certificados", value: "8", target: "15", unit: "técnicos" },
        { label: "Valorização +40%", value: "R$ 480K", target: "R$ 600K", unit: "agregado" }
      ],
      attestation: "EAS #B - Atestado de Competência Profissional",
      image: "https://images.unsplash.com/photo-1526907279934-3c9d2e53170f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1zdG9uZSUyMGZhY2V0aW5nJTIwbWFjaGluZSUyMGhhbmRzJTIwc3RvbmV8ZW58MXx8fHwxNzY0MDcwNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "mineracao-escolas",
      name: "Mineração nas Escolas",
      icon: GraduationCap,
      color: "#caa34b",
      budget: "R$ 140.000",
      metrics: [
        { label: "Alunos Alcançados", value: "450", target: "600", unit: "estudantes" },
        { label: "Kits Educativos", value: "12", target: "15", unit: "escolas" },
        { label: "Pipeline de Técnicos", value: "85", target: "120", unit: "futuros profissionais" }
      ],
      attestation: "EAS Schema - Atestado de Impacto Educacional",
      image: "https://images.unsplash.com/photo-1705727210721-961cc64a6895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBzY2llbmNlJTIwbGFifGVufDF8fHx8MTc2NDA2ODczN3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "verdejar",
      name: "Projeto VERDEJAR",
      icon: Gem,
      color: "#006b4f",
      budget: "R$ 100.000",
      metrics: [
        { label: "Adolescentes Capacitados", value: "143", target: "200", unit: "jovens" },
        { label: "Faturamento para Equipamentos", value: "5%", target: "5%", unit: "destinado" },
        { label: "Oficinas Familiares Abertas", value: "18", target: "30", unit: "negócios" }
      ],
      attestation: "EAS #B - Certificação em Artesanato Mineral",
      image: "https://images.unsplash.com/photo-1624588057318-5f1b2eb81012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwamV3ZWxyeSUyMG1ha2luZyUyMGdlbXN0b25lc3xlbnwxfHx8fDE3NjQwNjg1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: "regeneracao",
      name: "Regeneração Ambiental",
      icon: Recycle,
      color: "#10b981",
      budget: "Contínuo",
      metrics: [
        { label: "Talco Xisto Processado", value: "2.4", target: "5.0", unit: "toneladas/mês" },
        { label: "Tijolos Ecológicos", value: "8.500", target: "15.000", unit: "unidades" },
        { label: "Adubo Mineral", value: "1.2", target: "2.5", unit: "toneladas" }
      ],
      attestation: "EAS #A - Atestado de Reciclagem e Economia Circular",
      image: "https://images.unsplash.com/photo-1647969476632-17261bc91afa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1pbmluZyUyMGVudmlyb25tZW50fGVufDF8fHx8MTc2NDA2ODA4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f0fdf4] to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#e5e7eb]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#014733] via-[#006b4f] to-[#014733]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center space-y-6"
          >
            <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 px-4 py-2">
              <Building2 className="h-4 w-4 mr-2" />
              CNPJ: 34.926.901/0001-20
            </Badge>

            <h1 className="font-['Montserrat'] text-4xl lg:text-6xl text-white">
              Dashboard COOPESMERALDA
            </h1>
            
            <p className="font-['Inter'] text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              <strong>Oráculo Operacional e Custodiante</strong> do Protocolo GEMLAB
            </p>

            <p className="font-['Inter'] text-lg text-white/80 max-w-3xl mx-auto">
              Garantindo a <strong className="text-[#caa34b]">integridade física e fiscal</strong> do ativo mineral 
              e monitorando o <strong className="text-[#caa34b]">desempenho econômico e social</strong> do ecossistema.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg"
                className="bg-white text-[#006b4f] hover:bg-gray-100 shadow-xl"
                onClick={onNavigateToEcosystem}
              >
                Ver Ecossistema Completo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
                onClick={onNavigateToGovernance}
              >
                Modelo de Governança
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Módulo I: Governança e Integridade Operacional */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#006b4f] text-[#006b4f]">
                <Shield className="h-4 w-4 mr-2" />
                Módulo I: Oráculo Operacional
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Governança e Integridade Operacional
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Atestando o fato físico e fiscal da esmeralda • Prova de Origem (EAS #1) e Compliance Total
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {operationalMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full border-2 hover:shadow-xl transition-all duration-300" style={{ borderColor: `${metric.color}30` }}>
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${metric.color}15` }}>
                          <metric.icon className="h-7 w-7" style={{ color: metric.color }} />
                        </div>
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      </div>
                      
                      <div>
                        <h3 className="font-['Inter'] text-sm text-gray-500 mb-2">
                          {metric.title}
                        </h3>
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="font-['Montserrat'] text-3xl" style={{ color: metric.color }}>
                            {metric.value}
                          </span>
                          <span className="font-['Inter'] text-sm text-gray-500">
                            {metric.unit}
                          </span>
                        </div>
                        {metric.aum && (
                          <p className="font-['Inter'] text-sm text-gray-600 mb-2">
                            AUM: {metric.aum}
                          </p>
                        )}
                        <Badge variant="outline" style={{ borderColor: metric.color, color: metric.color }}>
                          {metric.status}
                        </Badge>
                      </div>

                      <p className="font-['Inter'] text-xs text-gray-500 leading-relaxed">
                        {metric.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Detalhamento do Processo */}
            <Card className="p-8 lg:p-10 border-2 border-[#006b4f]/30 bg-gradient-to-br from-white to-[#f0fdf4]">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-['Montserrat'] text-2xl text-[#1b1b1b] mb-3">
                      Fluxo de Validação On-Chain
                    </h3>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed">
                      A COOPESMERALDA atua como <strong className="text-[#006b4f]">ponto focal de confiança</strong>, 
                      validando cada etapa do ciclo de vida da esmeralda através de atestados criptográficos.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { step: "1", label: "Extração e Custódia", detail: "Underground Vault segregado" },
                      { step: "2", label: "Emissão NFe", detail: "Hash ancorado on-chain (EAS #1)" },
                      { step: "3", label: "Certificação Raman", detail: "SpectralHash gerado (EAS #2)" },
                      { step: "4", label: "Protocolo CFEM/ISS", detail: "Compliance tributário (EAS #5)" },
                      { step: "5", label: "Auditoria Pública", detail: "100% transparente via blockchain" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[#006b4f]/20">
                        <div className="w-8 h-8 rounded-full bg-[#006b4f] flex items-center justify-center flex-shrink-0">
                          <span className="font-['Inter'] text-sm text-white font-bold">{item.step}</span>
                        </div>
                        <div>
                          <div className="font-['Inter'] font-semibold text-[#1b1b1b]">{item.label}</div>
                          <div className="font-['Inter'] text-sm text-gray-600">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-['Montserrat'] text-2xl text-[#1b1b1b] mb-3">
                      Responsabilidades do Oráculo
                    </h3>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed mb-4">
                      Como <strong className="text-[#014733]">Custodiante e Único Emissor de NFe</strong>, 
                      garantimos a blindagem jurídica e a validade do RWA.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Vault, label: "Custódia Física", value: "Segregada" },
                      { icon: FileCheck2, label: "Prova de Origem", value: "EAS #1" },
                      { icon: FlaskConical, label: "Certificação", value: "SpectralHash" },
                      { icon: Coins, label: "Fiscal", value: "CFEM/ISS" },
                      { icon: Shield, label: "Segurança", value: "Auditada" },
                      { icon: Database, label: "On-Chain", value: "100%" }
                    ].map((item, idx) => (
                      <Card key={idx} className="p-4 text-center border-2 border-gray-100 hover:border-[#006b4f]/30 transition-colors">
                        <item.icon className="h-8 w-8 text-[#006b4f] mx-auto mb-2" />
                        <div className="font-['Inter'] text-xs text-gray-500 mb-1">{item.label}</div>
                        <div className="font-['Inter'] text-sm font-bold text-[#1b1b1b]">{item.value}</div>
                      </Card>
                    ))}
                  </div>

                  <div className="p-5 bg-gradient-to-r from-[#006b4f]/10 to-[#014733]/10 rounded-xl border border-[#006b4f]/20">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-[#006b4f] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-['Inter'] font-semibold text-[#1b1b1b] mb-1">
                          Crítico para Validade do Token
                        </div>
                        <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                          Se o EAS #5 (Protocolo de Pagamento CFEM/ISS) falhar, o token é invalidado automaticamente. 
                          A COOPESMERALDA monitora e garante esse compliance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulo II: Desempenho Econômico */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#caa34b] text-[#caa34b]">
                <TrendingUp className="h-4 w-4 mr-2" />
                Módulo II: Desempenho Econômico
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Saúde Financeira e Cadeia de Valor
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Monitoramento da geração de valor agregado, receitas por taxas e formalização via NFe
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {economicMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full border-2 border-gray-200 hover:border-[#caa34b] transition-all duration-300 hover:shadow-xl">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-xl bg-[#caa34b]/10 flex items-center justify-center">
                          <metric.icon className="h-7 w-7 text-[#caa34b]" />
                        </div>
                        <Badge className="bg-[#caa34b]/10 text-[#caa34b] border border-[#caa34b]/20">
                          {metric.percentage}%
                        </Badge>
                      </div>

                      <div>
                        <h3 className="font-['Inter'] text-lg text-[#1b1b1b] mb-4">
                          {metric.title}
                        </h3>

                        <div className="mb-4">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="font-['Montserrat'] text-3xl text-[#caa34b]">
                              {metric.current}
                            </span>
                            <span className="font-['Inter'] text-sm text-gray-500">
                              / {metric.target}
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#caa34b] to-[#006b4f] rounded-full transition-all duration-500"
                              style={{ width: `${metric.percentage}%` }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          {metric.items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <span className="font-['Inter'] text-sm text-gray-600">{item.label}</span>
                              <span className="font-['Inter'] text-sm font-semibold text-[#1b1b1b]">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Destaque: Formalização */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="p-8 lg:p-10 border-2 border-[#caa34b]/30 bg-gradient-to-br from-white to-[#caa34b]/5">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#caa34b]/10 flex items-center justify-center">
                      <FileText className="h-8 w-8 text-[#caa34b]" />
                    </div>
                    <h3 className="font-['Montserrat'] text-2xl text-[#1b1b1b]">
                      COOPESMERALDA: Único Emissor de NFe
                    </h3>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed">
                      A cooperativa é o <strong className="text-[#006b4f]">único emissor de Nota Fiscal eletrônica</strong> no 
                      Protocolo GEMLAB, essencial para a rastreabilidade e blindagem jurídica do ativo.
                    </p>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                      <span className="font-['Inter'] text-sm text-gray-600">
                        Redução de <strong>85% na informalidade histórica</strong> do setor
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-6 text-center border-2 border-[#006b4f]/30 bg-white">
                      <Package className="h-10 w-10 text-[#006b4f] mx-auto mb-3" />
                      <div className="font-['Montserrat'] text-3xl text-[#006b4f] mb-1">3.847</div>
                      <div className="font-['Inter'] text-xs text-gray-600">Lotes Formalizados</div>
                    </Card>
                    <Card className="p-6 text-center border-2 border-[#caa34b]/30 bg-white">
                      <Activity className="h-10 w-10 text-[#caa34b] mx-auto mb-3" />
                      <div className="font-['Montserrat'] text-3xl text-[#caa34b] mb-1">94%</div>
                      <div className="font-['Inter'] text-xs text-gray-600">Taxa de Compliance</div>
                    </Card>
                    <Card className="p-6 text-center border-2 border-[#014733]/30 bg-white">
                      <BarChart3 className="h-10 w-10 text-[#014733] mx-auto mb-3" />
                      <div className="font-['Montserrat'] text-3xl text-[#014733] mb-1">R$ 2,8M</div>
                      <div className="font-['Inter'] text-xs text-gray-600">AUM Total</div>
                    </Card>
                    <Card className="p-6 text-center border-2 border-[#10b981]/30 bg-white">
                      <TrendingUp className="h-10 w-10 text-[#10b981] mx-auto mb-3" />
                      <div className="font-['Montserrat'] text-3xl text-[#10b981] mb-1">+156%</div>
                      <div className="font-['Inter'] text-xs text-gray-600">Crescimento Anual</div>
                    </Card>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Módulo III: Impacto Social (Lastro Social) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#10b981] text-[#10b981]">
                <Heart className="h-4 w-4 mr-2" />
                Módulo III: Lastro Social
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Governança Regenerativa e Impacto Social
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Demonstrando a alocação de recursos em projetos que mitigam Risco ESG e criam valor social duradouro
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {socialProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 group">
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback 
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b]/90 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 rounded-xl backdrop-blur-md border-2 border-white/30 flex items-center justify-center" 
                             style={{ backgroundColor: `${project.color}90` }}>
                          <project.icon className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/95 backdrop-blur-md border-none" style={{ color: project.color }}>
                          {project.budget}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-5">
                      <div>
                        <h3 className="font-['Montserrat'] text-xl text-[#1b1b1b] mb-2">
                          {project.name}
                        </h3>
                        <Badge variant="outline" style={{ borderColor: project.color, color: project.color }}>
                          <Award className="h-3 w-3 mr-1" />
                          {project.attestation}
                        </Badge>
                      </div>

                      {/* Metrics */}
                      <div className="space-y-3">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-['Inter'] text-sm text-gray-600">{metric.label}</span>
                              <div className="flex items-baseline gap-2">
                                <span className="font-['Montserrat'] text-lg font-bold" style={{ color: project.color }}>
                                  {metric.value}
                                </span>
                                <span className="font-['Inter'] text-xs text-gray-500">/ {metric.target}</span>
                              </div>
                            </div>
                            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full transition-all duration-500"
                                style={{ 
                                  width: `${(parseFloat(metric.value) / parseFloat(metric.target)) * 100}%`,
                                  backgroundColor: project.color
                                }}
                              />
                            </div>
                            <p className="font-['Inter'] text-xs text-gray-500">{metric.unit}</p>
                          </div>
                        ))}
                      </div>

                      {/* Target indicator */}
                      <div className="pt-3 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <span className="font-['Inter'] text-xs text-gray-500">Status Geral</span>
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4" style={{ color: project.color }} />
                            <span className="font-['Inter'] text-sm font-semibold" style={{ color: project.color }}>
                              Em Progresso
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="p-8 lg:p-10 border-2 border-[#10b981]/30 bg-gradient-to-br from-white to-[#10b981]/5">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#10b981] to-[#006b4f] flex items-center justify-center mx-auto">
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#1b1b1b]">
                    Investimento Social Total: R$ 340.000
                  </h3>
                  <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    O <strong className="text-[#006b4f]">Lastro Social</strong> do RWA é financiado pelo{" "}
                    <strong className="text-[#014733]">Regime Fiscal Automatizado</strong> (recuperação de CFEM/ISS) 
                    e pelo premium de valorização dos tokens, criando um ciclo regenerativo onde o lucro do mineral 
                    retorna para a formação de jovens e regeneração ambiental.
                  </p>

                  <div className="grid sm:grid-cols-4 gap-4 pt-6">
                    <Card className="p-4 border-2 border-[#014733]/30">
                      <Users className="h-8 w-8 text-[#014733] mx-auto mb-2" />
                      <div className="font-['Montserrat'] text-2xl text-[#014733]">720+</div>
                      <div className="font-['Inter'] text-xs text-gray-600">Beneficiários Diretos</div>
                    </Card>
                    <Card className="p-4 border-2 border-[#006b4f]/30">
                      <Award className="h-8 w-8 text-[#006b4f] mx-auto mb-2" />
                      <div className="font-['Montserrat'] text-2xl text-[#006b4f]">3 ODS</div>
                      <div className="font-['Inter'] text-xs text-gray-600">ONU Atendidos</div>
                    </Card>
                    <Card className="p-4 border-2 border-[#caa34b]/30">
                      <Recycle className="h-8 w-8 text-[#caa34b] mx-auto mb-2" />
                      <div className="font-['Montserrat'] text-2xl text-[#caa34b]">2.4t</div>
                      <div className="font-['Inter'] text-xs text-gray-600">Rejeito Processado</div>
                    </Card>
                    <Card className="p-4 border-2 border-[#10b981]/30">
                      <Leaf className="h-8 w-8 text-[#10b981] mx-auto mb-2" />
                      <div className="font-['Montserrat'] text-2xl text-[#10b981]">100%</div>
                      <div className="font-['Inter'] text-xs text-gray-600">Rastreável On-Chain</div>
                    </Card>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analogia Final */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f0fdf4] to-white border-t border-[#e5e7eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 border-2 border-[#006b4f]/30 bg-gradient-to-br from-white via-[#f0fdf4] to-white shadow-2xl">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#006b4f] to-[#014733] flex items-center justify-center mx-auto">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-['Montserrat'] text-2xl lg:text-3xl text-[#1b1b1b]">
                  O Painel de Controle do Avião de Carga
                </h3>
                <p className="font-['Inter'] text-lg text-gray-700 leading-relaxed">
                  O <strong className="text-[#006b4f]">Dashboard da COOPESMERALDA</strong> funciona como o painel de um 
                  avião de carga aérea de alto valor. Ele não apenas mostra a{" "}
                  <strong className="text-[#014733]">localização da carga</strong> (Custódia/EAS #1) e se ela está 
                  liberada para decolar (Prova Tributária/EAS #5), mas também monitora o{" "}
                  <strong className="text-[#caa34b]">consumo de combustível</strong> que está sendo reinvestido na 
                  manutenção da pista de pouso e na formação de novos pilotos (Projetos Sociais), garantindo que a 
                  operação seja <strong>legalmente blindada, segura e que gere benefícios permanentes</strong> para a 
                  região de Campos Verdes.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#006b4f] via-[#014733] to-[#1b1b1b] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Montserrat'] text-3xl lg:text-5xl mb-6">
                Transparência Total, Confiança Verificável
              </h2>
              <p className="font-['Inter'] text-lg lg:text-xl opacity-90 leading-relaxed">
                O Dashboard COOPESMERALDA é a prova viva de que o <strong>Lastro Social</strong> e a{" "}
                <strong>Integridade Operacional</strong> do Protocolo GEMLAB são auditáveis, rastreáveis e 
                ancorados no <strong>Direito Tributário e no Código Criptográfico</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg"
                className="bg-white text-[#006b4f] hover:bg-gray-100 shadow-xl text-lg px-8 py-6"
                onClick={onNavigateToProjects}
              >
                Ver Projetos de Impacto
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                onClick={onNavigateToEcosystem}
              >
                Explorar Ecossistema
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}