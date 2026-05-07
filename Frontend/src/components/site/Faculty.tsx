import { Reveal } from "./Reveal";
import { Linkedin, Twitter, Mail } from "lucide-react";

const faculty = [
  { n: "Dr. Aarav Mehta", r: "Dean, Computer Science", t: "AI · Systems" },
  { n: "Prof. Eleanor Vance", r: "Head, Mechanical Eng.", t: "Robotics" },
  { n: "Dr. Rohan Kapoor", r: "Director, Research", t: "Quantum" },
  { n: "Prof. Sophia Chen", r: "Chair, AI & Data Science", t: "ML" },
];

export function Faculty() {
  return (
    <section className="relative bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-[var(--gold-deep)] dark:text-[var(--gold)]">Faculty</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-[var(--royal)] dark:text-foreground">
            Mentors of <span className="text-gold-gradient">Generations</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.08}>
              <div className="tilt-card group overflow-hidden rounded-2xl bg-card shadow-royal gold-border">
                <div className="relative h-56 bg-royal-gradient">
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="font-serif text-6xl font-bold text-gold-gradient">
                      {f.n.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-3 opacity-0 transition group-hover:opacity-100">
                    {[Linkedin, Twitter, Mail].map((I, k) => (
                      <a key={k} href="#" className="grid size-8 place-items-center rounded-full bg-white/10 text-white hover:bg-gold-gradient hover:text-[var(--royal-deep)]">
                        <I className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-serif text-lg font-semibold">{f.n}</div>
                  <div className="text-sm text-muted-foreground">{f.r}</div>
                  <span className="mt-3 inline-block rounded-full bg-[var(--gold)]/15 px-2.5 py-0.5 text-xs font-medium text-[var(--gold-deep)]">{f.t}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
