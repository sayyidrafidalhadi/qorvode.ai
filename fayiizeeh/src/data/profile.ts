/**
 * Personal portfolio content — single source of truth for fayiizeeh.
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
  | "gold"
  | "bronze"
  | "amber"
  | "ember"
  | "sun"
  | "lime"
  | "lime-pale"
  | "olive"
  | "moss"
  | "forest";

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
  icon: "video" | "digital" | "editing" | "photo" | "poster";
  title: string;
  description: string;
  /** Accent colour for this service's icon and index. */
  accent: AccentToken;
}

export const profile = {
  name: "Fayiz",
  handle: "fayiizeeh",
  wordmark: "FAYIIZEEH",
  studio: "qorvode.ai",
  studioUrl: "https://qorvode.co.in",
  role: "Graphic Designer",
  subRole: "Designer & Video Grapher",
  location: "Kozhikode, Kuttiyadi",
  region: "Kerala, India",
  email: "fmhd9430@gmail.com",
  instagram: "https://instagram.com/fayiizeeh",
  instagramHandle: "@fayiizeeh",
  availability: "Available for projects — 2026",
  tagline:
    "Crafting bold visual identities and digital experiences that leave a lasting impression.",
  quote:
    "Turning ideas into visuals that inspire, engage, and leave a lasting impression.",
  bio: [
    "Hi, I'm Fayiz, a passionate creative professional specializing in videography, video editing, graphic design, photo editing, and poster design. I enjoy transforming ideas into visually engaging content that captures attention and communicates messages effectively.",
    "With experience in creating promotional videos, social media content, posters, branding materials, and photo retouching, I focus on delivering high-quality designs that combine creativity with purpose. My goal is to help individuals, brands, and organizations tell their stories through compelling visuals and impactful design.",
    "I am constantly exploring new trends, tools, and techniques to improve my skills and create modern, professional, and memorable work. Every project is an opportunity to learn, innovate, and bring creative visions to life.",
  ],
  aboutStatement:
    "Visual storytelling is my passion — from crafting bold designs to capturing cinematic moments through the lens. I bring brands to life with creativity and purpose.",
  /** Span printed beside the Selected Work heading. */
  years: "2023 — 2026",
  /** Portrait lives in fayiizeeh/src/assets/ — imported by Hero.tsx. */
  portrait: "fayiz",
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "200+", label: "Projects Done" },
    { value: "30+", label: "Happy Clients" },
    { value: "1+", label: "Awards Won" },
  ] as StatEntry[],
  skills: [
    { label: "Brand Identity", value: 95 },
    { label: "Art Direction", value: 88 },
    { label: "UI / UX Design", value: 82 },
    { label: "Editorial Design", value: 78 },
    { label: "Motion & Animation", value: 60 },
  ] as SkillEntry[],
  services: [
    {
      icon: "video",
      title: "Videography",
      description:
        "Professional video production, cinematic storytelling, and creative direction for events, brands, and campaigns.",
      accent: "forest",
    },
    {
      icon: "digital",
      title: "Digital Design",
      description:
        "Websites, product interfaces, and design systems crafted with a focus on user experience and visual precision.",
      accent: "lime-pale",
    },
    {
      icon: "editing",
      title: "Video Editing",
      description:
        "Dynamic video editing with smooth cuts, motion graphics, color grading, and sound design for any platform.",
      accent: "sun",
    },
    {
      icon: "photo",
      title: "Photo Editing",
      description:
        "Professional photo retouching, color correction, compositing, and enhancement for stunning visual results.",
      accent: "moss",
    },
    {
      icon: "poster",
      title: "Poster Design",
      description:
        "Eye-catching poster designs for events, campaigns, and promotions that make a bold visual statement.",
      accent: "amber",
    },
  ] as ServiceEntry[],
  projects: [
    {
      index: "01",
      name: "Basmala",
      subtitle: "Event Poster",
      category: "Poster Design",
      client: "Malharul Islam Academy",
      year: "2026",
      image: "basmala",
      url: "https://instagram.com/fayiizeeh",
      accent: "gold",
    },
    {
      index: "02",
      name: "Convocation",
      subtitle: "Ceremony Poster",
      category: "Poster Design",
      client: "Markaz Al Munawara Public School",
      year: "2025",
      image: "convocation",
      url: "https://instagram.com/fayiizeeh",
      accent: "olive",
    },
    {
      index: "03",
      name: "Congrats",
      subtitle: "Achievement Poster",
      category: "Graphic Design",
      client: "Zee Qute Preschool",
      year: "2025",
      image: "congrats",
      url: "https://instagram.com/fayiizeeh",
      accent: "ember",
    },
    {
      index: "04",
      name: "Soulful Time",
      subtitle: "Induction Week",
      category: "Event Design",
      client: "Malharul Islam Academy",
      year: "2026",
      image: "soulful",
      url: "https://instagram.com/fayiizeeh",
      accent: "moss",
    },
  ] as ProjectEntry[],
};
