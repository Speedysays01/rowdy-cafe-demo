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

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 40,
    rotate: i % 2 === 0 ? -6 : 6,
    scale: 0.85,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const FranchiseModelsSection = () => (
  <section
    id="investment"
    className="relative noise-bg section-dark-d overflow-hidden flex flex-col justify-center"
    style={{ minHeight: "100svh", padding: "clamp(1.5rem, 4vw, 3rem) 0" }}
  >
    <div className="container mx-auto max-w-5xl relative z-10 px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-4 sm:mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
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
        {models.map((m, i) => (
          <motion.div
            key={m.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ scale: 1.04, y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="rowdy-card group relative rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-background/50">
              <motion.img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-contain p-2 sm:p-3"
                loading="lazy"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              />
              {/* Shine sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileInView={{ x: "200%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.15 }}
              />
            </div>

            {/* Label */}
            <div className="px-3 py-2.5 sm:px-4 sm:py-3 text-center border-t border-border/30">
              <p className="text-xs sm:text-sm font-headline font-bold text-foreground leading-tight">
                {m.emoji} {m.name}
              </p>
              <motion.p
                className="text-sm sm:text-base font-headline font-bold text-gradient-fire mt-0.5"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {m.price}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tagline */}
      <motion.p
        className="text-center text-xs sm:text-sm text-muted-foreground font-display tracking-wide mt-4 sm:mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        ✦ Starting from just ₹3 Lakhs ✦
      </motion.p>
    </div>
  </section>
);

export default FranchiseModelsSection;
