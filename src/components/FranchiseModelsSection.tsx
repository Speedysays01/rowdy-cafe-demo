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

const FranchiseModelsSection = () => (
  <section
    id="investment"
    className="relative noise-bg section-dark-d overflow-hidden flex flex-col justify-center"
    style={{ minHeight: "100svh", padding: "clamp(1.5rem, 4vw, 3rem) 0" }}
  >
    <div className="container mx-auto max-w-5xl relative z-10 px-4">
      {/* Header — smash in from top */}
      <motion.div
        className="text-center mb-4 sm:mb-6"
        initial={{ opacity: 0, scale: 0.3, y: -60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
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

      {/* 2x2 Grid — each card explodes in from its corner */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
        {models.map((m, i) => {
          const dir = entryDirections[i];
          return (
            <motion.div
              key={m.name}
              initial={{
                opacity: 0,
                x: dir.x,
                y: dir.y,
                rotate: dir.rotate,
                scale: 0.4,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
              }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: 0.1 + i * 0.15,
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
              {/* Image with bounce-in */}
              <div className="relative aspect-square overflow-hidden bg-background/50">
                <motion.img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-contain p-2 sm:p-3"
                  loading="lazy"
                  initial={{ scale: 1.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.15,
                    type: "spring",
                    stiffness: 120,
                    damping: 10,
                  }}
                />
                {/* Double shine sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/15 to-transparent -skew-x-12"
                  initial={{ x: "-150%" }}
                  whileInView={{ x: "250%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.15 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent skew-x-12"
                  initial={{ x: "150%" }}
                  whileInView={{ x: "-250%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 + i * 0.15 }}
                />
              </div>

              {/* Label — slides up */}
              <motion.div
                className="px-3 py-2.5 sm:px-4 sm:py-3 text-center border-t border-border/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
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

              {/* Glow ring on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-300"
                style={{ boxShadow: "inset 0 0 20px hsl(var(--primary) / 0)" }}
                whileHover={{ boxShadow: "inset 0 0 20px hsl(var(--primary) / 0.15)" }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Tagline — pop in */}
      <motion.p
        className="text-center text-xs sm:text-sm text-muted-foreground font-display tracking-wide mt-4 sm:mt-6"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, type: "spring", stiffness: 150, damping: 12 }}
      >
        ✦ Starting from just ₹3 Lakhs ✦
      </motion.p>
    </div>
  </section>
);

export default FranchiseModelsSection;
