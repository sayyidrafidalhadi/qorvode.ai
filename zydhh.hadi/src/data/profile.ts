/**
 * Personal portfolio content — single source of truth for zydhh.hadi.
 * Edit copy here; components stay purely presentational.
 */

export interface Capability {
  icon: "code" | "terminal" | "shield" | "palette";
  title: string;
  items: string[];
  tags: string;
}

export interface EducationEntry {
  period: string;
  title: string;
  org: string;
  focus?: string;
  current?: boolean;
}

export interface RoleEntry {
  period: string;
  title: string;
  org: string;
  points: string[];
  tags: string;
}

export interface ProjectEntry {
  name: string;
  kind: string;
  meta: string;
  stack: string[];
  points: string[];
  url: string;
  image: string;
}

export interface ReleaseEntry {
  title: string;
  year: string;
}

export const profile = {
  name: "Sayyid Rafid Al Hadi",
  handle: "zydhh.hadi",
  wordmark: "ZYD.HADI",
  role: "Founder & Full-Stack Developer",
  brand: "QORVODE.AI",
  location: "Kerala, India",
  languages: ["English", "Arabic", "Malayalam"],
  email: "rappuplayzpro@gmail.com",
  phone: "+91 9526755210",
  phoneHref: "tel:+919526755210",
  instagram: "https://instagram.com/zydhh.hadi",
  github: "https://github.com/sayyidrafidalhadi",
  website: "https://qorvode.co.in",
  /** Where project requirements and enquiries are handled — the studio page. */
  enquiry: "https://qorvode.co.in/#contact",
  status: "Open to selective collaborations · 2026",
  tagline:
    "I build bespoke, high-conversion digital experiences that combine technical efficiency with luxury aesthetics.",
  executiveProfile:
    "High-performance full-stack web developer, Cyber Security student, and founder of QORVODE. Specializes in building bespoke, high-conversion digital experiences that combine technical efficiency with luxury aesthetics. Proven track record of scaling visual authority for perfume, healthcare, and Islamic brands.",
  terminalPrompt: "rafid@qorvode:~$",
  terminalCommand: "whoami --verbose",
  terminalOutput: [
    "founder @ QORVODE.AI — design × engineering",
    "cyber security student · linux native",
    "status: building · shipping · iterating",
  ],
  marquee: [
    "Full-Stack Developer",
    "Cyber Security Student",
    "UI/UX Designer",
    "Linux Enthusiast",
    "Founder",
    "Music Artist",
  ],
  capabilities: [
    {
      icon: "code",
      title: "Web & Frontend",
      items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML / CSS"],
      tags: "Components ⇢ Layouts ⇢ Performance",
    },
    {
      icon: "terminal",
      title: "Backend & Systems",
      items: ["Node.js", "PHP", "Python", "Git & GitHub"],
      tags: "APIs ⇢ Tooling ⇢ Shipping",
    },
    {
      icon: "shield",
      title: "Linux & Security",
      items: ["Ubuntu", "Kali Linux", "Termux", "CLI Operations"],
      tags: "Hardening ⇢ Automation ⇢ Forensics",
    },
    {
      icon: "palette",
      title: "Design & Creative",
      items: ["UI/UX Design", "3D Interactions", "Brand Identity", "Audio Branding"],
      tags: "Type ⇢ Motion ⇢ Systems",
    },
  ] as Capability[],
  facts: [
    { label: "Base", value: "Kerala, India" },
    { label: "Languages", value: "English · Arabic · Malayalam" },
    { label: "Currently", value: "B.Tech CSE — Cyber Security" },
    { label: "Studio", value: "QORVODE.AI — Founder" },
  ],
  education: [
    {
      period: "2026 — Present",
      title: "B.Tech CS & Engineering",
      org: "Al-Azhar Engineering College, Thodupuzha",
      focus: "Cyber Security",
      current: true,
    },
    {
      period: "Higher Secondary",
      title: "Higher Secondary Education",
      org: "Jamia Madeenathunnoor Baithul Izza, Calicut",
    },
    {
      period: "Secondary",
      title: "Secondary Education",
      org: "Pallikkara Islamic School, Kasaragod",
    },
  ] as EducationEntry[],
  experience: [
    {
      period: "2025 — Present",
      title: "Founder & Digital Architect",
      org: "QORVODE.AI · Premium Agency",
      points: [
        "Architected conversion-focused digital systems for high-ticket client acquisition across luxury industries.",
        "Engineered custom brand identity packages, UI/UX systems, and full-stack web solutions.",
        "Achieved 3x faster delivery systems with an average 40% boost in client inquiry quality.",
      ],
      tags: "Strategy ⇢ Systems ⇢ Delivery",
    },
  ] as RoleEntry[],
  projects: [
    {
      name: "Al Reem Restaurants",
      kind: "Restaurant Website",
      meta: "Delivered in 4 wks",
      stack: ["React", "Custom Components", "UI/UX", "Tailwind CSS"],
      points: [
        "Designed and deployed a premium restaurant website with modern design, smooth animations, and refined dark blue and gold aesthetic.",
        "Implemented a custom web loading animation, hero section with handmade components, and menu section with filter and menu item component.",
      ],
      url: "https://alreemmandi.com/",
      image: "alreem",
    },
    {
      name: "Elvora Creative",
      kind: "Digital Portfolio",
      meta: "Delivered in 3 wks",
      stack: ["React", "3D Layout", "UI/UX Design"],
      points: [
        "Designed and deployed an immersive dark-themed portfolio featuring smooth 3D interactions.",
        "Scaled client inquiries to 100+ per month through high-ticket luxury positioning.",
      ],
      url: "https://elvoracreative.vercel.app/",
      image: "elvora",
    },
    {
      name: "Meliqo",
      kind: "Streaming Platform",
      meta: "Waitlist active",
      stack: ["React", "OGL", "Three.js", "Lossless Audio"],
      points: [
        "Building a privacy-first halal audio platform with AMOLED monochrome aesthetics.",
        "OGL / Three.js interactive elements tuned for low-power devices.",
      ],
      url: "https://meliqo.qorvode.co.in/",
      image: "meliqo",
    },
    {
      name: "QORVODE.AI",
      kind: "Agency Hub",
      meta: "Live · studio",
      stack: ["React", "Vite", "Motion", "SEO"],
      points: [
        "The studio site where packages, process, and every enquiry are handled end to end.",
        "Pixel-wordmark identity, motion system, and conversion-first structure.",
      ],
      url: "https://qorvode.co.in/",
      image: "qorvode",
    },
  ] as ProjectEntry[],
  music: {
    intro:
      "Independent musical compositions exploring spirituality and existence — released on Spotify, Apple Music, and JioSaavn.",
    releases: [
      { title: "Wail Of The End", year: "2025" },
      { title: "Fajr-al-Islam", year: "2025" },
      { title: "The Sanctuary Of Hearts", year: "2026" },
    ] as ReleaseEntry[],
  },
};
