import { motion } from "motion/react";
import { 
  Building2, 
  ShoppingBag, 
  Users, 
  Sparkles, 
  TrendingUp, 
  Heart,
  CheckCircle2,
  DollarSign,
  Calendar,
  Award,
  ArrowLeft,
  Store,
  Gem,
  Package
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface MarketplacePageProps {
  onBack?: () => void;
}

export function MarketplacePage({ onBack }: MarketplacePageProps) {
  const marketComponents = [
    "Espaço físico de vendas com design atrativo e acolhedor",
    "Showcases para joias, artesanato mineral e peças exclusivas",
    "Área de demonstração de lapidação e criação ao vivo",
    "Integração com plataforma digital de vendas online",
    "Ponto de informação turística sobre as rotas de Campos Verdes"
  ];

  const benefits = [
    "Geração de renda direta para artesãos locais formados pelo VERDEJAR",
    "Valorização da produção local com certificação GEMLAB",
    "Atração de turistas e visitantes para a região",
    "Criação de empregos formais no comércio e turismo",
    "Fortalecimento da economia criativa de Campos Verdes"
  ];

  const products = [
    {
      category: "Joias de Esmeralda",
      description: "Anéis, brincos, colares e pulseiras com esmeraldas certificadas",
      icon: Gem
    },
    {
      category: "Artesanato Mineral",
      description: "Peças decorativas e utilitárias criadas a partir de rejeitos minerais",
      icon: Sparkles
    },
    {
      category: "Peças Exclusivas",
      description: "Criações únicas de alta joalheria assinadas por artesãos locais",
      icon: Award
    },
    {
      category: "Souvenirs",
      description: "Lembranças autênticas de Campos Verdes com rastreabilidade",
      icon: Package
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#caa34b]/5 to-white">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[#e5e7eb] bg-gradient-to-r from-[#caa34b] via-[#a88b3d] to-[#caa34b]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Back Button */}
            <Button 
              onClick={onBack}
              variant="outline" 
              className="mb-8 border-white/30 text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Projetos
            </Button>

            <div className="space-y-6 text-center">
              <div className="w-20 h-20 rounded-2xl bg-white/95 backdrop-blur-md flex items-center justify-center mx-auto shadow-xl">
                <Building2 className="h-10 w-10 text-[#caa34b]" />
              </div>

              <h1 className="font-['Montserrat'] text-4xl lg:text-6xl text-white">
                Mercado Municipal de <br />Artesanato Mineral
              </h1>

              <p className="font-['Inter'] text-lg lg:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
                Centro de Comercialização de Joias e Artesanato Local • Hub de Economia Criativa • Agregação de Valor Mineral
              </p>

              <div className="flex flex-wrap gap-3 justify-center pt-4">
                <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Em desenvolvimento
                </Badge>
                <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2">
                  Parceria: COOPESMERALDA + Artesãos Locais
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
              <Card className="overflow-hidden border-2 border-[#caa34b]/30 shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1760635268095-d382f8df48a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwbWFya2V0JTIwY29sb3JmdWwlMjBoYW5kY3JhZnR8ZW58MXx8fHwxNzY0MDk4NDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mercado Municipal de Artesanato Mineral"
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
            <Card className="p-8 lg:p-12 border-2 border-[#caa34b]/30 bg-white shadow-xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-20 h-20 rounded-2xl bg-[#caa34b]/10 flex items-center justify-center flex-shrink-0">
                  <Store className="h-10 w-10 text-[#caa34b]" />
                </div>
                <div className="flex-1 space-y-5">
                  <div>
                    <h2 className="font-['Montserrat'] text-3xl text-[#1b1b1b] mb-3">
                      Um Hub de Economia Criativa
                    </h2>
                    <p className="font-['Inter'] text-sm text-[#caa34b]">
                      Transformando talento local em oportunidades reais
                    </p>
                  </div>
                  <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                    O <strong className="text-[#caa34b]">Mercado Municipal de Artesanato Mineral</strong> é o ponto de encontro entre 
                    a tradição garimpeira e a inovação criativa. Aqui, os jovens formados pelo <strong>Projeto VERDEJAR</strong> e 
                    artesãos locais comercializam joias, peças de artesanato mineral e criações exclusivas, todas com 
                    <strong className="text-[#006b4f]"> rastreabilidade GEMLAB</strong> e certificação de origem.
                  </p>
                  <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                    Mais do que um espaço de vendas, o Mercado é um <strong>ponto turístico estratégico</strong>, 
                    integrado às Rotas Turísticas de Campos Verdes, oferecendo aos visitantes uma experiência autêntica 
                    de contato com a cultura mineral local e a possibilidade de adquirir peças únicas com história rastreável.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Componentes do Mercado */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#caa34b] text-[#caa34b]">
                Infraestrutura
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Componentes do Mercado
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {marketComponents.map((component, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 border-2 border-[#caa34b]/20 hover:border-[#caa34b] transition-all duration-300 h-full">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-[#caa34b] flex-shrink-0 mt-1" />
                      <span className="font-['Inter'] text-gray-700 leading-relaxed">{component}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categorias de Produtos */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#caa34b] text-[#caa34b]">
                Produtos
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                O Que Você Encontra
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Toda peça comercializada possui certificação de origem e rastreabilidade via blockchain
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {products.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 border-2 border-[#caa34b]/20 hover:border-[#caa34b] transition-all duration-300 h-full hover:shadow-xl">
                    <div className="space-y-4">
                      <div className="w-14 h-14 rounded-xl bg-[#caa34b]/10 flex items-center justify-center">
                        <product.icon className="h-7 w-7 text-[#caa34b]" />
                      </div>
                      <div>
                        <h3 className="font-['Montserrat'] text-xl text-[#1b1b1b] mb-2">
                          {product.category}
                        </h3>
                        <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#006b4f] text-[#006b4f]">
                Impacto Local
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Benefícios para a Comunidade
              </h2>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-6 border-2 border-[#006b4f]/20 hover:border-[#006b4f] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#006b4f]/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-5 w-5 text-[#006b4f]" />
                      </div>
                      <span className="font-['Inter'] text-gray-700 leading-relaxed pt-2">{benefit}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integração Digital */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 lg:p-12 border-2 border-[#014733]/30 bg-gradient-to-br from-white to-[#f0fdf4] shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-20 h-20 rounded-2xl bg-[#014733] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <div className="flex-1 space-y-5">
                  <div>
                    <h2 className="font-['Montserrat'] text-3xl text-[#1b1b1b] mb-3">
                      Plataforma Digital Integrada
                    </h2>
                    <p className="font-['Inter'] text-sm text-[#014733]">
                      Vendas online + rastreabilidade blockchain
                    </p>
                  </div>
                  <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                    Toda peça comercializada no Mercado Municipal também está disponível na 
                    <strong className="text-[#014733]"> Plataforma Digital de Comercialização</strong>, com catálogo online completo, 
                    sistema de pagamento integrado e <strong>certificação digital GEMLAB</strong>. O cliente pode comprar 
                    presencialmente ou online, sempre com garantia de autenticidade e rastreabilidade completa.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#014733]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#014733] flex-shrink-0" />
                      <span className="font-['Inter'] text-sm text-gray-700">E-commerce integrado</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#014733]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#014733] flex-shrink-0" />
                      <span className="font-['Inter'] text-sm text-gray-700">Certificação digital</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#014733]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#014733] flex-shrink-0" />
                      <span className="font-['Inter'] text-sm text-gray-700">Rastreabilidade blockchain</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#014733]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#014733] flex-shrink-0" />
                      <span className="font-['Inter'] text-sm text-gray-700">Pagamento seguro</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Impacto ESG */}
      <section className="py-16 lg:py-20 bg-white border-t border-[#e5e7eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 lg:p-10 border-2 border-[#caa34b]/30 bg-gradient-to-br from-white via-[#caa34b]/5 to-white shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#caa34b] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-['Montserrat'] text-2xl text-[#1b1b1b]">
                    Argumento ESG e Economia Criativa
                  </h3>
                  <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                    O <strong className="text-[#caa34b]">Mercado Municipal</strong> é um dos pilares da 
                    <strong> Economia Criativa de Campos Verdes</strong>, demonstrando como a mineração pode ser 
                    transformada em <strong>geração de renda sustentável e valorização cultural</strong>. 
                    Financiado via CFEM/ISS recuperado e integrado ao <strong className="text-[#014733]">Lastro Social do RWA</strong>, 
                    o projeto fortalece o argumento de <strong>compliance ESG</strong> ao provar que o lucro do mineral 
                    retorna para a comunidade através de infraestrutura produtiva.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge className="bg-[#caa34b] text-white">Economia Criativa</Badge>
                    <Badge className="bg-[#006b4f] text-white">Geração de Renda</Badge>
                    <Badge className="bg-[#10b981] text-white">Turismo Cultural</Badge>
                    <Badge className="bg-[#014733] text-white">Lastro Social</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#caa34b] via-[#a88b3d] to-[#caa34b] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-['Montserrat'] text-3xl lg:text-4xl">
              Visite o Mercado Municipal
            </h2>
            <p className="font-['Inter'] text-lg opacity-90 leading-relaxed">
              Conheça as criações dos artesãos de Campos Verdes e leve para casa 
              uma peça única com história e rastreabilidade certificada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-white text-[#caa34b] hover:bg-gray-100 shadow-xl"
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
                <ShoppingBag className="mr-2 h-5 w-5" />
                Explorar Catálogo Online
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
