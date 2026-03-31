import { useRef } from "react";
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
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

interface DesktopCardProps {
  index: number;
  location: Location;
}

const DesktopLocationCard = ({ location, index }: DesktopCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["0%", "0%"] : ["-8%", "8%"],
  );

  return (
    <div ref={cardRef} className="relative">
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
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/30" />

        <div className="absolute right-5 top-5 z-20 text-6xl font-headline font-extrabold leading-none text-primary/20 md:text-8xl">
          0{index + 1}
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8">
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
        </div>
      </motion.article>
    </div>
  );
};

interface MobileDeckCardProps {
  index: number;
  location: Location;
  progress: MotionValue<number>;
  totalCards: number;
}

const MobileDeckCard = ({ location, index, progress, totalCards }: MobileDeckCardProps) => {
  const reduceMotion = useReducedMotion();
  const segment = 1 / totalCards;
  const start = index * segment;
  const reveal = Math.min(1, start + segment * 0.34);
  const end = Math.min(1, start + segment);

  const cardY = useTransform(
    progress,
    index === 0 ? [0, 1] : [start, reveal],
    index === 0 ? ["0%", "0%"] : ["110%", "0%"],
  );

  const imageY = useTransform(
    progress,
    [start, end],
    reduceMotion ? ["0%", "0%"] : ["-8%", "10%"],
  );

  const contentY = useTransform(
    progress,
    [start, end],
    reduceMotion ? [0, 0] : [12, -10],
  );

  const scale = useTransform(
    progress,
    index === 0 ? [0, 1] : [start, reveal],
    reduceMotion || index === 0 ? [1, 1] : [0.985, 1],
  );

  return (
    <motion.article
      className="absolute inset-0 overflow-hidden rounded-[1.85rem] border border-border bg-card shadow-2xl"
      style={{ y: cardY, scale, zIndex: index + 1 }}
    >
      <motion.img
        src={location.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-xl"
        style={{ objectPosition: location.objectPosition }}
      />

      <motion.img
        src={location.image}
        alt={`Rowdy Cafe ${location.name}`}
        className="absolute inset-0 h-full w-full object-contain px-2 pt-2 pb-20"
        style={{ y: imageY, objectPosition: location.objectPosition }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/85 to-transparent" />

      <div className="absolute right-5 top-5 z-20 text-6xl font-headline font-extrabold leading-none text-primary/20">
        0{index + 1}
      </div>

      <motion.div style={{ y: contentY }} className="absolute inset-x-0 bottom-0 z-20 p-6">
        <span className="mb-2 block text-xs font-display uppercase tracking-[0.3em] text-accent">
          Mumbai
        </span>
        <h3 className="mb-1 text-3xl font-headline font-bold text-foreground">
          {location.name}
        </h3>
        <p className="mb-1 text-sm italic text-foreground/75">{location.tagline}</p>
        <p className="text-xs text-muted-foreground">📍 {location.address}</p>
      </motion.div>
    </motion.article>
  );
};

const MobileLocationsDeck = () => {
  const deckRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: deckRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={deckRef}
      className="relative mx-auto max-w-[340px]"
      style={{ height: `${locations.length * 88}svh` }}
    >
      <div className="sticky top-20 h-[76svh] min-h-[520px] overflow-hidden">
        <div className="relative h-full w-full">
          {locations.map((location, index) => (
            <MobileDeckCard
              key={location.name}
              index={index}
              location={location}
              progress={scrollYProgress}
              totalCards={locations.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const LocationsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="section-padding relative overflow-visible section-dark-b noise-bg">
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
          <MobileLocationsDeck />
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
