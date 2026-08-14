import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Phone,
  MessageCircle,
  ShieldCheck,
  HeartHandshake,
  Microscope,
  Sparkles,
  GraduationCap,
  Users,
  Stethoscope,
  Award,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { buildSEO, CLINIC_JSON_LD } from "@/lib/seo";
import clinicReceptionAsset from "@/assets/clinic-reception.jpg.asset.json";
import clinicConsultAsset from "@/assets/clinic-consult.jpg.asset.json";
import clinicTreatmentAsset from "@/assets/clinic-treatment-room.jpg.asset.json";
import clinicLoungeAsset from "@/assets/clinic-lounge.jpg.asset.json";
import clinicInteriorAsset from "@/assets/clinic-interior.jpg.asset.json";
import techLaserAsset from "@/assets/tech-laser.jpg.asset.json";
import drAbhishekAsset from "@/assets/doctors/dr-abhishek.jpg.asset.json";
import drDhruviAsset from "@/assets/doctors/dr-dhruvi.jpg.asset.json";
import drSwethanaAsset from "@/assets/doctors/dr-swethana.jpg.asset.json";
import drGauravAsset from "@/assets/doctors/dr-gaurav.jpg.asset.json";
import karunaAsset from "@/assets/doctors/karuna.jpg.asset.json";
const drAbhishek = drAbhishekAsset.url;
const drDhruvi = drDhruviAsset.url;
const drSwethana = drSwethanaAsset.url;
const drGaurav = drGauravAsset.url;
const karuna = karunaAsset.url;
const clinicReception = clinicReceptionAsset.url;
const clinicConsult = clinicConsultAsset.url;
const clinicTreatment = clinicTreatmentAsset.url;
const clinicLounge = clinicLoungeAsset.url;
const clinicInterior = clinicInteriorAsset.url;
const techLaser = techLaserAsset.url;

const TEL_LINK = `tel:${BUSINESS.phonesRaw[0]}`;
const WA_LINK = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
  "Hello Bare & Beyond, I would like to learn more about your clinic.",
)}`;

export const Route = createFileRoute("/about")({
  head: () =>
    buildSEO({
      title: "About Bare & Beyond Aesthetics | Premium Skin, Hair & Wellness Clinic in Nerul",
      description:
        "Learn about Bare & Beyond Aesthetics, our experienced medical team, patient-first philosophy and advanced aesthetic treatments in Nerul, Navi Mumbai.",
      path: "/about",
      
      jsonLd: [
        CLINIC_JSON_LD,
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About ${BUSINESS.name}`,
          url: "/about",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "About", item: "/about" },
          ],
        },
      ],
    }),
  component: AboutPage,
});

const STORY_PILLARS = [
  { title: "Personalized Care", icon: HeartHandshake },
  { title: "Ethical Medical Practice", icon: ShieldCheck },
  { title: "Science-backed Treatments", icon: Microscope },
  { title: "Patient-first Approach", icon: Users },
  { title: "Natural Results", icon: Leaf },
  { title: "Advanced Technology", icon: Sparkles },
];

const VALUES = [
  "Integrity",
  "Safety",
  "Personalization",
  "Innovation",
  "Continuous Learning",
  "Patient Trust",
  "Ethical Practice",
  "Clinical Excellence",
];

const WHY_CHOOSE = [
  { title: "Experienced Doctors", desc: "A qualified medical team led by specialists with years of clinical practice." },
  { title: "UK Board Certified Expertise", desc: "International training standards brought to Indian patients." },
  { title: "Advanced Technology", desc: "Modern, clinically validated devices and protocols." },
  { title: "Modern Clinic", desc: "A calm, hygienic and premium clinical environment." },
  { title: "Personalized Treatment Plans", desc: "Every plan is tailored after a thorough medical assessment." },
  { title: "Natural Results", desc: "We focus on subtle, healthy outcomes — never overdone." },
  { title: "Transparent Consultation", desc: "Clear guidance on suitability, timelines and expected outcomes." },
  { title: "Patient-first Care", desc: "Long-term relationships built on trust and consistent quality." },
];

const TEAM = [
  { name: "Dr. Abhishek Sandeep Sharma", role: "Founder & Medical Director", img: drAbhishek },
  { name: "Dr. Dhruvi Pandya", role: "Aesthetic Physician", img: drDhruvi },
  { name: "Dr. Swethana Devara", role: "Injectable & Aesthetic Specialist", img: drSwethana },
  { name: "Dr. Gaurav Naik", role: "Wellness & Nutrition Consultant", img: drGaurav },
  { name: "Karuna Sharma", role: "PMU & Aesthetic Artist", img: karuna },
];

const CLINIC_SPACES = [
  { label: "Reception", img: clinicReception },
  { label: "Consultation Room", img: clinicConsult },
  { label: "Treatment Rooms", img: clinicTreatment },
  { label: "Laser Room", img: techLaser },
  { label: "Waiting Lounge", img: clinicLounge },
  { label: "Premium Infrastructure", img: clinicInterior },
];

const JOURNEY = [
  { step: "Consultation", desc: "A detailed conversation to understand your goals and history." },
  { step: "Clinical Assessment", desc: "Structured skin, hair or wellness evaluation by a doctor." },
  { step: "Treatment Planning", desc: "A personalised plan with transparent timelines and outcomes." },
  { step: "Procedure", desc: "Safe, hygienic and comfortable in-clinic experience." },
  { step: "Follow-up Care", desc: "Scheduled reviews to monitor progress and refine care." },
  { step: "Long-term Wellness", desc: "Ongoing support for sustained skin and health outcomes." },
];

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-surface">
        <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Award className="h-3.5 w-3.5" /> About the clinic
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-medium tracking-tight">
              Where Science Meets Aesthetic Excellence
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bare & Beyond Aesthetics combines clinical expertise, advanced technology and
              personalized care to help every patient achieve healthy, natural-looking results.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
              >
                Meet Our Experts <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-background/60"
              >
                <Calendar className="h-4 w-4" /> Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <Section eyebrow="Our Story" title="A premium clinic built on medical trust">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Bare & Beyond Aesthetics is a premium medical aesthetic and wellness clinic based in
              Nerul, Navi Mumbai. We were founded on a simple belief — that aesthetic medicine
              should be safe, science-backed and delivered with genuine care.
            </p>
            <p>
              Every consultation begins with listening. Every treatment plan is built around your
              skin, hair and lifestyle. Our goal is not to sell procedures, but to guide patients
              toward informed, healthy decisions with outcomes they can trust.
            </p>
          </div>
          <div className="md:col-span-2">
            <ul className="grid grid-cols-2 gap-3">
              {STORY_PILLARS.map(({ title, icon: Icon }) => (
                <li
                  key={title}
                  className="rounded-xl border border-border bg-surface p-4 text-sm"
                >
                  <Icon className="h-4 w-4 text-foreground/70" />
                  <div className="mt-2 font-medium">{title}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <section className="border-t border-border/60 bg-surface">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Vision</div>
              <h3 className="mt-3 text-xl font-medium">Trusted destination for ethical aesthetic care</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To become one of India's most trusted destinations for ethical aesthetic medicine,
                skin health and wellness through innovation, education and patient-centric care.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-8">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Mission</div>
              <h3 className="mt-3 text-xl font-medium">Safe, evidence-based and compassionate</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Provide safe, evidence-based aesthetic treatments while delivering a premium,
                transparent and compassionate patient experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <Section eyebrow="Our Values" title="The principles that guide every consultation">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div
              key={v}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <CheckCircle2 className="h-4 w-4 text-foreground/70" />
              <div className="mt-3 text-base font-medium">{v}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <section className="border-t border-border/60 bg-surface">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Why Choose Us</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight">
              What patients value about Bare & Beyond
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((w) => (
              <div key={w.title} className="rounded-xl border border-border bg-background p-5">
                <div className="text-base font-medium">{w.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <Section eyebrow="Our Expert Team" title="Doctor-led, ethically practiced">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <Link
              key={m.name}
              to="/doctors"
              className="group rounded-xl border border-border bg-surface overflow-hidden hover:border-foreground/40 transition"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {m.role}
                </div>
                <div className="mt-2 text-lg font-medium">{m.name}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium">
                  View profile <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Our Clinic */}
      <section className="border-t border-border/60 bg-surface">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Clinic</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight">
              A calm, premium and clinical space
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CLINIC_SPACES.map((s) => (
              <figure
                key={s.label}
                className="group rounded-xl border border-border overflow-hidden bg-background"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.label}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <figcaption className="p-4 text-sm font-medium">{s.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Experience */}
      <Section eyebrow="Our Patient Experience" title="From consultation to long-term wellness">
        <ol className="relative border-l border-border ml-3 md:ml-4 space-y-8">
          {JOURNEY.map((j, i) => (
            <li key={j.step} className="pl-6 md:pl-8">
              <span
                aria-hidden
                className="absolute -left-[9px] mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-border bg-background text-[10px] font-medium"
              >
                {i + 1}
              </span>
              <div className="text-base font-medium">{j.step}</div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {j.desc}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Final CTA */}
      <section className="border-t border-border/60 bg-surface">
        <div className="container mx-auto px-6 py-20 max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Stethoscope className="h-3.5 w-3.5" /> Consult our specialists
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-medium tracking-tight">
            Your Journey Towards Healthier Skin Starts Here
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Speak to our doctors for a personalised assessment and evidence-based recommendations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
            >
              <Calendar className="h-4 w-4" /> Book Consultation
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-background/60"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={TEL_LINK}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-background/60"
            >
              <Phone className="h-4 w-4" /> Call Clinic
            </a>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <GraduationCap className="h-3.5 w-3.5" /> Doctor-led · Ethical · Science-backed
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border/60">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-medium tracking-tight">{title}</h2>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
