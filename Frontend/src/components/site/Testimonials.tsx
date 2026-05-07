import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  { n: "Aditi Sharma", r: "Class of 2024 · SDE @ Google", q: "The Royal College didn't just teach me engineering — it taught me how to think. The labs, the mentors and the heritage shaped who I am today." },
  { n: "Marcus Lee", r: "Class of 2023 · Tesla", q: "From the cinematic lecture halls to the futuristic robotics lab, every corner of campus inspires excellence. Truly world-class." },
  { n: "Priya Iyer", r: "Class of 2022 · MIT PhD", q: "Faculty here treat you like a future colleague. The research culture is unmatched and prepared me beautifully for my doctoral journey." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);
  return (
    <section className="relative overflow-hidden bg-[var(--royal-deep)] py-24 sm:py-32 text-white">
      <div className="absolute inset-0 grid-circuit opacity-25" />
      <div className="pointer-events-none absolute -top-40 right-1/4 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.35em] text-[var(--gold-light)]">Voices</div>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-bold">
          Stories from our <span className="text-gold-gradient">Royals</span>
        </h2>
        <div className="gold-divider mx-auto mt-6 w-32" />

        <div className="relative mt-12 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-dark mx-auto rounded-3xl p-10 shadow-royal"
            >
              <Quote className="mx-auto size-10 text-[var(--gold)]" />
              <p className="mt-6 font-serif text-xl sm:text-2xl leading-relaxed text-white/90">"{reviews[i].q}"</p>
              <div className="mt-6 flex items-center justify-center gap-1 text-[var(--gold-light)]">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}
              </div>
              <div className="mt-4 font-semibold">{reviews[i].n}</div>
              <div className="text-sm text-white/60">{reviews[i].r}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={prev} className="grid size-11 place-items-center rounded-full glass-dark hover:bg-gold-gradient hover:text-[var(--royal-deep)] transition">
            <ChevronLeft />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, k) => (
              <button key={k} onClick={() => setI(k)} className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gold-gradient" : "w-2 bg-white/30"}`} />
            ))}
          </div>
          <button onClick={next} className="grid size-11 place-items-center rounded-full glass-dark hover:bg-gold-gradient hover:text-[var(--royal-deep)] transition">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
