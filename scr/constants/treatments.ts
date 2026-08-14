export interface Treatment {
  name: string;
  desc?: string;
  idealFor?: string;
  duration?: string;
  downtime?: string;
  from?: string;
  items?: string[];
}

export interface TreatmentCategory {
  id: string;
  title: string;
  short: string;
  intro: string;
  image?: string;
  treatments: Treatment[];
  groups?: { title: string; treatments: Treatment[] }[];
}

import laserImgAsset from "@/assets/treatment-laser.jpg.asset.json";
import hairImgAsset from "@/assets/treatment-hair.jpg.asset.json";
import bridalImgAsset from "@/assets/treatment-bridal.jpg.asset.json";
import roomImgAsset from "@/assets/clinic-treatment-room.jpg.asset.json";
import consultImgAsset from "@/assets/clinic-consult.jpg.asset.json";
import interiorImgAsset from "@/assets/clinic-interior.jpg.asset.json";
import skinImgAsset from "@/assets/treatment-skin.jpg.asset.json";
import aiImgAsset from "@/assets/skin-analysis-consultation.png.asset.json";

const laserImg = laserImgAsset.url;
const hairImg = hairImgAsset.url;
const bridalImg = bridalImgAsset.url;
const roomImg = roomImgAsset.url;
const consultImg = consultImgAsset.url;
const interiorImg = interiorImgAsset.url;
const skinImg = skinImgAsset.url;
const aiImg = aiImgAsset.url;

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    id: "consultation",
    title: "Consultations",
    short: "Consultation",
    intro:
      "Every treatment plan at Bare & Beyond begins with an honest, expert-led consultation. Consultation charges may be redeemable against selected treatments on the same day.",
    image: consultImg,
    treatments: [
      { name: "Skin / Hair / Laser Consultation", desc: "Baseline dermatology-led consultation.", duration: "30 min", downtime: "None", from: "₹ 1,000" },
      { name: "Aesthetic Injectable Consultation", desc: "Assessment for toxin, fillers or threads.", duration: "30 min", downtime: "None", from: "₹ 1,500" },
      { name: "Wellness Consultation", desc: "Lifestyle, weight and wellness review.", duration: "30 min", downtime: "None", from: "₹ 1,000" },
      { name: "Bridal / Event Skin Planning Consultation", desc: "Personalized pre-event skin plan.", duration: "45 min", downtime: "None", from: "₹ 1,500" },
      { name: "AI Skin Analysis", desc: "AI-powered diagnostic skin mapping.", duration: "20 min", downtime: "None", from: "₹ 1,000" },
      { name: "AI Skin Analysis + Expert Consultation", desc: "AI report reviewed with an expert.", duration: "45 min", downtime: "None", from: "₹ 1,500" },
    ],
  },
  {
    id: "skin-facial",
    title: "Signature Medi-Facials",
    short: "Medi-Facials",
    intro:
      "Medical-grade facials tailored to Indian skin, delivered by trained aesthetic professionals for hydration, glow, clarity and anti-ageing.",
    image: skinImg,
    treatments: [
      { name: "BareGlow Essential Facial", desc: "Maintenance glow and hydration.", duration: "45 min", downtime: "None", from: "₹ 4,999", idealFor: "All skin types" },
      { name: "Beyond Radiance Facial", desc: "Instant brightness and event glow.", duration: "60 min", downtime: "None", from: "₹ 5,999", idealFor: "Dull skin" },
      { name: "AquaBare Hydration Facial", desc: "Dryness and barrier support.", duration: "60 min", downtime: "None", from: "₹ 6,499", idealFor: "Dehydrated skin" },
      { name: "Poreless Beyond Facial", desc: "Oily skin, congestion and pores.", duration: "60 min", downtime: "Minimal", from: "₹ 6,999", idealFor: "Oily / congested skin" },
      { name: "GlassBare Skin Facial", desc: "Smooth texture, hydration and glow.", duration: "75 min", downtime: "None", from: "₹ 7,499", idealFor: "Signature glass-skin finish" },
      { name: "LuminaBare Brightening Facial", desc: "Pigmentation, tan and uneven tone.", duration: "60 min", downtime: "None", from: "₹ 7,999", idealFor: "Pigmentation concerns" },
      { name: "ClearBeyond Acne Facial", desc: "Acne-prone and clogged skin.", duration: "60 min", downtime: "Minimal", from: "₹ 7,999", idealFor: "Active acne" },
      { name: "CollagenBloom Facial", desc: "Fine lines, firmness and anti-ageing.", duration: "75 min", downtime: "None", from: "₹ 8,999", idealFor: "Ageing skin" },
      { name: "RedCarpet Bare Facial", desc: "Bridal and occasion glow.", duration: "60 min", downtime: "None", from: "₹ 9,499", idealFor: "Event-ready glow" },
      { name: "Beyond Luxe Signature Facial", desc: "Premium skin renewal and glow.", duration: "90 min", downtime: "None", from: "₹ 9,999", idealFor: "Flagship protocol" },
    ],
    groups: [
      {
        title: "AI Facials",
        treatments: [
          { name: "AI Skin Mapping Facial", desc: "AI-based skin reading with a customized facial.", duration: "75 min", downtime: "None", from: "₹ 5,999" },
          { name: "AI Glow Correct Facial", desc: "Dullness, uneven tone and texture.", duration: "75 min", downtime: "None", from: "₹ 6,999" },
          { name: "AI Acne Control Facial", desc: "Acne-prone skin and congestion.", duration: "75 min", downtime: "Minimal", from: "₹ 7,999" },
          { name: "AI Age Reverse Facial", desc: "Fine lines, firmness and hydration.", duration: "90 min", downtime: "None", from: "₹ 8,999" },
          { name: "AI Beyond Signature Facial", desc: "Personalized premium AI-guided facial.", duration: "90 min", downtime: "None", from: "₹ 9,999" },
        ],
      },
      {
        title: "Chemical Peels",
        treatments: [
          { name: "Glow Peel", desc: "Superficial peel for instant radiance.", duration: "30 min", downtime: "1-2 days", from: "₹ 4,999" },
          { name: "Acne Control Peel", desc: "Salicylic-based peel for active acne.", duration: "30 min", downtime: "2-3 days", from: "₹ 5,999" },
          { name: "Tan Removal Peel", desc: "Targeted peel for sun-tan reversal.", duration: "30 min", downtime: "2-3 days", from: "₹ 5,999" },
          { name: "Pigmentation Peel", desc: "Melasma and pigment-focused peel.", duration: "30 min", downtime: "2-4 days", from: "₹ 6,999" },
          { name: "Anti-Ageing Peel", desc: "Retinol-based rejuvenation peel.", duration: "30 min", downtime: "2-4 days", from: "₹ 7,999" },
          { name: "Advanced Combination Peel", desc: "Multi-acid clinical peel.", duration: "45 min", downtime: "3-5 days", from: "₹ 8,999" },
          { name: "Party Glow Peel", desc: "Zero-downtime pre-event peel.", duration: "30 min", downtime: "None", from: "₹ 7,499" },
          { name: "Underarm / Neck Peel", desc: "Body peel for darkened areas.", duration: "30 min", downtime: "2-3 days", from: "₹ 4,999" },
          { name: "Back Peel", desc: "Back acne and pigmentation peel.", duration: "45 min", downtime: "2-3 days", from: "₹ 8,999" },
        ],
      },
    ],
  },
  {
    id: "laser",
    title: "Pico Laser & Laser Hair Reduction",
    short: "Laser",
    intro:
      "USFDA-cleared Pico-generation and Diode laser platforms for pigmentation, tone, texture and precision hair reduction.",
    image: laserImg,
    treatments: [
      { name: "Pico Carbon Facial", desc: "Pico laser + carbon peel for a glass-skin finish.", duration: "45 min", downtime: "None", from: "₹ 5,999" },
      { name: "Pico Laser Toning, Full Face", desc: "Pico toning for even skin tone.", duration: "30 min", downtime: "None", from: "₹ 6,999" },
      { name: "Pico Pigmentation Correction", desc: "Targeted laser for stubborn pigment.", duration: "30 min", downtime: "Minimal", from: "₹ 7,999" },
      { name: "Pico Melasma Management", desc: "Clinical protocol for melasma.", duration: "45 min", downtime: "Minimal", from: "₹ 8,999" },
      { name: "Pico Spot Correction", desc: "Precision laser for sun spots and freckles.", duration: "20 min", downtime: "Minimal", from: "₹ 4,999 Onwards" },
      { name: "Pico Tattoo Removal — Small Area", desc: "Pico laser tattoo removal, small area.", duration: "30 min", downtime: "3-5 days", from: "₹ 4,999 Onwards" },
      { name: "Pico Tattoo Removal — Medium Area", desc: "Pico laser tattoo removal, medium area.", duration: "45 min", downtime: "3-5 days", from: "₹ 7,999 Onwards" },
      { name: "Pico Tattoo Removal — Large Area", desc: "Pico laser tattoo removal, large area.", duration: "60 min", downtime: "3-5 days", from: "₹ 9,999 Onwards" },
    ],
    groups: [
      {
        title: "3 Diode Laser Hair Reduction",
        treatments: [
          { name: "Upper Lip + Chin", duration: "15 min", downtime: "None", from: "₹ 4,999" },
          { name: "Full Face", duration: "20 min", downtime: "None", from: "₹ 5,999" },
          { name: "Underarms", duration: "15 min", downtime: "None", from: "₹ 4,999" },
          { name: "Bikini Line", duration: "20 min", downtime: "None", from: "₹ 5,999" },
          { name: "Brazilian", duration: "30 min", downtime: "None", from: "₹ 7,999" },
          { name: "Half Arms", duration: "20 min", downtime: "None", from: "₹ 6,999" },
          { name: "Full Arms", duration: "30 min", downtime: "None", from: "₹ 8,999" },
          { name: "Half Legs", duration: "30 min", downtime: "None", from: "₹ 8,999" },
          { name: "Full Legs", duration: "45 min", downtime: "None", from: "₹ 9,999" },
          { name: "Chest", duration: "30 min", downtime: "None", from: "₹ 8,999" },
          { name: "Back", duration: "45 min", downtime: "None", from: "₹ 9,999" },
          { name: "Abdomen", duration: "30 min", downtime: "None", from: "₹ 7,999" },
        ],
      },
    ],
  },
  {
    id: "hair-scalp",
    title: "Hair & Scalp Treatments",
    short: "Hair & Scalp",
    intro:
      "Evidence-based hair regrowth and scalp health protocols including GFC, hair boosters and rejuvenation therapies.",
    image: hairImg,
    treatments: [
      { name: "Scalp Detox Therapy", desc: "Deep-cleansing scalp reset.", duration: "45 min", downtime: "None", from: "₹ 4,999" },
      { name: "Hair Rejuvenation Therapy", desc: "Nutrient-driven follicle revival.", duration: "45 min", downtime: "None", from: "₹ 5,999" },
      { name: "Advanced Hair Rejuvenation Therapy", desc: "Multi-modality hair regrowth plan.", duration: "60 min", downtime: "Minimal", from: "₹ 7,999" },
      { name: "GFC Hair Treatment", desc: "Growth Factor Concentrate therapy.", duration: "45 min", downtime: "Minimal", from: "₹ 8,999" },
      { name: "GFC + Hair Booster Add-on", desc: "GFC combined with a nutrient booster.", duration: "60 min", downtime: "Minimal", from: "₹ 9,999" },
      { name: "Scalp Revival Therapy", desc: "Targeted therapy for scalp inflammation.", duration: "45 min", downtime: "None", from: "₹ 6,999" },
      { name: "Hair Fall Control Therapy", desc: "Clinical anti-hair-fall program.", duration: "60 min", downtime: "None", from: "₹ 7,999" },
    ],
  },
  {
    id: "skin-regeneration",
    title: "Bioregenerator & Skin Regeneration Therapy",
    short: "Regeneration",
    intro:
      "Bio-regenerative protocols that stimulate natural collagen and elastin for firmer, healthier skin.",
    image: aiImg,
    treatments: [
      { name: "Bioregenerator Under-Eye Therapy", desc: "Regenerative therapy for dark circles and hollows.", duration: "45 min", downtime: "Minimal", from: "₹ 5,999" },
      { name: "Bioregenerator Neck Therapy", desc: "Regeneration for neck laxity and lines.", duration: "45 min", downtime: "Minimal", from: "₹ 6,999" },
      { name: "Bioregenerator Face Therapy", desc: "Full-face bio-regeneration.", duration: "60 min", downtime: "Minimal", from: "₹ 8,999" },
      { name: "Bioregenerator Hands Therapy", desc: "Rejuvenation for ageing hands.", duration: "45 min", downtime: "Minimal", from: "₹ 7,999" },
      { name: "Bioregenerator Face + Neck", desc: "Combined regenerative protocol.", duration: "75 min", downtime: "Minimal", from: "₹ 9,999" },
      { name: "Skin Regeneration Booster", desc: "Top-up booster session.", duration: "30 min", downtime: "None", from: "₹ 7,999" },
    ],
  },
  {
    id: "revive-vitamin",
    title: "Revive & Vitamin Therapy",
    short: "Revive & Vitamin",
    intro:
      "IV and injectable therapies that revive skin, hair and whole-body vitality using clinical vitamin protocols.",
    image: roomImg,
    treatments: [
      { name: "Revive Glow Therapy", desc: "For dullness and fatigue.", duration: "45 min", downtime: "None", from: "₹ 4,999" },
      { name: "Revive Hydration Therapy", desc: "For dehydrated skin.", duration: "45 min", downtime: "None", from: "₹ 5,999" },
      { name: "Revive Skin Repair Therapy", desc: "Barrier repair and skin recovery.", duration: "45 min", downtime: "None", from: "₹ 6,999" },
      { name: "Revive Anti-Fatigue Therapy", desc: "For tired-looking skin.", duration: "45 min", downtime: "None", from: "₹ 7,999" },
      { name: "Vitamin Revive Therapy", desc: "Skin, hair and wellness nutrition support.", duration: "45 min", downtime: "None", from: "₹ 7,999" },
      { name: "Vitamin Glow Revive Therapy", desc: "Brightness and antioxidant support.", duration: "60 min", downtime: "None", from: "₹ 8,999" },
      { name: "Vitamin Hair Revive Therapy", desc: "Hair and scalp nutrition support.", duration: "45 min", downtime: "None", from: "₹ 8,999" },
      { name: "Premium Vitamin Revive Therapy", desc: "Customized wellness support.", duration: "60 min", downtime: "None", from: "₹ 9,999" },
    ],
  },
  {
    id: "injectables",
    title: "Injectables & Advanced Aesthetics",
    short: "Injectables",
    intro:
      "Physician-delivered Botulinum toxin, dermal fillers and thread lifts for natural-looking rejuvenation. Performed only after medical consultation and facial assessment by qualified professionals.",
    image: consultImg,
    treatments: [],
    groups: [
      {
        title: "Botulinum Toxin",
        treatments: [
          { name: "Forehead Lines", duration: "20 min", downtime: "Minimal", from: "₹ 5,999 Onwards" },
          { name: "Frown Lines", duration: "20 min", downtime: "Minimal", from: "₹ 5,999 Onwards" },
          { name: "Crow's Feet", duration: "20 min", downtime: "Minimal", from: "₹ 5,999 Onwards" },
          { name: "Bunny Lines", duration: "15 min", downtime: "Minimal", from: "₹ 4,999 Onwards" },
          { name: "Gummy Smile Correction", duration: "20 min", downtime: "Minimal", from: "₹ 4,999 Onwards" },
          { name: "Lip Flip", duration: "15 min", downtime: "Minimal", from: "₹ 4,999 Onwards" },
          { name: "Chin Dimpling", duration: "15 min", downtime: "Minimal", from: "₹ 4,999 Onwards" },
          { name: "Jawline Slimming / Masseter", duration: "20 min", downtime: "Minimal", from: "₹ 9,999 Onwards" },
          { name: "Neck Bands", duration: "30 min", downtime: "Minimal", from: "₹ 9,999 Onwards" },
          { name: "Hyperhidrosis — Underarms", duration: "30 min", downtime: "Minimal", from: "₹ 9,999 Onwards" },
        ],
      },
      {
        title: "Dermal Fillers",
        treatments: [
          { name: "Lip Filler", duration: "30 min", downtime: "1-2 days", from: "₹ 19,999" },
          { name: "Under-Eye Filler", duration: "30 min", downtime: "2-3 days", from: "₹ 19,999" },
          { name: "Cheek Filler", duration: "30 min", downtime: "1-2 days", from: "₹ 19,999" },
          { name: "Chin Filler", duration: "30 min", downtime: "1-2 days", from: "₹ 19,999" },
          { name: "Jawline Filler", duration: "45 min", downtime: "1-2 days", from: "₹ 19,999" },
          { name: "Nose Filler / Non-Surgical Rhinoplasty", duration: "30 min", downtime: "1-2 days", from: "₹ 19,999" },
          { name: "Nasolabial Fold Filler", duration: "30 min", downtime: "1-2 days", from: "₹ 19,999" },
          { name: "Marionette Line Filler", duration: "30 min", downtime: "1-2 days", from: "₹ 19,999" },
          { name: "Full Face Filler Rejuvenation", duration: "60 min", downtime: "2-3 days", from: "₹ 19,999" },
        ],
      },
      {
        title: "Thread Lift",
        treatments: [
          { name: "Eyebrow Lift Threads", duration: "30 min", downtime: "3-5 days", from: "₹ 9,999" },
          { name: "Jawline Threads", duration: "45 min", downtime: "3-5 days", from: "₹ 9,999" },
          { name: "Mid-Face Lift Threads", duration: "45 min", downtime: "3-5 days", from: "₹ 9,999" },
          { name: "Neck Lift Threads", duration: "60 min", downtime: "5-7 days", from: "₹ 9,999" },
          { name: "Nose Threads", duration: "30 min", downtime: "3-5 days", from: "₹ 9,999" },
          { name: "Full Face Thread Lift", duration: "90 min", downtime: "5-7 days", from: "₹ 9,999" },
        ],
      },
    ],
  },
  {
    id: "wellness",
    title: "Wellness Centre",
    short: "Wellness",
    intro:
      "Doctor-led wellness consultations and lifestyle support covering weight, metabolism, nutrition, sleep, stress and PCOS.",
    image: interiorImg,
    treatments: [
      { name: "Wellness Consultation", desc: "Lifestyle and wellness guidance.", duration: "45 min", downtime: "None", from: "₹ 999" },
      { name: "Body Composition Analysis", desc: "Fat %, muscle %, BMI and tracking.", duration: "30 min", downtime: "None", from: "₹ 999" },
      { name: "Weight Management Consultation", desc: "Weight, inch loss and lifestyle planning.", duration: "45 min", downtime: "None", from: "₹ 1,499" },
      { name: "Lifestyle & Nutrition Guidance", desc: "Routine, diet habits and wellness support.", duration: "45 min", downtime: "None", from: "₹ 4,999" },
      { name: "Stress & Sleep Wellness Guidance", desc: "Stress, sleep and lifestyle support.", duration: "45 min", downtime: "None", from: "₹ 4,999" },
      { name: "PCOS Wellness Support Consultation", desc: "Lifestyle and weight support guidance.", duration: "45 min", downtime: "None", from: "₹ 4,999" },
      { name: "Metabolic Wellness Review", desc: "Weight, fatigue and routine tracking.", duration: "45 min", downtime: "None", from: "₹ 4,999" },
    ],
  },
  {
    id: "body-contouring",
    title: "Slimming, Inch Loss & Body Contouring",
    short: "Body",
    intro:
      "Non-invasive body sculpting, toning and cellulite reduction using clinically validated technology.",
    image: roomImg,
    treatments: [
      { name: "Inch Loss Therapy", desc: "Targeted circumferential reduction.", duration: "60 min", downtime: "None", from: "₹ 4,999" },
      { name: "Body Toning Therapy", desc: "Muscle-stimulation body toning.", duration: "45 min", downtime: "None", from: "₹ 5,999" },
      { name: "Tummy Toning Therapy", desc: "Abdominal focused toning.", duration: "45 min", downtime: "None", from: "₹ 7,999" },
      { name: "Arm Toning Therapy", desc: "Upper-arm sculpting therapy.", duration: "30 min", downtime: "None", from: "₹ 5,999" },
      { name: "Thigh Toning Therapy", desc: "Thigh contouring therapy.", duration: "45 min", downtime: "None", from: "₹ 7,999" },
      { name: "Cellulite Reduction Therapy", desc: "Non-invasive cellulite therapy.", duration: "45 min", downtime: "None", from: "₹ 8,999" },
      { name: "Post-Weight-Loss Toning Therapy", desc: "Skin tightening after weight loss.", duration: "60 min", downtime: "None", from: "₹ 9,999" },
    ],
  },
  {
    id: "packages",
    title: "Premium Packages",
    short: "Packages",
    intro:
      "Structured multi-session packages built around clinical outcomes and transparent pricing.",
    image: bridalImg,
    treatments: [],
    groups: [
      {
        title: "Skin Packages",
        treatments: [
          { name: "BareGlow Skin Plan", desc: "Medi-facial + peel + skin review.", from: "₹ 29,999 Onwards" },
          { name: "AI Skin Transformation Plan", desc: "AI analysis + AI facials + skin correction.", from: "₹ 34,999 Onwards" },
          { name: "Beyond Radiance Plan", desc: "Glow facial + peel + Pico toning.", from: "₹ 39,999 Onwards" },
          { name: "Pigment Correct Plan", desc: "Pico + pigmentation peel + brightening care.", from: "₹ 44,999 Onwards" },
          { name: "Acne Reset Plan", desc: "Acne peel + acne facial + skin support.", from: "₹ 39,999 Onwards" },
          { name: "Bridal Glow Plan", desc: "Peel + Pico + RedCarpet facial + homecare guidance.", from: "₹ 49,999 Onwards" },
          { name: "Beyond Luxe Bridal Plan", desc: "Skin, hair, wellness and beauty planning.", from: "₹ 74,999 Onwards" },
        ],
      },
      {
        title: "Hair Packages",
        treatments: [
          { name: "Hair Revival Plan", desc: "Hair rejuvenation + scalp care.", from: "₹ 29,999 Onwards" },
          { name: "GFC Hair Growth Plan", desc: "GFC sessions + scalp support.", from: "₹ 44,999 Onwards" },
          { name: "Advanced Hair Regrowth Plan", desc: "GFC + boosters + hair rejuvenation.", from: "₹ 59,999 Onwards" },
          { name: "Bride / Groom Hair Prep Plan", desc: "Scalp detox + hair strengthening therapies.", from: "₹ 34,999 Onwards" },
        ],
      },
      {
        title: "Laser Packages",
        treatments: [
          { name: "Face Laser Reduction Plan", desc: "Full face LHR sessions.", from: "₹ 29,999 Onwards" },
          { name: "Underarm Laser Plan", desc: "Underarm LHR sessions.", from: "₹ 29,999 Onwards" },
          { name: "Upper Body Laser Plan", desc: "Arms / chest / back customized plan.", from: "₹ 44,999 Onwards" },
          { name: "Lower Body Laser Plan", desc: "Legs / bikini customized plan.", from: "₹ 59,999 Onwards" },
          { name: "Full Body Laser Plan", desc: "Full body laser hair reduction.", from: "₹ 1,19,999 Onwards" },
        ],
      },
      {
        title: "Wellness Packages",
        treatments: [
          { name: "BareBalance Wellness Plan", desc: "Wellness consult + lifestyle guidance + tracking.", from: "₹ 29,999 Onwards" },
          { name: "Inch Loss Starter Plan", desc: "Inch loss sessions + body composition tracking.", from: "₹ 34,999 Onwards" },
          { name: "Beyond Body Contour Plan", desc: "Body toning + inch loss + progress tracking.", from: "₹ 49,999 Onwards" },
          { name: "Glow Inside Out Plan", desc: "Skin treatment + vitamin revive support.", from: "₹ 39,999 Onwards" },
          { name: "Vitamin Revive Wellness Plan", desc: "Vitamin revive therapies + wellness tracking.", from: "₹ 44,999 Onwards" },
          { name: "Bridal Wellness Prep Plan", desc: "Skin + hair + wellness + inch loss support.", from: "₹ 74,999 Onwards" },
        ],
      },
      {
        title: "Injectable Packages",
        treatments: [
          { name: "Expression Softening Plan", desc: "Botulinum toxin for selected areas.", from: "₹ 29,999 Onwards" },
          { name: "Lip & Smile Enhancement Plan", desc: "Lip filler / smile design correction.", from: "₹ 34,999 Onwards" },
          { name: "Face Contour Plan", desc: "Fillers for chin, jawline or cheeks.", from: "₹ 49,999 Onwards" },
          { name: "Liquid Lift Plan", desc: "Fillers + botulinum toxin combination.", from: "₹ 74,999 Onwards" },
          { name: "Thread Lift Plan", desc: "Threads for face lifting and contouring.", from: "₹ 59,999 Onwards" },
          { name: "Beyond Age-Reverse Plan", desc: "Toxin + fillers + skin booster approach.", from: "₹ 99,999 Onwards" },
        ],
      },
    ],
  },
];
