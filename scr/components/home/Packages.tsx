import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/constants/business";

const packs = [
  { title: "Skin Packages", from: "₹ 29,999", desc: "Medi-facial, peel and skin correction programs.", href: "/treatments#packages" },
  { title: "Hair Packages", from: "₹ 29,999", desc: "GFC, hair rejuvenation and scalp revival plans.", href: "/treatments#packages" },
  { title: "Laser Packages", from: "₹ 29,999", desc: "Face, body and full-body laser hair reduction.", href: "/treatments#packages" },
  { title: "Bridal Packages", from: "₹ 49,999", desc: "Structured bridal glow and beauty planning.", href: "/treatments#packages" },
  { title: "Injectable Packages", from: "₹ 29,999", desc: "Toxin, fillers, threads and skin booster plans.", href: "/treatments#packages" },
  { title: "Wellness Packages", from: "₹ 29,999", desc: "Wellness, inch loss and vitamin revive support.", href: "/treatments#packages" },
];

export function Packages() {
  return (
    <section className="section-luxe bg-surface">
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-eyebrow">Treatment Programs</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
            Structured programs, transparent pricing.
          </h2>
          <p className="mt-5 text-muted-foreground text-base leading-relaxed">
            Multi-session plans built around clinical outcomes — reviewed with your doctor before you commit.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {packs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group rounded-lg border border-border bg-background p-6 md:p-7 flex flex-col transition-colors hover:border-ink/40"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-ink tracking-tight">{p.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-6">
                <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Starting from</div>
                <div className="mt-1 text-2xl font-semibold text-ink tracking-tight">{p.from}</div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-border">
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}?text=I%20want%20to%20learn%20more%20about%20${encodeURIComponent(p.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3.5 py-2 text-xs font-medium text-ink hover:border-ink transition-colors"
                >
                  Ask a Doctor
                </a>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}?text=I%20want%20to%20book%20${encodeURIComponent(p.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-ink text-white px-3.5 py-2 text-xs font-medium hover:bg-ink/90 transition-colors"
                >
                  Book Consultation <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
