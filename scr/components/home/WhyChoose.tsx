import { motion } from "framer-motion";
import {
  Stethoscope,
  FlaskConical,
  Zap,
  Building2,
  UserCog,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const points = [
  { icon: UserCog, title: "Personalized Treatment Planning", desc: "Every plan is written for one patient — you." },
  { icon: FlaskConical, title: "Advanced Technology & Protocols", desc: "Evidence-first aesthetic protocols and cleared devices." },
  { icon: Stethoscope, title: "Experienced Doctors", desc: "Led by trained physicians and aesthetic professionals." },
  { icon: ShieldCheck, title: "Ethical & Safety-Focused", desc: "Honest counsel, full consent and clinical protocols." },
  { icon: Sparkles, title: "Natural-Looking Results", desc: "Enhancement that never looks 'done'." },
  { icon: HeartHandshake, title: "Holistic Wellness Integration", desc: "Aesthetics supported by wellness and lifestyle care." },
  { icon: Building2, title: "Premium Clinic Experience", desc: "Comfortable, private and medical-grade rooms." },
  { icon: Zap, title: "Confidence & Preventive Care", desc: "Long-term skin and wellness health, not quick fixes." },
];

export function WhyChoose() {
  return (
    <section className="section-luxe bg-background">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <span className="text-eyebrow">Why Choose Bare &amp; Beyond</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-medium tracking-[-0.02em] text-ink">
            Built on medical expertise, delivered with care.
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-[17px] leading-relaxed max-w-xl">
            Eight quiet standards that shape every consultation, every treatment and every
            follow-up at Bare &amp; Beyond.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 border-t border-border pt-14">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            >
              <p.icon className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-5 text-base md:text-lg font-medium text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
