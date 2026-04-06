import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-60px", amount: 0.15 });

  const enter = {
    up: { opacity: 1, y: 0, scale: 1 },
    left: { opacity: 1, x: 0, scale: 1 },
    right: { opacity: 1, x: 0, scale: 1 },
  };

  const exit = {
    up: { opacity: 0, y: 40, scale: 0.97 },
    left: { opacity: 0, x: -50, scale: 0.97 },
    right: { opacity: 0, x: 50, scale: 0.97 },
  };

  return (
    <motion.div
      ref={ref}
      initial={exit[direction]}
      animate={isInView ? enter[direction] : exit[direction]}
      transition={{ duration: 0.6, delay: isInView ? delay : 0, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
