import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ShieldCheck, Atom, Vault, ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { FadeInWhenVisible } from "../animated/FadeInWhenVisible";

export function TrustTriadSection() {
  const proofs = [
    {
      number: "1",
      icon: ShieldCheck,
      title: "Prova de Origem",
      subtitle: "Oracle Fiscal Municipal",
      color: "var(--emerald-green)",
      bgColor: "bg-[var(--emerald-green)]",
      borderColor: "border-[var(--emerald-green)]",
      description: "A Prefeitura de Campos Verdes atesta a legalidade fiscal e envia o hash da Nota Fiscal de Origem Digital para a blockchain, criando a 'Certidão de Nascimento' do ativo.",
      features: [
        "Validação de NF-e na origem",
        "Cálculo automático CFEM/ISS via Smart Contract",
        "Registro imutável em blockchain (EAS)",
        "Combate à evasão fiscal sistêmica"
      ]
    },
    {
      number: "2",
      icon: Atom,
      title: "Prova de Ciência",
      subtitle: "SpectralHash (GEMLAB Tech)",
      color: "#7c3aed",
      bgColor: "bg-[#7c3aed]",
      borderColor: "border-[#7c3aed]",
      description: "Espectrômetro Raman gera a 'impressão digital óptica' única (SpectralHash SHA-256), eliminando fraudes de substituição e garantindo identidade científica incontestável.",
      features: [
        "Espectroscopia Raman certificada",
        "SpectralHash SHA-256 imutável",
        "Análise gemológica completa",
        "Identidade óptica única registrada on-chain"
      ]
    },
    {
      number: "3",
      icon: Vault,
      title: "Prova de Custódia",
      subtitle: "Underground Vault (RWA)",
      color: "var(--gold-soft)",
      bgColor: "bg-[var(--gold-soft)]",
      borderColor: "border-[var(--gold-soft)]",
      description: "Custodiante atesta que o ativo físico existe e está seguro em vault subterrâneo auditado via IoT + blockchain, garantindo lastro físico para tokenização.",
      features: [
        "Custódia física em mina desativada",
        "Auditoria IoT em tempo real",
        "Atestado EAS renovável",
        "Segregação patrimonial clara (CVM compliant)"
      ]
    }
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <Badge className="mb-6 bg-[var(--emerald-green)] text-white px-6 py-2.5">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Protocolo de Confiança GEMLAB
          </Badge>
          <h2 className="font-['Montserrat'] text-4xl lg:text-6xl font-bold text-[var(--mineral-black)] mb-6">
            A Tríade de Confiança que Certifica para Prosperar
          </h2>
          <p className="font-['Inter'] text-xl lg:text-2xl text-[var(--gray-600)] leading-relaxed">
            Três atestações independentes registradas no <span className="font-bold text-[var(--emerald-green)]">Ethereum Attestation Service (EAS)</span> garantem 
            origem fiscal, identidade científica e lastro físico de cada esmeralda
          </p>
        </div>

        {/* Proofs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {proofs.map((proof, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.15}>
              <Card 
                className={`p-10 border-2 ${proof.borderColor} hover:shadow-2xl transition-all duration-300 group relative overflow-hidden h-full`}
              >
                {/* Number Badge */}
                <div className={`absolute top-6 right-6 w-12 h-12 rounded-full ${proof.bgColor} text-white flex items-center justify-center font-['Montserrat'] text-xl font-bold`}>
                  {proof.number}
                </div>

                {/* Icon */}
                <div className={`w-24 h-24 rounded-2xl ${proof.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <proof.icon className="h-14 w-14 text-white" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 className="font-['Montserrat'] text-2xl font-bold text-[var(--mineral-black)] mb-2">
                  {proof.title}
                </h3>
                <p className="font-['Inter'] text-sm mb-6" style={{ color: proof.color }}>
                  {proof.subtitle}
                </p>

                {/* Description */}
                <p className="font-['Inter'] text-base text-[var(--gray-700)] leading-relaxed mb-6">
                  {proof.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {proof.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: proof.color }} />
                      <span className="font-['Inter'] text-sm text-[var(--gray-600)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* EAS Explanation Card */}
        <Card className="p-12 bg-gradient-to-br from-[var(--emerald-green)] to-[var(--emerald-dark)] text-white border-2 border-[var(--emerald-green)] shadow-2xl">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="bg-white/20 backdrop-blur-sm p-5 rounded-xl flex-shrink-0">
              <Shield className="h-12 w-12" />
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="font-['Montserrat'] text-3xl font-bold">
                Ethereum Attestation Service (EAS): O Regente da Orquestra
              </h3>
              <p className="font-['Inter'] text-lg leading-relaxed">
                O <span className="font-bold">Smart Contract ERC-721</span> (token NFT) só permite transferência 
                ou validação se houver as <span className="font-bold">três atestações ativas</span>. Se qualquer 
                ator falhar (ex: Underground Vault não renovar custódia), o token é pausado automaticamente, 
                expondo o risco em tempo real para investidores e CVM.
              </p>
              <p className="font-['Inter'] text-lg leading-relaxed">
                Esta arquitetura garante <span className="font-bold">incentivos alinhados</span> e{" "}
                <span className="font-bold">resistência à fraude</span>, com cada parte validando apenas 
                sua área de competência e assinando digitalmente sua responsabilidade.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}