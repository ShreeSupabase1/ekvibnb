import { motion } from "framer-motion";
import { Cpu, ScanFace, Sparkles, Building2 } from "lucide-react";
import laserImgAsset from "@/assets/tech-laser.jpg.asset.json";
import aiImgAsset from "@/assets/skin-analysis-consultation.png.asset.json";
import roomImgAsset from "@/assets/clinic-treatment-room.jpg.asset.json";

const laserImg = laserImgAsset.url;
const aiImg = aiImgAsset.url;
const roomImg = roomImgAsset.url;

const pillars = [
  {
    icon: Cpu,
    title: "Advanced Laser Platforms",
    desc: "USFDA-cleared Pico-generation lasers for pigmentation, tone, texture and precision hair reduction.",
    img: laserImg,
    tag: "Laser Technology",
  },
  {
    icon: ScanFace,
    title: "AI Skin Analysis",
    desc: "Multi-spectral imaging maps pores, pigment, hydration and photo-damage before any treatment plan is written.",
    img: aiImg,
    tag: "AI Diagnostics",
  },
  {
    icon: Building2,
    title: "Medical-Grade Treatment Rooms",
    desc: "Sterile, temperature-controlled clinical rooms designed to hospital-grade safety standards.",
    img: roomImg,
    tag: "Clinical Environment",
  },
];

export function Technology() {
  return (
    <section id="technology" className="section-luxe bg-ink text-white">
      <div className="container-luxe">
        <div className="max-w-2xl">
          <span className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-accent">
            Technology
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-[44px] font-medium tracking-[-0.02em] text-white">
            Clinical technology, engineered for precision.
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-[17px] leading-relaxed">
            Every device at Bare &amp; Beyond is selected for clinical evidence, patient safety
            and consistent, measurable outcomes.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group rounded-md overflow-hidden bg-white/[0.04] ring-1 ring-white/10"
            >
              <div className="aspect-[4/3] overflow-hidden bg-white/5">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-accent">
                  <p.icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                  {p.tag}
                </div>
                <h3 className="mt-3 text-lg md:text-xl font-medium text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-6 text-sm text-white/60">
          <Sparkles className="h-4 w-4 text-accent" aria-hidden />
          <span>USFDA-cleared platforms</span>
          <span className="text-white/25">·</span>
          <span>CE-certified equipment</span>
          <span className="text-white/25">·</span>
          <span>Physician-supervised protocols</span>
        </div>
      </div>
    </section>
  );
}
