import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Sparkles } from "lucide-react";

import foodMomos from "@/assets/food-tandoori-momos.jpg";
import foodCorndogs from "@/assets/food-corndogs.jpg";
import foodWings from "@/assets/food-wings.jpg";
import foodBurger from "@/assets/food-burger.jpg";
import foodWaffles from "@/assets/food-waffles.jpg";
import foodBeverages from "@/assets/food-beverages.jpg";
import foodRamen from "@/assets/food-ramen.jpg";
import foodPizza from "@/assets/food-pizza.jpg";

import imgMomos from "@/assets/menu-momos.jpg";
import imgRamen from "@/assets/menu-ramen.jpg";
import imgCorndogs from "@/assets/menu-corndogs.jpg";
import imgPizza from "@/assets/menu-pizza.jpg";
import imgBurgers from "@/assets/menu-burgers.jpg";
import imgWings from "@/assets/menu-wings.jpg";
import imgDesserts from "@/assets/menu-desserts.jpg";
import imgBeverages from "@/assets/menu-beverages.jpg";
import imgInnovations from "@/assets/menu-innovations.jpg";

// --- Featured items for carousel ---
const featured = [
  { name: "Tandoori Momos", tag: "Best Seller", image: foodMomos },
  { name: "Korean Corn Dogs", tag: "Trending", image: foodCorndogs },
  { name: "Chicken Wings", tag: "Spicy", image: foodWings },
  { name: "Loaded Burgers", tag: "Fan Favourite", image: foodBurger },
  { name: "Waffles & Brownies", tag: "Sweet", image: foodWaffles },
  { name: "Boba & Shakes", tag: "Refreshing", image: foodBeverages },
];

// --- Categories ---
const categories = [
  {
    id: "momos",
    label: "🥟 Momos",
    image: imgMomos,
    heroImage: foodMomos,
    tagline: "12 varieties supplied directly from our factory.",
    items: [
      { name: "Steam Momos", desc: "Classic steamed dumplings" },
      { name: "Fried Momos", desc: "Crispy golden fried" },
      { name: "Tandoori Momos", desc: "Pre-marinated, tandoor-ready" },
      { name: "Kurkure Momos", desc: "Crunchy coated momos" },
      { name: "Afghani Momos", desc: "Creamy afghani gravy" },
      { name: "Cheese Momos", desc: "Loaded with cheese" },
    ],
    extras: ["Peri Peri", "Shanghai", "Manchurian", "Schezwan", "Tandoori", "Jhol"],
  },
  {
    id: "ramen",
    label: "🍜 Ramen",
    image: imgRamen,
    heroImage: foodRamen,
    tagline: "Ramen packets supplied with SOP for toppings.",
    items: [
      { name: "Classic Ramen", desc: "Rich broth, soft noodles" },
      { name: "Spicy Ramen", desc: "Fiery chilli broth" },
      { name: "Miso Ramen", desc: "Japanese style miso" },
    ],
  },
  {
    id: "corndogs",
    label: "🌭 Corn Dogs",
    image: imgCorndogs,
    heroImage: foodCorndogs,
    tagline: "Korean style, ready-made with full cheese.",
    items: [
      { name: "Classic Corn Dog", desc: "Crispy batter, cheese filled" },
      { name: "Mozzarella Corn Dog", desc: "Extra cheese stretch" },
      { name: "Potato Corn Dog", desc: "Crispy potato coating" },
    ],
  },
  {
    id: "pizza",
    label: "🍕 Pizza",
    image: imgPizza,
    heroImage: foodPizza,
    tagline: "Ready-made pizzas with cheese and sauce supplied.",
    items: [
      { name: "Margherita", desc: "Classic cheese & basil" },
      { name: "Cheese Burst", desc: "Extra loaded cheese" },
      { name: "Paneer Tikka Pizza", desc: "Indian fusion flavour" },
      { name: "Veggie Supreme", desc: "Loaded vegetables" },
      { name: "Rowdy Special", desc: "House special toppings" },
    ],
  },
  {
    id: "burgers",
    label: "🍔 Burgers",
    image: imgBurgers,
    heroImage: foodBurger,
    tagline: "Veg & chicken patties supplied from factory.",
    items: [
      { name: "Classic Burger", desc: "Juicy patty, fresh bun" },
      { name: "Cheese Burst Burger", desc: "Double cheese loaded" },
      { name: "Chicken Burger", desc: "Crispy chicken patty" },
      { name: "Double Decker", desc: "Two patties stacked" },
    ],
  },
  {
    id: "wings",
    label: "🍗 Wings",
    image: imgWings,
    heroImage: foodWings,
    tagline: "4 wing varieties + 3 chicken bites, all factory-supplied.",
    items: [
      { name: "BBQ Wings", desc: "Smoky barbecue glaze" },
      { name: "Peri Peri Wings", desc: "Spicy African style" },
      { name: "Hot Wings", desc: "Extra fiery coating" },
      { name: "Chicken Bites", desc: "Crispy popcorn bites" },
    ],
  },
  {
    id: "desserts",
    label: "🧁 Desserts",
    image: imgDesserts,
    heroImage: foodWaffles,
    tagline: "Waffle powder & ready-to-cook brownies supplied.",
    items: [
      { name: "Belgian Waffles", desc: "Crispy, topped with ice cream" },
      { name: "Chocolate Brownie", desc: "Warm, gooey centre" },
      { name: "Brownie Sundae", desc: "With ice cream & sauce" },
    ],
  },
  {
    id: "beverages",
    label: "🥤 Beverages",
    image: imgBeverages,
    heroImage: foodBeverages,
    tagline: "17 syrups & flavors supplied with full SOP.",
    items: [
      { name: "Bubble Tea", desc: "6 unique flavors" },
      { name: "Boba Tea", desc: "Milky boba varieties" },
      { name: "Cold Coffee", desc: "Classic & flavoured" },
      { name: "Mojitos", desc: "Refreshing coolers" },
      { name: "Fruit Shakes", desc: "Mango, Strawberry & more" },
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

const MenuSection = () => {
  const [active, setActive] = useState(0);
  const cat = categories[active];
  

  return (
    <section id="menu" className="section-padding relative noise-bg section-dark-b overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* --- Header --- */}
        <AnimatedSection>
          <div className="text-center mb-4">
            <span className="text-xs font-display tracking-[0.2em] text-accent mb-4 block font-medium">
              🔥 What We Serve
            </span>
            <h2 className="text-4xl md:text-7xl font-headline font-bold text-center mb-3">
              <span className="text-gradient-fire">100+</span> Trendy Menu Items
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
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: { duration: 25, repeat: Infinity, ease: "linear" },
              }}
            >
              {/* Duplicate items for seamless loop */}
              {[...featured, ...featured].map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[240px] md:w-[300px] relative group cursor-pointer overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary/10 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[10px] font-display tracking-widest text-primary mb-1 block font-medium">
                      {item.tag}
                    </span>
                    <p className="text-sm md:text-base font-headline font-semibold">{item.name}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* --- Category Selector (pill buttons) --- */}
        <AnimatedSection>
          <div className="relative">
            {/* Fade hint right */}
            <div className="absolute right-0 top-0 bottom-3 w-10 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
            {/* Fade hint left */}
            <div className="absolute left-0 top-0 bottom-3 w-6 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
            <div
              className="flex gap-2 overflow-x-auto pb-3 mb-2 scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
              ref={(el) => {
                if (!el) return;
                // Duplicate content for infinite scroll illusion
                const handleScroll = () => {
                  const halfWidth = el.scrollWidth / 2;
                  if (el.scrollLeft >= halfWidth) {
                    el.scrollLeft -= halfWidth;
                  } else if (el.scrollLeft <= 0) {
                    el.scrollLeft += halfWidth;
                  }
                };
                el.addEventListener("scroll", handleScroll);
              }}
            >
              {[...categories, ...categories].map((c, i) => {
                const realIndex = i % categories.length;
                return (
                  <motion.button
                    key={`${c.id}-${i}`}
                    onClick={() => setActive(realIndex)}
                    className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs md:text-sm font-display font-medium tracking-wide transition-all border whitespace-nowrap ${
                      active === realIndex
                        ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(48_96%_53%/0.2)]"
                        : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {c.label}
                  </motion.button>
                );
              })}
            </div>
            {/* Swipe indicator - mobile only */}
            <div className="flex items-center justify-center gap-1.5 mb-8">
              <motion.div
                className="text-[10px] font-display uppercase tracking-widest text-muted-foreground/50"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Swipe for more →
              </motion.div>
            </div>
            <div className="hidden md:block mb-8" />
          </div>
        </AnimatedSection>

        {/* --- Active Category Content --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Hero image + info row */}
            <div className="grid md:grid-cols-5 gap-6 md:gap-8 mb-8">
              <div className="md:col-span-2">
                <TiltCard className="overflow-hidden border-2 border-border hover:border-primary/40 rounded-sm h-full">
                  <div className="relative overflow-hidden aspect-square md:aspect-auto md:h-full group">
                    <img
                      src={cat.heroImage}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                </TiltCard>
              </div>

              <div className="md:col-span-3 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-headline mb-2">{cat.label}</h3>
                <p className="text-primary font-display text-sm uppercase tracking-wide mb-5">
                  {cat.tagline}
                </p>

                {/* Item cards grid with 3D tilt */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cat.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <TiltCard className="rowdy-card p-4 h-full group hover:shadow-[0_0_20px_hsl(48_96%_53%/0.1)] hover:border-primary/30">
                        <p className="text-sm font-display font-bold uppercase mb-1 group-hover:text-primary transition-colors">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground font-body">{item.desc}</p>
                      </TiltCard>
                    </motion.div>
                  ))}
                </div>

                {/* Extras (gravies for momos) */}
                {cat.extras && (
                  <div className="mt-5">
                    <p className="text-[10px] font-display uppercase tracking-widest text-muted-foreground mb-2">
                      Gravies Supplied
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.extras.map((e) => (
                        <span
                          key={e}
                          className="px-3 py-1 text-[10px] font-display uppercase tracking-wide bg-primary/10 text-primary border border-primary/20 rounded-full"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>


        {/* --- Innovations --- */}
        <AnimatedSection delay={0.3}>
          <motion.div
            className="rowdy-card p-6 md:p-10 relative overflow-hidden"
            whileHover={{ boxShadow: "0 0 30px hsl(48 96% 53% / 0.1)" }}
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <Sparkles className="w-6 h-6 text-accent mb-3" />
                <h3 className="text-2xl md:text-3xl font-headline mb-2">
                  New Innovations Every{" "}
                  <span className="text-gradient-fire">4–6 Months</span>
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-4">
                  We keep the menu fresh so your customers keep coming back.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Matcha Latte", "Dan Dan Noodles", "Korean Pizza", "& More"].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs font-display uppercase tracking-wide bg-primary/10 text-primary border border-primary/20 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden border-2 border-border rounded-sm">
                <img
                  src={imgInnovations}
                  alt="New menu innovations"
                  className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--flame-orange)), hsl(var(--primary)), hsl(var(--flame-orange)), transparent)" }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MenuSection;
