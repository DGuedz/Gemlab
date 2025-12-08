import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  TrendingUp,
  Calculator,
  Shield,
  QrCode,
  Award,
  ArrowRight,
  Zap,
  Target
} from "lucide-react";
import { motion } from "motion/react";

interface CentelhaShowcaseProps {
  onNavigateToImpact: () => void;
  onNavigateToROI: () => void;
  onNavigateToCompliance: () => void;
  onNavigateToQR: () => void;
  onNavigateToSocialProof: () => void;
}

export function CentelhaShowcase({
  onNavigateToImpact,
  onNavigateToROI,
  onNavigateToCompliance,
  onNavigateToQR,
  onNavigateToSocialProof
}: CentelhaShowcaseProps) {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-[#006b4f]" />,
      title: "Dashboard de Impacto Real-Time",
      description: "Métricas ESG ao vivo, KPIs fiscais e evolução de arrecadação CFEM",
      color: "#006b4f",
      onClick: onNavigateToImpact,
      tags: ["ESG", "CFEM", "Gráficos"]
    },
    {
      icon: <Calculator className="h-8 w-8 text-[#caa34b]" />,
      title: "Calculadora ROI para Cooperativas",
      description: "Simulador financeiro com benchmark de atravessadores vs. GemLab",
      color: "#caa34b",
      onClick: onNavigateToROI,
      tags: ["ROI", "Simulador", "Cooperativas"]
    },
    {
      icon: <Shield className="h-8 w-8 text-[#014733]" />,
      title: "Compliance Dashboard",
      description: "Auditoria pública, relatórios fiscais e API para ANM/Receita",
      color: "#014733",
      onClick: onNavigateToCompliance,
      tags: ["ANM", "Blockchain", "Auditoria"]
    },
    {
      icon: <QrCode className="h-8 w-8 text-[#006b4f]" />,
      title: "Sistema de Verificação QR Code",
      description: "Validação pública via smartphone com proof on-chain EAS",
      color: "#006b4f",
      onClick: onNavigateToQR,
      tags: ["QR Code", "Mobile", "EAS"]
    },
    {
      icon: <Award className="h-8 w-8 text-[#caa34b]" />,
      title: "Prova Social & Cases",
      description: "Depoimentos, antes/depois e carta oficial da Prefeitura",
      color: "#caa34b",
      onClick: onNavigateToSocialProof,
      tags: ["Casos", "Prefeitura", "Vídeo"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#006b4f]/5 via-white to-[#caa34b]/5">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-[#006b4f] to-[#caa34b] text-white px-6 py-2 text-sm">
              <Zap className="h-4 w-4 mr-2" />
              Roadmap Programa Centelha
            </Badge>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-['Montserrat'] text-[#1b1b1b] mb-4"
            style={{ fontSize: '2.5rem', fontWeight: 700 }}
          >
            Features Críticas Implementadas
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#1b1b1b]/70 max-w-3xl mx-auto"
          >
            Demonstração completa de MVP funcional com alta complexidade técnica (Web3, Compliance, Dashboards)
            e alinhamento total com critérios ODS do edital Centelha
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Card className="h-full border-2 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
                    onClick={feature.onClick}
                    style={{ borderColor: feature.color }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                         style={{ backgroundColor: `${feature.color}15` }}>
                      {feature.icon}
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#1b1b1b]/30 group-hover:text-[#006b4f] group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="font-['Montserrat']" style={{ fontWeight: 700 }}>
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Card de Resumo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Card className="h-full border-2 border-[#1b1b1b] bg-gradient-to-br from-[#1b1b1b] to-[#014733] text-white">
              <CardHeader>
                <div className="p-3 rounded-lg bg-white/10 w-fit mb-3">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="font-['Montserrat'] text-white" style={{ fontWeight: 700 }}>
                  Impacto no Centelha
                </CardTitle>
                <CardDescription className="text-white/80">
                  Critérios-chave atendidos para maximizar pontuação
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#caa34b]"></div>
                  <p className="text-sm text-white/90">MVP Funcional Demonstrado</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#caa34b]"></div>
                  <p className="text-sm text-white/90">Tração Real Validada</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#caa34b]"></div>
                  <p className="text-sm text-white/90">Viabilidade Comercial</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#caa34b]"></div>
                  <p className="text-sm text-white/90">Alinhamento ODS 8, 12, 16</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#caa34b]"></div>
                  <p className="text-sm text-white/90">Compliance Total CVM</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="p-6 bg-white rounded-2xl border-2 border-[#006b4f] inline-block">
            <p className="text-sm text-[#1b1b1b]/70 mb-3">
              Arquitetura completa validada com {">"}5.000 linhas de código
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-[#006b4f] text-white">Web3 Integration</Badge>
              <Badge className="bg-[#014733] text-white">Blockchain Oracle</Badge>
              <Badge className="bg-[#caa34b] text-white">Recharts Visualization</Badge>
              <Badge className="bg-[#006b4f] text-white">EAS Attestation</Badge>
              <Badge className="bg-[#014733] text-white">QR Code System</Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
