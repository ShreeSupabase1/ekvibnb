import receptionAsset from "@/assets/clinic-reception.jpg.asset.json";
import consultAsset from "@/assets/clinic-consult.jpg.asset.json";
import loungeAsset from "@/assets/clinic-lounge.jpg.asset.json";
import treatmentRoomAsset from "@/assets/clinic-treatment-room.jpg.asset.json";
import interiorAsset from "@/assets/clinic-interior.jpg.asset.json";
import laserRoomAsset from "@/assets/treatment-laser.jpg.asset.json";
import techLaserAsset from "@/assets/tech-laser.jpg.asset.json";
import techAIAsset from "@/assets/skin-analysis-consultation.png.asset.json";
import treatmentSkinAsset from "@/assets/treatment-skin.jpg.asset.json";
import treatmentHairAsset from "@/assets/treatment-hair.jpg.asset.json";
import treatmentBridalAsset from "@/assets/treatment-bridal.jpg.asset.json";
import drAbhishek from "@/assets/doctors/dr-abhishek.jpg.asset.json";
import drDhruvi from "@/assets/doctors/dr-dhruvi.jpg.asset.json";
import drSwethana from "@/assets/doctors/dr-swethana.jpg.asset.json";
import drGaurav from "@/assets/doctors/dr-gaurav.jpg.asset.json";
import karuna from "@/assets/doctors/karuna.jpg.asset.json";

const reception = receptionAsset.url;
const consult = consultAsset.url;
const lounge = loungeAsset.url;
const treatmentRoom = treatmentRoomAsset.url;
const interior = interiorAsset.url;
const laserRoom = laserRoomAsset.url;
const techLaser = techLaserAsset.url;
const techAI = techAIAsset.url;
const treatmentSkin = treatmentSkinAsset.url;
const treatmentHair = treatmentHairAsset.url;
const treatmentBridal = treatmentBridalAsset.url;

/**
 * Gallery data model — mirrors the future Supabase schema.
 * When Cloud is wired in, replace this static array with a fetch of
 * `gallery_items` ordered by `display_order`, filtered by `visible = true`.
 */
export type GalleryCategory =
  | "clinic"
  | "doctors"
  | "skin"
  | "laser"
  | "hair"
  | "injectables"
  | "wellness"
  | "events"
  | "awards";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
  displayOrder: number;
  visible: boolean;
}

export const GALLERY_CATEGORIES: { key: GalleryCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "clinic", label: "Clinic" },
  { key: "doctors", label: "Doctors" },
  { key: "skin", label: "Skin Treatments" },
  { key: "laser", label: "Laser" },
  { key: "hair", label: "Hair" },
  { key: "injectables", label: "Injectables" },
  { key: "wellness", label: "Wellness" },
  { key: "events", label: "Events" },
  { key: "awards", label: "Awards" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Clinic
  { id: "c1", title: "Reception & Branding", category: "clinic", description: "The signature Bare & Beyond reception with clinical warmth.", image: reception, alt: "Bare & Beyond reception and branding wall", featured: true, displayOrder: 1, visible: true },
  { id: "c2", title: "Consultation Suite", category: "clinic", description: "Private, doctor-led consultation environment.", image: consult, alt: "Doctor consultation desk at Bare & Beyond", displayOrder: 2, visible: true },
  { id: "c3", title: "Private Consult Nook", category: "clinic", description: "Discreet corner for one-to-one discussions.", image: lounge, alt: "Private consultation nook", displayOrder: 3, visible: true },
  { id: "c4", title: "Treatment Suite", category: "clinic", description: "Sterile suite for facials, peels and non-invasive procedures.", image: treatmentRoom, alt: "Sterile treatment suite at Bare & Beyond", displayOrder: 4, visible: true },
  { id: "c5", title: "Clinic Signage", category: "clinic", description: "The Bare & Beyond identity at the entrance.", image: interior, alt: "Clinic signage and entrance", displayOrder: 5, visible: true },

  // Laser & Devices
  { id: "l1", title: "Laser & Device Bay", category: "laser", description: "Diode and pico platforms for hair reduction and pigmentation.", image: laserRoom, alt: "Laser and device bay", featured: true, displayOrder: 10, visible: true },
  { id: "l2", title: "Pico Laser Platform", category: "laser", description: "Precision laser for pigmentation, tattoo and skin resurfacing.", image: techLaser, alt: "Pico laser device", displayOrder: 11, visible: true },

  // Skin
  { id: "s1", title: "AI Skin Analysis", category: "skin", description: "Data-driven skin evaluation to guide every protocol.", image: techAI, alt: "AI skin analysis system", displayOrder: 20, visible: true },
  { id: "s2", title: "Medi-Facial Setup", category: "skin", description: "Medical-grade facial preparation station.", image: treatmentSkin, alt: "Medi-facial treatment", displayOrder: 21, visible: true },

  // Hair
  { id: "h1", title: "Hair & Scalp Room", category: "hair", description: "Trichology-led environment for GFC, PRP and scalp care.", image: treatmentHair, alt: "Hair and scalp treatment room", displayOrder: 30, visible: true },

  // Injectables / Bridal proxy
  { id: "i1", title: "Aesthetic Enhancement", category: "injectables", description: "Suite prepared for toxin and filler protocols.", image: treatmentBridal, alt: "Aesthetic enhancement suite", displayOrder: 40, visible: true },

  // Doctors
  { id: "d1", title: "Dr. Abhishek Sandeep Sharma", category: "doctors", description: "Founder · UK Board Certified Clinical Cosmetologist.", image: drAbhishek.url, alt: "Dr. Abhishek Sandeep Sharma", featured: true, displayOrder: 50, visible: true },
  { id: "d2", title: "Dr. Dhruvi Pandya", category: "doctors", description: "Co-Founder · Cosmetologist & Certified Makeup Artist.", image: drDhruvi.url, alt: "Dr. Dhruvi Pandya", displayOrder: 51, visible: true },
  { id: "d3", title: "Dr. Swethana Devara", category: "doctors", description: "Aesthetic Physician (MBBS).", image: drSwethana.url, alt: "Dr. Swethana Devara", displayOrder: 52, visible: true },
  { id: "d4", title: "Dr. Gaurav Naik", category: "doctors", description: "Oral & Maxillofacial Surgeon.", image: drGaurav.url, alt: "Dr. Gaurav Naik", displayOrder: 53, visible: true },
  { id: "d5", title: "Karuna Sharma", category: "doctors", description: "UK Board Certified PMU Artist.", image: karuna.url, alt: "Karuna Sharma, PMU Artist", displayOrder: 54, visible: true },
];

// ---------- Patient transformations (structure only, real images later) ----------
export interface Transformation {
  id: string;
  treatment: string;
  sessions: string;
  duration: string;
  summary: string;
  doctor: string;
  beforeImage?: string;
  afterImage?: string;
}

export const TRANSFORMATIONS: Transformation[] = [
  { id: "t1", treatment: "Pico Laser — Pigmentation", sessions: "4 Sessions", duration: "3 Months", summary: "Progressive reduction of melasma and uneven tone with a doctor-led pico protocol.", doctor: "Dr. Abhishek Sandeep Sharma" },
  { id: "t2", treatment: "GFC Hair Restoration", sessions: "6 Sessions", duration: "4 Months", summary: "Visible improvement in hair density and scalp coverage using Growth Factor Concentrate.", doctor: "Dr. Abhishek Sandeep Sharma" },
  { id: "t3", treatment: "Signature Medi-Facial", sessions: "3 Sessions", duration: "6 Weeks", summary: "Refined skin texture, hydration and glow with a clinical medi-facial regimen.", doctor: "Dr. Dhruvi Pandya" },
  { id: "t4", treatment: "Botulinum Toxin — Upper Face", sessions: "1 Session", duration: "2 Weeks Review", summary: "Softening of dynamic lines while preserving natural expression.", doctor: "Dr. Swethana Devara" },
  { id: "t5", treatment: "Diode Laser Hair Reduction", sessions: "8 Sessions", duration: "10 Months", summary: "Long-term hair reduction with a medically supervised diode protocol.", doctor: "Dr. Abhishek Sandeep Sharma" },
  { id: "t6", treatment: "Bridal Glow Plan", sessions: "Custom Plan", duration: "3 Months", summary: "Personalised skin, hair and glow programme timed to the wedding date.", doctor: "Dr. Dhruvi Pandya" },
];

// ---------- Video gallery (YouTube-ready placeholders) ----------
export interface VideoItem {
  id: string;
  title: string;
  category: "tour" | "doctor" | "demo" | "testimonial" | "education";
  description: string;
  youtubeId?: string; // set when a real video is uploaded
}

export const VIDEO_ITEMS: VideoItem[] = [
  { id: "v1", title: "Clinic Tour", category: "tour", description: "A walk-through of Bare & Beyond Aesthetics." },
  { id: "v2", title: "Meet Dr. Abhishek Sharma", category: "doctor", description: "The founder on our clinical philosophy." },
  { id: "v3", title: "Pico Laser Demonstration", category: "demo", description: "How our pico laser treatments are performed." },
  { id: "v4", title: "Patient Testimonial", category: "testimonial", description: "A patient shares her experience with us." },
  { id: "v5", title: "Understanding Medi-Facials", category: "education", description: "What sets medical facials apart from spa facials." },
  { id: "v6", title: "GFC vs PRP Explained", category: "education", description: "Doctor-led explainer on hair restoration options." },
];

// ---------- Written testimonials (admin-ready) ----------
export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  review: string;
  source: "google" | "written" | "video";
}

export const TESTIMONIALS: Testimonial[] = [
  { id: "r1", name: "Ananya S.", treatment: "Pico Laser — Pigmentation", rating: 5, review: "Dr. Abhishek explained every step. My melasma has visibly reduced and the clinic feels genuinely medical, not a spa.", source: "google" },
  { id: "r2", name: "Rhea M.", treatment: "Signature Medi-Facial", rating: 5, review: "The consultation was thorough and honest. No upselling — just a clear plan. My skin has never looked better.", source: "google" },
  { id: "r3", name: "Karan D.", treatment: "GFC Hair Restoration", rating: 5, review: "Six sessions in and my hair line is clearly denser. The team is precise and professional.", source: "written" },
  { id: "r4", name: "Priya K.", treatment: "Diode Laser Hair Reduction", rating: 5, review: "Painless, punctual and doctor-supervised throughout. Exactly what I was looking for.", source: "google" },
  { id: "r5", name: "Neha R.", treatment: "Bridal Glow Plan", rating: 5, review: "Started three months before the wedding — the results were natural and camera-ready.", source: "written" },
  { id: "r6", name: "Aarav P.", treatment: "Botulinum Toxin", rating: 5, review: "Subtle, natural result. Dr. Swethana clearly knows facial anatomy inside out.", source: "google" },
];
