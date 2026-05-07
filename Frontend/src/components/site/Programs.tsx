import { Cpu, Cog, Building2, Zap, BrainCircuit, Radio, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const programs = [
  { i: Cpu, name: "Computer Science", desc: "Software, systems, AI foundations and human-computer interaction." },
  { i: Cog, name: "Mechanical Engineering", desc: "Design, robotics, thermofluids and advanced manufacturing." },
  { i: Building2, name: "Civil Engineering", desc: "Smart cities, structures and sustainable infrastructure." },
  { i: Zap, name: "Electrical Engineering", desc: "Power systems, control engineering and renewable energy." },
  { i: BrainCircuit, name: "AI & Data Science", desc: "Machine learning, deep learning and applied analytics." },
  { i: Radio, name: "Electronics & Communication", desc: "VLSI, wireless systems, IoT and signal processing." },
];

export function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden bg-[var(--royal-deep)] py-24 sm:py-32 text-white">
      <div className="absolute inset-0 grid-circuit opacity-30" />
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-[var(--gold-light)]">Programs</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-bold">
            Departments of <span className="text-gold-gradient">Distinction</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
          <p className="mt-5 text-white/70">Six flagship schools, twenty-five specialized centres, one shared pursuit of excellence.</p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.07}>
              <a href="#admission" className="tilt-card group relative block h-full overflow-hidden rounded-2xl glass-dark p-7">
                <div className="absolute -right-12 -top-12 size-40 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.25),transparent_70%)] blur-xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="grid size-12 place-items-center rounded-xl bg-gold-gradient text-[var(--royal-deep)] shadow-gold">
                    <p.i className="size-6" />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--gold-light)]">
                    Explore program <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all duration-300 group-hover:ring-[var(--gold)]/60 group-hover:shadow-gold" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
