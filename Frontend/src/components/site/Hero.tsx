import { motion } from "framer-motion";
import { ArrowRight, Compass, ChevronDown } from "lucide-react";
import hero from "@/assets/hero-campus.jpg";
import { Particles } from "./Particles";
import { Counter } from "./Counter";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[var(--royal-deep)] text-white">
      <img src={hero} alt="Royal College Engineering campus" width={1920} height={1080} className="absolute inset-0 size-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,31,58,0.55)_0%,rgba(11,31,58,0.85)_55%,rgba(11,31,58,1)_100%)]" />
      <div className="absolute inset-0 grid-circuit opacity-40" />
      <Particles count={36} />

      {/* Glowing orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(31,80,160,0.45),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[var(--gold-light)]"
        >
          <span className="size-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
          Established 1897 · NAAC A++ · Ranked Top 10
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05]"
        >
          <span className="block">Royal College</span>
          <span className="block shimmer-text">of Engineering</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/75"
        >
          Shaping Future Innovators &amp; Engineering Leaders through world-class
          academics, breakthrough research and timeless tradition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#campus"
            className="magnetic-btn group inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-medium text-white gold-border"
          >
            <Compass className="size-4 text-[var(--gold-light)]" />
            Explore Campus
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#admission"
            className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-[var(--royal-deep)] shadow-gold animate-glow"
          >
            Admissions Open 2026
            <ArrowRight className="size-4" />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { v: 25, s: "+", l: "Departments" },
            { v: 50, s: "K+", l: "Alumni Worldwide" },
            { v: 100, s: "%", l: "Placement Support" },
          ].map((s) => (
            <div key={s.l} className="glass-dark rounded-2xl p-6 text-left">
              <div className="font-serif text-4xl font-bold text-gold-gradient">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-1 text-sm uppercase tracking-widest text-white/65">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--gold-light)]"
        aria-label="Scroll down"
      >
        <ChevronDown className="size-7" />
      </motion.a>
    </section>
  );
}
