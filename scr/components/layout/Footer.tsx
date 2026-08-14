import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/constants/business";
import logoAsset from "@/assets/logo.png.asset.json";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ivory border-t border-border">
      <div className="container-luxe py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link to="/" className="inline-block" aria-label={BUSINESS.name}>
            <img
              src={logoAsset.url}
              alt={BUSINESS.name}
              className="h-14 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
            {BUSINESS.tagline}. A science-backed medical aesthetic clinic in Nerul, Navi Mumbai.
          </p>
          <div className="flex gap-3 mt-8">
            {[
              { icon: Instagram, href: BUSINESS.social.instagram, label: "Instagram" },
              { icon: Facebook, href: BUSINESS.social.facebook, label: "Facebook" },
              { icon: Youtube, href: BUSINESS.social.youtube, label: "YouTube" },
            ]
              .filter((s) => s.href && s.href !== "#")
              .map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border text-ink hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-eyebrow mb-5">Explore</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <a
                  href={l.to}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-eyebrow mb-5">Visit</h4>
          <address className="not-italic text-sm text-muted-foreground leading-relaxed">
            <div className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" aria-hidden />
              <div>
                {BUSINESS.address.line1}
                <br />
                {BUSINESS.address.line2}
                <br />
                {BUSINESS.address.line3}
                <br />
                {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.postal}
              </div>
            </div>
          </address>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-eyebrow mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {BUSINESS.phones.map((p, i) => (
              <li key={p}>
                <a
                  href={`tel:${BUSINESS.phonesRaw[i]}`}
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden />
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden />
                {BUSINESS.email}
              </a>
            </li>
          </ul>

          <h4 className="text-eyebrow mb-4 mt-8">Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {BUSINESS.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-foreground/80">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <p className="text-muted-foreground/80">
            Crafted with care in Navi Mumbai.
          </p>
        </div>
      </div>
    </footer>
  );
}
