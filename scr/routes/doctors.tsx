import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Phone,
  MessageCircle,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";
import { buildSEO } from "@/lib/seo";
import { BUSINESS } from "@/constants/business";
import drAbhishek from "@/assets/doctors/dr-abhishek.jpg.asset.json";
import drDhruvi from "@/assets/doctors/dr-dhruvi.jpg.asset.json";
import drSwethana from "@/assets/doctors/dr-swethana.jpg.asset.json";
import drGaurav from "@/assets/doctors/dr-gaurav.jpg.asset.json";
import karuna from "@/assets/doctors/karuna.jpg.asset.json";

const TEAM_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: BUSINESS.name,
  url: "/doctors",
  employee: [
    {
      "@type": "Physician",
      name: "Dr. Abhishek Sandeep Sharma",
      jobTitle: "Founder, Aesthetic Physician & Clinical Cosmetologist",
      medicalSpecialty: ["Aesthetic Medicine", "Clinical Cosmetology", "Laser"],
    },
    {
      "@type": "Person",
      name: "Dr. Dhruvi Pandya",
      jobTitle: "Co-Founder, Cosmetologist & International Certified Makeup Artist",
    },
    {
      "@type": "Physician",
      name: "Dr. Swethana Devara",
      jobTitle: "Aesthetic Physician (MBBS)",
      medicalSpecialty: ["Injectables", "Facial Rejuvenation"],
    },
    {
      "@type": "Physician",
      name: "Dr. Gaurav Naik",
      jobTitle: "Oral & Maxillofacial Surgeon",
      medicalSpecialty: ["Facial Aesthetics", "Reconstructive Surgery"],
    },
    {
      "@type": "Person",
      name: "Karuna Sharma",
      jobTitle: "UK Board Certified PMU Artist",
    },
  ],
};

export const Route = createFileRoute("/doctors")({
  head: () =>
    buildSEO({
      title: "Meet Our Experts",
      description:
        "Meet the experienced doctors and aesthetic specialists at Bare & Beyond Aesthetics, Nerul, Navi Mumbai. UK Board Certified Clinical Cosmetologist, Aesthetic Physician, Oral & Maxillofacial Surgeon and PMU Expert.",
      path: "/doctors",
      image: drAbhishek.url,
      jsonLd: TEAM_JSON_LD,
    }),
  component: DoctorsPage,
});

const bookHref = (_name: string) => "/book-appointment";

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
          <Eyebrow>Our Medical Team</Eyebrow>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink font-semibold">
            Meet our medical experts.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Our team of experienced aesthetic professionals combines clinical expertise, advanced
            technology and personalized care to help you achieve natural-looking, long-lasting
            results.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={bookHref("the Bare & Beyond team")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-ink/90 transition-colors"
            >
              Book Consultation <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={`tel:${BUSINESS.phonesRaw[0]}`}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background text-ink px-6 py-3.5 text-sm font-medium hover:border-ink transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden /> Contact Clinic
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { k: "5", v: "Specialists" },
              { k: "12+", v: "Years led by" },
              { k: "2000+", v: "Doctors trained" },
            ].map((s) => (
              <div key={s.v} className="border-l border-border pl-4 text-left">
                <dt className="text-2xl md:text-3xl font-semibold text-ink tracking-tight tabular-nums">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- INTRO ----------
function Intro() {
  return (
    <section className="section-luxe bg-background">
      <div className="container-luxe grid lg:grid-cols-12 gap-10 lg:gap-16">
        <motion.div {...fadeUp} className="lg:col-span-5">
          <Eyebrow>Our Philosophy</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
            Experience. Expertise. Ethical care.
          </h2>
        </motion.div>
        <motion.div {...fadeUp} className="lg:col-span-7 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
          <p>
            At Bare &amp; Beyond Aesthetics, every treatment begins with a professional consultation
            and a personalized treatment plan.
          </p>
          <p>
            Our experienced team believes in safe, ethical and science-backed aesthetic medicine
            that enhances natural beauty while prioritizing long-term skin, hair and wellness
            health.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ---------- DOCTOR PROFILE (shared) ----------
interface Profile {
  name: string;
  designation: string;
  role: string;
  image: string;
  summary: string[];
  qualifications?: string[];
  expertise: string[];
  stats?: { k: string; v: string }[];
  cta?: string;
  reverse?: boolean;
  featured?: boolean;
}

function DoctorProfile({ p, index }: { p: Profile; index: number }) {
  const imageBlock = (
    <motion.div {...fadeUp} className="lg:col-span-5">
      <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden ring-1 ring-black/5 bg-surface">
        <img
          src={p.image}
          alt={`${p.name}, ${p.role} at Bare & Beyond Aesthetics`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </motion.div>
  );

  const contentBlock = (
    <motion.div {...fadeUp} className="lg:col-span-7">
      <div className="text-[10px] uppercase tracking-[0.28em] text-accent font-semibold">
        {p.role}
      </div>
      <h3 className="mt-3 text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-ink font-semibold">
        {p.name}
      </h3>
      <p className="mt-3 text-sm md:text-base text-muted-foreground">{p.designation}</p>

      <div className="mt-7 space-y-4 text-base leading-relaxed text-ink/85 max-w-2xl">
        {p.summary.map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </div>

      {p.qualifications && (
        <div className="mt-9">
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">
            Professional Qualifications
          </div>
          <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-2xl">
            {p.qualifications.map((q) => (
              <li key={q} className="flex items-start gap-2.5 text-sm text-ink/85">
                <BadgeCheck className="h-4 w-4 text-accent mt-0.5 shrink-0" strokeWidth={1.75} aria-hidden />
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-9">
        <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-semibold">
          Core Expertise
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.expertise.map((e) => (
            <li
              key={e}
              className="inline-flex items-center rounded-md border border-border bg-background px-3 py-1.5 text-xs text-ink"
            >
              {e}
            </li>
          ))}
        </ul>
      </div>

      {p.stats && (
        <dl className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
          {p.stats.map((s) => (
            <div key={s.v} className="border-l border-border pl-4">
              <dt className="text-xl md:text-2xl font-semibold text-ink tracking-tight tabular-nums">
                {s.k}
              </dt>
              <dd className="mt-1 text-[11px] text-muted-foreground leading-snug">{s.v}</dd>
            </div>
          ))}
        </dl>
      )}

      {p.cta && (
        <div className="mt-10">
          <a
            href={bookHref(p.name)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-ink text-white px-6 py-3 text-sm font-medium hover:bg-ink/90 transition-colors"
          >
            {p.cta} <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      )}
    </motion.div>
  );

  return (
    <section
      className={`section-luxe ${p.featured ? "bg-surface" : "bg-background"} ${
        index > 0 ? "border-t border-border" : ""
      }`}
    >
      <div className="container-luxe">
        {p.featured && (
          <div className="mb-10 md:mb-14 max-w-2xl">
            <Eyebrow>Founder</Eyebrow>
            <h2 className="mt-4 text-2xl md:text-3xl leading-tight tracking-tight text-ink font-semibold">
              Led by an experienced aesthetic physician and second-generation wellness expert.
            </h2>
          </div>
        )}
        <div className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-start ${p.reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
          {imageBlock}
          {contentBlock}
        </div>
      </div>
    </section>
  );
}

// ---------- WHY OUR TEAM ----------
function WhyOurTeam() {
  const points = [
    "UK Board Certified Experts",
    "Experienced Medical Professionals",
    "Personalized Consultation",
    "Advanced Technology",
    "Ethical Practice",
    "Natural-looking Results",
    "Evidence-based Treatments",
    "Patient-first Care",
  ];
  return (
    <section className="section-luxe bg-surface border-t border-border">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div {...fadeUp} className="lg:col-span-5">
            <Eyebrow>Why Our Team</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
              Clinical standards you can trust.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground text-base leading-relaxed">
              Every member of our team practises to the same clinical standard — evidence-first,
              patient-first, results without exaggeration.
            </p>
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
                <ShieldCheck className="h-4 w-4 text-accent mt-1 shrink-0" strokeWidth={1.75} aria-hidden />
                <span className="text-sm md:text-base text-ink">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- APPROACH TIMELINE ----------
function Approach() {
  const steps = [
    { t: "Consultation", d: "Understanding your concerns, medical history and goals." },
    { t: "Clinical Assessment", d: "Diagnostic evaluation and, where relevant, AI-assisted skin analysis." },
    { t: "Personalized Treatment Plan", d: "Written plan reviewed with you before anything begins." },
    { t: "Procedure", d: "Performed by qualified medical professionals using cleared devices." },
    { t: "Recovery Guidance", d: "Clear aftercare instructions and direct clinical support." },
    { t: "Follow-up Care", d: "Structured reviews to track results and adjust protocols." },
  ];
  return (
    <section className="section-luxe bg-background border-t border-border">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
            A structured, six-step clinical pathway.
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
              <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                {s.d}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ---------- FINAL CTA ----------
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="container-luxe py-20 md:py-28 text-center">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          <span className="text-[10px] tracking-[0.28em] uppercase text-accent font-semibold">
            Book With Confidence
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-white font-semibold">
            Meet the experts behind your transformation.
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-lg leading-relaxed">
            Book a consultation with our experienced medical team and receive a personalized
            treatment plan based on your skin, hair and wellness goals.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={bookHref("the Bare & Beyond team")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white text-ink px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden /> Book Appointment
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

// ---------- PROFILES DATA ----------
const founder: Profile = {
  name: "Dr. Abhishek Sandeep Sharma",
  role: "Founder",
  designation: "Founder · Wellness Expert · Clinical Cosmetologist",
  image: drAbhishek.url,
  featured: true,
  summary: [
    "Dr. Abhishek Sandeep Sharma is the Founder of Bare & Beyond and an experienced aesthetic physician and wellness expert with a strong background in clinical cosmetology, beauty lasers, non-invasive rejuvenation and wellness-focused care.",
    "Coming from a second-generation wellness background, he combines legacy, science and innovation to deliver modern aesthetic and wellness solutions. He is a UK Board Certified Clinical Cosmetologist and has worked with reputed healthcare and wellness brands including Dr. Batra's and leading multinational organizations.",
    "Dr. Abhishek has trained more than 2,000 doctors in clinical cosmetology, aesthetic procedures, lasers and aesthetic practice development.",
  ],
  qualifications: [
    "UK Board Certified Clinical Cosmetologist",
    "Clinical Cosmetology & Wellness Expert",
    "International Trainer & Educator",
    "Advanced Laser & Aesthetic Specialist",
    "Treatment Development & Strategic Consultant",
    "Clinical Aesthetics & Wellness Management",
  ],
  expertise: [
    "Clinical Cosmetology",
    "Advanced Beauty Lasers",
    "Pico Laser Treatments",
    "Hair & Scalp Rejuvenation",
    "Non-invasive Facial Rejuvenation",
    "Wellness-focused Aesthetic Care",
    "Doctor Training & Education",
  ],
  stats: [
    { k: "12+", v: "Years of experience" },
    { k: "2000+", v: "Doctors trained" },
    { k: "UK", v: "Board certified" },
  ],
  cta: "Book Consultation With Dr. Abhishek",
};

const coFounder: Profile = {
  name: "Dr. Dhruvi Pandya",
  role: "Co-Founder",
  designation: "Co-Founder · International Certified Makeup Artist · Cosmetologist",
  image: drDhruvi.url,
  reverse: true,
  summary: [
    "Dr. Dhruvi Pandya combines beauty artistry, cosmetology, skin preparation expertise and personalized client care.",
    "Coming from a second-generation beauty industry background, she believes confidence comes through healthy skin, refined grooming and personalized beauty planning.",
  ],
  expertise: [
    "Beauty & Cosmetology",
    "Skin Preparation",
    "Glow Treatments",
    "Bridal Beauty Planning",
    "Professional Makeup",
    "Beauty Transformation",
    "Personalized Beauty Consultation",
  ],
  cta: "Book Consultation",
};

const panel: Profile = {
  name: "Dr. Swethana Devara",
  role: "Aesthetic Physician",
  designation: "MBBS · Aesthetic Physician",
  image: drSwethana.url,
  summary: [
    "Dr. Swethana Devara specializes in advanced injectable procedures and facial rejuvenation.",
    "She has worked with reputed aesthetic brands including VLCC and focuses on facial harmony, balanced enhancement, patient safety and natural-looking outcomes.",
  ],
  expertise: [
    "Botulinum Toxin",
    "Dermal Fillers",
    "Facial Contouring",
    "Anti-ageing Aesthetics",
    "Injectable Rejuvenation",
    "Non-surgical Facial Enhancement",
    "Advanced Aesthetic Consultation",
  ],
  cta: "Book Consultation",
};

const specialist: Profile = {
  name: "Dr. Gaurav Naik",
  role: "Oral & Maxillofacial Surgeon",
  designation: "MDS · Oral & Maxillofacial Surgeon",
  image: drGaurav.url,
  reverse: true,
  summary: [
    "Gold Medalist in MDS Oral & Maxillofacial Surgery with expertise in Facial Aesthetics, Reconstructive Surgery and Advanced Facial Rejuvenation.",
    "Specialized in Aesthetic Medicine and Head & Neck Oncology & Reconstructive Surgery.",
  ],
  expertise: [
    "Facial Aesthetics",
    "Reconstructive Surgery",
    "Facial Enhancement",
    "Anti-ageing Treatments",
    "Personalized Facial Care",
  ],
  cta: "Book Consultation",
};

const pmu: Profile = {
  name: "Karuna Sharma",
  role: "UK Board Certified PMU Artist",
  designation: "UK Board Certified PMU Artist",
  image: karuna.url,
  summary: [
    "UK Board Certified Permanent Makeup Artist with over five years of experience in advanced brow artistry and facial enhancement.",
    "Specializes in natural-looking permanent makeup using internationally recognized techniques.",
  ],
  expertise: [
    "Microblading",
    "Ombre Brows",
    "Combination Brows",
    "Brow Correction",
    "Lip Blush",
    "Permanent Makeup",
  ],
  cta: "Book Consultation",
};




function DoctorsPage() {
  const profiles = [founder, coFounder, panel, specialist, pmu];
  return (
    <>
      <Hero />
      <Intro />
      {profiles.map((p, i) => (
        <DoctorProfile key={p.name} p={p} index={i} />
      ))}
      <WhyOurTeam />
      <Approach />
      <FinalCTA />
    </>
  );
}
