import { motion } from "framer-motion";

type Variant = "flame" | "brush" | "ember" | "glow-line";

const BrushDivider = ({ variant = "flame" }: {variant?: Variant;}) => {
  if (variant === "glow-line") {
    return (
      <div className="relative w-full py-2 overflow-hidden">
        <motion.div
          className="mx-auto h-[2px] w-full max-w-3xl rounded-full"
          style={{
            background:
            "linear-gradient(90deg, transparent 0%, hsl(var(--primary)) 15%, hsl(var(--flame-orange)) 50%, hsl(var(--primary)) 85%, transparent 100%)",
            backgroundSize: "200% 100%"
          }}
          animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
        
        {/* Soft glow behind the line */}
        <motion.div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto h-6 w-full max-w-2xl rounded-full pointer-events-none"
          style={{
            background:
            "radial-gradient(ellipse at center, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
            filter: "blur(8px)"
          }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
        
      </div>);

  }

  if (variant === "brush") {
    return (
      <div className="relative w-full h-10 overflow-hidden">
        <svg
          width="100%"
          height="40"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          className="absolute inset-0">
          
          <defs>
            <linearGradient id="brush-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(48 96% 53%)" stopOpacity="0" />
              <stop offset="20%" stopColor="hsl(48 96% 53%)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(20 90% 50%)" stopOpacity="0.8" />
              <stop offset="80%" stopColor="hsl(48 96% 53%)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(48 96% 53%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 20 Q80 8 160 22 Q240 35 360 15 Q480 0 600 18 Q720 32 840 12 Q960 0 1080 20 Q1200 35 1320 15 Q1380 8 1440 20"
            stroke="url(#brush-grad)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round" />
          
        </svg>
      </div>);

  }

  if (variant === "ember") {
    return (
      <div className="relative w-full h-16 overflow-hidden">
        {/* Center glow */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-60 h-12 rounded-full pointer-events-none"
          style={{
            background:
            "radial-gradient(ellipse, hsl(var(--primary) / 0.25) 0%, hsl(var(--flame-orange) / 0.1) 50%, transparent 80%)",
            filter: "blur(16px)"
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        
        {/* Rising sparks */}
        {Array.from({ length: 8 }).map((_, i) =>
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${15 + i / 8 * 70}%`,
            bottom: "30%",
            width: `${2 + Math.random() * 2}px`,
            height: `${2 + Math.random() * 2}px`,
            backgroundColor: i % 3 === 0 ? "hsl(48 96% 53%)" : i % 3 === 1 ? "hsl(20 90% 50%)" : "hsl(5 85% 45%)"
          }}
          animate={{
            y: [0, -20 - Math.random() * 25],
            opacity: [0.8, 0],
            scale: [1, 0.3]
          }}
          transition={{
            duration: 1.2 + Math.random() * 0.8,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut"
          }} />

        )}
        {/* Thin horizontal line */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-xl h-px"
          style={{
            background:
            "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), hsl(var(--flame-orange) / 0.4), hsl(var(--primary) / 0.3), transparent)"
          }} />
        
      </div>);

  }

  // Default: flame variant — animated wavy fire line
  return (
    <div className="relative w-full h-12 overflow-hidden">
      































      
      {/* Glow behind the wave */}
      <motion.div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto h-8 w-full max-w-3xl rounded-full pointer-events-none"
        style={{
          background:
          "radial-gradient(ellipse at center, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
          filter: "blur(12px)"
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      
    </div>);

};

export default BrushDivider;