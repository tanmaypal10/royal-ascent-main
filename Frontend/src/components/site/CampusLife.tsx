import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { Play } from "lucide-react";
import campus1 from "@/assets/campus1.jpg";
import campus2 from "@/assets/campus2.jpg";
import campus3 from "@/assets/campus3.jpg";

const items = [
  { src: campus1, span: "row-span-2", alt: "Robotics lab" },
  { src: campus2, span: "", alt: "Library" },
  { src: campus3, span: "row-span-2 md:col-start-3 md:row-start-1", alt: "Graduation" },
];

export function CampusLife() {
  return (
    <section id="campus" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-[var(--gold-deep)] dark:text-[var(--gold)]">Campus Life</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-[var(--royal)] dark:text-foreground">
            Where <span className="text-gold-gradient">Curiosity</span> Lives
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:auto-rows-[200px]">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.1} className={`overflow-hidden rounded-2xl ${it.span} group relative gold-border`}>
              <img src={it.src} alt={it.alt} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-deep)]/70 via-transparent to-transparent" />
              {i === 1 && (
                <button className="absolute inset-0 m-auto grid size-16 place-items-center rounded-full bg-gold-gradient text-[var(--royal-deep)] shadow-gold animate-glow">
                  <Play className="size-7 translate-x-0.5" />
                </button>
              )}
              <div className="absolute bottom-3 left-3 text-xs uppercase tracking-widest text-white/85">{it.alt}</div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { v: 120, s: "+", l: "Student Clubs" },
            { v: 35, s: "", l: "Annual Fests" },
            { v: 18, s: "", l: "Sports Disciplines" },
            { v: 7, s: "", l: "Hostels" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="rounded-2xl glass p-5 text-center">
                <div className="font-serif text-3xl font-bold text-[var(--royal)] dark:text-[var(--gold-light)]">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
