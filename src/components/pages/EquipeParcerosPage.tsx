import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Users, Lightbulb, Handshake, Building2, Award, Target, Linkedin, Mail, Code, Gem, Leaf, Heart, Shield, GraduationCap, Recycle, Palette } from "lucide-react";
import diegoPhoto from "figma:asset/aff55f4031aa5710925ced8213fa7a3f741ba826.png";
import carlosVazPhoto from "figma:asset/ce0382c6cd8ec242e317037397e1002d18bf8077.png";
import raianePhoto from "figma:asset/7eda5ff7c708984c3a7e7b0700ee07a1ffb59823.png";
import rosanaPhoto from "figma:asset/928f13b939082132817bf529c91e2976c86ea6ab.png";
import leonardoPhoto from "figma:asset/ef582c4ba7855c145f64fb7eeb1897056bbfeb4a.png";
import katsonPhoto from "figma:asset/187001437cb91552f236885b778a7cb10072a44e.png";
import railtonPhoto from "figma:asset/ce70c8d1927ea004aacb3150bbbb5932c2cde7d5.png";
import carolinePhoto from "figma:asset/20c2750dde5d2715f5a523515153ef26fabdaff5.png";

interface EquipeParcerosPageProps {
  onNavigateToInstitutional?: () => void;
  onNavigateToEcosystem?: () => void;
  onNavigateToProjects?: () => void;
  onNavigateToRegistry?: () => void;
  onNavigateToRastreabilidade?: () => void;
  onNavigateToGovernancaFiscal?: () => void;
  onNavigateToSustentabilidade?: () => void;
  onNavigateToEquipeParceiros?: () => void;
  onNavigateBack?: () => void;
}

export function EquipeParcerosPage({
  onNavigateToInstitutional,
  onNavigateToEcosystem,
  onNavigateToProjects,
  onNavigateToRegistry,
  onNavigateToRastreabilidade,
  onNavigateToGovernancaFiscal,
  onNavigateToSustentabilidade,
  onNavigateToEquipeParceiros,
  onNavigateBack,
}: EquipeParcerosPageProps = {}) {
  
  const teamMembers = [
    {
      name: "Diego Guedes",
      role: "Founder & CTO",
      pillar: "Tech Lead",
      icon: Code,
      expertise: "Smart Contracts, SpectralHash, RWA",
      bio: "CEO do GEMLAB e Arquiteto Tecnológico com foco em RWA e DeFi. Criador do SpectralHash e da integração da Prefeitura como Oracle Fiscal. Lidera a implementação de ZK-Proofs para compliance fiscal.",
      initials: "DG",
      color: "bg-blue-600",
      photo: diegoPhoto
    },
    {
      name: "Carlos Vaz",
      role: "Dir. Gestão e Relações Governamentais",
      pillar: "Força Política e Gestão",
      icon: Target,
      expertise: "Agronegócios, Articulação Política",
      bio: "Vereador (2º mandato) e Ex-Secretário Municipal de Mineração. Expertise em gestão (SENAR/FAEG). Garante viabilidade regulatória e interlocução com órgãos governamentais.",
      initials: "CV",
      color: "bg-orange-600",
      photo: carlosVazPhoto
    },
    {
      name: "Leonardo Oliveira",
      role: "Presidente COOPESMERALDA",
      pillar: "Autoridade do Lastro",
      icon: Gem,
      expertise: "Oráculo Operacional, Custódia",
      bio: "Presidente da COOPESMERALDA. Experiência em gestão pública. Garante segurança do Underground Vault, emissão de Notas Fiscais e validação física dos lotes de esmeraldas.",
      initials: "LO",
      color: "bg-emerald-600",
      photo: leonardoPhoto
    },
    {
      name: "Rosana Martins",
      role: "Vice-Presidente COOPESMERALDA",
      pillar: "Autoridade do Lastro",
      icon: Gem,
      expertise: "Cadeia Produtiva, Relações Comunitárias",
      bio: "Mineradora com 30 anos de experiência. Assistente Social. Estruturou o APL e Indicação Geográfica (IG) de Campos Verdes. Assegura legitimidade junto aos mineradores tradicionais.",
      initials: "RM",
      color: "bg-emerald-700",
      photo: rosanaPhoto
    },
    {
      name: "Raiane Ferraz",
      role: "Eng. Ambiental Líder",
      pillar: "Blindagem ESG - Ambiental",
      icon: Leaf,
      expertise: "Economia Circular, Talco Xisto",
      bio: "Engenheira Ambiental e Sanitarista. Responsável pela conformidade ambiental e liderança da Economia Circular, transformando rejeito (Talco Xisto) em subprodutos de valor agregado.",
      initials: "RF",
      color: "bg-green-600",
      photo: raianePhoto
    },
    {
      name: "Railton Miranda",
      role: "Consultor Técnico Ambiental",
      pillar: "Blindagem ESG - Ambiental",
      icon: Shield,
      expertise: "Licenciamento, Análise Normativa",
      bio: "Proprietário da Ethos Consultoria, Analista Ambiental da Prefeitura e credenciado Sebrae/Senar. Atua na regularização das frentes de lavra e mitigação de riscos regulatórios.",
      initials: "RM",
      color: "bg-green-700",
      photo: railtonPhoto
    },
    {
      name: "Caroline Melo",
      role: "Eng. Agrônoma",
      pillar: "Blindagem ESG - Ambiental",
      icon: Recycle,
      expertise: "Recursos Hídricos, Recuperação de Áreas",
      bio: "Engenheira Agrônoma com vivência na SEMAD-GO. Especialista em outorga de recursos hídricos. Foca na gestão sustentável da água e recuperação de áreas degradadas.",
      initials: "CM",
      color: "bg-teal-600",
      photo: carolinePhoto
    },
    {
      name: "Katson Xavier",
      role: "Dir. de Impacto Social & Presidente ABC",
      pillar: "Blindagem ESG - Social",
      icon: Heart,
      expertise: "Licença Social para Operar",
      bio: "Presidente da Associação Benjamim Cristã. Garante a Licença Social para Operar através da articulação com terceiro setor e mediação comunitária, assegurando que benefícios cheguem às famílias.",
      initials: "KX",
      color: "bg-purple-600",
      photo: katsonPhoto
    },
  ];

  const coopesmeraldaData = {
    name: "COOPESMERALDA",
    fullName: "Cooperativa de Mineradores de Esmeraldas de Campos Verdes",
    founded: "2019",
    members: "340+ garimpeiros",
    mission: "Formalizar a mineração artesanal, garantindo renda justa e sustentabilidade ambiental.",
    achievements: [
      {
        icon: Users,
        metric: "340+",
        label: "Garimpeiros Formalizados"
      },
      {
        icon: Building2,
        metric: "1.200+",
        label: "Famílias Beneficiadas"
      },
      {
        icon: Award,
        metric: "45%",
        label: "Aumento de Renda Média"
      },
      {
        icon: Target,
        metric: "R$ 2,8M",
        label: "Faturamento Anual (2024)"
      },
    ],
    services: [
      "Assistência técnica e capacitação gemológica",
      "Certificação coletiva via GemLab",
      "Acesso a linha de crédito cooperativo",
      "Comercialização direta com varejistas"
    ]
  };

  const associacaoBenjamimData = {
    name: "Associação Benjamim Cristã",
    acronym: "ABC",
    cnpj: "47.005.591/0001-53",
    founded: "03/12/2021",
    type: "Associação Privada Sem Fins Lucrativos",
    leader: "Katson Xavier",
    mission: "Atua como o pilar social, cultural, educacional e artesanal do Projeto Campos Verdes 2050, sendo a 'Alma Social do 2050' responsável pela dimensão humana, identidade cultural e desenvolvimento comunitário.",
    role: "Braço Social do Ecossistema",
    capabilities: [
      "Captação de recursos governamentais e emendas parlamentares",
      "Acesso a fundos ESG e incentivos culturais (Lei Rouanet, Aldir Blanc)",
      "Escola de Lapidação Comunitária e formação profissional",
      "Núcleo de Artesanato Mineral e Joalheria Cultural"
    ],
    projects: [
      {
        name: "Projeto Mãos de Pedra",
        description: "Capacitação em lapidação, design e empreendedorismo, formando também Operadores Raman"
      },
      {
        name: "Projeto VERDEJAR",
        description: "Artesanato mineral e joalheria, com 5% do faturamento destinado a novos equipamentos para profissionalizados"
      }
    ]
  };

  const advisoryBoard = [
    {
      name: "Prof. Dr. Marcos Silva",
      role: "Conselheiro de Tecnologia",
      affiliation: "UFG - Universidade Federal de Goiás",
      expertise: "Blockchain, Sistemas Descentralizados"
    },
    {
      name: "Dra. Beatriz Rocha",
      role: "Conselheira de Sustentabilidade",
      affiliation: "WWF Brasil",
      expertise: "ESG, Economia Circular"
    },
    {
      name: "Dr. Pedro Martins",
      role: "Conselheiro Legal",
      affiliation: "OAB-GO / Comissão de Mineração",
      expertise: "Direito Minerário, Compliance ANM"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <HeaderComponent 
        onNavigateToInstitutional={onNavigateToInstitutional}
        onNavigateToEcosystem={onNavigateToEcosystem}
        onNavigateToProjects={onNavigateToProjects}
        onNavigateToRegistry={onNavigateToRegistry}
        onNavigateToRastreabilidade={onNavigateToRastreabilidade}
        onNavigateToGovernancaFiscal={onNavigateToGovernancaFiscal}
        onNavigateToSustentabilidade={onNavigateToSustentabilidade}
        onNavigateToEquipeParceiros={onNavigateToEquipeParceiros}
        onNavigateBack={onNavigateBack}
      />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Hero Section */}
        <FadeInWhenVisible>
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-0 text-sm">
              Pilar 4: Equipe & Parceiros
            </Badge>
            <h1 className="font-['Montserrat'] text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
              Equipe Interdisciplinar GEMLAB
            </h1>
            <p className="font-['Inter'] text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Somos uma <strong>Equipe Interdisciplinar de Governança Mineral</strong> que transcende o conceito tradicional de startup. 
              O GEMLAB é a <strong className="text-[#006b4f]">infraestrutura tecnológica e de certificação científica</strong> que sustenta o Projeto Campos Verdes 2050, 
              atuando como <strong>Regente de Contratos</strong> e <strong>Oráculo Científico</strong>. 
              Nossa força está na fusão de quatro pilares: <strong className="text-[#006b4f]">código (tecnologia)</strong>, 
              <strong className="text-[#014733]"> pedra (cooperativa)</strong>, <strong className="text-[#10b981]"> meio ambiente (engenharia)</strong> e 
              <strong className="text-[#caa34b]"> pilar social (liderança comunitária)</strong>.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Team Section - Sem FadeInWhenVisible para garantir visibilidade */}
        <section className="mb-16 sm:mb-20">
          <h2 className="font-['Montserrat'] text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center px-4">
            Liderança e Expertise Central
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
            Time montado para solucionar o trilema da mineração: informalidade, rastreabilidade e passivo ambiental
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 dark:bg-gray-900 dark:border-gray-800">
                  <CardContent className="pt-6 px-4 sm:px-6 pb-6">
                    <div className="flex flex-col items-center text-center">
                      {/* Avatar com foto (principal) */}
                      <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mb-3 border-4 border-white shadow-lg">
                        {member.photo && <AvatarImage src={member.photo} alt={member.name} className="object-cover" />}
                        <AvatarFallback className={`${member.color} text-white font-bold text-lg`}>
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      
                      {/* Badge do pilar */}
                      <Badge variant="outline" className="mb-2 text-xs sm:text-sm px-2 py-1">
                        {member.pillar}
                      </Badge>
                      
                      {/* Ícone pequeno */}
                      <div className={`w-10 h-10 ${member.color} rounded-lg flex items-center justify-center mb-3`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      
                      {/* Nome */}
                      <h3 className="font-['Montserrat'] text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1 leading-tight">
                        {member.name}
                      </h3>
                      
                      {/* Cargo */}
                      <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2 leading-snug">
                        {member.role}
                      </p>
                      
                      {/* Expertise */}
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {member.expertise}
                      </Badge>
                      
                      {/* Bio */}
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {member.bio}
                      </p>
                      
                      {/* Botões de contato */}
                      <div className="flex gap-2 mt-auto">
                        <Button variant="ghost" size="sm" className="h-8 w-8 sm:h-9 sm:w-9 p-0">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 sm:h-9 sm:w-9 p-0">
                          <Mail className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* COOPESMERALDA Section */}
        <FadeInWhenVisible>
          <section className="mb-16 sm:mb-20">
            <Card className="border-2 border-emerald-200 dark:border-emerald-800 dark:bg-gray-900">
              <CardHeader className="text-center px-4 sm:px-6">
                <Badge className="mb-4 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 border-0 mx-auto w-fit text-sm">
                  Parceiro Principal - Pilar Operacional
                </Badge>
                <CardTitle className="font-['Montserrat'] text-2xl sm:text-3xl text-gray-900 dark:text-white mb-2">
                  {coopesmeraldaData.name}
                </CardTitle>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2">
                  {coopesmeraldaData.fullName}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                  Fundada em {coopesmeraldaData.founded} • {coopesmeraldaData.members}
                </p>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="mb-6 sm:mb-8">
                  <h3 className="font-['Inter'] font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-3">
                    Missão:
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {coopesmeraldaData.mission}
                  </p>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {coopesmeraldaData.achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-3 sm:p-4 bg-emerald-50 dark:bg-gray-800 rounded-lg">
                      <achievement.icon className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                      <div className="font-['Montserrat'] text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {achievement.metric}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Services */}
                <div>
                  <h3 className="font-['Inter'] font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-3">
                    Serviços Oferecidos:
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {coopesmeraldaData.services.map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Handshake className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </FadeInWhenVisible>

        {/* Associação Benjamim Cristã Section */}
        <FadeInWhenVisible>
          <section className="mb-16 sm:mb-20">
            <Card className="border-2 border-purple-200 dark:border-purple-800 dark:bg-gray-900">
              <CardHeader className="px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                    <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <Badge className="mb-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-0 text-xs sm:text-sm">
                      Pilar Social - Campos Verdes 2050
                    </Badge>
                    <CardTitle className="font-['Montserrat'] text-xl sm:text-2xl text-gray-900 dark:text-white mb-2">
                      {associacaoBenjamimData.name} ({associacaoBenjamimData.acronym})
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {associacaoBenjamimData.type}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      CNPJ: {associacaoBenjamimData.cnpj} • Fundada em {associacaoBenjamimData.founded}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      Administração: {associacaoBenjamimData.leader}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="mb-6">
                  <h3 className="font-['Inter'] font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-3">
                    Missão e Papel:
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {associacaoBenjamimData.mission}
                  </p>
                  <Badge className="bg-purple-600 text-white border-0 text-xs sm:text-sm">
                    {associacaoBenjamimData.role}
                  </Badge>
                </div>

                <div className="mb-6">
                  <h3 className="font-['Inter'] font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-3">
                    Capacidades Institucionais:
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {associacaoBenjamimData.capabilities.map((capability, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Palette className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-['Inter'] font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-3">
                    Projetos de Impacto Social:
                  </h3>
                  <div className="space-y-4">
                    {associacaoBenjamimData.projects.map((project, index) => (
                      <div key={index} className="p-4 bg-purple-50 dark:bg-gray-800 rounded-lg">
                        <h4 className="font-['Montserrat'] font-semibold text-sm sm:text-base text-purple-800 dark:text-purple-300 mb-2">
                          {project.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </FadeInWhenVisible>

        {/* CTA Section */}
        <FadeInWhenVisible>
          <section className="text-center">
            <Card className="border-2 border-purple-500 dark:border-purple-700 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
              <CardContent className="py-8 sm:py-12 px-4 sm:px-6">
                <h3 className="font-['Montserrat'] text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Quer Fazer Parte do Ecossistema?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Estamos abertos a parcerias com instituições, investidores e cooperativas que compartilham nossa visão de mineração 4.0
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto"
                    onClick={onNavigateToEcosystem}
                  >
                    Explorar Ecossistema
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 w-full sm:w-auto"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Fale Conosco
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </FadeInWhenVisible>
      </main>

      <Footer />
    </div>
  );
}