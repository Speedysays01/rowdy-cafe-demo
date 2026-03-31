import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";
import IndiaMap from "./IndiaMap";

const PresenceSection = () => (
  <section className="section-padding relative noise-bg section-dark-a section-stripe-overlay overflow-hidden">
    <div className="container mx-auto max-w-5xl relative z-10">
      <AnimatedSection>
        <div className="text-center mb-6">
          <span className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-4 block">
            🇮🇳 Pan India Expansion
          </span>
          <h2 className="text-4xl md:text-7xl font-headline text-center mb-3">
            <span className="brush-heading">100+ Outlets</span> Across 10 States
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto font-body text-base md:text-lg">
            India's First Factory-to-Store Cafe Model
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="flex justify-center mb-10">
          <AnimatedCounter end={100} suffix="+" label="Active Outlets" />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <IndiaMap />
      </AnimatedSection>

      <AnimatedSection delay={0.5}>
        <p className="text-center text-muted-foreground font-body text-sm md:text-base max-w-lg mx-auto mt-10">
          Rapidly expanding across India with a{" "}
          <span className="text-primary font-bold">factory-to-store</span> supply model.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default PresenceSection;
