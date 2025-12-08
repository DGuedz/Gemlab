import { Button } from "./ui/button";
import { DarkModeToggle } from "./ui/dark-mode-toggle";
import { motion } from "motion/react";
import { Shield, Leaf, Users, Microscope, Menu, Heart, ArrowLeft } from "lucide-react";
import logo from "figma:asset/cde6329a6c4b255a7d190dd68be01f6589014264.png";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { analytics } from "../utils/analytics";
import { lazy, Suspense, useState } from "react";

interface HeaderComponentProps {
  onNavigateToRegistry?: () => void;
  onNavigateToInstitutional?: () => void;
  onNavigateToEcosystem?: () => void;
  onNavigateToProjects?: () => void;
  onNavigateToRastreabilidade?: () => void;
  onNavigateToGovernancaFiscal?: () => void;
  onNavigateToSustentabilidade?: () => void;
  onNavigateToEquipeParceiros?: () => void;
  onNavigateBack?: () => void;
  isHomePage?: boolean;
}

export function HeaderComponent({
  onNavigateToRegistry,
  onNavigateToInstitutional,
  onNavigateToEcosystem,
  onNavigateToProjects,
  onNavigateToRastreabilidade,
  onNavigateToGovernancaFiscal,
  onNavigateToSustentabilidade,
  onNavigateToEquipeParceiros,
  onNavigateBack,
  isHomePage,
}: HeaderComponentProps = {}) {
  
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navigationPillars = [
    {
      title: "Rastreabilidade",
      description: "SpectralHash & NFT",
      icon: Microscope,
      onClick: onNavigateToRastreabilidade,
      href: "#rastreabilidade",
    },
    {
      title: "Governança Fiscal",
      description: "Oracle Fiscal & Smart Contracts",
      icon: Shield,
      onClick: onNavigateToGovernancaFiscal,
      href: "#governanca",
    },
    {
      title: "Sustentabilidade",
      description: "Talco Xisto & Economia Circular",
      icon: Leaf,
      onClick: onNavigateToSustentabilidade,
      href: "#sustentabilidade",
    },
    {
      title: "Equipe & Parceiros",
      description: "COOPESMERALDA & Centelha",
      icon: Users,
      onClick: onNavigateToEquipeParceiros,
      href: "#equipe",
    },
    {
      title: "Projetos de Impacto",
      description: "Iniciativas em Campos Verdes",
      icon: Heart,
      onClick: onNavigateToProjects,
      href: "#projetos",
    },
  ];

  const handleVerifyCertificate = () => {
    // Analytics: Rastrear clique no botão de verificação
    analytics.trackCertificateVerification();

    if (onNavigateToRegistry) {
      onNavigateToRegistry();
    } else {
      document.querySelector("#registry")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePillarClick = (pillar: typeof navigationPillars[0], e: React.MouseEvent) => {
    e.preventDefault();
    
    // Analytics: Rastrear navegação nos pilares
    analytics.trackNavigation(pillar.title);

    // Executar navegação ANTES de fechar o Sheet
    if (pillar.onClick) {
      pillar.onClick();
    } else {
      document.querySelector(pillar.href)?.scrollIntoView({ behavior: "smooth" });
    }

    // Fechar o Sheet mobile após um pequeno delay para garantir que a navegação executou
    setTimeout(() => {
      setIsSheetOpen(false);
    }, 100);
  };

  const handleBackClick = () => {
    // Analytics: Rastrear clique no botão voltar
    analytics.trackNavigation("Voltar");

    if (onNavigateBack) {
      onNavigateBack();
    } else {
      window.history.back();
    }
  };

  // Determinar se deve mostrar o botão voltar
  const showBackButton = !isHomePage && onNavigateBack;

  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-[var(--gray-200)] dark:border-[var(--gray-800)] bg-white/95 dark:bg-[var(--gray-950)]/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-[var(--gray-950)]/80"
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* BRANDING (Esquerda) */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {/* Botão Voltar - Aparece apenas quando não está na home */}
            {showBackButton && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleBackClick}
                  variant="ghost"
                  size="sm"
                  className="text-[var(--emerald-green)] hover:text-[var(--emerald-dark)] hover:bg-[var(--emerald-green)]/10 dark:text-emerald-400 dark:hover:text-emerald-300 dark:hover:bg-emerald-400/10 transition-all duration-300"
                  aria-label="Voltar para página anterior"
                >
                  <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                  <span className="hidden sm:inline ml-2 font-['Inter'] font-semibold">Voltar</span>
                </Button>
              </motion.div>
            )}
            
            <img
              src={logo}
              alt="GEMLAB Logo"
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
            <div className="flex flex-col">
              <h1 className="font-['Montserrat'] text-base sm:text-xl font-bold text-[var(--mineral-black)] dark:text-white tracking-tight">
                GEMLAB
              </h1>
              <p className="hidden sm:block font-['Inter'] text-xs text-[var(--emerald-green)] dark:text-emerald-400 tracking-wide">
                Certificar para Prosperar
              </p>
            </div>
          </div>

          {/* NAVEGAÇÃO PRINCIPAL (Centro) - Desktop Only */}
          <nav 
            className="hidden xl:flex items-center gap-6 flex-1 justify-center px-8"
            role="navigation"
            aria-label="Navegação principal dos pilares do Protocolo de Confiança"
          >
            {navigationPillars.map((pillar) => (
              <button
                key={pillar.href}
                onClick={(e) => handlePillarClick(pillar, e)}
                className="group flex flex-col items-center gap-1 transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label={`Navegar para ${pillar.title}: ${pillar.description}`}
                type="button"
              >
                <pillar.icon 
                  className="h-5 w-5 text-[var(--gray-600)] dark:text-[var(--gray-400)] group-hover:text-[var(--emerald-green)] dark:group-hover:text-emerald-400 transition-colors" 
                  aria-hidden="true"
                />
                <span className="font-['Inter'] text-xs font-semibold text-[var(--gray-700)] dark:text-[var(--gray-300)] group-hover:text-[var(--emerald-green)] dark:group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                  {pillar.title}
                </span>
                <span className="font-['Inter'] text-[10px] text-[var(--gray-500)] dark:text-[var(--gray-500)] group-hover:text-[var(--emerald-dark)] dark:group-hover:text-emerald-500 transition-colors text-center max-w-[120px]">
                  {pillar.description}
                </span>
              </button>
            ))}
          </nav>

          {/* BOTÃO DE AÇÃO (Direita) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <DarkModeToggle />
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                onClick={handleVerifyCertificate}
                className="hidden lg:flex bg-gradient-to-r from-[var(--emerald-green)] to-[var(--emerald-dark)] hover:from-[var(--emerald-dark)] hover:to-[var(--emerald-green)] text-white shadow-lg hover:shadow-xl transition-all duration-300 font-['Inter'] font-semibold px-4 xl:px-6 py-2 whitespace-nowrap"
                aria-label="Verificar autenticidade de certificado gemológico via Protocolo EAS"
              >
                <Shield className="h-4 w-4 mr-2" aria-hidden="true" />
                Verificar Certificado
              </Button>
            </motion.div>

            {/* Mobile Menu Sheet (Menu Hambúrguer) */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="xl:hidden border-[var(--emerald-green)] text-[var(--emerald-green)] hover:bg-[var(--emerald-green)]/10"
                  aria-label="Abrir menu de navegação mobile"
                  aria-expanded={isSheetOpen}
                  aria-controls="mobile-navigation-menu"
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Menu de navegação</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-[300px] sm:w-[400px] bg-white dark:bg-[var(--gray-950)]"
                id="mobile-navigation-menu"
                aria-label="Menu de navegação mobile"
              >
                <SheetHeader className="mb-8">
                  <SheetTitle className="font-['Montserrat'] text-2xl font-bold text-[var(--mineral-black)] dark:text-white flex items-center gap-3">
                    <img src={logo} alt="GEMLAB" className="h-10 w-10" />
                    GEMLAB
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navegue pelos 5 pilares do Protocolo de Confiança GemLab: Rastreabilidade, Governança Fiscal, Sustentabilidade, Equipe & Parceiros e Projetos de Impacto
                  </SheetDescription>
                </SheetHeader>
                
                {/* Menu de navegação no Sheet */}
                <nav 
                  className="flex flex-col gap-6"
                  role="navigation"
                  aria-label="Menu mobile dos pilares"
                >
                  {navigationPillars.map((pillar) => (
                    <button
                      key={pillar.href}
                      onClick={(e) => handlePillarClick(pillar, e)}
                      className="group flex items-start gap-4 p-4 rounded-lg border border-[var(--gray-200)] dark:border-[var(--gray-800)] hover:border-[var(--emerald-green)] dark:hover:border-emerald-400 hover:bg-[var(--emerald-green)]/5 dark:hover:bg-emerald-400/5 transition-all duration-300 active:scale-95 active:bg-[var(--emerald-green)]/10"
                      aria-label={`Navegar para ${pillar.title}: ${pillar.description}`}
                      type="button"
                    >
                      <pillar.icon 
                        className="h-6 w-6 text-[var(--emerald-green)] dark:text-emerald-400 flex-shrink-0 mt-1" 
                        aria-hidden="true"
                      />
                      <div className="flex flex-col items-start gap-1 flex-1">
                        <span className="font-['Inter'] text-sm font-semibold text-[var(--gray-900)] dark:text-[var(--gray-100)]">
                          {pillar.title}
                        </span>
                        <span className="font-['Inter'] text-xs text-[var(--gray-600)] dark:text-[var(--gray-400)] text-left">
                          {pillar.description}
                        </span>
                      </div>
                    </button>
                  ))}
                  
                  {/* Botão de verificação no menu mobile */}
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="mt-4"
                  >
                    <Button
                      onClick={handleVerifyCertificate}
                      className="w-full bg-gradient-to-r from-[var(--emerald-green)] to-[var(--emerald-dark)] hover:from-[var(--emerald-dark)] hover:to-[var(--emerald-green)] text-white shadow-lg hover:shadow-xl transition-all duration-300 font-['Inter'] font-semibold py-6"
                      aria-label="Verificar autenticidade de certificado gemológico"
                    >
                      <Shield className="h-5 w-5 mr-2" aria-hidden="true" />
                      Verificar Certificado
                    </Button>
                  </motion.div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}