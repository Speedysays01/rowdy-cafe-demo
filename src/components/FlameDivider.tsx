import { motion } from "framer-motion";

/** Fire divider between sections — animated flames at section borders */
const FlameDivider = ({ inverted = false }: { inverted?: boolean }) => (
  <div className={`relative w-full h-20 overflow-hidden ${inverted ? "rotate-180" : ""}`}>
    <svg width="100%" height="80" viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0">
      <defs>
        <linearGradient id="fd-grad-outer" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#b91c1c" stopOpacity="0.5" />
          <stop offset="35%" stopColor="#ea580c" stopOpacity="0.4" />
          <stop offset="65%" stopColor="#f59e0b" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fd-grad-inner" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      <motion.path
        fill="url(#fd-grad-outer)"
        animate={{
          d: [
            "M0 80 L0 50 Q40 20 80 40 Q120 60 160 30 Q200 5 240 35 Q280 55 320 25 Q360 0 400 30 Q440 55 480 35 Q520 10 560 40 Q600 60 640 30 Q680 5 720 35 Q760 55 800 25 Q840 0 880 30 Q920 55 960 35 Q1000 10 1040 40 Q1080 60 1120 30 Q1160 5 1200 35 Q1240 55 1280 25 Q1320 0 1360 30 Q1400 50 1440 40 L1440 80Z",
            "M0 80 L0 45 Q40 15 80 35 Q120 55 160 25 Q200 0 240 30 Q280 50 320 20 Q360 5 400 35 Q440 60 480 30 Q520 5 560 35 Q600 55 640 25 Q680 0 720 30 Q760 50 800 20 Q840 5 880 35 Q920 60 960 30 Q1000 5 1040 35 Q1080 55 1120 25 Q1160 0 1200 30 Q1240 50 1280 20 Q1320 5 1360 35 Q1400 55 1440 35 L1440 80Z",
            "M0 80 L0 50 Q40 20 80 40 Q120 60 160 30 Q200 5 240 35 Q280 55 320 25 Q360 0 400 30 Q440 55 480 35 Q520 10 560 40 Q600 60 640 30 Q680 5 720 35 Q760 55 800 25 Q840 0 880 30 Q920 55 960 35 Q1000 10 1040 40 Q1080 60 1120 30 Q1160 5 1200 35 Q1240 55 1280 25 Q1320 0 1360 30 Q1400 50 1440 40 L1440 80Z",
          ],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.path
        fill="url(#fd-grad-inner)"
        animate={{
          d: [
            "M0 80 L0 60 Q60 40 120 55 Q180 70 240 50 Q300 30 360 50 Q420 65 480 50 Q540 35 600 55 Q660 70 720 50 Q780 30 840 50 Q900 65 960 50 Q1020 35 1080 55 Q1140 70 1200 50 Q1260 30 1320 50 Q1380 65 1440 55 L1440 80Z",
            "M0 80 L0 55 Q60 35 120 50 Q180 65 240 45 Q300 25 360 45 Q420 60 480 45 Q540 30 600 50 Q660 65 720 45 Q780 25 840 45 Q900 60 960 45 Q1020 30 1080 50 Q1140 65 1200 45 Q1260 25 1320 45 Q1380 60 1440 50 L1440 80Z",
            "M0 80 L0 60 Q60 40 120 55 Q180 70 240 50 Q300 30 360 50 Q420 65 480 50 Q540 35 600 55 Q660 70 720 50 Q780 30 840 50 Q900 65 960 50 Q1020 35 1080 55 Q1140 70 1200 50 Q1260 30 1320 50 Q1380 65 1440 55 L1440 80Z",
          ],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
    </svg>

    {/* Ember sparks */}
    <div className="absolute inset-0">
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${(i / 14) * 100}%`,
            width: `${2 + Math.random() * 3}px`,
            height: `${2 + Math.random() * 3}px`,
            backgroundColor: ["#fbbf24", "#ea580c", "#dc2626", "#f59e0b"][i % 4],
          }}
          animate={{
            y: [0, -30 - Math.random() * 50],
            x: [0, (Math.random() - 0.5) * 15],
            opacity: [0.8, 0],
            scale: [1, 0.15],
          }}
          transition={{
            duration: 1 + Math.random() * 0.8,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  </div>
);

export default FlameDivider;
