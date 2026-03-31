import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const InteriorSection = () => (
  <section className="relative overflow-hidden py-16 md:py-24">
    <div className="container mx-auto max-w-5xl px-4 relative z-10">
      <AnimatedSection>
        <div className="text-center mb-6">
          <span className="text-xs font-display tracking-[0.2em] text-accent mb-3 block font-medium">
            🏠 Step Inside
          </span>
          <h2 className="text-3xl md:text-5xl font-headline font-bold mb-2">
            Take a Look at Our <span className="text-gradient-fire">Cafe Interior</span>
          </h2>
          <p className="text-muted-foreground font-body text-sm md:text-base max-w-md mx-auto">
            A 3D walkthrough of the Rowdy Cafe experience.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <motion.div
          className="relative rounded-2xl overflow-hidden border border-border mx-auto"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto aspect-video object-cover"
          >
            <source src="/videos/interior-tour.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/5" />
        </motion.div>
      </AnimatedSection>
    </div>
  </section>
);

export default InteriorSection;
