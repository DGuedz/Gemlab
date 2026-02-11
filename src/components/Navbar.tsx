import { Gem, Menu, Home, BookOpen, Network, FolderKanban, Database, FileText, MapPin, ArrowLeft, Microscope, ShoppingBag, Mountain, Shield, User, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import { useAuth } from "../contexts/AuthContext";
import logo from "figma:asset/cde6329a6c4b255a7d190dd68be01f6589014264.png";

interface NavbarProps {
  // Navegação de páginas
  onNavigateToHome?: () => void;
  onNavigateToInstitutional?: () => void;
  onNavigateToLabPortal?: () => void;
  onNavigateToEcosystem?: () => void;
  onNavigateToProjects?: () => void;
  onNavigateToRoadmap?: () => void;
  onNavigateToGemologist?: () => void;
  onNavigateToMarketplace?: () => void;
  onNavigateToMiner?: () => void;
  onNavigateToAdmin?: () => void;
  onNavigateToUserDashboard?: () => void;
  onNavigateToPremiumTeam?: () => void;
  
  // Controles de navegação
  onGoBack?: () => void;
  showBackButton?: boolean;
  
  // Contexto atual
  currentPage?: string;
}

export function Navbar({ 
  onNavigateToHome,
  onNavigateToInstitutional, 
  onNavigateToLabPortal, 
  onNavigateToEcosystem, 
  onNavigateToProjects, 
  onNavigateToRoadmap,
  onNavigateToGemologist,
  onNavigateToMarketplace,
  onNavigateToMiner,
  onNavigateToAdmin,
  onNavigateToUserDashboard,
  onNavigateToPremiumTeam,
  onGoBack,
  showBackButton = false,
  currentPage = "home"
}: NavbarProps = {}) {
  const { setIsAuthModalOpen, user } = useAuth();
  
  // Items do menu para página home
  const homeNavItems = [
    { label: "Como Funciona", href: "#how-it-works", icon: Home },
    { label: "Soluções", href: "#solutions", icon: Gem },
    { label: "Ecossistema", href: "#ecosystem", onClick: onNavigateToEcosystem, icon: Network },
    { label: "Projetos", href: "#projects", onClick: onNavigateToProjects, icon: FolderKanban },
    { label: "Roadmap", href: "#roadmap", onClick: onNavigateToRoadmap, icon: MapPin },
    { label: "Equipe", href: "#team", onClick: onNavigateToPremiumTeam, icon: Users },
    { label: "Registry", href: "#registry", icon: Database },
    { label: "Documentação", href: "#docs", icon: BookOpen },
  ];

  // Items do menu para páginas internas
  const internalNavItems = [
    { label: "Home", onClick: onNavigateToHome, icon: Home },
    { label: "Institucional", onClick: onNavigateToInstitutional, icon: BookOpen },
    { label: "Portal Lab", onClick: onNavigateToLabPortal, icon: Gem },
    { label: "Gemólogo", onClick: onNavigateToGemologist, icon: Microscope, page: "gemologist" },
    { label: "Registry", onClick: onNavigateToMarketplace, icon: Database, page: "marketplace" },
    { label: "Garimpeiro", onClick: onNavigateToMiner, icon: Mountain, page: "miner" },
    { label: "Admin", onClick: onNavigateToAdmin, icon: Shield, page: "admin" },
  ];

  const isHomePage = currentPage === "home";
  const navItems = isHomePage ? homeNavItems : internalNavItems;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2 sm:gap-4">
          {/* Left Side - Back Button (apenas em páginas internas) */}
          {!isHomePage && showBackButton && onGoBack && (
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={onGoBack}
                className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white transition-all"
              >
                <ArrowLeft className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Voltar</span>
              </Button>
            </div>
          )}

          {/* Logo */}
          <div 
            className="flex items-center gap-2 flex-shrink-0 cursor-pointer"
            onClick={onNavigateToHome}
          >
            <img
              src={logo}
              alt="GemLab Logo"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <div className="flex flex-col">
              <span className="font-['Inter'] text-sm sm:text-base lg:text-lg font-semibold text-[#1b1b1b] whitespace-nowrap">
                GemLab
              </span>
              <span className="font-['Inter'] text-[10px] sm:text-xs text-[#006b4f] whitespace-nowrap">
                Campos Verdes
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6 flex-1 justify-center">
            {navItems.map((item, index) => {
              const isActive = 'page' in item && item.page === currentPage;
              
              if (isHomePage) {
                // Navegação para home (com scroll)
                return (
                  <a
                    key={item.href || index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.onClick) {
                        item.onClick();
                      } else if (item.href === "#docs" && onNavigateToInstitutional) {
                        onNavigateToInstitutional();
                        setTimeout(() => {
                          document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      } else {
                        const target = document.querySelector(item.href);
                        if (target) {
                          target.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="font-['Inter'] text-xs lg:text-sm xl:text-base text-[#1b1b1b] hover:text-[#006b4f] transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                );
              } else {
                // Navegação para páginas internas (com botões)
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={item.onClick}
                    className={`text-xs lg:text-sm ${
                      isActive 
                        ? "bg-[#006b4f]/10 text-[#006b4f]" 
                        : "text-[#1b1b1b] hover:text-[#006b4f] hover:bg-[#006b4f]/10"
                    }`}
                  >
                    {item.label}
                  </Button>
                );
              }
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            {!user ? (
              <>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white whitespace-nowrap" 
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Entrar
                </Button>
                <Button 
                  size="sm"
                  className="bg-[#006b4f] text-white hover:bg-[#014733] whitespace-nowrap"
                  onClick={onNavigateToLabPortal}
                >
                  Acessar Lab
                </Button>
              </>
            ) : (
              <Button 
                size="sm"
                className="bg-[#006b4f] text-white hover:bg-[#014733] whitespace-nowrap"
                onClick={onNavigateToUserDashboard}
              >
                <User className="h-4 w-4 mr-2" />
                Meu Dashboard
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="flex-shrink-0 h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <SheetDescription className="sr-only">
                Navegue pelas seções da plataforma GemLab
              </SheetDescription>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = 'page' in item && item.page === currentPage;
                  
                  if (isHomePage && 'href' in item) {
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          if (item.onClick) {
                            item.onClick();
                          } else {
                            const target = document.querySelector(item.href);
                            if (target) {
                              target.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                        className="flex items-center gap-3 font-['Inter'] text-base text-[#1b1b1b] hover:text-[#006b4f] hover:bg-[#006b4f]/5 transition-all p-3 rounded-lg"
                      >
                        <Icon className="h-5 w-5 text-[#006b4f]" />
                        {item.label}
                      </a>
                    );
                  } else {
                    return (
                      <Button
                        key={index}
                        variant={isActive ? "default" : "ghost"}
                        onClick={item.onClick}
                        className={`w-full justify-start ${isActive ? "bg-[#006b4f] text-white" : ""}`}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        {item.label}
                      </Button>
                    );
                  }
                })}
                
                {/* Mobile CTA */}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                  {!user ? (
                    <>
                      <Button 
                        variant="outline" 
                        className="border-[#006b4f] text-[#006b4f]" 
                        onClick={() => setIsAuthModalOpen(true)}
                      >
                        Entrar
                      </Button>
                      <Button 
                        className="bg-[#006b4f] text-white hover:bg-[#014733]" 
                        onClick={onNavigateToLabPortal}
                      >
                        Acessar Lab
                      </Button>
                    </>
                  ) : (
                    <Button 
                      className="bg-[#006b4f] text-white hover:bg-[#014733]" 
                      onClick={onNavigateToUserDashboard}
                    >
                      <User className="h-5 w-5 mr-2" />
                      Meu Dashboard
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}