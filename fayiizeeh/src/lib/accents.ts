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
    gold: "text-gold",
    bronze: "text-bronze",
    amber: "text-amber",
    ember: "text-ember",
    sun: "text-sun",
    lime: "text-lime",
    "lime-pale": "text-lime-pale",
    olive: "text-olive",
    moss: "text-moss",
    forest: "text-forest",
  } as Record<AccentToken, string>,
  /** Fill for an element that reacts to its own hover state. */
  fill: {
    gold: "hover:bg-gold",
    bronze: "hover:bg-bronze",
    amber: "hover:bg-amber",
    ember: "hover:bg-ember",
    sun: "hover:bg-sun",
    lime: "hover:bg-lime",
    "lime-pale": "hover:bg-lime-pale",
    olive: "hover:bg-olive",
    moss: "hover:bg-moss",
    forest: "hover:bg-forest",
  } as Record<AccentToken, string>,
  /** Fill for an element inside a `group` that reacts to the group's hover. */
  groupFill: {
    gold: "group-hover:bg-gold",
    bronze: "group-hover:bg-bronze",
    amber: "group-hover:bg-amber",
    ember: "group-hover:bg-ember",
    sun: "group-hover:bg-sun",
    lime: "group-hover:bg-lime",
    "lime-pale": "group-hover:bg-lime-pale",
    olive: "group-hover:bg-olive",
    moss: "group-hover:bg-moss",
    forest: "group-hover:bg-forest",
  } as Record<AccentToken, string>,
  /** Low-emphasis variant for ordinals and secondary labels. */
  dim: {
    gold: "text-gold/60",
    bronze: "text-bronze/60",
    amber: "text-amber/60",
    ember: "text-ember/60",
    sun: "text-sun/60",
    lime: "text-lime/60",
    "lime-pale": "text-lime-pale/60",
    olive: "text-olive/60",
    moss: "text-moss/60",
    forest: "text-forest/60",
  } as Record<AccentToken, string>,
};
