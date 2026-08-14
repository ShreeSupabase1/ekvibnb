import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { motion } from "framer-motion";
import { Search, Phone, MessageCircle, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { BUSINESS } from "@/constants/business";
import { CONCERNS, CONCERN_CATEGORIES, type ConcernGroup } from "@/constants/concerns";
import { buildSEO, CLINIC_JSON_LD } from "@/lib/seo";
import { cn } from "@/lib/utils";

const WA_LINK = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
  "Hello Bare & Beyond, I would like to discuss a skin/hair concern.",
)}`;
const TEL_LINK = `tel:${BUSINESS.phonesRaw[0]}`;

export const Route = createFileRoute("/concerns/")({
  head: () =>
    buildSEO({
      title: "Skin, Hair & Wellness Concerns",
      description:
        "Explore expert guidance on skin, hair, anti-ageing, laser, pigmentation, body and wellness concerns at Bare & Beyond Aesthetics, Navi Mumbai.",
      path: "/concerns",
      jsonLd: [
        CLINIC_JSON_LD,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Concerns", item: "/concerns" },
          ],
        },
      ],
    }),
  component: ConcernsIndex,
});

function ConcernsIndex() {
  const [query, setQuery] = React.useState("");
  const [group, setGroup] = React.useState<ConcernGroup | "All">("All");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return CONCERNS.filter((c) => {
      if (group !== "All" && c.group !== group) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q)
      );
    });
  }, [query, group]);

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-surface">
        <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" /> Patient Education
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-medium tracking-tight text-foreground">
              Find The Right Solution For Your Concern
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Every skin, hair and wellness concern is unique. Explore expert guidance and discover
              suitable treatment options based on your individual needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/treatments"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
              >
                Explore Treatments <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-surface"
              >
                <Calendar className="h-4 w-4" /> Book Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="border-b border-border/60 bg-background sticky top-16 z-30">
        <div className="container mx-auto px-6 py-5 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="relative flex-1">
              <span className="sr-only">Search concerns</span>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search concerns e.g. Acne, Hair Fall, Pigmentation…"
                className="w-full rounded-md border border-border bg-background pl-9 pr-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
            <div className="flex gap-2 overflow-x-auto -mx-1 px-1 py-1">
              {(["All", ...CONCERN_CATEGORIES.map((c) => c.group)] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGroup(g as ConcernGroup | "All")}
                  className={cn(
                    "shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
                    group === g
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-muted-foreground hover:text-foreground",
                  )}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="border-b border-border/60">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">Browse by category</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Understand the areas we care for and the concerns that fall under each.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONCERN_CATEGORIES.map((cat) => {
              const count = CONCERNS.filter((c) => c.group === cat.group).length;
              return (
                <button
                  key={cat.group}
                  onClick={() => setGroup(cat.group)}
                  className={cn(
                    "text-left rounded-xl border border-border bg-surface p-5 hover:border-foreground/40 transition",
                    group === cat.group && "border-foreground/70 bg-background",
                  )}
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {count} concerns
                  </div>
                  <div className="mt-2 text-lg font-medium">{cat.label}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cat.blurb}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Concerns grid */}
      <section>
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                {group === "All" ? "All Concerns" : group}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {filtered.length} {filtered.length === 1 ? "concern" : "concerns"} found
              </p>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-10 rounded-lg border border-dashed border-border p-10 text-center text-muted-foreground">
              No concerns match your search. Try a different keyword.
            </div>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((c) => (
                <Link
                  key={c.slug}
                  to="/concerns/$slug"
                  params={{ slug: c.slug }}
                  className="group rounded-xl border border-border bg-background p-6 hover:border-foreground/40 transition"
                >
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.group}
                  </div>
                  <div className="mt-3 text-lg font-medium">{c.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {c.tagline}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                    Learn more{" "}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-surface">
        <div className="container mx-auto px-6 py-16 max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
            Not sure which concern applies to you?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Speak to our doctors for a personalised assessment and evidence-based recommendations.
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
