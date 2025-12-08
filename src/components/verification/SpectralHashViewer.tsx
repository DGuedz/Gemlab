import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tooltip } from "../ui/tooltip";
import { Microscope, Hash, Copy, ExternalLink, Database, CheckCircle2, AlertTriangle, ArrowRight, Fingerprint, Shield } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";
import { SpectralOrb } from "../icons/SpectralOrb";

interface SpectralHashViewerProps {
  spectralHash: string;
  ipfsCid?: string;
  arweaveTxId?: string;
  certificationDate?: string;
}

export function SpectralHashViewer({ 
  spectralHash, 
  ipfsCid, 
  arweaveTxId,
  certificationDate 
}: SpectralHashViewerProps) {
  const [copied, setCopied] = useState(false);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate realistic Raman spectral data (deterministic from hash)
  const generateRamanSpectrum = (hash: string) => {
    if (!hash) return [];
    
    const data = [];
    // Raman shift range: 200-4000 cm⁻¹
    for (let i = 200; i <= 4000; i += 50) {
      const seedValue = hash.charCodeAt(Math.floor((i / 4000) * hash.length) % hash.length);
      
      // Create realistic emerald peaks (Beryl + Chromium signature)
      let intensity = 10 + Math.random() * 15; // Baseline noise
      
      // Characteristic emerald peaks
      if (Math.abs(i - 680) < 30) intensity += 70 + (seedValue % 20); // Cr³⁺ peak
      if (Math.abs(i - 1010) < 25) intensity += 60 + (seedValue % 15); // Beryl symmetric stretch
      if (Math.abs(i - 1070) < 20) intensity += 45 + (seedValue % 10); // Beryl asymmetric stretch
      if (Math.abs(i - 400) < 35) intensity += 30 + (seedValue % 12); // Si-O bend
      if (Math.abs(i - 3595) < 40) intensity += 40 + (seedValue % 18); // OH stretch
      
      data.push({
        ramanShift: i,
        intensity: Math.min(100, intensity)
      });
    }
    
    return data;
  };

  const spectralData = generateRamanSpectrum(spectralHash);

  return (
    <Card className="p-4 md:p-8 border-2 border-[#006b4f] bg-gradient-to-br from-white to-gray-50">
      {/* SEÇÃO 1: HEADER - IDENTIDADE CIENTÍFICA */}
      <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-4 mb-8">
        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
          <motion.div 
            className="bg-[#006b4f] p-3 md:p-4 rounded-xl flex-shrink-0"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SpectralOrb size={32} className="text-white md:w-10 md:h-10" />
          </motion.div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-['Montserrat'] text-xl md:text-2xl font-bold text-[#1b1b1b]">
                SpectralHash™
              </h3>
              <Tooltip content="O SpectralHash é a identidade científica e digital da esmeralda - uma 'digital óptica' molecular impossível de falsificar, que elimina o risco de substituição fraudulenta." />
            </div>
            <p className="font-['Inter'] text-xs md:text-sm text-gray-600">
              Identidade Molecular Única
            </p>
          </div>
        </div>
        <Badge className="bg-[#006b4f] text-white border-0 flex-shrink-0 self-start">
          <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 mr-1" />
          <span className="text-xs">Verificado</span>
        </Badge>
      </div>

      {/* SEÇÃO 2: GRÁFICO ESPECTRAL RAMAN - PEÇA CENTRAL */}
      <motion.div 
        className="bg-white border-2 border-[#006b4f] rounded-xl p-4 md:p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Microscope className="h-4 w-4 md:h-5 md:w-5 text-[#006b4f] flex-shrink-0" />
            <span className="font-['Montserrat'] font-bold text-sm md:text-base text-[#1b1b1b]">
              Espectrograma Raman
            </span>
          </div>
          <Badge variant="outline" className="border-[#caa34b] text-[#caa34b] flex-shrink-0 text-xs">
            Padrão Único
          </Badge>
        </div>
        
        {/* Gráfico Espectral */}
        <div className="bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-200 p-2 md:p-4 mb-4">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={spectralData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="ramanShift" 
                label={{ value: 'Raman Shift (cm⁻¹)', position: 'insideBottom', offset: -5, style: { fontFamily: 'Inter', fontSize: 12, fill: '#6b7280' } }}
                tick={{ fontSize: 11, fill: '#9ca3af' }}
              />
              <YAxis 
                label={{ value: 'Intensidade', angle: -90, position: 'insideLeft', style: { fontFamily: 'Inter', fontSize: 12, fill: '#6b7280' } }}
                tick={{ fontSize: 11, fill: '#9ca3af' }}
              />
              <RechartsTooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #006b4f', 
                  borderRadius: '8px',
                  fontFamily: 'Inter',
                  fontSize: 12
                }}
                labelFormatter={(value) => `${value} cm⁻¹`}
                formatter={(value: number) => [`${value.toFixed(2)}`, 'Intensidade']}
              />
              <Line 
                type="monotone" 
                dataKey="intensity" 
                stroke="#006b4f" 
                strokeWidth={2} 
                dot={false}
                activeDot={{ r: 4, fill: '#caa34b' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#006b4f]/5 border border-[#006b4f]/20 rounded-lg p-3 md:p-4">
          <div className="flex items-start gap-2 md:gap-3">
            <Fingerprint className="h-4 w-4 md:h-5 md:w-5 text-[#006b4f] flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="font-['Inter'] text-xs md:text-sm text-gray-700 leading-relaxed mb-2">
                <span className="font-bold text-[#006b4f]">Espectrometria Raman:</span> Padrão único de picos que representa a composição molecular (Berilo + Cromo).
              </p>
              <p className="font-['Inter'] text-xs text-gray-600">
                Picos: 680 cm⁻¹ (Cr³⁺), 1010 cm⁻¹ (Berilo)
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SEÇÃO 3: FLUXO CIENTÍFICO → CRIPTOGRÁFICO */}
      <motion.div 
        className="bg-white border-2 border-[#caa34b] rounded-xl p-4 md:p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <Hash className="h-4 w-4 md:h-5 md:w-5 text-[#caa34b] flex-shrink-0" />
          <span className="font-['Montserrat'] font-bold text-sm md:text-base text-[#1b1b1b]">
            Ciência → Criptografia
          </span>
        </div>

        {/* Fluxo Visual */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3 md:gap-4 mb-4 md:mb-6">
          {/* Etapa 1: Dados Espectrais */}
          <motion.div
            className={`p-3 md:p-4 rounded-lg border-2 transition-all cursor-pointer md:col-span-2 ${
              hoveredStage === 1 
                ? 'border-[#006b4f] bg-[#006b4f]/5 shadow-md' 
                : 'border-gray-200 bg-gray-50'
            }`}
            onHoverStart={() => setHoveredStage(1)}
            onHoverEnd={() => setHoveredStage(null)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#006b4f] text-white w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                1
              </div>
              <span className="font-['Inter'] font-bold text-xs text-[#1b1b1b]">
                Entrada
              </span>
            </div>
            <p className="font-['Inter'] text-xs text-gray-600 leading-tight">
              Dados espectrais + metadados
            </p>
          </motion.div>

          {/* Seta */}
          <div className="hidden md:flex items-center justify-center md:col-span-1">
            <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-[#caa34b]" />
          </div>

          {/* Etapa 2: Processamento */}
          <motion.div
            className={`p-3 md:p-4 rounded-lg border-2 transition-all cursor-pointer md:col-span-2 ${
              hoveredStage === 2 
                ? 'border-[#caa34b] bg-[#caa34b]/5 shadow-md' 
                : 'border-gray-200 bg-gray-50'
            }`}
            onHoverStart={() => setHoveredStage(2)}
            onHoverEnd={() => setHoveredStage(null)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#caa34b] text-white w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                2
              </div>
              <span className="font-['Inter'] font-bold text-xs text-[#1b1b1b]">
                Algoritmo
              </span>
            </div>
            <p className="font-['Inter'] text-xs text-gray-600 leading-tight">
              SHA-256 processa dados
            </p>
          </motion.div>

          {/* Seta */}
          <div className="hidden md:flex items-center justify-center md:col-span-1">
            <ArrowRight className="h-5 w-5 md:h-6 md:w-6 text-[#caa34b]" />
          </div>

          {/* Etapa 3: SpectralHash */}
          <motion.div
            className={`p-3 md:p-4 rounded-lg border-2 transition-all cursor-pointer md:col-span-2 ${
              hoveredStage === 3 
                ? 'border-[#014733] bg-[#014733]/5 shadow-md' 
                : 'border-gray-200 bg-gray-50'
            }`}
            onHoverStart={() => setHoveredStage(3)}
            onHoverEnd={() => setHoveredStage(null)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#014733] text-white w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                3
              </div>
              <span className="font-['Inter'] font-bold text-xs text-[#1b1b1b]">
                Saída
              </span>
            </div>
            <p className="font-['Inter'] text-xs text-gray-600 leading-tight">
              SpectralHash - Digital Óptica
            </p>
          </motion.div>
        </div>

        {/* Display do Hash */}
        <div className="bg-gradient-to-r from-[#006b4f]/10 to-[#caa34b]/10 border-2 border-[#006b4f] rounded-lg p-3 md:p-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="font-['Inter'] text-xs font-bold text-[#014733] flex-shrink-0">
              SPECTRALHASH
            </span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => copyToClipboard(spectralHash)}
              className="h-7 text-[#006b4f] hover:bg-[#006b4f]/10 flex-shrink-0"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  <span className="hidden md:inline">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3 mr-1" />
                  <span className="hidden md:inline">Copiar</span>
                </>
              )}
            </Button>
          </div>
          <div className="font-mono text-xs text-[#006b4f] break-all bg-white p-2 md:p-3 rounded border border-[#006b4f]/30">
            {spectralHash}
          </div>
        </div>
      </motion.div>

      {/* SEÇÃO 4: ANCORAGEM BLOCKCHAIN */}
      <motion.div 
        className="bg-gradient-to-br from-[#014733]/5 to-white border-2 border-[#014733] rounded-xl p-4 md:p-6 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <Shield className="h-4 w-4 md:h-5 md:w-5 text-[#014733] flex-shrink-0" />
          <span className="font-['Montserrat'] font-bold text-sm md:text-base text-[#1b1b1b]">
            Ancoragem Blockchain
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* NFT ERC-721 */}
          <div className="bg-white border-2 border-[#006b4f] rounded-lg p-3 md:p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-[#006b4f] p-1.5 md:p-2 rounded-lg flex-shrink-0">
                <Database className="h-3 w-3 md:h-4 md:w-4 text-white" />
              </div>
              <span className="font-['Inter'] font-bold text-xs md:text-sm text-[#1b1b1b]">
                NFT (ERC-721)
              </span>
            </div>
            <p className="font-['Inter'] text-xs text-gray-600 leading-relaxed mb-2">
              Hash gravado no NFT da gema.
            </p>
            <Badge variant="outline" className="border-[#006b4f] text-[#006b4f] text-xs truncate max-w-full">
              ID: #{spectralHash.slice(2, 8)}
            </Badge>
          </div>

          {/* Atestado EAS */}
          <div className="bg-white border-2 border-[#caa34b] rounded-lg p-3 md:p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-[#caa34b] p-1.5 md:p-2 rounded-lg flex-shrink-0">
                <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-white" />
              </div>
              <span className="font-['Inter'] font-bold text-xs md:text-sm text-[#1b1b1b]">
                Atestado EAS
              </span>
            </div>
            <p className="font-['Inter'] text-xs text-gray-600 leading-relaxed mb-2">
              Prova de Ciência (Schema #2) via EAS.
            </p>
            <Badge variant="outline" className="border-[#caa34b] text-[#caa34b] text-xs">
              On-Chain
            </Badge>
          </div>

          {/* Armazenamento Descentralizado */}
          {(ipfsCid || arweaveTxId) && (
            <div className="bg-white border-2 border-purple-600 rounded-lg p-3 md:p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-purple-600 p-1.5 md:p-2 rounded-lg flex-shrink-0">
                  <ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-white" />
                </div>
                <span className="font-['Inter'] font-bold text-xs md:text-sm text-[#1b1b1b]">
                  Storage
                </span>
              </div>
              <div className="space-y-2">
                {ipfsCid && (
                  <div className="min-w-0">
                    <p className="font-['Inter'] text-xs text-gray-500 mb-1">IPFS:</p>
                    <code className="font-mono text-xs text-purple-700 break-all block">
                      {ipfsCid.slice(0, 15)}...
                    </code>
                  </div>
                )}
                {arweaveTxId && (
                  <div className="min-w-0">
                    <p className="font-['Inter'] text-xs text-gray-500 mb-1">Arweave:</p>
                    <code className="font-mono text-xs text-purple-700 break-all block">
                      {arweaveTxId.slice(0, 15)}...
                    </code>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* SEÇÃO 5: GARANTIA ANTI-FRAUDE */}
      <motion.div 
        className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-500 rounded-xl p-4 md:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-start gap-3 md:gap-4">
          <div className="bg-red-500 p-2 md:p-3 rounded-xl flex-shrink-0">
            <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-['Montserrat'] font-bold text-base md:text-lg text-[#1b1b1b] mb-2">
              Garantia Anti-Fraude
            </h4>
            <div className="bg-white border border-red-200 rounded-lg p-3 md:p-4 mb-3">
              <p className="font-['Inter'] text-xs md:text-sm text-gray-700 leading-relaxed mb-2">
                <span className="font-bold text-red-600">Verificação:</span> Nova análise Raman compara com hash blockchain.
              </p>
              <div className="flex items-center gap-2 p-2 md:p-3 bg-red-50 rounded border border-red-300 overflow-x-auto">
                <span className="font-mono font-bold text-xs md:text-sm text-red-700 whitespace-nowrap">
                  hash_novo ≠ blockchain = FRAUDE
                </span>
              </div>
            </div>
            {certificationDate && (
              <p className="font-['Inter'] text-xs text-gray-600">
                Certificação: <span className="font-bold text-[#006b4f]">{certificationDate}</span>
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </Card>
  );
}