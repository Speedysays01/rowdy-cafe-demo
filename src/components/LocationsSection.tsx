import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useIsMobile } from "@/hooks/use-mobile";
import vileParleImg from "@/assets/vile_parle.jpg";
import thaneImg from "@/assets/thane.jpg";
import viharImg from "@/assets/vihar.webp";
import naviMumbaiImg from "@/assets/navi_mumbai.jpg";

const locations = [
  { name: "Vile Parle", tagline: "Where it all began", address: "Vile Parle West, Mumbai", image: vileParleImg },
  { name: "Thane", tagline: "The suburban powerhouse", address: "Thane West, Mumbai", image: thaneImg },
  { name: "Vidya Vihar", tagline: "Bold & unstoppable", address: "Vidya Vihar, Mumbai", image: viharImg },
  { name: "Navi Mumbai", tagline: "The new frontier", address: "Navi Mumbai, Maharashtra", image: naviMumbaiImg },
];

type Location = (typeof locations)[number];

interface LocationCardProps {
  index: number;
  isMobile: boolean;
  location: Location;
  totalCards: number;
}

const LocationCard = ({ location, index, isMobile, totalCards }: LocationCardProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: isMobile ? ["start end", "end start"] : ["start 90%", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : isMobile ? ["-25%", "25%"] : ["-10%", "10%"],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : isMobile ? [28, -20] : [16, -8],
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    reduceMotion ? [1, 1, 1] : isMobile ? [0.92, 1, 0.96] : [0.98, 1, 1],
  );

  // All cards share the same top so they fully overlap like a deck
  const mobileTopOffset = "80px";
  const mobileTrackHeight = index === totalCards - 1 ? "h-[70vh]" : "h-[85vh]";

  return (
    <div ref={sectionRef} className={isMobile ? `relative ${mobileTrackHeight}` : "relative"}>
      <motion.article
        className={`group relative overflow-hidden rounded-[1.75rem] border border-border bg-card ${
          isMobile ? "sticky h-[68vh] min-h-[460px]" : "h-[420px]"
        }`}
        style={isMobile ? { top: mobileTopOffset, scale } : undefined}
      >
        <motion.img
          src={location.image}
          alt={`Rowdy Cafe ${location.name}`}
          className="absolute inset-x-0 top-[-12%] h-[124%] w-full object-cover will-change-transform"
          style={{ y: imageY }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/30" />

        <div className="absolute right-5 top-5 z-20 text-6xl font-headline font-extrabold leading-none text-primary/20 md:text-8xl">
          0{index + 1}
        </div>

        <motion.div style={{ y: contentY }} className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8">
          <span className="mb-2 block text-xs font-display uppercase tracking-[0.3em] text-accent">
            Mumbai
          </span>
          <h3 className="mb-1 text-3xl font-headline font-bold text-foreground md:text-4xl">
            {location.name}
          </h3>
          <p className="mb-1 text-sm italic text-foreground/75 md:text-base">
            {location.tagline}
          </p>
          <p className="text-xs text-muted-foreground md:text-sm">📍 {location.address}</p>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[inset_0_0_80px_hsl(var(--primary)/0.10)]" />
      </motion.article>
    </div>
  );
};

const LocationsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="section-padding relative overflow-hidden section-dark-b noise-bg">
      <div className="container relative z-10 mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="mb-10 text-center md:mb-14">
            <span className="mb-4 block text-xs font-display uppercase tracking-[0.3em] text-accent">
              📍 Our Locations
            </span>
            <h2 className="mb-3 text-center font-headline text-4xl md:text-7xl">
              <span className="brush-heading">4 Outlets</span> in Mumbai
            </h2>
            <p className="mx-auto max-w-xl text-center font-body text-base text-muted-foreground md:text-lg">
              Find your nearest Rowdy Cafe
            </p>
          </div>
        </AnimatedSection>

        <div className={isMobile ? "mx-auto max-w-sm" : "grid grid-cols-2 gap-6"}>
          {locations.map((location, index) => (
            <LocationCard
              key={location.name}
              index={index}
              isMobile={isMobile}
              location={location}
              totalCards={locations.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
