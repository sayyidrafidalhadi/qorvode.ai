export interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  statusType: string;
  tags: string[];
  url: string;
  wide?: boolean;
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
    wide: true
  },
{
    id: 3,
    title: "Meliqo",
    description: "Pure Sound, Pure Halal — a high-fidelity audio streaming platform for Quran recitations, vocal nasheeds, and spiritual soundscapes. AMOLED monochrome design, lossless quality, privacy-first.",
    status: "Coming Soon",
    statusType: "default",
    tags: ["React", "Audio", "Islamic", "Streaming", "Tailwind CSS"],
    url: "https://meliqo.qorvode.co.in/",
    wide: true
  }
];
