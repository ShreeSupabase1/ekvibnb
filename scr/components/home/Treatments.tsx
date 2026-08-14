import { motion } from "framer-motion";
import { ArrowUpRight, Droplets, Scissors, Zap, Syringe, HeartPulse, Waves, Flower2, Sparkles } from "lucide-react";
import skinImgAsset from "@/assets/skin-analysis-consultation.png.asset.json";

const skinImg = skinImgAsset.url;

const categories = [
  { icon: Droplets, title: "Skin & Facial Treatments", desc: "Signature medi-facials, AI-based skin therapies and advanced chemical peels." },
  { icon: Zap, title: "Advanced Laser Treatments", desc: "Pico laser for pigmentation & tattoo removal, diode laser hair reduction." },
  { icon: Scissors, title: "Hair & Scalp Treatments", desc: "GFC, hair boosters, scalp revival and clinical hair rejuvenation." },
  { icon: Sparkles, title: "Skin Regeneration & Bioregenerator", desc: "Under-eye, face, neck and hand rejuvenation with collagen support." },
  { icon: HeartPulse, title: "Revive & Vitamin Therapies", desc: "Hydration, glow and anti-fatigue vitamin-based wellness support." },
  { icon: Syringe, title: "Injectables & Advanced Aesthetics", desc: "Physician-delivered Botulinum toxin, dermal fillers and thread lifts." },
  { icon: Waves, title: "Wellness & Lifestyle Care", desc: "Nutrition, weight management, PCOS and metabolic wellness guidance." },
  { icon: Flower2, title: "Bridal & Transformation Planning", desc: "Personalized skin, hair, laser and wellness pre-bridal programmes." },
];

export function Treatments() {
  return (
    <section id="treatments" className="section-luxe bg-background">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Editorial image + eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <span className="text-eyebrow">Treatments</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-medium tracking-[-0.02em] text-ink">
              Comprehensive aesthetic care under one roof.
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-[17px] leading-relaxed">
              Every treatment is chosen for one reason — measurable clinical results with
              natural-looking outcomes.
            </p>

            <div className="mt-8 overflow-hidden rounded-md ring-1 ring-border">
              <img
                src={skinImg}
                alt="Clinical skin treatment at Bare & Beyond Aesthetics"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </motion.div>

          {/* Grouped list */}
          <div className="lg:col-span-7 divide-y divide-border border-y border-border">
            {categories.map((c, i) => (
              <motion.a
                key={c.title}
                href="#contact"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                className="group flex items-center gap-6 py-6 md:py-7"
              >
                <div className="h-11 w-11 shrink-0 rounded-md border border-border bg-surface grid place-items-center text-ink group-hover:border-ink transition-colors">
                  <c.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-medium text-ink">{c.title}</h3>
                  <p className="mt-1 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                    {c.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.16em] uppercase text-ink/70 group-hover:text-accent transition-colors shrink-0">
                  Learn More
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
