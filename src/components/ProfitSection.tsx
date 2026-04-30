import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const marginCards = [
  { label: "Momos / Pizza / Burger", range: "50% – 60%", value: 55, emoji: "🍔" },
  { label: "Beverages", range: "70%", value: 70, emoji: "🥤" },
  { label: "Overall Cafe Margin", range: "60%+", value: 60, emoji: "🔥" },
];

const CircleProgress = ({ value, label, range, emoji }: { value: number; label: string; range: string; emoji: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(0);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = value / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setProgress(value); clearInterval(timer); }
      else setProgress(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, value]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-24 md:h-24 mb-2">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
          <circle
            cx="60" cy="60" r={radius} fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-100"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
          <span className="text-xs md:text-sm mb-0.5">{emoji}</span>
          <span className="text-sm md:text-base font-headline font-bold text-gradient-fire">{progress}%</span>
        </div>
      </div>
      <p className="text-sm md:text-base font-headline font-semibold text-center mb-0.5">{range}</p>
      <p className="text-[10px] md:text-xs font-display tracking-wide text-muted-foreground text-center">{label}</p>
    </div>
  );
};

const ProfitSection = () => (
  <section className="relative noise-bg section-dark-c section-stripe-overlay overflow-hidden py-8 md:py-14 px-4 md:px-8">
    <div className="container mx-auto max-w-5xl relative z-10">
      <AnimatedSection>
        <div className="text-center mb-8 heading-glow">
          <span className="text-xs font-display tracking-[0.2em] text-accent mb-4 block font-medium">💰 The Numbers</span>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-center mb-4">
            High <span className="brush-heading">Profit Margin</span> Cafe Model
          </h2>
        </div>
      </AnimatedSection>

      <div className="flex justify-center items-start gap-6 md:gap-16 mb-10 px-2">
        {marginCards.map((m, i) => (
          <AnimatedSection key={i} delay={i * 0.15} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
            <CircleProgress {...m} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.5}>
        <p className="text-center text-muted-foreground font-body text-sm md:text-base max-w-lg mx-auto">
          Our <span className="text-primary font-bold">factory-to-store</span> supply model ensures higher margins and consistent quality.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default ProfitSection;
