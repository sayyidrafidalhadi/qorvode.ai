export interface ArsenalItem {
  icon: string;
  title: string;
  description: string;
}

export const arsenal: ArsenalItem[] = [
  {
    icon: "fas fa-layer-group",
    title: "Full-Stack Architecture",
    description: "Scalable, high-performance web applications using Next.js, React, Tailwind, and Firebase."
  },
  {
    icon: "fas fa-cube",
    title: "Immersive 3D UI",
    description: "Three.js and GSAP for fluid motion, WebGL, and glassmorphism that keeps users deeply engaged."
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile-First Dev",
    description: "Production-grade apps built entirely on Android — Spck Editor, Kotlin, no desktop required."
  }
];
