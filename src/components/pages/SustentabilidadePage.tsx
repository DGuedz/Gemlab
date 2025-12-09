import { Leaf, Recycle, Users, TrendingUp, Factory, Droplet, TreePine, Heart, Sprout, Target, Award, Globe, ArrowRight, CheckCircle2, XCircle, Sparkles, TrendingDown, Scale, AlertTriangle } from "lucide-react";
import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import talcoXistoImage from "figma:asset/89d51aab0c6dca8b0c419206800b21db0e5bf224.png";

interface SustentabilidadePageProps {
  onNavigateToInstitutional?: () => void;
  onNavigateToEcosystem?: () => void;
  onNavigateToProjects?: () => void;
  onNavigateToRegistry?: () => void;
  onNavigateToRastreabilidade?: () => void;
  onNavigateToGovernancaFiscal?: () => void;
  onNavigateToSustentabilidade?: () => void;
  onNavigateToEquipeParceiros?: () => void;
  onNavigateBack?: () => void;
}

export function SustentabilidadePage({
  onNavigateToInstitutional,
  onNavigateToEcosystem,
  onNavigateToProjects,
  onNavigateToRegistry,
  onNavigateToRastreabilidade,
  onNavigateToGovernancaFiscal,
  onNavigateToSustentabilidade,
  onNavigateToEquipeParceiros,
  onNavigateBack,
}: SustentabilidadePageProps = {}) {
  
  const esgMetrics = [
    {
      category: "Environmental",
      icon: TreePine,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900",
      metrics: [
        { label: "Rejeito Mineral Reutilizado", value: "87%" },
        { label: "Redução de Resíduos", value: "2.400 ton/ano" },
        { label: "Água Reciclada", value: "95%" },
      ]
    },
    {
      category: "Social",
      icon: Users,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900",
      metrics: [
        { label: "Garimpeiros Formalizados", value: "340+" },
        { label: "Famílias Beneficiadas", value: "1.200+" },
        { label: "Renda Média Aumentada", value: "+45%" },
      ]
    },
    {
      category: "Governance",
      icon: Heart,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900",
      metrics: [
        { label: "Transparência Blockchain", value: "100%" },
        { label: "Auditoria Pública", value: "Sempre" },
        { label: "Compliance ANM", value: "Total" },
      ]
    },
  ];

  const talcoXistoEconomy = {
    title: "Economia Circular: Talco Xisto",
    description: "Transformando resíduos minerais em remineralizadores de solo para agricultura sustentável",
    process: [
      {
        step: "Extração de Esmeraldas",
        description: "Mineração gera talco xisto como rejeito mineral",
        icon: Factory,
      },
      {
        step: "Processamento Circular",
        description: "Talco xisto é beneficiado para uso agrícola",
        icon: Recycle,
      },
      {
        step: "Comercialização Sustentável",
        description: "Venda para agricultura e recuperação de solos degradados",
        icon: TrendingUp,
      },
      {
        step: "Impacto Ambiental Positivo",
        description: "87% dos resíduos retornam ao ciclo produtivo",
        icon: Leaf,
      },
    ],
    benefits: [
      "Redução de 2.400 toneladas/ano de resíduos",
      "Geração de receita adicional para cooperativas",
      "Criação de 45 empregos indiretos na cadeia circular",
      "Alinhamento com Agenda 2030 da ONU (ODS 12 e 15)"
    ]
  };

  const socialTransformation = {
    title: "Remodelação Social: Da Informalidade à Prosperidade",
    challenges: [
      {
        title: "Antes do GemLab",
        icon: "WARNING",
        points: [
          "Garimpeiros informais sem direitos trabalhistas",
          "Exploração por atravessadores (markup de 300%+)",
          "Ausência de assistência técnica e certificação",
          "Acesso zero a financiamento e mercado formal"
        ]
      },
      {
        title: "Depois do GemLab",
        icon: "SUCCESS",
        points: [
          "340+ garimpeiros formalizados via COOPESMERALDA",
          "Acesso direto a mercado com certificação gemológica",
          "Aumento de 45% na renda média familiar",
          "Capacitação técnica contínua e linha de crédito"
        ]
      }
    ]
  };

  const sdgAlignment = [
    { number: 8, title: "Trabalho Decente e Crescimento Econômico", color: "bg-red-500" },
    { number: 9, title: "Indústria, Inovação e Infraestrutura", color: "bg-orange-500" },
    { number: 12, title: "Consumo e Produção Responsáveis", color: "bg-yellow-500" },
    { number: 15, title: "Vida Terrestre", color: "bg-green-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <HeaderComponent 
        onNavigateToInstitutional={onNavigateToInstitutional}
        onNavigateToEcosystem={onNavigateToEcosystem}
        onNavigateToProjects={onNavigateToProjects}
        onNavigateToRegistry={onNavigateToRegistry}
        onNavigateToRastreabilidade={onNavigateToRastreabilidade}
        onNavigateToGovernancaFiscal={onNavigateToGovernancaFiscal}
        onNavigateToSustentabilidade={onNavigateToSustentabilidade}
        onNavigateToEquipeParceiros={onNavigateToEquipeParceiros}
        onNavigateBack={onNavigateBack}
      />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero Section */}
        <FadeInWhenVisible>
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-0 animate-pulse text-sm">
              <Sparkles className="h-3 w-3 inline mr-1" />
              Pilar 3: Sustentabilidade
            </Badge>
            <h1 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
              Impacto ESG & Economia Circular
            </h1>
            <p className="font-['Inter'] text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
              Modelo de mineração 4.0 que combina tecnologia blockchain com responsabilidade socioambiental, transformando resíduos em valor e garimpeiros em empreendedores.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* ESG Metrics Grid - Enhanced */}
        <FadeInWhenVisible delay={0.2}>
          <section className="mb-16 sm:mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
              <Target className="h-6 w-6 sm:h-8 sm:w-8 text-green-600 dark:text-green-400" />
              <h2 className="font-['Montserrat'] text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center">
                Métricas ESG em Tempo Real
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {esgMetrics.map((category, index) => (
                <Card key={index} className="border-2 hover:shadow-2xl hover:scale-105 transition-all duration-300 dark:bg-gray-900 dark:border-gray-800 relative overflow-hidden group">
                  {/* Glassmorphism overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <CardHeader className="pb-3 sm:pb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${category.bgColor} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300 mx-auto sm:mx-0`}>
                      <category.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${category.color}`} />
                    </div>
                    <CardTitle className="font-['Montserrat'] text-lg sm:text-xl text-gray-900 dark:text-white flex items-center gap-2 justify-center sm:justify-start">
                      {category.category}
                      <Award className={`h-4 w-4 ${category.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 sm:space-y-4">
                      {category.metrics.map((metric, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-tight">{metric.label}</span>
                            <span className={`font-['Inter'] font-bold ${category.color} text-base sm:text-lg whitespace-nowrap`}>{metric.value}</span>
                          </div>
                          {metric.value.includes('%') && (
                            <Progress 
                              value={parseInt(metric.value)} 
                              className="h-2"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Separator with gradient */}
        <div className="mb-16 sm:mb-20">
          <Separator className="bg-gradient-to-r from-transparent via-green-500 to-transparent h-0.5" />
        </div>

        {/* Talco Xisto Economy - Enhanced */}
        <FadeInWhenVisible delay={0.3}>
          <section className="mb-16 sm:mb-20">
            <Card className="border-2 border-green-200 dark:border-green-800 dark:bg-gray-900 overflow-hidden shadow-2xl">
              {/* Hero Image - Pilha de Xisto (Passivo Ambiental) */}
              <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden group">
                <img 
                  src={talcoXistoImage}
                  alt="Pilhas de Rejeito Mineral (Talco Xisto) da Mineração de Esmeraldas em Campos Verdes - GO | Passivo Ambiental transformado em Remineralizador de Solo através da Economia Circular do Protocolo GemLab"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/10" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <Badge className="mb-2 sm:mb-3 bg-green-600/90 text-white border-0 backdrop-blur-sm inline-flex items-center gap-1 text-xs sm:text-sm">
                    <ArrowRight className="h-3 w-3" />
                    Passivo Ambiental → Economia Circular
                  </Badge>
                  <h2 className="font-['Montserrat'] text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <Sprout className="h-8 w-8 sm:h-10 sm:w-10" />
                    <span className="leading-tight">{talcoXistoEconomy.title}</span>
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-100 max-w-2xl leading-relaxed">
                    {talcoXistoEconomy.description}
                  </p>
                </div>
              </div>
              
              <CardContent className="pt-6 sm:pt-8 px-4 sm:px-6">
                {/* Process Flow - Timeline Style */}
                <div className="relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 mb-6 sm:mb-8">
                    {talcoXistoEconomy.process.map((item, index) => (
                      <div key={index} className="relative">
                        <div className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300">
                          <div className="relative">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-600 dark:from-green-600 dark:to-green-800 rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-green-500/50 transition-shadow duration-300">
                              <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {index + 1}
                            </div>
                          </div>
                          <h3 className="font-['Inter'] text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                            {item.step}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        {index < talcoXistoEconomy.process.length - 1 && (
                          <div className="hidden lg:flex absolute top-8 left-full w-full items-center justify-center -ml-2">
                            <ArrowRight className="h-6 w-6 text-green-400 dark:text-green-600 animate-pulse" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6 sm:my-8 bg-green-200 dark:bg-green-800" />

                {/* Benefits List - Enhanced */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800/50 rounded-xl p-4 sm:p-6 border-2 border-green-200 dark:border-green-800">
                  <h4 className="font-['Inter'] text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    Benefícios Mensuráveis:
                  </h4>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {talcoXistoEconomy.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 group hover:translate-x-1 transition-transform duration-200">
                        <Leaf className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </FadeInWhenVisible>

        {/* Separator with gradient */}
        <div className="mb-16 sm:mb-20">
          <Separator className="bg-gradient-to-r from-transparent via-blue-500 to-transparent h-0.5" />
        </div>

        {/* Social Transformation - Enhanced */}
        <FadeInWhenVisible delay={0.4}>
          <section className="mb-16 sm:mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
              <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" />
              <h2 className="font-['Montserrat'] text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center leading-tight">
                {socialTransformation.title}
              </h2>
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {socialTransformation.challenges.map((phase, index) => (
                <Card key={index} className={`border-2 ${index === 0 ? 'border-orange-200 dark:border-orange-800 hover:border-orange-400' : 'border-emerald-200 dark:border-emerald-800 hover:border-emerald-400'} dark:bg-gray-900 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}>
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${index === 0 ? 'bg-orange-100 dark:bg-orange-900/20' : 'bg-emerald-100 dark:bg-emerald-900/20'} rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500`} />
                  
                  <CardHeader className="relative pb-3 sm:pb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 ${index === 0 ? 'bg-orange-100 dark:bg-orange-900' : 'bg-emerald-100 dark:bg-emerald-900'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        {index === 0 ? <XCircle className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 dark:text-orange-400" /> : <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600 dark:text-emerald-400" />}
                      </div>
                      <CardTitle className="font-['Montserrat'] text-lg sm:text-xl text-gray-900 dark:text-white leading-tight">
                        {phase.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative">
                    <ul className="space-y-3">
                      {phase.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:translate-x-1 transition-transform duration-200">
                          {index === 0 ? (
                            <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                          ) : (
                            <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                          )}
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Separator with gradient */}
        <div className="mb-16 sm:mb-20">
          <Separator className="bg-gradient-to-r from-transparent via-purple-500 to-transparent h-0.5" />
        </div>

        {/* SDG Alignment - Enhanced */}
        <FadeInWhenVisible delay={0.5}>
          <section className="mb-16 sm:mb-20">
            <Card className="border-2 border-blue-200 dark:border-blue-800 dark:bg-gray-900 shadow-2xl">
              <CardHeader className="text-center px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 dark:text-blue-400 animate-pulse" />
                  <CardTitle className="font-['Montserrat'] text-2xl sm:text-3xl text-gray-900 dark:text-white leading-tight">
                    Alinhamento com ODS da ONU
                  </CardTitle>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  GemLab contribui diretamente para os Objetivos de Desenvolvimento Sustentável
                </p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                  {sdgAlignment.map((sdg, index) => (
                    <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 ${sdg.color} rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-2xl flex-shrink-0 shadow-lg group-hover:rotate-6 transition-transform duration-300`}>
                        {sdg.number}
                      </div>
                      <div className="flex items-start sm:items-center gap-2 flex-1 min-w-0">
                        <span className="font-['Inter'] text-xs sm:text-sm lg:text-base font-semibold text-gray-900 dark:text-white leading-tight">
                          {sdg.title}
                        </span>
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </FadeInWhenVisible>

        {/* CTA Section - Enhanced */}
        <FadeInWhenVisible delay={0.6}>
          <section className="text-center">
            <Card className="border-2 border-green-500 dark:border-green-700 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 shadow-2xl relative overflow-hidden">
              {/* Animated background decoration */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent)]" />
              
              <CardContent className="py-8 sm:py-12 px-4 sm:px-6 relative">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center animate-pulse">
                    <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="font-['Montserrat'] text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Conheça os Projetos Sociais
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Explore as iniciativas de impacto social e os parceiros do ecossistema GemLab
                </p>
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-500/50 transition-all duration-300 group w-full sm:w-auto"
                  onClick={onNavigateToProjects}
                >
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </section>
        </FadeInWhenVisible>
      </main>

      <Footer />
    </div>
  );
}