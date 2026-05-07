import { Reveal } from "./Reveal";
import { CheckCircle2, Sparkles, Award } from "lucide-react";

const steps = [
  { t: "Apply Online", d: "Complete the application portal in minutes." },
  { t: "Entrance Assessment", d: "Showcase your aptitude and creativity." },
  { t: "Interview & Portfolio", d: "Meet our distinguished faculty panel." },
  { t: "Welcome to Royal", d: "Begin your engineering journey." },
];

export function Admission() {
  return (
    <section id="admission" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-royal-gradient" />
      <div className="absolute inset-0 grid-circuit opacity-25" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, rgba(212,175,55,0.18), transparent 30%, rgba(212,175,55,0.18) 60%, transparent 90%)",
          animation: "spin 22s linear infinite",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 text-white">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-[var(--gold-light)]">Admissions 2026</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-bold">
            Your <span className="text-gold-gradient">Royal</span> Journey Begins
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
          <p className="mt-5 text-white/75">A four-step pathway designed to identify and elevate the next generation of engineers.</p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1}>
              <div className="tilt-card relative h-full rounded-2xl glass-dark p-6">
                <div className="absolute -top-4 left-6 grid size-9 place-items-center rounded-full bg-gold-gradient font-serif font-bold text-[var(--royal-deep)] shadow-gold">
                  {i + 1}
                </div>
                <CheckCircle2 className="mt-4 size-6 text-[var(--gold-light)]" />
                <h3 className="mt-3 font-serif text-lg font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-white/70">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-center gap-6 rounded-3xl glass-dark p-8 sm:flex-row sm:justify-between">
            <div className="flex items-start gap-4">
              <Award className="size-10 text-[var(--gold-light)]" />
              <div>
                <div className="font-serif text-xl font-semibold">Royal Merit Scholarships</div>
                <div className="text-sm text-white/70">Up to 100% tuition waiver for outstanding applicants.</div>
              </div>
            </div>
            <a href="#contact" className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 font-semibold text-[var(--royal-deep)] shadow-gold animate-glow">
              <Sparkles className="size-4" />
              Apply Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
