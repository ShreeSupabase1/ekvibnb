import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import founderAsset from "@/assets/doctors/dr-abhishek.jpg.asset.json";
const founderImg = founderAsset.url;
import { BUSINESS } from "@/constants/business";

const credentials = [
  "UK Board Certified Clinical Cosmetologist",
  "International Trainer — 2,000+ Doctors Trained",
  "Advanced Laser & Aesthetic Specialist",
  "Clinical Cosmetology & Wellness Expert",
];

export function Experts() {
  return (
    <section id="founder" className="section-luxe bg-surface border-y border-border">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-md ring-1 ring-border bg-background">
              <img
                src={founderImg}
                alt="Dr. Abhishek Sandeep Sharma, Founder — Bare & Beyond Aesthetics"
                loading="lazy"
                width={1160}
                height={1160}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="text-eyebrow">Meet the Founder</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-medium tracking-[-0.02em] text-ink">
              Dr. Abhishek Sandeep Sharma
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Founder · Wellness Expert · Clinical Cosmetologist
            </p>

            <p className="mt-6 text-[17px] leading-[1.75] text-ink/80 max-w-xl">
              Founder of Bare &amp; Beyond and an experienced aesthetic physician with a strong
              background in clinical cosmetology, beauty lasers, non-invasive rejuvenation and
              wellness-focused care. A UK Board Certified Clinical Cosmetologist from a
              second-generation wellness background, Dr. Sharma has worked with reputed brands
              including Dr. Batra&apos;s and has trained over 2,000 doctors in clinical
              cosmetology, aesthetic procedures and lasers.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-ink/85">
                  <BadgeCheck className="h-4 w-4 text-accent mt-0.5 shrink-0" aria-hidden strokeWidth={1.75} />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="/doctors"
                className="inline-flex items-center gap-2 rounded-md border border-ink bg-ink text-white px-5 py-3 text-sm font-medium hover:bg-ink/90 transition-colors"
              >
                View Full Profile <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-ink hover:border-ink transition-colors"
              >
                Consult With Dr. Sharma
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
