import { motion } from "framer-motion";
import { Instagram as IgIcon } from "lucide-react";
import aAsset from "@/assets/treatment-skin.jpg.asset.json";
import bAsset from "@/assets/treatment-hair.jpg.asset.json";
import cAsset from "@/assets/treatment-bridal.jpg.asset.json";
import dAsset from "@/assets/clinic-lounge.jpg.asset.json";
import eAsset from "@/assets/clinic-consult.jpg.asset.json";
import fAsset from "@/assets/clinic-reception.jpg.asset.json";
import gAsset from "@/assets/treatment-laser.jpg.asset.json";
import hAsset from "@/assets/clinic-treatment-room.jpg.asset.json";

const a = aAsset.url;
const b = bAsset.url;
const c = cAsset.url;
const d = dAsset.url;
const e = eAsset.url;
const f = fAsset.url;
const g = gAsset.url;
const h = hAsset.url;

const shots = [
  { src: a, span: "row-span-2 aspect-[3/4]" },
  { src: b, span: "aspect-square" },
  { src: c, span: "aspect-square" },
  { src: d, span: "aspect-[4/3]" },
  { src: e, span: "row-span-2 aspect-[3/4]" },
  { src: f, span: "aspect-[4/3]" },
  { src: g, span: "aspect-square" },
  { src: h, span: "aspect-square" },
];

export function InstagramSection() {
  return (
    <section className="section-luxe bg-ivory">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-eyebrow">@bareandbeyond</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-ink">
              Follow the <span className="italic text-primary">journey.</span>
            </h2>
          </motion.div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-ink/90 transition-colors self-start md:self-auto"
          >
            <IgIcon className="h-4 w-4" aria-hidden /> Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[200px] gap-3 md:gap-4">
          {shots.map((s, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl ${s.span}`}
            >
              <img
                src={s.src}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors grid place-items-center">
                <IgIcon className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
