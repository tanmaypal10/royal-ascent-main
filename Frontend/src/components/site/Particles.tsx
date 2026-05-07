import { useMemo } from "react";

export function Particles({ count = 28 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: Math.random() * 4 + 2,
        d: Math.random() * 8 + 6,
        delay: Math.random() * 6,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            background: "radial-gradient(circle, rgba(212,175,55,0.95), rgba(212,175,55,0))",
            filter: "blur(0.4px)",
            animation: `float ${p.d}s ease-in-out ${p.delay}s infinite`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}
