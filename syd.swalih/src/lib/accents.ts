import type { AccentToken } from "@/data/profile";

/**
 * Resolves an accent token to concrete Tailwind utility classes.
 *
 * The class strings are written out in full here on purpose — Tailwind scans
 * source files for literal class names, so anything assembled at runtime
 * (`text-${accent}`) would never be generated. Keep the values literal.
 */
export const accent = {
  text: {
    brass: "text-brass",
    copper: "text-copper",
    amber: "text-amber",
    rust: "text-rust",
    sand: "text-sand",
    cyan: "text-cyan",
    steel: "text-steel",
    teal: "text-teal",
    sage: "text-sage",
    slate: "text-slate",
  } as Record<AccentToken, string>,
  /** Fill for an element that reacts to its own hover state. */
  fill: {
    brass: "hover:bg-brass",
    copper: "hover:bg-copper",
    amber: "hover:bg-amber",
    rust: "hover:bg-rust",
    sand: "hover:bg-sand",
    cyan: "hover:bg-cyan",
    steel: "hover:bg-steel",
    teal: "hover:bg-teal",
    sage: "hover:bg-sage",
    slate: "hover:bg-slate",
  } as Record<AccentToken, string>,
  /** Fill for an element inside a `group` that reacts to the group's hover. */
  groupFill: {
    brass: "group-hover:bg-brass",
    copper: "group-hover:bg-copper",
    amber: "group-hover:bg-amber",
    rust: "group-hover:bg-rust",
    sand: "group-hover:bg-sand",
    cyan: "group-hover:bg-cyan",
    steel: "group-hover:bg-steel",
    teal: "group-hover:bg-teal",
    sage: "group-hover:bg-sage",
    slate: "group-hover:bg-slate",
  } as Record<AccentToken, string>,
  /** Low-emphasis variant for ordinals and secondary labels. */
  dim: {
    brass: "text-brass/60",
    copper: "text-copper/60",
    amber: "text-amber/60",
    rust: "text-rust/60",
    sand: "text-sand/60",
    cyan: "text-cyan/60",
    steel: "text-steel/60",
    teal: "text-teal/60",
    sage: "text-sage/60",
    slate: "text-slate/60",
  } as Record<AccentToken, string>,
};
