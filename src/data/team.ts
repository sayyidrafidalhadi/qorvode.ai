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
  {
    slug: "niya-fathima",
    name: "Niya Fathima",
    role: "Cyber Security Student",
    bio: "Aspiring cyber security student with a passion for ethical hacking and digital forensics, aiming to protect and secure digital assets.",
    initials: "I",
    image: "/user.png",
    imageAlt: "Niya Fathima — cyber security student at QORVODE",
    email: "niyafathimai834@gmail.com",
    location: "Alappuzha, Kerala, India",
    alternateNames: ["Niya Fathima", "Fathima", "Niyaa"],
    knownFor: [
      "Cyber Security",
      "Ethical Hacking",
      "Digital Forensics",
      "Network Security",
      "Penetration Testing",
    ],
    links: [
      { label: "Email", href: "mailto:niyafathimai834@gmail.com" },
    ],
  },
  {
    slug: "sayyid-swalih-al-hadi",
    name: "Sayyid Swalih Al Hadi",
    role: "Graphic Designer · Civil Engineer",
    bio: "Graphic designer and civil engineer with a keen eye for aesthetics, contributing to the studio's visual projects and design solutions.",
    initials: "SR",
    image: "/swalih.jpg",
    imageAlt: "Sayyid Swalih Al Hadi — graphic designer and civil engineer at QORVODE",
    email: "swalihsayyid94@gmail.com",
    location: "Malappuram, Kerala, India",
    alternateNames: ["Sayyid Swalih Al Hadi", "Swalih", "SR"],
    knownFor: [
      "Graphic Design",
      "Civil Engineering",
      "Visual Design",
      "Branding",
      "Illustration",
    ],
    portfolio: "/syd.swalih/",
    links: [
      { label: "Instagram", href: "https://instagram.com/sayyid_al_hadi", },
      { label: "Email", href: "mailto:swalihsayyid94@gmail.com" },
      { label: "Portfolio", href: "/syd.swalih/" },
    ],
  },
  {
    slug: "ejaz-musthafa",
    name: "Ejaz Musthafa",
    role: "Video Grapher · Photo Editor (Lightroom)",
    bio: "Video Grapher and Photo Editor with expert skills and aesthetic approach, contributing to the studio's visual projects and design solutions.",
    initials: "EM",
    imageAlt: "Ejaz Musthafa - Video Grapher And Photo Editor at QORVODE",
    email: "",
    location: "Malappuram, Kerala, India",
    alternateNames: ["Ejaz Musthafa", "Ejaz", "EM"],
    knownFor: [
      "Video Grapher",
      "Photo Editing",
      "Lightroom",
      "Visual Design",
      "Branding",
    ],
    portfolio: "/ejaz.musthafa/",
    links: [
      { label: "Instagram", href: "https://instagram.com/ejazmusthafa", },
      { label: "Portfolio", href: "/ejaz.musthafa/" },
      { label: "Email", href: "mailto:ejazmusthafa@gmail.com" },
    ],
  },
  {
    slug: "aysha-ks",
    name: "Aysha KS",
    role: "Cyber Security Student",
    bio: "Aspiring cyber security student with a passion for ethical hacking and digital forensics, aiming to protect and secure digital assets.",
    initials: "KS",
    image: "/user.png",
    imageAlt: "Aysha KS — cyber security student at QORVODE",
    email: "ayshaks.aae26cc@gmail.com",
    location: "Kottayam, Kerala, India",
    alternateNames: ["Aysha KS", "KS", "Aysha"],
    knownFor: [
      "Cyber Security",
      "Ethical Hacking",
      "Digital Forensics",
      "Network Security",
      "Penetration Testing",
    ],
    links: [
      { label: "Email", href: "mailto:ayshaks.aae26cc@gmail.com" },
    ],
  }
];
