import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Send, MessageSquare, Building2, Users } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const canaisContato = [
    {
      titulo: "Email Geral",
      descricao: "Para dúvidas e informações gerais",
      icon: Mail,
      contato: "contato@gemlab.com.br",
      link: "mailto:contato@gemlab.com.br",
    },
    {
      titulo: "Parcerias & Investimento",
      descricao: "Oportunidades comerciais e investimento",
      icon: Building2,
      contato: "invest@gemlab.tech",
      link: "mailto:invest@gemlab.tech",
    },
    {
      titulo: "Suporte Técnico",
      descricao: "Dúvidas sobre a plataforma e integrações",
      icon: MessageSquare,
      contato: "dev@gemlab.tech",
      link: "mailto:dev@gemlab.tech",
    },
    {
      titulo: "Imprensa",
      descricao: "Assessoria de imprensa e mídia",
      icon: Users,
      contato: "imprensa@gemlab.com.br",
      link: "mailto:imprensa@gemlab.com.br",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Em produção, integraria com backend/Supabase
    alert("Funcionalidade em desenvolvimento. Por favor, envie um email diretamente para contato@gemlab.com.br");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <HeaderComponent />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[var(--emerald-green)]/5 to-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-['Montserrat'] mb-6 text-[var(--mineral-black)]">
                  Entre em Contato
                </h1>
                <p className="font-['Inter'] text-xl text-[var(--gray-600)] leading-relaxed">
                  Tem dúvidas sobre o Protocolo GEMLAB? Quer fazer parte da nossa rede 
                  de parceiros? Estamos aqui para ajudar.
                </p>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Canais de Contato */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="text-center mb-16">
                <h2 className="font-['Montserrat'] mb-4 text-[var(--mineral-black)]">
                  Canais de Atendimento
                </h2>
                <p className="font-['Inter'] text-lg text-[var(--gray-600)] max-w-2xl mx-auto">
                  Escolha o canal mais adequado para o seu caso
                </p>
              </div>
            </FadeInWhenVisible>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
              {canaisContato.map((canal, index) => {
                const IconComponent = canal.icon;
                return (
                  <FadeInWhenVisible key={index} delay={index * 0.1}>
                    <a 
                      href={canal.link}
                      className="block h-full"
                    >
                      <Card className="text-center border-2 hover:border-[var(--emerald-green)] transition-all duration-300 h-full hover:shadow-lg">
                        <CardHeader>
                          <div className="w-16 h-16 rounded-full bg-[var(--emerald-green)]/10 flex items-center justify-center mb-4 mx-auto">
                            <IconComponent className="h-8 w-8 text-[var(--emerald-green)]" />
                          </div>
                          <CardTitle className="font-['Montserrat'] text-lg">
                            {canal.titulo}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-['Inter'] text-sm text-[var(--gray-600)] mb-3">
                            {canal.descricao}
                          </p>
                          <p className="font-['Inter'] text-sm text-[var(--emerald-green)] font-medium">
                            {canal.contato}
                          </p>
                        </CardContent>
                      </Card>
                    </a>
                  </FadeInWhenVisible>
                );
              })}
            </div>

            {/* Informações de Contato Direto */}
            <FadeInWhenVisible>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card className="text-center border-2">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--emerald-green)]/10 flex items-center justify-center mb-4 mx-auto">
                      <MapPin className="h-6 w-6 text-[var(--emerald-green)]" />
                    </div>
                    <h3 className="font-['Montserrat'] font-semibold mb-2">Localização</h3>
                    <p className="font-['Inter'] text-sm text-[var(--gray-600)]">
                      Campos Verdes - GO<br />Brasil
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--emerald-green)]/10 flex items-center justify-center mb-4 mx-auto">
                      <Phone className="h-6 w-6 text-[var(--emerald-green)]" />
                    </div>
                    <h3 className="font-['Montserrat'] font-semibold mb-2">Telefone</h3>
                    <p className="font-['Inter'] text-sm text-[var(--gray-600)]">
                      +55 (62) 3000-0000<br />
                      <span className="text-xs">(Em breve)</span>
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-2">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--emerald-green)]/10 flex items-center justify-center mb-4 mx-auto">
                      <Github className="h-6 w-6 text-[var(--emerald-green)]" />
                    </div>
                    <h3 className="font-['Montserrat'] font-semibold mb-2">Open Source</h3>
                    <a 
                      href="https://github.com/DGuedz/Gemlab" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-['Inter'] text-sm text-[var(--emerald-green)] hover:underline"
                    >
                      GitHub Repository
                    </a>
                  </CardContent>
                </Card>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* Formulário de Contato */}
        <section className="py-20 bg-[var(--gray-50)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <FadeInWhenVisible>
                <div className="text-center mb-12">
                  <h2 className="font-['Montserrat'] mb-4 text-[var(--mineral-black)]">
                    Envie sua Mensagem
                  </h2>
                  <p className="font-['Inter'] text-lg text-[var(--gray-600)]">
                    Preencha o formulário abaixo e retornaremos em até 48 horas úteis
                  </p>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <Card className="border-2">
                  <CardContent className="pt-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="font-['Inter'] text-sm font-medium text-[var(--gray-700)] mb-2 block">
                            Nome Completo *
                          </label>
                          <input
                            type="text"
                            name="nome"
                            required
                            value={formData.nome}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--emerald-green)] focus:outline-none font-['Inter'] transition-colors"
                            placeholder="Seu nome"
                          />
                        </div>

                        <div>
                          <label className="font-['Inter'] text-sm font-medium text-[var(--gray-700)] mb-2 block">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--emerald-green)] focus:outline-none font-['Inter'] transition-colors"
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="font-['Inter'] text-sm font-medium text-[var(--gray-700)] mb-2 block">
                          Assunto *
                        </label>
                        <select
                          name="assunto"
                          required
                          value={formData.assunto}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--emerald-green)] focus:outline-none font-['Inter'] transition-colors"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="informacoes">Informações Gerais</option>
                          <option value="parceria">Parceria/Investimento</option>
                          <option value="tecnico">Suporte Técnico</option>
                          <option value="imprensa">Imprensa</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-['Inter'] text-sm font-medium text-[var(--gray-700)] mb-2 block">
                          Mensagem *
                        </label>
                        <textarea
                          name="mensagem"
                          required
                          value={formData.mensagem}
                          onChange={handleChange}
                          rows={6}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[var(--emerald-green)] focus:outline-none font-['Inter'] transition-colors resize-none"
                          placeholder="Descreva sua dúvida ou solicitação..."
                        />
                      </div>

                      <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4">
                        <p className="font-['Inter'] text-sm text-amber-800">
                          <strong>AVISO - Protótipo em Desenvolvimento:</strong> Este formulário está em fase de testes. 
                          Para urgências, envie email diretamente para <strong>contato@gemlab.com.br</strong>
                        </p>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[var(--emerald-green)] hover:bg-[var(--dark-green)] text-white py-6 text-lg font-['Inter'] font-medium"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* Redes Sociais / Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInWhenVisible>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-['Montserrat'] mb-6 text-[var(--mineral-black)]">
                  Conecte-se Conosco
                </h2>
                <p className="font-['Inter'] text-lg text-[var(--gray-600)] mb-8">
                  Acompanhe novidades e atualizações do projeto
                </p>

                <div className="flex justify-center gap-6">
                  <a
                    href="https://github.com/DGuedz/Gemlab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-[var(--gray-100)] hover:bg-[var(--emerald-green)]/10 flex items-center justify-center transition-all duration-300 group"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6 text-[var(--gray-600)] group-hover:text-[var(--emerald-green)] transition-colors" />
                  </a>
                  <a
                    href="#linkedin"
                    className="w-14 h-14 rounded-full bg-[var(--gray-100)] hover:bg-[var(--emerald-green)]/10 flex items-center justify-center transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6 text-[var(--gray-600)] group-hover:text-[var(--emerald-green)] transition-colors" />
                  </a>
                  <a
                    href="mailto:contato@gemlab.com.br"
                    className="w-14 h-14 rounded-full bg-[var(--gray-100)] hover:bg-[var(--emerald-green)]/10 flex items-center justify-center transition-all duration-300 group"
                    aria-label="Email"
                  >
                    <Mail className="h-6 w-6 text-[var(--gray-600)] group-hover:text-[var(--emerald-green)] transition-colors" />
                  </a>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}