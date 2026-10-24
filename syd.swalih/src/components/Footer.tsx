import { profile } from "@/data/profile";

const explore = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const connect = [
  { href: profile.instagram, label: "Instagram", external: true },
  { href: `mailto:${profile.email}`, label: "Email" },
  { href: profile.studioUrl, label: profile.studio, external: true },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-accent bg-bg px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-12 bg-surface-alt p-8 brutal-border-alt sm:p-10 lg:flex-row lg:items-start">
          <div className="flex max-w-sm flex-col gap-4">
            <span className="font-display text-2xl font-bold tracking-tight text-text-alt sm:text-3xl">
              {profile.handle}
              <span className="text-accent-alt">.</span>
            </span>
            <p className="text-sm leading-relaxed text-text-alt/60">
              Personal portfolio of {profile.name} — graphic designer, civil engineer,
              videographer, and visual storyteller based in {profile.location}.
            </p>
            <a
              href={profile.studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent-alt transition-colors hover:text-accent"
            >
              {profile.studio} ↗
            </a>
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
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-alt/40">
            © {year} {profile.name} · All rights reserved
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-alt/30">
            {profile.location}, {profile.region}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
