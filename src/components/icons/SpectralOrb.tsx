import { motion } from "motion/react";

interface SpectralOrbProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export function SpectralOrb({ className = "", size = 80, animated = true }: SpectralOrbProps) {
  const angles = [0, 60, 120, 180, 240, 300];
  
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      className={className}
      whileHover={animated ? { rotate: 360 } : undefined}
      transition={animated ? { duration: 8, ease: "linear", repeat: Infinity } : undefined}
    >
      {/* Círculo externo */}
      <motion.circle
        cx="40"
        cy="40"
        r="30"
        stroke="#006b4f"
        strokeWidth="1.5"
        fill="none"
        whileHover={{ r: 33, strokeWidth: 2 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Círculo interno */}
      <motion.circle
        cx="40"
        cy="40"
        r="20"
        stroke="#014733"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
        whileHover={{ r: 22, opacity: 0.8 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Raios espectrais */}
      {angles.map((angle, i) => (
        <motion.line
          key={i}
          x1="40"
          y1="40"
          x2={40 + 25 * Math.cos((angle * Math.PI) / 180)}
          y2={40 + 25 * Math.sin((angle * Math.PI) / 180)}
          stroke="#caa34b"
          strokeWidth="1.5"
          strokeLinecap="round"
          whileHover={{ 
            x2: 40 + 30 * Math.cos((angle * Math.PI) / 180),
            y2: 40 + 30 * Math.sin((angle * Math.PI) / 180),
            strokeWidth: 2,
          }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
        />
      ))}
      
      {/* Núcleo central */}
      <motion.circle
        cx="40"
        cy="40"
        r="3"
        fill="#006b4f"
        whileHover={{ 
          r: 5,
          fill: "#caa34b",
        }}
        transition={{ 
          duration: 0.4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.svg>
  );
}
