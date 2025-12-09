import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";
import { Users, Rocket, Heart, Code2, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function CarreirasPage() {
  const valores = [
    { titulo: "Inovação", icon: Rocket, descricao: "Tecnologia de ponta aplicada a problemas reais" },
    { titulo: "Impacto Social", icon: Heart, descricao: "Desenvolvimento sustentável de Campos Verdes" },
    { titulo: "Excelência Técnica", icon: Code2, descricao: "Código limpo, documentação profissional" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent />

      <main className="pt-20">
        <section className="relative bg-gradient-to-b from-[var(--emerald-green)]/5 to-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--emerald-green)]/10 rounded-full mb-6">
                  <Users className="h-4 w-4 text-[var(--emerald-green)]" />
                  <span className="font-['Inter'] text-sm text-[var(--emerald-green)] uppercase tracking-wider">
                    Carreiras
                  </span>
                </div>
                <h1 className="font-['Montserrat'] mb-6 text-[var(--mineral-black)]">
                  Trabalhe Conosco
                </h1>
                <p className="font-['Inter'] text-xl text-[var(--gray-600)] leading-relaxed">
                  Faça parte da revolução na rastreabilidade de esmeraldas brasileiras
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="font-['Montserrat'] mb-4 text-[var(--mineral-black)]">
                  Por que trabalhar no GEMLAB?
                </h2>
              </div>
            </FadeInWhenVisible>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {valores.map((valor, index) => {
                const IconComponent = valor.icon;
                return (
                  <FadeInWhenVisible key={index} delay={index * 0.2}>
                    <Card className="text-center border-2 hover:border-[var(--emerald-green)] transition-all duration-300">
                      <CardHeader>
                        <div className="w-16 h-16 rounded-full bg-[var(--emerald-green)]/10 flex items-center justify-center mb-4 mx-auto">
                          <IconComponent className="h-8 w-8 text-[var(--emerald-green)]" />
                        </div>
                        <CardTitle className="font-['Montserrat']">{valor.titulo}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-['Inter'] text-[var(--gray-600)]">{valor.descricao}</p>
                      </CardContent>
                    </Card>
                  </FadeInWhenVisible>
                );
              })}
            </div>

            <FadeInWhenVisible>
              <div className="max-w-3xl mx-auto bg-[var(--emerald-green)]/5 p-12 rounded-2xl border-2 border-[var(--emerald-green)]/20 text-center">
                <h3 className="font-['Montserrat'] text-2xl mb-4 text-[var(--mineral-black)]">
                  Estamos Crescendo
                </h3>
                <p className="font-['Inter'] text-lg text-[var(--gray-600)] mb-8">
                  Atualmente, o GEMLAB está em fase de protótipo. Vagas serão abertas após o lançamento do MVP. 
                  Cadastre seu interesse enviando seu currículo e portfólio.
                </p>
                <a
                  href="mailto:careers@gemlab.com.br"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--emerald-green)] text-white rounded-lg hover:bg-[var(--dark-green)] transition-colors font-['Inter'] font-medium"
                >
                  <Mail className="h-5 w-5" />
                  careers@gemlab.com.br
                </a>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}