import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import crest from "@/assets/crest.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Departments",
    href: "#programs",
    children: [
      "Computer Science",
      "Mechanical",
      "Civil",
      "Electrical",
      "AI & Data Science",
      "Electronics & Communication",
    ],
  },
  { label: "Campus", href: "#campus" },
  { label: "Research", href: "#research" },
  { label: "Placements", href: "#placements" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-dark py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        <a href="#home" className="flex items-center gap-4 group">
          <div className="relative">
            <img src={crest} alt="Royal College Crest" width={48} height={48} className="drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 rounded-full bg-[var(--gold)]/10 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg sm:text-xl font-bold tracking-tight text-gold-gradient">Royal College</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/60 font-light">of Engineering</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="relative inline-flex items-center gap-1.5 px-5 py-2 text-[13px] font-medium tracking-wide text-white/80 hover:text-white transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown className="size-3.5 opacity-60" />}
                <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gold-gradient transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              {item.children && (
                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 translate-y-2 rounded-xl glass-dark p-2 opacity-0 shadow-royal transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <a key={c} href="#programs" className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-[var(--gold-light)]">
                      {c}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href="#admission"
            className="magnetic-btn relative inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-[var(--royal-deep)] shadow-gold animate-glow"
          >
            <GraduationCap className="size-4" />
            Apply Now
          </a>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="lg:hidden text-white p-2" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden glass-dark overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((i) => (
                <a key={i.label} href={i.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-white/85 hover:bg-white/5">
                  {i.label}
                </a>
              ))}
              <a href="#admission" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-gold-gradient px-5 py-3 font-semibold text-[var(--royal-deep)]">
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
