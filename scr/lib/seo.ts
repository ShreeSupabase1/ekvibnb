import { BUSINESS } from "@/constants/business";

/* Loose types so TanStack's head() accepts our output without friction. */
type Meta = Record<string, unknown>;
type LinkTag = Record<string, unknown>;
type ScriptTag = Record<string, unknown>;

interface SEOOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "product";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const DEFAULT_TITLE = `${BUSINESS.name} — ${BUSINESS.tagline}`;
const DEFAULT_DESCRIPTION = BUSINESS.description;

/**
 * Reusable SEO builder for TanStack Start `head()`.
 * Returns { meta, links, scripts } already-shaped for a route.
 */
export function buildSEO(opts: SEOOptions = {}) {
  const title = opts.title ? `${opts.title} — ${BUSINESS.shortName}` : DEFAULT_TITLE;
  const description = opts.description ?? DEFAULT_DESCRIPTION;
  const path = opts.path ?? "/";
  const type = opts.type ?? "website";

  const meta: Meta[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: path },
    { property: "og:site_name", content: BUSINESS.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (opts.image) {
    meta.push({ property: "og:image", content: opts.image });
    meta.push({ name: "twitter:image", content: opts.image });
  }
  if (opts.noindex) meta.push({ name: "robots", content: "noindex,nofollow" });

  const links: LinkTag[] = [{ rel: "canonical", href: path }];

  const scripts: ScriptTag[] = [];
  if (opts.jsonLd) {
    const payload = Array.isArray(opts.jsonLd) ? opts.jsonLd : [opts.jsonLd];
    for (const p of payload) {
      scripts.push({ type: "application/ld+json", children: JSON.stringify(p) });
    }
  }

  return { meta, links, scripts };
}

export const CLINIC_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: BUSINESS.name,
  description: BUSINESS.description,
  telephone: BUSINESS.phones[0],
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}, ${BUSINESS.address.line3}`,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.postal,
    addressCountry: BUSINESS.address.country,
  },
  areaServed: "Navi Mumbai",
  medicalSpecialty: ["Dermatology", "Aesthetic Medicine", "Laser", "Wellness"],
};
