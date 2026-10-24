import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { MailIcon, PinIcon, InstagramIcon, ArrowUpRightIcon } from "@/components/Icons";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "Location",
    value: profile.location,
    href: undefined,
    Icon: PinIcon,
  },
  {
    label: "Instagram",
    value: profile.instagramHandle,
    href: profile.instagram,
    Icon: InstagramIcon,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative border-t-[3px] border-accent bg-bg-alt px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="field-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:col-span-7"
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                Get in touch
              </span>
            </div>

            <h2 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tighter text-text sm:text-6xl md:text-7xl">
              Let&apos;s make
              <br />
              something
              <br />
              <span className="font-serif font-normal normal-case italic text-accent">
                remarkable.
              </span>
            </h2>

            <div className="flex flex-wrap items-center gap-4">
              <span className="bg-surface px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-text/70 brutal-border brutal-shadow-sm">
                {profile.availability}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 bg-accent px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-bg [&_span]:text-current brutal-border-alt brutal-shadow-sm-alt transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Send a message <ArrowUpRightIcon size="sm" />
              </a>
            </div>
          </motion.div>

          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="lg:col-span-5"
          >
            <ul className="border-t border-border">
              {channels.map(({ label, value, href, Icon }) => {
                const inner = (
                  <>
                    <span className="flex size-10 shrink-0 items-center justify-center bg-surface text-accent brutal-border transition-all duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:bg-accent group-hover:text-bg [&_span]:text-current">
                      <Icon size="sm" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-text/40">
                        {label}
                      </span>
                      <span className="mt-1 block truncate font-display text-base font-semibold tracking-tight text-text transition-colors group-hover:text-accent sm:text-lg">
                        {value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={label} className="border-b border-border">
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-4 py-5"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4 py-5">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 bg-surface px-6 py-5 brutal-border-alt">
              <p className="font-mono text-[11px] leading-relaxed text-text/50">
                Prefer a studio visit or a voice call? Email is the fastest way to reach
                {` ${profile.name}`} — briefs, timelines, and quotes all welcome.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
