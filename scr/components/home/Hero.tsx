import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MapPin, Sparkles, Award, Microscope, HeartPulse } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import heroImg from "@/assets/hero-founders.jpg.asset.json";

const badges = [
  { icon: Award, label: "UK Board Certified Expertise" },
  { icon: Microscope, label: "Advanced Technology" },
  { icon: ShieldCheck, label: "Ethical Medical Practice" },
  { icon: Sparkles, label: "Natural Results" },
  { icon: HeartPulse, label: "Personalized Treatment Plans" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background border-b border-border">
      <div className="container-luxe relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-center py-16 lg:py-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-ink/80">
              Doctor-Led Medical Aesthetic Clinic
            </span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium tracking-[-0.03em] leading-[1.05] text-ink">
            Advanced skin, hair &amp; aesthetic care.
            <br />
            <span className="text-muted-foreground font-light">Personalized for you.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-[17px] text-muted-foreground leading-[1.7]">
            Science-backed treatments delivered by experienced aesthetic professionals using
            advanced technology and personalized treatment planning.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/book-appointment"
              className="inline-flex items-center gap-2 rounded-md bg-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-ink/90 transition-colors"
            >
              Book Consultation <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="/treatments"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-medium text-ink hover:border-ink transition-colors"
            >
              Explore Treatments
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {badges.map((b) => (
                <div key={b.label} className="inline-flex items-center gap-2 text-[13px] text-ink/80">
                  <b.icon className="h-4 w-4 text-accent" aria-hidden strokeWidth={1.75} />
                  {b.label}
                </div>
              ))}
            </div>
            <div className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden />
              Nerul · Navi Mumbai · India
            </div>
          </div>
        </motion.div>

        {/* Right — clinical portrait */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative overflow-hidden rounded-md ring-1 ring-border bg-surface">
            <img
              src={heroImg.url}
              alt="Dr. Abhishek Sandeep Sharma and Dr. Dhruvi Pandya, founders of Bare & Beyond Aesthetics, Nerul"
              width={1213}
              height={866}
              className="w-full h-auto object-cover aspect-[4/5] md:aspect-[5/6]"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
          </div>
          {/* Clinical stat card */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-background border border-border rounded-md px-5 py-4 shadow-[0_10px_30px_-15px_rgba(15,20,25,0.15)]">
            <div className="flex items-center gap-4">
              <div>
                <div className="text-2xl font-semibold text-ink tabular-nums">12+</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                  Years Clinical Experience
                </div>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="text-2xl font-semibold text-ink tabular-nums">15k+</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-0.5">
                  Treatments Delivered
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
