import { motion } from "motion/react";
import { profile } from "@/data/profile";

const Education = () => {
  return (
    <section
      id="education"
      className="border-y-[3px] border-border-alt bg-bg-alt px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
              Education
            </span>
          </div>
          <h2 className="text-3xl font-display font-bold uppercase leading-[1.02] tracking-tight text-text sm:text-4xl md:text-5xl">
            The path
            <span className="font-serif normal-case italic text-accent"> so far.</span>
          </h2>
        </motion.div>

        <ol className="relative ml-1 space-y-6 border-l border-border-alt pl-6 sm:ml-2 sm:pl-10">
          {profile.education.map((entry, i) => (
            <motion.li
              key={entry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`relative p-6 brutal-border-alt ${
                entry.current
                  ? "bg-surface-alt shadow-[5px_5px_0px_var(--color-border)]"
                  : "bg-surface"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-8 -left-[31px] size-2.5 rounded-full border-2 border-bg-alt sm:-left-[47px] ${
                  entry.current ? "animate-pulse bg-accent" : "bg-border-strong"
                }`}
              />

              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  {entry.period}
                </span>
                {entry.focus && (
                  <span className="border border-accent/40 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-accent">
                    {entry.focus}
                  </span>
                )}
                {entry.current && (
                  <span className="bg-accent px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-bg">
                    Current
                  </span>
                )}
              </div>

              <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
                {entry.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-text/60">{entry.org}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
