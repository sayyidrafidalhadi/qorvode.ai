import { motion } from "motion/react";

const iconBase = "text-white";

function IconWrap({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <motion.div
      className="w-12 h-12 flex items-center justify-center shrink-0"
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {children}
      <span className="sr-only">{label}</span>
    </motion.div>
  );
}

export function SchoolIcon() {
  return (
    <IconWrap label="School">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconBase}>
        <path d="M3 9.5L12 4L21 9.5" />
        <path d="M5 11V18H8V13H16V18H19V11" />
        <rect x="10" y="15" width="4" height="3" />
      </svg>
    </IconWrap>
  );
}

export function BookIcon() {
  return (
    <IconWrap label="Open book">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconBase}>
        <path d="M12 6V21" />
        <path d="M4 4.5C4 4.5 8 3 12 6C16 3 20 4.5 20 4.5V19C20 19 16 17.5 12 20.5C8 17.5 4 19 4 19V4.5Z" />
        <path d="M4 4.5V19" />
        <path d="M20 4.5V19" />
      </svg>
    </IconWrap>
  );
}

export function GraduationIcon() {
  return (
    <IconWrap label="Graduation cap">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconBase}>
        <path d="M22 10L12 5L2 10L12 15L22 10Z" />
        <path d="M6 12.5V17C6 17 8.5 19 12 19C15.5 19 18 17 18 17V12.5" />
        <path d="M2 10V18" />
      </svg>
    </IconWrap>
  );
}

export function ShieldIcon() {
  return (
    <IconWrap label="Academic shield">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconBase}>
        <path d="M12 2L20 5V11C20 16.5 16.5 21 12 22C7.5 21 4 16.5 4 11V5L12 2Z" />
        <path d="M9 12L11 14L15 10" />
      </svg>
    </IconWrap>
  );
}

export function CyberShieldIcon() {
  return (
    <IconWrap label="Cyber Security">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={iconBase}>
        <rect x="4" y="4" width="16" height="12" rx="2" />
        <path d="M9 8H15" />
        <path d="M9 11H13" />
        <path d="M12 16V20" />
        <path d="M9 20H15" />
        <path d="M12 12V14" />
        <path d="M8 4V2" />
        <path d="M16 4V2" />
      </svg>
    </IconWrap>
  );
}
