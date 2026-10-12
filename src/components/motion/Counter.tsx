"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface CounterProps {
  value: string;
  className?: string;
  duration?: number;
}

interface Parsed {
  prefix: string;
  suffix: string;
  target: number;
  pad: number;
  grouped: boolean;
}

function parseValue(value: string): Parsed | null {
  const match = value.match(/^(\D*)(\d[\d,]*)(\D*)$/);
  if (!match) return null;
  const [, prefix = "", raw = "", suffix = ""] = match;
  const digits = raw.replace(/,/g, "");
  return {
    prefix,
    suffix,
    target: parseInt(digits, 10),
    pad: digits.length,
    grouped: raw.includes(","),
  };
}

export default function Counter({ value, className, duration = 1400 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!parsed) return;
    if (!inView) return;
    if (reduce) {
      setDisplay(parsed.target);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * parsed.target));
      if (t < 1) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed, reduce, duration]);

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const text = parsed.grouped
    ? display.toLocaleString()
    : String(display).padStart(parsed.pad, "0");

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {text}
      {parsed.suffix}
    </span>
  );
}
