import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import about from "@/assets/about.jpg";
import { BookOpen, Award, Globe2, Sparkles } from "lucide-react";

const timeline = [
  { y: "1897", t: "Founded with a Royal Charter for excellence in engineering." },
  { y: "1962", t: "First in the nation to launch Computer Science." },
  { y: "1998", t: "Centre for AI, Robotics & Advanced Manufacturing." },
  { y: "2025", t: "Quantum Engineering & Sustainable Futures Institute." },
];

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-[var(--gold-deep)] dark:text-[var(--gold)]">About the College</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-[var(--royal)] dark:text-foreground">
            A Legacy of <span className="text-gold-gradient">Engineering Excellence</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl shadow-royal gold-border">
              <img src={about} alt="Royal College historic building" width={1280} height={896} loading="lazy" className="size-full object-cover transition-transform duration-[1.4s] hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--royal-deep)]/40 to-transparent" />
              <div className="absolute bottom-5 left-5 glass rounded-xl px-4 py-3">
                <div className="text-xs uppercase tracking-widest text-[var(--gold-deep)]">Since</div>
                <div className="font-serif text-3xl font-bold">1897</div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">
                For over a century, the Royal College of Engineering has stood at the
                crossroads of tradition and innovation — nurturing thinkers, makers
                and leaders whose work shapes the world we live in.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {[
                { i: BookOpen, l: "Vision", v: "To pioneer engineering education that transforms society." },
                { i: Award, l: "Mission", v: "Educate · Innovate · Elevate global engineering practice." },
              ].map((c, idx) => (
                <Reveal key={c.l} delay={idx * 0.1}>
                  <div className="glass rounded-2xl p-5">
                    <c.i className="size-6 text-[var(--gold-deep)]" />
                    <div className="mt-3 font-serif text-lg font-semibold">{c.l}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{c.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Timeline */}
            <Reveal>
              <ol className="relative ml-3 space-y-6 border-l border-[var(--gold)]/40 pl-6">
                {timeline.map((it) => (
                  <li key={it.y} className="relative">
                    <span className="absolute -left-[31px] grid size-5 place-items-center rounded-full bg-gold-gradient shadow-gold">
                      <Sparkles className="size-2.5 text-[var(--royal-deep)]" />
                    </span>
                    <div className="font-serif text-xl font-semibold text-[var(--royal)] dark:text-[var(--gold-light)]">{it.y}</div>
                    <div className="text-sm text-muted-foreground">{it.t}</div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { v: 128, s: "+", l: "Years of Heritage", i: Award },
            { v: 850, s: "+", l: "Distinguished Faculty", i: BookOpen },
            { v: 60, s: "+", l: "Global Partnerships", i: Globe2 },
            { v: 1200, s: "+", l: "Patents Filed", i: Sparkles },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.1}>
              <div className="tilt-card glass rounded-2xl p-6 text-center">
                <s.i className="mx-auto size-6 text-[var(--gold-deep)]" />
                <div className="mt-3 font-serif text-3xl font-bold">
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
