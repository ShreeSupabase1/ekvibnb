export type ConcernGroup =
  | "Skin"
  | "Hair"
  | "Anti Ageing"
  | "Laser"
  | "Pigmentation"
  | "Body"
  | "Wellness"
  | "Bridal";

export interface Concern {
  slug: string;
  name: string;
  group: ConcernGroup;
  tagline: string;
  overview: string;
  causes: string[];
  symptoms: string[];
  risk: string[];
  treatments: string[];
  doctor: string;
  results: string;
  faqs: { q: string; a: string }[];
}

export const CONCERN_CATEGORIES: {
  group: ConcernGroup;
  label: string;
  blurb: string;
}[] = [
  { group: "Skin", label: "Skin Concerns", blurb: "Acne, pigmentation, dullness, pores and everyday skin health." },
  { group: "Hair", label: "Hair Concerns", blurb: "Hair fall, thinning, scalp health and hair rejuvenation." },
  { group: "Anti Ageing", label: "Anti Ageing", blurb: "Fine lines, wrinkles, loose skin and preventive care." },
  { group: "Laser", label: "Laser", blurb: "Advanced laser solutions for skin, hair and pigmentation." },
  { group: "Pigmentation", label: "Pigmentation", blurb: "Melasma, tanning, uneven tone and dark spots." },
  { group: "Body", label: "Body Contouring", blurb: "Weight management, localised fat and body shaping." },
  { group: "Wellness", label: "Wellness", blurb: "Stress, sleep, nutrition and hormonal well-being." },
  { group: "Bridal", label: "Bridal Skin Preparation", blurb: "Structured pre-wedding skin & hair programmes." },
];

const DR_SHARMA = "Dr. Abhishek Sandeep Sharma";
const DR_DHRUVI = "Dr. Dhruvi Pandya";
const DR_SWETHANA = "Dr. Swethana Devara";
const DR_GAURAV = "Dr. Gaurav Naik";

const commonFAQs = (topic: string) => [
  {
    q: `Is treatment for ${topic} safe?`,
    a: "All treatments at Bare & Beyond are performed under qualified medical supervision using clinically validated protocols. Your doctor will review your medical history before recommending any procedure.",
  },
  {
    q: "How many sessions will I need?",
    a: "The number of sessions depends on your individual condition, skin type and response to treatment. Your doctor will share a personalised plan during your consultation.",
  },
  {
    q: "Are results permanent?",
    a: "Aesthetic outcomes vary from person to person. Most treatments deliver gradual, natural-looking improvement, and periodic maintenance may be advised to sustain results.",
  },
];

export const CONCERNS: Concern[] = [
  // ---- Skin ----
  {
    slug: "acne",
    name: "Acne",
    group: "Skin",
    tagline: "Active breakouts, whiteheads and inflamed skin.",
    overview:
      "Acne is a common skin condition that occurs when pores get clogged with oil, dead skin cells and bacteria. It can appear as whiteheads, blackheads, red bumps or painful cysts on the face, chest or back.",
    causes: [
      "Excess oil (sebum) production",
      "Hormonal changes",
      "Bacterial activity on the skin",
      "Stress and lack of sleep",
      "Diet and lifestyle factors",
    ],
    symptoms: ["Whiteheads and blackheads", "Red inflamed bumps", "Painful cysts or nodules", "Oily skin", "Occasional scarring"],
    risk: ["Teenagers and young adults", "Individuals with hormonal imbalance", "People with oily skin type", "PCOS or PCOD patients"],
    treatments: ["ClearBeyond Acne Facial", "Chemical Peel", "AI Acne Control Facial", "Medical Consultation"],
    doctor: DR_SHARMA,
    results:
      "Most patients notice calmer skin, fewer breakouts and improved texture over a structured treatment plan. Results vary based on skin type and consistency of care.",
    faqs: [
      {
        q: "Can acne be completely cured?",
        a: "Acne can be effectively controlled with the right combination of medical treatment, in-clinic procedures and home care. Long-term maintenance helps prevent recurrence.",
      },
      ...commonFAQs("acne"),
    ],
  },
  {
    slug: "acne-scars",
    name: "Acne Scars",
    group: "Skin",
    tagline: "Post-acne marks, boxcar or rolling scars.",
    overview:
      "Acne scars are texture and pigment changes that remain after acne heals. They can appear as depressions, raised marks or discoloured patches, and are best treated with a structured, multi-modality approach.",
    causes: ["Untreated or picked acne", "Deep inflammatory lesions", "Delayed medical care", "Genetic skin healing patterns"],
    symptoms: ["Depressed or pitted marks", "Rolling or boxcar scars", "Post-inflammatory pigmentation", "Uneven skin texture"],
    risk: ["Patients with a history of severe acne", "Individuals who pick or squeeze acne", "Darker skin tones prone to pigmentation"],
    treatments: ["Pico Laser", "Chemical Peel", "Skin Boosters", "Medical Consultation"],
    doctor: DR_SHARMA,
    results:
      "Patients typically see gradual smoothening of texture and lightening of marks over multiple sessions. Outcomes depend on scar type and depth.",
    faqs: commonFAQs("acne scars"),
  },
  {
    slug: "pigmentation",
    name: "Pigmentation",
    group: "Pigmentation",
    tagline: "Dark patches, spots and uneven tone.",
    overview:
      "Pigmentation refers to darker patches on the skin caused by excess melanin. It can be triggered by sun exposure, hormones, inflammation or genetics, and often needs a combined in-clinic and home-care approach.",
    causes: ["Sun exposure", "Hormonal changes", "Post-inflammatory response", "Genetic predisposition"],
    symptoms: ["Brown or grey patches", "Uneven skin tone", "Darkening around cheeks and forehead", "Spots that darken in the sun"],
    risk: ["Indian and South Asian skin tones", "People with high sun exposure", "Women with hormonal changes"],
    treatments: ["Pigmentation Peel", "Laser Toning", "Pico Laser", "Medical Consultation"],
    doctor: DR_SHARMA,
    results: "Gradual lightening of pigmentation is typical over several sessions, along with visible improvement in overall skin clarity.",
    faqs: commonFAQs("pigmentation"),
  },
  {
    slug: "melasma",
    name: "Melasma",
    group: "Pigmentation",
    tagline: "Symmetric brown patches, often on cheeks and forehead.",
    overview:
      "Melasma is a chronic pigmentation condition that shows up as symmetric brown patches, most often on the cheeks, forehead and upper lip. It needs a gentle, long-term approach under medical supervision.",
    causes: ["Sun exposure", "Hormonal factors (pregnancy, contraceptives)", "Genetic predisposition", "Heat and inflammation"],
    symptoms: ["Symmetric brown patches", "Worsening in summer", "Recurrence over time"],
    risk: ["Women aged 20–50", "Pregnant women", "Individuals with a family history of melasma"],
    treatments: ["Laser Toning", "Chemical Peel", "Medical Consultation"],
    doctor: DR_SHARMA,
    results:
      "Melasma can be controlled and lightened with consistent treatment and daily sun protection. Recurrence is possible and long-term maintenance is often advised.",
    faqs: commonFAQs("melasma"),
  },
  {
    slug: "dark-circles",
    name: "Dark Circles",
    group: "Skin",
    tagline: "Under-eye darkening, puffiness or hollowness.",
    overview:
      "Dark circles can result from pigmentation, thin skin, hollowness under the eyes or lifestyle factors. Treatment depends on the underlying cause and often combines skincare and in-clinic procedures.",
    causes: ["Genetics and thin under-eye skin", "Sleep deficit and stress", "Pigmentation", "Volume loss under the eyes"],
    symptoms: ["Dark shadows under the eyes", "Puffiness", "Tired or hollow appearance"],
    risk: ["Individuals with genetic predisposition", "People with poor sleep habits", "Screen-heavy lifestyles"],
    treatments: ["Skin Boosters", "Pico Laser", "Medical Consultation"],
    doctor: DR_DHRUVI,
    results: "Most patients notice a fresher, brighter under-eye appearance with a combination of treatment and lifestyle support.",
    faqs: commonFAQs("dark circles"),
  },
  {
    slug: "open-pores",
    name: "Open Pores",
    group: "Skin",
    tagline: "Visible, enlarged pores across cheeks and nose.",
    overview:
      "Open pores appear when hair follicles are enlarged by excess oil, sun damage or reduced skin elasticity. Treatment focuses on tightening, resurfacing and controlling oil production.",
    causes: ["Excess sebum production", "Sun damage", "Ageing and loss of elasticity", "Genetics"],
    symptoms: ["Visible pores on cheeks and nose", "Rough texture", "Oily T-zone"],
    risk: ["Oily skin types", "Individuals with sun-damaged skin", "Adults with reduced skin firmness"],
    treatments: ["Signature Medi-Facial", "Chemical Peel", "Pico Laser"],
    doctor: DR_SHARMA,
    results: "Skin texture typically appears smoother and pores look visibly refined over a structured plan.",
    faqs: commonFAQs("open pores"),
  },
  {
    slug: "uneven-skin-tone",
    name: "Uneven Skin Tone",
    group: "Skin",
    tagline: "Patchy or dull complexion.",
    overview:
      "Uneven skin tone is often the result of sun exposure, mild pigmentation, dead cell buildup or inflammation. Regular clinical care and daily sun protection can restore an even, healthy complexion.",
    causes: ["Sun exposure", "Dead skin cell buildup", "Mild pigmentation", "Post-acne marks"],
    symptoms: ["Patchy tone", "Dullness", "Rough texture"],
    risk: ["Frequent sun exposure", "Irregular skincare habits", "Post-acne skin"],
    treatments: ["Signature Medi-Facial", "Chemical Peel", "Laser Toning"],
    doctor: DR_SHARMA,
    results: "Skin looks more even, clearer and radiant with continued care.",
    faqs: commonFAQs("uneven skin tone"),
  },
  {
    slug: "dull-skin",
    name: "Dull Skin",
    group: "Skin",
    tagline: "Tired-looking, lacklustre complexion.",
    overview:
      "Dull skin can be caused by dehydration, dead cell buildup, poor sleep or environmental stress. Gentle exfoliation, hydration and clinical facials can restore a healthy glow.",
    causes: ["Dehydration", "Dead cell buildup", "Environmental stress", "Poor sleep and diet"],
    symptoms: ["Lack of glow", "Uneven tone", "Rough surface"],
    risk: ["Urban lifestyles", "High pollution exposure", "Irregular skincare"],
    treatments: ["Signature Medi-Facial", "Skin Boosters", "Chemical Peel"],
    doctor: DR_DHRUVI,
    results: "A visibly brighter, plumper and more radiant complexion after consistent care.",
    faqs: commonFAQs("dull skin"),
  },
  {
    slug: "dry-skin",
    name: "Dry Skin",
    group: "Skin",
    tagline: "Tight, flaky or rough skin.",
    overview:
      "Dry skin lacks adequate moisture and lipids in the outer layer. It may feel tight, appear flaky and be prone to sensitivity. Treatment focuses on restoring the skin barrier and deep hydration.",
    causes: ["Weather and low humidity", "Harsh cleansers", "Genetics", "Underlying skin conditions"],
    symptoms: ["Tightness", "Flaking", "Roughness", "Occasional itching"],
    risk: ["Adults in dry climates", "People with sensitive skin", "Frequent hot-water washing"],
    treatments: ["Signature Medi-Facial", "Skin Boosters", "Medical Consultation"],
    doctor: DR_DHRUVI,
    results: "Skin feels more hydrated, comfortable and healthy with regular clinical and home care.",
    faqs: commonFAQs("dry skin"),
  },
  {
    slug: "oily-skin",
    name: "Oily Skin",
    group: "Skin",
    tagline: "Shiny skin, clogged pores and frequent breakouts.",
    overview:
      "Oily skin is caused by overactive oil glands. It can lead to shine, clogged pores and acne. The right cleansing routine and in-clinic care help balance sebum without over-drying the skin.",
    causes: ["Overactive sebaceous glands", "Hormonal changes", "Humidity", "Genetics"],
    symptoms: ["Shine, especially in the T-zone", "Enlarged pores", "Frequent breakouts"],
    risk: ["Teenagers", "Individuals with hormonal changes", "Humid climate residents"],
    treatments: ["ClearBeyond Acne Facial", "Chemical Peel", "Signature Medi-Facial"],
    doctor: DR_SHARMA,
    results: "Skin appears more balanced, matte and clear over a structured plan.",
    faqs: commonFAQs("oily skin"),
  },
  {
    slug: "sensitive-skin",
    name: "Sensitive Skin",
    group: "Skin",
    tagline: "Reactive skin that flushes or stings easily.",
    overview:
      "Sensitive skin reacts easily to products, weather or stress. Care focuses on strengthening the skin barrier with gentle, medically guided routines.",
    causes: ["Weakened skin barrier", "Overuse of active ingredients", "Environmental triggers", "Underlying conditions"],
    symptoms: ["Redness", "Stinging or burning", "Reactivity to products"],
    risk: ["Individuals who over-exfoliate", "People with rosacea or eczema", "Frequent product switchers"],
    treatments: ["Signature Medi-Facial", "Skin Boosters", "Medical Consultation"],
    doctor: DR_DHRUVI,
    results: "Skin becomes calmer, more comfortable and less reactive with barrier-supportive care.",
    faqs: commonFAQs("sensitive skin"),
  },
  {
    slug: "sun-damage",
    name: "Sun Damage",
    group: "Skin",
    tagline: "Photoageing, sunspots and rough texture.",
    overview:
      "Long-term sun exposure can lead to pigmentation, fine lines and rough texture. Clinical treatments combined with strict daily sun protection help restore healthier skin.",
    causes: ["Unprotected sun exposure", "Outdoor lifestyle", "Lack of sunscreen use"],
    symptoms: ["Sunspots", "Uneven tone", "Fine lines", "Rough texture"],
    risk: ["Outdoor workers", "Frequent travellers", "Individuals not using sunscreen"],
    treatments: ["Laser Toning", "Chemical Peel", "Signature Medi-Facial"],
    doctor: DR_SHARMA,
    results: "Visible reduction in spots and a more even, healthier looking skin over time.",
    faqs: commonFAQs("sun damage"),
  },
  {
    slug: "tanning",
    name: "Tanning",
    group: "Pigmentation",
    tagline: "Overall darkening after sun exposure.",
    overview:
      "Tanning is the skin's response to UV exposure, leading to a darker overall tone. It can be improved with brightening treatments and consistent sun protection.",
    causes: ["Prolonged sun exposure", "Lack of sunscreen", "Outdoor activities"],
    symptoms: ["Darker skin tone", "Uneven complexion", "Contrast between covered and exposed areas"],
    risk: ["Outdoor lifestyles", "Frequent travellers", "Sports and swimming enthusiasts"],
    treatments: ["Signature Medi-Facial", "Chemical Peel", "Laser Toning"],
    doctor: DR_DHRUVI,
    results: "A visibly brighter, more even complexion over a structured plan.",
    faqs: commonFAQs("tanning"),
  },
  {
    slug: "fine-lines",
    name: "Fine Lines",
    group: "Anti Ageing",
    tagline: "Early signs of ageing around the eyes and mouth.",
    overview:
      "Fine lines are the earliest signs of ageing and appear due to reduced collagen, sun exposure and repeated facial expressions. Preventive and corrective treatments help maintain smoother skin.",
    causes: ["Reduced collagen production", "Sun exposure", "Repeated facial expressions", "Dehydration"],
    symptoms: ["Small lines around the eyes", "Fine creases on forehead or mouth", "Loss of smoothness"],
    risk: ["Adults from late 20s onwards", "Individuals with high sun exposure", "Smokers"],
    treatments: ["Skin Boosters", "Anti-Wrinkle Injectables", "Signature Medi-Facial"],
    doctor: DR_SWETHANA,
    results: "Skin looks smoother, plumper and more youthful with a personalised anti-ageing plan.",
    faqs: commonFAQs("fine lines"),
  },
  {
    slug: "wrinkles",
    name: "Wrinkles",
    group: "Anti Ageing",
    tagline: "Deeper lines and creases with ageing.",
    overview:
      "Wrinkles are deeper folds that develop with age, sun damage and repeated muscle movements. A combined approach can soften wrinkles and support long-term skin health.",
    causes: ["Ageing", "Loss of collagen and elastin", "Sun damage", "Repeated facial expressions"],
    symptoms: ["Deep folds", "Loss of firmness", "Sagging around cheeks or jawline"],
    risk: ["Adults over 35", "Smokers", "High sun exposure"],
    treatments: ["Anti-Wrinkle Injectables", "Dermal Fillers", "Skin Boosters"],
    doctor: DR_SWETHANA,
    results: "Softening of wrinkles and a naturally refreshed appearance based on individual needs.",
    faqs: commonFAQs("wrinkles"),
  },
  {
    slug: "loose-skin",
    name: "Loose Skin",
    group: "Anti Ageing",
    tagline: "Reduced firmness and mild sagging.",
    overview:
      "Loose skin is caused by a gradual loss of collagen and elastin. Non-surgical firming treatments can support the skin's structure and improve elasticity over time.",
    causes: ["Ageing", "Weight fluctuations", "Sun damage", "Genetics"],
    symptoms: ["Reduced firmness", "Mild sagging", "Loss of definition"],
    risk: ["Adults over 40", "Post-weight-loss individuals", "High sun exposure"],
    treatments: ["Skin Boosters", "Dermal Fillers", "Medical Consultation"],
    doctor: DR_SWETHANA,
    results: "Skin often looks firmer and more lifted with a personalised, science-backed programme.",
    faqs: commonFAQs("loose skin"),
  },

  // ---- Hair ----
  {
    slug: "hair-fall",
    name: "Hair Fall",
    group: "Hair",
    tagline: "Excessive daily hair shedding.",
    overview:
      "Hair fall can be caused by nutritional deficiencies, stress, hormonal changes or scalp conditions. A structured evaluation helps identify the cause and guide the right treatment plan.",
    causes: ["Nutritional deficiencies", "Stress", "Hormonal imbalance", "Scalp conditions", "Genetics"],
    symptoms: ["Increased hair on comb or pillow", "Reduced hair density", "Widening parting"],
    risk: ["Individuals with PCOS or thyroid issues", "Post-illness or post-partum", "High-stress lifestyles"],
    treatments: ["Hair Rejuvenation", "GFC Hair Treatment", "Hair Booster"],
    doctor: DR_SHARMA,
    results: "Reduced shedding and improved hair strength are typically observed with a structured plan.",
    faqs: commonFAQs("hair fall"),
  },
  {
    slug: "hair-thinning",
    name: "Hair Thinning",
    group: "Hair",
    tagline: "Gradual loss of hair volume and density.",
    overview:
      "Hair thinning is a gradual reduction in hair density and volume. Early intervention with medical care and in-clinic treatments delivers the best long-term outcomes.",
    causes: ["Genetic patterns", "Hormonal changes", "Chronic stress", "Nutritional gaps"],
    symptoms: ["Reduced volume", "Visible scalp", "Fine, weak hair"],
    risk: ["Family history of hair loss", "Post-partum women", "Adults with hormonal changes"],
    treatments: ["Hair Rejuvenation", "GFC Hair Treatment", "Medical Consultation"],
    doctor: DR_SHARMA,
    results: "Improvement in density and hair quality is often observed over consistent sessions.",
    faqs: commonFAQs("hair thinning"),
  },
  {
    slug: "dandruff",
    name: "Dandruff",
    group: "Hair",
    tagline: "Flaky, itchy scalp.",
    overview:
      "Dandruff is a common scalp condition caused by an imbalance in scalp oils and micro-organisms. Medical care can effectively control flaking and restore scalp comfort.",
    causes: ["Scalp yeast imbalance", "Oily scalp", "Harsh hair products", "Stress"],
    symptoms: ["White or yellow flakes", "Itchy scalp", "Occasional redness"],
    risk: ["Adolescents and young adults", "Oily scalp types", "High-stress lifestyles"],
    treatments: ["Scalp Consultation", "Hair Booster", "Medical Consultation"],
    doctor: DR_SHARMA,
    results: "Most patients experience a calmer, healthier scalp with consistent care.",
    faqs: commonFAQs("dandruff"),
  },
  {
    slug: "scalp-health",
    name: "Scalp Health",
    group: "Hair",
    tagline: "Preventive care for a healthy scalp environment.",
    overview:
      "A healthy scalp is essential for strong hair. Scalp assessments and in-clinic treatments help maintain a balanced, comfortable and hair-friendly environment.",
    causes: ["Product buildup", "Oil imbalance", "Environmental stress", "Poor scalp hygiene"],
    symptoms: ["Itchiness", "Sensitivity", "Flaking or oiliness"],
    risk: ["Frequent styling and colouring", "Humid environments", "Sensitive scalps"],
    treatments: ["Hair Booster", "Hair Rejuvenation", "Medical Consultation"],
    doctor: DR_SHARMA,
    results: "A comfortable, balanced scalp supports healthier hair growth over time.",
    faqs: commonFAQs("scalp health"),
  },
  {
    slug: "weak-hair",
    name: "Weak Hair",
    group: "Hair",
    tagline: "Brittle, dull and easily breakable strands.",
    overview:
      "Weak hair can result from nutritional gaps, chemical treatments and everyday damage. Restorative treatments and nutritional support help improve strength and shine.",
    causes: ["Nutritional deficiencies", "Chemical or heat damage", "Environmental exposure"],
    symptoms: ["Breakage", "Split ends", "Dull texture"],
    risk: ["Frequent colouring or styling", "Nutritional gaps", "High pollution exposure"],
    treatments: ["Hair Booster", "GFC Hair Treatment", "Medical Consultation"],
    doctor: DR_SHARMA,
    results: "Hair feels stronger, shinier and healthier over a structured plan.",
    faqs: commonFAQs("weak hair"),
  },
  {
    slug: "hair-growth",
    name: "Hair Growth",
    group: "Hair",
    tagline: "Support for healthier, denser hair growth.",
    overview:
      "Hair growth treatments aim to stimulate the scalp and support the natural hair cycle. They are most effective when combined with medical evaluation and consistent care.",
    causes: ["Slow growth phase", "Weak follicles", "Nutritional or hormonal gaps"],
    symptoms: ["Slow-growing hair", "Reduced density", "Weak strands"],
    risk: ["Post-illness hair changes", "Hormonal transitions", "Nutritional gaps"],
    treatments: ["GFC Hair Treatment", "Hair Rejuvenation", "Hair Booster"],
    doctor: DR_SHARMA,
    results: "Many patients notice better density and healthier growth patterns with continued care.",
    faqs: commonFAQs("hair growth"),
  },

  // ---- Body ----
  {
    slug: "weight-management",
    name: "Weight Management",
    group: "Body",
    tagline: "Medically guided weight and lifestyle support.",
    overview:
      "Sustainable weight management combines medical evaluation, nutritional guidance and supportive treatments. Our doctors offer science-based recommendations tailored to your health profile.",
    causes: ["Lifestyle and diet", "Hormonal factors", "Stress and sleep", "Genetic predisposition"],
    symptoms: ["Weight gain", "Reduced energy", "Metabolic changes"],
    risk: ["Sedentary lifestyles", "PCOS/PCOD", "Thyroid conditions"],
    treatments: ["Medical Consultation", "Wellness Programmes"],
    doctor: DR_GAURAV,
    results: "Gradual, sustainable improvements in weight, energy and overall well-being with consistent guidance.",
    faqs: commonFAQs("weight management"),
  },
  {
    slug: "body-contouring",
    name: "Body Contouring",
    group: "Body",
    tagline: "Non-surgical body shaping.",
    overview:
      "Body contouring focuses on shaping and toning specific areas of the body through non-surgical, science-backed methods. Suitability is assessed during a medical consultation.",
    causes: ["Localised fat deposits", "Weight fluctuations", "Loss of firmness"],
    symptoms: ["Stubborn fat pockets", "Reduced definition", "Loss of contour"],
    risk: ["Adults with localised fat", "Post-weight-loss patients", "Sedentary lifestyles"],
    treatments: ["Body Contouring", "Medical Consultation", "Wellness Programmes"],
    doctor: DR_GAURAV,
    results: "Improved contour and firmness in treated areas over a structured programme.",
    faqs: commonFAQs("body contouring"),
  },
  {
    slug: "cellulite",
    name: "Cellulite",
    group: "Body",
    tagline: "Dimpled skin on thighs, hips or arms.",
    overview:
      "Cellulite is a common cosmetic condition caused by changes in fat distribution and connective tissue. Non-invasive treatments can help improve skin texture and appearance.",
    causes: ["Genetics", "Hormonal factors", "Lifestyle patterns"],
    symptoms: ["Dimpled skin", "Uneven texture on thighs or hips"],
    risk: ["Adult women", "Sedentary lifestyles", "Weight fluctuations"],
    treatments: ["Body Contouring", "Wellness Programmes", "Medical Consultation"],
    doctor: DR_GAURAV,
    results: "Smoother-looking skin and improved texture may be observed over multiple sessions.",
    faqs: commonFAQs("cellulite"),
  },
  {
    slug: "localized-fat",
    name: "Localized Fat",
    group: "Body",
    tagline: "Stubborn fat pockets that resist diet and exercise.",
    overview:
      "Localised fat refers to stubborn pockets of fat that don't respond to diet and exercise. Medical body contouring can offer targeted support after a personalised assessment.",
    causes: ["Genetic fat distribution", "Hormonal changes", "Sedentary habits"],
    symptoms: ["Isolated fat pockets", "Reduced body contour"],
    risk: ["Adults with genetic fat distribution", "Post-weight-loss patients"],
    treatments: ["Body Contouring", "Medical Consultation"],
    doctor: DR_GAURAV,
    results: "Improvement in body contour in targeted areas over a structured plan.",
    faqs: commonFAQs("localized fat"),
  },

  // ---- Wellness ----
  {
    slug: "lifestyle",
    name: "Lifestyle",
    group: "Wellness",
    tagline: "Everyday habits that shape skin and hair health.",
    overview:
      "Lifestyle plays a major role in aesthetic outcomes. Our wellness approach integrates skin, hair and body care with practical, sustainable lifestyle guidance.",
    causes: ["Irregular routines", "High stress", "Poor sleep and nutrition"],
    symptoms: ["Fatigue", "Dull skin", "Hair changes"],
    risk: ["Urban lifestyles", "High-pressure careers", "Irregular schedules"],
    treatments: ["Medical Consultation", "Wellness Programmes"],
    doctor: DR_GAURAV,
    results: "Improved daily routines translate into better skin, hair and overall well-being.",
    faqs: commonFAQs("lifestyle"),
  },
  {
    slug: "stress",
    name: "Stress",
    group: "Wellness",
    tagline: "Impact of stress on skin, hair and wellness.",
    overview:
      "Chronic stress can affect the skin, hair and overall health. Managing stress through medical guidance and lifestyle support is an important part of long-term aesthetic care.",
    causes: ["Work pressure", "Sleep deficit", "Emotional strain"],
    symptoms: ["Breakouts", "Hair fall", "Fatigue"],
    risk: ["High-pressure lifestyles", "Chronic sleep issues"],
    treatments: ["Wellness Programmes", "Medical Consultation"],
    doctor: DR_GAURAV,
    results: "Improved coping strategies and lifestyle adjustments often improve skin and hair health.",
    faqs: commonFAQs("stress"),
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    group: "Wellness",
    tagline: "Nutritional support for skin, hair and health.",
    overview:
      "Balanced nutrition is essential for healthy skin, strong hair and overall wellness. Our doctors provide science-based nutritional guidance tailored to your goals.",
    causes: ["Nutritional deficiencies", "Restrictive diets", "Lifestyle imbalances"],
    symptoms: ["Dull skin", "Hair fall", "Low energy"],
    risk: ["Restrictive dieters", "Post-partum women", "Chronic illness recovery"],
    treatments: ["Medical Consultation", "Wellness Programmes"],
    doctor: DR_GAURAV,
    results: "Better nutritional balance contributes to healthier skin, hair and energy levels.",
    faqs: commonFAQs("nutrition"),
  },
  {
    slug: "sleep-wellness",
    name: "Sleep Wellness",
    group: "Wellness",
    tagline: "Sleep as a foundation for beauty and health.",
    overview:
      "Restorative sleep is critical for skin repair, hormonal balance and overall vitality. We help identify sleep-related concerns and integrate them into your wellness plan.",
    causes: ["Irregular schedules", "Stress", "Screen exposure"],
    symptoms: ["Fatigue", "Dark circles", "Dull skin"],
    risk: ["Shift workers", "High-stress careers", "Chronic insomnia"],
    treatments: ["Medical Consultation", "Wellness Programmes"],
    doctor: DR_GAURAV,
    results: "Improved sleep quality supports better skin, hair and overall well-being.",
    faqs: commonFAQs("sleep wellness"),
  },
  {
    slug: "pcos-support",
    name: "PCOS Support",
    group: "Wellness",
    tagline: "Skin, hair and lifestyle support for PCOS.",
    overview:
      "PCOS can affect skin, hair, weight and overall wellness. Our team offers a supportive, non-judgmental approach that combines medical assessment with lifestyle guidance.",
    causes: ["Hormonal imbalance", "Insulin resistance", "Genetic factors"],
    symptoms: ["Acne", "Hair fall or unwanted hair", "Irregular cycles", "Weight changes"],
    risk: ["Women of reproductive age", "Family history of PCOS"],
    treatments: ["Medical Consultation", "Wellness Programmes", "ClearBeyond Acne Facial"],
    doctor: DR_GAURAV,
    results: "Improved skin, hair and lifestyle outcomes are often possible with a structured, holistic plan.",
    faqs: commonFAQs("PCOS"),
  },

  // ---- Bridal ----
  {
    slug: "bridal-skin-preparation",
    name: "Bridal Skin Preparation",
    group: "Bridal",
    tagline: "Structured pre-wedding skin and hair programmes.",
    overview:
      "Bridal skin preparation is a doctor-led programme that helps you look and feel your best on your big day. Plans are personalised based on your timeline, concerns and goals.",
    causes: ["Timeline of the wedding", "Individual skin and hair goals", "Lifestyle factors"],
    symptoms: ["Uneven tone", "Dullness", "Acne or pigmentation", "Hair concerns"],
    risk: ["All brides-to-be seeking structured, safe care"],
    treatments: ["Bridal Glow Plan", "Signature Medi-Facial", "Chemical Peel", "Hair Rejuvenation"],
    doctor: DR_DHRUVI,
    results: "A visibly radiant, healthy and confident look, tailored to your wedding timeline.",
    faqs: commonFAQs("bridal skin"),
  },
];

export function findConcern(slug: string): Concern | undefined {
  return CONCERNS.find((c) => c.slug === slug);
}
