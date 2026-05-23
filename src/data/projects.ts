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
    id: 1,
    title: "Kithademic Studies",
    description: "Knowledge is the light of the heart. A platform for Islamic & academic excellence — engineered for depth and designed for clarity.",
    status: "In Progress",
    statusType: "default",
    tags: ["Next.js", "Education", "Islamic"],
    url: "https://kithademic.vercel.app"
  },
  {
    id: 2,
    title: "KPS Ayurveda Clinic",
    description: "A clean, elegant web presence for authentic holistic wellness care. Heal Through Ayurveda.",
    status: "In Progress",
    statusType: "default",
    tags: ["Web", "Healthcare", "UI/UX"],
    url: "https://kpsayurvedaclinic.vercel.app/"
  },
  {
    id: 3,
    title: "HalalTune",
    description: "A Spotify-tier Islamic audio streaming PWA — built entirely from an Android phone. Firebase backend, Cloudinary CDN, Cache API offline playback, full playlist system, and admin dashboard.",
    status: "Beta",
    statusType: "beta",
    tags: ["PWA", "Firebase", "Audio", "Islamic", "Cloudinary"],
    url: "https://halaltune.vercel.app",
    wide: true
  }
];
