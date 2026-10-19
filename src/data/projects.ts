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
    title: "Al Reem Restaurants",
    description: "A premium restaurant website with a modern design, smooth animations, and a refined dark blue and gold aesthetic, Featuring a custom web loading animation and custom hero section with custom handmade components, and a custom menu section with a custom filter and a custom menu item component.",
    status: "Live",
    statusType: "success",
    tags: ["React", "Custom Components", "UI/UX", "Tailwind CSS"],
    url: "https://alreemmandi.com/",
    image: "/alreem.png",
    wide: true
  },
  {
    id: 1,
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
    brand: "Al Reem Restaurants",
    problem: "Premium restaurant website with modern design, smooth animations, and refined dark blue and gold aesthetic",
    approach: "Custom web loading animation, custom hero section with handmade components, and custom menu section with filter and menu item component",
    result: "Luxury-inspired restaurant website with immersive user experience",
    metric: "100+ daily visitors",
    timeline: "Delivered in 4 weeks",
    tags: ["React", "Custom Components", "UI/UX", "Tailwind CSS"],
    status: "Live",
    curated: {
      eyebrow: "Curated experience",
      title: "The Al Reem Restaurants Case Study.",
      paragraphs: [
        "Al Reem Restaurants needed a website that reflected their premium positioning and unique dining experience.",
        "Our solution featured a modern design with smooth animations and a refined dark blue and gold aesthetic.",
        "The custom web loading animation and handmade components created an immersive user experience."
      ]
    }
  },
  {
    id: 1,
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
