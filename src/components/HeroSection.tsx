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
  { icon: MapPin, text: "100+ Locations Throughout India" },
];

const HeroContent = () => {
  const { displayed, done } = useTypewriter("20 DAYS", 6100, 160);

  return (
    <motion.section
      className="relative min-h-screen flex flex-col overflow-hidden"
      animate={{ x: [0, 0, -10, 8, -5, 3, -1, 0], y: [0, 0, 5, -4, 3, -1, 0, 0] }}
      transition={{ duration: 0.7, delay: 5.6, ease: "easeOut", times: [0, 0.05, 0.15, 0.3, 0.5, 0.7, 0.85, 1] }}
    >
      {/* Video background — optimized + poster for instant first paint */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
        // @ts-expect-error fetchpriority is valid HTML
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg-opt.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Main content */}
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
              alt="Rowdy Cafe"
              className="h-24 sm:h-28 md:h-36 mx-auto object-contain"
              initial={{ filter: "drop-shadow(0 0 0px transparent)" }}
              animate={{ filter: "drop-shadow(0 0 40px hsl(48 96% 53% / 0.5))" }}
              transition={{ duration: 0.7, delay: 6.5 }}
            />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-headline font-bold leading-[1.1] mb-3 md:mb-4"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 5.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">Start Your Business in</span>
            <span className="text-gradient-fire block text-4xl sm:text-6xl md:text-8xl relative">
              {displayed}
            </span>
            <span className="block text-xl sm:text-3xl md:text-5xl mt-2 font-medium text-foreground/80">
              No Chef. No Hassle. <span className="text-gradient">60% Margins</span>.
            </span>
          </motion.h1>




          {/* CTA Buttons */}
          <motion.div
            className="flex flex-row gap-2 sm:gap-4 justify-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 6.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0 0 0px hsl(48 96% 53% / 0)", "0 0 30px hsl(48 96% 53% / 0.3)", "0 0 0px hsl(48 96% 53% / 0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="rounded-full"
            >
              <Button variant="hero" size="default" className="text-xs px-4 py-3 whitespace-nowrap" asChild>
                <a href="https://cal.com/rowdycafe/15min" target="_blank" rel="noopener noreferrer">🔥 Book Meeting</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="heroOutline" size="default" className="text-xs px-4 py-3 whitespace-nowrap" asChild>
                <a href="#menu">Explore Menu →</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature badges — infinite scroll marquee (full-bleed) */}
          <motion.div
            className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6.5, duration: 0.6 }}
          >
            <motion.div
              className="flex gap-10 md:gap-16 w-max items-center py-2"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { duration: 35, repeat: Infinity, ease: "linear" } }}
            >
              {[...features, ...features].map((f, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center gap-3 md:gap-4 group cursor-default"
                >
                  <f.icon className="w-7 h-7 md:w-9 md:h-9 text-primary group-hover:text-accent transition-colors" />
                  <span className="text-2xl md:text-4xl lg:text-5xl font-funky tracking-tight text-foreground whitespace-nowrap uppercase">
                    {f.text}
                  </span>
                  {i < [...features, ...features].length - 1 && (
                    <span className="ml-6 md:ml-12 text-primary/50 text-2xl md:text-3xl">✦</span>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="relative z-30 flex flex-col items-center gap-0.5 pb-3 md:pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7.3 }}
      >
        <span className="text-xs font-display tracking-widest text-primary/60">Scroll</span>
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
