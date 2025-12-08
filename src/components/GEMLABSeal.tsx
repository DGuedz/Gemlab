import { motion } from "motion/react";
import fingerprintImage from "figma:asset/cde6329a6c4b255a7d190dd68be01f6589014264.png";

interface GEMLABSealProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

/**
 * GEMLABSeal V6 - Fingerprint Identity (Image-based)
 * 
 * Usa a imagem oficial da impressão digital GEMLAB
 * Representa o SpectralHash como identidade única e incontestável
 */
export function GEMLABSeal({ size = 140, className = "", animated = true }: GEMLABSealProps) {
  const ImageContent = (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Imagem da Impressão Digital */}
      <img 
        src={fingerprintImage} 
        alt="GEMLAB SpectralHash Identity"
        className="w-full h-full object-contain bg-white rounded-full p-3 shadow-lg"
      />
      
      {/* Badge GEMLAB sobreposto (opcional) */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
        <div className="bg-white px-3 py-1 rounded-full border-2 border-[#006b4f] shadow-lg">
          <span className="font-['Montserrat'] text-[10px] font-bold text-[#006b4f] tracking-wider">
            GEMLAB
          </span>
        </div>
      </div>
    </div>
  );

  if (!animated) {
    return ImageContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 1.2, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.08, 
        rotate: 5,
        transition: { duration: 0.3 }
      }}
    >
      {ImageContent}
    </motion.div>
  );
}