import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AnimatedSection from "./AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Menu images ---
import steamMomos from "@/assets/menu/steam-momos.png";
import tandooriMomos from "@/assets/menu/tandoori-momos.png";
import saucyMomos from "@/assets/menu/saucy-momos.png";
import kurkureMomos from "@/assets/menu/kurkure-momos.png";
import friedMomos from "@/assets/menu/fried-momos.png";
import friedMomos2 from "@/assets/menu/fried-momos-2.png";
import jholMomos from "@/assets/menu/jhol-momos.png";
import ramen from "@/assets/menu/ramen.png";
import vegRamen from "@/assets/menu/veg-ramen.png";
import burger from "@/assets/menu/burger.png";
import pasta from "@/assets/menu/pasta.png";
import cornDog from "@/assets/menu/corn-dog.png";
import frenchFries from "@/assets/menu/french-fries.png";
import chilliCheesyFries from "@/assets/menu/chilli-cheesy-fries.jpg";
import periPeriFries from "@/assets/menu/peri-peri-fries.jpg";
import saltedFries from "@/assets/menu/salted-fries.jpg";
import cheesyFrenchFries from "@/assets/menu/cheesy-french-fries.jpg";
import messyWings from "@/assets/menu/messy-wings.png";
import chickenBites from "@/assets/menu/chicken-bites.png";
import sizzler from "@/assets/menu/sizzler.png";
import pavBhaji from "@/assets/menu/pav-bhaji.png";
import biryani from "@/assets/menu/biryani.png";
import waffle from "@/assets/menu/waffle.png";
import sizzlingBrownie from "@/assets/menu/sizzling-brownie.png";
import milkshake from "@/assets/menu/milkshake.png";
import kitKatShake from "@/assets/menu/kit-kat-shake.png";
import desertShake from "@/assets/menu/desert-shake.png";
import mocktail from "@/assets/menu/mocktail.png";
import mojito from "@/assets/menu/mojito.png";
import iceTea from "@/assets/menu/ice-tea.png";
import coldCoffee from "@/assets/menu/cold-coffee.png";
import bobaTea from "@/assets/menu/boba-tea.png";
import bubbleTea from "@/assets/menu/bubble-tea.png";

// --- Featured items for top carousel ---
const featured = [
  { name: "Tandoori Momos", tag: "Best Seller", image: tandooriMomos },
  { name: "Korean Corn Dog", tag: "Trending", image: cornDog },
  { name: "Messy Wings", tag: "Spicy", image: messyWings },
  { name: "Burger", tag: "Fan Favourite", image: burger },
  { name: "Sizzling Brownie", tag: "Sweet", image: sizzlingBrownie },
  { name: "Bubble Tea", tag: "Refreshing", image: bubbleTea },
  { name: "Biryani", tag: "Loaded", image: biryani },
  { name: "Kit Kat Shake", tag: "Indulgent", image: kitKatShake },
];

// --- Categories ---
const categories = [
  {
    id: "momos",
    label: "🥟 Momos",
    tagline: "12 varieties supplied directly from our factory.",
    items: [
      { name: "Steam Momos", image: steamMomos },
      { name: "Fried Momos", image: friedMomos },
      { name: "Fried Momos", image: friedMomos2 },
      { name: "Tandoori Momos", image: tandooriMomos },
      { name: "Kurkure Momos", image: kurkureMomos },
      { name: "Saucy AF Momos", image: saucyMomos },
      { name: "Jhol Momos", image: jholMomos },
    ],
    extras: ["Peri Peri", "Shanghai", "Manchurian", "Schezwan", "Tandoori", "Jhol", "Afghani"],
  },
  {
    id: "ramen",
    label: "🍜 Ramen",
    tagline: "Ramen packets supplied with SOP for toppings.",
    items: [
      { name: "Classic Ramen", image: ramen },
      { name: "Veg Ramen", image: vegRamen },
    ],
  },
  {
    id: "mains",
    label: "🍔 Mains",
    tagline: "Burgers, pasta, biryani & more — all factory-backed.",
    items: [
      { name: "Loaded Burger", image: burger },
      { name: "Penne Pasta", image: pasta },
      { name: "Biryani", image: biryani },
      { name: "Pav Bhaji", image: pavBhaji },
      { name: "Sizzler", image: sizzler },
    ],
  },
  {
    id: "fries",
    label: "🍟 Fries",
    tagline: "5 loaded fries variants — all factory prepped.",
    items: [
      { name: "Salted Fries", image: saltedFries },
      { name: "Cheesy French Fries", image: cheesyFrenchFries },
      { name: "Chilli Cheesy Fries", image: chilliCheesyFries },
      { name: "Peri Peri Fries", image: periPeriFries },
      { name: "Rowdy Fries", image: frenchFries },
    ],
  },
  {
    id: "snacks",
    label: "🍗 Snacks",
    tagline: "Corn dogs, wings & bites — crowd favourites.",
    items: [
      { name: "Korean Corn Dog", image: cornDog },
      { name: "Messy Wings", image: messyWings },
      { name: "Chicken Bites", image: chickenBites },
    ],
  },
  {
    id: "shakes",
    label: "🥤 Shakes",
    tagline: "Thick shakes & cold coffee — all syrups supplied.",
    items: [
      { name: "Kit Kat Shake", image: kitKatShake },
      { name: "Blueberry Shake", image: milkshake },
      { name: "Dessert Shake", image: desertShake },
      { name: "Cold Coffee", image: coldCoffee },
    ],
  },
  {
    id: "beverages",
    label: "🧋 Beverages",
    tagline: "Bubble tea, mocktails, mojitos & more — 17 flavors.",
    items: [
      { name: "Bubble Tea", image: bubbleTea },
      { name: "Boba Tea", image: bobaTea },
      { name: "Mocktail", image: mocktail },
      { name: "Blue Mojito", image: mojito },
      { name: "Ice Tea", image: iceTea },
    ],
  },
  {
    id: "desserts",
    label: "🧁 Desserts",
    tagline: "Waffles & sizzling brownies — ready-to-cook.",
    items: [
      { name: "Belgian Waffle", image: waffle },
      { name: "Sizzling Brownie", image: sizzlingBrownie },
    ],
  },
];

// --- 3D tilt card ---
const TiltCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.03,1.03,1.03)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) card.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-shadow duration-300 ${className}`}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.15s ease-out" }}
    >
      {children}
    </div>
  );
};

const CategoryCarousel = ({ cat }: { cat: typeof categories[0] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) emblaApi.scrollNext();
      else emblaApi.scrollTo(0);
    }, 3000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div>
      {/* Category header */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <h3 className="text-2xl md:text-4xl font-headline font-bold mb-1">{cat.label}</h3>
          <p className="text-primary font-display text-xs md:text-sm tracking-wide font-medium">
            {cat.tagline}
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors disabled:opacity-30"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Carousel of image cards */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3">
          {cat.items.map((item, i) => (
            <motion.div
              key={`${item.name}-${i}`}
              className="flex-shrink-0 w-[42%] sm:w-[35%] md:w-[24%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <TiltCard className="rowdy-card overflow-hidden group hover:shadow-[0_0_20px_hsl(48_96%_53%/0.1)] hover:border-primary/30">
                <div className="relative aspect-square overflow-hidden bg-background/30">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="px-3 py-2.5 text-center border-t border-border/30">
                  <p className="text-xs sm:text-sm font-display font-bold group-hover:text-primary transition-colors">
                    {item.name}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extras (gravies) */}
      {cat.extras && (
        <div className="mt-5">
          <p className="text-[10px] font-display tracking-widest text-muted-foreground mb-2">
            Gravies Supplied
          </p>
          <div className="flex flex-wrap gap-2">
            {cat.extras.map((e) => (
              <span
                key={e}
                className="px-3 py-1 text-[10px] font-display tracking-wide bg-primary/10 text-primary border border-primary/20 rounded-full font-medium"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MenuSection = () => {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section id="menu" className="relative overflow-hidden py-8 md:py-14 px-4 md:px-8">
      {/* Fire video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/fire.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/80" />
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* --- Header --- */}
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="text-xs font-display tracking-[0.2em] text-accent mb-4 block font-medium">
              🔥 What We Serve
            </span>
            <h2 className="text-4xl md:text-7xl font-headline font-bold text-center mb-3">
              <span className="brush-heading">100+</span> Trendy Menu Items
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-lg max-w-xl mx-auto mb-2">
              Factory-to-store menu designed for speed, consistency and high margins.
            </p>
            <p className="text-primary font-display text-xs md:text-sm tracking-widest font-medium">
              Street food energy. Factory-level consistency.
            </p>
            <motion.div
              className="mx-auto mt-4 h-[2px] w-40 rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--flame-orange)), hsl(var(--primary)), hsl(var(--flame-orange)), transparent)" }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </AnimatedSection>

        {/* --- Featured Infinite Slider --- */}
        <AnimatedSection delay={0.1}>
          <div className="relative mt-10 mb-14 overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: { duration: 25, repeat: Infinity, ease: "linear" },
              }}
            >
              {[...featured, ...featured].map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[200px] md:w-[260px] relative group cursor-pointer overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="relative overflow-hidden aspect-square bg-background/30">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary/10 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-[10px] font-display tracking-widest text-primary mb-1 block font-medium">
                      {item.tag}
                    </span>
                    <p className="text-sm font-headline font-semibold">{item.name}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* --- Category Selector --- */}
        <AnimatedSection>
          <div className="relative">
            <div className="absolute right-0 top-0 bottom-3 w-10 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
            <div className="absolute left-0 top-0 bottom-3 w-6 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
            <div
              className="flex gap-2 overflow-x-auto pb-3 mb-2 scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              {categories.map((c, i) => (
                <motion.button
                  key={c.id}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs md:text-sm font-display font-medium tracking-wide transition-all border whitespace-nowrap ${
                    active === i
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(48_96%_53%/0.2)]"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {c.label}
                </motion.button>
              ))}
            </div>
            {/* Swipe indicator */}
            <div className="md:hidden flex justify-center mb-4">
              <motion.span
                className="text-[10px] text-muted-foreground/50 font-display tracking-widest"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ← swipe →
              </motion.span>
            </div>
          </div>
        </AnimatedSection>

        {/* --- Active Category --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <CategoryCarousel cat={cat} />
          </motion.div>
        </AnimatePresence>

        {/* --- Bottom count --- */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 text-center">
            <motion.p
              className="rowdy-card inline-block px-6 py-3 text-sm font-display tracking-wide text-primary font-medium"
              animate={{ boxShadow: ["0 0 15px hsl(48 96% 53% / 0.1)", "0 0 25px hsl(48 96% 53% / 0.2)", "0 0 15px hsl(48 96% 53% / 0.1)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✦ 100+ items across 8 categories ✦
            </motion.p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MenuSection;
