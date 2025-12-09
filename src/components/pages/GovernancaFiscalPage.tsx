import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Shield, TrendingUp, DollarSign, FileCheck, Building2, Lock, AlertTriangle, CheckCircle2 } from "lucide-react";

interface GovernancaFiscalPageProps {
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

export function GovernancaFiscalPage({
  onNavigateToInstitutional,
  onNavigateToEcosystem,
  onNavigateToProjects,
  onNavigateToRegistry,
  onNavigateToRastreabilidade,
  onNavigateToGovernancaFiscal,
  onNavigateToSustentabilidade,
  onNavigateToEquipeParceiros,
  onNavigateBack,
}: GovernancaFiscalPageProps = {}) {
  
  const fiscalImpactMetrics = [
    {
      icon: DollarSign,
      value: "R$ 1,6M",
      label: "Potencial Anti-Evasão Anual",
      description: "Estimativa de recuperação fiscal com rastreabilidade total"
    },
    {
      icon: TrendingUp,
      value: "12%",
      label: "Aumento Receita Municipal",
      description: "Crescimento projetado em arrecadação CFEM"
    },
    {
      icon: FileCheck,
      value: "100%",
      label: "Conformidade Tributária",
      description: "Compliance total com legislação ANM e Receita Federal"
    },
  ];

  const oracleFiscalFeatures = [
    {
      title: "Certificação de Origem",
      description: "Prefeitura atesta digitalmente que a esmeralda foi extraída legalmente em Campos Verdes, via smart contract.",
      icon: Building2,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Validação de CFEM",
      description: "Verificação automática do pagamento da Compensação Financeira pela Exploração Mineral antes da certificação.",
      icon: Shield,
      color: "text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "Rastreio de Cadeia",
      description: "Registro on-chain de cada etapa: extração → certificação → tokenização → comercialização.",
      icon: Lock,
      color: "text-purple-600 dark:text-purple-400"
    },
  ];

  const complianceChecklist = [
    {
      item: "Cadastro ANM (Agência Nacional de Mineração)",
      status: "Validado",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    },
    {
      item: "Pagamento CFEM (Compensação Financeira)",
      status: "Validado",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    },
    {
      item: "Nota Fiscal Eletrônica (NFe)",
      status: "Validado",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    },
    {
      item: "Certificado de Origem Municipal",
      status: "Validado",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    },
  ];

  const problemSolutionData = {
    problem: {
      title: "Problema Sistêmico",
      points: [
        "Evasão fiscal crônica no setor de gemas preciosas",
        "Subfaturamento e sonegação de CFEM",
        "Comercialização irregular sem rastreabilidade",
        "Dificuldade de fiscalização manual pela ANM"
      ]
    },
    solution: {
      title: "Solução GemLab",
      points: [
        "Prefeitura como Oracle Fiscal: validação digital obrigatória",
        "Smart Contracts bloqueiam certificação sem CFEM paga",
        "Rastreabilidade end-to-end impede comércio ilegal",
        "Auditoria pública via blockchain reduz custos de fiscalização"
      ]
    }
  };

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
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-0">
              Pilar 2: Governança Fiscal
            </Badge>
            <h1 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Prefeitura como Oracle Fiscal
            </h1>
            <p className="font-['Inter'] text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sistema de validação descentralizado que transforma a Prefeitura de Campos Verdes no guardião digital da conformidade fiscal, combatendo R$ 1,6M em evasão anual.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Impact Metrics */}
        <FadeInWhenVisible delay={0.2}>
          <section className="mb-20">
            <div className="grid md:grid-cols-3 gap-6">
              {fiscalImpactMetrics.map((metric, index) => (
                <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300 dark:bg-gray-900 dark:border-gray-800">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <metric.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-['Montserrat'] text-3xl font-bold text-gray-900 dark:text-white mb-1">
                          {metric.value}
                        </div>
                        <div className="font-['Inter'] font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          {metric.label}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {metric.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Oracle Fiscal Features */}
        <FadeInWhenVisible delay={0.3}>
          <section className="mb-20">
            <h2 className="font-['Montserrat'] text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Como Funciona o Oracle Fiscal
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {oracleFiscalFeatures.map((feature, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 dark:bg-gray-900 dark:border-gray-800">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4`}>
                      <feature.icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="font-['Inter'] text-xl text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Problem vs Solution */}
        <FadeInWhenVisible delay={0.4}>
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem Card */}
              <Card className="border-2 border-red-200 dark:border-red-800 dark:bg-gray-900">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
                    <CardTitle className="font-['Montserrat'] text-2xl text-gray-900 dark:text-white">
                      {problemSolutionData.problem.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {problemSolutionData.problem.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Solution Card */}
              <Card className="border-2 border-emerald-200 dark:border-emerald-800 dark:bg-gray-900">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    <CardTitle className="font-['Montserrat'] text-2xl text-gray-900 dark:text-white">
                      {problemSolutionData.solution.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {problemSolutionData.solution.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Compliance Checklist */}
        <FadeInWhenVisible delay={0.5}>
          <section className="mb-20">
            <Card className="border-2 border-emerald-200 dark:border-emerald-800 dark:bg-gray-900">
              <CardHeader className="text-center">
                <CardTitle className="font-['Montserrat'] text-3xl text-gray-900 dark:text-white mb-4">
                  Checklist de Compliance Automático
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Validação on-chain de todos os requisitos legais antes da certificação
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {complianceChecklist.map((check, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-['Inter'] text-gray-900 dark:text-white font-medium">
                        {check.item}
                      </span>
                      <Badge className={`${check.color} border-0`}>
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        {check.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </FadeInWhenVisible>

        {/* CTA Section */}
        <FadeInWhenVisible delay={0.6}>
          <section className="text-center">
            <Card className="border-2 border-blue-500 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
              <CardContent className="py-12">
                <h3 className="font-['Montserrat'] text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Conheça o Ecossistema Completo
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Explore como o Oracle Fiscal se integra com cooperativas, governança e sustentabilidade
                </p>
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={onNavigateToEcosystem}
                >
                  Explorar Ecossistema
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
