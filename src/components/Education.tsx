import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { SchoolIcon, BookIcon, GraduationIcon, ShieldIcon, CyberShieldIcon } from "./EducationIcons";

interface Milestone {
  id: number;
  institution: string;
  degree: string;
  period: string;
  icon: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    id: 1,
    institution: "Green Woods Public School",
    degree: "Lower Primary",
    period: "Primary Education",
    icon: <SchoolIcon />,
  },
  {
    id: 2,
    institution: "GHSS Pookkottur",
    degree: "Upper Primary",
    period: "Upper Primary Education",
    icon: <BookIcon />,
  },
  {
    id: 3,
    institution: "Pallikkara Islamic School",
    degree: "High School",
    period: "Secondary Education",
    icon: <ShieldIcon />,
  },
  {
    id: 4,
    institution: "Markaz Integrated",
    degree: "Higher Secondary",
    period: "Higher Secondary Education",
    icon: <GraduationIcon />,
  },
  {
    id: 5,
    institution: "Al-Azhar Engineering College",
    degree: "B.Tech Computer Science & Engineering (Cyber Security)",
    period: "2024 – Present",
    icon: <CyberShieldIcon />,
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 6, y: y * -6 });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.5s ease" : "none",
      }}
    >
      {children}
    </div>
  );
}

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 60,
    damping: 20,
  });

  return (
    <div
      ref={ref}
      className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 w-px bg-accent-alt/20" />
      <motion.div
        className="absolute top-0 left-0 w-px bg-gradient-to-b from-accent-alt via-accent-alt/60 to-accent-alt/10 origin-top"
        style={{ scaleY }}
      />
      <motion.div
        className="absolute -left-[3px] top-0 w-[7px] h-[7px] rounded-full bg-accent-alt"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [0, 1]) }}
      />
    </div>
  );
}

function TimelineDot() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
      <motion.div
        className="w-[13px] h-[13px] rounded-full border-[3px] border-accent-alt bg-bg-alt relative"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <motion.div
          className="absolute inset-[2px] rounded-full bg-accent-alt"
          initial={{ scale: 0 }}
          whileInView={{ scale: [1, 0.6, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35px] h-[35px] rounded-full bg-accent-alt/10 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
        viewport={{ once: true }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function MilestoneCard({ milestone, index }: { milestone: Milestone; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start">
      <div className={`hidden md:block w-[calc(50%-28px)] ${isLeft ? "pr-8" : "pl-8 order-2"}`}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1], delay: 0.1 }}
        >
          <TiltCard>
            <div
              className={`
                bg-surface-alt brutal-border-alt p-6 sm:p-8
                hover:bg-bg-alt transition-colors duration-300
                ${isLeft ? "text-right" : "text-left"}
              `}
            >
              <div className={`flex items-start gap-4 ${isLeft ? "flex-row-reverse" : ""}`}>
                <div className="shrink-0 mt-1">
                  {milestone.icon}
                </div>
                <div className={`flex-1 min-w-0 ${isLeft ? "text-right" : "text-left"}`}>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent-alt/60 block mb-2">
                    {milestone.period}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-bold uppercase tracking-tight text-text-alt mb-1.5">
                    {milestone.institution}
                  </h3>
                  <p className="text-sm text-text-alt/50 leading-relaxed">
                    {milestone.degree}
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      <div className="hidden md:flex w-14 shrink-0 justify-center relative">
        <TimelineDot />
      </div>

      <div className={`hidden md:block w-[calc(50%-28px)] ${isLeft ? "order-3" : "pr-8"}`} />

      <div className="md:hidden w-full pl-8 relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-accent-alt/20" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <div className="relative pl-4 pb-10">
            <TimelineDot />
            <TiltCard>
              <div className="bg-surface-alt brutal-border-alt p-5 hover:bg-bg-alt transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 scale-75 origin-top-left">
                    {milestone.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-accent-alt/60 block mb-1.5">
                      {milestone.period}
                    </span>
                    <h3 className="text-sm sm:text-base font-display font-bold uppercase tracking-tight text-text-alt mb-1">
                      {milestone.institution}
                    </h3>
                    <p className="text-xs text-text-alt/50 leading-relaxed">
                      {milestone.degree}
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-32 sm:py-48 px-5 sm:px-8 lg:px-12 bg-bg-alt relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-alt" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-24 lg:mb-28"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-alt block mb-4">
            Academic Journey
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-text-alt">
            Foundation of<br />
            <span className="text-accent-alt italic font-serif normal-case">Excellence.</span>
          </h2>
          <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-text-alt/60 font-serif italic border-l-[3px] border-accent-alt pl-6 mt-6">
            A path shaped by discipline, curiosity, and a commitment to mastering the craft.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block" aria-hidden="true">
            <TimelineLine />
          </div>

          <div className="space-y-0 sm:space-y-0 md:space-y-16 lg:space-y-20">
            {milestones.map((milestone, index) => (
              <MilestoneCard key={milestone.id} milestone={milestone} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t-[3px] border-accent-alt"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <p className="text-sm text-text-alt/60">
              Currently pursuing a B.Tech in Cyber Security at Al-Azhar Engineering College.
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-accent-alt text-bg-alt font-bold text-[10px] uppercase tracking-[0.2em] brutal-border brutal-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
