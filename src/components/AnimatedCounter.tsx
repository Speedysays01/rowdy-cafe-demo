import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2, label }: Props) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      whileHover={{ scale: 1.1, rotate: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      <div className="text-5xl md:text-6xl font-headline text-gradient-fire">
        {prefix}{count}{suffix}
      </div>
      <div className="text-muted-foreground mt-2 text-xs font-display uppercase tracking-[0.2em]">{label}</div>
    </motion.div>
  );
};

export default AnimatedCounter;
