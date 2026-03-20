import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { UtensilsCrossed, Factory, Soup, ArrowRight } from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "100% Chefless Model",
    desc: "No dependency on chefs. Anyone can operate the cafe easily using the ready-to-cook system.",
    direction: "left" as const,
  },
  {
    icon: Factory,
    title: "Direct Supply From Factory",
    desc: "All key food items are supplied directly from the Rowdy Cafe factory, ensuring consistent quality and faster operations.",
    direction: "up" as const,
  },
  {
    icon: Soup,
    title: "Youth Focused Trendy Menu",
    desc: "Exciting and trendy food items that young customers love and cannot easily find everywhere.",
    direction: "right" as const,
  },
];

const pipelineSteps = [
  { label: "Factory", emoji: "🏭" },
  { label: "Direct Supply", emoji: "📦" },
  { label: "Rowdy Cafe Outlet", emoji: "🔥" },
  { label: "Customers", emoji: "🤩" },
];

const WhyRowdySection = () => (
  <section id="why" className="section-padding relative noise-bg section-dark-c section-stripe-overlay overflow-hidden">
    <div className="container mx-auto max-w-5xl relative z-10">
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-xs font-display uppercase tracking-[0.3em] text-primary mb-4 block">
            💪 The Solution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-headline text-center mb-4">
            Why{" "}
            <span className="text-gradient-fire brush-heading">Rowdy Cafe?</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto font-body text-base md:text-lg">
            A revolutionary factory-to-store model that removes all operational complexity.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10">
        {features.map((f, i) => (
          <AnimatedSection key={i} delay={i * 0.15} direction={f.direction}>
            <motion.div
              className="rowdy-card p-8 md:p-10 text-center group h-full flex flex-col items-center"
              whileHover={{ y: -8, boxShadow: "0 0 30px hsl(48 96% 53% / 0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                className="w-16 h-16 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all mb-6"
              >
                <f.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-headline mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-body text-sm md:text-base">{f.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5}>
        <p className="text-center text-primary font-display text-sm md:text-base tracking-wide uppercase mb-16">
          ✦ Items customers don't get everywhere ✦
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <div className="flex flex-col items-center gap-0 md:flex-row md:justify-center md:gap-0">
          {pipelineSteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center md:flex-row md:gap-0">
              <motion.div
                className="rowdy-card px-6 py-3 md:px-7 md:py-5 text-center min-w-[140px] group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, boxShadow: "0 0 20px hsl(48 96% 53% / 0.15)" }}
              >
                <span className="text-2xl md:text-3xl block mb-0.5">{step.emoji}</span>
                <span className="text-[10px] md:text-sm font-display uppercase tracking-wide text-foreground/80">{step.label}</span>
              </motion.div>
              {i < pipelineSteps.length - 1 && (
                <motion.div
                  className="flex items-center py-1 md:py-0 md:mx-3"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.25 + 0.15, duration: 0.3 }}
                >
                  <motion.div
                    animate={{ y: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary drop-shadow-[0_0_8px_hsl(48_96%_53%/0.5)] rotate-90 md:rotate-0" />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default WhyRowdySection;
