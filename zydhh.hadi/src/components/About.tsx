import { motion } from "motion/react";
import { profile } from "@/data/profile";
import ScrambleText from "@/components/motion/ScrambleText";
import { CodeIcon, TerminalIcon, ShieldIcon, PaletteIcon } from "@/components/Icons";

const iconMap = {
  code: CodeIcon,
  terminal: TerminalIcon,
  shield: ShieldIcon,
  palette: PaletteIcon,
};

const About = () => {
  return (
    <section id="about" className="relative bg-bg px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-12 lg:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-5"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              Executive profile
            </span>
          </div>
          <h2 className="text-3xl font-display font-bold uppercase leading-[1.02] tracking-tight text-text sm:text-4xl md:text-5xl">
            <ScrambleText text="Engineering meets" />
            <br />
            <ScrambleText
              text="creative direction."
              delay={200}
              className="font-serif normal-case italic text-accent"
            />
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-text/70 sm:text-lg">
            {profile.executiveProfile}
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 lg:col-span-4"
          >
            {profile.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 bg-surface px-5 py-4 brutal-border-alt"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-text/40">
                  {fact.label}
                </span>
                <span className="text-right font-display text-sm font-semibold tracking-tight text-text">
                  {fact.value}
                </span>
              </div>
            ))}
            <div className="border-t border-border px-1 pt-4">
              <p className="font-mono text-[11px] leading-relaxed text-text/40">
                “Every project is a complete visual statement — crafted, revised, and shipped with intent.”
              </p>
            </div>
          </motion.div>

          {/* Capability grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {profile.capabilities.map((cap, i) => {
              const Icon = iconMap[cap.icon];
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col bg-surface-alt p-6 brutal-border-alt shadow-[5px_5px_0px_var(--color-border)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  <div className="mb-4 flex size-10 items-center justify-center bg-bg brutal-border">
                    <Icon size="sm" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-bold tracking-tight text-text">
                    {cap.title}
                  </h3>
                  <div className="mb-4 flex flex-1 flex-wrap gap-2">
                    {cap.items.map((item) => (
                      <span
                        key={item}
                        className="bg-bg px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-text/70 brutal-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className="block border-t border-border-alt pt-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-alt">
                    {cap.tags}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
