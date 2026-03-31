import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useIsMobile } from "@/hooks/use-mobile";
import vileParleImg from "@/assets/vile_parle.jpg";
import thaneImg from "@/assets/thane.jpg";
import viharImg from "@/assets/vihar.webp";
import naviMumbaiImg from "@/assets/navi_mumbai.jpg";

const locations = [
  {
    name: "Vile Parle",
    tagline: "Where it all began",
    address: "Vile Parle West, Mumbai",
    image: vileParleImg,
    objectPosition: "center 42%",
  },
  {
    name: "Thane",
    tagline: "The suburban powerhouse",
    address: "Thane West, Mumbai",
    image: thaneImg,
    objectPosition: "center 45%",
  },
  {
    name: "Vidya Vihar",
    tagline: "Bold & unstoppable",
    address: "Vidya Vihar, Mumbai",
    image: viharImg,
    objectPosition: "center 24%",
  },
  {
    name: "Navi Mumbai",
    tagline: "The new frontier",
    address: "Navi Mumbai, Maharashtra",
    image: naviMumbaiImg,
    objectPosition: "center 38%",
  },
] as const;

type Location = (typeof locations)[number];

/* ─── Desktop card with subtle image parallax ─── */

const DesktopLocationCard = ({ location, index }: { location: Location; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <div ref={cardRef}>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="group relative h-[420px] overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl"
      >
        <motion.img
          src={location.image}
          alt={`Rowdy Cafe ${location.name}`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ y: imageY, objectPosition: location.objectPosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
        <CardContent location={location} index={index} />
      </motion.article>
    </div>
  );
};

/* ─── Mobile sticky card (pure CSS sticky — no JS scroll tracking) ─── */

const MobileStickyCard = ({ location, index }: { location: Location; index: number }) => {
  return (
    /* Each card lives in a tall scroll-track div. As the user scrolls past
       this track, the sticky card stays pinned; the next track's card
       slides up on top of it naturally via higher z-index. */
    <div
      className="relative"
      style={{
        height: "100vh",
        zIndex: index + 1,
      }}
    >
      <article
        className="sticky overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_-8px_30px_rgba(0,0,0,0.45)]"
        style={{
          top: "5rem",          /* 80px from top */
          height: "70vh",
          minHeight: "420px",
        }}
      >
        {/* Background image — object-contain so nothing important is cropped */}
        <img
          src={location.image}
          alt={`Rowdy Cafe ${location.name}`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: location.objectPosition }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/90 to-transparent" />

        <CardContent location={location} index={index} />
      </article>
    </div>
  );
};

/* ─── Shared card content overlay ─── */

const CardContent = ({ location, index }: { location: Location; index: number }) => (
  <>
    <div className="absolute right-5 top-4 z-20 text-6xl font-headline font-extrabold leading-none text-primary/15 md:text-8xl">
      0{index + 1}
    </div>
    <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-8">
      <span className="mb-1.5 block text-xs font-display uppercase tracking-[0.3em] text-accent">
        Mumbai
      </span>
      <h3 className="mb-1 text-2xl font-headline font-bold text-foreground md:text-4xl">
        {location.name}
      </h3>
      <p className="mb-0.5 text-sm italic text-foreground/75">{location.tagline}</p>
      <p className="text-xs text-muted-foreground">📍 {location.address}</p>
    </div>
  </>
);

/* ─── Section ─── */

const LocationsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative section-dark-b noise-bg py-14 md:py-32 px-4 md:px-8">
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

        {isMobile ? (
          <div className="mx-auto max-w-[340px]">
            {locations.map((location, index) => (
              <MobileStickyCard key={location.name} location={location} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <DesktopLocationCard key={location.name} index={index} location={location} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationsSection;
