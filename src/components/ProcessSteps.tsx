import { Mountain, Microscope, Fingerprint, Coins } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProcessSteps() {
  const steps = [
    {
      icon: Mountain,
      title: "Extração",
      description:
        "Georreferenciamento e registro do lote na origem. Rastreabilidade desde o garimpo em Campos Verdes.",
      color: "#006b4f",
      image: "https://images.unsplash.com/photo-1742415105473-94baf2e241ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9sb2dpY2FsJTIwc3VydmV5JTIwbWFwcGluZ3xlbnwxfHx8fDE3NjMzMjU4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Microscope,
      title: "Análise Gemológica",
      description:
        "Certificação por laboratórios credenciados. Análise completa de cor, clareza, inclusões e autenticidade.",
      color: "#014733",
      image: "https://images.unsplash.com/photo-1676313414325-2a877a95dd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwbWljcm9zY29wZSUyMGFuYWx5c2lzfGVufDF8fHx8MTc2MzMyMzAxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Fingerprint,
      title: "SpectralHash",
      description:
        "Assinatura espectral única da pedra. Tecnologia proprietária para identificação inequívoca.",
      color: "#006b4f",
      image: "https://images.unsplash.com/photo-1728771227328-7cc2a0dc253a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW1hbiUyMHNwZWN0cm9zY29weSUyMGxhc2VyfGVufDF8fHx8MTc2MzM3ODk0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Coins,
      title: "Tokenização",
      description:
        "Criação de NFT com metadata imutável. Certificado digital e rastreabilidade permanente na blockchain.",
      color: "#caa34b",
      image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwbm9kZXMlMjBjb25uZWN0ZWR8ZW58MXx8fHwxNzYzMzI2MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-4">
            Como Funciona
          </h2>
          <p className="font-['Inter'] text-lg text-gray-600">
            Da extração à tokenização: um processo completo de rastreabilidade
            e certificação gemológica
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#006b4f] via-[#014733] to-[#caa34b]" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 h-full border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-colors duration-300 hover:shadow-lg">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#006b4f] text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                    {index + 1}
                  </div>

                  {/* Image Preview */}
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 group/stepimage cursor-pointer">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/stepimage:scale-110 group-hover/stepimage:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {/* Icon Overlay */}
                    <div
                      className="absolute bottom-2 right-2 w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm"
                      style={{ backgroundColor: `${step.color}80` }}
                    >
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-['Inter'] text-xl font-semibold text-[#1b1b1b] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-800 leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#006b4f]/5 to-[#014733]/5 rounded-2xl border border-[#006b4f]/20">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                Armazenamento Descentralizado
              </h4>
              <p className="font-['Inter'] text-sm text-gray-600">
                Todos os documentos e imagens são armazenados em IPFS/Arweave
                para garantir permanência e imutabilidade.
              </p>
            </div>
            <div>
              <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                Auditoria Completa
              </h4>
              <p className="font-['Inter'] text-sm text-gray-600">
                Cada etapa do processo gera eventos on-chain verificáveis e
                auditáveis por qualquer parte interessada.
              </p>
            </div>
            <div>
              <h4 className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                Padrão Internacional
              </h4>
              <p className="font-['Inter'] text-sm text-gray-600">
                Certificação seguindo padrões GIA e ICA com tecnologia
                blockchain para autenticidade digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}