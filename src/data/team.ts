import { site } from "@/data/site";

export interface TeamLink {
  label: string;
  href: string;
  /** Open in a new tab. Internal links stay in the current tab. */
  external?: boolean;
}

export interface TeamMember {
  /** Stable slug — used to build the schema.org @id anchor for this person. */
  slug: string;
  name: string;
  role: string;
  bio?: string;
  initials: string;
  /** Portrait in public/ — rendered as a square avatar. Falls back to initials. */
  image?: string;
  /** Alt text for the portrait. */
  imageAlt?: string;
  email?: string;
  /** Plain-text location, e.g. "Kozhikode, Kerala, India". */
  location?: string;
  /** Alternate names and handles — helps engines resolve this person to one entity. */
  alternateNames?: string[];
  /** Subjects this member is known for — feeds knowsAbout in schema.org. */
  knownFor?: string[];
  /** Personal portfolio, relative to the site root. */
  portfolio?: string;
  links?: TeamLink[];
}

export const team: TeamMember[] = [
  {
    slug: "sayyid-rafid-al-hadi",
    name: "Sayyid Rafid Al Hadi",
    role: "Founder · Developer & Designer",
    bio: "Leads QORVODE — building high-performance web experiences and steering the studio's creative direction.",
    initials: "RA",
    image: "/sayyid.webp",
    imageAlt: "Sayyid Rafid Al Hadi — founder of QORVODE",
    email: site.email,
    location: "Kerala, India",
    alternateNames: site.aliases,
    knownFor: [
      "Web Development",
      "Full-Stack Development",
      "UI/UX Design",
      "Brand Identity",
      "Linux & Security",
    ],
    portfolio: "/zydhh.hadi/",
    links: [
      { label: "GitHub", href: "https://github.com/sayyidrafidalhadi", external: true },
      { label: "Instagram", href: "https://instagram.com/zydhh.hadi", external: true },
      { label: "Portfolio", href: "/zydhh.hadi/" },
    ],
  },
  {
    slug: "muhammed-fayiz",
    name: "Muhammed Fayiz",
    role: "Graphic Designer · Video Grapher",
    bio: "Owns the studio's visual side — posters, brand identities and motion for campaigns, events and brands.",
    initials: "MF",
    image: "/fayiz.webp",
    imageAlt: "Muhammed Fayiz — graphic designer and video grapher at QORVODE",
    email: "fmhd9430@gmail.com",
    location: "Kozhikode, Kerala, India",
    alternateNames: ["Muhammed Fayiz", "Fayiz", "Fayiz M", "fayiizeeh"],
    knownFor: [
      "Graphic Design",
      "Poster Design",
      "Brand Identity",
      "Art Direction",
      "Motion & Animation",
      "Videography",
      "Video Editing",
      "Photo Editing",
    ],
    portfolio: "/fayiizeeh/",
    links: [
      { label: "Instagram", href: "https://instagram.com/fayiizeeh", external: true },
      { label: "Portfolio", href: "/fayiizeeh/" },
      { label: "Email", href: "mailto:fmhd9430@gmail.com" },
    ],
  },
];
