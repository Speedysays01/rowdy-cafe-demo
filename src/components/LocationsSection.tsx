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

const LocationCard = ({
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

  // Parallax on the background image only
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="relative rounded-2xl overflow-hidden border border-border group cursor-pointer"
        style={{ height: "clamp(280px, 50vh, 420px)" }}
      >
        {/* Parallax image */}
        <motion.img
          src={location.image}
          alt={`Rowdy Cafe ${location.name}`}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ y: imgY }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />

        {/* Location number */}
        <div className="absolute top-4 right-5 z-20">
          <span
            className="text-6xl md:text-8xl font-headline font-extrabold leading-none"
            style={{ color: "hsl(48 96% 53% / 0.15)" }}
          >
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-20">
          <span className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-1.5 block">
            Mumbai
          </span>
          <h3 className="text-2xl md:text-4xl font-headline font-bold text-foreground mb-1">
            {location.name}
          </h3>
          <p className="text-foreground/70 font-body text-sm mb-0.5 italic">
            {location.tagline}
          </p>
          <p className="text-muted-foreground font-body text-xs">
            📍 {location.address}
          </p>
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: "inset 0 0 80px hsl(48 96% 53% / 0.1)" }}
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
          <div className="text-center mb-10 md:mb-14">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {locations.map((location, index) => (
            <LocationCard key={location.name} location={location} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
