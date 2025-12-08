import { MapPin, Award, Users, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WhyCamposVerdes() {
  const features = [
    {
      icon: MapPin,
      title: "Origem Garantida",
      description:
        "Campos Verdes é reconhecida mundialmente como fonte de esmeraldas de alta qualidade. Nossa plataforma garante a procedência através de georreferenciamento e blockchain.",
    },
    {
      icon: Award,
      title: "Certificação Premium",
      description:
        "Laboratórios gemológicos credenciados seguindo padrões internacionais GIA e ICA, com análise espectroscópica avançada.",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description:
        "Ecossistema completo envolvendo garimpeiros, laboratórios, joalheiros e investidores, todos conectados por tecnologia.",
    },
    {
      icon: TrendingUp,
      title: "Valorização Sustentável",
      description:
        "Transparência e rastreabilidade aumentam o valor de mercado e confiança, beneficiando toda a cadeia produtiva.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1b1b1b] to-[#014733] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1732239613951-0f10063b4589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjMzMjMwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Campos Verdes - Goiás"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b1b1b]/80 to-[#014733]/90" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-white mb-4">
            Por que Campos Verdes?
          </h2>
          <p className="font-['Inter'] text-lg text-gray-300">
            A região de Campos Verdes - GO é reconhecida como uma das principais
            fontes de esmeraldas de qualidade do Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#006b4f] flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-['Inter'] text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#006b4f] to-[#014733] opacity-90" />
          <div className="relative z-10 p-12 text-center">
            <MapPin className="h-16 w-16 text-[#caa34b] mx-auto mb-6" />
            <h3 className="font-['Inter'] text-2xl font-bold text-white mb-4">
              Campos Verdes, Goiás
            </h3>
            <p className="font-['Inter'] text-gray-200 max-w-2xl mx-auto mb-6">
              Localizada no coração do Brasil, a região possui formações
              geológicas únicas que proporcionam esmeraldas com tonalidades
              vibrantes e características distintivas.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="text-center">
                <div className="font-['Inter'] text-3xl font-bold text-[#caa34b]">
                  40+
                </div>
                <div className="font-['Inter'] text-sm text-gray-300">
                  Anos de História
                </div>
              </div>
              <div className="text-center">
                <div className="font-['Inter'] text-3xl font-bold text-[#caa34b]">
                  150+
                </div>
                <div className="font-['Inter'] text-sm text-gray-300">
                  Garimpeiros Ativos
                </div>
              </div>
              <div className="text-center">
                <div className="font-['Inter'] text-3xl font-bold text-[#caa34b]">
                  98%
                </div>
                <div className="font-['Inter'] text-sm text-gray-300">
                  Qualidade Premium
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}