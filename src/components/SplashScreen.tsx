import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import rowdyMan from "@/assets/rowdy-man.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "explode" | "done">("logo");

  useEffect(() => {
    // Phase 1: Show logo on black (3.5s)
    const t1 = setTimeout(() => setPhase("explode"), 3500);
    // Phase 2: Explosion + yellow flash, then done
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 5500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  const exploding = phase === "explode";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden">
      {/* Black background layer */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: "hsl(0 0% 4%)" }}
        animate={{ opacity: exploding ? 0 : 1 }}
        transition={{ duration: 0.6, delay: exploding ? 0.3 : 0 }}
      />

      {/* Yellow explosion circle */}
      <AnimatePresence>
        {exploding && (
          <motion.div
            className="absolute rounded-full"
            style={{ backgroundColor: "hsl(48 96% 53%)" }}
            initial={{ width: 80, height: 80, opacity: 1 }}
            animate={{ width: "300vmax", height: "300vmax", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Rowdy man logo */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={
          exploding
            ? { scale: [1, 1.8, 0], opacity: [1, 0.6, 0] }
            : { scale: [0, 1.4, 1], opacity: [0, 1, 1] }
        }
        transition={
          exploding
            ? { duration: 0.6, ease: "easeIn" }
            : { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
      >
        <img
          src={rowdyMan}
          alt="Rowdy Cafe"
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full"
          style={{
            filter: "drop-shadow(0 0 40px hsl(48 96% 53% / 0.7))",
          }}
        />
      </motion.div>

      {/* Shockwave ring */}
      {exploding && (
        <motion.div
          className="absolute rounded-full border-4"
          style={{ borderColor: "hsl(48 96% 53% / 0.5)" }}
          initial={{ width: 100, height: 100, opacity: 1 }}
          animate={{ width: "250vmax", height: "250vmax", opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      )}

      {/* Final yellow flash that fades out to reveal the site */}
      {exploding && (
        <motion.div
          className="absolute inset-0 z-20"
          style={{ backgroundColor: "hsl(48 96% 53%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.4, delay: 0.3, times: [0, 0.3, 1], ease: "easeInOut" }}
        />
      )}
    </div>
  );
};

export default SplashScreen;
