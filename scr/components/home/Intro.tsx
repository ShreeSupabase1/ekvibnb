import { motion } from "framer-motion";
import { ArrowRight, Compass, Target } from "lucide-react";
import clinicImgAsset from "@/assets/clinic-interior.jpg.asset.json";

const clinicImg = clinicImgAsset.url;

const mission = [
  "Advanced skin, laser, hair and wellness treatments",
  "Safe and ethical aesthetic procedures",
  "Natural-looking rejuvenation and enhancement",
  "Honest consultations and realistic treatment planning",
  "A warm, professional, judgment-free experience",
  "A holistic approach to beauty, confidence and wellness",
];

export function Intro() {
  return (
    <section id="about" className="section-luxe bg-background">
      <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <span className="text-eyebrow">About Bare &amp; Beyond</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-medium tracking-[-0.02em] text-ink leading-[1.1]">
            Where science-backed aesthetics meets wellness-focused care.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
            Bare &amp; Beyond is a premium destination for skin, hair, laser, aesthetics, beauty
            and wellness in Nerul, Navi Mumbai. Founded with a vision to redefine confidence
            and self-care, the clinic blends advanced aesthetic science with personalized,
            wellness-focused care.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We believe beauty isn&apos;t about changing who you are — it&apos;s about helping you feel
            confident, refreshed and comfortable in your own skin. Every treatment is designed
            with a patient-first approach and focuses on natural outcomes, personalized planning
            and long-term skin and wellness health.
          </p>
        </motion.div>
      </div>

      {/* Vision & Mission */}
      <div className="container-luxe mt-16 md:mt-24 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 rounded-md border border-border bg-surface p-8 md:p-10"
        >
          <div className="flex items-center gap-2 text-eyebrow">
            <Compass className="h-3.5 w-3.5 text-accent" aria-hidden />
            Our Vision
          </div>
          <p className="mt-5 text-base md:text-[17px] text-ink/85 leading-[1.75]">
            To be a trusted destination for skin, beauty, hair, laser, aesthetics and wellness
            care — where science-backed treatments meet personalized attention, and where every
            individual feels empowered, confident and cared for through ethical aesthetic
            practices and holistic wellness support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-2 text-eyebrow">
            <Target className="h-3.5 w-3.5 text-accent" aria-hidden />
            Our Mission
          </div>
          <p className="mt-5 text-base md:text-[17px] text-muted-foreground leading-relaxed">
            Our mission is to deliver:
          </p>
          <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {mission.map((m) => (
              <li key={m} className="flex items-start gap-2.5 text-sm md:text-[15px] text-ink/85">
                <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" aria-hidden />
                <span>{m}</span>
              </li>
            ))}
          </ul>

          <a
            href="/doctors"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink mt-8"
          >
            <span className="border-b border-accent/40 pb-0.5 group-hover:border-accent transition-colors">
              Meet Our Experts
            </span>
            <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
        </motion.div>
      </div>

      {/* Full-bleed strip image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="container-luxe mt-16 md:mt-24"
      >
        <div className="relative overflow-hidden rounded-md ring-1 ring-border aspect-[21/9]">
          <img
            src={clinicImg}
            alt="Interior of Bare & Beyond Aesthetics clinic, Nerul"
            width={1400}
            height={1000}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/80">
              Nerul · Navi Mumbai
            </p>
            <p className="mt-2 text-2xl md:text-3xl font-medium tracking-tight">
              A premium clinic experience.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
