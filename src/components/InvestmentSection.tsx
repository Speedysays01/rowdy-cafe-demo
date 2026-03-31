import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const costs = [
  { item: "Franchise Fees", cost: "₹1,00,000" },
  { item: "Kitchen Equipment", cost: "₹1,80,000" },
  { item: "Kitchen Cutlery", cost: "₹70,000" },
  { item: "Partition Wall", cost: "₹15,000" },
  { item: "Interior", cost: "₹1,00,000 – ₹1,50,000" },
  { item: "Seating (32–40 seats)", cost: "₹80,000 – ₹1,00,000" },
  { item: "Music System", cost: "₹10,000 – ₹15,000" },
  { item: "AC", cost: "₹40,000" },
  { item: "Glass Door", cost: "₹60,000 – ₹80,000" },
  { item: "Electric Fitting", cost: "₹30,000 – ₹40,000" },
  { item: "Signage (₹1100/sqft)", cost: "₹20,000 – ₹40,000" },
  { item: "Billing Software", cost: "₹6,000" },
  { item: "Billing Printer", cost: "₹2,500" },
  { item: "Refundable Deposit", cost: "₹50,000" },
];

const InvestmentSection = () => (
  <section id="investment" className="section-padding relative noise-bg section-dark-d overflow-hidden">
    <div className="container mx-auto max-w-5xl relative z-10">
      <AnimatedSection>
        <div className="text-center mb-6">
          <span className="text-xs font-display tracking-[0.2em] text-accent mb-4 block font-medium">💎 Investment</span>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-3">
            Complete <span className="text-gradient-fire">Investment</span> Transparency
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg mb-2">
            Total Investment
          </p>
          <p className="text-4xl md:text-5xl font-headline font-bold text-gradient-fire">
            ₹7.7 Lakhs – ₹9 Lakhs
          </p>
        </div>
      </AnimatedSection>

      {/* Cost grid */}
      <AnimatedSection delay={0.2}>
        <div className="rowdy-card p-4 md:p-8 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {costs.map((c, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-between px-4 py-3 border-b border-border/30 group hover:bg-primary/5 transition-colors rounded-lg"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <span className="text-sm font-body text-foreground/80 group-hover:text-foreground transition-colors">
                  {c.item}
                </span>
                <span className="text-sm font-display font-bold text-primary ml-4 whitespace-nowrap">
                  {c.cost}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Total row */}
          <div className="flex items-center justify-between px-4 py-4 mt-2 border-t-2 border-primary/30">
            <span className="text-base font-headline font-bold">Total</span>
            <span className="text-xl font-headline font-bold text-gradient-fire">₹7.7L – ₹9L</span>
          </div>
        </div>
      </AnimatedSection>

      {/* Notes */}
      <AnimatedSection delay={0.4}>
        <div className="mt-8 space-y-4 text-center">
          <motion.p
            className="rowdy-card inline-block px-6 py-3 text-sm font-display tracking-wide text-primary font-medium"
            animate={{ boxShadow: ["0 0 15px hsl(48 96% 53% / 0.1)", "0 0 25px hsl(48 96% 53% / 0.2)", "0 0 15px hsl(48 96% 53% / 0.1)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✦ 100% investment transparency with no hidden costs ✦
          </motion.p>
          <p className="text-muted-foreground font-body text-sm md:text-base max-w-lg mx-auto">
            You are free to handle your own setup. There is no requirement to pay the company for setup.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default InvestmentSection;
