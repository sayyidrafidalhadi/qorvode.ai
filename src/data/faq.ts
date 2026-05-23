export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "What is your primary development stack?",
    answer: "I specialize in modern web and mobile technologies — Next.js, React, Tailwind CSS, TypeScript, Firebase, and Three.js for immersive 3D interfaces. I build everything mobile-first."
  },
  {
    question: "Do you write and compose your own music?",
    answer: "Yes. For releases like 'Wail Of The End' and 'Fajr-al-Islam', I handle all vocals, lyric writing, and composition. My music draws from Islamic heritage and modern production."
  },
  {
    question: "Are the Kithademic and KPS projects live?",
    answer: "Both are in active development with live preview deployments on Vercel. Click the project links above to explore them."
  },
  {
    question: "Open to collaboration?",
    answer: "Absolutely. Whether it's development, audio collaboration, or a hybrid creative project — use the contact form below and let's build something extraordinary together."
  }
];
