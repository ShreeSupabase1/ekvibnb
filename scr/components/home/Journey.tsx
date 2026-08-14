import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Consultation", desc: "A detailed conversation about your goals, medical history and expectations." },
  { n: "02", title: "Skin Analysis", desc: "AI-assisted multi-spectral imaging maps your skin at diagnostic level." },
  { n: "03", title: "Personalized Plan", desc: "A written protocol from your physician — treatments, timeline and outcomes." },
  { n: "04", title: "Treatment", desc: "Procedures delivered in medical-grade rooms under clinical supervision." },
  { n: "05", title: "Recovery", desc: "Post-care instructions, home protocols and 24/7 clinical support." },
  { n: "06", title: "Follow-up", desc: "Scheduled reviews to measure progress and refine your programme." },
];

export function Journey() {
  return (
    <section id="journey" className="section-luxe bg-background">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <span className="text-eyebrow">Patient Journey</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-medium tracking-[-0.02em] text-ink">
            A clear, clinical process — from first visit to follow-up.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 border-t border-border pt-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="relative"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-medium tracking-[0.2em] text-accent tabular-nums">
                  {s.n}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-4 text-lg md:text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
