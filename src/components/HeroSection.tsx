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
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4?v=2" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/75" />

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
              alt="Rowdy Momo Cafe"
              className="h-24 sm:h-28 md:h-36 mx-auto rounded-full"
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

          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 md:mb-6 font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 5.8 }}
          >
            Join India's fastest growing factory-to-store cafe franchise partnership.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 md:mb-8"
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
              <Button variant="hero" size="chunky" className="w-full sm:w-auto" asChild>
                <a href="#booking">🔥 Book Franchise Meeting</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="heroOutline" size="chunky" className="w-full sm:w-auto" asChild>
                <a href="#menu">Explore Menu →</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature badges — infinite scroll marquee */}
          <motion.div
            className="relative w-full overflow-hidden mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6.5, duration: 0.6 }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-background/80 to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-background/80 to-transparent" />

            <motion.div
              className="flex gap-6 md:gap-10 w-max items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { duration: 35, repeat: Infinity, ease: "linear" } }}
            >
              {[...features, ...features].map((f, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center gap-2 group cursor-default"
                >
                  <f.icon className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-accent transition-colors" />
                  <span className="text-xs md:text-sm font-display tracking-wide text-foreground/80 whitespace-nowrap font-medium">
                    {f.text}
                  </span>
                  {i < [...features, ...features].length - 1 && (
                    <span className="ml-4 md:ml-8 text-primary/40 text-lg">✦</span>
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
