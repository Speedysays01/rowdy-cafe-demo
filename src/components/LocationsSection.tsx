import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import vileParleImg from "@/assets/vile_parle.jpg";
import thaneImg from "@/assets/thane.jpg";
import viharImg from "@/assets/vihar.webp";
import naviMumbaiImg from "@/assets/navi_mumbai.jpg";

const locations = [
  { name: "Vile Parle", tagline: "Where it all began", address: "Vile Parle West, Mumbai", image: vileParleImg },
  { name: "Thane", tagline: "The suburban powerhouse", address: "Thane West, Mumbai", image: thaneImg },
  { name: "Virar", tagline: "Bold & unstoppable", address: "Virar, Mumbai", image: viharImg },
  { name: "Navi Mumbai", tagline: "The new frontier", address: "Navi Mumbai, Maharashtra", image: naviMumbaiImg },
];

const ParallaxCard = ({
  location,
  index,
}: {
  location: (typeof locations)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.92, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.6]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale, opacity }}
      className="sticky top-24 mb-8 md:mb-12"
    >
      <div
        className="relative rounded-2xl overflow-hidden border border-border group cursor-pointer"
        style={{ height: "clamp(320px, 55vh, 500px)" }}
      >
        {/* Placeholder bg — will be replaced with images */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-secondary to-card"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(0 0% ${8 + index * 3}%), hsl(48 30% ${12 + index * 4}%))`,
          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />

        {/* Location number */}
        <div className="absolute top-5 right-6 z-20">
          <span
            className="text-7xl md:text-9xl font-headline font-extrabold leading-none"
            style={{ color: "hsl(48 96% 53% / 0.12)" }}
          >
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
          <span className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-2 block">
            Mumbai
          </span>
          <h3 className="text-3xl md:text-5xl font-headline font-bold text-foreground mb-2">
            {location.name}
          </h3>
          <p className="text-foreground/70 font-body text-sm md:text-base mb-1 italic">
            {location.tagline}
          </p>
          <p className="text-muted-foreground font-body text-xs md:text-sm">
            📍 {location.address}
          </p>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: "inset 0 0 80px hsl(48 96% 53% / 0.08)" }}
        />
      </div>
    </motion.div>
  );
};

const LocationsSection = () => {
  return (
    <section className="section-padding relative noise-bg section-dark-b overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-4 block">
              📍 Our Locations
            </span>
            <h2 className="text-4xl md:text-7xl font-headline text-center mb-3">
              <span className="brush-heading">4 Outlets</span> in Mumbai
            </h2>
            <p className="text-muted-foreground text-center max-w-xl mx-auto font-body text-base md:text-lg">
              Find your nearest Rowdy Cafe
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {locations.map((location, index) => (
            <ParallaxCard key={location.name} location={location} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
