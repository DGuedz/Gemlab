import { motion } from "motion/react";
import { 
  MapPin, 
  Landmark,
  Building2,
  Mountain,
  Camera,
  Users,
  Heart,
  CheckCircle2,
  Calendar,
  ArrowLeft,
  Compass,
  Map,
  Info
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface TourismRoutesPageProps {
  onBack?: () => void;
}

export function TourismRoutesPage({ onBack }: TourismRoutesPageProps) {
  const routes = [
    {
      name: "Rota do Garimpo Histórico",
      description: "Visita guiada à mina histórica, equipamentos tradicionais e reprodução cenográfica do garimpo antigo",
      duration: "3 horas",
      difficulty: "Moderada",
      highlights: ["Mina histórica", "Equipamentos originais", "Histórias dos garimpeiros"],
      color: "#006b4f"
    },
    {
      name: "Rota da Lapidação e Joalheria",
      description: "Demonstração ao vivo de lapidação de esmeraldas e criação de joias pelos artesãos locais",
      duration: "2 horas",
      difficulty: "Fácil",
      highlights: ["Demonstração de lapidação", "Oficina de joias", "Mercado Municipal"],
      color: "#caa34b"
    },
    {
      name: "Rota do Museu e Cultura",
      description: "Tour completo pelo Museu de Mineração, exposições e trilhas de contação de história",
      duration: "2.5 horas",
      difficulty: "Fácil",
      highlights: ["Museu de Mineração", "Exposições permanentes", "Trilhas culturais"],
      color: "#10b981"
    },
    {
      name: "Rota da Sustentabilidade",
      description: "Visita aos projetos de economia circular: reaproveitamento de talco xisto e inovação ambiental",
      duration: "2 horas",
      difficulty: "Fácil",
      highlights: ["Projetos ambientais", "Economia circular", "Inovação sustentável"],
      color: "#014733"
    }
  ];

  const experiences = [
    "Vivência autêntica da cultura garimpeira",
    "Contato direto com artesãos e lapidários",
    "Degustação de produtos locais",
    "Compra de peças exclusivas com certificação",
    "Fotografia em pontos históricos",
    "Workshops de lapidação básica"
  ];

  const infrastructure = [
    "Sinalização turística completa",
    "Guias locais capacitados",
    "Pontos de apoio e descanso",
    "Centro de informações turísticas",
    "Estrutura acessível para PCD",
    "Wi-Fi gratuito nos pontos principais"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#10b981]/5 to-white">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[#e5e7eb] bg-gradient-to-r from-[#10b981] via-[#059669] to-[#10b981]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Back Button */}
            {/* ... remove this code ... */}

            <div className="space-y-6 text-center">
              <div className="w-20 h-20 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center mx-auto shadow-xl">
                <MapPin className="h-10 w-10 text-[#10b981]" />
              </div>

              <h1 className="font-['Montserrat'] text-4xl lg:text-6xl text-white">
                Rotas Turísticas <br />de Campos Verdes
              </h1>

              <p className="font-['Inter'] text-lg lg:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
                Infraestrutura para Turismo Mineral e Visitas Técnicas • Geoturismo e Turismo Criativo • Experiência Imersiva
              </p>

              <div className="flex flex-wrap gap-3 justify-center pt-4">
                <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Em planejamento
                </Badge>
                <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2">
                  Timeline: 2026-2028
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Imagem Principal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden border-2 border-[#10b981]/30 shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1664578867628-dae621194f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwcGl0JTIwbWluZSUyMGFlcmlhbHxlbnwxfHx8fDE3NjQxMDA3Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rotas Turísticas de Campos Verdes"
                  className="w-full h-96 object-cover"
                />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 lg:p-12 border-2 border-[#10b981]/30 bg-white shadow-xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-20 h-20 rounded-2xl bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                  <Compass className="h-10 w-10 text-[#10b981]" />
                </div>
                <div className="flex-1 space-y-5">
                  <div>
                    <h2 className="font-['Montserrat'] text-3xl text-[#1b1b1b] mb-3">
                      Geoturismo e Experiência Cultural Autêntica
                    </h2>
                    <p className="font-['Inter'] text-sm text-[#10b981]">
                      Transformando Campos Verdes em destino turístico mineral
                    </p>
                  </div>
                  <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                    As <strong className="text-[#10b981]">Rotas Turísticas de Campos Verdes</strong> conectam os principais 
                    pontos de interesse mineral, cultural e histórico da região, oferecendo aos visitantes uma 
                    <strong> experiência imersiva e educativa</strong> sobre a tradição garimpeira, o processo de certificação 
                    científica e os projetos de impacto social.
                  </p>
                  <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                    Integrando o <strong>Museu de Mineração</strong>, o <strong>Mercado Municipal</strong>, 
                    as minas históricas e os projetos de economia circular, as rotas posicionam Campos Verdes como 
                    <strong className="text-[#014733]"> destino de Geoturismo e Turismo Criativo</strong>, gerando receita para 
                    financiar projetos sociais e atraindo investidores com argumento ESG sólido.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 4 Rotas Principais */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#10b981] text-[#10b981]">
                Circuitos Turísticos
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                4 Rotas Integradas
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Experiências completas que conectam história, cultura e sustentabilidade
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {routes.map((route, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 border-2 hover:shadow-xl transition-all duration-300 h-full" 
                        style={{ borderColor: `${route.color}30` }}>
                    <div className="space-y-5">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center" 
                           style={{ backgroundColor: `${route.color}15` }}>
                        <MapPin className="h-7 w-7" style={{ color: route.color }} />
                      </div>
                      
                      <div>
                        <h3 className="font-['Montserrat'] text-xl text-[#1b1b1b] mb-2">
                          {route.name}
                        </h3>
                        <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed mb-4">
                          {route.description}
                        </p>
                      </div>

                      <div className="flex gap-4 pb-4 border-b border-gray-200">
                        <div>
                          <div className="font-['Inter'] text-sm text-gray-500">Duração</div>
                          <div className="font-['Montserrat']" style={{ color: route.color }}>
                            {route.duration}
                          </div>
                        </div>
                        <div>
                          <div className="font-['Inter'] text-sm text-gray-500">Dificuldade</div>
                          <div className="font-['Montserrat']" style={{ color: route.color }}>
                            {route.difficulty}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="font-['Inter'] text-sm font-semibold text-gray-700">Destaques:</div>
                        {route.highlights.map((highlight, hidx) => (
                          <div key={hidx} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: route.color }} />
                            <span className="font-['Inter'] text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiências Oferecidas */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#caa34b] text-[#caa34b]">
                Experiências
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                O Que Você Vai Vivenciar
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {experiences.map((experience, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <Card className="p-6 border-2 border-[#caa34b]/20 hover:border-[#caa34b] transition-all duration-300 h-full">
                    <div className="flex items-start gap-3">
                      <Camera className="h-5 w-5 text-[#caa34b] flex-shrink-0 mt-0.5" />
                      <span className="font-['Inter'] text-sm text-gray-700 leading-relaxed">{experience}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infraestrutura Turística */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#006b4f] text-[#006b4f]">
                Infraestrutura
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Estrutura de Apoio ao Turista
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infrastructure.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 border-2 border-[#006b4f]/20 hover:border-[#006b4f] transition-all duration-300 h-full">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-[#006b4f] flex-shrink-0 mt-0.5" />
                      <span className="font-['Inter'] text-sm text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integração com Projetos */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#014733] text-[#014733]">
                Pontos de Interesse
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Rotas Integradas
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Todos os pontos turísticos fazem parte do ecossistema GEMLAB
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 border-2 border-[#006b4f]/30 hover:border-[#006b4f] transition-all duration-300 h-full hover:shadow-xl">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-[#006b4f]/10 flex items-center justify-center">
                      <Landmark className="h-7 w-7 text-[#006b4f]" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] text-xl text-[#1b1b1b] mb-2">
                        Museu de Mineração
                      </h3>
                      <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                        Centro cultural com exposições permanentes e trilhas de história
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="p-8 border-2 border-[#caa34b]/30 hover:border-[#caa34b] transition-all duration-300 h-full hover:shadow-xl">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-[#caa34b]/10 flex items-center justify-center">
                      <Building2 className="h-7 w-7 text-[#caa34b]" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] text-xl text-[#1b1b1b] mb-2">
                        Mercado Municipal
                      </h3>
                      <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                        Compras de joias e artesanato com certificação de origem
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="p-8 border-2 border-[#10b981]/30 hover:border-[#10b981] transition-all duration-300 h-full hover:shadow-xl">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                      <Mountain className="h-7 w-7 text-[#10b981]" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] text-xl text-[#1b1b1b] mb-2">
                        Minas Históricas
                      </h3>
                      <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                        Visita guiada às áreas de garimpo tradicional preservadas
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto ESG */}
      <section className="py-16 lg:py-20 bg-white border-t border-[#e5e7eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 lg:p-10 border-2 border-[#10b981]/30 bg-gradient-to-br from-white via-[#10b981]/5 to-white shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#10b981] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-['Montserrat'] text-2xl text-[#1b1b1b]">
                    Receita Turística para Projetos Sociais
                  </h3>
                  <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                    As <strong className="text-[#10b981]">Rotas Turísticas</strong> geram receita que é reinvestida nos 
                    projetos sociais via <strong>Regime Fiscal Automatizado</strong>. Taxas de visitação, workshops e 
                    vendas no Mercado Municipal alimentam o <strong className="text-[#014733]">Lastro Social do RWA</strong>, 
                    demonstrando aos investidores que o <strong>turismo mineral sustentável</strong> é parte integral do 
                    modelo de <strong>compliance ESG</strong> da plataforma GEMLAB.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge className="bg-[#10b981] text-white">APL Campos Verdes 2050</Badge>
                    <Badge className="bg-[#006b4f] text-white">Geoturismo</Badge>
                    <Badge className="bg-[#caa34b] text-white">Turismo Criativo</Badge>
                    <Badge className="bg-[#014733] text-white">Receita Sustentável</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#10b981] via-[#059669] to-[#10b981] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-['Montserrat'] text-3xl lg:text-4xl">
              Venha Conhecer Campos Verdes
            </h2>
            <p className="font-['Inter'] text-lg opacity-90 leading-relaxed">
              Explore as rotas turísticas e descubra a autêntica cultura mineral de Goiás, 
              com experiências únicas e certificação de impacto social.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-white text-[#10b981] hover:bg-gray-100 shadow-xl"
                onClick={onBack}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Voltar para Projetos
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10"
              >
                <Map className="mr-2 h-5 w-5" />
                Baixar Mapa das Rotas
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}