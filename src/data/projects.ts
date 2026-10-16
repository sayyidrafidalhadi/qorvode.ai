export interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  statusType: string;
  tags: string[];
  url: string;
  image?: string;
  wide?: boolean;
}

export interface CuratedBlock {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface CaseStudy {
  id: number;
  brand: string;
  problem: string;
  approach: string;
  result: string;
  metric: string;
  timeline: string;
  tags: string[];
  status: string;
  curated?: CuratedBlock;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Elvora Creative",
    description: "A premium digital design portfolio with luxury-inspired UI, smooth animations, and a refined dark aesthetic. Features immersive 3D interactive layout.",
    status: "Live",
    statusType: "success",
    tags: ["React", "3D", "Premium Design", "UI/UX"],
    url: "https://elvoracreative.vercel.app/",
    image: "/elvora.png",
    wide: true
  },
  {
    id: 3,
    title: "Meliqo",
    description: "A high-fidelity audio streaming platform with an AMOLED monochrome design, lossless quality, and a privacy-first approach.",
    status: "Coming Soon",
    statusType: "default",
    tags: ["React", "Audio", "Streaming", "Tailwind CSS"],
    url: "https://meliqo.qorvode.co.in/",
    image: "/meliqo.png",
    wide: true
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 0,
    brand: "Elvora Creative",
    problem: "Digital design studio needing immersive portfolio with luxury aesthetic and 3D interactions",
    approach: "Premium dark-themed UI with smooth animations and 3D interactive layout",
    result: "Luxury-inspired design portfolio showcasing creative excellence",
    metric: "100+ design inquiries/month",
    timeline: "Delivered in 3 weeks",
    tags: ["React", "3D", "Premium Design", "UI/UX"],
    status: "Live",
    curated: {
      eyebrow: "Studio standard",
      title: "The Elvora Design Standard.",
      paragraphs: [
        "Elvora is a modern graphic design studio crafting distinctive brand identities that leave lasting impressions — logos, packaging, and visual systems built from the idea up, never pulled from a template.",
        "Every project moves through a transparent, collaborative process: strategy, exploration, refinement, and delivery. You stay informed at each step, and nothing ships until the craft holds up.",
        "From brand identity and packaging to promotional posters and complete social presences, each piece is designed to feel unmistakably yours — and to stay consistent across every surface it touches."
      ]
    }
  },
  {
    id: 3,
    brand: "Meliqo",
    problem: "No dedicated lossless audio streaming platform with a privacy-first approach",
    approach: "AMOLED monochrome landing page with immersive UI, OGL/Three.js visuals, and modern React architecture",
    result: "Premium brand presence with waitlist capture and high-conversion landing experience",
    metric: "Launching soon — waitlist active",
    timeline: "Delivered in 2 weeks",
    tags: ["React", "Audio", "Streaming"],
    status: "Coming Soon",
    curated: {
      eyebrow: "Curated experience",
      title: "The Meliqo Audio Standard.",
      paragraphs: [
        "Every track on Meliqo passes through a two-stage filter: curation review and audio engineering. If it compromises the listening experience, it does not belong here.",
        "Curated collections, ambient recordings, and high-fidelity streams — all vetted through a lens that honours the craft of recording without sacrificing modern production values.",
        "Our panel is made of people who listen critically every day, master audio for a living, and believe your playlist should feel like an extension of your taste — not an algorithmic guess."
      ]
    }
  }
];
