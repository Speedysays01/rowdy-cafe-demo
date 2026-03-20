import { motion } from "framer-motion";

/** Pulsing fire glow effect */
const FireGlow = ({ className = "", intensity = "medium" }: { className?: string; intensity?: "low" | "medium" | "high" }) => {
  const opacityRange = intensity === "high" ? [0.5, 0.9, 0.5] : intensity === "medium" ? [0.3, 0.6, 0.3] : [0.15, 0.35, 0.15];
  
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        opacity: opacityRange,
        scale: [1, 1.08, 1],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      style={{
        background: intensity === "high"
          ? "radial-gradient(ellipse at center, hsl(48 96% 53% / 0.2) 0%, hsl(20 90% 50% / 0.12) 30%, hsl(5 85% 45% / 0.06) 60%, transparent 80%)"
          : "radial-gradient(ellipse at center, hsl(48 96% 53% / 0.12) 0%, hsl(20 90% 50% / 0.06) 40%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
};

export default FireGlow;
