import { Gem, Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react";
import logo from "figma:asset/cde6329a6c4b255a7d190dd68be01f6589014264.png"; 

export function Footer() {
  const footerLinks = {
    produto: [
      { label: "Como Funciona", href: "#how-it-works" },
      { label: "Registry Certificado", href: "#registry" },
      { label: "Para Gemólogos", href: "#gemologists" },
      { label: "Para Garimpeiros", href: "#miners" },
    ],
    recursos: [
      { label: "Documentação Técnica", href: "#docs" },
      { label: "API Reference", href: "#api" },
      { label: "Whitepaper (Tese)", href: "#whitepaper" },
      { label: "Status do Protocolo", href: "#status" },
    ],
    empresa: [
      { label: "Sobre o Lab", href: "#about" },
      { label: "Contato", href: "#contact" },
      { label: "Parceiros Institucionais", href: "#partners" },
      { label: "Trabalhe Conosco", href: "#careers" },
    ],
    legal: [
      { label: "Política de Privacidade", href: "#privacy" },
      { label: "Termos de Uso (SaaS)", href: "#terms" },
      { label: "Compliance & PLD", href: "#compliance" },
      { label: "Certificações", href: "#certifications" },
    ],
  };

  return (
    <footer className="bg-[var(--mineral-black)] text-white border-t border-[var(--gray-800)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
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
                <Gem className="h-10 w-10 text-[var(--emerald-green)]" />
              )}
              <div className="flex flex-col">
                <span className="font-['Inter'] text-lg font-semibold text-white tracking-tight">
                  GemLab
                </span>
                <span className="font-['Inter'] text-xs text-[var(--emerald-green)] font-medium uppercase tracking-wider">
                  Campos Verdes
                </span>
              </div>
            </div>
            <p className="font-['Inter'] text-sm text-[var(--gray-400)] mb-6 max-w-sm leading-relaxed">
              Empresa de tecnologia de certificação e rastreabilidade gemológica. 
              Fornecemos infraestrutura SaaS para origem verificada e identidade digital de esmeraldas.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[var(--gray-400)] group">
                <div className="w-8 h-8 rounded-full bg-[var(--gray-800)] flex items-center justify-center group-hover:bg-[var(--emerald-green)]/20 transition-colors">
                    <MapPin className="h-4 w-4 text-[var(--emerald-green)]" />
                </div>
                <span className="font-['Inter']">Campos Verdes - GO, Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--gray-400)] group">
                <div className="w-8 h-8 rounded-full bg-[var(--gray-800)] flex items-center justify-center group-hover:bg-[var(--emerald-green)]/20 transition-colors">
                    <Mail className="h-4 w-4 text-[var(--emerald-green)]" />
                </div>
                <span className="font-['Inter']">contato@gemlab.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--gray-400)] group">
                 <div className="w-8 h-8 rounded-full bg-[var(--gray-800)] flex items-center justify-center group-hover:bg-[var(--emerald-green)]/20 transition-colors">
                    <Phone className="h-4 w-4 text-[var(--emerald-green)]" />
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
                    <a href={link.href} className="font-['Inter'] text-sm text-[var(--gray-400)] hover:text-[var(--emerald-green)] transition-colors block py-1">
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
                    <a href={link.href} className="font-['Inter'] text-sm text-[var(--gray-400)] hover:text-[var(--emerald-green)] transition-colors block py-1">
                        {link.label}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="font-['Inter'] font-semibold text-white mb-4 text-sm uppercase tracking-wider">Empresa</h4>
                <ul className="space-y-2">
                {footerLinks.empresa.map((link, index) => (
                    <li key={index}>
                    <a href={link.href} className="font-['Inter'] text-sm text-[var(--gray-400)] hover:text-[var(--emerald-green)] transition-colors block py-1">
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
                    <a href={link.href} className="font-['Inter'] text-sm text-[var(--gray-400)] hover:text-[var(--emerald-green)] transition-colors block py-1">
                        {link.label}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
          </div>
        </div>

        {/* Divider & Compliance Section */}
        <div className="border-t border-[var(--gray-800)] pt-12">
          {/* Disclaimer Legal - Compliance CVM */}
          <div className="mb-12 p-8 bg-[#151515] rounded-lg border border-[var(--gray-800)]/50 shadow-inner">
            <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-[var(--gold-soft)]"></div>
                <h4 className="font-['Inter'] font-semibold text-[var(--gold-soft)] text-xs uppercase tracking-widest">
                Aviso Legal e Conformidade Regulatória
                </h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <p className="font-['Inter'] text-xs text-[var(--gray-400)] leading-relaxed text-justify">
                    <strong className="text-[var(--gray-200)]">Natureza Tecnológica:</strong> A GEMLAB é uma empresa de tecnologia (SaaS) e certificação científica. Não atuamos como instituição financeira, corretora ou administradora de fundos. Não realizamos oferta pública de valores mobiliários (ICOs/STOs) sob jurisdição direta da CVM. Nosso serviço consiste na emissão de certificados digitais de autenticidade (Digital Twins) para esmeraldas físicas.
                    </p>
                    <p className="font-['Inter'] text-xs text-[var(--gray-400)] leading-relaxed text-justify">
                    <strong className="text-[var(--gray-200)]">Aquisição de Ativos:</strong> A comercialização de esmeraldas certificadas e a liquidação financeira ocorrem exclusivamente através de parceiros licenciados e plataformas autorizadas que operam em total conformidade com as regulações do Banco Central do Brasil e CVM.
                    </p>
                </div>
                <div className="space-y-4">
                     <p className="font-['Inter'] text-xs text-[var(--gray-400)] leading-relaxed text-justify">
                    <strong className="text-[var(--gray-200)]">Custódia e Compliance:</strong> A custódia de valores monetários é realizada por instituições de pagamento autorizadas (VASP). Todos os processos de cadastro seguem rigorosos protocolos de KYC (Conheça seu Cliente) e AML (Prevenção à Lavagem de Dinheiro).
                    </p>
                    <p className="font-['Inter'] text-xs text-[var(--gray-500)] leading-relaxed italic">
                      Este site tem caráter informativo sobre a tecnologia de rastreabilidade e não constitui recomendação de investimento ou promessa de rentabilidade futura.
                    </p>
                </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
            <p className="font-['Inter'] text-xs text-[var(--gray-500)]">
              © {new Date().getFullYear()} GemLab Tecnologia Ltda. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#github" className="text-[var(--gray-500)] hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#twitter" className="text-[var(--gray-500)] hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#linkedin" className="text-[var(--gray-500)] hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}