import { Reveal } from "./Reveal";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

function Field({ label, type = "text", textarea }: { label: string; type?: string; textarea?: boolean }) {
  const [v, setV] = useState("");
  const Comp: any = textarea ? "textarea" : "input";
  return (
    <label className="group relative block">
      <Comp
        type={type}
        rows={textarea ? 4 : undefined}
        value={v}
        onChange={(e: any) => setV(e.target.value)}
        className="peer w-full resize-none rounded-xl border border-border bg-card px-4 pt-6 pb-2 text-sm outline-none transition-all focus:border-[var(--gold)]"
      />
      <span className={`pointer-events-none absolute left-4 transition-all ${v ? "top-1.5 text-xs text-[var(--gold-deep)]" : "top-4 text-sm text-muted-foreground"} peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[var(--gold-deep)]`}>
        {label}
      </span>
    </label>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-[var(--gold-deep)] dark:text-[var(--gold)]">Contact</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-[var(--royal)] dark:text-foreground">
            Let's <span className="text-gold-gradient">Connect</span>
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4 rounded-2xl glass p-6">
              {[
                { i: MapPin, t: "Royal Quadrangle, College Road, Heritage Hills 110001" },
                { i: Phone, t: "+1 (800) 555-ROYAL" },
                { i: Mail, t: "admissions@royalcollege.edu" },
              ].map((it, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-gold-gradient text-[var(--royal-deep)]">
                    <it.i className="size-5" />
                  </div>
                  <p className="pt-2 text-sm">{it.t}</p>
                </div>
              ))}
              <div className="overflow-hidden rounded-2xl gold-border">
                <iframe
                  title="Campus map"
                  loading="lazy"
                  className="h-72 w-full border-0"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.18%2C51.49%2C-0.10%2C51.52&layer=mapnik"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 rounded-2xl glass p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" />
                <Field label="Email Address" type="email" />
              </div>
              <Field label="Subject" />
              <Field label="Your Message" textarea />
              <button className="magnetic-btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-gradient px-6 py-3.5 font-semibold text-[var(--royal-deep)] shadow-gold animate-glow">
                <Send className="size-4" /> Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
