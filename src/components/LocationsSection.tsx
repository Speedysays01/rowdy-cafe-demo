import { useRef, useState } from "react";
import {
  motion,
  type PanInfo,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import { AspectRatio } from "./ui/aspect-ratio";
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
    mobileObjectPosition: "center 38%",
    link: "https://share.google/aWfdWFQUPbYKAn1Jz",
  },
  {
    name: "Thane",
    tagline: "The suburban powerhouse",
    address: "Thane West, Mumbai",
    image: thaneImg,
    objectPosition: "center 45%",
    mobileObjectPosition: "center 42%",
    link: "https://share.google/dofDisuqhlExLC8M5",
  },
  {
    name: "Vidya Vihar",
    tagline: "Bold & unstoppable",
    address: "Vidya Vihar, Mumbai",
    image: viharImg,
    objectPosition: "center 24%",
    mobileObjectPosition: "center 20%",
    link: "https://share.google/nZ0mpAdxrHeV8V5qw",
  },
  {
    name: "Navi Mumbai",
    tagline: "The new frontier",
    address: "Navi Mumbai, Maharashtra",
    image: naviMumbaiImg,
    objectPosition: "center 38%",
    mobileObjectPosition: "center 34%",
    link: "https://share.google/FB0wyoX1L679Rhvr1",
  },
] as const;

type Location = (typeof locations)[number];

const wrapIndex = (value: number) => (value + locations.length) % locations.length;

const LocationCardDetails = ({
  location,
  index,
  compact = false,
}: {
  compact?: boolean;
  index: number;
  location: Location;
}) => (
  <>
    <div className="absolute right-5 top-4 z-20 text-6xl font-headline font-extrabold leading-none text-primary/15 md:text-8xl">
      0{index + 1}
    </div>

    <div className={`absolute inset-x-0 bottom-0 z-20 ${compact ? "p-5" : "p-6 md:p-8"}`}>
      <span className="mb-1.5 block text-xs font-display uppercase tracking-[0.3em] text-accent">
        Mumbai
      </span>
      <h3 className={`mb-1 font-headline font-bold text-foreground ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>
        {location.name}
      </h3>
      <p className="mb-0.5 text-sm italic text-foreground/75 md:text-base">{location.tagline}</p>
      <a
        href={location.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-xs text-muted-foreground underline underline-offset-2 transition-colors hover:text-accent md:text-sm"
      >
        📍 {location.address}
      </a>
    </div>
  </>
);

const DesktopLocationCard = ({ location, index }: { index: number; location: Location }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 90%", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-8%", "8%"]);

  return (
    <div ref={cardRef}>
      <a
        href={location.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
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
        <LocationCardDetails index={index} location={location} />
        </motion.article>
      </a>
    </div>
  );
};

const MobileLocationsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const changeCard = (direction: number) => {
    setActiveIndex((current) => wrapIndex(current + direction));
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeForce = info.offset.x + info.velocity.x * 0.16;

    if (swipeForce < -90) {
      changeCard(1);
    } else if (swipeForce > 90) {
      changeCard(-1);
    }
  };

  return (
    <div className="md:hidden">
      <div className="relative mx-auto max-w-[344px]">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0.35, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-6 top-10 h-[24rem] rounded-full bg-primary/15 blur-3xl"
        />

        <div className="relative mb-5">
          <AspectRatio ratio={5 / 4} className="relative">
            {locations.map((location, index) => {
              const stackIndex = wrapIndex(index - activeIndex);
              const isActive = stackIndex === 0;
              const isVisible = stackIndex < 3;

              return (
                <motion.article
                  key={location.name}
                  drag={isActive && !reduceMotion ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.14}
                  onDragEnd={isActive ? handleDragEnd : undefined}
                  initial={false}
                  animate={{
                    opacity: isVisible ? 1 - stackIndex * 0.18 : 0,
                    rotate: stackIndex === 1 ? -3 : stackIndex === 2 ? 3 : 0,
                    scale: 1 - stackIndex * 0.035,
                    x: 0,
                    y: stackIndex * 6,
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  style={{ zIndex: locations.length - stackIndex }}
                  className={`absolute inset-0 overflow-hidden rounded-[1.85rem] border border-border bg-card shadow-2xl ${
                    isActive ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
                  }`}
                >
                  <img
                    src={location.image}
                    alt={`Rowdy Cafe ${location.name}`}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: location.mobileObjectPosition }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/90 to-transparent" />

                  <LocationCardDetails compact index={index} location={location} />
                </motion.article>
              );
            })}
          </AspectRatio>
        </div>

        <div className="mb-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => changeCard(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            aria-label="Previous location"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <div className="flex flex-1 items-center justify-center gap-2">
            {locations.map((location, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={location.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive ? "w-10 bg-primary" : "w-2 bg-muted"
                  }`}
                  aria-label={`Show ${location.name}`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => changeCard(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            aria-label="Next location"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

const LocationsSection = () => {
  return (
    <section className="relative section-dark-b noise-bg grid-bg px-4 py-8 md:px-8 md:py-14">
      
      <div className="container relative z-10 mx-auto max-w-5xl">
        <AnimatedSection>
          <div className="mb-6 text-center md:mb-10">
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

        <MobileLocationsShowcase />

        <div className="hidden grid-cols-2 gap-6 md:grid">
          {locations.map((location, index) => (
            <DesktopLocationCard key={location.name} index={index} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
