import { motion } from "framer-motion";
import receptionAsset from "@/assets/clinic-reception.jpg.asset.json";
import consultAsset from "@/assets/clinic-consult.jpg.asset.json";
import roomAsset from "@/assets/clinic-treatment-room.jpg.asset.json";
import laserAsset from "@/assets/treatment-laser.jpg.asset.json";
import loungeAsset from "@/assets/clinic-lounge.jpg.asset.json";
import interiorAsset from "@/assets/clinic-interior.jpg.asset.json";

const reception = receptionAsset.url;
const consult = consultAsset.url;
const room = roomAsset.url;
const laser = laserAsset.url;
const lounge = loungeAsset.url;
const interior = interiorAsset.url;

const tiles = [
  { src: reception, label: "Reception & Branding", span: "md:col-span-6 md:row-span-2 aspect-[4/3] md:aspect-auto" },
  { src: consult, label: "Consultation Suite", span: "md:col-span-3 aspect-[4/5]" },
  { src: room, label: "Treatment Suite", span: "md:col-span-3 aspect-[4/5]" },
  { src: laser, label: "Laser & Device Bay", span: "md:col-span-4 aspect-[4/5]" },
  { src: lounge, label: "Private Consult Nook", span: "md:col-span-4 aspect-[4/5]" },
  { src: interior, label: "Clinic Signage", span: "md:col-span-4 aspect-[4/5]" },
];

export function ClinicGallery() {
  return (
    <section className="section-luxe bg-background">
      <div className="container-luxe">
        <div className="grid md:grid-cols-12 items-end gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7"
          >
            <span className="text-eyebrow">Inside the Clinic</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-ink font-semibold">
              A calm, clinical environment.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 text-muted-foreground text-base leading-relaxed"
          >
            Purpose-built consultation and treatment rooms, sterilized to hospital-grade standards, designed for quiet privacy.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-12 gap-3 md:gap-4">
          {tiles.map((t, i) => (
            <motion.figure
              key={t.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
              className={`group relative overflow-hidden rounded-lg col-span-12 ${t.span}`}
            >
              <img
                src={t.src}
                alt={t.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <figcaption className="absolute bottom-4 left-5 md:bottom-5 md:left-6 text-white">
                <div className="text-sm md:text-base font-medium tracking-tight">{t.label}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
