import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";
import { Shield } from "lucide-react";

export function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent />

      <main className="pt-20">
        <section className="relative bg-gradient-to-b from-[var(--emerald-green)]/5 to-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--emerald-green)]/10 rounded-full mb-6">
                  <Shield className="h-4 w-4 text-[var(--emerald-green)]" />
                  <span className="font-['Inter'] text-sm text-[var(--emerald-green)] uppercase tracking-wider">
                    Legal
                  </span>
                </div>
                <h1 className="font-['Montserrat'] mb-6 text-[var(--mineral-black)]">
                  Política de Privacidade
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
                    Esta política de privacidade está sendo desenvolvida e será publicada antes do lançamento do MVP. 
                    Atualmente, o GEMLAB opera em ambiente de testes (Sepolia Testnet) e não coleta dados pessoais de produção.
                  </p>
                </div>

                <h2 className="font-['Montserrat']">1. Coleta de Dados</h2>
                <p className="font-['Inter'] text-[var(--gray-600)]">
                  O GEMLAB coleta apenas dados necessários para operação da plataforma de rastreabilidade:
                </p>
                <ul className="font-['Inter'] text-[var(--gray-600)]">
                  <li>Dados de autenticação (email, wallet address)</li>
                  <li>Dados técnicos de certificação gemológica</li>
                  <li>Histórico de custódia (armazenado on-chain)</li>
                </ul>

                <h2 className="font-['Montserrat']">2. LGPD - Lei Geral de Proteção de Dados</h2>
                <p className="font-['Inter'] text-[var(--gray-600)]">
                  O GEMLAB está comprometido com a LGPD (Lei 13.709/2018) e implementará todas as medidas de proteção de dados antes do lançamento em produção.
                </p>

                <h2 className="font-['Montserrat']">3. Blockchain e Privacidade</h2>
                <p className="font-['Inter'] text-[var(--gray-600)]">
                  Dados registrados on-chain (blockchain público) são permanentes e imutáveis. Apenas dados técnicos 
                  e IDs são armazenados on-chain. Dados pessoais identificáveis (PII) são mantidos off-chain em banco de dados seguro.
                </p>

                <h2 className="font-['Montserrat']">4. Contato DPO</h2>
                <p className="font-['Inter'] text-[var(--gray-600)]">
                  Para questões sobre privacidade de dados: <strong>privacy@gemlab.com.br</strong>
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