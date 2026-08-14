import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock, Search, Sparkles, ShieldCheck, Cpu, ScanFace, Building2, Stethoscope, Phone, MessageCircle } from "lucide-react";
import { buildSEO, CLINIC_JSON_LD } from "@/lib/seo";
import { BUSINESS } from "@/constants/business";
import { TREATMENT_CATEGORIES, type Treatment } from "@/constants/treatments";
import techLaserAsset from "@/assets/tech-laser.jpg.asset.json";
import treatmentRoomAsset from "@/assets/clinic-treatment-room.jpg.asset.json";
import skinAnalysisAsset from "@/assets/skin-analysis-consultation.png.asset.json";

const skinAnalysisImg = skinAnalysisAsset.url;
const techLaser = techLaserAsset.url;
const treatmentRoom = treatmentRoomAsset.url;

const TREATMENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Treatments & Services — Bare & Beyond Aesthetics",
  about: TREATMENT_CATEGORIES.map((c) => ({
    "@type": "MedicalProcedure",
    name: c.title,
    description: c.intro,
  })),
};

export const Route = createFileRoute("/treatments")({
  head: () =>
    buildSEO({
      title: "Advanced Skin, Hair & Aesthetic Treatments in Nerul, Navi Mumbai",
      description:
        "Explore the full range of doctor-led skin, hair, laser, injectable, wellness and body contouring treatments at Bare & Beyond Aesthetics — personalized, evidence-based, and delivered with clinical precision.",
      path: "/treatments",
      image: skinAnalysisImg,
      jsonLd: [CLINIC_JSON_LD, TREATMENT_SCHEMA],
    }),
  component: TreatmentsPage,
});

const QUICK_TAGS = ["Acne", "Pigmentation", "Hair", "Botox", "Laser", "Facial", "Wellness", "Injectables", "Body Contouring", "Bridal"];

const WHY_ITEMS = [
  { icon: ShieldCheck, title: "Science-backed protocols", desc: "Evidence-first treatment planning, no guesswork." },
  { icon: Stethoscope, title: "Experienced doctors", desc: "Every plan is written and supervised by qualified physicians." },
  { icon: Cpu, title: "Advanced technology", desc: "USFDA-cleared lasers and AI diagnostic imaging." },
  { icon: Sparkles, title: "Natural results", desc: "Aesthetics that look like you — refined, never overdone." },
  { icon: ScanFace, title: "Personalized care", desc: "Plans built around your skin, goals and lifestyle." },
  { icon: Building2, title: "Modern equipment", desc: "Medical-grade platforms serviced to hospital standards." },
];

const JOURNEY = [
  { n: "01", t: "Consultation", d: "Detailed conversation about goals, history and expectations." },
  { n: "02", t: "Clinical Assessment", d: "AI-assisted skin mapping and physical evaluation." },
  { n: "03", t: "Treatment Planning", d: "Written protocol, timeline and expected outcomes." },
  { n: "04", t: "Procedure", d: "Delivered in medical-grade rooms under supervision." },
  { n: "05", t: "Recovery Guidance", d: "Aftercare instructions and 24/7 clinical support." },
  { n: "06", t: "Follow-up", d: "Scheduled reviews to measure progress and refine care." },
];

const TECH = [
  { icon: ScanFace, title: "AI Skin Analysis", desc: "Multi-spectral imaging maps pores, pigment and hydration.", img: skinAnalysisImg },
  { icon: Cpu, title: "Pico & Diode Lasers", desc: "USFDA-cleared platforms for tone, texture and hair.", img: techLaser },
  { icon: Building2, title: "Clinical Rooms", desc: "Sterile, temperature-controlled treatment environments.", img: treatmentRoom },
];

const FAQS = [
  { q: "How many sessions are needed?", a: "It depends on the treatment and your clinical goals. Most laser and regenerative protocols require 4–8 sessions; facials and peels are typically monthly. Your doctor will share an exact plan after consultation." },
  { q: "Is there downtime?", a: "Most facials, peels and laser sessions have little to no downtime. Injectables, threads and deeper peels may involve 1–5 days of minor recovery. All timelines are shared upfront." },
  { q: "Are treatments painful?", a: "We use numbing creams, cooling systems and modern devices to keep discomfort minimal. Most patients describe treatments as tolerable and quick." },
  { q: "Can men undergo treatments?", a: "Yes. Every treatment at Bare & Beyond is suitable for all genders, and many of our patients are men seeking skin, hair and laser care." },
  { q: "Are consultations compulsory?", a: "Yes. As a medical clinic, we assess suitability, screen for contraindications and only then finalize a treatment plan — your safety comes first." },
  { q: "What precautions should I follow?", a: "Avoid active retinoids and sun exposure a few days before laser or peels, stay well hydrated, and follow the personalized aftercare plan your doctor provides." },
];

function TreatmentsPage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>(TREATMENT_CATEGORIES[0].id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TREATMENT_CATEGORIES;
    return TREATMENT_CATEGORIES.map((c) => {
      const matchCat = c.title.toLowerCase().includes(q) || c.short.toLowerCase().includes(q);
      const treatments = c.treatments.filter((t) =>
        t.name.toLowerCase().includes(q) || (t.desc?.toLowerCase().includes(q) ?? false),
      );
      const groups = (c.groups ?? []).map((g) => ({
        ...g,
        treatments: g.treatments.filter((t) =>
          t.name.toLowerCase().includes(q) || (t.desc?.toLowerCase().includes(q) ?? false),
        ),
      })).filter((g) => g.treatments.length > 0);
      if (matchCat) return c;
      if (treatments.length === 0 && groups.length === 0) return null;
      return { ...c, treatments, groups };
    }).filter((c): c is typeof TREATMENT_CATEGORIES[number] => c !== null);
  }, [query]);

  useEffect(() => {
    const ids = TREATMENT_CATEGORIES.map((c) => c.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveCat(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const waLink = (msg: string) =>
    `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`;

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 bg-background overflow-hidden">
        <div className="container-luxe text-center max-w-3xl mx-auto">
          <span className="text-eyebrow">Treatments & Services</span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] text-ink leading-[1.05]">
            Advanced Skin, Hair &amp; Aesthetic Treatments
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Personalized treatments designed by experienced aesthetic professionals using advanced technology and evidence-based clinical protocols.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={waLink("I would like to book a consultation at Bare & Beyond.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-ink text-white px-5 py-3 text-sm font-medium hover:bg-ink/90 transition-colors"
            >
              Book Consultation <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={`tel:${BUSINESS.phonesRaw[0]}`}
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-ink hover:border-ink transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden /> Call Clinic
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto border-t border-border pt-6">
            <div className="text-left">
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Treatments</dt>
              <dd className="mt-2 text-2xl font-medium text-ink">80+</dd>
            </div>
            <div className="text-left">
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Categories</dt>
              <dd className="mt-2 text-2xl font-medium text-ink">10</dd>
            </div>
            <div className="text-left">
              <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Doctor-led</dt>
              <dd className="mt-2 text-2xl font-medium text-ink">100%</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SEARCH */}
      <section className="bg-surface border-y border-border">
        <div className="container-luxe py-10">
          <div className="max-w-3xl mx-auto">
            <label htmlFor="treatment-search" className="text-eyebrow">Find a Treatment</label>
            <div className="mt-3 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden />
              <input
                id="treatment-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search: acne, pigmentation, laser, botox, hair…"
                className="w-full rounded-md border border-border bg-background pl-11 pr-4 py-3.5 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:border-ink transition-colors"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {QUICK_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setQuery(tag)}
                  className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-ink hover:border-ink transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STICKY CATEGORY NAV */}
      <div className="sticky top-20 md:top-24 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="container-luxe">
          <nav aria-label="Treatment categories" className="flex gap-1 overflow-x-auto py-3 -mx-2 px-2 scrollbar-none">
            {TREATMENT_CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => scrollTo(c.id)}
                className={
                  "whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-colors " +
                  (activeCat === c.id
                    ? "bg-ink text-white"
                    : "text-ink/70 hover:text-ink hover:bg-surface")
                }
              >
                {c.short}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="bg-background">
        {filtered.length === 0 ? (
          <div className="container-luxe py-24 text-center">
            <p className="text-muted-foreground">No treatments matched “{query}”. Try a different keyword.</p>
          </div>
        ) : (
          filtered.map((c, idx) => (
            <CategorySection key={c.id} category={c} reverse={idx % 2 === 1} waLink={waLink} />
          ))
        )}
      </div>

      {/* WHY CHOOSE */}
      <section className="section-luxe bg-surface">
        <div className="container-luxe">
          <div className="max-w-2xl">
            <span className="text-eyebrow">Why Choose Our Treatments</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-medium tracking-[-0.02em] text-ink">
              A medical clinic — not a spa.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 border-t border-border pt-10">
            {WHY_ITEMS.map((w) => (
              <div key={w.title} className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-md border border-border bg-background grid place-items-center text-ink">
                  <w.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </div>
                <div>
                  <h3 className="text-base font-medium text-ink">{w.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="section-luxe bg-ink text-white">
        <div className="container-luxe">
          <div className="max-w-2xl">
            <span className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-accent">Advanced Technology</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-medium tracking-[-0.02em] text-white">
              Clinical platforms behind every treatment.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
            {TECH.map((t) => (
              <article key={t.title} className="rounded-md overflow-hidden bg-white/[0.04] ring-1 ring-white/10">
                <div className="aspect-[4/3] overflow-hidden bg-white/5">
                  <img src={t.img} alt={t.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-accent">
                    <t.icon className="h-3.5 w-3.5" aria-hidden />
                  </div>
                  <h3 className="mt-3 text-lg font-medium">{t.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{t.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT JOURNEY */}
      <section className="section-luxe bg-background">
        <div className="container-luxe">
          <div className="max-w-2xl">
            <span className="text-eyebrow">Patient Journey</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-medium tracking-[-0.02em] text-ink">
              A clear, clinical process — from first visit to follow-up.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 border-t border-border pt-12">
            {JOURNEY.map((s) => (
              <div key={s.n}>
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-medium tracking-[0.2em] text-accent tabular-nums">{s.n}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mt-4 text-lg md:text-xl font-medium text-ink">{s.t}</h3>
                <p className="mt-2 text-sm md:text-[15px] text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-luxe bg-surface">
        <div className="container-luxe grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="text-eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-ink">
              Answered by our doctors.
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              Common questions about treatments, sessions and recovery. For anything else, our clinical team is a message away.
            </p>
          </div>
          <div className="lg:col-span-7 divide-y divide-border border-y border-border">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <span className="text-base md:text-lg font-medium text-ink">{f.q}</span>
                  <span className="mt-1 text-ink/50 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm md:text-[15px] text-muted-foreground leading-relaxed pr-8">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-luxe bg-ink text-white">
        <div className="container-luxe grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-accent">Ready When You Are</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] leading-[1.05]">
              Start Your Personalized Treatment Journey
            </h2>
            <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed max-w-xl">
              Speak with our clinical team, share your goals and receive a written, doctor-led plan tailored to you.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <a
              href={waLink("I would like to book a consultation at Bare & Beyond.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between gap-2 rounded-md bg-white text-ink px-5 py-4 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Book Consultation <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={`tel:${BUSINESS.phonesRaw[0]}`}
              className="inline-flex items-center justify-between gap-2 rounded-md border border-white/20 px-5 py-4 text-sm font-medium hover:border-white/50 transition-colors"
            >
              Call Clinic <Phone className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={waLink("Hi, I have a question about treatments.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between gap-2 rounded-md border border-white/20 px-5 py-4 text-sm font-medium hover:border-white/50 transition-colors"
            >
              WhatsApp <MessageCircle className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function CategorySection({
  category,
  reverse,
  waLink,
}: {
  category: (typeof TREATMENT_CATEGORIES)[number];
  reverse: boolean;
  waLink: (msg: string) => string;
}) {
  return (
    <section id={category.id} className="section-luxe scroll-mt-40 border-b border-border">
      <div className="container-luxe">
        <div className={"grid lg:grid-cols-12 gap-10 lg:gap-16 items-start " + (reverse ? "lg:[&>*:first-child]:order-2" : "")}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-40"
          >
            <span className="text-eyebrow">Category</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.02em] text-ink leading-tight">
              {category.title}
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">{category.intro}</p>
            {category.image && (
              <div className="mt-8 overflow-hidden rounded-md ring-1 ring-border">
                <img src={category.image} alt={category.title} loading="lazy" className="w-full h-auto object-cover aspect-[4/3]" />
              </div>
            )}
          </motion.div>

          <div className="lg:col-span-7 space-y-10">
            {category.treatments.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {category.treatments.map((t) => (
                  <TreatmentCard key={t.name} t={t} waLink={waLink} />
                ))}
              </div>
            )}
            {category.groups?.map((g) => (
              <div key={g.title}>
                <h3 className="text-eyebrow">{g.title}</h3>
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  {g.treatments.map((t) => (
                    <TreatmentCard key={g.title + t.name} t={t} waLink={waLink} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TreatmentCard({ t, waLink }: { t: Treatment; waLink: (msg: string) => string }) {
  return (
    <article className="group rounded-lg border border-border bg-background p-5 flex flex-col transition-colors hover:border-ink/40">
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-base font-medium text-ink leading-snug">{t.name}</h4>
        {t.from && (
          <span className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="block text-right text-ink text-sm font-medium tracking-normal normal-case">{t.from}</span>
          </span>
        )}
      </div>
      {t.desc && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>}
      <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {t.duration && (
          <div className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" aria-hidden />
            <span>{t.duration}</span>
          </div>
        )}
        {t.downtime && (
          <div>
            <span className="text-ink/50">Downtime · </span>
            <span>{t.downtime}</span>
          </div>
        )}
        {t.idealFor && (
          <div>
            <span className="text-ink/50">Ideal · </span>
            <span>{t.idealFor}</span>
          </div>
        )}
      </dl>
      <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-border">
        <a
          href={waLink(`I want to book a consultation for ${t.name}.`)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-ink text-white px-3 py-1.5 text-xs font-medium hover:bg-ink/90 transition-colors"
        >
          Book Consultation
        </a>
        <a
          href={waLink(`I want to learn more about ${t.name}.`)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-ink hover:border-ink transition-colors"
        >
          Learn More <ArrowUpRight className="h-3 w-3" aria-hidden />
        </a>
      </div>
    </article>
  );
}
