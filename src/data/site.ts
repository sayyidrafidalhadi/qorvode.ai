export interface SiteConfig {
  brand: string;
  name: string;
  title: string;
  description: string;
  url: string;
  github: string;
  email: string;
  availableYear: string;
  hero: {
    badge: string;
    headline: { top: string; bottom: string };
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
  };
  terminalPrompt: string;
  terminalLines: string[];
  stack: { icon: string; title: string }[];
}

export const site: SiteConfig = {
  brand: "QORVODE",
  name: "Sayyid Rafid Al Hadi",
  title: "QORVODE — Premium Digital Experiences",
  description: "We build premium digital authority for brands that want to dominate. Bespoke design and high-performance development.",
  url: "https://qorvode.co.in",
  github: "https://github.com/Cybertechyrappu",
  email: "qorvode.ai@gmail.com",
  availableYear: "2026",
  hero: {
    badge: "Available for Selective Partnerships · 2026",
    headline: {
      top: "Design. Development.",
      bottom: "Digital Authority."
    },
    subheadline: "We build premium digital experiences that transform brands into industry leaders. High-ticket solutions for serious businesses.",
    ctaPrimary: "Start Your Brand Upgrade",
    ctaSecondary: "View Selected Works",
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
