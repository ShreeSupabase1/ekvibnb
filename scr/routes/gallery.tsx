import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CalendarCheck,
  Play,
  Star,
  ShieldCheck,
  X,
  ImagePlus,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { buildSEO } from "@/lib/seo";
import { BUSINESS } from "@/constants/business";
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  TRANSFORMATIONS,
  VIDEO_ITEMS,
  TESTIMONIALS,
  type GalleryCategory,
  type GalleryItem,
} from "@/constants/gallery";
import receptionAsset from "@/assets/clinic-reception.jpg.asset.json";
import consultAsset from "@/assets/clinic-consult.jpg.asset.json";
import treatmentRoomAsset from "@/assets/clinic-treatment-room.jpg.asset.json";
import laserRoomAsset from "@/assets/treatment-laser.jpg.asset.json";
import techLaserAsset from "@/assets/tech-laser.jpg.asset.json";
import loungeAsset from "@/assets/clinic-lounge.jpg.asset.json";
import interiorAsset from "@/assets/clinic-interior.jpg.asset.json";
import skinAnalysisAsset from "@/assets/skin-analysis-consultation.png.asset.json";

const reception = receptionAsset.url;
const consult = consultAsset.url;
const treatmentRoom = treatmentRoomAsset.url;
const laserRoom = laserRoomAsset.url;
const techLaser = techLaserAsset.url;
const lounge = loungeAsset.url;
const interior = interiorAsset.url;
const techAI = skinAnalysisAsset.url;

const GALLERY_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: `Gallery — ${BUSINESS.name}`,
  url: "/gallery",
  about: "Clinic environment, advanced technology and patient experience at Bare & Beyond Aesthetics.",
};

export const Route = createFileRoute("/gallery")({
  head: () =>
    buildSEO({
      title: "Clinic, Technology & Patient Experience",
      description:
        "Explore Bare & Beyond Aesthetics — clinic tour, advanced technology, patient transformations and testimonials from our Nerul, Navi Mumbai clinic.",
      path: "/gallery",
      image: reception,
      jsonLd: GALLERY_JSON_LD,
    }),
  component: GalleryPage,
});

const bookHref = "/book-appointment";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="text-eyebrow">{children}</span>;
}

// ---------- HERO ----------
function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface border-b border-border">
      <div className="container-luxe pt-28 md:pt-36 pb-16 md:pb-24 text-center max-w-3xl mx-auto">
        <motion.div {...fadeUp}>
          <Eyebrow>Gallery & Experience</Eyebrow>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink font-semibold">
            Real care. Real experience. <span className="text-accent">Real results.</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Step inside Bare &amp; Beyond Aesthetics — explore our clinical environment, advanced
            technology and the patient journey behind every transformation.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={bookHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-ink/90 transition-colors"
            >
              Book Consultation <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background text-ink px-6 py-3.5 text-sm font-medium hover:border-ink transition-colors"
            >
              View Treatments
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- SECTION 1: CLINIC EXPERIENCE ----------
function ClinicExperience() {
  const rooms = [
    { src: reception, title: "Reception", desc: "A calm, considered welcome — private, quiet and never crowded." },
    { src: lounge, title: "Waiting Lounge", desc: "A private lounge designed for a discreet, unhurried arrival." },
    { src: consult, title: "Consultation Room", desc: "One-to-one consultations with your doctor — no rushed intake." },
    { src: laserRoom, title: "Laser Treatment Room", desc: "Dedicated bay for diode and pico laser protocols." },
    { src: techAI, title: "Skin Analysis Room", desc: "AI-assisted diagnostic analysis for objective, data-led planning." },
    { src: treatmentRoom, title: "Procedure Room", desc: "Sterile procedure suite for facials, peels and injectables." },
    { src: interior, title: "Premium Interiors", desc: "Clinical warmth in every finish — engineered for calm." },
  ];
  return (
    <section className="section-luxe bg-background border-t border-border">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <Eyebrow>Clinic Experience</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
            The clinic behind the care.
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            Every room is designed for privacy, hygiene and clinical precision — no salon
            interiors, no theatrics.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:gap-8 lg:grid-cols-12">
          {rooms.map((r, i) => {
            const spans = [
              "lg:col-span-8 aspect-[16/10]",
              "lg:col-span-4 aspect-[4/5]",
              "lg:col-span-5 aspect-[4/5]",
              "lg:col-span-7 aspect-[16/10]",
              "lg:col-span-7 aspect-[16/10]",
              "lg:col-span-5 aspect-[4/5]",
              "lg:col-span-12 aspect-[21/9]",
            ];
            return (
              <motion.figure
                key={r.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 3) * 0.05 }}
                className={`relative overflow-hidden rounded-lg ring-1 ring-black/5 group ${spans[i]}`}
              >
                <img
                  src={r.src}
                  alt={`${r.title} at Bare & Beyond Aesthetics`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent text-white">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-white/70">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-lg md:text-xl font-medium tracking-tight">{r.title}</div>
                  <p className="mt-1 text-xs md:text-sm text-white/80 max-w-md leading-relaxed">{r.desc}</p>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- SECTION 2: ADVANCED TECHNOLOGY ----------
function Technology() {
  const items = [
    { src: techAI, title: "AI Skin Analysis", desc: "Multi-spectral skin imaging that quantifies pigment, pores, texture and hydration to guide every protocol." },
    { src: techLaser, title: "Pico Laser Platform", desc: "Ultra-short pulses for pigmentation, tattoo removal and skin resurfacing — with reduced downtime." },
    { src: laserRoom, title: "Diode Laser System", desc: "Medical diode platform for long-term hair reduction across all Fitzpatrick skin types." },
    { src: treatmentRoom, title: "Procedure Room", desc: "Sterile, protocol-driven environment for injectables, peels and threads." },
    { src: consult, title: "Clinical Equipment", desc: "Cleared devices, single-use consumables and traceable protocols on every visit." },
  ];
  return (
    <section className="section-luxe bg-surface border-t border-border">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <Eyebrow>Advanced Technology</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
              Technology that supports safer, more personal care.
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              Every device we use is clinically cleared and operated by qualified medical
              professionals. Technology is a tool — the doctor is still the decision-maker.
            </p>
          </motion.div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((it, i) => (
              <motion.article
                key={it.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 3) * 0.05 }}
                className={`group ${i === 0 ? "sm:col-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden rounded-lg ring-1 ring-black/5 ${i === 0 ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
                  <img
                    src={it.src}
                    alt={it.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 text-base md:text-lg font-medium tracking-tight text-ink">{it.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SECTION 3: TRANSFORMATIONS ----------
function BeforeAfterPlaceholder({ label }: { label: "Before" | "After" }) {
  return (
    <div className="relative aspect-square bg-surface rounded-md overflow-hidden ring-1 ring-border">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground gap-2">
        <ImagePlus className="h-6 w-6" strokeWidth={1.5} aria-hidden />
        <span className="text-[10px] uppercase tracking-[0.24em]">{label}</span>
        <span className="text-[10px] text-muted-foreground/70">Real patient image · uploaded via admin</span>
      </div>
      <div className="absolute top-2 left-2 text-[9px] uppercase tracking-[0.2em] bg-ink/85 text-white px-2 py-0.5 rounded">
        {label}
      </div>
    </div>
  );
}

function Transformations() {
  return (
    <section className="section-luxe bg-background border-t border-border">
      <div className="container-luxe">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Patient Transformation</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
              Real outcomes, doctor-led protocols.
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              We publish transformations only with written patient consent. Placeholders below
              represent the format used once verified images are uploaded through our admin panel.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground border border-border rounded-full px-3 py-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden />
            Consent-verified
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {TRANSFORMATIONS.map((t, i) => (
            <motion.article
              key={t.id}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (i % 3) * 0.05 }}
              className="rounded-lg border border-border bg-background p-5 flex flex-col"
            >
              <div className="grid grid-cols-2 gap-3">
                <BeforeAfterPlaceholder label="Before" />
                <BeforeAfterPlaceholder label="After" />
              </div>
              <div className="mt-5">
                <div className="text-[10px] uppercase tracking-[0.24em] text-accent font-semibold">
                  {t.treatment}
                </div>
                <p className="mt-3 text-sm text-ink/85 leading-relaxed">{t.summary}</p>
              </div>
              <dl className="mt-5 grid grid-cols-3 gap-3 text-[11px]">
                <div className="border-t border-border pt-3">
                  <dt className="text-muted-foreground">Sessions</dt>
                  <dd className="mt-1 text-ink font-medium">{t.sessions}</dd>
                </div>
                <div className="border-t border-border pt-3">
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd className="mt-1 text-ink font-medium">{t.duration}</dd>
                </div>
                <div className="border-t border-border pt-3">
                  <dt className="text-muted-foreground">Doctor</dt>
                  <dd className="mt-1 text-ink font-medium leading-snug">{t.doctor.split(" ").slice(0, 2).join(" ")}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- SECTION 4: VIDEO GALLERY ----------
function VideoGallery() {
  return (
    <section className="section-luxe bg-surface border-t border-border">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <Eyebrow>Video Gallery</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
            See the clinic and the care in motion.
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            Clinic tours, doctor conversations, treatment walk-throughs and patient testimonials —
            YouTube-ready and admin-managed.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEO_ITEMS.map((v, i) => (
            <motion.article
              key={v.id}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: (i % 3) * 0.05 }}
              className="group rounded-lg overflow-hidden border border-border bg-background"
            >
              <div className="relative aspect-video bg-ink/90 overflow-hidden">
                {v.youtubeId ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-14 w-14 rounded-full bg-white/95 text-ink flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-5 w-5 ml-0.5" fill="currentColor" aria-hidden />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.22em] bg-white/10 text-white px-2 py-0.5 rounded backdrop-blur">
                      {v.category}
                    </div>
                  </>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-base md:text-lg font-medium tracking-tight text-ink">{v.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- SECTION 5: TESTIMONIALS ----------
function Testimonials() {
  return (
    <section className="section-luxe bg-background border-t border-border">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <Eyebrow>Patient Testimonials</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
              What patients say about our care.
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              Verified reviews from Google, written testimonials and video stories — all
              admin-managed and continually updated.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-3">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" aria-hidden />
                ))}
              </div>
              <div className="text-sm text-ink">
                <span className="font-semibold">4.9</span>
                <span className="text-muted-foreground"> · Verified patient rating</span>
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {TESTIMONIALS.map((r, i) => (
              <motion.figure
                key={r.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 4) * 0.04 }}
                className="rounded-lg border border-border bg-background p-5 flex flex-col"
              >
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5" fill="currentColor" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm text-ink/85 leading-relaxed">
                  “{r.review}”
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-surface ring-1 ring-border flex items-center justify-center text-[11px] font-medium text-ink">
                    {r.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-ink">{r.name}</div>
                    <div className="text-[11px] text-muted-foreground truncate">{r.treatment}</div>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full px-2 py-0.5">
                    {r.source}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SECTION 6: PATIENT JOURNEY ----------
function Journey() {
  const steps = [
    { t: "Consultation", d: "Understanding your concerns, history and goals." },
    { t: "Skin Analysis", d: "AI-assisted diagnostic evaluation of your skin and scalp." },
    { t: "Treatment Planning", d: "A written, personalised protocol reviewed with you." },
    { t: "Procedure", d: "Performed by qualified medical professionals using cleared devices." },
    { t: "Follow-up", d: "Structured reviews to track outcomes and adjust protocols." },
    { t: "Long-term Care", d: "Maintenance plans that protect your long-term skin health." },
  ];
  return (
    <section className="section-luxe bg-surface border-t border-border">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <Eyebrow>Patient Journey</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
            A structured six-step clinical pathway.
          </h2>
        </div>
        <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {steps.map((s, i) => (
            <motion.li
              key={s.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="border-t border-border pt-5"
            >
              <div className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-accent tabular-nums">
                {String(i + 1).padStart(2, "0")}
                <span className="h-px w-8 bg-border" />
              </div>
              <h3 className="mt-4 text-lg md:text-xl text-ink font-medium tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{s.d}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ---------- SECTION 7: WHY PATIENTS TRUST US ----------
function WhyTrust() {
  const points = [
    "Experienced Doctors",
    "Advanced Technology",
    "Personalized Care",
    "Ethical Medical Practice",
    "Natural Results",
    "Premium Clinic",
    "Modern Equipment",
    "Evidence-based Treatments",
  ];
  return (
    <section className="section-luxe bg-background border-t border-border">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <Eyebrow>Why Patients Trust Us</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
              Clinical standards, without compromise.
            </h2>
          </motion.div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {points.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className="flex items-start gap-3 py-2 border-b border-border"
              >
                <Sparkles className="h-4 w-4 text-accent mt-1 shrink-0" strokeWidth={1.75} aria-hidden />
                <span className="text-sm md:text-base text-ink">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SECTION 8: FILTERABLE PHOTO GALLERY ----------
const PAGE_SIZE = 9;

function PhotoGallery() {
  const [category, setCategory] = useState<GalleryCategory | "all">("all");
  const [page, setPage] = useState(1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const rows = GALLERY_ITEMS.filter((g) => g.visible).sort((a, b) => a.displayOrder - b.displayOrder);
    return category === "all" ? rows : rows.filter((r) => r.category === category);
  }, [category]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const active: GalleryItem | null = openIndex != null ? filtered[openIndex] ?? null : null;

  return (
    <section className="section-luxe bg-surface border-t border-border">
      <div className="container-luxe">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>Photo Gallery</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
              Browse the clinic, our team and our care.
            </h2>
          </div>
          <div className="text-xs text-muted-foreground tabular-nums">
            {filtered.length} photo{filtered.length === 1 ? "" : "s"}
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((c) => {
            const isActive = category === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => {
                  setCategory(c.key);
                  setPage(1);
                }}
                className={`inline-flex items-center rounded-full border px-4 py-1.5 text-xs transition-colors ${
                  isActive
                    ? "bg-ink text-white border-ink"
                    : "border-border bg-background text-ink hover:border-ink"
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {paged.map((g, i) => (
            <motion.button
              key={g.id}
              type="button"
              onClick={() => setOpenIndex((currentPage - 1) * PAGE_SIZE + i)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.04 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg ring-1 ring-black/5 bg-background text-left"
              aria-label={`Open ${g.title}`}
            >
              <img
                src={g.image}
                alt={g.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="text-[9px] uppercase tracking-[0.22em] text-white/70">
                  {GALLERY_CATEGORIES.find((c) => c.key === g.category)?.label}
                </div>
                <div className="mt-1 text-sm md:text-base font-medium tracking-tight">{g.title}</div>
              </div>
            </motion.button>
          ))}
          {paged.length === 0 && (
            <div className="col-span-full text-center text-sm text-muted-foreground py-16 border border-dashed border-border rounded-lg">
              No photos in this category yet — check back soon.
            </div>
          )}
        </div>

        {/* Pagination */}
        {pageCount > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-2 text-xs text-ink disabled:opacity-40"
            >
              <ChevronLeft className="h-3.5 w-3.5" aria-hidden /> Prev
            </button>
            {Array.from({ length: pageCount }).map((_, i) => {
              const n = i + 1;
              return (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={`h-8 min-w-8 px-3 rounded-md text-xs tabular-nums transition-colors ${
                    n === currentPage ? "bg-ink text-white" : "border border-border bg-background text-ink hover:border-ink"
                  }`}
                >
                  {n}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              disabled={currentPage === pageCount}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-2 text-xs text-ink disabled:opacity-40"
            >
              Next <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            </button>
          </div>
        )}

        {/* Lightbox */}
        <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
          <DialogContent className="max-w-5xl p-0 overflow-hidden bg-ink border-ink">
            {active && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center backdrop-blur"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
                {openIndex !== null && openIndex > 0 && (
                  <button
                    type="button"
                    onClick={() => setOpenIndex((idx) => (idx! > 0 ? idx! - 1 : idx))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center backdrop-blur"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden />
                  </button>
                )}
                {openIndex !== null && openIndex < filtered.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setOpenIndex((idx) => (idx! < filtered.length - 1 ? idx! + 1 : idx))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center backdrop-blur"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" aria-hidden />
                  </button>
                )}
                <img
                  src={active.image}
                  alt={active.alt}
                  className="w-full max-h-[80vh] object-contain bg-black"
                />
                <div className="p-5 md:p-6 text-white">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-white/60">
                    {GALLERY_CATEGORIES.find((c) => c.key === active.category)?.label}
                  </div>
                  <div className="mt-1 text-lg md:text-xl font-medium tracking-tight">{active.title}</div>
                  <p className="mt-1.5 text-sm text-white/75 max-w-2xl leading-relaxed">{active.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

// ---------- SECTION 9: FINAL CTA ----------
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white border-t border-ink">
      <div className="container-luxe py-20 md:py-28 text-center">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          <span className="text-[10px] tracking-[0.28em] uppercase text-accent font-semibold">
            Visit Bare &amp; Beyond
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-white font-semibold">
            Visit Bare &amp; Beyond Aesthetics.
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
            Schedule a consultation and experience premium aesthetic care designed around your
            individual needs.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={bookHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white text-ink px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden /> Book Consultation
            </a>
            <a
              href={`tel:${BUSINESS.phonesRaw[0]}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 text-white px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden /> Call Clinic
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] text-white px-6 py-3.5 text-sm font-medium hover:bg-[#22c25f] transition-colors"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryPage() {
  return (
    <>
      <Hero />
      <ClinicExperience />
      <Technology />
      <Transformations />
      <VideoGallery />
      <Testimonials />
      <Journey />
      <WhyTrust />
      <PhotoGallery />
      <FinalCTA />
    </>
  );
}
