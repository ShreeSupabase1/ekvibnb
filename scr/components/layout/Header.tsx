import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { BUSINESS, NAV_LINKS } from "@/constants/business";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo.png.asset.json";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent",
        )}
      >
        <div className="container-luxe flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center" aria-label={BUSINESS.name}>
            <img
              src={logoAsset.url}
              alt={BUSINESS.name}
              className="h-12 md:h-14 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
              return (
                <a
                  key={link.to}
                  href={link.to}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative text-sm transition-colors font-medium tracking-wide group",
                    isActive ? "text-primary" : "text-foreground/85 hover:text-primary",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "pointer-events-none absolute left-0 -bottom-1 h-px bg-accent transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS.phonesRaw[0]}`}
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
              aria-label="Call clinic"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {BUSINESS.phones[0]}
            </a>
            <a
              href="/book-appointment"
              className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Appointment
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-border text-ink hover:bg-ivory transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-background flex flex-col"
              role="dialog"
              aria-label="Menu"
            >
              <div className="flex items-center justify-between h-20 px-6 border-b border-border">
                <img src={logoAsset.url} alt={BUSINESS.name} className="h-10 w-auto object-contain" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-ivory"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>
              <nav className="flex-1 px-6 py-8 flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
                  return (
                    <a
                      key={link.to}
                      href={link.to}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "text-lg font-medium tracking-tight py-4 border-b border-border/60 transition-colors",
                        isActive ? "text-primary" : "text-ink hover:text-primary",
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
              <div className="p-6 border-t border-border space-y-3">
                <a
                  href={`tel:${BUSINESS.phonesRaw[0]}`}
                  className="block text-sm text-muted-foreground"
                >
                  {BUSINESS.phones[0]}
                </a>
                <a
                  href="/book-appointment"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-medium"
                >
                  Book Appointment
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
