import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ChefHat, Copy } from "lucide-react";

const ProblemSection = () => (
  <section className="section-padding relative noise-bg section-dark-b overflow-hidden">
    <div className="container mx-auto max-w-5xl relative z-10">
      <AnimatedSection>
        <div className="text-center mb-14 heading-glow">
          <span className="text-xs font-display uppercase tracking-[0.3em] text-destructive mb-4 block">
            ⚠️ The Problem
          </span>
          <h2 className="text-4xl md:text-6xl font-headline text-center mb-4">
            Two Major{" "}
            <span className="text-gradient-fire brush-heading">Problems</span>{" "}
            in the Food Business
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <AnimatedSection delay={0} direction="left">
          <motion.div
            className="rowdy-card p-5 md:p-8 lg:p-10 relative overflow-hidden group h-full"
            style={{ borderTopColor: "hsl(0 84.2% 60.2%)" }}
            whileHover={{ y: -6, rotate: -0.5 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-destructive/5 rounded-full blur-3xl group-hover:bg-destructive/10 transition-colors" />
            <motion.div
              animate={{ rotate: [0, -8, 0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <ChefHat className="w-8 h-8 md:w-12 lg:w-14 md:h-12 lg:h-14 text-destructive mb-4 md:mb-6" />
            </motion.div>
            <h3 className="text-lg md:text-2xl lg:text-3xl font-headline mb-2">Chef Dependency</h3>
            <p className="text-sm md:text-xl lg:text-2xl font-display text-primary mb-3 md:mb-4">Chef goes → cafe suffers.</p>
            <p className="text-muted-foreground font-body text-[11px] md:text-sm lg:text-base">
              Traditional restaurants depend heavily on chefs. If the chef leaves, operations and quality suffer.
            </p>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="right">
          <motion.div
            className="rowdy-card p-5 md:p-8 lg:p-10 relative overflow-hidden group h-full"
            style={{ borderTopColor: "hsl(0 84.2% 60.2%)" }}
            whileHover={{ y: -6, rotate: 0.5 }}
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-destructive/5 rounded-full blur-3xl group-hover:bg-destructive/10 transition-colors" />
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <Copy className="w-8 h-8 md:w-12 lg:w-14 md:h-12 lg:h-14 text-destructive mb-4 md:mb-6" />
            </motion.div>
            <h3 className="text-lg md:text-2xl lg:text-3xl font-headline mb-2">Same Old Menu Everywhere</h3>
            <p className="text-sm md:text-xl lg:text-2xl font-display text-primary mb-3 md:mb-4">Pizza, burger, sandwich... nothing new.</p>
            <p className="text-muted-foreground font-body text-[11px] md:text-sm lg:text-base">
              Most cafes serve the same repetitive menu with nothing exciting for young customers.
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ProblemSection;
