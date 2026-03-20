import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Package, Flame, ClipboardList, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

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

import logo from "@/assets/rowdy-logo.png";

const featured = [
  { name: "Tandoori Momos", tag: "Best Seller", image: foodMomos },
  { name: "Korean Corn Dogs", tag: "Trending", image: foodCorndogs },
  { name: "Chicken Wings", tag: "Spicy", image: foodWings },
  { name: "Loaded Burgers", tag: "Fan Favourite", image: foodBurger },
  { name: "Waffles & Brownies", tag: "Sweet", image: foodWaffles },
  { name: "Boba & Shakes", tag: "Refreshing", image: foodBeverages },
];

const categories = [
  {
    id: "momos",
    label: "🥟 Momos",
    image: imgMomos,
    heroImage: foodMomos,
    tagline: "12 varieties supplied directly from our factory.",
    items: [
      { name: "Steam Momos", desc: "Classic steamed dumplings", price: "₹99" },
      { name: "Fried Momos", desc: "Crispy golden fried", price: "₹109" },
      { name: "Tandoori Momos", desc: "Pre-marinated, tandoor-ready", price: "₹139" },
      { name: "Kurkure Momos", desc: "Crunchy coated momos", price: "₹129" },
      { name: "Afghani Momos", desc: "Creamy afghani gravy", price: "₹149" },
      { name: "Cheese Momos", desc: "Loaded with cheese", price: "₹149" },
    ],
    extras: ["Peri Peri", "Shanghai", "Manchurian", "Schezwan", "Tandoori", "Jhol"],
  },
  {
    id: "ramen",
    label: "🍜 Ramen & Noodles",
    image: imgRamen,
    heroImage: foodRamen,
    tagline: "Ramen packets supplied with SOP for toppings.",
    items: [
      { name: "Classic Ramen", desc: "Rich broth, soft noodles", price: "₹179" },
      { name: "Spicy Ramen", desc: "Fiery chilli broth", price: "₹189" },
      { name: "Miso Ramen", desc: "Japanese style miso", price: "₹199" },
    ],
  },
  {
    id: "corndogs",
    label: "🌭 Corn Dogs",
    image: imgCorndogs,
    heroImage: foodCorndogs,
    tagline: "Korean style, ready-made with full cheese.",
    items: [
      { name: "Classic Corn Dog", desc: "Crispy batter, cheese filled", price: "₹129" },
      { name: "Mozzarella Corn Dog", desc: "Extra cheese stretch", price: "₹149" },
      { name: "Potato Corn Dog", desc: "Crispy potato coating", price: "₹139" },
    ],
  },
  {
    id: "pizza",
    label: "🍕 Pizza",
    image: imgPizza,
    heroImage: foodPizza,
    tagline: "Ready-made pizzas with cheese and sauce supplied.",
    items: [
      { name: "Margherita", desc: "Classic cheese & basil", price: "₹149" },
      { name: "Cheese Burst", desc: "Extra loaded cheese", price: "₹199" },
      { name: "Paneer Tikka Pizza", desc: "Indian fusion flavour", price: "₹219" },
      { name: "Veggie Supreme", desc: "Loaded vegetables", price: "₹229" },
      { name: "Rowdy Special", desc: "House special toppings", price: "₹249" },
    ],
  },
  {
    id: "burgers",
    label: "🍔 Burgers",
    image: imgBurgers,
    heroImage: foodBurger,
    tagline: "Veg & chicken patties supplied from factory.",
    items: [
      { name: "Classic Burger", desc: "Juicy patty, fresh bun", price: "₹129" },
      { name: "Cheese Burst Burger", desc: "Double cheese loaded", price: "₹169" },
      { name: "Chicken Burger", desc: "Crispy chicken patty", price: "₹179" },
      { name: "Double Decker", desc: "Two patties stacked", price: "₹219" },
    ],
  },
  {
    id: "wings",
    label: "🍗 Wings & Chicken Bites",
    image: imgWings,
    heroImage: foodWings,
    tagline: "4 wing varieties + 3 chicken bites, all factory-supplied.",
    items: [
      { name: "BBQ Wings", desc: "Smoky barbecue glaze", price: "₹199" },
      { name: "Peri Peri Wings", desc: "Spicy African style", price: "₹199" },
      { name: "Hot Wings", desc: "Extra fiery coating", price: "₹189" },
      { name: "Chicken Bites", desc: "Crispy popcorn bites", price: "₹149" },
    ],
  },
  {
    id: "desserts",
    label: "🧁 Desserts",
    image: imgDesserts,
    heroImage: foodWaffles,
    tagline: "Waffle powder & ready-to-cook brownies supplied.",
    items: [
      { name: "Belgian Waffles", desc: "Crispy, topped with ice cream", price: "₹159" },
      { name: "Chocolate Brownie", desc: "Warm, gooey centre", price: "₹129" },
      { name: "Brownie Sundae", desc: "With ice cream & sauce", price: "₹179" },
    ],
  },
  {
    id: "beverages",
    label: "🥤 Beverages",
    image: imgBeverages,
    heroImage: foodBeverages,
    tagline: "17 syrups & flavors supplied with full SOP.",
    items: [
      { name: "Bubble Tea", desc: "6 unique flavors", price: "₹129" },
      { name: "Boba Tea", desc: "Milky boba varieties", price: "₹139" },
      { name: "Cold Coffee", desc: "Classic & flavoured", price: "₹99" },
      { name: "Mojitos", desc: "Refreshing coolers", price: "₹109" },
      { name: "Fruit Shakes", desc: "Mango, Strawberry & more", price: "₹119" },
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
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02,1.02,1.02)`;
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

const MenuPage = () => {
  const scrollToCategory = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background noise-bg">
      {/* Sticky top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary/30">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Rowdy Cafe" className="h-10 w-auto" />
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm font-display uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </nav>

      {/* ====== HERO ====== */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center px-4">
          <AnimatedSection>
            <span className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-4 block">
              🔥 Full Menu
            </span>
            <h1 className="text-4xl md:text-7xl font-headline mb-4">
              Explore The{" "}
              <span className="text-gradient-fire brush-heading">Rowdy Cafe</span>{" "}
              Menu
            </h1>
            <p className="text-muted-foreground font-body text-base md:text-xl max-w-2xl mx-auto mb-3">
              100+ Trendy Items Designed For Youth
            </p>
            <p className="text-primary font-display text-xs md:text-sm uppercase tracking-widest">
              Factory-supplied menu built for speed, consistency and high margins.
            </p>
            <motion.div
              className="mx-auto mt-6 h-[2px] w-48 rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--flame-orange)), hsl(var(--primary)), hsl(var(--flame-orange)), transparent)" }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ====== FEATURED CAROUSEL ====== */}
      <section className="pb-16 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4">
          <AnimatedSection>
            <h2 className="text-2xl md:text-4xl font-headline text-center mb-8">
              <span className="text-gradient-fire">Featured</span> Items
            </h2>
          </AnimatedSection>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
            <motion.div
              className="flex gap-5 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { duration: 30, repeat: Infinity, ease: "linear" } }}
            >
              {[...featured, ...featured].map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[260px] md:w-[320px] relative group cursor-pointer overflow-hidden rounded-sm border-2 border-border hover:border-primary/50 transition-all hover:shadow-[0_0_25px_hsl(48_96%_53%/0.15)]"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[10px] font-display uppercase tracking-widest text-primary mb-1 block">{item.tag}</span>
                    <p className="text-base md:text-lg font-headline">{item.name}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== CATEGORY NAVIGATION ====== */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="relative">
            <div className="absolute right-0 top-0 bottom-0 w-10 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
            <div className="absolute left-0 top-0 bottom-0 w-6 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1" style={{ scrollbarWidth: "none" }}>
              {categories.map((c) => (
                <motion.button
                  key={c.id}
                  onClick={() => scrollToCategory(c.id)}
                  className="flex-shrink-0 px-5 py-2.5 rounded-full text-xs md:text-sm font-display uppercase tracking-wide transition-all border-2 whitespace-nowrap bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_hsl(48_96%_53%/0.2)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {c.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== CATEGORY SECTIONS ====== */}
      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-20 space-y-20 md:space-y-28">
        {categories.map((cat, catIdx) => (
          <section key={cat.id} id={cat.id}>
            <AnimatedSection>
              {/* Section banner */}
              <div className="relative rounded-sm overflow-hidden mb-8 md:mb-12 border-2 border-border group">
                <div className="relative h-48 md:h-72 overflow-hidden">
                  <img
                    src={cat.heroImage}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <h3 className="text-3xl md:text-5xl font-headline mb-1">{cat.label}</h3>
                    <p className="text-primary font-display text-sm uppercase tracking-wide">{cat.tagline}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Item grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">
              {cat.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <TiltCard className="rowdy-card p-4 md:p-5 h-full group hover:shadow-[0_0_25px_hsl(48_96%_53%/0.12)] hover:border-primary/40 transition-all">
                    <p className="text-sm md:text-base font-display font-bold uppercase mb-1 group-hover:text-primary transition-colors">
                      {item.name}
                    </p>
                    <p className="text-[11px] text-muted-foreground font-body mb-2">{item.desc}</p>
                    <p className="text-sm font-headline text-primary">{item.price}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Extras (gravies) */}
            {cat.extras && (
              <div className="mt-6">
                <p className="text-[10px] font-display uppercase tracking-widest text-muted-foreground mb-2">Gravies Supplied</p>
                <div className="flex flex-wrap gap-2">
                  {cat.extras.map((e) => (
                    <span key={e} className="px-3 py-1 text-[10px] font-display uppercase tracking-wide bg-primary/10 text-primary border border-primary/20 rounded-full">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* ====== FACTORY SUPPLY SECTION ====== */}
      <section className="section-padding relative noise-bg">
        <div className="container mx-auto max-w-5xl px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-headline text-center mb-4">
              Factory-Supplied.{" "}
              <span className="text-gradient-fire brush-heading">Easy To Operate.</span>
            </h2>
            <p className="text-muted-foreground text-center font-body text-base max-w-xl mx-auto mb-12">
              Every item is designed for minimal kitchen effort and maximum consistency.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Package, title: "Ready-to-Cook", desc: "Pre-prepared ingredients delivered to your outlet" },
              { icon: Flame, title: "Pre-Marinated", desc: "Tandoor-ready and flavour-locked from factory" },
              { icon: ClipboardList, title: "Standardized SOPs", desc: "Step-by-step preparation guides for every item" },
            ].map((f, i) => (
              <motion.div
                key={i}
                className="rowdy-card p-6 md:p-8 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6, boxShadow: "0 0 25px hsl(48 96% 53% / 0.12)" }}
              >
                <div className="w-12 h-12 mx-auto mb-4 border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all flex items-center justify-center rounded-full">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-sm font-display font-bold uppercase mb-1">{f.title}</h4>
                <p className="text-xs text-muted-foreground font-body">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== INNOVATION SECTION ====== */}
      <section className="section-padding relative">
        <div className="container mx-auto max-w-5xl px-4">
          <AnimatedSection>
            <div className="rowdy-card p-6 md:p-12 text-center relative overflow-hidden">
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-headline mb-3">
                New Menu Innovations Every{" "}
                <span className="text-gradient-fire">4–6 Months</span>
              </h2>
              <p className="text-muted-foreground font-body text-sm md:text-base max-w-lg mx-auto mb-8">
                We keep the menu fresh so your customers keep coming back.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Matcha Latte", "Dan Dan Noodles", "Korean Pizza", "& More"].map((item) => (
                  <motion.span
                    key={item}
                    className="px-4 py-2 text-xs font-display uppercase tracking-wide bg-accent/10 text-accent border border-accent/30 rounded-full"
                    whileHover={{ scale: 1.08, boxShadow: "0 0 20px hsl(24 100% 50% / 0.3)" }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              {/* Flame underline */}
              <motion.div
                className="mx-auto mt-8 h-[2px] w-40 rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, hsl(var(--flame-orange)), hsl(var(--primary)), hsl(var(--flame-orange)), transparent)" }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== CTA ====== */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center px-4 flex flex-col items-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-4xl font-headline mb-4">
              Ready to Serve This Menu?
            </h2>
            <p className="text-muted-foreground font-body mb-6">
              Start your Rowdy Cafe franchise and get the entire menu factory-supplied.
            </p>
            <Button variant="hero" size="chunky" className="text-xs sm:text-sm" asChild>
              <Link to="/#booking">🔥 Book a Franchise Meeting</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-12" />
    </div>
  );
};

export default MenuPage;
