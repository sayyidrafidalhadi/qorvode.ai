import { profile } from "@/data/profile";

const explore = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#music", label: "Music" },
  { href: "#contact", label: "Contact" },
];

const connect = [
  { href: profile.instagram, label: "Instagram", external: true },
  { href: profile.github, label: "GitHub", external: true },
  { href: `mailto:${profile.email}`, label: "Email" },
  { href: profile.phoneHref, label: "Phone" },
];

const studio = [
  { href: profile.website, label: "QORVODE.AI", external: true },
  { href: `${profile.website}/articles.html`, label: "Insights", external: true },
  { href: `${profile.website}/privacy.html`, label: "Privacy Policy", external: true },
  { href: `${profile.website}/terms.html`, label: "Terms of Service", external: true },
];

const Footer = () => {
  return (
    <footer className="border-t-[3px] border-accent-alt/20 bg-bg px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-12 bg-surface-alt p-8 brutal-border-alt sm:p-10 lg:flex-row lg:items-start">
          <div className="flex max-w-sm flex-col gap-4">
            <span className="font-display text-2xl font-bold tracking-tight text-text-alt sm:text-3xl">
              {profile.handle}<span className="text-accent-alt">.</span>
            </span>
            <p className="text-sm leading-relaxed text-text-alt/60">
              Personal portfolio of Sayyid Rafid Al Hadi — founder of QORVODE. Code, design, and
              sound, built as one connected system.
            </p>
            <p className="pt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-text-alt/40">
              © {new Date().getFullYear()} · {profile.location}
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/70">
                Explore
              </span>
              <div className="flex flex-col gap-3">
                {explore.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs font-medium text-text-alt/50 transition-colors hover:text-accent-alt"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/70">
                Connect
              </span>
              <div className="flex flex-col gap-3">
                {connect.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-xs font-medium text-text-alt/50 transition-colors hover:text-accent-alt"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt/70">
                Studio
              </span>
              <div className="flex flex-col gap-3">
                {studio.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-xs font-medium text-text-alt/50 transition-colors hover:text-accent-alt"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-text-alt/30">
          {profile.terminalPrompt} crafted in Kerala, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;
