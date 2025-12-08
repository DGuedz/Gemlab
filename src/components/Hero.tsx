import { ArrowRight, Shield, Fingerprint, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import emeraldImage from "figma:asset/424e84f437a2a74f98b3ea6b5e52a92e38df01a6.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f0fdf4] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#006b4f]/10 rounded-full">
              <Shield className="h-4 w-4 text-[#006b4f]" />
              <span className="font-['Inter'] text-sm text-[#006b4f]">
                Certificação Blockchain de Esmeraldas
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-['Inter'] text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1b1b1b] leading-tight">
                Rastreabilidade e Certificação Digital de{" "}
                <span className="text-[#006b4f]">Esmeraldas</span>
              </h1>
              <p className="font-['Inter'] text-lg text-gray-600 max-w-xl">
                Tecnologia blockchain para garantir autenticidade, origem e
                qualidade gemológica. De Campos Verdes para o mundo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                className="bg-[#006b4f] text-white hover:bg-[#014733] gap-2"
              >
                Consultar Registry
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#006b4f] text-[#006b4f] hover:bg-[#006b4f] hover:text-white"
              >
                Como Funciona
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#e5e7eb]">
              <div>
                <div className="font-['Inter'] text-2xl font-bold text-[#006b4f]">
                  1,247
                </div>
                <div className="font-['Inter'] text-sm text-gray-600">
                  Esmeraldas Certificadas
                </div>
              </div>
              <div>
                <div className="font-['Inter'] text-2xl font-bold text-[#006b4f]">
                  23
                </div>
                <div className="font-['Inter'] text-sm text-gray-600">
                  Labs Credenciados
                </div>
              </div>
              <div>
                <div className="font-['Inter'] text-2xl font-bold text-[#006b4f]">
                  342
                </div>
                <div className="font-['Inter'] text-sm text-gray-600">
                  Lotes Rastreados
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual com Esmeralda + Tech */}
          <div className="relative">
            <div className="relative z-10 aspect-square max-w-lg mx-auto">
              {/* Main Card com efeito de profundidade 3D */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-br from-[#1b1b1b] via-[#2a2a2a] to-[#1b1b1b] rounded-3xl shadow-2xl p-8 border border-[#006b4f]/20 overflow-hidden"
                style={{
                  transform: 'perspective(1000px) rotateX(2deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Rede Criptográfica de Fundo (Wireframe) */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      {/* Grid Pattern Principal */}
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5"/>
                      </pattern>
                      
                      {/* Grid Secundário (mais fino) */}
                      <pattern id="grid-small" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00ffff" strokeWidth="0.2" opacity="0.3"/>
                      </pattern>
                      
                      {/* Gradiente Radial para Glow */}
                      <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
                      </radialGradient>
                      
                      {/* Gradiente para linhas de fluxo */}
                      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00ffff" stopOpacity="0">
                          <animate attributeName="stop-opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8">
                          <animate attributeName="offset" values="0;0.5;1" dur="2s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#00ffff" stopOpacity="0">
                          <animate attributeName="stop-opacity" values="0.8;0;0" dur="2s" repeatCount="indefinite" />
                        </stop>
                      </linearGradient>
                    </defs>
                    
                    {/* Camada 1: Grid de fundo (profundidade) */}
                    <rect width="100%" height="100%" fill="url(#grid-small)" opacity="0.3" />
                    
                    {/* Camada 2: Grid principal */}
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Camada 3: Linhas de conexão blockchain (8 direções) */}
                    {/* Diagonal principal 1 */}
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="#00ffff" strokeWidth="1" opacity="0.4" strokeDasharray="8,4">
                      <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.5s" repeatCount="indefinite" />
                    </line>
                    
                    {/* Diagonal principal 2 */}
                    <line x1="100%" y1="0" x2="0" y2="100%" stroke="#ffffff" strokeWidth="1" opacity="0.3" strokeDasharray="8,4">
                      <animate attributeName="stroke-dashoffset" from="0" to="12" dur="2s" repeatCount="indefinite" />
                    </line>
                    
                    {/* Linhas horizontais de dados */}
                    <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#00ffff" strokeWidth="0.5" opacity="0.25" strokeDasharray="4,2">
                      <animate attributeName="stroke-dashoffset" from="0" to="6" dur="1s" repeatCount="indefinite" />
                    </line>
                    <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#flowGradient)" strokeWidth="1" opacity="0.4" />
                    <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#00ffff" strokeWidth="0.5" opacity="0.25" strokeDasharray="4,2">
                      <animate attributeName="stroke-dashoffset" from="6" to="0" dur="1.2s" repeatCount="indefinite" />
                    </line>
                    
                    {/* Linhas verticais de dados */}
                    <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" strokeDasharray="4,2">
                      <animate attributeName="stroke-dashoffset" from="0" to="6" dur="1.3s" repeatCount="indefinite" />
                    </line>
                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00ffff" strokeWidth="0.8" opacity="0.3" strokeDasharray="6,3">
                      <animate attributeName="stroke-dashoffset" from="0" to="9" dur="1.8s" repeatCount="indefinite" />
                    </line>
                    <line x1="75%" y1="0" x2="75%" y2="100%" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" strokeDasharray="4,2">
                      <animate attributeName="stroke-dashoffset" from="6" to="0" dur="1.4s" repeatCount="indefinite" />
                    </line>
                    
                    {/* Camada 4: Nós da rede (pontos de validação) */}
                    {/* Centro */}
                    <circle cx="50%" cy="50%" r="3" fill="url(#nodeGlow)">
                      <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50%" cy="50%" r="2" fill="#00ffff" opacity="0.9">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Nós periféricos */}
                    <circle cx="20%" cy="20%" r="2" fill="#00ffff" opacity="0.6">
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="80%" cy="20%" r="2" fill="#ffffff" opacity="0.5">
                      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.2s" repeatCount="indefinite" begin="0.5s" />
                    </circle>
                    <circle cx="20%" cy="80%" r="2" fill="#ffffff" opacity="0.5">
                      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.3s" repeatCount="indefinite" begin="0.3s" />
                    </circle>
                    <circle cx="80%" cy="80%" r="2" fill="#00ffff" opacity="0.6">
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.4s" repeatCount="indefinite" begin="0.7s" />
                    </circle>
                    
                    {/* Nós intermediários */}
                    <circle cx="35%" cy="35%" r="1.5" fill="#00ffff" opacity="0.4">
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="65%" cy="35%" r="1.5" fill="#ffffff" opacity="0.3">
                      <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2.6s" repeatCount="indefinite" begin="0.4s" />
                    </circle>
                    <circle cx="35%" cy="65%" r="1.5" fill="#ffffff" opacity="0.3">
                      <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2.7s" repeatCount="indefinite" begin="0.6s" />
                    </circle>
                    <circle cx="65%" cy="65%" r="1.5" fill="#00ffff" opacity="0.4">
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.9s" repeatCount="indefinite" begin="0.2s" />
                    </circle>
                    
                    {/* Camada 5: Pulsos de dados (círculos expandindo) */}
                    <circle cx="50%" cy="50%" r="15" fill="none" stroke="#00ffff" strokeWidth="0.5" opacity="0">
                      <animate attributeName="r" values="5;40;5" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0;0.4;0" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50%" cy="50%" r="15" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0">
                      <animate attributeName="r" values="5;40;5" dur="4s" repeatCount="indefinite" begin="2s" />
                      <animate attributeName="opacity" values="0;0.3;0" dur="4s" repeatCount="indefinite" begin="2s" />
                    </circle>
                    
                    {/* Camada 6: Linhas de conexão entre nós (rede neural) */}
                    <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="#00ffff" strokeWidth="0.5" opacity="0.2" strokeDasharray="2,4">
                      <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite" />
                    </line>
                    <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" strokeDasharray="2,4">
                      <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3.2s" repeatCount="indefinite" begin="0.5s" />
                    </line>
                    <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" strokeDasharray="2,4">
                      <animate attributeName="opacity" values="0.1;0.25;0.1" dur="3.3s" repeatCount="indefinite" begin="0.3s" />
                    </line>
                    <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="#00ffff" strokeWidth="0.5" opacity="0.2" strokeDasharray="2,4">
                      <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3.1s" repeatCount="indefinite" begin="0.7s" />
                    </line>
                  </svg>
                </div>

                {/* Partículas flutuantes de fundo */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="space-y-4">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="flex items-center justify-between"
                    >
                      <span className="font-['Inter'] text-sm text-gray-400">
                        Certificado #GEM-2024-1247
                      </span>
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                        className="px-3 py-1 bg-[#006b4f] rounded-full flex items-center gap-1.5"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="font-['Inter'] text-xs text-white font-medium">
                          Validado
                        </span>
                      </motion.div>
                    </motion.div>
                    
                    {/* Container da Esmeralda com Overlay Tech */}
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="aspect-square bg-gradient-to-br from-[#006b4f]/20 to-[#014733]/20 rounded-2xl flex items-center justify-center overflow-hidden relative group/image cursor-pointer border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
                    >
                      {/* Reflexo de luz superior */}
                      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                      
                      {/* Imagem da Esmeralda */}
                      <ImageWithFallback
                        src={emeraldImage}
                        alt="Esmeralda certificada com SpectralHash"
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover/image:scale-110 group-hover/image:brightness-110 mix-blend-lighten"
                      />
                      
                      {/* Overlay de rede criptográfica sobre a esmeralda */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#006b4f]/60 via-transparent to-cyan-500/10 group-hover/image:from-[#006b4f]/40 transition-all duration-700" />
                      
                      {/* Glow effect ao hover */}
                      <div className="absolute inset-0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-400/20 rounded-full blur-3xl" />
                        
                        {/* Simulação de Smart Contract fluindo dentro da esmeralda */}
                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                          {/* Overlay escuro para contraste do código */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1b1b1b]/60 to-transparent" />
                          
                          {/* Container do código com scroll animado */}
                          <div className="absolute inset-0 flex items-center justify-center p-6">
                            <div className="w-full max-w-xs space-y-1 font-mono text-[8px] leading-relaxed opacity-70 relative">
                              {/* Cursor de leitura (linha highlight animada) */}
                              <motion.div
                                className="absolute left-0 right-0 h-3 bg-cyan-400/20 border-l-2 border-cyan-400 z-10 pointer-events-none"
                                animate={{
                                  top: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
                                  opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
                                }}
                                transition={{
                                  duration: 8,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  ease: "linear"
                                }}
                              />
                              
                              {/* Linhas de código Solidity - Certificação Gemológica com loop infinito */}
                              <motion.div
                                animate={{ 
                                  opacity: [0, 0.8, 0.8, 0.8, 0],
                                  x: [-20, 0, 0, 0, 0]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.1, 0.7, 0.9, 1]
                                }}
                                className="text-cyan-400"
                              >
                                <span className="text-purple-400">contract</span>{" "}
                                <span className="text-yellow-300">GemLabRegistry</span> {"{"}
                              </motion.div>
                              
                              <motion.div
                                animate={{ 
                                  opacity: [0, 0.7, 0.7, 0.7, 0],
                                  x: [-20, 0, 0, 0, 0]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.15, 0.7, 0.9, 1],
                                  delay: 0.2
                                }}
                                className="text-gray-400 pl-2"
                              >
                                <span className="text-blue-300">struct</span> Emerald {"{"}
                              </motion.div>
                              
                              <motion.div
                                animate={{ 
                                  opacity: [0, 0.6, 0.6, 0.6, 0],
                                  x: [-20, 0, 0, 0, 0]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.2, 0.7, 0.9, 1],
                                  delay: 0.4
                                }}
                                className="text-gray-300 pl-4 text-[7px]"
                              >
                                <span className="text-cyan-300">bytes32</span> spectralHash;
                              </motion.div>
                              
                              <motion.div
                                animate={{ 
                                  opacity: [0, 0.6, 0.6, 0.6, 0],
                                  x: [-20, 0, 0, 0, 0]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.25, 0.7, 0.9, 1],
                                  delay: 0.5
                                }}
                                className="text-gray-300 pl-4 text-[7px]"
                              >
                                <span className="text-cyan-300">uint256</span> weight;
                              </motion.div>
                              
                              <motion.div
                                animate={{ 
                                  opacity: [0, 0.6, 0.6, 0.6, 0],
                                  x: [-20, 0, 0, 0, 0]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.3, 0.7, 0.9, 1],
                                  delay: 0.6
                                }}
                                className="text-gray-300 pl-4 text-[7px]"
                              >
                                <span className="text-cyan-300">string</span> origin;
                              </motion.div>
                              
                              <motion.div
                                animate={{ 
                                  opacity: [0, 0.6, 0.6, 0.6, 0],
                                  x: [-20, 0, 0, 0, 0]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.35, 0.7, 0.9, 1],
                                  delay: 0.7
                                }}
                                className="text-gray-300 pl-4 text-[7px]"
                              >
                                <span className="text-cyan-300">bool</span> certified;
                              </motion.div>
                              
                              <motion.div
                                animate={{ 
                                  opacity: [0, 0.7, 0.7, 0.7, 0],
                                  x: [-20, 0, 0, 0, 0]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.4, 0.7, 0.9, 1],
                                  delay: 0.8
                                }}
                                className="text-gray-400 pl-2"
                              >
                                {"}"}
                              </motion.div>
                              
                              <motion.div
                                animate={{ 
                                  opacity: [0, 0.7, 0.7, 0.7, 0],
                                  x: [-20, 0, 0, 0, 0]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.45, 0.7, 0.9, 1],
                                  delay: 1
                                }}
                                className="text-green-400 pl-2 pt-1"
                              >
                                <span className="text-purple-400">function</span>{" "}
                                <span className="text-yellow-300">certify</span>() {"{"}
                              </motion.div>
                              
                              <motion.div
                                animate={{ 
                                  opacity: [0, 0.6, 0.6, 0.6, 0],
                                  x: [-20, 0, 0, 0, 0]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.5, 0.7, 0.9, 1],
                                  delay: 1.2
                                }}
                                className="text-gray-300 pl-4 text-[7px]"
                              >
                                <span className="text-orange-300">emit</span> Certified();
                              </motion.div>
                              
                              <motion.div
                                animate={{ 
                                  opacity: [0, 0.7, 0.7, 0.7, 0],
                                  x: [-20, 0, 0, 0, 0]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.55, 0.7, 0.9, 1],
                                  delay: 1.3
                                }}
                                className="text-green-400 pl-2"
                              >
                                {"}"}
                              </motion.div>
                              
                              <motion.div
                                animate={{ 
                                  opacity: [0, 0.8, 0.8, 0.8, 0],
                                  x: [-20, 0, 0, 0, 0]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.6, 0.7, 0.9, 1],
                                  delay: 1.4
                                }}
                                className="text-cyan-400"
                              >
                                {"}"}
                              </motion.div>
                              
                              {/* Hash signature no final */}
                              <motion.div
                                animate={{ 
                                  opacity: [0, 1, 1, 1, 0],
                                  y: [10, 0, 0, 0, 0]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.65, 0.7, 0.9, 1],
                                  delay: 1.6
                                }}
                                className="text-green-400 pt-2 text-[7px] border-t border-cyan-500/30 mt-2"
                              >
                                <span className="text-gray-500">// SpectralHash:</span>
                              </motion.div>
                              
                              <motion.div
                                animate={{ 
                                  opacity: [0, 1, 1, 1, 0],
                                  scale: [0.95, 1, 1, 1, 1]
                                }}
                                transition={{ 
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.7, 0.7, 0.9, 1],
                                  delay: 1.8
                                }}
                                className="text-cyan-300 text-[7px] font-bold tracking-wider"
                              >
                                0x7f3a92c4...
                              </motion.div>
                              
                              {/* Cursor piscante no final (como terminal) */}
                              <motion.div
                                animate={{
                                  opacity: [0, 0, 1, 0, 1, 0]
                                }}
                                transition={{
                                  duration: 10,
                                  repeat: Infinity,
                                  repeatDelay: 1,
                                  times: [0, 0.7, 0.75, 0.8, 0.85, 1]
                                }}
                                className="inline-block w-1 h-2 bg-cyan-400 ml-1"
                              />
                            </div>
                          </div>
                          
                          {/* Linhas de scan horizontal (efeito Matrix/compile) */}
                          <motion.div
                            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                            initial={{ top: "0%" }}
                            animate={{ 
                              top: ["0%", "100%", "0%"],
                              opacity: [0, 0.6, 0]
                            }}
                            transition={{ 
                              duration: 4,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                          />
                          
                          {/* Partículas de dados fluindo */}
                          {[...Array(4)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                              style={{
                                left: `${20 + i * 20}%`,
                              }}
                              animate={{
                                y: ["0%", "100%"],
                                opacity: [0, 0.8, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.7,
                                ease: "linear"
                              }}
                            />
                          ))}
                          
                          {/* Badge "EXECUTING..." no canto */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ 
                              opacity: [0, 1, 1],
                              scale: 1
                            }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute bottom-2 left-2 bg-green-500/20 border border-green-400/40 rounded px-2 py-0.5 flex items-center gap-1"
                          >
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-[7px] text-green-300 font-mono">EXECUTING</span>
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Wireframe dinâmico envolvendo a gema */}
                      <svg className="absolute inset-0 w-full h-full opacity-40 group-hover/image:opacity-60 transition-opacity" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        {/* Hexágono externo (camada de segurança) */}
                        <polygon points="50,15 75,30 75,70 50,85 25,70 25,30" fill="none" stroke="#00ffff" strokeWidth="0.3" opacity="0.4">
                          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="25s" repeatCount="indefinite" />
                        </polygon>
                        
                        {/* Hexágono central (representa SpectralHash) */}
                        <polygon points="50,20 70,35 70,65 50,80 30,65 30,35" fill="none" stroke="#00ffff" strokeWidth="0.5" strokeDasharray="3,2">
                          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite" />
                          <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                        </polygon>
                        <polygon points="50,30 65,40 65,60 50,70 35,60 35,40" fill="none" stroke="#ffffff" strokeWidth="0.3" opacity="0.5">
                          <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="15s" repeatCount="indefinite" />
                        </polygon>
                        
                        {/* Linhas conectando ao centro (raios de validação) */}
                        <line x1="50" y1="20" x2="50" y2="30" stroke="#00ffff" strokeWidth="0.5" opacity="0.6">
                          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="70" y1="35" x2="65" y2="40" stroke="#00ffff" strokeWidth="0.5" opacity="0.6">
                          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="70" y1="65" x2="65" y2="60" stroke="#ffffff" strokeWidth="0.5" opacity="0.5">
                          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
                        </line>
                        <line x1="50" y1="80" x2="50" y2="70" stroke="#ffffff" strokeWidth="0.5" opacity="0.5">
                          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" begin="0.5s" />
                        </line>
                        
                        {/* Pontos de validação (nodes blockchain) */}
                        <circle cx="50" cy="20" r="2" fill="#00ffff">
                          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="70" cy="35" r="2" fill="#00ffff">
                          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="r" values="2.5;1.5;2.5" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="70" cy="65" r="2" fill="#ffffff">
                          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
                          <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite" begin="0.5s" />
                        </circle>
                        <circle cx="50" cy="80" r="2" fill="#ffffff">
                          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.5s" />
                          <animate attributeName="r" values="2.5;1.5;2.5" dur="2s" repeatCount="indefinite" begin="0.5s" />
                        </circle>
                        
                        {/* Círculo de scan (efeito radar) */}
                        <circle cx="50" cy="50" r="20" fill="none" stroke="#00ffff" strokeWidth="0.5" opacity="0">
                          <animate attributeName="r" values="0;45" dur="3s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.6;0" dur="3s" repeatCount="indefinite" />
                        </circle>
                      </svg>

                      {/* Selo de Attestation (EAS) */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="absolute bottom-4 right-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full p-3 shadow-lg shadow-green-500/50 border-2 border-white/30 cursor-pointer"
                      >
                        <Shield className="h-6 w-6 text-white" />
                        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 opacity-0 group-hover/image:opacity-30 blur transition-opacity duration-500" />
                      </motion.div>

                      {/* Badge "SpectralHash" flutuante */}
                      <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="absolute top-4 left-4 bg-cyan-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cyan-300/50 shadow-lg shadow-cyan-500/30 cursor-pointer"
                      >
                        <span className="font-['Inter'] text-xs text-white font-mono flex items-center gap-1.5">
                          <Sparkles className="h-3 w-3" />
                          SpectralHash
                        </span>
                      </motion.div>

                      {/* Brilhos flutuantes ao redor da esmeralda */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-sm"
                          style={{
                            left: `${20 + (i * 15)}%`,
                            top: `${10 + (i % 3) * 30}%`,
                          }}
                          animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0.5, 1.2, 0.5],
                            y: [0, -10, 0],
                          }}
                          transition={{
                            duration: 2 + (i * 0.3),
                            repeat: Infinity,
                            delay: i * 0.4,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                  
                  {/* Dados técnicos com estilo tech */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="space-y-3"
                  >
                    <motion.div 
                      whileHover={{ x: 2, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-white/10 transition-colors"
                    >
                      <span className="font-['Inter'] text-sm text-gray-400">
                        Peso
                      </span>
                      <span className="font-['Inter'] text-sm font-medium text-white">
                        3.42 ct
                      </span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 2, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-white/10 transition-colors"
                    >
                      <span className="font-['Inter'] text-sm text-gray-400">
                        Origem
                      </span>
                      <span className="font-['Inter'] text-sm font-medium text-white">
                        Campos Verdes - GO
                      </span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 2, backgroundColor: 'rgba(0,255,255,0.08)' }}
                      className="flex justify-between items-center p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30 transition-colors cursor-pointer group/hash"
                    >
                      <span className="font-['Inter'] text-sm text-cyan-300 flex items-center gap-2">
                        <Fingerprint className="h-4 w-4 group-hover/hash:rotate-12 transition-transform" />
                        SpectralHash
                      </span>
                      <span className="font-['Inter'] text-xs font-mono text-cyan-400 group-hover/hash:text-cyan-300 transition-colors">
                        0x7f3a...92c4
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Badge EAS */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-[#006b4f] to-[#014733] rounded-2xl shadow-2xl p-4 border-2 border-white cursor-pointer group/badge"
              >
                <Fingerprint className="h-8 w-8 text-white group-hover/badge:scale-110 transition-transform" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/20 to-cyan-400/20 opacity-0 group-hover/badge:opacity-100 transition-opacity blur" />
              </motion.div>
            </div>

            {/* Background Decoration - Tech Style com profundidade */}
            <div className="absolute inset-0 -z-10">
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
              />
              <motion.div 
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#006b4f]/20 rounded-full blur-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}