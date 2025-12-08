import { HeaderComponent } from "./HeaderComponent";
import { Footer } from "./Footer";
import { HeroProtocol } from "./home/HeroProtocol";
import { ProblemSection } from "./home/ProblemSection";
import { TrustTriadSection } from "./home/TrustTriadSection";
import { ImpactMetricsSection } from "./home/ImpactMetricsSection";
import { GovernanceSection } from "./home/GovernanceSection";
import { LatestCertifications } from "./LatestCertifications";
import { DashboardAccessCard } from "./DashboardAccessCard";
import { CentelhaShowcase } from "./centelha/CentelhaShowcase";

interface HomePageProps {
  onNavigateToInstitutional: () => void;
  onNavigateToLabPortal: () => void;
  onNavigateToEcosystem: () => void;
  onNavigateToProjects: () => void;
  onViewGemDetails: (gemId: string) => void;
  userName?: string;
  onAccessDashboard?: () => void;
  onNavigateToRastreabilidade?: () => void;
  onNavigateToGovernancaFiscal?: () => void;
  onNavigateToSustentabilidade?: () => void;
  onNavigateToEquipeParceiros?: () => void;
  onNavigateToImpactDashboard?: () => void;
  onNavigateToROICalculator?: () => void;
  onNavigateToComplianceDashboard?: () => void;
  onNavigateToQRVerification?: () => void;
  onNavigateToSocialProof?: () => void;
  onNavigateToAnalyticsDashboard?: () => void;
}

export function HomePage({
  onNavigateToInstitutional,
  onNavigateToLabPortal,
  onNavigateToEcosystem,
  onNavigateToProjects,
  onViewGemDetails,
  userName,
  onAccessDashboard,
  onNavigateToRastreabilidade,
  onNavigateToGovernancaFiscal,
  onNavigateToSustentabilidade,
  onNavigateToEquipeParceiros,
  onNavigateToImpactDashboard,
  onNavigateToROICalculator,
  onNavigateToComplianceDashboard,
  onNavigateToQRVerification,
  onNavigateToSocialProof,
  onNavigateToAnalyticsDashboard,
}: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent 
        onNavigateToRegistry={() => {
          // Scroll para seção de certificações ou navegar para registry
          const registrySection = document.querySelector('#registry');
          if (registrySection) {
            registrySection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onNavigateToInstitutional={onNavigateToInstitutional}
        onNavigateToEcosystem={onNavigateToEcosystem}
        onNavigateToProjects={onNavigateToProjects}
        onNavigateToRastreabilidade={onNavigateToRastreabilidade}
        onNavigateToGovernancaFiscal={onNavigateToGovernancaFiscal}
        onNavigateToSustentabilidade={onNavigateToSustentabilidade}
        onNavigateToEquipeParceiros={onNavigateToEquipeParceiros}
      />
      
      <main>
        {/* Hero - Protocolo de Confiança */}
        <HeroProtocol />

        {/* Dashboard Access (se logado) */}
        {userName && onAccessDashboard && (
          <DashboardAccessCard
            userName={userName}
            onAccessDashboard={onAccessDashboard}
          />
        )}

        {/* Seção Problema - Evasão Fiscal */}
        <ProblemSection />

        {/* Seção Tríade de Confiança (EAS) */}
        <TrustTriadSection />

        {/* Showcase Features Centelha */}
        {onNavigateToImpactDashboard && onNavigateToROICalculator && onNavigateToComplianceDashboard && onNavigateToQRVerification && onNavigateToSocialProof && (
          <CentelhaShowcase
            onNavigateToImpact={onNavigateToImpactDashboard}
            onNavigateToROI={onNavigateToROICalculator}
            onNavigateToCompliance={onNavigateToComplianceDashboard}
            onNavigateToQR={onNavigateToQRVerification}
            onNavigateToSocialProof={onNavigateToSocialProof}
          />
        )}

        {/* Seção Impacto ESG */}
        <ImpactMetricsSection />

        {/* Seção Governança Transparente */}
        <GovernanceSection />

        {/* Certificações Recentes */}
        <LatestCertifications onViewDetails={onViewGemDetails} />
      </main>

      <Footer />
    </div>
  );
}