import { motion } from "framer-motion";

/** Large animated flame SVG cluster — multiple flames with staggered animation */
const FlameEdge = ({ side = "left", className = "" }: { side?: "left" | "right"; className?: string }) => (
  <div
    className={`absolute ${side === "left" ? "left-0" : "right-0"} bottom-0 pointer-events-none z-0 ${className}`}
    style={{ transform: side === "right" ? "scaleX(-1)" : undefined }}
  >
    {/* Main large flame */}
    <motion.svg
      width="160"
      height="420"
      viewBox="0 0 160 420"
      fill="none"
      className="origin-bottom"
    >
      <defs>
        <linearGradient id={`flame-main-${side}`} x1="0.5" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopColor="#b91c1c" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#dc2626" stopOpacity="0.7" />
          <stop offset="55%" stopColor="#ea580c" stopOpacity="0.6" />
          <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.5" />
          <stop offset="90%" stopColor="#fbbf24" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`flame-inner-${side}`} x1="0.5" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#fde68a" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#fef3c7" stopOpacity="0" />
        </linearGradient>
        <filter id={`flame-blur-${side}`}>
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Outer flame */}
      <motion.path
        fill={`url(#flame-main-${side})`}
        filter={`url(#flame-blur-${side})`}
        animate={{
          d: [
            "M80 420 C80 420 5 320 15 240 C22 185 50 200 40 140 C32 90 50 50 65 20 C72 5 80 0 80 0 C80 0 88 5 95 20 C110 50 128 90 120 140 C110 200 138 185 145 240 C155 320 80 420 80 420Z",
            "M80 420 C80 420 10 325 20 245 C28 188 45 205 42 145 C38 92 55 55 68 22 C74 7 80 2 80 2 C80 2 86 7 92 22 C105 55 122 92 118 145 C115 205 132 188 140 245 C150 325 80 420 80 420Z",
            "M80 420 C80 420 2 318 18 238 C25 182 52 198 38 138 C30 88 48 48 63 18 C70 3 80 0 80 0 C80 0 90 3 97 18 C112 48 130 88 122 138 C108 198 135 182 142 238 C158 318 80 420 80 420Z",
            "M80 420 C80 420 5 320 15 240 C22 185 50 200 40 140 C32 90 50 50 65 20 C72 5 80 0 80 0 C80 0 88 5 95 20 C110 50 128 90 120 140 C110 200 138 185 145 240 C155 320 80 420 80 420Z",
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Inner bright core */}
      <motion.path
        fill={`url(#flame-inner-${side})`}
        animate={{
          d: [
            "M80 420 C80 420 35 340 42 280 C48 240 62 250 58 200 C54 160 65 120 74 80 C78 60 80 50 80 50 C80 50 82 60 86 80 C95 120 106 160 102 200 C98 250 112 240 118 280 C125 340 80 420 80 420Z",
            "M80 420 C80 420 38 342 44 282 C50 242 60 252 56 202 C52 162 63 122 72 82 C76 62 80 52 80 52 C80 52 84 62 88 82 C97 122 108 162 104 202 C100 252 110 242 116 282 C122 342 80 420 80 420Z",
            "M80 420 C80 420 33 338 40 278 C46 238 64 248 60 198 C56 158 67 118 76 78 C80 58 80 48 80 48 C80 48 80 58 84 78 C93 118 104 158 100 198 C96 248 114 238 120 278 C127 338 80 420 80 420Z",
            "M80 420 C80 420 35 340 42 280 C48 240 62 250 58 200 C54 160 65 120 74 80 C78 60 80 50 80 50 C80 50 82 60 86 80 C95 120 106 160 102 200 C98 250 112 240 118 280 C125 340 80 420 80 420Z",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
    </motion.svg>

    {/* Secondary smaller flame offset */}
    <motion.svg
      width="90"
      height="250"
      viewBox="0 0 90 250"
      fill="none"
      className="absolute bottom-0 origin-bottom"
      style={{ left: side === "left" ? "60px" : undefined, right: side === "right" ? "60px" : undefined }}
    >
      <motion.path
        fill={`url(#flame-main-${side})`}
        animate={{
          d: [
            "M45 250 C45 250 5 190 12 140 C17 105 35 115 30 80 C26 50 38 25 45 5 C45 5 52 25 60 50 C64 80 73 105 78 140 C85 190 45 250 45 250Z",
            "M45 250 C45 250 8 192 14 142 C19 107 33 117 28 82 C24 52 36 27 45 7 C45 7 54 27 62 52 C66 82 71 107 76 142 C82 192 45 250 45 250Z",
            "M45 250 C45 250 5 190 12 140 C17 105 35 115 30 80 C26 50 38 25 45 5 C45 5 52 25 60 50 C64 80 73 105 78 140 C85 190 45 250 45 250Z",
          ],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </motion.svg>

    {/* Tiny accent flame */}
    <motion.svg
      width="50"
      height="150"
      viewBox="0 0 50 150"
      fill="none"
      className="absolute bottom-0 origin-bottom"
      style={{ left: side === "left" ? "120px" : undefined, right: side === "right" ? "120px" : undefined }}
    >
      <motion.path
        fill={`url(#flame-inner-${side})`}
        animate={{
          d: [
            "M25 150 C25 150 5 110 10 80 C13 60 22 65 20 45 C18 30 25 10 25 0 C25 10 32 30 30 45 C28 65 37 60 40 80 C45 110 25 150 25 150Z",
            "M25 150 C25 150 7 112 12 82 C15 62 20 67 18 47 C16 32 25 12 25 2 C25 12 34 32 32 47 C30 67 35 62 38 82 C43 112 25 150 25 150Z",
            "M25 150 C25 150 5 110 10 80 C13 60 22 65 20 45 C18 30 25 10 25 0 C25 10 32 30 30 45 C28 65 37 60 40 80 C45 110 25 150 25 150Z",
          ],
        }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </motion.svg>

    {/* Ember / spark particles rising */}
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute bottom-10 rounded-full"
        style={{
          left: `${20 + i * 20}px`,
          width: `${2 + Math.random() * 3}px`,
          height: `${2 + Math.random() * 3}px`,
          backgroundColor: i % 2 === 0 ? "#fbbf24" : "#ea580c",
        }}
        animate={{
          y: [0, -60 - Math.random() * 80],
          x: [0, (Math.random() - 0.5) * 30],
          opacity: [1, 0],
          scale: [1, 0.2],
        }}
        transition={{
          duration: 1.5 + Math.random(),
          repeat: Infinity,
          delay: i * 0.4,
          ease: "easeOut",
        }}
      />
    ))}
  </div>
);

export default FlameEdge;
