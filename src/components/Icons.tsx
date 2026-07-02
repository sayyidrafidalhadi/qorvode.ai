import { motion } from "motion/react";

const s = {
  sm: "w-4 h-4",
  m: "w-5 h-5",
  l: "w-7 h-7",
  xl: "w-9 h-9",
};

type Size = keyof typeof s;

const base = (size: Size = "m") => `${s[size]} shrink-0 text-accent`;

function Wrap({ children, label, size = "m", animate = true }: { children: React.ReactNode; label: string; size?: Size; animate?: boolean }) {
  const cls = `inline-flex items-center justify-center ${base(size)}`;
  if (!animate) {
    return (
      <span className={cls} role="img" aria-label={label}>
        {children}
      </span>
    );
  }
  return (
    <motion.span
      className={cls}
      whileHover={{ scale: 1.15, rotate: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      role="img"
      aria-label={label}
    >
      {children}
    </motion.span>
  );
}

/* Custom animated SVG icons — all use currentColor for theme support */
const Svg = ({ path, viewBox }: { path: string; viewBox?: string }) => (
  <svg viewBox={viewBox || "0 0 24 24"} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    {path.split("|").map((d, i) => {
      if (d.startsWith("c:")) {
        const [, cx, cy, r] = d.split(":");
        return <circle key={i} cx={cx} cy={cy} r={r} fill="currentColor" />;
      }
      if (d.startsWith("r:")) {
        const [, x, y, w, h, rx] = d.split(":");
        return <rect key={i} x={x} y={y} width={w} height={h} rx={rx} />;
      }
      if (d.startsWith("p:")) {
        return <polyline key={i} points={d.slice(2)} />;
      }
      return <path key={i} d={d} />;
    })}
  </svg>
);

export function PerfumeIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Perfume" size={size}>
      <Svg path="M12 3v4|M10 7h4|r:8:11:8:10:1|c:12:16:1.5" />
    </Wrap>
  );
}

export function StoreIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Store" size={size}>
      <Svg path="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z|p:9 22 9 12 15 12 15 22" />
    </Wrap>
  );
}

export function CrescentIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Islamic" size={size}>
      <Svg path="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </Wrap>
  );
}

export function DiamondIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Luxury" size={size}>
      <Svg path="M2 8l4-4h12l4 4-10 12L2 8z|M2 8h20" />
    </Wrap>
  );
}

export function BriefcaseIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Work" size={size}>
      <Svg path="r:2:7:20:14:2:2|M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </Wrap>
  );
}

export function ChartIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Growth" size={size}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    </Wrap>
  );
}

export function CodeIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Code" size={size}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    </Wrap>
  );
}

export function PaletteIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Design" size={size}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="22" />
      </svg>
    </Wrap>
  );
}

export function HeadphonesIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Music" size={size}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z" />
        <path d="M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
      </svg>
    </Wrap>
  );
}

export function QuoteIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Quote" size={size} animate={false}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
      </svg>
    </Wrap>
  );
}

export function ArrowUpIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Arrow up" size={size}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </Wrap>
  );
}

export function ArrowRightIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Arrow right" size={size}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </Wrap>
  );
}

export function TerminalIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Terminal" size={size}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    </Wrap>
  );
}

export function ShieldIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Security" size={size}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    </Wrap>
  );
}

export function MailIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Email" size={size}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    </Wrap>
  );
}

export function CheckIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Check" size={size}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </Wrap>
  );
}

export function ExternalIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="External link" size={size}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </Wrap>
  );
}

export function GridIcon({ size = "m" }: { size?: Size }) {
  return (
    <Wrap label="Grid" size={size}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    </Wrap>
  );
}
