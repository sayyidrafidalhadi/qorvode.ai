import { site } from "@/data/site";
import { faq } from "@/data/faq";
import { projects } from "@/data/projects";
import { arsenal } from "@/data/arsenal";
import { team } from "@/data/team";

const siteUrl = site.url;
const imageUrl = `${siteUrl}/logo.webp`;
const aliases = [...new Set([site.name, ...site.aliases])];

/** Stable @id anchors so every schema below points at the same entities. */
const orgId = `${siteUrl}/#organization`;
const personId = (slug: string) => `${siteUrl}/#person-${slug}`;

/**
 * Each team member as a first-class schema.org Person, linked back to the
 * organization by @id. Engines use this to resolve "who is X at QORVODE"
 * instead of guessing from page copy.
 */
const teamSchemas = team.map((member) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId(member.slug),
  name: member.name,
  ...(member.alternateNames?.length
    ? { alternateName: [...new Set([member.name, ...member.alternateNames])] }
    : {}),
  jobTitle: member.role,
  ...(member.bio ? { description: member.bio } : {}),
  url: member.portfolio ? `${siteUrl}${member.portfolio}` : siteUrl,
  ...(member.image ? { image: `${siteUrl}${member.image}` } : {}),
  ...(member.email ? { email: `mailto:${member.email}` } : {}),
  ...(member.location
    ? {
        homeLocation: {
          "@type": "Place",
          name: member.location,
        },
        jobTitleLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: member.location.split(",")[0],
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
        },
      }
    : {}),
  worksFor: { "@id": orgId },
  ...(member.knownFor?.length ? { knowsAbout: member.knownFor } : {}),
  knowsLanguage: [
    { "@type": "Language", name: "English" },
    { "@type": "Language", name: "Arabic" },
    { "@type": "Language", name: "Malayalam" },
  ],
  sameAs: (member.links ?? [])
    .map((link) => (link.href.startsWith("/") ? `${siteUrl}${link.href}` : link.href))
    .filter((href) => /^https?:/i.test(href)),
  ...(member.portfolio ? { subjectOf: { "@id": `${siteUrl}${member.portfolio}` } } : {}),
}));

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId(team[0].slug),
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
    "@id": orgId,
  },
  worksFor: {
    "@id": orgId,
  },
  colleague: teamSchemas
    .filter((person) => person["@id"] !== personId(team[0].slug))
    .map((person) => ({ "@id": person["@id"] })),
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
  "@id": orgId,
  name: "QORVODE",
  alternateName: ["Qorvode AI", "QORVODE.AI", "qorvode.ai", "Qorvode"],
  url: siteUrl,
  logo: imageUrl,
  description: "Qorvode AI is a premium digital experiences studio founded by Sayyid Rafid Al Hadi (Rafid Thangal) and worked on by Muhammed Fayiz. Bespoke web development, UI/UX design, brand identity, poster design and motion for brands that want to dominate.",
  keywords: site.keywords.join(", "),
  foundingDate: "2026",
  founder: { "@id": personId(team[0].slug) },
  employee: teamSchemas.map((person) => ({ "@id": person["@id"] })),
  numberOfEmployees: { "@type": "QuantitativeValue", value: team.length },
  foundingLocation: {
    "@type": "Place",
    name: "Kerala, India",
  },
  areaServed: "Worldwide",
  email: site.email,
  sameAs: [
    "https://instagram.com/qorvode.ai",
    "https://instagram.com/zydhh.hadi",
    "https://instagram.com/fayiizeeh",
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
  "@id": `${siteUrl}/#website`,
  name: `${site.name} | QORVODE`,
  alternateName: site.aliases,
  url: siteUrl,
  description: site.description,
  keywords: site.keywords.join(", "),
  publisher: { "@id": orgId },
  about: teamSchemas.map((person) => ({ "@id": person["@id"] })),
  author: teamSchemas.map((person) => ({ "@id": person["@id"] })),
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
      { "@type": "ListItem", position: 5, name: "The Team", url: `${siteUrl}/#team` },
      { "@type": "ListItem", position: 6, name: "Sayyid Rafid Al Hadi — Portfolio", url: `${siteUrl}/zydhh.hadi/` },
      { "@type": "ListItem", position: 7, name: "Muhammed Fayiz — Portfolio", url: `${siteUrl}/fayiizeeh/` },
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
  description: "Get in touch with Sayyid Rafid Al Hadi — founder of QORVODE — or Muhammed Fayiz, the studio's graphic designer and video grapher.",
  url: `${siteUrl}/#contact`,
  mainEntity: {
    "@type": "Person",
    "@id": personId(team[0].slug),
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
  "@id": `${siteUrl}/#webpage`,
  name: `${site.name} | QORVODE`,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#home", "#about", "#team", "#services"],
  },
  url: siteUrl,
  mainEntity: { "@id": orgId },
  about: teamSchemas.map((person) => ({ "@id": person["@id"] })),
};

/** The team roster as its own list, so "who works at QORVODE" has a direct answer. */
const teamListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/#team`,
  name: "The QORVODE team",
  description:
    "QORVODE is a two-person studio: Sayyid Rafid Al Hadi (founder, developer and designer) and Muhammed Fayiz (graphic designer and video grapher).",
  numberOfItems: team.length,
  itemListElement: team.map((member, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: member.name,
    url: member.portfolio ? `${siteUrl}${member.portfolio}` : siteUrl,
    item: { "@id": personId(member.slug) },
  })),
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

/** Portrait of each team member, for image search and entity cards. */
const teamImageSchemas = team
  .filter((member) => member.image)
  .map((member) => ({
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": `${siteUrl}${member.image}`,
    url: `${siteUrl}${member.image}`,
    contentUrl: `${siteUrl}${member.image}`,
    width: 400,
    height: 400,
    caption: member.name,
    description: member.imageAlt ?? member.name,
    representativeOfPage: true,
    license: siteUrl,
    creator: { "@id": personId(member.slug) },
  }));

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
  teamListSchema,
  ...teamSchemas,
  ...teamImageSchemas,
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
