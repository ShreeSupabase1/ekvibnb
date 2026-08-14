import { motion } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/constants/business";

export function FinalCTA() {
  return (
    <section id="contact" className="relative bg-ink text-white border-t border-white/10">
      <div className="container-luxe relative py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-accent">
              Experience the Beyond Difference
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em] text-white leading-[1.1]">
              Where beauty, wellness &amp; confidence come together.
            </h2>
            <p className="mt-6 text-white/70 text-base md:text-[17px] leading-relaxed max-w-xl">
              Whether your goal is healthy skin, hair restoration, laser treatments, facial
              rejuvenation or a wellness transformation — step into a complete, science-backed
              and personalized clinical experience.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-md bg-white text-ink px-6 py-3.5 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden /> Book Appointment
              </a>
              <a
                href={`tel:${BUSINESS.phonesRaw[0]}`}
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/[0.04] text-white px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden /> Call Now
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/[0.04] text-white px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 lg:pl-10 lg:border-l border-white/10 space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent">
                <MapPin className="h-3.5 w-3.5" aria-hidden /> Visit
              </div>
              <div className="mt-3 text-white/90 leading-relaxed text-[15px]">
                {BUSINESS.address.line1}
                <br />
                {BUSINESS.address.line3}, {BUSINESS.address.city}
                <br />
                {BUSINESS.address.state} {BUSINESS.address.postal}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent">
                <Phone className="h-3.5 w-3.5" aria-hidden /> Contact
              </div>
              <div className="mt-3 text-white/90 text-[15px]">
                {BUSINESS.phones[0]}
                <br />
                {BUSINESS.email}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent">
                <Clock className="h-3.5 w-3.5" aria-hidden /> Hours
              </div>
              <div className="mt-3 text-white/90 text-[15px] space-y-1">
                {BUSINESS.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-6">
                    <span>{h.day}</span>
                    <span className="text-white/70">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
