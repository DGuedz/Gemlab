import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";
import { FileText } from "lucide-react";

export function TermosPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent />

      <main className="pt-20">
        <section className="relative bg-gradient-to-b from-[var(--emerald-green)]/5 to-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--emerald-green)]/10 rounded-full mb-6">
                  <FileText className="h-4 w-4 text-[var(--emerald-green)]" />
                  <span className="font-['Inter'] text-sm text-[var(--emerald-green)] uppercase tracking-wider">
                    Legal
                  </span>
                </div>
                <h1 className="font-['Montserrat'] mb-6 text-[var(--mineral-black)]">
                  Termos de Uso (SaaS)
                </h1>
                <p className="font-['Inter'] text-lg text-[var(--gray-600)] mb-8">
                  Última atualização: Dezembro de 2024
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <FadeInWhenVisible>
                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 mb-12">
                  <h2 className="font-['Montserrat'] text-xl mb-4 text-amber-900 mt-0">
                    AVISO - Documento em Desenvolvimento
                  </h2>
                  <p className="font-['Inter'] text-amber-800 mb-0">
                    Os Termos de Uso finais serão publicados antes do lançamento comercial do MVP. 
                    Este protótipo (v0.1.0-alpha) opera em Sepolia Testnet para fins de validação técnica.
                  </p>
                </div>

                <h2 className="font-['Montserrat']">1. Natureza do Serviço</h2>
                <p className="font-['Inter'] text-[var(--gray-600)]">
                  O GEMLAB é uma plataforma SaaS (Software as a Service) de certificação e rastreabilidade gemológica. 
                  NÃO é uma instituição financeira, corretora ou plataforma de investimentos.
                </p>

                <h2 className="font-['Montserrat']">2. Uso da Plataforma</h2>
                <ul className="font-['Inter'] text-[var(--gray-600)]">
                  <li>Usuários devem ter 18+ anos</li>
                  <li>Cadastro mediante KYC (Conheça seu Cliente)</li>
                  <li>Proibido uso para atividades ilegais</li>
                  <li>Conformidade com legislação brasileira obrigatória</li>
                </ul>

                <h2 className="font-['Montserrat']">3. Propriedade Intelectual</h2>
                <p className="font-['Inter'] text-[var(--gray-600)]">
                  O código-fonte do GEMLAB é parcialmente open-source (MIT License). Dados registrados on-chain são públicos. 
                  Certificados digitais são de propriedade do titular da gema certificada.
                </p>

                <h2 className="font-['Montserrat']">4. Isenção de Responsabilidade</h2>
                <p className="font-['Inter'] text-[var(--gray-600)]">
                  O GEMLAB fornece certificação técnica baseada em análise gemológica. Não garantimos liquidez, 
                  valorização ou retorno financeiro sobre esmeraldas certificadas.
                </p>

                <h2 className="font-['Montserrat']">5. Contato Legal</h2>
                <p className="font-['Inter'] text-[var(--gray-600)]">
                  Para questões jurídicas: <strong>legal@gemlab.com.br</strong>
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}