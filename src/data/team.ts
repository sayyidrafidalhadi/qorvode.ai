export interface TeamLink {
  label: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  initials: string;
  image?: string;
  links?: TeamLink[];
}

export const team: TeamMember[] = [
  {
    name: "Sayyid Rafid Al Hadi",
    role: "Founder · Developer & Designer",
    bio: "Leads QORVODE — building high-performance web experiences and steering the studio's creative direction.",
    initials: "RA",
    links: [
      { label: "GitHub", href: "https://github.com/sayyidrafidalhadi" },
      { label: "Instagram", href: "https://instagram.com/zydhh.hadi" },
    ],
  },
  // Add the rest of the team here — workers and collaborators:
  // {
  //   name: "",
  //   role: "",
  //   bio: "",
  //   initials: "",
  //   links: [{ label: "", href: "" }],
  // },
];
