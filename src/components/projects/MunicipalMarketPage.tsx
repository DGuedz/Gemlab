import { motion } from "motion/react";
import { 
  Building2,
  Store,
  Target,
  Users,
  TrendingUp,
  Gem,
  ShoppingBag,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Heart,
  Lightbulb,
  Award,
  DollarSign
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function MunicipalMarketPage() {
  const objectives = [
    {
      icon: Store,
      title: "Centro de Comercialização",
      description: "Intensificar e diversificar a economia local através de um espaço dedicado ao comércio de artesanato mineral e joias"
    },
    {
      icon: Building2,
      title: "Infraestrutura Cooperativa",
      description: "COOPESMERALDA lidera a elaboração de projetos para implementar e manter o mercado municipal"
    },
    {
      icon: Users,
      title: "Foco no Visitante",
      description: "Fomentar e fortalecer o atendimento ao visitante para negócios, comércio local e turismo"
    },
    {
      icon: Sparkles,
      title: "Agregação de Valor",
      description: "Divulgação da produção artesanal de Campos Verdes com atributos culturais e naturais da região"
    },
    {
      icon: MapPin,
      title: "Ponto Turístico",
      description: "Recurso turístico estratégico para Turismo de Compras e Turismo Criativo"
    },
    {
      icon: Gem,
      title: "Integração Regional",
      description: "Instalado em conjunto com Museu de Mineração e rotas turísticas, formando o Centro Turístico Mineral"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Economia Regenerativa",
      description: "Transformação de modelo extrativista para economia sustentável de longo prazo"
    },
    {
      icon: Award,
      title: "Cluster Integrado",
      description: "Conexão entre mineração, lapidação, joalheria, artesanato e comércio"
    },
    {
      icon: Heart,
      title: "Formalização",
      description: "Organização do comércio informal em espaço profissional de qualidade"
    },
    {
      icon: DollarSign,
      title: "Atração de Investimentos",
      description: "Espaço qualificado para atrair investidores e compradores nacionais e internacionais"
    }
  ];

  const timeline = [
    {
      phase: "Planejamento",
      period: "2025-2027",
      status: "Em andamento",
      activities: [
        "Elaboração de projetos pela COOPESMERALDA",
        "Definição de localização estratégica",
        "Captação de recursos e parcerias",
        "Design arquitetônico e funcional"
      ]
    },
    {
      phase: "Implementação",
      period: "Junho 2028",
      status: "Previsto",
      activities: [
        "Construção da infraestrutura física",
        "Instalação de espaços de exposição",
        "Capacitação de artesãos e comerciantes",
        "Inauguração oficial"
      ]
    },
    {
      phase: "Operação e Gestão",
      period: "2028-2050",
      status: "Planejado",
      activities: [
        "Gestão cooperativa contínua",
        "Manutenção e melhorias",
        "Expansão de produtos e serviços",
        "Integração com rotas turísticas"
      ]
    }
  ];

  const products = [
    {
      category: "Joias e Semijoias",
      items: ["Joias com esmeraldas certificadas", "Semijoias em prata e ouro", "Biojoias sustentáveis", "Peças autorais de designers locais"]
    },
    {
      category: "Artesanato Mineral",
      items: ["Esculturas em pedra-sabão", "Objetos decorativos em minerais", "Utensílios artesanais", "Arte mineral regional"]
    },
    {
      category: "Produtos Culturais",
      items: ["Artesanato tradicional goiano", "Produtos com identidade territorial", "Obras de artistas locais", "Souvenirs temáticos"]
    },
    {
      category: "Experiências",
      items: ["Demonstrações de lapidação", "Workshops de joalheria", "Tours guiados", "Consultas gemológicas"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#006b4f]/5 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#006b4f]/10 via-transparent to-[#caa34b]/10" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#006b4f]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#caa34b]/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-[#006b4f] text-white px-6 py-2">
              <Store className="h-4 w-4 mr-2" />
              Projeto de Infraestrutura • APL 2050
            </Badge>
            
            <h1 className="font-['Montserrat'] text-5xl md:text-6xl text-[#1b1b1b] mb-6">
              Mercado Municipal de<br />
              <span className="text-[#006b4f]">Artesanato Mineral e Joias</span>
            </h1>
            
            <p className="font-['Inter'] text-xl text-gray-600 mb-8 leading-relaxed">
              Ação estruturante de longo prazo transformando a economia local de extrativista 
              para regenerativa e fortalecendo o turismo de Campos Verdes
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                <Calendar className="h-5 w-5 text-[#006b4f]" />
                <span className="font-['Inter'] text-sm text-gray-700">
                  Implementação: Junho 2028
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                <Target className="h-5 w-5 text-[#006b4f]" />
                <span className="font-['Inter'] text-sm text-gray-700">
                  Eixo: [M03.01] Infraestrutura e Turismo
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                <Award className="h-5 w-5 text-[#006b4f]" />
                <span className="font-['Inter'] text-sm text-gray-700">
                  Gestão: COOPESMERALDA
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-['Montserrat'] text-3xl text-[#1b1b1b] mb-6 text-center">
              Contexto e Importância Estratégica
            </h2>
            
            <div className="space-y-6">
              <Card className="p-8 border-2 border-[#006b4f]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-[#006b4f]" />
                  </div>
                  <div>
                    <h3 className="font-['Inter'] text-lg text-[#1b1b1b] mb-3">
                      Missão do Projeto
                    </h3>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed">
                      O Mercado Municipal de Artesanato Mineral e Joias é uma ação estruturante de longo prazo 
                      dentro do Planejamento Estratégico APL 2050 de Campos Verdes, transformando uma economia 
                      local de extrativista para regenerativa e fortalecer o turismo.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-[#006b4f]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-[#006b4f]" />
                  </div>
                  <div>
                    <h3 className="font-['Inter'] text-lg text-[#1b1b1b] mb-3">
                      Necessidade Estratégica
                    </h3>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed">
                      A iniciativa é vital para criar um cluster integrado que atualmente falta entre mineração, 
                      lapidação, joalheria, artesanato e comércio. O diagnóstico revela que Campos Verdes tem 
                      vocação para o comércio de esmeraldas, mas a organização do comércio informal e a falta de 
                      cooperação entre os elos da cadeia são desafios estruturais.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-2 border-[#006b4f]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#006b4f]" />
                  </div>
                  <div>
                    <h3 className="font-['Inter'] text-lg text-[#1b1b1b] mb-3">
                      Visão de Integração
                    </h3>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed">
                      O Mercado Municipal deve ser instalado e mantido em conjunto com o Museu de Mineração e a 
                      infraestrutura para rotas turísticas, transformando Campos Verdes em um Centro Turístico Mineral 
                      de referência nacional.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#006b4f]/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-['Montserrat'] text-4xl text-[#1b1b1b] mb-4">
              Objetivos e Estrutura
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
              Seis pilares fundamentais que definem a missão e o funcionamento do Mercado Municipal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 border-[#006b4f]/20 hover:border-[#006b4f] transition-all duration-300 hover:shadow-xl group">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#006b4f] to-[#014733] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <objective.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-['Inter'] text-lg text-[#1b1b1b] mb-3">
                    {objective.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                    {objective.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-['Montserrat'] text-4xl text-[#1b1b1b] mb-4">
              Impactos e Benefícios
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
              Transformações esperadas para a economia e sociedade de Campos Verdes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center border-2 border-[#006b4f]/20 hover:border-[#006b4f] transition-all duration-300 hover:shadow-xl group">
                  <div className="w-16 h-16 rounded-full bg-[#006b4f]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#006b4f] transition-colors duration-300">
                    <benefit.icon className="h-8 w-8 text-[#006b4f] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-['Inter'] text-base text-[#1b1b1b] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-['Inter'] text-sm text-gray-600">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#006b4f]/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-['Montserrat'] text-4xl text-[#1b1b1b] mb-4">
              Cronograma de Implementação
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
              Roadmap completo do projeto desde planejamento até operação de longo prazo
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {timeline.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 border-2 border-[#006b4f]/20 hover:border-[#006b4f] transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#006b4f] to-[#014733] flex items-center justify-center">
                        <span className="font-['Montserrat'] text-2xl text-white">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="font-['Inter'] text-2xl text-[#1b1b1b]">
                          {phase.phase}
                        </h3>
                        <Badge className="bg-[#006b4f]/10 text-[#006b4f] border border-[#006b4f]/20">
                          {phase.period}
                        </Badge>
                        <Badge className={
                          phase.status === "Em andamento" 
                            ? "bg-green-100 text-green-700 border border-green-300"
                            : phase.status === "Previsto"
                            ? "bg-blue-100 text-blue-700 border border-blue-300"
                            : "bg-gray-100 text-gray-700 border border-gray-300"
                        }>
                          {phase.status}
                        </Badge>
                      </div>
                      
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-[#006b4f] flex-shrink-0 mt-0.5" />
                            <span className="font-['Inter'] text-gray-600">
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-['Montserrat'] text-4xl text-[#1b1b1b] mb-4">
              Produtos e Experiências
            </h2>
            <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
              Diversidade de ofertas que combina comercialização, artesanato e turismo experiencial
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {products.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full border-2 border-[#006b4f]/20 hover:border-[#006b4f] transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <ShoppingBag className="h-6 w-6 text-[#006b4f]" />
                    <h3 className="font-['Inter'] text-xl text-[#1b1b1b]">
                      {category.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#006b4f] flex-shrink-0 mt-2" />
                        <span className="font-['Inter'] text-sm text-gray-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#006b4f] to-[#014733] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#caa34b] rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Sparkles className="h-16 w-16 text-[#caa34b] mx-auto mb-6" />
            
            <h2 className="font-['Montserrat'] text-4xl md:text-5xl text-white mb-6">
              Construindo o Futuro de Campos Verdes
            </h2>
            
            <p className="font-['Inter'] text-xl text-white/90 mb-8 leading-relaxed">
              O Mercado Municipal é mais que uma infraestrutura comercial: é o coração pulsante 
              de uma economia regenerativa que valoriza o artesanato local, preserva tradições 
              e projeta Campos Verdes no cenário nacional do turismo mineral.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-[#006b4f] hover:bg-white/90 px-8 py-6 text-lg"
              >
                <Store className="h-5 w-5 mr-2" />
                Participar do Projeto
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                <Target className="h-5 w-5 mr-2" />
                Ver APL 2050 Completo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
