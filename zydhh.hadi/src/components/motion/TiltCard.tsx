"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className,
  max = 9,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 });
  const glareBg = useMotionTemplate`radial-gradient(340px circle at ${glareX}% ${glareY}%, rgba(217,166,72,0.13), transparent 60%)`;

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || event.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * max * 2);
    rotateX.set((0.5 - py) * max * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`group relative ${className ?? ""}`}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1000 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
      {glare && !reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
}
