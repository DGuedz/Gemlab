import { Gem, Mail, MapPin, Phone, Github, Twitter, Linkedin, Building2, GraduationCap, Shield, Users } from "lucide-react";
import logo from "figma:asset/cde6329a6c4b255a7d190dd68be01f6589014264.png"; 

export function Footer() {
  const footerLinks = {
    produto: [
      { label: "Como Funciona", href: "#how-it-works" },
      { label: "Registry Certificado", href: "#registry" },
      { label: "Verificação de Autenticidade", href: "#verificacao" },
      { label: "Para Gemólogos", href: "#gemologists" },
      { label: "Para Garimpeiros", href: "#miners" },
    ],
    projetos: [
      { label: "Portfólio Campos Verdes 2050", href: "#portfolio-projetos" },
      { label: "Tecnologia & Governança", href: "#tecnologia-governanca" },
      { label: "Educação & Capacitação", href: "#educacao-capacitacao" },
      { label: "Ambiental & Sustentabilidade", href: "#ambiental-sustentabilidade" },
      { label: "Financeiro & Mercado", href: "#financeiro-mercado" },
    ],
    recursos: [
      { label: "Documentação Técnica", href: "#docs" },
      { label: "Whitepaper GEMLAB", href: "#whitepaper" },
      { label: "Manifesto Institucional", href: "#manifesto" },
      { label: "Parceiros Institucionais", href: "#parceiros" },
      { label: "Status do Protocolo", href: "#status" },
    ],
    legal: [
      { label: "Política de Privacidade", href: "#privacy" },
      { label: "Termos de Uso (SaaS)", href: "#terms" },
      { label: "Compliance & PLD", href: "#compliance" },
      { label: "Certificações Científicas", href: "#certifications" },
    ],
  };

  const partners = [
    { name: "SUDECO", icon: Building2, color: "#006b4f" },
    { name: "FCO/FDCO", icon: Building2, color: "#caa34b" },
    { name: "USP NAP.Mineração", icon: GraduationCap, color: "#014733" },
    { name: "IF Goiano", icon: GraduationCap, color: "#caa34b" },
    { name: "ANM", icon: Shield, color: "#1b1b1b" },
    { name: "SEMAD-GO", icon: Shield, color: "#006b4f" },
    { name: "COOPESMERALDA", icon: Users, color: "#006b4f" },
  ];

  return (
    <footer className="bg-[#1b1b1b] text-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {logo ? (
                <img
                  src={logo}
                  alt="GemLab Logo"
                  className="h-10 w-10 object-contain"
                />
              ) : (
                <Gem className="h-10 w-10 text-[#006b4f]" />
              )}
              <div className="flex flex-col">
                <span className="font-['Inter'] text-lg font-semibold text-white tracking-tight">
                  GemLab
                </span>
                <span className="font-['Inter'] text-xs text-[#006b4f] font-medium uppercase tracking-wider">
                  Campos Verdes
                </span>
              </div>
            </div>
            <p className="font-['Inter'] text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">
              Empresa de tecnologia de certificação e rastreabilidade gemológica. 
              Fornecemos infraestrutura SaaS para origem verificada e identidade digital de esmeraldas.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400 group">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#006b4f]/20 transition-colors">
                    <MapPin className="h-4 w-4 text-[#006b4f]" />
                </div>
                <span className="font-['Inter']">Campos Verdes - GO, Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 group">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#006b4f]/20 transition-colors">
                    <Mail className="h-4 w-4 text-[#006b4f]" />
                </div>
                <span className="font-['Inter']">contato@gemlab.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 group">
                 <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#006b4f]/20 transition-colors">
                    <Phone className="h-4 w-4 text-[#006b4f]" />
                 </div>
                <span className="font-['Inter']">+55 (62) 3000-0000</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
                <h4 className="font-['Inter'] font-semibold text-white mb-4 text-sm uppercase tracking-wider">Produto</h4>
                <ul className="space-y-2">
                {footerLinks.produto.map((link, index) => (
                    <li key={index}>
                    <a href={link.href} className="font-['Inter'] text-sm text-gray-400 hover:text-[#006b4f] transition-colors block py-1">
                        {link.label}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="font-['Inter'] font-semibold text-white mb-4 text-sm uppercase tracking-wider">Projetos</h4>
                <ul className="space-y-2">
                {footerLinks.projetos.map((link, index) => (
                    <li key={index}>
                    <a href={link.href} className="font-['Inter'] text-sm text-gray-400 hover:text-[#caa34b] transition-colors block py-1">
                        {link.label}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="font-['Inter'] font-semibold text-white mb-4 text-sm uppercase tracking-wider">Recursos</h4>
                <ul className="space-y-2">
                {footerLinks.recursos.map((link, index) => (
                    <li key={index}>
                    <a href={link.href} className="font-['Inter'] text-sm text-gray-400 hover:text-[#006b4f] transition-colors block py-1">
                        {link.label}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="font-['Inter'] font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
                <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                    <a href={link.href} className="font-['Inter'] text-sm text-gray-400 hover:text-[#006b4f] transition-colors block py-1">
                        {link.label}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
          </div>
        </div>

        {/* Parceiros Institucionais Badge */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-[#006b4f]/10 via-[#014733]/10 to-[#006b4f]/10 rounded-xl p-6 border border-[#006b4f]/20">
            <div className="text-center mb-6">
              <h4 className="font-['Montserrat'] font-semibold text-white mb-2">
                Parceiros Institucionais
              </h4>
              <p className="font-['Inter'] text-xs text-gray-400">
                Governança transparente com validação científica e regulatória
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {partners.map((partner, idx) => {
                const Icon = partner.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-[#1b1b1b] px-4 py-2 rounded-lg border border-gray-800 hover:border-[#006b4f] transition-all group"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${partner.color}20` }}
                    >
                      <Icon className="h-3 w-3" style={{ color: partner.color }} />
                    </div>
                    <span className="font-['Inter'] text-xs text-gray-300 group-hover:text-[#006b4f] transition-colors">
                      {partner.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider & Compliance Section */}
        <div className="border-t border-gray-800 pt-8">
          {/* Disclaimer Legal - Compliance CVM */}
          <div className="mb-8 p-6 bg-[#151515] rounded-lg border border-gray-800/50 shadow-inner">
            <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-[#caa34b]"></div>
                <h4 className="font-['Inter'] font-semibold text-[#caa34b] text-xs uppercase tracking-widest">
                Aviso Legal e Conformidade Regulatória
                </h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <p className="font-['Inter'] text-xs text-gray-400 leading-relaxed mb-3 text-justify">
                    <strong className="text-gray-200">Natureza Tecnológica:</strong> A GEMLAB é uma empresa de tecnologia (SaaS) e certificação científica. Não atuamos como instituição financeira, corretora ou administradora de fundos. Não realizamos oferta pública de valores mobiliários (ICOs/STOs) sob jurisdição direta da CVM. Nosso serviço consiste na emissão de certificados digitais de autenticidade (Digital Twins) para esmeraldas físicas.
                    </p>
                    <p className="font-['Inter'] text-xs text-gray-400 leading-relaxed mb-3 text-justify">
                    <strong className="text-gray-200">Aquisição de Ativos:</strong> A comercialização de esmeraldas certificadas e a liquidação financeira ocorrem exclusivamente através de parceiros licenciados e plataformas autorizadas que operam em total conformidade com as regulações do Banco Central do Brasil e CVM.
                    </p>
                    <p className="font-['Inter'] text-xs text-gray-400 leading-relaxed text-justify">
                    <strong className="text-gray-200">Governança Institucional:</strong> O Projeto Avança Campos Verdes 2050 conta com parcerias estratégicas com SUDECO, FCO/FDCO, ANM, SEMAD-GO, USP (NAP.Mineração), IF Goiano e COOPESMERALDA, garantindo compliance regulatório, validação científica e rastreabilidade verificada desde a jazida até o varejo.
                    </p>
                </div>
                <div>
                     <p className="font-['Inter'] text-xs text-gray-400 leading-relaxed mb-3 text-justify">
                    <strong className="text-gray-200">Custódia e Compliance:</strong> A custódia de valores monetários é realizada por instituições de pagamento autorizadas (VASP). Todos os processos de cadastro seguem rigorosos protocolos de KYC (Conheça seu Cliente) e AML (Prevenção à Lavagem de Dinheiro). O Protocolo GEMLAB garante recolhimento automático de impostos (CFEM/ISS) via Smart Contracts.
                    </p>
                    <p className="font-['Inter'] text-xs text-gray-400 leading-relaxed mb-3 text-justify">
                    <strong className="text-gray-200">Rastreabilidade Científica:</strong> Validação gemológica com espectroscopia Raman (USP NAP.Mineração), garantindo identidade óptica única (SpectralHash) e certificação de origem verificada por blockchain.
                    </p>
                    <p className="font-['Inter'] text-xs text-gray-500 leading-relaxed italic">
                      Este site tem caráter informativo sobre a tecnologia de rastreabilidade e não constitui recomendação de investimento ou promessa de rentabilidade futura.
                    </p>
                </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
            <p className="font-['Inter'] text-xs text-gray-500">
              © {new Date().getFullYear()} GemLab Tecnologia Ltda. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#github" className="text-gray-500 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#twitter" className="text-gray-500 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#linkedin" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}