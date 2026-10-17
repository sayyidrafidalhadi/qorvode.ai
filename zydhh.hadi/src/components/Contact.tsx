import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { MailIcon, ExternalIcon, ArrowRightIcon } from "@/components/Icons";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "Instagram", value: "@zydhh.hadi", href: profile.instagram },
  { label: "GitHub", value: "@sayyidrafidalhadi", href: profile.github },
  { label: "Studio", value: "qorvode.co.in", href: profile.website },
  { label: "Location", value: profile.location, href: undefined },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-bg-alt border-t-[3px] border-border-alt px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface p-8 brutal-border brutal-shadow-lg sm:p-12 lg:p-16"
        >
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                  Contact / Collaborate
                </span>
              </div>
              <h2 className="text-3xl font-display font-bold uppercase leading-[1.02] tracking-tight text-text sm:text-4xl md:text-5xl">
                Let&apos;s collaborate on something
                <span className="font-serif normal-case italic text-accent"> meaningful.</span>
              </h2>
              <p className="text-sm leading-relaxed text-text/60 sm:text-base">
                Reach me for websites, brand identity systems, creative direction, or sonic identity
                work. Every message gets a considered response.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 bg-bg-alt px-6 py-4 font-mono text-[12px] font-semibold tracking-wider text-text-alt brutal-border-alt shadow-[4px_4px_0px_var(--color-border)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                <MailIcon size="sm" />
                {profile.email}
              </a>
              <a
                href={profile.phoneHref}
                className="inline-flex items-center gap-3 bg-accent px-6 py-4 font-mono text-[12px] font-semibold uppercase tracking-wider text-bg brutal-border-alt brutal-shadow-sm-alt transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Call <ArrowRightIcon size="sm" />
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-3 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel) =>
              channel.href ? (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 bg-bg px-5 py-4 brutal-border transition-colors duration-300 hover:border-accent/60"
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-text/40">
                    {channel.label}
                  </span>
                  <span className="inline-flex items-center gap-2 truncate font-display text-sm font-semibold tracking-tight text-text transition-colors group-hover:text-accent">
                    {channel.value}
                    <ExternalIcon size="sm" />
                  </span>
                </a>
              ) : (
                <div
                  key={channel.label}
                  className="flex items-center justify-between gap-4 bg-bg px-5 py-4 brutal-border"
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-text/40">
                    {channel.label}
                  </span>
                  <span className="font-display text-sm font-semibold tracking-tight text-text">
                    {channel.value}
                  </span>
                </div>
              ),
            )}
          </div>

          <p className="mt-10 font-mono text-[11px] text-accent">
            {profile.terminalPrompt} <span className="text-text/60">say hello</span>
            <span className="terminal-caret text-accent" />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
