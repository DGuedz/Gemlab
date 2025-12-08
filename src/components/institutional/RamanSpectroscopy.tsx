import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Fingerprint,
  Sparkles,
  Zap,
  Eye,
  Shield,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function RamanSpectroscopy() {
  const applications = [
    {
      icon: Eye,
      title: "Identificação de Esmeraldas",
      description:
        "Diferencia esmeraldas genuínas de imitações e materiais sintéticos através da análise molecular.",
    },
    {
      icon: Shield,
      title: "Análise de Tratamentos",
      description:
        "Detecta alterações para melhorar cor ou aparência, como tratamentos térmicos.",
    },
    {
      icon: Sparkles,
      title: "Identificação de Inclusões",
      description:
        "Identifica inclusões fluidas, sólidas e gasosas, quantificando fases voláteis (CO₂, N₂, CH₄).",
    },
    {
      icon: Fingerprint,
      title: "Verificação de Polimorfos",
      description:
        "Diferencia minerais com mesma fórmula química mas estruturas cristalinas diferentes.",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Interação Laser",
      description:
        "Um laser de baixa potência interage com a estrutura molecular da pedra, sem danificá-la.",
      icon: Zap,
    },
    {
      step: "2",
      title: "Espalhamento Raman",
      description:
        "A luz espalhada contém informações sobre as vibrações da rede cristalina do material.",
      icon: Sparkles,
    },
    {
      step: "3",
      title: "Análise Espectral",
      description:
        "O espectrômetro analisa a luz espalhada e gera um espectro único, como uma impressão digital molecular.",
      icon: Eye,
    },
    {
      step: "4",
      title: "SpectralHash SHA-256",
      description:
        "O GEMLAB processa o espectro bruto e gera um hash criptográfico único, ancorado no NFT.",
      icon: Fingerprint,
    },
  ];

  const advantages = [
    "Não destrutivo - ideal para esmeraldas valiosas",
    "Não requer preparação da amostra",
    "Funciona em pedras montadas em joias",
    "Análise em minutos",
    "Identidade permanente e verificável",
    "Impossível de falsificar ou duplicar",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-[#caa34b] text-white">
            Tecnologia Científica
          </Badge>
          <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
            Espectrometria Raman: A Impressão Digital das Esmeraldas
          </h2>
          <p className="font-['Inter'] text-lg text-gray-600">
            Tecnologia de ponta para identificação molecular não destrutiva,
            gerando assinatura única impossível de falsificar
          </p>
        </div>

        {/* Hero Image - Laboratory Equipment */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#e5e7eb] group/labimage cursor-pointer">
          <div className="relative h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1728771227328-7cc2a0dc253a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW1hbiUyMHNwZWN0cm9zY29weSUyMGxhc2VyfGVufDF8fHx8MTc2MzM3ODk0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Equipamento de Espectrometria Raman"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/labimage:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b]/80 via-[#1b1b1b]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#caa34b] flex items-center justify-center">
                  <Fingerprint className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-['Inter'] text-2xl font-bold text-white mb-1">
                    Tecnologia de Ponta
                  </h3>
                  <p className="font-['Inter'] text-gray-200">
                    Espectrômetro Raman de alta resolução para análise molecular
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Explanation */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-2 border-[#006b4f]/20 bg-gradient-to-br from-white to-[#006b4f]/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#006b4f] flex items-center justify-center">
                <Fingerprint className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b]">
                Como Funciona
              </h3>
            </div>
            {/* Gemologist Image */}
            <div className="relative h-48 rounded-xl overflow-hidden mb-6 group/gemimage cursor-pointer">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643968704781-df3b260df6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW1vbG9naXN0JTIwd29ya2luZyUyMGpld2Vscnl8ZW58MXx8fHwxNzYzMzIzMDE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gemólogo analisando esmeraldas"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/gemimage:scale-110 group-hover/gemimage:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#006b4f]/60 to-transparent" />
            </div>
            <p className="font-['Inter'] text-gray-700 leading-relaxed mb-6">
              A técnica Raman analisa a{" "}
              <strong className="text-[#006b4f]">
                estrutura química e as vibrações da rede cristalina
              </strong>{" "}
              de maneira não destrutiva. Não requer preparação da amostra e é
              ideal para pedras preciosas valiosas, funcionando até mesmo em
              pedras montadas em joias.
            </p>
            <div className="bg-white p-5 rounded-xl border-2 border-[#e5e7eb]">
              <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed">
                Um laser interage com o material, e a luz espalhada é analisada
                para obter um <strong>espectro único</strong> que serve como uma{" "}
                <strong className="text-[#006b4f]">
                  "impressão digital" molecular
                </strong>{" "}
                da pedra. Esse espectro é processado pelo GEMLAB para gerar o{" "}
                <code className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                  spectralHash SHA-256
                </code>
                , garantindo identidade permanente.
              </p>
            </div>
          </Card>

          <Card className="p-8 border-2 border-[#caa34b]/20 bg-gradient-to-br from-white to-[#caa34b]/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#caa34b] flex items-center justify-center">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b]">
                Vantagens Técnicas
              </h3>
            </div>
            <ul className="space-y-3">
              {advantages.map((advantage, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#006b4f] flex-shrink-0 mt-0.5" />
                  <span className="font-['Inter'] text-sm text-gray-700">
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] text-center mb-12">
            Processo de Geração do SpectralHash
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="p-6 border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300 relative"
              >
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 rounded-full bg-[#006b4f] flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <div
                  className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center mb-4 mt-2"
                >
                  <step.icon className="h-6 w-6 text-[#006b4f]" />
                </div>
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                  {step.title}
                </h4>
                <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h3 className="font-['Inter'] text-2xl font-bold text-[#1b1b1b] text-center mb-12">
            Aplicações Principais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <Card
                key={index}
                className="p-6 border-2 border-[#e5e7eb] hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#caa34b]/10 flex items-center justify-center mx-auto mb-4">
                  <app.icon className="h-7 w-7 text-[#caa34b]" />
                </div>
                <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                  {app.title}
                </h4>
                <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                  {app.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Considerations */}
        <div className="grid md:grid-cols-2 gap-6">
          <Alert className="bg-blue-50 border-blue-200">
            <CheckCircle2 className="h-4 w-4 text-blue-600" />
            <AlertDescription>
              <div className="font-['Inter'] font-semibold text-blue-900 mb-2">
                Mitigação de Interferências
              </div>
              <p className="font-['Inter'] text-sm text-blue-800">
                Materiais com forte fotoluminescência (opala, larimar) podem
                interferir, mas o GEMLAB utiliza configurações avançadas para
                mitigar esses efeitos. Pedras termicamente instáveis requerem
                ajuste cuidadoso da potência do laser.
              </p>
            </AlertDescription>
          </Alert>

          <Alert className="bg-green-50 border-green-200">
            <Fingerprint className="h-4 w-4 text-green-600" />
            <AlertDescription>
              <div className="font-['Inter'] font-semibold text-green-900 mb-2">
                SpectralHash no NFT
              </div>
              <p className="font-['Inter'] text-sm text-green-800">
                O hash SHA-256 do espectro é ancorado permanentemente no NFT
                ERC-721 da pedra, permitindo verificação futura. Qualquer
                tentativa de substituição da pedra será detectada pela
                divergência espectral.
              </p>
            </AlertDescription>
          </Alert>
        </div>

        {/* GEMLAB Integration */}
        <Card className="mt-16 p-8 bg-gradient-to-r from-[#006b4f] to-[#014733] text-white">
          <div className="flex items-start gap-4">
            <Sparkles className="h-10 w-10 text-[#caa34b] flex-shrink-0" />
            <div>
              <h3 className="font-['Inter'] text-2xl font-bold mb-4">
                Integração GEMLAB: Espectroscopia + IA + Blockchain
              </h3>
              <p className="font-['Inter'] text-gray-100 leading-relaxed mb-4">
                O GEMLAB automatiza todo o processo: desde a captura do espectro
                Raman, passando pelo processamento com IA para eliminar ruído e
                identificar picos característicos, até a geração do{" "}
                <code className="font-mono text-sm bg-white/10 px-2 py-1 rounded">
                  spectralHash
                </code>{" "}
                e sua ancoragem on-chain no momento do{" "}
                <code className="font-mono text-sm bg-white/10 px-2 py-1 rounded">
                  StoneMinted
                </code>
                .
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="font-['Inter'] font-semibold mb-1">
                    Automação Total
                  </div>
                  <p className="font-['Inter'] text-sm text-gray-200">
                    Upload CSV → Processamento → Hash gerado em segundos
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="font-['Inter'] font-semibold mb-1">
                    Verificação Futura
                  </div>
                  <p className="font-['Inter'] text-sm text-gray-200">
                    Qualquer pessoa pode re-escanear e verificar autenticidade
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="font-['Inter'] font-semibold mb-1">
                    Prova Irrefutável
                  </div>
                  <p className="font-['Inter'] text-sm text-gray-200">
                    Hash on-chain + espectro IPFS = identidade permanente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}