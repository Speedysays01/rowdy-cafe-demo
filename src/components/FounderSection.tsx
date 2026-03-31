import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Award, Factory, Star, MapPin } from "lucide-react";
import ownerImg from "@/assets/owner.png";

const badges = [
  { icon: Award, label: "10+ Years Experience" },
  { icon: Factory, label: "Factory Manufacturing" },
  { icon: Star, label: "Trusted by Premium Brands" },
];

const FounderSection = () => (
  <section className="section-padding relative noise-bg section-dark-d overflow-hidden">
    <div className="container mx-auto max-w-5xl relative z-10">
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-4 block">
            🏆 Leadership
          </span>
          <h2 className="text-4xl md:text-6xl font-headline text-center mb-2">
            <span className="text-gradient-fire brush-heading">10+ Years</span> of Food Industry Experience
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <AnimatedSection direction="left">
          <motion.div className="rowdy-card p-2 overflow-hidden" whileHover={{ scale: 1.02, rotate: -1 }}>
            <div className="aspect-[3/4] relative overflow-hidden">
              <img src={ownerImg} alt="Varun Kapoor - Founder" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-3xl font-headline">Varun Kapoor</h3>
                <p className="text-primary font-display uppercase tracking-wider text-sm">Founder, Rowdy Cafe</p>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="right">
          <div className="space-y-6">
            <p className="text-base md:text-lg text-foreground/80 font-body leading-relaxed">
              With expertise in <span className="text-primary font-bold">food manufacturing for the last 10 years</span>,
              Varun Kapoor built Rowdy Cafe's scalable factory-to-store model that empowers entrepreneurs
              across India to start their own cafe business without any food preparation expertise.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Factory located at <span className="text-foreground font-semibold">Kopar Khairane, Navi Mumbai</span></span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
              {badges.map((b, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                >
                  <b.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-xs font-display uppercase tracking-wide text-foreground/70">{b.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="border-t border-border/40 pt-5 mt-2">
              <p className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-3">Trusted supply partner to</p>
              <div className="flex items-center gap-4">
                {["Social", "Radisson", "Taj"].map((brand) => (
                  <span key={brand} className="text-lg font-headline text-primary/80 tracking-wider">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default FounderSection;
