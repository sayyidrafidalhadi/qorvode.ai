"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*<>/\\[]{}=+";

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
}

export default function ScrambleText({
  text,
  className,
  duration = 900,
  delay = 0,
  once = true,
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, amount: 0.6 });
  const reduce = useReducedMotion();
  const [output, setOutput] = useState(reduce ? text : "");

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setOutput(text);
      return;
    }

    let raf = 0;
    let start = 0;
    const total = text.length;

    const frame = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start - delay;
      const progress = elapsed <= 0 ? 0 : Math.min(1, elapsed / duration);
      const revealed = Math.floor(progress * total);

      let out = "";
      for (let i = 0; i < total; i++) {
        const char = text[i];
        if (char === " ") {
          out += " ";
        } else if (i < revealed) {
          out += char;
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setOutput(out);

      if (progress < 1) {
        raf = requestAnimationFrame(frame);
      } else {
        setOutput(text);
      }
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [inView, text, duration, delay, reduce]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {output || "\u00A0"}
    </span>
  );
}
