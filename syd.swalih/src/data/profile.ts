/**
 * Personal portfolio content — single source of truth for syd.swalih.
 * Edit copy here; components stay purely presentational.
 */

export interface StatEntry {
  value: string;
  label: string;
}

/**
 * Accent colour names. Each maps to a palette token in
 * `src/styles/main.css` (see the "Full palette" block) and is resolved to
 * concrete utility classes by the components, so the classes stay static
 * and the Tailwind scanner can see them.
 */
export type AccentToken =
  | "brass"
  | "copper"
  | "amber"
  | "rust"
  | "sand"
  | "cyan"
  | "steel"
  | "teal"
  | "sage"
  | "slate";

export interface ProjectEntry {
  /** Two-digit ordinal shown beside the project title ("01"). */
  index: string;
  name: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  /** Key into the project image map (see Work.tsx). */
  image: string;
  url: string;
  /** Accent colour for this project's label, rule and link. */
  accent: AccentToken;
}

export interface SkillEntry {
  label: string;
  value: number;
}

export interface ServiceEntry {
  icon: "video" | "plan" | "editing" | "photo" | "poster";
  title: string;
  description: string;
  /** Accent colour for this service's icon and index. */
  accent: AccentToken;
}

export const profile = {
  name: "Sayyid Swalih",
  handle: "syd.swalih",
  wordmark: "SWALIH",
  studio: "qorvode.ai",
  studioUrl: "https://qorvode.co.in",
  role: "Graphic Designer & Civil Engineer",
  subRole: "Designer & Videographer",
  location: "Bekal, Kasaragod",
  region: "Kerala, India",
  email: "swalihsayyid94@gmail.com",
  instagram: "https://instagram.com/sayyid_al_hadi",
  instagramHandle: "@sayyid_al_hadi",
  availability: "Available for projects — 2026",
  tagline:
    "Building bold identities and visual stories — from the first sketch to the final frame.",
  quote:
    "Good design is built, not decorated. Structure first, then the feeling.",
  bio: [
    "I'm Sayyid Swalih, a designer and civil engineer working between two worlds: the drawing board and the built environment. I specialise in brand identity, poster design, photo and video editing, and videography — turning rough ideas into visuals that communicate clearly and stay memorable.",
    "My work spans promotional films, social campaigns, event posters, packaging, and brand collateral. Alongside design, my civil engineering background gives me a structural way of thinking — about grids, hierarchy, materials, and how every part holds together.",
    "I'm based in Bekal, Kasaragod, and work with individuals, brands, and organisations across Kerala and beyond. Every project is a chance to learn something new and make the next thing sharper than the last.",
  ],
  aboutStatement:
    "I move between the drafting table and the editing timeline — shaping identities, spaces, and stories with equal attention to structure and soul.",
  /** Span printed beside the Selected Work heading. */
  years: "2023 — 2026",
  /** Portrait lives in syd.swalih/src/assets/ — imported by Hero.tsx. */
  portrait: "swalih",
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "50+", label: "Projects Done" },
    { value: "10+", label: "Happy Clients" },
    { value: "3", label: "Creative Disciplines" },
  ] as StatEntry[],
  skills: [
    { label: "Brand Identity", value: 92 },
    { label: "Civil Engineering", value: 90 },
    { label: "Art Direction", value: 86 },
    { label: "UI / UX Design", value: 78 },
    { label: "Editorial Design", value: 76 },
    { label: "Motion & Animation", value: 65 },
  ] as SkillEntry[],
  services: [
    {
      icon: "video",
      title: "Videography",
      description:
        "Cinematic event films, brand promos, and social content — planned, shot, and directed with a clear story in mind.",
      accent: "teal",
    },
    {
      icon: "plan",
      title: "Civil Engineering",
      description:
        "Home planning, infrastructure development, and construction drawings — practical, buildable design from concept to site.",
      accent: "steel",
    },
    {
      icon: "editing",
      title: "Video Editing",
      description:
        "Rhythm-first edits with colour grading, sound design, and motion graphics for campaigns, reels, and long-form films.",
      accent: "amber",
    },
    {
      icon: "photo",
      title: "Photo Editing",
      description:
        "Retouching, colour correction, compositing, and restoration that keep the image natural while making it land harder.",
      accent: "sage",
    },
    {
      icon: "poster",
      title: "Poster Design",
      description:
        "Event, campaign, and announcement posters built around one strong idea — designed to work in print and on a phone screen.",
      accent: "copper",
    },
  ] as ServiceEntry[],
  projects: [
    {
      index: "01",
      name: "AURA Beauty",
      subtitle: "Brand Identity",
      category: "Brand Identity",
      client: "AURA Beauty",
      year: "2026",
      image: "aura-brand",
      url: "https://instagram.com/sayyid_al_hadi",
      accent: "brass",
    },
    {
      index: "02",
      name: "AURA Beauty",
      subtitle: "Packaging & Retail",
      category: "Brand Application",
      client: "AURA Beauty",
      year: "2026",
      image: "aura-retail",
      url: "https://instagram.com/sayyid_al_hadi",
      accent: "copper",
    },
    {
      index: "03",
      name: "AURA Beauty",
      subtitle: "Brand Guidelines",
      category: "Brand System",
      client: "AURA Beauty",
      year: "2026",
      image: "aura-guidelines",
      url: "https://instagram.com/sayyid_al_hadi",
      accent: "sand",
    },
    {
      index: "04",
      name: "Elvora Creative",
      subtitle: "Logo Identity",
      category: "Logo Design",
      client: "Elvora Creative",
      year: "2026",
      image: "elvora",
      url: "https://instagram.com/sayyid_al_hadi",
      accent: "teal",
    },
  ] as ProjectEntry[],
};
