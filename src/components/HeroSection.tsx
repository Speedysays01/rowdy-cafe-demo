import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChefHat, Factory, UtensilsCrossed, Star, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import rowdyMan from "@/assets/rowdy-man.png";

const useTypewriter = (text: string, delay: number, speed = 140) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) { clearInterval(interval); setDone(true); }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);
  return { displayed, done };
};

const features = [
  { icon: ChefHat, text: "No Chef / Cook Required" },
  { icon: Factory, text: "Direct Supply From Factory" },
  { icon: UtensilsCrossed, text: "100+ Trendy Menu Products" },
  { icon: Star, text: "4.3 Google Rating Across Outlets" },
];

const HeroContent = () => {
  const { displayed, done } = useTypewriter("20 DAYS", 6100, 160);

  return (
    <motion.section
      className="relative min-h-screen flex flex-col overflow-hidden"
      animate={{ x: [0, 0, -10, 8, -5, 3, -1, 0], y: [0, 0, 5, -4, 3, -1, 0, 0] }}
      transition={{ duration: 0.7, delay: 5.6, ease: "easeOut", times: [0, 0.05, 0.15, 0.3, 0.5, 0.7, 0.85, 1] }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/fire.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Main content — takes all available space, centered */}
      <div className="flex-1 flex items-center justify-center relative z-20 px-4 pt-16">
        <div className="max-w-5xl mx-auto text-center w-full">
          {/* Rowdy Man — punch entry */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={{
              opacity: [0, 1, 1, 1, 1],
              scale: [0, 4.5, 1.3, 0.85, 1],
              rotate: [-30, 12, -4, 0, 0],
            }}
            transition={{
              duration: 1.4,
              delay: 5.1,
              times: [0, 0.25, 0.5, 0.72, 1],
              ease: [0.16, 1.3, 0.3, 1],
            }}
            className="mb-4 md:mb-6"
          >
            <motion.img
              src={rowdyMan}
              alt="Rowdy Momo Cafe"
              className="h-24 sm:h-28 md:h-36 mx-auto rounded-full"
              initial={{ filter: "drop-shadow(0 0 0px transparent)" }}
              animate={{ filter: "drop-shadow(0 0 40px hsl(48 96% 53% / 0.5))" }}
              transition={{ duration: 0.7, delay: 6.5 }}
            />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-2xl sm:text-4xl md:text-7xl font-headline leading-[0.9] mb-2 md:mb-3"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 5.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">Start Business in</span>
            <span className="text-gradient-fire block text-3xl sm:text-5xl md:text-8xl relative animate-pulse-glow">
              {displayed}
            </span>
            <span className="block text-lg sm:text-3xl md:text-6xl mt-1">
              No Chef. No Hassle.
            </span>
            <span className="block text-lg sm:text-3xl md:text-6xl">
              <span className="text-gradient">60% Margins</span>.
            </span>
          </motion.h1>

          <motion.p
            className="text-xs sm:text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto mb-3 md:mb-5 font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 5.8 }}
          >
            Join India's fastest growing factory-to-store cafe franchise partnership.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-4 md:mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 6.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0 0 0px hsl(48 96% 53% / 0)", "0 0 30px hsl(48 96% 53% / 0.4)", "0 0 0px hsl(48 96% 53% / 0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-none"
            >
              <Button variant="hero" size="chunky" className="w-full sm:w-auto text-xs sm:text-sm md:text-base whitespace-nowrap" asChild>
                <a href="#booking">🔥 Book Franchise Meeting</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Button variant="heroOutline" size="chunky" className="w-full sm:w-auto text-sm md:text-base" asChild>
                <a href="#menu">Explore Menu →</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18, delayChildren: 6.5 } },
            }}
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="rowdy-card p-2.5 md:p-4 flex flex-col items-center gap-1.5 md:gap-2 group cursor-default bg-background/60"
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? 1 : -1, boxShadow: "0 0 25px hsl(48 96% 53% / 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <f.icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-accent transition-colors" />
                <span className="text-[9px] md:text-xs font-display uppercase tracking-wide text-foreground/80 text-center leading-tight">{f.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — fixed at bottom, won't overlap content */}
      <motion.div
        className="relative z-30 flex flex-col items-center gap-0.5 pb-3 md:pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7.3 }}
      >
        <span className="text-[10px] font-display uppercase tracking-widest text-primary/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary drop-shadow-[0_0_8px_hsl(48_96%_53%/0.6)]" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroContent;
