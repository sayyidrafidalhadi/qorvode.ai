import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { accent } from "@/lib/accents";
import TiltCard from "@/components/motion/TiltCard";
import { BriefcaseIcon, ExternalIcon, GridIcon } from "@/components/Icons";
import elvoraImg from "@/assets/elvora.png";
import meliqoImg from "@/assets/meliqo.png";
import alreemImg from "@/assets/alreem.png";
import qorvodeImg from "@/assets/qorvode.webp";

const projectImages: Record<string, string> = {
  elvora: elvoraImg,
  meliqo: meliqoImg,
  alreem: alreemImg,
  qorvode: qorvodeImg,
};

const Work = () => {
  return (
    <section id="work" className="bg-bg px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-12 lg:space-y-16">
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
              Experience &amp; projects
            </span>
          </div>
          <h2 className="text-3xl font-display font-bold uppercase leading-[1.02] tracking-tight text-text sm:text-4xl md:text-5xl">
            Building
            <span className="font-serif normal-case italic text-accent"> in public.</span>
          </h2>
        </motion.div>

        {/* Roles */}
        <div className="space-y-6">
          {profile.experience.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-surface-alt p-6 brutal-border-alt brutal-shadow-alt sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center bg-bg brutal-border">
                    <BriefcaseIcon size="sm" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
                      {role.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                      {role.org}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 self-start bg-bg px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-text/60 brutal-border">
                  {role.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 border-t border-border-alt pt-6">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-text/65">
                    <span className="mt-0.5 text-accent" aria-hidden="true">▸</span>
                    {point}
                  </li>
                ))}
              </ul>

              <span className="mt-6 block font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-alt">
                {role.tags}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Selected projects */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="group flex flex-col overflow-hidden bg-surface brutal-border brutal-shadow transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              <TiltCard max={5} className="overflow-hidden border-b border-border-alt" glare={false}>
                <img
                  src={projectImages[project.image]}
                  alt={`${project.name} — interface preview`}
                  width={1200}
                  height={750}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </TiltCard>

              <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] ${accent.text[project.accent]} [&_span]:text-current`}
                  >
                    <GridIcon size="sm" /> {project.kind}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text/40">
                    {project.meta}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
                  {project.name}
                </h3>

                <ul className="space-y-2">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-text/60">
                      <span className="mt-0.5 text-accent/70" aria-hidden="true">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-bg px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-text/60 brutal-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center gap-3 self-start bg-bg-alt px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.15em] brutal-border-alt shadow-[4px_4px_0px_var(--color-border)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:text-bg ${accent.text[project.accent]} ${accent.fill[project.accent]} [&_span]:text-current`}
                >
                  Visit live <ExternalIcon size="sm" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
