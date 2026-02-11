import { motion } from "motion/react";
import { 
  Sparkles, 
  Globe,
  ShoppingBag,
  Shield,
  CheckCircle2,
  Heart,
  Calendar,
  ArrowLeft,
  Smartphone,
  Search,
  CreditCard,
  Package,
  BarChart,
  Users,
  Lock
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface DigitalPlatformPageProps {
  onBack?: () => void;
}

export function DigitalPlatformPage({ onBack }: DigitalPlatformPageProps) {
  const features = [
    {
      name: "Catálogo Digital Completo",
      description: "Todas as peças do Mercado Municipal disponíveis online com fotos, vídeos e certificação",
      icon: Search
    },
    {
      name: "Rastreabilidade Blockchain",
      description: "Cada produto possui certificado digital GEMLAB com histórico completo via blockchain",
      icon: Shield
    },
    {
      name: "Pagamento Seguro",
      description: "Múltiplas formas de pagamento integradas com criptografia de ponta",
      icon: CreditCard
    },
    {
      name: "Narrativa de Impacto",
      description: "Cada compra mostra o impacto social gerado na comunidade de Campos Verdes",
      icon: Heart
    },
    {
      name: "Marketing Territorial",
      description: "Promoção da marca 'Esmeraldas de Campos Verdes' como ativo cultural e turístico",
      icon: BarChart
    },
    {
      name: "App Mobile",
      description: "Aplicativo para iOS e Android com experiência otimizada",
      icon: Smartphone
    }
  ];

  const functionality = [
    "Sistema de busca avançada por tipo, preço, certificação e artesão",
    "Perfil de cada artesão com biografia e portfólio",
    "Storytelling visual sobre a origem de cada peça",
    "Integração com redes sociais para compartilhamento",
    "Sistema de avaliações e reviews verificados",
    "Blog com conteúdo educativo sobre esmeraldas e mineração sustentável",
    "Área do cliente com histórico de compras e certificados digitais",
    "Sistema de fidelidade e descontos para compradores recorrentes"
  ];

  const technicalStack = [
    {
      area: "Frontend",
      tech: "React + Next.js + Tailwind CSS",
      color: "#006b4f"
    },
    {
      area: "Backend",
      tech: "Node.js + Supabase + Edge Functions",
      color: "#014733"
    },
    {
      area: "Blockchain",
      tech: "Ethereum Attestation Service (EAS) + Base L2",
      color: "#caa34b"
    },
    {
      area: "Pagamentos",
      tech: "Stripe + PIX + Mercado Pago",
      color: "#10b981"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#014733]/5 to-white">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[#e5e7eb] bg-gradient-to-r from-[#014733] via-[#006b4f] to-[#014733]">
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
                <Sparkles className="h-10 w-10 text-[#014733]" />
              </div>

              <h1 className="font-['Montserrat'] text-4xl lg:text-6xl text-white">
                Plataforma Digital de <br />Comercialização
              </h1>

              <p className="font-['Inter'] text-lg lg:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
                Site, Catálogo Digital, Rastreabilidade e Marketing Territorial • E-commerce Integrado • Narrativa de Impacto
              </p>

              <div className="flex flex-wrap gap-3 justify-center pt-4">
                <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  Em desenvolvimento
                </Badge>
                <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2">
                  Launch previsto: 2026
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
              <Card className="overflow-hidden border-2 border-[#014733]/30 shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1747922726841-d713a7bba7ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxORlQlMjBtYXJrZXRwbGFjZSUyMGdhbGxlcnl8ZW58MXx8fHwxNzY0MTAwNTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Plataforma Digital de Comercialização"
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
            <Card className="p-8 lg:p-12 border-2 border-[#014733]/30 bg-white shadow-xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-20 h-20 rounded-2xl bg-[#014733]/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-10 w-10 text-[#014733]" />
                </div>
                <div className="flex-1 space-y-5">
                  <div>
                    <h2 className="font-['Montserrat'] text-3xl text-[#1b1b1b] mb-3">
                      E-commerce com Rastreabilidade Total
                    </h2>
                    <p className="font-['Inter'] text-sm text-[#014733]">
                      Tecnologia blockchain + narrativa de impacto social
                    </p>
                  </div>
                  <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                    A <strong className="text-[#014733]">Plataforma Digital de Comercialização</strong> é o elo entre 
                    o <strong>Mercado Municipal físico</strong> e o mundo digital, permitindo que compradores de qualquer 
                    lugar adquiram joias e artesanato mineral de Campos Verdes com <strong className="text-[#006b4f]">
                    certificação GEMLAB completa</strong> e rastreabilidade blockchain via Ethereum Attestation Service (EAS).
                  </p>
                  <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                    Mais do que um simples e-commerce, a plataforma conta a <strong>história de cada peça</strong>: 
                    quem lapidou, qual projeto social foi financiado com a venda, qual o impacto gerado na comunidade. 
                    Cada compra vem com <strong className="text-[#caa34b]">certificado digital</strong> permanente, 
                    criando um vínculo emocional entre o comprador e Campos Verdes.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Funcionalidades Principais */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#014733] text-[#014733]">
                Recursos
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Funcionalidades Principais
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 border-2 border-[#014733]/20 hover:border-[#014733] transition-all duration-300 h-full hover:shadow-xl">
                    <div className="space-y-4">
                      <div className="w-14 h-14 rounded-xl bg-[#014733]/10 flex items-center justify-center">
                        <feature.icon className="h-7 w-7 text-[#014733]" />
                      </div>
                      <div>
                        <h3 className="font-['Montserrat'] text-lg text-[#1b1b1b] mb-2">
                          {feature.name}
                        </h3>
                        <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                          {feature.description}
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

      {/* Funcionalidades Detalhadas */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#006b4f] text-[#006b4f]">
                Experiência do Usuário
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Jornada Completa de Compra
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {functionality.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <Card className="p-6 border-2 border-[#006b4f]/20 hover:border-[#006b4f] transition-all duration-300">
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

      {/* Stack Tecnológico */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#caa34b] text-[#caa34b]">
                Tecnologia
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Stack Tecnológico
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Arquitetura moderna e escalável para performance e segurança
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {technicalStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="p-8 border-2 hover:shadow-xl transition-all duration-300" 
                        style={{ borderColor: `${tech.color}30` }}>
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                           style={{ backgroundColor: `${tech.color}15` }}>
                        <Lock className="h-6 w-6" style={{ color: tech.color }} />
                      </div>
                      <div>
                        <div className="font-['Inter'] text-sm text-gray-500 mb-1">{tech.area}</div>
                        <div className="font-['Montserrat'] text-lg" style={{ color: tech.color }}>
                          {tech.tech}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificação Digital */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 lg:p-12 border-2 border-[#caa34b]/30 bg-white shadow-xl">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-20 h-20 rounded-2xl bg-[#caa34b]/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-10 w-10 text-[#caa34b]" />
                </div>
                <div className="flex-1 space-y-5">
                  <div>
                    <h2 className="font-['Montserrat'] text-3xl text-[#1b1b1b] mb-3">
                      Certificação Digital GEMLAB
                    </h2>
                    <p className="font-['Inter'] text-sm text-[#caa34b]">
                      Cada peça tem um NFT de certificação permanente
                    </p>
                  </div>
                  <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                    Ao comprar uma joia ou peça de artesanato, o cliente recebe automaticamente um 
                    <strong className="text-[#caa34b]"> Certificado Digital GEMLAB</strong> via blockchain, 
                    contendo: <strong>SpectralHash da esmeralda</strong> (se aplicável), dados do artesão, 
                    data de criação, nota fiscal digital, e o <strong>impacto social gerado</strong> pela compra 
                    (qual projeto foi financiado, quantos jovens foram capacitados).
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-3 p-3 bg-[#caa34b]/5 rounded-lg border border-[#caa34b]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#caa34b] flex-shrink-0" />
                      <span className="font-['Inter'] text-sm text-gray-700">SpectralHash via Raman</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#caa34b]/5 rounded-lg border border-[#caa34b]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#caa34b] flex-shrink-0" />
                      <span className="font-['Inter'] text-sm text-gray-700">Nota fiscal digital</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#caa34b]/5 rounded-lg border border-[#caa34b]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#caa34b] flex-shrink-0" />
                      <span className="font-['Inter'] text-sm text-gray-700">Perfil do artesão</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-[#caa34b]/5 rounded-lg border border-[#caa34b]/20">
                      <CheckCircle2 className="h-6 w-6 text-[#caa34b] flex-shrink-0" />
                      <span className="font-['Inter'] text-sm text-gray-700">Impacto social rastreável</span>
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
            <Card className="p-8 lg:p-10 border-2 border-[#014733]/30 bg-gradient-to-br from-white via-[#014733]/5 to-white shadow-2xl">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#014733] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-['Montserrat'] text-2xl text-[#1b1b1b]">
                    Marketing Territorial e Compliance ESG
                  </h3>
                  <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                    A <strong className="text-[#014733]">Plataforma Digital</strong> não é apenas um canal de vendas, 
                    mas uma <strong>ferramenta de marketing territorial</strong> que promove a marca 
                    "Esmeraldas de Campos Verdes" globalmente. Cada venda reforça a <strong>narrativa de impacto</strong>, 
                    demonstrando aos investidores que o modelo GEMLAB gera valor econômico, social e ambiental rastreável. 
                    A transparência total via blockchain fortalece o <strong className="text-[#006b4f]">argumento ESG</strong> 
                    e atrai capital consciente.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge className="bg-[#014733] text-white">Marketing Territorial</Badge>
                    <Badge className="bg-[#006b4f] text-white">Transparência On-Chain</Badge>
                    <Badge className="bg-[#caa34b] text-white">Narrativa de Impacto</Badge>
                    <Badge className="bg-[#10b981] text-white">Economia Digital</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#014733] via-[#006b4f] to-[#014733] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-['Montserrat'] text-3xl lg:text-4xl">
              Plataforma em Desenvolvimento
            </h2>
            <p className="font-['Inter'] text-lg opacity-90 leading-relaxed">
              Em breve, você poderá adquirir joias e artesanato mineral de Campos Verdes 
              com certificação completa e rastreabilidade blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-white text-[#014733] hover:bg-gray-100 shadow-xl"
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
                <Package className="mr-2 h-5 w-5" />
                Cadastre-se para o Lançamento
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}