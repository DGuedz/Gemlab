import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Microscope, Fingerprint, Shield, Database, Link2, CheckCircle2, ArrowRight } from "lucide-react";
import { SpectralHashViewer } from "../verification/SpectralHashViewer";
import { EASVerificationBadge } from "../verification/EASVerificationBadge";

interface RastreabilidadePageProps {
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

export function RastreabilidadePage({
  onNavigateToInstitutional,
  onNavigateToEcosystem,
  onNavigateToProjects,
  onNavigateToRegistry,
  onNavigateToRastreabilidade,
  onNavigateToGovernancaFiscal,
  onNavigateToSustentabilidade,
  onNavigateToEquipeParceiros,
  onNavigateBack,
}: RastreabilidadePageProps = {}) {
  
  const spectralHashFeatures = [
    {
      icon: Fingerprint,
      title: "Identidade Única",
      description: "Cada esmeralda possui uma assinatura espectroscópica única, gerada por análise Raman de 1.064nm, impossível de falsificar."
    },
    {
      icon: Database,
      title: "Armazenamento Immutável",
      description: "Hash criptográfico armazenado on-chain (Ethereum), garantindo permanência e resistência à censura."
    },
    {
      icon: Shield,
      title: "Verificação Instantânea",
      description: "Qualquer pessoa pode verificar a autenticidade da gema comparando o hash físico com o hash blockchain."
    },
  ];

  const nftBenefits = [
    {
      title: "Custódia Tokenizada",
      description: "NFT ERC-721 representa a propriedade legal da esmeralda certificada.",
      color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
    },
    {
      title: "Transferência Segura",
      description: "Smart contracts garantem transações sem intermediários, reduzindo custos em até 70%.",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    },
    {
      title: "Auditoria Pública",
      description: "Histórico completo de custódia registrado no blockchain, transparente para reguladores.",
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    },
  ];

  const easProtocol = {
    title: "Ethereum Attestation Service (EAS)",
    description: "Protocolo de atestação descentralizado que valida 3 provas críticas:",
    attestations: [
      {
        name: "Prova de Origem",
        validator: "Prefeitura de Campos Verdes (Oracle Fiscal)",
        status: "Validado",
        icon: Shield,
      },
      {
        name: "Prova de Ciência",
        validator: "SpectralHash + Análise Gemológica",
        status: "Validado",
        icon: Microscope,
      },
      {
        name: "Prova de Custódia",
        validator: "Smart Contract ERC-721",
        status: "Validado",
        icon: Link2,
      },
    ]
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
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 border-0">
              Pilar 1: Rastreabilidade
            </Badge>
            <h1 className="font-['Montserrat'] text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              SpectralHash: A Impressão Digital da Esmeralda
            </h1>
            <p className="font-['Inter'] text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tecnologia de rastreabilidade que combina espectroscopia Raman, blockchain Ethereum e atestações EAS para criar um sistema inviolável de certificação gemológica.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* SpectralHash Features */}
        <FadeInWhenVisible delay={0.2}>
          <section className="mb-20">
            <h2 className="font-['Montserrat'] text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Como Funciona o SpectralHash
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {spectralHashFeatures.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg dark:bg-gray-900 dark:border-gray-800">
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
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

        {/* SpectralHash Viewer Demo */}
        <FadeInWhenVisible delay={0.3}>
          <section className="mb-20">
            <Card className="border-2 border-emerald-200 dark:border-emerald-800 dark:bg-gray-900">
              <CardHeader className="text-center">
                <CardTitle className="font-['Montserrat'] text-2xl text-gray-900 dark:text-white">
                  Exemplo de SpectralHash Real
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Visualize a assinatura espectral de uma esmeralda certificada
                </p>
              </CardHeader>
              <CardContent>
                <SpectralHashViewer 
                  spectralHash="0x7f3a92c4b8e1d6f3a5c2e9b7d4f1a8c5e2b9f6d3a1c8e5b2f9d6a3c1e8b5f2d9"
                  ipfsCid="QmYwAPJzv5CZsnAzt8auVGnwxYM3YRLhP3Lw3WRqsxF8L8"
                  arweaveTxId="Xy9ZmN0a1B2c3D4e5F6g7H8i9J0k1L2m3N4o5P6q7R8s9T0"
                  certificationDate="07/12/2025"
                />
              </CardContent>
            </Card>
          </section>
        </FadeInWhenVisible>

        {/* NFT Tokenization */}
        <FadeInWhenVisible delay={0.4}>
          <section className="mb-20">
            <h2 className="font-['Montserrat'] text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Tokenização NFT: Custódia Digital
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {nftBenefits.map((benefit, index) => (
                <Card key={index} className={`${benefit.color} border-0`}>
                  <CardHeader>
                    <CardTitle className="font-['Inter'] text-lg">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm opacity-90">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </FadeInWhenVisible>

        {/* EAS Protocol */}
        <FadeInWhenVisible delay={0.5}>
          <section className="mb-20">
            <Card className="border-2 border-blue-200 dark:border-blue-800 dark:bg-gray-900">
              <CardHeader className="text-center">
                <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-0 mx-auto w-fit">
                  Protocolo EAS
                </Badge>
                <CardTitle className="font-['Montserrat'] text-3xl text-gray-900 dark:text-white mb-4">
                  {easProtocol.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  {easProtocol.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {easProtocol.attestations.map((attestation, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <attestation.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-['Inter'] font-semibold text-gray-900 dark:text-white">
                          {attestation.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {attestation.validator}
                        </p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-0">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        {attestation.status}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <EASVerificationBadge 
                    attestations={[
                      {
                        type: "origin",
                        status: "active",
                        attester: "Prefeitura de Campos Verdes",
                        timestamp: "2025-12-07T10:00:00Z",
                        txHash: "0xabc123...",
                        easUid: "0x1234567890abcdef"
                      },
                      {
                        type: "science",
                        status: "active",
                        attester: "GemLab Scientific",
                        timestamp: "2025-12-07T10:30:00Z",
                        txHash: "0xdef456...",
                        easUid: "0xfedcba0987654321"
                      },
                      {
                        type: "custody",
                        status: "active",
                        attester: "Smart Contract ERC-721",
                        timestamp: "2025-12-07T11:00:00Z",
                        txHash: "0x789xyz...",
                        easUid: "0x0123456789abcdef"
                      }
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </section>
        </FadeInWhenVisible>

        {/* CTA Section */}
        <FadeInWhenVisible delay={0.6}>
          <section className="text-center">
            <Card className="border-2 border-emerald-500 dark:border-emerald-700 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
              <CardContent className="py-12">
                <h3 className="font-['Montserrat'] text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Explore o Registro Público de Certificações
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  Acesse o registro completo de esmeraldas certificadas com SpectralHash e validação EAS
                </p>
                <Button 
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={onNavigateToRegistry}
                >
                  Acessar Registro
                  <ArrowRight className="h-4 w-4 ml-2" />
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