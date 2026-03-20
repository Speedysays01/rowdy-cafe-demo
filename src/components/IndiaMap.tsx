import { motion } from "framer-motion";
import indiaMap from "@/assets/india-map.png";

const IndiaMap = () => {
  return (
    <div className="relative max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative"
      >
        {/* Glow behind map */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(48 96% 53% / 0.12) 0%, transparent 70%)" }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Map image */}
        <img
          src={indiaMap}
          alt="India Map - Rowdy Cafe Presence across 10 states"
          className="w-full h-auto relative z-10"
        />

        {/* Subtle pulse overlay */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(48 96% 53% / 0.06) 0%, transparent 60%)" }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.div>
    </div>
  );
};

export default IndiaMap;
