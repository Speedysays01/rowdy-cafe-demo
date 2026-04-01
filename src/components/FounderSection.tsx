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
  <section className="section-padding relative noise-bg section-dark-d grid-bg overflow-hidden">
    
    <div className="container mx-auto max-w-5xl relative z-10">
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-xs font-display tracking-[0.2em] text-accent mb-4 block font-medium">
            🏆 Leadership
          </span>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-2">
            <span className="brush-heading">10+ Years</span> of Food Industry Experience
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <AnimatedSection direction="left">
          <motion.div className="rowdy-card p-2 overflow-hidden" whileHover={{ scale: 1.02 }}>
            <div className="aspect-[3/4] relative overflow-hidden rounded-xl">
              <img src={ownerImg} alt="Varun Kapoor - Founder" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-3xl font-headline font-bold">Varun Kapoor</h3>
                <p className="text-primary font-display tracking-wide text-sm font-medium">Founder, Rowdy Cafe</p>
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
            <div className="border-t border-border/40 pt-5">
              <p className="text-xs font-display tracking-widest text-muted-foreground mb-3">Trusted supply partner to</p>
              <div className="flex flex-nowrap gap-3">
                {["Social", "Radisson", "Taj"].map((brand) => (
                  <span key={brand} className="px-5 py-2 text-sm font-serif italic font-medium tracking-wide text-foreground/90 bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 rounded-full">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {badges.map((b, i) => (
                <motion.div
                  key={i}
                  className="rowdy-card p-3 flex items-center gap-3 group"
                  variants={{ hidden: { opacity: 0, scale: 0.8, y: 10 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                  whileHover={{ x: 4 }}
                >
                  <b.icon className="w-5 h-5 text-primary flex-shrink-0 group-hover:text-accent transition-colors" />
                  <span className="text-xs font-display tracking-wide font-medium">{b.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default FounderSection;
