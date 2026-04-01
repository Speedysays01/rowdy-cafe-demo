import { useEffect, useState } from "react";

interface GlowCell {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  color: string;
}

const COLORS = [
  "hsl(48 96% 53% / 0.15)",
  "hsl(20 90% 50% / 0.15)",
  "hsl(5 85% 45% / 0.12)",
  "hsl(48 96% 53% / 0.1)",
  "hsl(20 90% 50% / 0.12)",
];

const GridGlow = () => {
  const [cells, setCells] = useState<GlowCell[]>([]);

  useEffect(() => {
    const generate = () => {
      const count = 8 + Math.floor(Math.random() * 6);
      const newCells: GlowCell[] = [];
      for (let i = 0; i < count; i++) {
        newCells.push({
          id: i,
          x: Math.floor(Math.random() * 36) * 28,
          y: Math.floor(Math.random() * 20) * 28,
          delay: Math.random() * 3,
          duration: 1.5 + Math.random() * 2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
      setCells(newCells);
    };

    generate();
    const interval = setInterval(generate, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {cells.map((cell) => (
        <div
          key={`${cell.id}-${cell.x}-${cell.y}`}
          className="absolute grid-glow-cell"
          style={{
            left: cell.x,
            top: cell.y,
            width: 28,
            height: 28,
            background: cell.color,
            animationDelay: `${cell.delay}s`,
            animationDuration: `${cell.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default GridGlow;
