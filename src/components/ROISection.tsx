import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const scenarios = [
  {
    label: "Scenario 1",
    emoji: "📊",
    daily: "₹8,000",
    monthly: "₹2,40,000",
    gross: "₹1,44,000",
    expenses: [
      { item: "Rent", cost: "₹35,000" },
      { item: "Electricity / Gas", cost: "₹10,000" },
      { item: "Manpower", cost: "₹40,000" },
      { item: "Marketing", cost: "₹10,000" },
    ],
    totalExp: "₹95,000",
    netProfit: "₹49,000",
    netMargin: 20,
  },
  {
    label: "Scenario 2",
    emoji: "📈",
    daily: "₹15,000",
    monthly: "₹4,50,000",
    gross: "₹2,70,000",
    expenses: [
      { item: "Rent", cost: "₹75,000" },
      { item: "Electricity / Gas", cost: "₹18,000" },
      { item: "Manpower", cost: "₹60,000" },
      { item: "Marketing", cost: "₹12,000" },
    ],
    totalExp: "₹1,65,000",
    netProfit: "₹1,05,000",
    netMargin: 23,
  },
  {
    label: "Scenario 3",
    emoji: "🚀",
    daily: "₹25,000",
    monthly: "₹7,50,000",
    gross: "₹4,50,000",
    expenses: [
      { item: "Rent", cost: "₹1,25,000" },
      { item: "Electricity / Gas", cost: "₹22,000" },
      { item: "Manpower", cost: "₹75,000" },
      { item: "Marketing", cost: "₹15,000" },
    ],
    totalExp: "₹2,37,000",
    netProfit: "₹2,13,000",
    netMargin: 28,
  },
];

const ROISection = () => {
  const [active, setActive] = useState(1);
  const s = scenarios[active];

  return (
    <section className="section-padding relative noise-bg section-dark-a section-stripe-overlay overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-4 block">
              📊 Projections
            </span>
            <h2 className="text-4xl md:text-6xl font-headline text-center mb-3">
              Projected Cafe{" "}
              <span className="text-gradient-fire brush-heading">Profit Potential</span>
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-lg">
              Realistic projections based on existing outlet performance.
            </p>
          </div>
        </AnimatedSection>

        {/* Scenario tabs */}
        <AnimatedSection>
          <div className="flex justify-center gap-2 sm:gap-3 mb-10">
            {scenarios.map((sc, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`px-3 sm:px-5 py-2.5 text-xs sm:text-sm font-display uppercase tracking-wide transition-all border-2 rounded-xl ${
                  active === i
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(48_96%_53%/0.3)]"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="block text-lg sm:text-xl mb-0.5">{sc.emoji}</span>
                <span className="block leading-tight">{sc.label}</span>
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Active scenario */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Revenue row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-6">
            {[
              { label: "Daily Sales", value: s.daily },
              { label: "Monthly Sales", value: s.monthly },
              { label: "Gross Margin (60%)", value: s.gross },
            ].map((r, i) => (
              <div key={i} className="rowdy-card p-3 sm:p-4 md:p-6 text-center flex flex-col items-center justify-center min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
                <p className="text-[8px] sm:text-[10px] md:text-xs font-display uppercase tracking-wider text-muted-foreground mb-1 leading-tight">
                  {r.label}
                </p>
                <p className="text-xs sm:text-lg md:text-2xl font-headline text-gradient-fire whitespace-nowrap">{r.value}</p>
              </div>
            ))}
          </div>

          {/* Expenses + Profit */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Expenses */}
            <div className="rowdy-card p-5 md:p-8">
              <p className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-4">
                Estimated Expenses
              </p>
              <div className="space-y-3">
                {s.expenses.map((e, i) => (
                  <div key={i} className="flex justify-between items-center text-sm font-body border-b border-border/20 pb-2">
                    <span className="text-foreground/70">{e.item}</span>
                    <span className="font-display font-bold text-foreground">{e.cost}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4 pt-3 border-t-2 border-primary/30">
                <span className="text-sm font-display uppercase">Total Expenses</span>
                <span className="text-lg font-headline text-destructive">{s.totalExp}</span>
              </div>
            </div>

            {/* Profit highlight */}
            <div className="rowdy-card p-5 md:p-8 flex flex-col items-center justify-center text-center">
              <p className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-3">
                Monthly Net Profit
              </p>
              <motion.p
                className="text-4xl md:text-5xl font-headline text-gradient-fire mb-2"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {s.netProfit}
              </motion.p>
              <div className="mt-3 w-full max-w-[200px] h-3 bg-secondary border border-border overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${s.netMargin * 3}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <p className="text-sm font-display text-primary mt-2">
                Net Margin: {s.netMargin}%
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROISection;
