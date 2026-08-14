export const BUSINESS = {
  name: "Bare & Beyond Aesthetics",
  shortName: "Bare & Beyond",
  tagline: "Where Skin, Beauty & Wellness Go Beyond Ordinary",
  category: "Premium Medical Aesthetic Clinic",
  description:
    "A premium medical aesthetic clinic in Nerul, Navi Mumbai offering science-backed skin, hair, laser, injectable and wellness treatments personalised to you.",
  phones: ["+91 96192 40261"],
  phonesRaw: ["919619240261"],
  whatsapp: "919619240261",
  email: "hello@bareandbeyond.in",
  address: {
    line1: "Office No. 208, Agrawal Corner",
    line2: "Commercial Centre Premises, Plot No. 21",
    line3: "Sector 21, Nerul",
    city: "Navi Mumbai",
    state: "Maharashtra",
    country: "India",
    postal: "400706",
  },
  hours: [
    { day: "Monday – Sunday", time: "10:00 AM – 8:00 PM" },
  ],
  social: {
    instagram: "https://instagram.com/ekvibarebeyond",
    instagramHandle: "@ekvibarebeyond",
    facebook: "#",
    youtube: "#",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Treatments", to: "/treatments" },
  { label: "Doctors", to: "/doctors" },
  { label: "Concerns", to: "/concerns" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;
