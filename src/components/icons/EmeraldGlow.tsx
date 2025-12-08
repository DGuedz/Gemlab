import { motion } from "motion/react";

interface EmeraldGlowProps {
  className?: string;
  size?: number;
}

export function EmeraldGlow({ className = "", size = 48 }: EmeraldGlowProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      whileHover={{ scale: 1.08, rotate: 3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Esmeralda facetada */}
      <motion.path
        d="M24 4L34 14L30 28L24 44L18 28L14 14Z"
        fill="#006b4f"
        whileHover={{ fill: "#008060" }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Facetas laterais */}
      <motion.path
        d="M14 14L18 28L24 44L24 4Z"
        fill="#014733"
        opacity="0.6"
        whileHover={{ opacity: 0.8 }}
      />
      
      {/* Brilho superior */}
      <motion.circle
        cx="24"
        cy="16"
        r="2"
        fill="white"
        opacity="0"
        whileHover={{ opacity: 0.9, r: 4 }}
        transition={{ 
          duration: 0.6, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut" 
        }}
      />
      
      {/* Reflexo dourado */}
      <motion.path
        d="M20 18L24 14L28 18"
        stroke="#caa34b"
        strokeWidth="1.5"
        fill="none"
        opacity="0"
        whileHover={{ opacity: 0.7 }}
        transition={{ duration: 0.4 }}
      />
    </motion.svg>
  );
}
