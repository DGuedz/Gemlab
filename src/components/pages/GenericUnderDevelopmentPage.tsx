import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface GenericUnderDevelopmentPageProps {
  titulo: string;
  descricao?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function GenericUnderDevelopmentPage({ 
  titulo, 
  descricao = "Esta página está em desenvolvimento e será lançada em breve.",
  icon: Icon = Construction 
}: GenericUnderDevelopmentPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent />

      <main className="pt-20">
        <section className="relative bg-gradient-to-b from-[var(--emerald-green)]/5 to-white py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-24 h-24 rounded-full bg-[var(--emerald-green)]/10 flex items-center justify-center mx-auto mb-8">
                  <Icon className="h-12 w-12 text-[var(--emerald-green)]" />
                </div>
                <h1 className="font-['Montserrat'] mb-6 text-[var(--mineral-black)]">
                  {titulo}
                </h1>
                <p className="font-['Inter'] text-xl text-[var(--gray-600)] leading-relaxed mb-8">
                  {descricao}
                </p>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 mb-8">
                  <p className="font-['Inter'] text-amber-800">
                    <strong>AVISO - Protótipo v0.1.0-alpha:</strong> Estamos trabalhando para disponibilizar 
                    todo o conteúdo antes do lançamento do MVP em produção.
                  </p>
                </div>

                <Link 
                  to="/"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--emerald-green)] text-white rounded-lg hover:bg-[var(--dark-green)] transition-colors font-['Inter'] font-medium"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Voltar para Home
                </Link>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}