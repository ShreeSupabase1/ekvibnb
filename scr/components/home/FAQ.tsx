import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Do I need a consultation before treatment?",
    a: "Yes. Every treatment at Bare & Beyond begins with a personalized consultation so we can understand your concerns, medical history and goals before recommending anything.",
  },
  {
    q: "Are your treatments safe?",
    a: "All our treatments are performed by qualified medical professionals using USFDA-cleared devices, medical-grade products and evidence-based protocols.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on your concern and skin response. Your doctor will share a clear, honest session plan during your consultation — no upsells.",
  },
  {
    q: "Do you treat men as well?",
    a: "Absolutely. We treat men and women equally across skin, hair, laser, injectable and wellness services.",
  },
  {
    q: "Do you offer bridal packages?",
    a: "Yes — our Bridal Glow Plan and Beyond Luxe Bridal Plan combine skin, hair, wellness and beauty planning around your wedding date and specific concerns.",
  },
  {
    q: "Is there any downtime?",
    a: "Most of our signature treatments have zero to minimal downtime. Anything with recovery requirements will be clearly explained upfront.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-luxe bg-background">
      <div className="container-luxe grid lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <span className="text-eyebrow">Frequently Asked</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
            Answered by our doctors.
          </h2>
          <p className="mt-6 text-muted-foreground text-base leading-relaxed max-w-md">
            Still have a question? Message us on WhatsApp — a member of our clinical team replies personally.
          </p>
        </motion.div>

        <div className="lg:col-span-7 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left"
                >
                  <span className="text-base md:text-lg font-medium text-ink tracking-tight">{f.q}</span>
                  <span
                    className={`h-10 w-10 shrink-0 rounded-full border border-border grid place-items-center transition-all ${
                      isOpen ? "bg-primary text-primary-foreground border-primary rotate-45" : "text-ink"
                    }`}
                  >
                    <Plus className="h-4 w-4" aria-hidden />
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6 md:pb-7" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground text-[15px] md:text-base leading-relaxed max-w-2xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
