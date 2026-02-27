import { Menu, Home, BookOpen, Database, FileText, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import logo from "figma:asset/cde6329a6c4b255a7d190dd68be01f6589014264.png";

interface NavbarProps {
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
  onNavigateToBlog?: () => void;
  onNavigateToWhitepaper?: () => void;

  onGoBack?: () => void;
  showBackButton?: boolean;
  currentPage?: string;
}

export function Navbar({
  onNavigateToHome,
  onNavigateToInstitutional,
  onNavigateToMarketplace,
  onNavigateToBlog,
  onNavigateToWhitepaper,
  onGoBack,
  showBackButton = false,
  currentPage = "home",
}: NavbarProps = {}) {
  const isHomePage = currentPage === "home";

  const navigateToInstitutionalSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (onNavigateToInstitutional) {
      onNavigateToInstitutional();
      window.setTimeout(() => {
        const deferredTarget = document.getElementById(sectionId);
        if (deferredTarget) {
          deferredTarget.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 250);
    }
  };

  const handleWhitepaper = () => {
    if (onNavigateToWhitepaper) {
      onNavigateToWhitepaper();
      return;
    }

    window.open(
      "/whitepaper",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const navItems = [
    {
      label: "Home",
      icon: Home,
      onClick: () => onNavigateToHome?.(),
      active: currentPage === "home",
    },
    {
      label: "Institucional",
      icon: BookOpen,
      onClick: () => onNavigateToInstitutional?.(),
      active: currentPage === "institutional",
    },
    {
      label: "Verificação",
      icon: Database,
      onClick: () => onNavigateToMarketplace?.(),
      active: currentPage === "marketplace",
    },
    {
      label: "Blog",
      icon: FileText,
      onClick: () => {
        if (onNavigateToBlog) {
          onNavigateToBlog();
          return;
        }
        navigateToInstitutionalSection("blog-gemlab");
      },
      active: false,
    },
    {
      label: "Whitepaper",
      icon: FileText,
      onClick: handleWhitepaper,
      active: false,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2 sm:gap-4">
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

          <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-5 flex-1 justify-center">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                onClick={item.onClick}
                className={`text-xs lg:text-sm ${
                  item.active
                    ? "bg-[#006b4f]/10 text-[#006b4f]"
                    : "text-[#1b1b1b] hover:text-[#006b4f] hover:bg-[#006b4f]/10"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="flex-shrink-0 h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <SheetDescription className="sr-only">
                Navegação principal para avaliação institucional
              </SheetDescription>
              <div className="flex flex-col gap-3 mt-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.label}
                      variant={item.active ? "default" : "ghost"}
                      onClick={item.onClick}
                      className={`w-full justify-start ${item.active ? "bg-[#006b4f] text-white" : ""}`}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
