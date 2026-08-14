import { motion } from "framer-motion";
import {
  Droplets,
  ScanFace,
  Layers,
  Zap,
  Sparkles,
  Leaf,
  Syringe,
  Wand2,
  ArrowUpRight,
} from "lucide-react";

const items = [
  { icon: Droplets, title: "Signature Medi Facials", desc: "Bespoke facial programs for glass-skin results." },
  { icon: ScanFace, title: "AI Skin Analysis", desc: "AI-mapped diagnosis before every treatment plan." },
  { icon: Layers, title: "Chemical Peels", desc: "Medical peels for pigmentation, acne and glow." },
  { icon: Zap, title: "Pico Laser", desc: "Latest-gen Pico for tone, texture and tattoo removal." },
  { icon: Sparkles, title: "Laser Hair Reduction", desc: "Painless diode LHR on FDA-cleared platforms." },
  { icon: Leaf, title: "Hair Rejuvenation", desc: "GFC, PRP & scalp therapies for regrowth." },
  { icon: Syringe, title: "Injectables", desc: "Botox, fillers & skin boosters — natural finish." },
  { icon: Wand2, title: "Body Contouring", desc: "Non-invasive fat reduction & body sculpting." },
];

export function Signature() {
  return (
    <section className="section-luxe bg-background">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-eyebrow">Signature Treatments</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink">
              The <span className="italic text-primary">signatures</span> we're known for.
            </h2>
          </motion.div>
          <p className="max-w-sm text-muted-foreground text-sm md:text-base">
            Our most requested treatments — refined across thousands of sessions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href="#treatments"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="group relative bg-background p-7 md:p-8 flex flex-col min-h-[220px] transition-colors hover:bg-ivory"
            >
              <div className="h-12 w-12 rounded-2xl bg-ivory group-hover:bg-primary/10 grid place-items-center text-primary transition-colors">
                <it.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-6 font-serif text-xl text-ink">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{it.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-primary uppercase tracking-[0.2em]">
                Explore
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
