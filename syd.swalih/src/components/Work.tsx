import { motion } from "motion/react";
import { profile, type ProjectEntry } from "@/data/profile";
import { accent } from "@/lib/accents";
import TiltCard from "@/components/motion/TiltCard";
import SmartImage from "@/components/SmartImage";
import { ArrowUpRightIcon } from "@/components/Icons";
import auraBrandImg from "@/assets/aura-brand.webp";
import auraRetailImg from "@/assets/aura-retail.webp";
import auraGuidelinesImg from "@/assets/aura-guidelines.webp";
import elvoraImg from "@/assets/elvora.webp";

/** Project artwork, keyed by the `image` field in profile.ts. */
const projectImages: Record<string, string> = {
  "aura-brand": auraBrandImg,
  "aura-retail": auraRetailImg,
  "aura-guidelines": auraGuidelinesImg,
  elvora: elvoraImg,
};

const PosterFallback = ({ project }: { project: ProjectEntry }) => (
  <div className="relative flex h-full w-full flex-col justify-between bg-bg-alt p-6">
    <div className="grid-field pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
    <span className="relative font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-text/40">
      {project.index}
    </span>
    <div className="relative">
      <p className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-text/25">
        {project.name}
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-text/30">
        {project.category}
      </p>
    </div>
  </div>
);

const Work = () => {
  return (
    <section id="work" className="bg-bg px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-12 lg:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent">
                Selected
              </span>
            </div>
            <h2 className="font-display text-5xl font-bold uppercase leading-[0.92] tracking-tighter text-text sm:text-6xl md:text-7xl">
              Work
            </h2>
          </div>

          <div className="space-y-2 lg:text-right">
            <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-text/40">
              Projects
            </span>
            <span className="block font-display text-lg font-bold tracking-tight text-text sm:text-xl">
              {profile.years}
            </span>
          </div>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
          {profile.projects.map((project, i) => (
            <motion.article
              key={project.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="group flex flex-col"
            >
              <TiltCard max={5} className="overflow-hidden">
                <SmartImage
                  src={projectImages[project.image]}
                  alt={`${project.name} — ${project.subtitle} by ${profile.name}`}
                  width={1080}
                  height={1350}
                  className="relative aspect-[4/5] w-full overflow-hidden border border-border-alt bg-bg-alt"
                  imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  fallback={<PosterFallback project={project} />}
                />
              </TiltCard>

              <div className="flex flex-1 flex-col gap-3 pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-text sm:text-3xl">
                    {project.name}
                  </h3>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-text/35">
                    {project.index}
                  </span>
                </div>

                <p className="font-serif text-lg italic leading-snug text-text/60">
                  {project.subtitle}
                </p>

                <div className="mt-auto flex items-end justify-between gap-4 border-t border-border pt-5">
                  <div className="min-w-0">
                    <span
                      className={`block font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${accent.text[project.accent]}`}
                    >
                      {project.category}
                    </span>
                    <span className="mt-1.5 block truncate font-mono text-[10px] uppercase tracking-[0.15em] text-text/40">
                      {project.client} · {project.year}
                    </span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} — ${project.subtitle} (opens Instagram)`}
                    className={`inline-flex size-11 shrink-0 items-center justify-center bg-surface ${accent.text[project.accent]} brutal-border transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] ${accent.fill[project.accent]} hover:text-bg [&_span]:text-current`}
                  >
                    <ArrowUpRightIcon size="sm" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
