import { Facebook, Instagram, Linkedin, Twitter, Youtube, Send } from "lucide-react";
import crest from "@/assets/crest.png";

export function Footer() {
  const cols = [
    { t: "Academics", l: ["Undergraduate", "Postgraduate", "Doctoral", "Continuing Ed"] },
    { t: "Campus", l: ["Library", "Research Labs", "Student Life", "Hostels"] },
    { t: "Resources", l: ["Admissions", "Scholarships", "Alumni", "Career Services"] },
  ];
  return (
    <footer className="relative overflow-hidden bg-[var(--royal-deep)] text-white">
      <div className="gold-divider" />
      <div className="absolute inset-0 grid-circuit opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={crest} alt="" width={48} height={48} loading="lazy" />
              <div>
                <div className="font-serif text-xl font-semibold text-gold-gradient">Royal College</div>
                <div className="text-xs uppercase tracking-[0.25em] text-white/60">of Engineering</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-white/70">
              A century of engineering tradition. A future of breakthrough innovation.
              Join the institution that shapes the world's leaders.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-md items-center gap-2 rounded-full glass-dark p-1.5">
              <input
                placeholder="Your email for updates"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-white/50"
              />
              <button className="grid size-10 place-items-center rounded-full bg-gold-gradient text-[var(--royal-deep)]">
                <Send className="size-4" />
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((I, i) => (
                <a key={i} href="#" className="grid size-10 place-items-center rounded-full glass-dark transition hover:bg-gold-gradient hover:text-[var(--royal-deep)]">
                  <I className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.t}>
              <div className="font-serif text-base font-semibold text-[var(--gold-light)]">{c.t}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="transition hover:text-[var(--gold)]">{x}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <div>© {new Date().getFullYear()} Royal College of Engineering. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[var(--gold)]">Privacy</a>
            <a href="#" className="hover:text-[var(--gold)]">Terms</a>
            <a href="#" className="hover:text-[var(--gold)]">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
