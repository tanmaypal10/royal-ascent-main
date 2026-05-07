import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { Briefcase, TrendingUp, Building } from "lucide-react";

const recruiters = [
  "Google", "Microsoft", "Meta", "Apple", "Amazon", "Tesla", "Nvidia", "IBM", "Intel", "Boeing", "SpaceX", "Goldman Sachs",
];

export function Placements() {
  return (
    <section id="placements" className="relative bg-background py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-[var(--gold-deep)] dark:text-[var(--gold)]">Placements</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-[var(--royal)] dark:text-foreground">
            Careers Built on a <span className="text-gold-gradient">Royal Legacy</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { i: Briefcase, v: 100, s: "%", l: "Placement Support" },
            { i: TrendingUp, v: 48, s: " LPA", l: "Highest Package" },
            { i: Building, v: 600, s: "+", l: "Recruiting Partners" },
          ].map((c, i) => (
            <Reveal key={c.l} delay={i * 0.1}>
              <div className="tilt-card relative overflow-hidden rounded-2xl bg-royal-gradient p-8 text-white shadow-royal">
                <c.i className="size-7 text-[var(--gold-light)]" />
                <div className="mt-4 font-serif text-5xl font-bold text-gold-gradient">
                  <Counter to={c.v} suffix={c.s} />
                </div>
                <div className="mt-1 text-sm uppercase tracking-widest text-white/70">{c.l}</div>
                <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.4),transparent_70%)] blur-2xl" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="overflow-hidden">
            <div className="flex w-max gap-12 animate-[marquee_25s_linear_infinite]">
              {[...recruiters, ...recruiters].map((r, i) => (
                <div key={i} className="font-serif text-2xl font-semibold text-[var(--royal)]/70 dark:text-white/70 hover:text-[var(--gold-deep)] transition">
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
