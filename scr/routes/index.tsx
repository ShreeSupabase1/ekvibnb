import { createFileRoute } from "@tanstack/react-router";
import { buildSEO, CLINIC_JSON_LD } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Experts } from "@/components/home/Experts";
import { Treatments } from "@/components/home/Treatments";
import { Technology } from "@/components/home/Technology";
import { Packages } from "@/components/home/Packages";

import { Journey } from "@/components/home/Journey";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export const Route = createFileRoute("/")({
  head: () =>
    buildSEO({
      title: "Doctor-Led Skin, Hair, Laser & Aesthetic Clinic in Nerul, Navi Mumbai",
      description:
        "Bare & Beyond Aesthetics is a doctor-led medical aesthetic clinic in Nerul, Navi Mumbai. Advanced skin, hair, laser and wellness treatments delivered with clinical precision and personalized care.",
      path: "/",
      jsonLd: CLINIC_JSON_LD,
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WhyChoose />
      <Experts />
      <Treatments />
      <Technology />
      <Packages />
      <Journey />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
