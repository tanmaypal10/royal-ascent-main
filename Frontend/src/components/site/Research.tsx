import { Reveal } from "./Reveal";
import research from "@/assets/research.jpg";
import { Atom, Beaker, Rocket, ShieldCheck } from "lucide-react";

const cards = [
  { i: Atom, t: "Quantum Engineering", p: 92, d: "Photonic computing & next-gen materials." },
  { i: Beaker, t: "Bio-Robotics Lab", p: 87, d: "Neural prosthetics and surgical robotics." },
  { i: Rocket, t: "Aerospace & Propulsion", p: 81, d: "Hypersonic flow & green propellants." },
  { i: ShieldCheck, t: "Cyber-Physical Systems", p: 95, d: "Resilient grids & autonomous safety." },
];

export function Research() {
  return (
    <section id="research" className="relative overflow-hidden bg-[var(--royal-deep)] py-24 sm:py-32 text-white">
      <img src={research} alt="" loading="lazy" className="absolute inset-0 size-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--royal-deep)]/85 via-[var(--royal-deep)]/95 to-[var(--royal-deep)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-[var(--gold-light)]">Research & Innovation</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-bold">
            Engineering <span className="text-gold-gradient">Tomorrow</span>, Today
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="tilt-card glass-dark rounded-2xl p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid size-11 place-items-center rounded-xl bg-gold-gradient text-[var(--royal-deep)]">
                      <c.i className="size-5" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold">{c.t}</h3>
                  </div>
                  <span className="text-sm text-[var(--gold-light)]">{c.p}%</span>
                </div>
                <p className="mt-3 text-sm text-white/70">{c.d}</p>
                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full bg-gold-gradient transition-[width] duration-1000" style={{ width: `${c.p}%` }} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
