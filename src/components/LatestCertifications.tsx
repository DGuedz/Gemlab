import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, CheckCircle2, Sparkles, Fingerprint } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import emeraldImage1 from "figma:asset/f7f9158f729120c00ef8e711014954ebdd6e6678.png";
import emeraldImage2 from "figma:asset/7afd83b00f931b4b28c7832cd46b3851eb11afb2.png";
import emeraldImage3 from "figma:asset/64352e7879bd0c0122555126b1aa7e87c30ecead.png";

interface LatestCertificationsProps {
  onViewDetails?: (gemId: string) => void;
}

export function LatestCertifications({ onViewDetails }: LatestCertificationsProps) {
  const certifications = [
    {
      id: "GEM-2024-1247",
      weight: "3.42 ct",
      color: "Verde Intenso",
      clarity: "VS1",
      origin: "Campos Verdes - GO",
      status: "Certificado",
      spectralHash: "0x7f3a92c4",
      image: emeraldImage1,
    },
    {
      id: "GEM-2024-1246",
      weight: "2.18 ct",
      color: "Verde Médio",
      clarity: "VVS2",
      origin: "Campos Verdes - GO",
      status: "Tokenizado",
      spectralHash: "0x4b2d81f3",
      image: emeraldImage2,
    },
    {
      id: "GEM-2024-1245",
      weight: "5.67 ct",
      color: "Verde Intenso",
      clarity: "VS2",
      origin: "Campos Verdes - GO",
      status: "Certificado",
      spectralHash: "0x9c5e73a1",
      image: emeraldImage3,
    },
    {
      id: "GEM-2024-1244",
      weight: "1.85 ct",
      color: "Verde Claro",
      clarity: "VVS1",
      origin: "Campos Verdes - GO",
      status: "Tokenizado",
      spectralHash: "0x2f7b94e2",
      image: emeraldImage1,
    },
  ];

  return (
    <section id="registry" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-['Inter'] text-3xl lg:text-4xl font-bold text-[#1b1b1b] mb-2">
              Últimas Certificações
            </h2>
            <p className="font-['Inter'] text-lg text-gray-800">
              Esmeraldas recém-certificadas com rastreabilidade verificada
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
          >
            Ver Todas
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-[#e5e7eb] hover:border-[#006b4f] transition-all duration-300 hover:shadow-xl group"
            >
              {/* Image */}
              <div className="relative h-48 bg-white overflow-hidden group/cardimage cursor-pointer">
                <ImageWithFallback
                  src={cert.image}
                  alt={`Esmeralda ${cert.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/cardimage:scale-110 group-hover/cardimage:rotate-2"
                />
                {/* Status Badge */}
                <Badge
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm"
                  variant={cert.status === "Certificado" ? "default" : "outline"}
                >
                  <CheckCircle2 className="h-3 w-3 mr-1 text-[#006b4f]" />
                  <span className="font-['Inter'] text-xs font-medium text-[#1b1b1b]">
                    {cert.status}
                  </span>
                </Badge>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-4">
                {/* ID */}
                <div className="flex items-center justify-between">
                  <span className="font-['Inter'] text-xs font-mono text-gray-500">
                    {cert.id}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-['Inter'] text-xs text-gray-500">
                      Peso
                    </span>
                    <span className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                      {cert.weight}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-['Inter'] text-xs text-gray-500">
                      Cor
                    </span>
                    <span className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                      {cert.color}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-['Inter'] text-xs text-gray-500">
                      Clareza
                    </span>
                    <span className="font-['Inter'] text-sm font-medium text-[#1b1b1b]">
                      {cert.clarity}
                    </span>
                  </div>
                </div>

                {/* SpectralHash */}
                <div className="pt-3 border-t border-[#e5e7eb]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Fingerprint className="h-3.5 w-3.5 text-[#006b4f]" />
                      <span className="font-['Inter'] text-xs text-gray-500">
                        SpectralHash
                      </span>
                    </div>
                    <code className="font-['Inter'] text-xs font-mono text-[#006b4f]">
                      {cert.spectralHash}
                    </code>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full bg-[#006b4f] text-white hover:bg-[#014733]"
                  onClick={() => onViewDetails?.(cert.id)}
                >
                  Ver Detalhes
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button
            variant="outline"
            className="border-[#006b4f] text-[#006b4f]"
          >
            Ver Todas as Certificações
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}