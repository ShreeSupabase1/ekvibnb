import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { useState } from "react";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Navigation,
  Calendar,
  CheckCircle2,
  Instagram,
  ChevronDown,
} from "lucide-react";
import { z } from "zod";
import { BUSINESS } from "@/constants/business";
import { buildSEO, CLINIC_JSON_LD } from "@/lib/seo";
import { cn } from "@/lib/utils";

const PHONE_PRIMARY = BUSINESS.phones[0];
const PHONE_RAW = BUSINESS.phonesRaw[0];
const WA = BUSINESS.whatsapp;

const FULL_ADDRESS = [
  BUSINESS.address.line1,
  BUSINESS.address.line2,
  BUSINESS.address.line3,
  `${BUSINESS.address.city} ${BUSINESS.address.postal}`,
  BUSINESS.address.state,
  BUSINESS.address.country,
].join(", ");

const MAPS_QUERY = encodeURIComponent(`${BUSINESS.name}, ${FULL_ADDRESS}`);
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

const TREATMENTS = [
  "Skin Treatments",
  "Hair Treatments",
  "Laser Treatments",
  "Injectables",
  "Body Contouring",
  "Wellness",
  "Bridal Packages",
  "General Consultation",
] as const;

const DOCTORS = [
  "Dr. Abhishek Sandeep Sharma",
  "Dr. Dhruvi Pandya",
  "Dr. Swethana Devara",
  "Dr. Gaurav Naik",
  "Karuna Sharma",
  "No Preference",
] as const;

const WHY_VISIT = [
  "Experienced Doctors",
  "Advanced Technology",
  "Premium Clinic",
  "Personalized Care",
  "Science-backed Treatments",
  "Ethical Medical Practice",
  "Natural Results",
];

const FAQS = [
  {
    q: "Do I need an appointment?",
    a: "We recommend booking a consultation in advance so our doctors can dedicate uninterrupted time to your assessment. Same-day slots are sometimes available on request.",
  },
  {
    q: "Can I walk in?",
    a: "Walk-ins are welcome subject to doctor availability. To avoid waiting, we suggest a quick WhatsApp or call to confirm a slot.",
  },
  {
    q: "How long is the consultation?",
    a: "Initial consultations typically last 20–30 minutes. This includes medical history, skin or scalp analysis and a personalised treatment plan.",
  },
  {
    q: "Which treatments do you offer?",
    a: "Skin, hair, laser, injectables, body contouring, wellness and bridal programs — all delivered by qualified doctors using medical-grade technology.",
  },
  {
    q: "Do you treat men?",
    a: "Yes. Our treatment plans are designed for all genders. Men frequently visit us for hair restoration, laser hair reduction, acne and anti-ageing care.",
  },
  {
    q: "Where are you located?",
    a: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}, ${BUSINESS.address.line3}, ${BUSINESS.address.city} ${BUSINESS.address.postal}.`,
  },
];

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  city: z.string().trim().min(2, "Please enter your city").max(60),
  treatment: z.string().min(1, "Select a treatment"),
  doctor: z.string().min(1, "Select a doctor preference"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type EnquiryForm = z.infer<typeof enquirySchema>;
type Errors = Partial<Record<keyof EnquiryForm, string>>;

const CONTACT_JSON_LD = {
  ...CLINIC_JSON_LD,
  telephone: BUSINESS.phones,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
};

export const Route = createFileRoute("/contact")({
  head: () =>
    buildSEO({
      title: "Contact Bare & Beyond Aesthetics | Nerul | Navi Mumbai",
      description:
        "Contact Bare & Beyond Aesthetics in Nerul, Navi Mumbai for premium skin, laser, hair and wellness treatments. Book your consultation or send us an enquiry via WhatsApp.",
      path: "/contact",
      jsonLd: CONTACT_JSON_LD,
    }),
  component: ContactPage,
});

function normalizePhone(v: string) {
  return v.replace(/\D/g, "").replace(/^91/, "").slice(0, 10);
}

function buildWhatsAppMessage(f: EnquiryForm) {
  const lines = [
    "Hello Bare & Beyond Aesthetics,",
    "",
    "I would like to enquire about your treatments.",
    "",
    `*Name:* ${f.name}`,
    `*Phone:* +91 ${f.phone}`,
    `*Email:* ${f.email}`,
    `*City:* ${f.city}`,
    `*Interested Treatment:* ${f.treatment}`,
    `*Preferred Doctor:* ${f.doctor}`,
  ];
  if (f.message && f.message.trim()) {
    lines.push(`*Message:* ${f.message.trim()}`);
  }
  lines.push("", "Kindly contact me.", "Thank you.");
  return lines.join("\n");
}

function ContactPage() {
  return (
    <div className="bg-background">
      <Hero />
      <QuickCards />
      <InfoAndMap />
      <EnquirySection />
      <WhyVisit />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-surface">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-surface via-surface to-background" />
      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          Contact
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl text-4xl md:text-6xl font-light tracking-tight text-foreground"
        >
          Let's discuss your skin, hair &amp; wellness goals.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground"
        >
          Whether you have a question or would like to book a consultation, our
          team is here to help.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href={`tel:+${PHONE_RAW}`}
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-background"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-background"
          >
            <Calendar className="h-4 w-4" /> Book Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Quick Cards ---------------- */

function QuickCards() {
  const cards = [
    {
      icon: Phone,
      label: "Call Clinic",
      sub: PHONE_PRIMARY,
      href: `tel:+${PHONE_RAW}`,
      external: false,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      sub: "Chat with our team",
      href: `https://wa.me/${WA}`,
      external: true,
    },
    {
      icon: Calendar,
      label: "Book Appointment",
      sub: "Guided 5-step booking",
      href: "/book-appointment",
      external: false,
      internal: true,
    },
    {
      icon: Navigation,
      label: "Google Maps",
      sub: "Get directions",
      href: MAPS_DIRECTIONS,
      external: true,
    },
  ] as const;

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {cards.map((c) => {
          const Icon = c.icon;
          const inner = (
            <div className="group h-full rounded-lg border border-border bg-card p-5 transition hover:border-foreground/30 hover:shadow-sm">
              <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
              <p className="mt-4 text-sm font-medium text-foreground">
                {c.label}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{c.sub}</p>
            </div>
          );
          return "internal" in c && c.internal ? (
            <Link key={c.label} to={c.href as "/book-appointment"}>
              {inner}
            </Link>
          ) : (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer noopener" : undefined}
            >
              {inner}
            </a>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Info + Map ---------------- */

function InfoAndMap() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Reach us
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Visit the clinic
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We are located in Sector 21, Nerul — easily accessible from Vashi,
              Belapur, Kharghar and greater Navi Mumbai.
            </p>

            <div className="mt-8 space-y-6 text-sm">
              <InfoRow icon={MapPin} label="Address">
                <address className="not-italic text-foreground/90 leading-relaxed">
                  {BUSINESS.name}
                  <br />
                  {BUSINESS.address.line1}
                  <br />
                  {BUSINESS.address.line2}
                  <br />
                  {BUSINESS.address.line3}
                  <br />
                  {BUSINESS.address.city} {BUSINESS.address.postal}
                  <br />
                  {BUSINESS.address.state}, {BUSINESS.address.country}
                </address>
              </InfoRow>

              <InfoRow icon={Phone} label="Phone">
                <a
                  href={`tel:+${PHONE_RAW}`}
                  className="text-foreground hover:underline"
                >
                  {PHONE_PRIMARY}
                </a>
              </InfoRow>

              <InfoRow icon={Mail} label="Email">
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-foreground hover:underline"
                >
                  {BUSINESS.email}
                </a>
              </InfoRow>

              <InfoRow icon={Clock} label="Hours">
                <ul className="space-y-1 text-foreground/90">
                  {BUSINESS.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6">
                      <span>{h.day}</span>
                      <span className="text-muted-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </InfoRow>

              <InfoRow icon={Instagram} label="Instagram">
                <a
                  href={BUSINESS.social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-foreground hover:underline"
                >
                  {BUSINESS.social.instagramHandle}
                </a>
              </InfoRow>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href={`tel:+${PHONE_RAW}`}
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-xs font-medium text-background hover:opacity-90"
              >
                <Phone className="h-3.5 w-3.5" /> Call
              </a>
              <a
                href={`https://wa.me/${WA}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-xs font-medium text-foreground hover:bg-muted"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-xs font-medium text-foreground hover:bg-muted"
              >
                <Navigation className="h-3.5 w-3.5" /> Get Directions
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] w-full md:aspect-[16/11]">
                <iframe
                  title={`${BUSINESS.name} — Google Map`}
                  src={MAPS_EMBED}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-4 py-3 text-xs">
                <p className="text-muted-foreground">
                  {BUSINESS.address.line3}, {BUSINESS.address.city}
                </p>
                <div className="flex gap-2">
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-foreground hover:underline"
                  >
                    Open in Google Maps
                  </a>
                  <span className="text-muted-foreground">·</span>
                  <a
                    href={MAPS_DIRECTIONS}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-foreground hover:underline"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Phone;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5">
        <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
      </div>
      <div className="flex-1">
        <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          {label}
        </p>
        <div className="mt-1.5 text-sm">{children}</div>
      </div>
    </div>
  );
}

/* ---------------- Enquiry Form ---------------- */

const EMPTY: EnquiryForm = {
  name: "",
  phone: "",
  email: "",
  city: "",
  treatment: "",
  doctor: "",
  message: "",
};

function EnquirySection() {
  const [form, setForm] = useState<EnquiryForm>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof EnquiryForm>(k: K, v: EnquiryForm[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = enquirySchema.safeParse(form);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof EnquiryForm;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    const message = buildWhatsAppMessage(parsed.data);
    const url = `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="enquiry" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Enquiry
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Send us a quick note
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Share a few details and we will get in touch on WhatsApp within
            clinic hours. Your enquiry is delivered directly to our front desk —
            no forms, no waiting.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground/90">
            {[
              "No email spam — WhatsApp only",
              "Response within clinic hours",
              "Speak directly with our medical team",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 text-foreground/70"
                  strokeWidth={1.75}
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="md:col-span-3 rounded-lg border border-border bg-card p-6 md:p-8 shadow-sm"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Full Name"
              value={form.name}
              onChange={(v) => set("name", v)}
              error={errors.name}
              placeholder="Your name"
              autoComplete="name"
              required
            />
            <Field
              label="Mobile Number"
              value={form.phone}
              onChange={(v) => set("phone", normalizePhone(v))}
              error={errors.phone}
              placeholder="10-digit mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              required
            />
            <Field
              label="Email Address"
              value={form.email}
              onChange={(v) => set("email", v)}
              error={errors.email}
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
              required
            />
            <Field
              label="City"
              value={form.city}
              onChange={(v) => set("city", v)}
              error={errors.city}
              placeholder="e.g. Navi Mumbai"
              autoComplete="address-level2"
              required
            />
            <SelectField
              label="Treatment Interested In"
              value={form.treatment}
              onChange={(v) => set("treatment", v)}
              options={TREATMENTS as unknown as string[]}
              error={errors.treatment}
              placeholder="Select a treatment"
              required
            />
            <SelectField
              label="Preferred Doctor"
              value={form.doctor}
              onChange={(v) => set("doctor", v)}
              options={DOCTORS as unknown as string[]}
              error={errors.doctor}
              placeholder="Select a doctor"
              required
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="enquiry-message"
              className="block text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="enquiry-message"
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              rows={4}
              maxLength={1000}
              placeholder="Tell us briefly about your concern (optional)"
              className="mt-2 w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:border-foreground/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />

            <p className="mt-1 text-[11px] text-muted-foreground">
              {(form.message ?? "").length}/1000
            </p>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              By submitting, you'll be redirected to WhatsApp to send your
              enquiry.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Send via WhatsApp
            </button>
          </div>

          {submitted && (
            <div className="mt-5 flex items-start gap-3 rounded-md border border-border bg-muted/40 p-4 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-foreground" />
              <div>
                <p className="font-medium text-foreground">WhatsApp opened</p>
                <p className="text-muted-foreground">
                  If it didn't open,{" "}
                  <a
                    href={`https://wa.me/${WA}?text=${encodeURIComponent(
                      buildWhatsAppMessage(form),
                    )}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-foreground underline"
                  >
                    tap here to send your enquiry
                  </a>
                  .
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  inputMode,
  autoComplete,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  required?: boolean;
}) {
  const id = React.useId();
  const errId = `${id}-err`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
      >
        {label}
        {required && <span className="text-foreground/60"> *</span>}
      </label>
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errId : undefined}
        className={cn(
          "mt-2 w-full rounded-md border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          error
            ? "border-destructive focus-visible:border-destructive"
            : "border-border focus-visible:border-foreground/40",
        )}
      />
      {error && (
        <p id={errId} className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  error,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const id = React.useId();
  const errId = `${id}-err`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
      >
        {label}
        {required && <span className="text-foreground/60"> *</span>}
      </label>
      <div className="relative mt-2">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? errId : undefined}
          required={required}
          className={cn(
            "w-full appearance-none rounded-md border bg-background px-3 py-2.5 pr-9 text-sm text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            !value && "text-muted-foreground/70",
            error
              ? "border-destructive focus-visible:border-destructive"
              : "border-border focus-visible:border-foreground/40",
          )}
        >
          <option value="" disabled>
            {placeholder ?? "Select"}
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-foreground">
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
      {error && (
        <p id={errId} className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}


/* ---------------- Why Visit ---------------- */

function WhyVisit() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Why visit us
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-tight text-foreground">
            A clinic built on medical trust.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {WHY_VISIT.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-border bg-card p-5"
            >
              <CheckCircle2
                className="h-4 w-4 text-foreground/70"
                strokeWidth={1.75}
              />
              <p className="mt-4 text-sm font-medium text-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-tight text-foreground">
          Common questions
        </h2>
      </div>
      <div className="mt-10 divide-y divide-border border-y border-border">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm md:text-base font-medium text-foreground">
                  {f.q}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              {isOpen && (
                <p className="pb-6 text-sm text-muted-foreground">{f.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section className="border-t border-border/60 bg-foreground text-background">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-background/60">
          Get in touch
        </p>
        <h2 className="mt-4 text-3xl md:text-5xl font-light tracking-tight">
          Ready to begin your treatment journey?
        </h2>
        <p className="mt-4 text-sm md:text-base text-background/70">
          Consult with a qualified doctor at Nerul, Navi Mumbai.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-background/90"
          >
            <Calendar className="h-4 w-4" /> Book Appointment
          </Link>
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md border border-background/30 px-6 py-3 text-sm font-medium text-background transition hover:bg-background/10"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
          <a
            href={`tel:+${PHONE_RAW}`}
            className="inline-flex items-center gap-2 rounded-md border border-background/30 px-6 py-3 text-sm font-medium text-background transition hover:bg-background/10"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
