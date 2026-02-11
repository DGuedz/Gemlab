import { motion } from "motion/react";
import {
  Landmark,
  Calendar,
  MapPin,
  Users,
  Sparkles,
  BookOpen,
  Eye,
  Heart,
  Building2,
  Clock,
  Gem,
  FlaskConical,
  Mountain,
  History,
  Camera,
  School,
  ArrowLeft,
  CheckCircle2,
  Award,
  Globe,
  Target,
  Lightbulb
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface MuseumPageProps {
  onBack?: () => void;
}

export function MuseumPage({ onBack }: MuseumPageProps = {}) {
  const exhibitions = [
    {
      id: "historia-garimpo",
      name: "História do Garimpo de Campos Verdes",
      icon: History,
      color: "#006b4f",
      image: "https://images.unsplash.com/photo-1713700743037-ebc94696d157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbmclMjBoZXJpdGFnZSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzY0MDk3ODExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Linha do tempo desde a descoberta das primeiras esmeraldas até os dias atuais",
      highlights: [
        "Reprodução cenográfica das primeiras minas",
        "Ferramentas e equipamentos históricos",
        "Fotos e documentos raros dos garimpeiros pioneiros",
        "Vídeos com depoimentos dos fundadores"
      ]
    },
    {
      id: "geologia-esmeraldas",
      name: "Geologia das Esmeraldas Brasileiras",
      icon: Mountain,
      color: "#014733",
      image: "https://images.unsplash.com/photo-1759680239551-bd495c0588e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9sb2dpY2FsJTIwbXVzZXVtJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NjQwOTc4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Formação geológica única de Campos Verdes e características mineralógicas das esmeraldas",
      highlights: [
        "Amostras de talco xisto e rochas hospedeiras",
        "Esmeraldas brutas em diferentes tamanhos",
        "Explicação sobre a formação há milhões de anos",
        "Mapa geológico interativo da região"
      ]
    },
    {
      id: "acervo-esmeraldas",
      name: "Acervo de Esmeraldas Certificadas",
      icon: Gem,
      color: "#caa34b",
      image: "https://images.unsplash.com/photo-1625479610681-f789345a8157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyYWxkJTIwZ2Vtc3RvbmUlMjBtaW5lcmFsfGVufDF8fHx8MTc2NDA5NzgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Coleção de esmeraldas históricas e certificadas com rastreabilidade completa",
      highlights: [
        "Esmeraldas lapidadas em diversos cortes",
        "Peças históricas com certificação GEMLAB",
        "QR codes para verificação blockchain",
        "Exposição de SpectralHash (assinatura molecular)"
      ]
    },
    {
      id: "cultura-tradicoes",
      name: "Cultura e Tradições dos Garimpeiros",
      icon: Users,
      color: "#10b981",
      image: "https://images.unsplash.com/photo-1641666017160-3ca811d1b289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGhlcml0YWdlJTIwc3Rvcnl0ZWxsaW5nfGVufDF8fHx8MTc2NDA5NzgxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Trilhas de contação de histórias sobre saberes tradicionais e modo de vida",
      highlights: [
        "Áudios com histórias contadas por garimpeiros",
        "Objetos pessoais e utensílios do dia a dia",
        "Exposição de artesanato mineral local",
        "Vídeos sobre técnicas tradicionais de mineração"
      ]
    }
  ];

  const emeraldFacts = [
    {
      title: "Cor Verde Única",
      icon: Sparkles,
      description: "As esmeraldas de Campos Verdes possuem tonalidade verde intensa devido à presença de cromo e vanádio",
      detail: "A intensidade da cor é classificada em escala gemológica e certificada por Espectroscopia Raman"
    },
    {
      title: "Formação Geológica",
      icon: Mountain,
      description: "Formadas há cerca de 600 milhões de anos em condições geológicas extremas de pressão e temperatura",
      detail: "O talco xisto de Campos Verdes é a rocha hospedeira ideal para esmeraldas de qualidade excepcional"
    },
    {
      title: "Dureza e Durabilidade",
      icon: Award,
      description: "Classificadas com dureza 7.5-8 na escala Mohs, são mais resistentes que o quartzo",
      detail: "Apesar das inclusões naturais (jardins), mantêm excelente durabilidade quando bem lapidadas"
    },
    {
      title: "Rastreabilidade Científica",
      icon: FlaskConical,
      description: "Cada esmeralda possui uma 'impressão digital' molecular única gerada por Espectroscopia Raman",
      detail: "O SpectralHash (EAS #2) garante autenticidade e origem, combatendo falsificações e contrabando"
    }
  ];

  const visitInfo = {
    status: "Implementação prevista: Junho/2028",
    location: "Centro Integrado da Mineração, Campos Verdes - GO",
    hours: "Terça a Domingo: 9h às 17h (quando aberto)",
    admission: "Gratuito para residentes | Visitantes: R$ 20,00",
    guides: "Tours guiados disponíveis em português e inglês",
    accessibility: "Acessibilidade completa para pessoas com deficiência",
    contact: "COOPESMERALDA • CNPJ: 34.926.901/0001-20"
  };

  const educationalPrograms = [
    {
      name: "Museu Itinerante nas Escolas",
      icon: School,
      description: "Exposição móvel que leva o acervo do museu para escolas da região",
      beneficiaries: "600+ estudantes/ano",
      integration: "Parte do projeto 'Mineração nas Escolas'"
    },
    {
      name: "Oficinas de Geociências",
      icon: BookOpen,
      description: "Atividades práticas sobre mineralogia, geologia e lapidação",
      beneficiaries: "Jovens e adultos",
      integration: "Pipeline para projetos 'Mãos de Pedra' e 'VERDEJAR'"
    },
    {
      name: "Trilhas Interpretativas",
      icon: MapPin,
      description: "Visitas guiadas às antigas minas com explicações sobre técnicas de mineração",
      beneficiaries: "Turistas e pesquisadores",
      integration: "Rotas Turísticas de Campos Verdes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f0fdf4] to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#e5e7eb]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#014733] via-[#006b4f] to-[#014733]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center space-y-6"
          >
            <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Landmark className="h-12 w-12 text-white" />
            </div>

            <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              Implementação: Junho/2028 • Timeline: 2025-2050
            </Badge>

            <h1 className="font-['Montserrat'] text-4xl lg:text-6xl text-white">
              Museu de Mineração de Campos Verdes
            </h1>
            
            <p className="font-['Inter'] text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Centro de Referência Cultural • Preservação da Memória Viva • 
              <strong className="text-[#caa34b]"> Turismo Mineral Estratégico</strong>
            </p>

            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <Badge className="bg-[#caa34b] text-white px-4 py-2">APL Campos Verdes 2050</Badge>
              <Badge className="bg-white/20 backdrop-blur-md text-white px-4 py-2">Turismo Criativo</Badge>
              <Badge className="bg-white/20 backdrop-blur-md text-white px-4 py-2">Geoturismo</Badge>
              <Badge className="bg-white/20 backdrop-blur-md text-white px-4 py-2">Economia da Cultura</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Missão do Museu */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 lg:p-12 border-2 border-[#006b4f]/30 bg-gradient-to-br from-white to-[#f0fdf4] shadow-xl">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#006b4f]/10 flex items-center justify-center">
                      <Target className="h-8 w-8 text-[#006b4f]" />
                    </div>
                    <h2 className="font-['Montserrat'] text-3xl text-[#1b1b1b]">
                      Missão e Objetivos
                    </h2>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed text-lg">
                      O Museu de Mineração tem como missão <strong className="text-[#006b4f]">preservar, 
                      valorizar e difundir a memória coletiva</strong>, a identidade cultural e o patrimônio 
                      histórico de Campos Verdes, evitando a perda de referências culturais entre as novas gerações.
                    </p>
                    <p className="font-['Inter'] text-gray-600 leading-relaxed">
                      Mais do que um espaço de exposição, é um <strong className="text-[#014733]">Centro de Conhecimento</strong> que 
                      integra história, técnicas, cultura e saberes tradicionais, transformando o ciclo da esmeralda de 
                      extrativista para regenerativo.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { icon: History, text: "Preservação da memória coletiva e identidade cultural" },
                      { icon: BookOpen, text: "Centro de Referência em história do garimpo" },
                      { icon: School, text: "Função educacional e formação de novas gerações" },
                      { icon: Heart, text: "Fortalecimento do pertencimento comunitário" },
                      { icon: Globe, text: "Atração turística e desenvolvimento regional" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg border-2 border-[#006b4f]/20 hover:border-[#006b4f] transition-colors">
                        <item.icon className="h-6 w-6 text-[#006b4f] flex-shrink-0 mt-0.5" />
                        <span className="font-['Inter'] text-sm text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exposições */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#caa34b] text-[#caa34b]">
                Acervo e Exposições
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Conheça Nossas Exposições
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Experiências imersivas que conectam visitantes à história mineral de Campos Verdes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {exhibitions.map((exhibition, index) => (
                <motion.div
                  key={exhibition.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full border-2 hover:shadow-2xl transition-all duration-300 group" style={{ borderColor: `${exhibition.color}30` }}>
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback 
                        src={exhibition.image}
                        alt={exhibition.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b]/90 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 rounded-xl backdrop-blur-md border-2 border-white/30 flex items-center justify-center" style={{ backgroundColor: `${exhibition.color}90` }}>
                          <exhibition.icon className="h-7 w-7 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-['Montserrat'] text-xl text-[#1b1b1b] mb-2">
                          {exhibition.name}
                        </h3>
                        <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                          {exhibition.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="font-['Inter'] text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <Eye className="h-4 w-4" style={{ color: exhibition.color }} />
                          Destaques:
                        </div>
                        {exhibition.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: exhibition.color }} />
                            <span className="font-['Inter'] text-gray-600">{highlight}</span>
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

      {/* Fatos sobre Esmeraldas */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#006b4f] text-[#006b4f]">
                Ciência e Gemologia
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Esmeraldas de Campos Verdes
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Descubra as características únicas que tornam nossas esmeraldas excepcionais
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {emeraldFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-6 h-full border-2 border-[#006b4f]/20 hover:border-[#006b4f] transition-all duration-300 hover:shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center flex-shrink-0">
                          <fact.icon className="h-6 w-6 text-[#006b4f]" />
                        </div>
                        <div>
                          <h3 className="font-['Montserrat'] text-lg text-[#1b1b1b] mb-2">
                            {fact.title}
                          </h3>
                          <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                            {fact.description}
                          </p>
                        </div>
                      </div>
                      <div className="p-3 bg-[#f0fdf4] rounded-lg border border-[#006b4f]/20">
                        <p className="font-['Inter'] text-xs text-gray-700 leading-relaxed">
                          <Lightbulb className="h-3.5 w-3.5 inline mr-1 text-[#caa34b]" />
                          {fact.detail}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Card destacado sobre Protocolo GEMLAB */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="p-8 border-2 border-[#caa34b]/30 bg-gradient-to-br from-white to-[#caa34b]/5">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#caa34b] to-[#006b4f] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FlaskConical className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-['Montserrat'] text-2xl text-[#1b1b1b]">
                      Certificação Científica GEMLAB
                    </h3>
                    <p className="font-['Inter'] text-gray-700 leading-relaxed">
                      Todas as esmeraldas do acervo do museu são certificadas pelo <strong className="text-[#006b4f]">Protocolo GEMLAB</strong>, 
                      com rastreabilidade completa via blockchain. Cada peça possui um <strong className="text-[#014733]">SpectralHash 
                      (EAS #2)</strong> - uma assinatura molecular única gerada por Espectroscopia Raman, garantindo autenticidade 
                      e origem verificável.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge className="bg-[#006b4f] text-white">Prova de Origem (EAS #1)</Badge>
                      <Badge className="bg-[#014733] text-white">SpectralHash (EAS #2)</Badge>
                      <Badge className="bg-[#caa34b] text-white">Blockchain Transparente</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programas Educacionais */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#f0fdf4] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#10b981] text-[#10b981]">
                Educação e Comunidade
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Programas Educacionais
              </h2>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
                Iniciativas que levam o conhecimento do museu para além de suas paredes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {educationalPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full border-2 border-[#10b981]/20 hover:border-[#10b981] transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-white to-[#f0fdf4]">
                    <div className="space-y-4">
                      <div className="w-14 h-14 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                        <program.icon className="h-7 w-7 text-[#10b981]" />
                      </div>
                      <div>
                        <h3 className="font-['Montserrat'] text-lg text-[#1b1b1b] mb-2">
                          {program.name}
                        </h3>
                        <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed mb-3">
                          {program.description}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 text-[#10b981]" />
                            <span className="font-['Inter'] text-gray-700">{program.beneficiaries}</span>
                          </div>
                          <Badge variant="outline" className="border-[#10b981] text-[#10b981] text-xs">
                            {program.integration}
                          </Badge>
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

      {/* Informações para Visita */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="border-[#caa34b] text-[#caa34b]">
                Planeje sua Visita
              </Badge>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl text-[#1b1b1b]">
                Informações para Visitantes
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 lg:p-10 border-2 border-[#caa34b]/30 bg-gradient-to-br from-white to-[#caa34b]/5 shadow-xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-[#006b4f]" />
                      </div>
                      <div>
                        <div className="font-['Inter'] font-semibold text-gray-700 mb-1">Status</div>
                        <div className="font-['Inter'] text-sm text-gray-600">{visitInfo.status}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-[#006b4f]" />
                      </div>
                      <div>
                        <div className="font-['Inter'] font-semibold text-gray-700 mb-1">Localização</div>
                        <div className="font-['Inter'] text-sm text-gray-600">{visitInfo.location}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-[#006b4f]" />
                      </div>
                      <div>
                        <div className="font-['Inter'] font-semibold text-gray-700 mb-1">Horário</div>
                        <div className="font-['Inter'] text-sm text-gray-600">{visitInfo.hours}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#006b4f]/10 flex items-center justify-center flex-shrink-0">
                        <Award className="h-6 w-6 text-[#006b4f]" />
                      </div>
                      <div>
                        <div className="font-['Inter'] font-semibold text-gray-700 mb-1">Ingresso</div>
                        <div className="font-['Inter'] text-sm text-gray-600">{visitInfo.admission}</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#caa34b]/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-[#caa34b]" />
                      </div>
                      <div>
                        <div className="font-['Inter'] font-semibold text-gray-700 mb-1">Tours Guiados</div>
                        <div className="font-['Inter'] text-sm text-gray-600">{visitInfo.guides}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#caa34b]/10 flex items-center justify-center flex-shrink-0">
                        <Heart className="h-6 w-6 text-[#caa34b]" />
                      </div>
                      <div>
                        <div className="font-['Inter'] font-semibold text-gray-700 mb-1">Acessibilidade</div>
                        <div className="font-['Inter'] text-sm text-gray-600">{visitInfo.accessibility}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#caa34b]/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-6 w-6 text-[#caa34b]" />
                      </div>
                      <div>
                        <div className="font-['Inter'] font-semibold text-gray-700 mb-1">Gestão</div>
                        <div className="font-['Inter'] text-sm text-gray-600">{visitInfo.contact}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="p-5 bg-gradient-to-r from-[#006b4f]/10 to-[#caa34b]/10 rounded-xl border border-[#006b4f]/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-[#006b4f] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-['Inter'] font-semibold text-[#1b1b1b] mb-2">
                          Integração com Rotas Turísticas
                        </div>
                        <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed">
                          O Museu faz parte das <strong className="text-[#006b4f]">Rotas Turísticas de Campos Verdes</strong>, 
                          conectando visitantes ao Centro Integrado da Mineração, Mercado de Artesanato Mineral e 
                          trilhas interpretativas nas antigas minas. Experiência completa de <strong className="text-[#caa34b]">Geoturismo</strong> e 
                          <strong className="text-[#014733]"> Turismo Criativo</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financiamento e Governança */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#014733] via-[#006b4f] to-[#014733] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto shadow-xl">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h2 className="font-['Montserrat'] text-3xl lg:text-4xl">
                Financiamento e Lastro Social
              </h2>
              <p className="font-['Inter'] text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                Um projeto sustentável financiado pela riqueza que retorna à comunidade
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-8 bg-white/10 backdrop-blur-md border-2 border-white/20">
                <div className="space-y-4">
                  <h3 className="font-['Montserrat'] text-xl text-white">
                    Financiamento Transparente via CFEM/ISS
                  </h3>
                  <p className="font-['Inter'] text-white/90 leading-relaxed">
                    O Museu de Mineração é financiado pela <strong>recuperação de CFEM (Compensação Financeira 
                    pela Exploração Mineral) e ISS</strong>, garantida pelo <strong>Regime Fiscal Automatizado</strong> do 
                    Protocolo GEMLAB. Cada esmeralda certificada contribui automaticamente para a construção e 
                    manutenção do museu.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-white/10 backdrop-blur-md border-2 border-white/20">
                <div className="space-y-4">
                  <h3 className="font-['Montserrat'] text-xl text-white">
                    Argumento ESG Forte
                  </h3>
                  <p className="font-['Inter'] text-white/90 leading-relaxed">
                    O financiamento do Museu e do <strong>Museu Itinerante</strong> é um argumento de venda forte 
                    para o <strong>compliance ESG</strong>, demonstrando que o lucro do mineral retorna para o 
                    desenvolvimento local e a educação. Parte integrante do <strong>Lastro Social do RWA</strong> lastreado em esmeraldas.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-white/10 backdrop-blur-md border-2 border-white/20">
                <div className="space-y-4">
                  <h3 className="font-['Montserrat'] text-xl text-white">
                    Parceria Institucional
                  </h3>
                  <div className="flex items-center gap-4">
                    <Building2 className="h-12 w-12 text-[#caa34b]" />
                    <p className="font-['Inter'] text-white/90 leading-relaxed">
                      <strong>COOPESMERALDA</strong> (CNPJ 34.926.901/0001-20) em parceria com a 
                      <strong> Prefeitura de Campos Verdes</strong>, unindo esforços para criar uma atração turística 
                      e cultural de referência regional.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}