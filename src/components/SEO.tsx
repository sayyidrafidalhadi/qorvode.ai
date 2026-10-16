import { site } from "@/data/site";
import { faq } from "@/data/faq";
import { projects } from "@/data/projects";
import { arsenal } from "@/data/arsenal";

const siteUrl = site.url;
const imageUrl = `${siteUrl}/logo.webp`;
const aliases = [...new Set([site.name, ...site.aliases])];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  givenName: "Sayyid Rafid",
  familyName: "Al Hadi",
  additionalName: "Muhammed Rafid Thangal",
  alternateName: aliases,
  description: site.description,
  url: siteUrl,
  email: site.email,
  image: imageUrl,
  keywords: site.keywords.join(", "),
  sameAs: [
    "https://instagram.com/zydhh.hadi",
    site.github,
  ],
  knowsAbout: [...new Set([
    ...arsenal.map(a => a.title),
    "Web Development",
    "UI/UX Design",
    "Linux",
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Three.js",
    "Git",
    "GitHub",
    "Python",
    "PHP",
    "Docker",
    "HTML5",
    "CSS3",
    "Termux",
    "Kali Linux",
    "Android Customization",
  ])],
  jobTitle: ["Developer", "Designer", "Founder"],
  knowsLanguage: [
    { "@type": "Language", name: "English" },
    { "@type": "Language", name: "Arabic" },
    { "@type": "Language", name: "Malayalam" },
  ],
  founderOf: {
    "@type": "Organization",
    name: "QORVODE",
    url: siteUrl,
  },
  nationality: {
    "@type": "Country",
    name: "India",
  },
  homeLocation: {
    "@type": "Place",
    name: "Kerala, India",
  },
  subjectOf: {
    "@type": "WebSite",
    name: `${site.name} | QORVODE`,
    url: siteUrl,
  },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: `${site.name} | QORVODE`,
  description: site.description,
  url: siteUrl,
  mainEntity: {
    "@type": "Person",
    name: site.name,
    identifier: site.github,
  },
  dateModified: "2026-10-16",
  inLanguage: "en",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "QORVODE",
  alternateName: ["Qorvode AI", "QORVODE.AI", "qorvode.ai", "Qorvode"],
  url: siteUrl,
  logo: imageUrl,
  description: "Qorvode AI is a premium digital experiences studio founded by Sayyid Rafid Al Hadi (Rafid Thangal). Bespoke web development, UI/UX design, and brand identity for brands that want to dominate.",
  keywords: site.keywords.join(", "),
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: site.name,
    alternateName: aliases,
  },
  foundingLocation: {
    "@type": "Place",
    name: "Kerala, India",
  },
  areaServed: "Worldwide",
  email: site.email,
  sameAs: [
    "https://instagram.com/zydhh.hadi",
    site.github,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kerala",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: site.email,
    contactType: "customer service",
    availableLanguage: ["English", "Arabic", "Malayalam"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${site.name} | QORVODE`,
  alternateName: site.aliases,
  url: siteUrl,
  description: site.description,
  keywords: site.keywords.join(", "),
  about: {
    "@type": "Person",
    name: site.name,
  },
  author: {
    "@type": "Person",
    name: site.name,
  },
  inLanguage: "en",
  copyrightYear: 2026,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${site.name} | QORVODE`,
  description: site.description,
  url: siteUrl,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "About Me", url: `${siteUrl}/#about` },
      { "@type": "ListItem", position: 2, name: "Work & Projects", url: `${siteUrl}/#work` },
      { "@type": "ListItem", position: 3, name: "Services", url: `${siteUrl}/#services` },
      { "@type": "ListItem", position: 4, name: "Articles", url: `${siteUrl}/articles.html` },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/#about` },
    { "@type": "ListItem", position: 3, name: "Work", item: `${siteUrl}/#work` },
    { "@type": "ListItem", position: 4, name: "Services", item: `${siteUrl}/#services` },
    { "@type": "ListItem", position: 5, name: "Articles", item: `${siteUrl}/articles.html` },
    { "@type": "ListItem", position: 6, name: "Contact", item: `${siteUrl}/#contact` },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact | QORVODE",
  description: "Get in touch with Sayyid Rafid Al Hadi — founder of QORVODE.",
  url: `${siteUrl}/#contact`,
  mainEntity: {
    "@type": "Person",
    name: site.name,
    email: site.email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.whatsapp,
      contactType: "customer service",
      availableLanguage: ["English", "Arabic", "Malayalam"],
    },
  },
};

const projectSchemas = projects.map((project) => ({
  "@context": "https://schema.org",
  "@type": ["SoftwareSourceCode", "Project"],
  name: project.title,
  description: project.description,
  url: project.url,
  author: {
    "@type": "Person",
    name: site.name,
  },
  creator: {
    "@type": "Person",
    name: site.name,
  },
  publisher: {
    "@type": "Organization",
    name: "QORVODE",
  },
  programmingLanguage: project.tags.filter((t) =>
    ["React", "Next.js", "TypeScript", "JavaScript", "Python", "PHP", "Three.js", "Tailwind CSS", "HTML5", "CSS3"].includes(t)
  ),
  keywords: project.tags.join(", "),
  applicationCategory: "WebApplication",
  operatingSystem: "All",
  dateCreated: "2026",
  dateModified: "2026-10-16",
  image: imageUrl,
}));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${site.name} | QORVODE`,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#home", "#about", "#services"],
  },
  url: siteUrl,
};

const imageObjectSchema = {
  "@context": "https://schema.org",
  "@type": "ImageObject",
  url: imageUrl,
  contentUrl: imageUrl,
  width: 1200,
  height: 630,
  caption: `${site.name} — QORVODE`,
  description: `Profile and brand image for ${site.name}, founder of QORVODE`,
};

const schemas = [
  personSchema,
  profilePageSchema,
  organizationSchema,
  websiteSchema,
  collectionPageSchema,
  breadcrumbSchema,
  contactPageSchema,
  faqSchema,
  speakableSchema,
  imageObjectSchema,
  ...projectSchemas,
];

export default function SEO() {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
