import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] hidden lg:block"
      style={{
        background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, rgba(212,175,55,0.10), transparent 60%)`,
        transition: "background 80ms linear",
      }}
    />
  );
}
