import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { TrendingUp, Utensils } from "lucide-react";

const IndustrySection = () => (
  <section id="industry" className="section-padding relative noise-bg section-dark-a section-stripe-overlay overflow-hidden">
    <div className="container mx-auto max-w-5xl relative z-10">
      <AnimatedSection>
        <div className="text-center mb-14 heading-glow">
          <span className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-4 block">
            📈 Industry Opportunity
          </span>
          <h2 className="text-4xl md:text-6xl font-headline text-center mb-4">
            The Indian{" "}
            <span className="text-gradient-fire brush-heading">QSR Industry</span>{" "}
            is Booming
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto font-body text-base md:text-lg">
            Perfect time to start a cafe business.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {[
          { icon: Utensils, highlight: "1 in every 3", text: "food joints will be QSR by 2028" },
          { icon: TrendingUp, highlight: "20–25%", text: "Indian QSR industry expected to grow in FY24" },
        ].map((card, i) => (
          <AnimatedSection key={i} delay={i * 0.2} direction={i === 0 ? "left" : "right"}>
            <motion.div
              className="rowdy-card p-8 md:p-10 text-center group relative overflow-hidden"
              whileHover={{ y: -6, boxShadow: "0 0 30px hsl(48 96% 53% / 0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <card.icon className="w-10 h-10 text-primary mx-auto mb-5 group-hover:text-accent transition-colors" />
              <p className="text-3xl md:text-5xl lg:text-6xl font-headline text-gradient-fire mb-3">{card.highlight}</p>
              <p className="text-muted-foreground font-body text-sm md:text-base">{card.text}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default IndustrySection;
