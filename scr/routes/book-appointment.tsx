import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Phone, MessageCircle, Home } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { TREATMENT_CATEGORIES } from "@/constants/treatments";
import { buildSEO } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/book-appointment")({
  head: () => buildSEO({
    title: "Book an Appointment",
    description: "Book your consultation at Bare & Beyond Aesthetics via WhatsApp.",
    path: "/book-appointment",
    noindex: true,
  }),
  component: BookAppointmentPage,
});

const CATEGORIES = [
  { id: "skin", label: "Skin Treatments", mapId: "skin-facial" },
  { id: "hair", label: "Hair Treatments", mapId: "hair-scalp" },
  { id: "laser", label: "Laser Treatments", mapId: "laser" },
  { id: "injectables", label: "Injectables", mapId: "injectables" },
  { id: "body", label: "Body Contouring", mapId: "body-contouring" },
  { id: "wellness", label: "Wellness", mapId: "wellness" },
  { id: "bridal", label: "Bridal Packages", mapId: "packages" },
  { id: "general", label: "General Consultation", mapId: null },
] as const;

const DOCTORS = [
  "Dr. Abhishek Sandeep Sharma",
  "Dr. Dhruvi Pandya",
  "Dr. Swethana Devara",
  "Dr. Gaurav Naik",
  "Karuna Sharma",
  "No Preference",
];

const CONCERNS = [
  "Acne", "Pigmentation", "Hair Fall", "Anti Ageing",
  "Laser Hair Reduction", "Botox", "Fillers", "Skin Glow",
  "Weight Management", "Other",
];

const NOTES_MAX = 500;
const NAME_MIN = 2;
const NAME_MAX = 80;

type FormState = {
  category: string;
  treatment: string;
  doctor: string;
  name: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  city: string;
  date: string;
  time: string;
  concern: string;
  notes: string;
};

const INITIAL: FormState = {
  category: "", treatment: "", doctor: "",
  name: "", phone: "", email: "", age: "", gender: "", city: "",
  date: "", time: "", concern: "", notes: "",
};

// Normalize an Indian phone entry to a bare 10-digit local number.
function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}

function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-IN", { weekday: "short", day: "2-digit", month: "short", year: "numeric" });
}

function formatTime(t: string): string {
  if (!t) return "";
  const [hStr, m] = t.split(":");
  const h = Number(hStr);
  if (isNaN(h)) return t;
  const suffix = h >= 12 ? "PM" : "AM";
  const h12 = ((h + 11) % 12) + 1;
  return `${h12}:${m} ${suffix}`;
}

function BookAppointmentPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  const selectedCat = CATEGORIES.find((c) => c.id === form.category);
  const isGeneral = form.category === "general";

  const treatments = useMemo(() => {
    if (!selectedCat?.mapId) return [];
    const cat = TREATMENT_CATEGORIES.find((c) => c.id === selectedCat.mapId);
    if (!cat) return [];
    const flat = [...cat.treatments];
    cat.groups?.forEach((g) => g.treatments.forEach((t) => flat.push(t)));
    return flat;
  }, [selectedCat]);

  const totalSteps = 5;
  const today = new Date().toISOString().split("T")[0];

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validateStep = (s: number): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (s === 1 && !form.category) e.category = "Please select a category";
    if (s === 2 && !isGeneral && !form.treatment) e.treatment = "Please select a treatment";
    if (s === 3 && !form.doctor) e.doctor = "Please select a doctor";
    if (s === 4) {
      const name = form.name.trim();
      if (!name) e.name = "Name is required";
      else if (name.length < NAME_MIN) e.name = `Name must be at least ${NAME_MIN} characters`;
      else if (name.length > NAME_MAX) e.name = `Name must be under ${NAME_MAX} characters`;

      const phone = normalizePhone(form.phone);
      if (!phone) e.phone = "Mobile number is required";
      else if (!/^[6-9]\d{9}$/.test(phone)) e.phone = "Enter a valid 10-digit Indian mobile number";

      if (!form.email.trim()) e.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Enter a valid email";

      const age = Number(form.age);
      if (!form.age) e.age = "Age is required";
      else if (!Number.isInteger(age) || age < 1 || age > 120) e.age = "Enter an age between 1 and 120";

      if (!form.gender) e.gender = "Please select gender";
      if (!form.city.trim()) e.city = "City is required";
      if (!form.date) e.date = "Please select a preferred date";
      else if (form.date < today) e.date = "Date cannot be in the past";
      if (!form.time) e.time = "Please select a preferred time";
    }
    if (s === 5 && form.notes.length > NOTES_MAX) {
      e.notes = `Notes must be under ${NOTES_MAX} characters`;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    if (step === 1 && isGeneral) setStep(3);
    else setStep((s) => Math.min(s + 1, totalSteps + 1));
  };
  const back = () => {
    if (step === 3 && isGeneral) setStep(1);
    else setStep((s) => Math.max(s - 1, 1));
  };

  const buildMessage = () => {
    const name = form.name.trim();
    const phone = normalizePhone(form.phone);
    const email = form.email.trim();
    const city = form.city.trim();
    const notes = form.notes.trim();
    const lines = [
      "Hello Bare & Beyond Aesthetics,",
      "",
      "I would like to book a consultation. My details are below:",
      "",
      `• Name: ${name}`,
      `• Mobile: +91 ${phone}`,
      `• Email: ${email}`,
      `• Age: ${form.age}`,
      `• Gender: ${form.gender}`,
      `• City: ${city}`,
      "",
      `• Treatment Category: ${selectedCat?.label ?? ""}`,
      `• Treatment: ${isGeneral ? "General Consultation" : form.treatment}`,
      `• Preferred Doctor: ${form.doctor}`,
      `• Preferred Date: ${formatDate(form.date)}`,
      `• Preferred Time: ${formatTime(form.time)}`,
    ];
    if (form.concern) lines.push(`• Primary Concern: ${form.concern}`);
    if (notes) lines.push(`• Additional Notes: ${notes}`);
    lines.push("", "Kindly confirm my appointment. Thank you.");
    return lines.join("\n");
  };

  const submit = () => {
    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(buildMessage())}`;
    setWaUrl(url);
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (submitted) {
    return (
      <main className="min-h-dvh flex items-center justify-center px-6 py-32 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full text-center"
        >
          <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-8">
            <Check className="h-7 w-7 text-primary" aria-hidden />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-ink mb-4">Thank You.</h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Your appointment request has been prepared in WhatsApp.<br />
            Please send the message to complete your booking.
          </p>
          <div className="flex flex-col gap-3">
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-4 px-8 text-sm font-medium hover:bg-primary/90 transition-colors">
              <MessageCircle className="h-4 w-4" aria-hidden /> Open WhatsApp Again
            </a>
            <a href={`tel:${BUSINESS.phonesRaw[0]}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border py-4 px-8 text-sm font-medium hover:bg-ivory transition-colors">
              <Phone className="h-4 w-4" aria-hidden /> Call Clinic
            </a>
            <a href="/"
              className="inline-flex items-center justify-center gap-2 py-4 px-8 text-sm text-muted-foreground hover:text-ink transition-colors">
              <Home className="h-4 w-4" aria-hidden /> Back to Home
            </a>
          </div>
        </motion.div>
      </main>
    );
  }

  const isConfirm = step === totalSteps + 1;
  const progressStep = isConfirm ? totalSteps : step;

  return (
    <main className="min-h-dvh bg-background pt-28 md:pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[11px] tracking-[0.35em] uppercase text-primary mb-3">Consultation</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink">Book an Appointment</h1>
          <p className="text-muted-foreground mt-4">
            Complete this short form and we'll confirm your consultation on WhatsApp.
          </p>
        </div>

        {!isConfirm && (
          <div className="mb-10" aria-label="Booking progress">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round((progressStep / totalSteps) * 100)}%</span>
            </div>
            <div
              className="h-1 bg-border rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={progressStep}
              aria-valuemin={1}
              aria-valuemax={totalSteps}
            >
              <div className="h-full bg-primary transition-all duration-500"
                style={{ width: `${(progressStep / totalSteps) * 100}%` }} />
            </div>
          </div>
        )}

        <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-10">

          {step === 1 && (
            <StepWrap title="Select Treatment Category">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Treatment category">
                {CATEGORIES.map((c) => (
                  <button key={c.id} type="button"
                    role="radio"
                    aria-checked={form.category === c.id}
                    onClick={() => update("category", c.id)}
                    className={cn(
                      "text-left rounded-xl border px-5 py-4 text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      form.category === c.id
                        ? "border-primary bg-primary/5 text-ink"
                        : "border-border hover:border-primary/40",
                    )}>
                    {c.label}
                  </button>
                ))}
              </div>
              {errors.category && <p role="alert" className="text-destructive text-sm mt-3">{errors.category}</p>}
            </StepWrap>
          )}

          {step === 2 && !isGeneral && (
            <StepWrap title="Select Treatment">
              <div className="max-h-[420px] overflow-y-auto pr-1 space-y-2" role="radiogroup" aria-label="Treatment">
                {treatments.map((t) => (
                  <button key={t.name} type="button"
                    role="radio"
                    aria-checked={form.treatment === t.name}
                    onClick={() => update("treatment", t.name)}
                    className={cn(
                      "w-full text-left rounded-lg border px-4 py-3 text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      form.treatment === t.name
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/40",
                    )}>
                    <div className="font-medium text-ink">{t.name}</div>
                    {t.desc && <div className="text-xs text-muted-foreground mt-0.5">{t.desc}</div>}
                  </button>
                ))}
              </div>
              {errors.treatment && <p role="alert" className="text-destructive text-sm mt-3">{errors.treatment}</p>}
            </StepWrap>
          )}

          {step === 3 && (
            <StepWrap title="Select Doctor">
              <div className="grid grid-cols-1 gap-3" role="radiogroup" aria-label="Preferred doctor">
                {DOCTORS.map((d) => (
                  <button key={d} type="button"
                    role="radio"
                    aria-checked={form.doctor === d}
                    onClick={() => update("doctor", d)}
                    className={cn(
                      "text-left rounded-xl border px-5 py-4 text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      form.doctor === d
                        ? "border-primary bg-primary/5 text-ink"
                        : "border-border hover:border-primary/40",
                    )}>
                    {d}
                  </button>
                ))}
              </div>
              {errors.doctor && <p role="alert" className="text-destructive text-sm mt-3">{errors.doctor}</p>}
            </StepWrap>
          )}

          {step === 4 && (
            <StepWrap title="Patient Details">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Full Name" required error={errors.name}>
                  <input className={inputCls} value={form.name}
                    autoComplete="name" maxLength={NAME_MAX}
                    aria-required="true" aria-invalid={!!errors.name}
                    onChange={(e) => update("name", e.target.value)} />
                </Field>
                <Field label="Mobile Number" required error={errors.phone}>
                  <input className={inputCls} value={form.phone} inputMode="tel" placeholder="10-digit mobile"
                    autoComplete="tel-national" maxLength={15}
                    aria-required="true" aria-invalid={!!errors.phone}
                    onChange={(e) => update("phone", e.target.value)} />
                </Field>
                <Field label="Email" required error={errors.email}>
                  <input className={inputCls} type="email" value={form.email}
                    autoComplete="email" maxLength={120}
                    aria-required="true" aria-invalid={!!errors.email}
                    onChange={(e) => update("email", e.target.value)} />
                </Field>
                <Field label="Age" required error={errors.age}>
                  <input className={inputCls} type="number" value={form.age}
                    inputMode="numeric" min={1} max={120} step={1}
                    aria-required="true" aria-invalid={!!errors.age}
                    onChange={(e) => update("age", e.target.value.replace(/[^\d]/g, ""))} />
                </Field>
                <Field label="Gender" required error={errors.gender}>
                  <select className={inputCls} value={form.gender}
                    aria-required="true" aria-invalid={!!errors.gender}
                    onChange={(e) => update("gender", e.target.value)}>
                    <option value="">Select</option>
                    <option>Female</option><option>Male</option><option>Other</option>
                  </select>
                </Field>
                <Field label="City" required error={errors.city}>
                  <input className={inputCls} value={form.city}
                    autoComplete="address-level2" maxLength={80}
                    aria-required="true" aria-invalid={!!errors.city}
                    onChange={(e) => update("city", e.target.value)} />
                </Field>
                <Field label="Preferred Date" required error={errors.date}>
                  <input className={inputCls} type="date" min={today} value={form.date}
                    aria-required="true" aria-invalid={!!errors.date}
                    onChange={(e) => update("date", e.target.value)} />
                </Field>
                <Field label="Preferred Time" required error={errors.time}>
                  <input className={inputCls} type="time" value={form.time}
                    aria-required="true" aria-invalid={!!errors.time}
                    onChange={(e) => update("time", e.target.value)} />
                </Field>
              </div>
            </StepWrap>
          )}

          {step === 5 && (
            <StepWrap title="Optional Details">
              <Field label="Primary Concern">
                <select className={inputCls} value={form.concern}
                  onChange={(e) => update("concern", e.target.value)}>
                  <option value="">Select (optional)</option>
                  {CONCERNS.map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Additional Notes" error={errors.notes}>
                <textarea className={cn(inputCls, "min-h-[120px] resize-y")} value={form.notes}
                  maxLength={NOTES_MAX}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Anything else we should know?" />
                <span className="mt-1 block text-right text-[11px] text-muted-foreground">
                  {form.notes.length}/{NOTES_MAX}
                </span>
              </Field>
            </StepWrap>
          )}

          {isConfirm && (
            <StepWrap title="Confirm Your Booking">
              <dl className="divide-y divide-border">
                <Row label="Category" value={selectedCat?.label} />
                <Row label="Treatment" value={isGeneral ? "General Consultation" : form.treatment} />
                <Row label="Doctor" value={form.doctor} />
                <Row label="Preferred Date" value={formatDate(form.date)} />
                <Row label="Preferred Time" value={formatTime(form.time)} />
                <Row label="Name" value={form.name.trim()} />
                <Row label="Mobile" value={`+91 ${normalizePhone(form.phone)}`} />
                <Row label="Email" value={form.email.trim()} />
                <Row label="Age / Gender" value={`${form.age} · ${form.gender}`} />
                <Row label="City" value={form.city.trim()} />
                {form.concern && <Row label="Primary Concern" value={form.concern} />}
                {form.notes.trim() && <Row label="Notes" value={form.notes.trim()} />}
              </dl>
            </StepWrap>
          )}

          <div className="flex flex-col-reverse sm:flex-row gap-3 mt-8">
            {step > 1 && (
              <button type="button" onClick={back}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:bg-ivory transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                <ArrowLeft className="h-4 w-4" aria-hidden /> {isConfirm ? "Edit Details" : "Back"}
              </button>
            )}
            {!isConfirm ? (
              <button type="button" onClick={next}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                {step === totalSteps ? "Review" : "Continue"} <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            ) : (
              <button type="button" onClick={submit}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40">
                <MessageCircle className="h-4 w-4" aria-hidden /> Book on WhatsApp
              </button>
            )}
          </div>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Prefer to call? <a href={`tel:${BUSINESS.phonesRaw[0]}`} className="text-primary hover:underline">{BUSINESS.phones[0]}</a>
        </p>
      </div>
    </main>
  );
}

const inputCls = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-ink focus:outline-none focus:border-primary transition-colors";

function StepWrap({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-ink mb-6">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({
  label, error, required, children,
}: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}{required && <span className="text-destructive ml-0.5" aria-hidden>*</span>}
      </span>
      {children}
      {error && <span role="alert" className="block text-destructive text-xs mt-1">{error}</span>}
    </label>
  );
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="py-3 flex justify-between gap-4 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-ink text-right font-medium">{value || "-"}</dd>
    </div>
  );
}
