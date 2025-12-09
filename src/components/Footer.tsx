import { Gem, Mail, MapPin, Phone, Github, Twitter, Linkedin, FileText, Code2, BookOpen, AlertCircle, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "figma:asset/cde6329a6c4b255a7d190dd68be01f6589014264.png"; 

export function Footer() {
  const footerLinks = {
    produto: [
      { label: "Como Funciona", href: "/como-funciona" },
      { label: "Registry Certificado", href: "/registry" },
      { label: "Para Gemólogos", href: "/gemologos" },
      { label: "Para Garimpeiros", href: "/garimpeiros" },
    ],
    recursos: [
      { label: "Documentação Técnica", href: "https://github.com/DGuedz/Gemlab#readme", external: true },
      { label: "Índice de Docs", href: "https://github.com/DGuedz/Gemlab/blob/main/DOCUMENTATION_INDEX.md", external: true },
      { label: "Guia do Desenvolvedor", href: "https://github.com/DGuedz/Gemlab/blob/main/README-DEV.md", external: true },
      { label: "Whitepaper Técnico", href: "/whitepaper" },
    ],
    empresa: [
      { label: "Sobre o Lab", href: "/sobre" },
      { label: "Contato", href: "/contato" },
      { label: "Parceiros Institucionais", href: "/parceiros" },
      { label: "Trabalhe Conosco", href: "/carreiras" },
    ],
    legal: [
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Termos de Uso (SaaS)", href: "/termos" },
      { label: "Compliance & PLD", href: "https://github.com/DGuedz/Gemlab/blob/main/README-COMPLIANCE.md", external: true },
      { label: "Certificações", href: "/certificacoes" },
    ],
    developer: [
      { label: "GitHub Repository", href: "https://github.com/DGuedz/Gemlab", external: true, icon: Github },
      { label: "Issues & Feedback", href: "https://github.com/DGuedz/Gemlab/issues", external: true, icon: AlertCircle },
      { label: "Contributing Guide", href: "https://github.com/DGuedz/Gemlab/blob/main/CONTRIBUTING.md", external: true, icon: Code2 },
      { label: "Security Policy", href: "https://github.com/DGuedz/Gemlab/blob/main/SECURITY.md", external: true, icon: FileText },
    ],
  };

  return (
    <footer className="bg-[var(--mineral-black)] text-white border-t border-[var(--gray-800)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Development Status Banner */}
        <div className="mb-12 p-6 bg-gradient-to-r from-[var(--emerald-green)]/10 to-transparent rounded-lg border border-[var(--emerald-green)]/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--emerald-green)]/20 rounded-full border border-[var(--emerald-green)]/30">
                <div className="h-2 w-2 rounded-full bg-[var(--emerald-green)] animate-pulse"></div>
                <span className="font-['Inter'] text-xs font-semibold text-[var(--emerald-green)] uppercase tracking-wider">
                  Protótipo → MVP
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/20 rounded-full border border-amber-500/30">
                <Globe className="h-3 w-3 text-amber-400" />
                <span className="font-['Inter'] text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Sepolia Testnet
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-['Inter'] text-xs text-[var(--gray-400)]">
                v0.1.0-alpha • Em desenvolvimento ativo
              </span>
            </div>
          </div>
        </div>

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

          {/* Links Columns - 5 colunas em vez de 4 */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
                <h4 className="font-['Inter'] font-semibold text-white mb-4 text-sm uppercase tracking-wider">Produto</h4>
                <ul className="space-y-2">
                {footerLinks.produto.map((link, index) => (
                    <li key={index}>
                    <Link to={link.href} className="font-['Inter'] text-sm text-[var(--gray-400)] hover:text-[var(--emerald-green)] transition-colors block py-1">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="font-['Inter'] font-semibold text-white mb-4 text-sm uppercase tracking-wider">Recursos</h4>
                <ul className="space-y-2">
                {footerLinks.recursos.map((link, index) => (
                    <li key={index}>
                    {link.external ? (
                      <a 
                        href={link.href} 
                        className="font-['Inter'] text-sm text-[var(--gray-400)] hover:text-[var(--emerald-green)] transition-colors block py-1 flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          {link.label}
                          <span className="text-xs">↗</span>
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="font-['Inter'] text-sm text-[var(--gray-400)] hover:text-[var(--emerald-green)] transition-colors block py-1"
                      >
                          {link.label}
                      </Link>
                    )}
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="font-['Inter'] font-semibold text-white mb-4 text-sm uppercase tracking-wider">Empresa</h4>
                <ul className="space-y-2">
                {footerLinks.empresa.map((link, index) => (
                    <li key={index}>
                    <Link to={link.href} className="font-['Inter'] text-sm text-[var(--gray-400)] hover:text-[var(--emerald-green)] transition-colors block py-1">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="font-['Inter'] font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
                <ul className="space-y-2">
                {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                    {link.external ? (
                      <a 
                        href={link.href} 
                        className="font-['Inter'] text-sm text-[var(--gray-400)] hover:text-[var(--emerald-green)] transition-colors block py-1 flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          {link.label}
                          <span className="text-xs">↗</span>
                      </a>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="font-['Inter'] text-sm text-[var(--gray-400)] hover:text-[var(--emerald-green)] transition-colors block py-1"
                      >
                          {link.label}
                      </Link>
                    )}
                    </li>
                ))}
                </ul>
            </div>

            <div>
                <h4 className="font-['Inter'] font-semibold text-white mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-[var(--emerald-green)]" />
                  Developer
                </h4>
                <ul className="space-y-2">
                {footerLinks.developer.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                    <a 
                      href={link.href} 
                      className="font-['Inter'] text-sm text-[var(--gray-400)] hover:text-[var(--emerald-green)] transition-colors block py-1 flex items-center gap-2 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <IconComponent className="h-3.5 w-3.5 text-[var(--gray-500)] group-hover:text-[var(--emerald-green)] transition-colors" />
                        {link.label}
                    </a>
                    </li>
                  );
                })}
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
                    <strong className="text-[var(--gray-200)]">Status de Desenvolvimento:</strong> Este é um <strong>protótipo em desenvolvimento ativo</strong>, operando em ambiente de testes (Sepolia Testnet). O sistema está em fase de validação técnica e ainda não está em produção comercial. Funcionalidades podem mudar sem aviso prévio.
                    </p>
                    <p className="font-['Inter'] text-xs text-[var(--gray-400)] leading-relaxed text-justify">
                    <strong className="text-[var(--gray-200)]">Natureza Tecnológica:</strong> A GEMLAB é uma empresa de tecnologia (SaaS) e certificação científica. Não atuamos como instituição financeira, corretora ou administradora de fundos. Não realizamos oferta pública de valores mobiliários (ICOs/STOs) sob jurisdição direta da CVM. Nosso serviço consiste na emissão de certificados digitais de autenticidade (Digital Twins) para esmeraldas físicas.
                    </p>
                </div>
                <div className="space-y-4">
                     <p className="font-['Inter'] text-xs text-[var(--gray-400)] leading-relaxed text-justify">
                    <strong className="text-[var(--gray-200)]">Aquisição de Ativos:</strong> A comercialização de esmeraldas certificadas e a liquidação financeira ocorrem exclusivamente através de parceiros licenciados e plataformas autorizadas que operam em total conformidade com as regulações do Banco Central do Brasil e CVM.
                    </p>
                    <p className="font-['Inter'] text-xs text-[var(--gray-500)] leading-relaxed italic">
                      Este site tem caráter informativo sobre a tecnologia de rastreabilidade e não constitui recomendação de investimento ou promessa de rentabilidade futura. Dados e transações são experimentais.
                    </p>
                </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="font-['Inter'] text-xs text-[var(--gray-500)]">
                © {new Date().getFullYear()} GemLab Tecnologia Ltda. Todos os direitos reservados.
              </p>
              <span className="hidden md:inline text-[var(--gray-700)]">•</span>
              <a 
                href="https://github.com/DGuedz/Gemlab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-['Inter'] text-xs text-[var(--gray-500)] hover:text-[var(--emerald-green)] transition-colors flex items-center gap-1"
              >
                <BookOpen className="h-3 w-3" />
                Documentação Open Source
              </a>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/DGuedz/Gemlab" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--gray-500)] hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
              <a href="#twitter" className="text-[var(--gray-500)] hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#linkedin" className="text-[var(--gray-500)] hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}