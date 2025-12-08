import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Users,
  TrendingUp,
  Quote,
  Play,
  ExternalLink,
  CheckCircle2,
  Award,
  Heart,
  Building2,
  FileCheck
} from "lucide-react";
import { motion } from "motion/react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  photo: string;
  quote: string;
  impact: string;
}

interface Metric {
  label: string;
  before: string;
  after: string;
  improvement: string;
}

export function SocialProofPage() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "José Carlos Silva",
      role: "Presidente",
      organization: "COOPESMERALDA",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
      quote: "Antes do GemLab, perdíamos 70% do valor das nossas esmeraldas para atravessadores. Hoje, com a certificação científica e venda direta, triplicamos nossa renda. É a mudança que esperávamos há 20 anos.",
      impact: "+285% na renda mensal dos cooperados"
    },
    {
      id: "2",
      name: "Maria Aparecida Santos",
      role: "Garimpeira",
      organization: "Cooperativa Campos Verdes",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
      quote: "Minha família vive da mineração há 3 gerações. Com o protocolo GemLab, finalmente conseguimos vender diretamente para joalherias de São Paulo. Meu filho agora estuda na faculdade graças a isso.",
      impact: "De R$ 850/mês para R$ 2.400/mês"
    },
    {
      id: "3",
      name: "Dr. Paulo Mendes",
      role: "Gemólogo Certificado",
      organization: "LabGem Goiás",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200",
      quote: "A tecnologia SpectralHash revolucionou nossa forma de certificar. Não tem como falsificar - cada esmeralda tem uma 'impressão digital' única registrada no blockchain. É ciência de ponta a serviço da mineração artesanal.",
      impact: "100% de precisão na identificação"
    }
  ];

  const beforeAfterMetrics: Metric[] = [
    {
      label: "Renda Média Familiar",
      before: "R$ 850/mês",
      after: "R$ 2.400/mês",
      improvement: "+182%"
    },
    {
      label: "Margem de Lucro",
      before: "30% do valor",
      after: "92% do valor",
      improvement: "+207%"
    },
    {
      label: "Tempo para Venda",
      before: "45-60 dias",
      after: "7-15 dias",
      improvement: "-75%"
    },
    {
      label: "Inadimplência Fiscal",
      before: "68% das operações",
      after: "2.2% das operações",
      improvement: "-97%"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-[#caa34b] text-white px-4 py-2">
          <Award className="h-4 w-4 mr-2" />
          Casos de Sucesso Verificados
        </Badge>
        <h1 className="font-['Montserrat'] text-[#1b1b1b] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
          Impacto Real nas Comunidades
        </h1>
        <p className="text-[#1b1b1b]/70 max-w-3xl mx-auto">
          Conheça as histórias de garimpeiros, cooperativas e gemólogos que transformaram suas vidas
          com o Protocolo GemLab - validadas pela Prefeitura de Campos Verdes.
        </p>
      </div>

      {/* Vídeo de Depoimentos */}
      <Card className="mb-12 border-2 border-[#006b4f] overflow-hidden">
        <div className="relative aspect-video bg-gradient-to-br from-[#006b4f]/20 to-[#014733]/20">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <Play className="h-20 w-20 text-white bg-[#006b4f] rounded-full p-5 cursor-pointer hover:scale-110 transition-transform" />
            <div className="text-center px-4">
              <p className="text-white font-['Montserrat']" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                Depoimento: COOPESMERALDA
              </p>
              <p className="text-white/90 text-sm">
                15 garimpeiros contam como o GemLab mudou suas vidas
              </p>
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <Badge className="bg-[#dc2626] text-white">
              ● LIVE
            </Badge>
          </div>
          <div className="absolute bottom-4 right-4">
            <Badge className="bg-black/70 text-white">
              12:45
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="font-['Montserrat']" style={{ fontWeight: 600 }}>
                Documentário: "Do Garimpo ao Blockchain"
              </p>
              <p className="text-sm text-[#1b1b1b]/70">
                Produzido em parceria com a Prefeitura de Campos Verdes - Dezembro 2024
              </p>
            </div>
            <Button className="bg-[#006b4f] hover:bg-[#014733] text-white gap-2">
              <Play className="h-4 w-4" />
              Assistir Completo
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Antes × Depois - Infográfico */}
      <Card className="mb-12 border-2 border-[#caa34b]">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 font-['Montserrat']" style={{ fontSize: '1.75rem' }}>
            <TrendingUp className="h-6 w-6 text-[#caa34b]" />
            Antes × Depois: Dados Reais da Transformação
          </CardTitle>
          <p className="text-sm text-[#1b1b1b]/70">
            Comparativo de 368 famílias antes e após a implementação do Protocolo GemLab
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfterMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-6 space-y-4">
                    <p className="text-sm text-[#1b1b1b]/70 text-center">{metric.label}</p>
                    
                    {/* Antes */}
                    <div className="text-center p-3 bg-[#dc2626]/10 rounded-lg">
                      <p className="text-xs text-[#1b1b1b]/60 mb-1">Antes (Atravessadores)</p>
                      <p className="font-['Montserrat'] text-[#dc2626]" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                        {metric.before}
                      </p>
                    </div>

                    {/* Depois */}
                    <div className="text-center p-3 bg-[#006b4f]/10 rounded-lg">
                      <p className="text-xs text-[#1b1b1b]/60 mb-1">Depois (GemLab)</p>
                      <p className="font-['Montserrat'] text-[#006b4f]" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                        {metric.after}
                      </p>
                    </div>

                    {/* Melhoria */}
                    <div className="text-center">
                      <Badge className="bg-[#caa34b] text-white gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {metric.improvement}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Depoimentos Individuais */}
      <div className="mb-12">
        <h2 className="font-['Montserrat'] text-[#1b1b1b] text-center mb-8" style={{ fontSize: '2rem', fontWeight: 700 }}>
          Vozes da Transformação
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <Card className="h-full border-2 hover:shadow-lg transition-all">
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <Quote className="h-10 w-10 text-[#006b4f]/20" />

                  {/* Testimonial Text */}
                  <p className="text-[#1b1b1b]/90 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  <Separator />

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-[#006b4f] flex-shrink-0">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-['Montserrat']" style={{ fontWeight: 700 }}>{testimonial.name}</p>
                      <p className="text-sm text-[#1b1b1b]/70">{testimonial.role}</p>
                      <p className="text-xs text-[#006b4f]">{testimonial.organization}</p>
                    </div>
                  </div>

                  {/* Impact Badge */}
                  <Badge className="w-full justify-center bg-[#caa34b] text-white py-2 gap-1">
                    <Heart className="h-3 w-3" />
                    {testimonial.impact}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Carta da Prefeitura */}
      <Card className="border-2 border-[#006b4f] bg-gradient-to-br from-[#006b4f]/5 to-white">
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-[#006b4f]" />
              <div>
                <CardTitle className="font-['Montserrat']" style={{ fontSize: '1.5rem' }}>
                  Atestado Oficial da Prefeitura
                </CardTitle>
                <p className="text-sm text-[#1b1b1b]/70">
                  Validação Municipal do Oracle Fiscal e Impacto Econômico
                </p>
              </div>
            </div>
            <Button variant="outline" className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white gap-2">
              <FileCheck className="h-4 w-4" />
              Ver Documento Completo
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-6 bg-white rounded-lg border-2 border-[#006b4f] border-dashed">
            <p className="text-[#1b1b1b]/90 italic mb-4">
              &quot;A Prefeitura Municipal de Campos Verdes atesta que o Protocolo GemLab, implementado
              desde janeiro de 2024, resultou em um aumento de 304% na arrecadação de CFEM (Compensação
              Financeira pela Exploração Mineral) em relação ao ano anterior.
            </p>
            <p className="text-[#1b1b1b]/90 italic mb-4">
              O sistema de Oracle Fiscal, que integra nossas bases de dados tributários com o blockchain
              Ethereum, tem operado com 100% de disponibilidade e conformidade com a legislação vigente.
            </p>
            <p className="text-[#1b1b1b]/90 italic mb-6">
              Certificamos que 368 famílias de garimpeiros artesanais tiveram aumento médio de renda de 185%,
              contribuindo significativamente para o desenvolvimento socioeconômico do município.&quot;
            </p>

            <Separator className="mb-4" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <p className="font-['Montserrat']" style={{ fontWeight: 700 }}>João Pedro de Oliveira</p>
                <p className="text-sm text-[#1b1b1b]/70">Prefeito de Campos Verdes - GO</p>
                <p className="text-xs text-[#1b1b1b]/60">Decreto Municipal nº 1.247/2024</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Badge className="bg-[#006b4f] text-white gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Documento Autenticado
                </Badge>
                <p className="text-xs text-[#1b1b1b]/60">Emitido em 01/12/2024</p>
              </div>
            </div>
          </div>

          {/* Selos e Certificações */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border">
              <CheckCircle2 className="h-8 w-8 text-[#006b4f] mx-auto mb-2" />
              <p className="text-xs text-[#1b1b1b]/70">Validado por</p>
              <p className="text-sm font-['Montserrat']" style={{ fontWeight: 600 }}>Prefeitura</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <CheckCircle2 className="h-8 w-8 text-[#006b4f] mx-auto mb-2" />
              <p className="text-xs text-[#1b1b1b]/70">Conformidade</p>
              <p className="text-sm font-['Montserrat']" style={{ fontWeight: 600 }}>ANM</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <CheckCircle2 className="h-8 w-8 text-[#006b4f] mx-auto mb-2" />
              <p className="text-xs text-[#1b1b1b]/70">Auditado por</p>
              <p className="text-sm font-['Montserrat']" style={{ fontWeight: 600 }}>Receita Federal</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border">
              <CheckCircle2 className="h-8 w-8 text-[#006b4f] mx-auto mb-2" />
              <p className="text-xs text-[#1b1b1b]/70">Blockchain</p>
              <p className="text-sm font-['Montserrat']" style={{ fontWeight: 600 }}>EAS Ethereum</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
