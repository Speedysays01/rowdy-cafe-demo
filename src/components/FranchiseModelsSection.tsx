import { motion } from "framer-motion";
import cartImg from "@/assets/cart-model.png";
import miniCafeImg from "@/assets/mini-cafe-model.png";
import foodTruckImg from "@/assets/food-truck-model.png";
import premiumCafeImg from "@/assets/premium-cafe-model.png";

const models = [
  { name: "Cart", price: "₹3 Lakhs", img: cartImg, emoji: "🛒" },
  { name: "Mini Cafe", price: "₹5–6 Lakhs", img: miniCafeImg, emoji: "☕" },
  { name: "Food Truck", price: "₹6–7 Lakhs", img: foodTruckImg, emoji: "🚚" },
  { name: "Premium Cafe", price: "₹8–10 Lakhs", img: premiumCafeImg, emoji: "👑" },
];

// Each card flies in from a different corner/direction
const entryDirections = [
  { x: -120, y: -80, rotate: -15 },   // top-left
  { x: 120, y: -80, rotate: 15 },     // top-right
  { x: -120, y: 80, rotate: 12 },     // bottom-left
  { x: 120, y: 80, rotate: -12 },     // bottom-right
];

const FranchiseModelsSection = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50px", amount: 0.2 });

  return (
    <section
      id="investment"
      ref={ref}
      className="relative noise-bg section-dark-d overflow-hidden flex flex-col justify-center"
      style={{ minHeight: "100svh", padding: "clamp(1.5rem, 4vw, 3rem) 0" }}
    >
      <div className="container mx-auto max-w-5xl relative z-10 px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-4 sm:mb-6"
          animate={isInView
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.3, y: -60 }
          }
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <span className="text-xs font-display tracking-[0.2em] text-accent mb-2 block font-medium">
            🔥 Franchise Models
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold mb-1">
            Pick Your <span className="brush-heading">Style</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm">
            4 models. One rowdy brand.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
          {models.map((m, i) => {
            const dir = entryDirections[i];
            return (
              <motion.div
                key={m.name}
                animate={isInView
                  ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }
                  : { opacity: 0, x: dir.x, y: dir.y, rotate: dir.rotate, scale: 0.4 }
                }
                transition={{
                  delay: isInView ? 0.1 + i * 0.15 : 0,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
                whileHover={{
                  scale: 1.06,
                  y: -6,
                  rotate: i % 2 === 0 ? -2 : 2,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.94, rotate: 0 }}
                className="rowdy-card group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden bg-background/50">
                  <motion.img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-contain p-2 sm:p-3"
                    loading="lazy"
                    animate={isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 1.4, opacity: 0 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: isInView ? 0.3 + i * 0.15 : 0,
                      type: "spring",
                      stiffness: 120,
                      damping: 10,
                    }}
                  />
                </div>

                <motion.div
                  className="px-3 py-2.5 sm:px-4 sm:py-3 text-center border-t border-border/30"
                  animate={isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: isInView ? 0.5 + i * 0.15 : 0, duration: 0.4 }}
                >
                  <p className="text-xs sm:text-sm font-headline font-bold text-foreground leading-tight">
                    {m.emoji} {m.name}
                  </p>
                  <motion.p
                    className="text-sm sm:text-base font-headline font-bold text-gradient-fire mt-0.5"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  >
                    {m.price}
                  </motion.p>
                </motion.div>

                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-300"
                  style={{ boxShadow: "inset 0 0 20px hsl(var(--primary) / 0)" }}
                  whileHover={{ boxShadow: "inset 0 0 20px hsl(var(--primary) / 0.15)" }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Tagline */}
        <motion.p
          className="text-center text-xs sm:text-sm text-muted-foreground font-display tracking-wide mt-4 sm:mt-6"
          animate={isInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.5 }
          }
          transition={{ delay: isInView ? 0.9 : 0, type: "spring", stiffness: 150, damping: 12 }}
        >
          ✦ Starting from just ₹3 Lakhs ✦
        </motion.p>
      </div>
    </section>
  );
};

export default FranchiseModelsSection;
