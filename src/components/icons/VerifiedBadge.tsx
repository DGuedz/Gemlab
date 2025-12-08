import { motion } from "motion/react";

interface VerifiedBadgeProps {
  className?: string;
  size?: number;
}

export function VerifiedBadge({ className = "", size = 64 }: VerifiedBadgeProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Círculo externo */}
      <motion.circle
        cx="32"
        cy="32"
        r="28"
        fill="#006b4f"
        whileHover={{ r: 29 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Círculo interno (anel) */}
      <motion.circle
        cx="32"
        cy="32"
        r="24"
        fill="none"
        stroke="#caa34b"
        strokeWidth="1"
        opacity="0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Check animado */}
      <motion.path
        d="M20 32L28 40L44 24"
        stroke="#caa34b"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 1 }}
        whileHover={{ 
          pathLength: [1, 0, 1],
          strokeWidth: [3, 4, 3]
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  );
}
