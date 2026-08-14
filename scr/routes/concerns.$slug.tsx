import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Calendar,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Users,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { CONCERNS, findConcern, type Concern } from "@/constants/concerns";
import { buildSEO, CLINIC_JSON_LD } from "@/lib/seo";

const TEL_LINK = `tel:${BUSINESS.phonesRaw[0]}`;

export const Route = createFileRoute("/concerns/$slug")({
  loader: ({ params }): Concern => {
    const concern = findConcern(params.slug);
    if (!concern) throw notFound();
    return concern;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Concern Not Found" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const path = `/concerns/${params.slug}`;
    return buildSEO({
      title: `${loaderData.name} — Causes, Symptoms & Treatments`,
      description: loaderData.overview.slice(0, 155),
      path,
      type: "article",
      jsonLd: [
        CLINIC_JSON_LD,
        {
          "@context": "https://schema.org",
          "@type": "MedicalCondition",
          name: loaderData.name,
          description: loaderData.overview,
          signOrSymptom: loaderData.symptoms.map((s) => ({
            "@type": "MedicalSignOrSymptom",
            name: s,
          })),
          possibleTreatment: loaderData.treatments.map((t) => ({
            "@type": "MedicalTherapy",
            name: t,
          })),
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: loaderData.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Concerns", item: "/concerns" },
            { "@type": "ListItem", position: 3, name: loaderData.name, item: path },
          ],
        },
      ],
    });
  },
  notFoundComponent: ConcernNotFound,
  component: ConcernPage,
});

function ConcernNotFound() {
  return (
    <div className="container mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl font-medium">Concern not found</h1>
      <p className="mt-3 text-muted-foreground">
        The concern you're looking for may have been moved or renamed.
      </p>
      <Link
        to="/concerns"
        className="mt-6 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm"
      >
        Browse all concerns
      </Link>
    </div>
  );
}

function ConcernPage() {
  const c = Route.useLoaderData() as Concern;
  const WA_LINK = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    `Hello Bare & Beyond, I would like to discuss my concern regarding ${c.name}.`,
  )}`;

  const related = CONCERNS.filter((x) => x.group === c.group && x.slug !== c.slug).slice(0, 4);

  return (
    <div className="bg-background text-foreground">
      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-border/60 bg-surface"
      >
        <div className="container mx-auto px-6 py-3 max-w-6xl">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-foreground">Home</Link>
            </li>
            <ChevronRight className="h-3 w-3" />
            <li>
              <Link to="/concerns" className="hover:text-foreground">Concerns</Link>
            </li>
            <ChevronRight className="h-3 w-3" />
            <li className="text-foreground">{c.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="container mx-auto px-6 py-16 md:py-20 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {c.group}
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight">{c.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{c.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
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
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-surface"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-surface"
              >
                <Phone className="h-4 w-4" /> Call Clinic
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <Section title="Overview">
        <p className="text-base leading-relaxed text-muted-foreground max-w-3xl">
          {c.overview}
        </p>
      </Section>

      <div className="grid md:grid-cols-2 gap-0 md:gap-px md:bg-border">
        <InfoBlock title="Common Causes" icon={<AlertCircle className="h-4 w-4" />} items={c.causes} />
        <InfoBlock title="Symptoms" icon={<Sparkles className="h-4 w-4" />} items={c.symptoms} />
      </div>

      <InfoBlock title="Who Is At Risk" icon={<Users className="h-4 w-4" />} items={c.risk} bordered />

      {/* Treatments */}
      <Section title="Treatment Options Available At Bare & Beyond">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {c.treatments.map((t) => (
            <Link
              key={t}
              to="/treatments"
              className="group rounded-xl border border-border bg-surface p-5 hover:border-foreground/40 hover:bg-background transition"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-foreground/70 shrink-0 mt-0.5" />
                <div>
                  <div className="text-base font-medium">{t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Explore in Treatments{" "}
                    <ArrowRight className="inline h-3 w-3 transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground max-w-2xl">
          Treatment suitability is determined after a medical consultation. Individual outcomes may
          vary.
        </p>
      </Section>

      {/* Doctor */}
      <Section title="Recommended Doctor" bordered>
        <div className="rounded-xl border border-border bg-surface p-6 md:p-8 max-w-2xl">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Doctor for this concern
              </div>
              <div className="mt-1 text-xl font-medium">{c.doctor}</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Your recommended specialist for {c.name.toLowerCase()} at Bare & Beyond.
              </p>
              <Link
                to="/doctors"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
              >
                Meet Our Experts <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section title="Expected Results">
        <p className="text-base leading-relaxed text-muted-foreground max-w-3xl">{c.results}</p>
        <p className="mt-4 text-xs text-muted-foreground max-w-3xl">
          Disclaimer: Results are indicative and vary between individuals. No aesthetic outcome is
          guaranteed.
        </p>
      </Section>

      {/* FAQs */}
      <Section title="Frequently Asked Questions" bordered>
        <div className="divide-y divide-border rounded-xl border border-border bg-surface">
          {c.faqs.map((f) => (
            <details key={f.q} className="group p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                {f.q}
                <ChevronRight className="h-4 w-4 transition group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Related concerns */}
      {related.length > 0 && (
        <Section title={`Related ${c.group} Concerns`}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/concerns/$slug"
                params={{ slug: r.slug }}
                className="group rounded-xl border border-border bg-background p-5 hover:border-foreground/40 transition"
              >
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {r.group}
                </div>
                <div className="mt-2 text-base font-medium">{r.name}</div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium">
                  Learn more{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <section className="border-t border-border/60 bg-surface">
        <div className="container mx-auto px-6 py-16 max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            Get personalised guidance for {c.name.toLowerCase()}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Speak to our doctors for an evidence-based assessment and a plan tailored to you.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
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
        </div>
      </section>
    </div>
  );
}

function Section({
  title,
  children,
  bordered,
}: {
  title: string;
  children: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <section className={bordered ? "border-t border-border/60" : ""}>
      <div className="container mx-auto px-6 py-14 max-w-6xl">
        <h2 className="text-xl md:text-2xl font-medium tracking-tight mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function InfoBlock({
  title,
  items,
  icon,
  bordered,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <section className={bordered ? "border-t border-border/60 bg-surface" : "bg-surface"}>
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {icon}
          {title}
        </div>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 max-w-3xl">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/50 shrink-0" />
              <span className="text-foreground/85">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
