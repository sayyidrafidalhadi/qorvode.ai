import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

const ITEMS = [
  "Digital Authority",
  "Premium Design",
  "Strategic Development",
  "Conversion Focus",
  "Bespoke Solutions",
  "Brand Upgrade",
];

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function Track() {
  return (
    <div className="flex items-center gap-12">
      {ITEMS.map((text) => (
        <span key={text} className="flex items-center gap-12">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-text/35 sm:text-sm">
            {text}
          </span>
          <span className="block size-1.5 bg-accent/50" />
        </span>
      ))}
    </div>
  );
}

const Marquee = () => {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1400],
    [0, 4],
    { clamp: false },
  );
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const velocity = velocityFactor.get();
    if (velocity < 0) directionFactor.current = -1;
    else if (velocity > 0) directionFactor.current = 1;

    let moveBy = directionFactor.current * -1.6 * (delta / 1000);
    moveBy += directionFactor.current * moveBy * Math.abs(velocity) * 0.6;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden border-y border-border bg-bg-alt py-5" aria-hidden="true">
      <div className="flex whitespace-nowrap">
        <motion.div className="flex items-center gap-12 px-6" style={{ x }}>
          <Track />
          <Track />
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;