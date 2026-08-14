import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=848e23beb11ebc77&q=Ekvi+Bare+and+Beyond+Aesthetics+Reviews";

const reviews = [
  {
    name: "Rachita Sharma",
    initial: "R",
    when: "4 days ago",
    rating: 5,
    quote:
      "I first visited Ekvi for my allergic skin concerns and had a very detailed consultation with Dr. Abhishek. He explained how many skin issues can be linked to gut health, which gave me a completely different perspective. I recently went back for the Glass Hydra Facial and I'm genuinely amazed by the instant glow.",
    url: "https://share.google/HAZwJAwIwvgrydBpd",
  },
  {
    name: "Kirat",
    initial: "K",
    when: "a week ago",
    rating: 5,
    quote:
      "Had a great experience at the clinic. Dr. Abhishek is very knowledgeable, patient, and professional. The staff was courteous, and the overall service was excellent. Highly recommended!",
    url: "https://share.google/23kL5FaHkjZ9HyRAQ",
  },
  {
    name: "Sweta Baskaran",
    initial: "S",
    when: "2 weeks ago",
    rating: 5,
    quote:
      "One of the most spacious and clean clinics for all your derm related problems. Do visit the clinic for a better looking future 😉",
    url: "https://share.google/1P4ToteP1ffSNvipL",
  },
  {
    name: "Abhishek Sharma",
    initial: "A",
    when: "2 weeks ago",
    rating: 5,
    quote:
      "Superb clinic — special mention to their customized treatments. Personalized care every step of the way.",
    url: "https://share.google/H0HsiOSqUe2Fp8buf",
  },
];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z" />
    </svg>
  );
}

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>("[data-review-card]")[i];
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const next = Math.max(0, Math.min(reviews.length - 1, activeIndex + dir));
    scrollToIndex(next);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = el.querySelectorAll<HTMLElement>("[data-review-card]");
      let best = 0;
      let bestDist = Infinity;
      const center = el.scrollLeft + el.clientWidth / 2;
      cards.forEach((c, i) => {
        const cCenter = c.offsetLeft + c.clientWidth / 2 - el.offsetLeft;
        const d = Math.abs(cCenter - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActiveIndex(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="testimonials" className="section-luxe bg-surface border-y border-border">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-eyebrow">Patient Experiences</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-medium tracking-[-0.02em] text-ink">
              Real patients. Real Google reviews.
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <GoogleG className="h-5 w-5" />
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden />
              ))}
            </div>
            <span className="font-medium text-ink">5.0</span>
            <span>on Google</span>
          </div>
        </div>

        <div className="relative mt-12">
          {/* Arrows */}
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={activeIndex === 0}
            aria-label="Previous review"
            className="hidden md:grid absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 h-11 w-11 place-items-center rounded-full bg-background border border-border text-ink shadow-sm hover:border-ink/50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={activeIndex === reviews.length - 1}
            aria-label="Next review"
            className="hidden md:grid absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 h-11 w-11 place-items-center rounded-full bg-background border border-border text-ink shadow-sm hover:border-ink/50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((r, i) => (
              <motion.a
                key={r.name + i}
                data-review-card
                href={r.url}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45 }}
                className="snap-center shrink-0 w-[280px] sm:w-[320px] rounded-md bg-background border border-border p-5 hover:border-ink/40 transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-9 w-9 rounded-full bg-ink text-white grid place-items-center text-xs font-medium">
                      {r.initial}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-ink leading-tight">{r.name}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{r.when}</div>
                    </div>
                  </div>
                  <GoogleG className="h-4 w-4 shrink-0" />
                </div>

                <div className="mt-3 flex items-center gap-0.5" aria-label={`${r.rating} out of 5`}>
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden />
                  ))}
                </div>

                <p className="mt-2.5 text-[13px] text-ink/85 leading-[1.6] line-clamp-6">{r.quote}</p>

                <div className="mt-auto pt-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-ink/70">
                  Read on Google
                  <ExternalLink className="h-3 w-3" aria-hidden />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-1.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-ink" : "w-1.5 bg-ink/25"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md bg-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-ink/90 transition-colors"
          >
            <GoogleG className="h-4 w-4" />
            See all reviews on Google
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
