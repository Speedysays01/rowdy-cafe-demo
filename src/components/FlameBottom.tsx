import { motion } from "framer-motion";

/** Animated bottom-of-section rising flames — like fire burning along the ground */
const FlameBottom = ({ className = "", intensity = "medium" }: { className?: string; intensity?: "low" | "medium" | "high" }) => {
  const flameCount = intensity === "high" ? 12 : intensity === "medium" ? 8 : 5;
  const height = intensity === "high" ? 120 : intensity === "medium" ? 80 : 50;

  return (
    <div className={`absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden ${className}`} style={{ height: `${height + 20}px` }}>
      <svg width="100%" height={height} viewBox={`0 0 1440 ${height}`} preserveAspectRatio="none" className="absolute bottom-0">
        <defs>
          <linearGradient id="flame-bottom-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#b91c1c" stopOpacity="0.5" />
            <stop offset="30%" stopColor="#dc2626" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#ea580c" stopOpacity="0.3" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flame-bottom-inner" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Outer fire wave */}
        <motion.path
          fill="url(#flame-bottom-grad)"
          animate={{
            d: [
              `M0 ${height} L0 ${height * 0.6} Q60 ${height * 0.3} 120 ${height * 0.5} Q180 ${height * 0.7} 240 ${height * 0.4} Q300 ${height * 0.15} 360 ${height * 0.45} Q420 ${height * 0.65} 480 ${height * 0.35} Q540 ${height * 0.1} 600 ${height * 0.4} Q660 ${height * 0.6} 720 ${height * 0.3} Q780 ${height * 0.05} 840 ${height * 0.35} Q900 ${height * 0.55} 960 ${height * 0.4} Q1020 ${height * 0.2} 1080 ${height * 0.5} Q1140 ${height * 0.65} 1200 ${height * 0.35} Q1260 ${height * 0.15} 1320 ${height * 0.45} Q1380 ${height * 0.6} 1440 ${height * 0.5} L1440 ${height}Z`,
              `M0 ${height} L0 ${height * 0.5} Q60 ${height * 0.25} 120 ${height * 0.45} Q180 ${height * 0.6} 240 ${height * 0.35} Q300 ${height * 0.1} 360 ${height * 0.5} Q420 ${height * 0.7} 480 ${height * 0.4} Q540 ${height * 0.15} 600 ${height * 0.45} Q660 ${height * 0.55} 720 ${height * 0.25} Q780 ${height * 0.1} 840 ${height * 0.4} Q900 ${height * 0.6} 960 ${height * 0.35} Q1020 ${height * 0.15} 1080 ${height * 0.45} Q1140 ${height * 0.7} 1200 ${height * 0.4} Q1260 ${height * 0.2} 1320 ${height * 0.5} Q1380 ${height * 0.55} 1440 ${height * 0.4} L1440 ${height}Z`,
              `M0 ${height} L0 ${height * 0.6} Q60 ${height * 0.3} 120 ${height * 0.5} Q180 ${height * 0.7} 240 ${height * 0.4} Q300 ${height * 0.15} 360 ${height * 0.45} Q420 ${height * 0.65} 480 ${height * 0.35} Q540 ${height * 0.1} 600 ${height * 0.4} Q660 ${height * 0.6} 720 ${height * 0.3} Q780 ${height * 0.05} 840 ${height * 0.35} Q900 ${height * 0.55} 960 ${height * 0.4} Q1020 ${height * 0.2} 1080 ${height * 0.5} Q1140 ${height * 0.65} 1200 ${height * 0.35} Q1260 ${height * 0.15} 1320 ${height * 0.45} Q1380 ${height * 0.6} 1440 ${height * 0.5} L1440 ${height}Z`,
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Inner bright fire wave */}
        <motion.path
          fill="url(#flame-bottom-inner)"
          animate={{
            d: [
              `M0 ${height} L0 ${height * 0.7} Q80 ${height * 0.5} 160 ${height * 0.65} Q240 ${height * 0.8} 320 ${height * 0.55} Q400 ${height * 0.4} 480 ${height * 0.6} Q560 ${height * 0.75} 640 ${height * 0.5} Q720 ${height * 0.35} 800 ${height * 0.55} Q880 ${height * 0.7} 960 ${height * 0.6} Q1040 ${height * 0.45} 1120 ${height * 0.65} Q1200 ${height * 0.8} 1280 ${height * 0.55} Q1360 ${height * 0.4} 1440 ${height * 0.6} L1440 ${height}Z`,
              `M0 ${height} L0 ${height * 0.65} Q80 ${height * 0.45} 160 ${height * 0.6} Q240 ${height * 0.75} 320 ${height * 0.5} Q400 ${height * 0.35} 480 ${height * 0.55} Q560 ${height * 0.7} 640 ${height * 0.45} Q720 ${height * 0.3} 800 ${height * 0.5} Q880 ${height * 0.65} 960 ${height * 0.55} Q1040 ${height * 0.4} 1120 ${height * 0.6} Q1200 ${height * 0.75} 1280 ${height * 0.5} Q1360 ${height * 0.35} 1440 ${height * 0.55} L1440 ${height}Z`,
              `M0 ${height} L0 ${height * 0.7} Q80 ${height * 0.5} 160 ${height * 0.65} Q240 ${height * 0.8} 320 ${height * 0.55} Q400 ${height * 0.4} 480 ${height * 0.6} Q560 ${height * 0.75} 640 ${height * 0.5} Q720 ${height * 0.35} 800 ${height * 0.55} Q880 ${height * 0.7} 960 ${height * 0.6} Q1040 ${height * 0.45} 1120 ${height * 0.65} Q1200 ${height * 0.8} 1280 ${height * 0.55} Q1360 ${height * 0.4} 1440 ${height * 0.6} L1440 ${height}Z`,
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
      </svg>

      {/* Ember particles */}
      {Array.from({ length: flameCount }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-2 rounded-full"
          style={{
            left: `${(i / flameCount) * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            backgroundColor: ["#fbbf24", "#ea580c", "#dc2626", "#f59e0b"][i % 4],
          }}
          animate={{
            y: [0, -40 - Math.random() * 60],
            x: [0, (Math.random() - 0.5) * 20],
            opacity: [0.9, 0],
            scale: [1, 0.1],
          }}
          transition={{
            duration: 1.2 + Math.random() * 0.8,
            repeat: Infinity,
            delay: i * 0.25,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default FlameBottom;
