export interface SiteConfig {
  brand: string;
  name: string;
  aliases: string[];
  title: string;
  description: string;
  keywords: string[];
  url: string;
  github: string;
  email: string;
  availableYear: string;
  hero: {
    badge: string;
    wordmark: string;
    headline: { top: string; bottom: string };
    subheadline: string;
    tagline: string[];
    news: { text: string; href: string };
    capabilities: string[];
    stats: { value: string; label: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
  };
  terminalPrompt: string;
  terminalLines: string[];
  stack: { icon: string; title: string }[];
}

export const site: SiteConfig = {
  brand: "QORVODE.AI",
  name: "Sayyid Rafid Al Hadi",
  aliases: [
    "Sayyid Rafid",
    "Rafid Thangal",
    "Muhammed Rafid",
    "Muhammed Rafid Thangal",
    "Rafid Al Hadi",
    "Sayyid Muhammed Rafid",
    "zydhh.hadi",
  ],
  title: "QORVODE — Premium Digital Experiences",
  description: "Sayyid Rafid Al Hadi (also known as Sayyid Rafid, Rafid Thangal, Muhammed Rafid, or zydhh.hadi) is the founder of QORVODE (Qorvode AI) — a premium digital experiences studio from Kerala, India. He builds high-performance websites, UI/UX, brand identities, and cinematic Islamic music.",
  keywords: [
    "QORVODE",
    "Qorvode AI",
    "QORVODE.AI",
    "qorvode.ai",
    "qorvode",
    "Sayyid Rafid Al Hadi",
    "Sayyid Rafid",
    "Rafid Thangal",
    "Muhammed Rafid",
    "Rafid",
    "zydhh.hadi",
    "web developer Kerala",
    "music artist Kerala",
    "nasheed artist",
    "premium digital studio",
    "Islamic music",
  ],
  url: "https://qorvode.co.in",
  github: "https://github.com/sayyidrafidalhadi",
  email: "qorvode.ai@gmail.com",
  availableYear: "2026",
  hero: {
    badge: "Available for Selective Partnerships · 2026",
    wordmark: "QORVODE",
    headline: {
      top: "QORVODE",
      bottom: "AI."
    },
    subheadline: "We build premium digital experiences that transform brands into industry leaders. High-ticket solutions for serious businesses.",
    tagline: [
      "The studio for the age of agents.",
      "Code, design, and sound — one connected system."
    ],
    news: {
      text: "QORVODE is accepting select partnerships for 2026",
      href: "/articles.html"
    },
    capabilities: [
      "Web Development",
      "UI/UX Design",
      "Brand Identity",
      "Music Production",
      "Linux & Security"
    ],
    stats: [
      { value: "02", label: "Signature case studies" },
      { value: "12", label: "Technologies mastered" },
      { value: "24h", label: "Response time" }
    ],
    ctaPrimary: "Start Your Brand Upgrade",
    ctaSecondary: "See Selected Works",
    trust: "Trusted by visionary founders & premium brands"
  },
  terminalPrompt: "qorvode@authority:~$",
  terminalLines: [
    "> Analyzing market positioning...",
    "> Optimizing conversion architecture...",
    "> Scaling digital authority...",
    "> Status: Premium Experience Online. ✓"
  ],
  stack: [
    { icon: "fab fa-html5", title: "HTML5" },
    { icon: "fab fa-css3-alt", title: "CSS3" },
    { icon: "fab fa-js", title: "JavaScript" },
    { icon: "fab fa-react", title: "React" },
    { icon: "fas fa-layer-group", title: "Next.js" },
    { icon: "fas fa-wind", title: "Tailwind" },
    { icon: "fab fa-python", title: "Python" },
    { icon: "fab fa-php", title: "PHP" },
    { icon: "fab fa-linux", title: "Linux" },
    { icon: "fab fa-docker", title: "Docker" },
    { icon: "fab fa-git-alt", title: "Git" },
    { icon: "fab fa-github", title: "GitHub" }
  ]
};
