import {
  Building2,
  Landmark,
  DollarSign,
  MapPin,
  Shield,
  Leaf,
  GraduationCap,
  FlaskConical,
  Users,
  FileCheck,
  TrendingUp,
  Award,
  Target,
  CheckCircle2,
} from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

interface Partner {
  id: string;
  name: string;
  acronym?: string;
  category: "federal" | "estadual" | "municipal" | "regulador" | "academico" | "cooperativo";
  description: string;
  role: string;
  icon: any;
  color: string;
  impact?: string[];
}

const partners: Partner[] = [
  {
    id: "sudeco",
    name: "Superintendência do Desenvolvimento do Centro-Oeste",
    acronym: "SUDECO",
    category: "federal",
    description: "Autarquia federal responsável pelo desenvolvimento regional integrado do Centro-Oeste.",
    role: "Articulação estratégica e fomento ao desenvolvimento regional sustentável através do PRDCO (Plano Regional de Desenvolvimento do Centro-Oeste).",
    icon: Building2,
    color: "#006b4f",
    impact: [
      "Alinhamento com PRDCO",
      "Desenvolvimento Integrado",
      "Transparência e Governança",
      "Case de Sucesso CO"
    ]
  },
  {
    id: "fco",
    name: "Fundo Constitucional de Financiamento do Centro-Oeste",
    acronym: "FCO",
    category: "federal",
    description: "Instrumento de política regional para financiamento de empreendimentos produtivos no Centro-Oeste.",
    role: "Financiamento de implantação, ampliação e modernização dos ativos produtivos (Centro de Lapidação, GEMLAB Tracer, Planta de Remineralização, Complexo Turístico).",
    icon: DollarSign,
    color: "#caa34b",
    impact: [
      "FCO Empresarial/Industrial",
      "FCO Ciência & Tecnologia",
      "FCO Rural/Verde",
      "FCO Turismo"
    ]
  },
  {
    id: "fdco",
    name: "Fundo de Desenvolvimento do Centro-Oeste",
    acronym: "FDCO",
    category: "federal",
    description: "Fundo para projetos de grande capacidade germinativa e infraestrutura estratégica.",
    role: "Financiamento de longo prazo (até 20 anos) para projetos de recuperação ambiental, turismo, ciência e tecnologia, e fortalecimento de cadeias produtivas.",
    icon: TrendingUp,
    color: "#014733",
    impact: [
      "Prazos até 20 anos",
      "Taxas diferenciadas",
      "Apoio a APL",
      "Infraestrutura"
    ]
  },
  {
    id: "governo-goias",
    name: "Governo do Estado de Goiás",
    acronym: "Governo de Goiás",
    category: "estadual",
    description: "Parceiro estratégico estadual no desenvolvimento da cadeia produtiva da esmeralda.",
    role: "Apoio institucional, articulação política, e integração com políticas estaduais de mineração, agricultura e turismo.",
    icon: Landmark,
    color: "#006b4f",
    impact: [
      "Políticas Públicas Estaduais",
      "Articulação Institucional",
      "Desenvolvimento Regional",
      "Apoio à Cooperativas"
    ]
  },
  {
    id: "prefeitura-cv",
    name: "Prefeitura Municipal de Campos Verdes",
    acronym: "Prefeitura CV",
    category: "municipal",
    description: "Governo municipal sede do projeto, responsável pela gestão local e desenvolvimento territorial.",
    role: "Parceria na gestão do Fundo Municipal GEMLAB (5% de ISS), apoio logístico, e integração com políticas de desenvolvimento urbano e turístico.",
    icon: MapPin,
    color: "#caa34b",
    impact: [
      "Fundo Municipal GEMLAB",
      "Infraestrutura Local",
      "Turismo de Base Local",
      "Desenvolvimento Urbano"
    ]
  },
  {
    id: "anm",
    name: "Agência Nacional de Mineração",
    acronym: "ANM",
    category: "regulador",
    description: "Agência reguladora federal responsável pela fiscalização e normatização da atividade mineral.",
    role: "Regulamentação, fiscalização e conformidade da atividade de extração. Validação do protocolo GEMLAB para rastreabilidade e recolhimento automático de CFEM.",
    icon: Shield,
    color: "#1b1b1b",
    impact: [
      "Compliance Mineral",
      "Fiscalização",
      "CFEM Automatizado",
      "Segurança Jurídica"
    ]
  },
  {
    id: "semad",
    name: "Secretaria de Estado de Meio Ambiente e Desenvolvimento Sustentável",
    acronym: "SEMAD-GO",
    category: "regulador",
    description: "Órgão estadual responsável pela política ambiental e licenciamento.",
    role: "Licenciamento ambiental, validação da economia circular (transformação de rejeito em remineralizador), e apoio às práticas de mineração sustentável.",
    icon: Leaf,
    color: "#006b4f",
    impact: [
      "Licenciamento Ambiental",
      "Economia Circular",
      "Sustentabilidade",
      "Recuperação de Áreas"
    ]
  },
  {
    id: "usp",
    name: "Universidade de São Paulo - NAP.Mineração",
    acronym: "USP",
    category: "academico",
    description: "Centro de excelência em pesquisa mineral e gemológica.",
    role: "Validação científica da espectroscopia Raman, certificação gemológica, pesquisa aplicada e formação de gemólogos. Parceiro tecnológico do GEMLAB Tracer.",
    icon: GraduationCap,
    color: "#014733",
    impact: [
      "Validação Científica",
      "Certificação Gemológica",
      "Pesquisa Aplicada",
      "Formação Técnica"
    ]
  },
  {
    id: "if-goiano",
    name: "Instituto Federal Goiano",
    acronym: "IF Goiano",
    category: "academico",
    description: "Instituição de ensino técnico e tecnológico.",
    role: "Capacitação de jovens em lapidação, design de joias, e tecnologias minerais. Parceiro nos programas 'Mãos de Pedra' e 'Mineração nas Escolas'.",
    icon: FlaskConical,
    color: "#caa34b",
    impact: [
      "Capacitação Técnica",
      "Formação de Lapidários",
      "Educação STEM",
      "Inclusão Produtiva"
    ]
  },
  {
    id: "cooperativa-apl",
    name: "Cooperativas do APL",
    acronym: "COOPERATIVAS",
    category: "cooperativo",
    description: "Rede de cooperativas locais de garimpeiros e produtores de esmeraldas.",
    role: "Oráculo Operacional e Custodiante no Protocolo GEMLAB. Responsável pela organização da cadeia produtiva, certificação de origem, e gestão compartilhada do sistema de rastreabilidade.",
    icon: Users,
    color: "#006b4f",
    impact: [
      "Oráculo Operacional",
      "Certificação de Origem",
      "Organização Produtiva",
      "Gestão Compartilhada"
    ]
  }
];

const categoryLabels = {
  federal: "Federal",
  estadual: "Estadual",
  municipal: "Municipal",
  regulador: "Órgão Regulador",
  academico: "Acadêmico",
  cooperativo: "Cooperativo"
};

const categoryColors = {
  federal: "bg-[#014733] text-white",
  estadual: "bg-[#006b4f] text-white",
  municipal: "bg-[#caa34b] text-white",
  regulador: "bg-[#1b1b1b] text-white",
  academico: "bg-[#006b4f]/80 text-white",
  cooperativo: "bg-[#caa34b]/80 text-white"
};

export function InstitutionalPartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-[#f8f9fa] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#006b4f]/10 px-4 py-2 rounded-full mb-6">
            <Award className="h-5 w-5 text-[#006b4f]" />
            <span className="font-['Inter'] text-sm font-semibold text-[#006b4f]">
              Governança Institucional
            </span>
          </div>
          <h2 className="font-['Montserrat'] text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b1b1b] mb-6">
            Parceiros Institucionais
          </h2>
          <p className="font-['Inter'] text-lg text-gray-600 max-w-3xl mx-auto">
            O Projeto Avança Campos Verdes 2050 conta com uma rede sólida de parceiros institucionais,
            garantindo <span className="text-[#006b4f] font-semibold">governança transparente</span>,{" "}
            <span className="text-[#006b4f] font-semibold">compliance regulatório</span> e{" "}
            <span className="text-[#006b4f] font-semibold">impacto social verificável</span>.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white border-2 border-[#006b4f]/20 rounded-xl p-6 text-center hover:border-[#006b4f] transition-all">
            <div className="text-3xl font-bold text-[#006b4f] mb-2">10</div>
            <div className="font-['Inter'] text-sm text-gray-600">Parceiros Estratégicos</div>
          </div>
          <div className="bg-white border-2 border-[#caa34b]/20 rounded-xl p-6 text-center hover:border-[#caa34b] transition-all">
            <div className="text-3xl font-bold text-[#caa34b] mb-2">3</div>
            <div className="font-['Inter'] text-sm text-gray-600">Órgãos Federais</div>
          </div>
          <div className="bg-white border-2 border-[#014733]/20 rounded-xl p-6 text-center hover:border-[#014733] transition-all">
            <div className="text-3xl font-bold text-[#014733] mb-2">2</div>
            <div className="font-['Inter'] text-sm text-gray-600">Instituições Acadêmicas</div>
          </div>
          <div className="bg-white border-2 border-[#1b1b1b]/20 rounded-xl p-6 text-center hover:border-[#1b1b1b] transition-all">
            <div className="text-3xl font-bold text-[#1b1b1b] mb-2">100%</div>
            <div className="font-['Inter'] text-sm text-gray-600">Compliance Verificado</div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {partners.map((partner) => {
            const Icon = partner.icon;
            return (
              <Card
                key={partner.id}
                className="group bg-white border-2 border-gray-200 hover:border-[#006b4f] hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: partner.color }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-['Montserrat'] font-bold text-[#1b1b1b] text-lg leading-tight">
                            {partner.acronym || partner.name}
                          </h3>
                          {partner.acronym && (
                            <p className="font-['Inter'] text-xs text-gray-500 mt-1">
                              {partner.name}
                            </p>
                          )}
                        </div>
                        <Badge className={`${categoryColors[partner.category]} text-xs whitespace-nowrap flex-shrink-0`}>
                          {categoryLabels[partner.category]}
                        </Badge>
                      </div>
                      <p className="font-['Inter'] text-sm text-gray-600 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="bg-[#f8f9fa] rounded-lg p-4 mb-4">
                    <div className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-[#006b4f] mt-0.5 flex-shrink-0" />
                      <p className="font-['Inter'] text-sm text-gray-700 leading-relaxed">
                        {partner.role}
                      </p>
                    </div>
                  </div>

                  {/* Impact Areas */}
                  {partner.impact && partner.impact.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FileCheck className="h-4 w-4 text-[#caa34b]" />
                        <span className="font-['Inter'] text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Áreas de Impacto
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {partner.impact.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#006b4f] mt-0.5 flex-shrink-0" />
                            <span className="font-['Inter'] text-xs text-gray-700 leading-tight">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-[#006b4f] to-[#014733] rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Award className="h-5 w-5" />
              <span className="font-['Inter'] text-sm font-semibold">
                Governança GEMLAB
              </span>
            </div>
            <h3 className="font-['Montserrat'] text-2xl md:text-3xl font-bold mb-4">
              Protocolo GEMLAB: Compliance Socioeconômico Automatizado
            </h3>
            <p className="font-['Inter'] text-base md:text-lg text-white/90 mb-8 leading-relaxed">
              A tecnologia GEMLAB garante rastreabilidade científica (Raman), certificação digital e
              blockchain para organizar a cadeia produtiva. Para a SUDECO, que prioriza transparência
              e "Gestão Pública de Alto Nível", o sistema garante{" "}
              <span className="font-semibold">emissão de Nota Fiscal e recolhimento automático de impostos</span>{" "}
              (CFEM/ISS), tornando a cadeia formalizada e auditável.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Shield className="h-8 w-8 text-[#caa34b] mx-auto mb-3" />
                <h4 className="font-['Montserrat'] font-semibold mb-2">Transparência Total</h4>
                <p className="font-['Inter'] text-sm text-white/80">
                  Rastreabilidade desde a jazida até o varejo
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <FileCheck className="h-8 w-8 text-[#caa34b] mx-auto mb-3" />
                <h4 className="font-['Montserrat'] font-semibold mb-2">Fiscalização Automática</h4>
                <p className="font-['Inter'] text-sm text-white/80">
                  Projetos que "se fiscalizam" atraem investimento público
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <TrendingUp className="h-8 w-8 text-[#caa34b] mx-auto mb-3" />
                <h4 className="font-['Montserrat'] font-semibold mb-2">Impacto Verificável</h4>
                <p className="font-['Inter'] text-sm text-white/80">
                  Métricas sociais e ambientais em tempo real
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
