/**
 * Accent colour names for zydhh.hadi.
 *
 * Every token maps to a palette colour in `src/styles/main.css`. Only tokens
 * that clear 4.5:1 against the golden-black background in *both* directions
 * are listed here — they are used for text and for fills that carry the
 * golden-black text colour.
 */
export type AccentToken =
  | "red"
  | "red-bright"
  | "ember"
  | "rust"
  | "copper"
  | "gold"
  | "gold-bright"
  | "gold-deep";

/**
 * Resolves an accent token to concrete Tailwind utility classes.
 *
 * The class strings are written out in full here on purpose — Tailwind scans
 * source files for literal class names, so anything assembled at runtime
 * (`text-${accent}`) would never be generated. Keep the values literal.
 */
export const accent = {
  text: {
    red: "text-red",
    "red-bright": "text-red-bright",
    ember: "text-ember",
    rust: "text-rust",
    copper: "text-copper",
    gold: "text-gold",
    "gold-bright": "text-gold-bright",
    "gold-deep": "text-gold-deep",
  } as Record<AccentToken, string>,
  /** Fill for an element that reacts to its own hover state. */
  fill: {
    red: "hover:bg-red",
    "red-bright": "hover:bg-red-bright",
    ember: "hover:bg-ember",
    rust: "hover:bg-rust",
    copper: "hover:bg-copper",
    gold: "hover:bg-gold",
    "gold-bright": "hover:bg-gold-bright",
    "gold-deep": "hover:bg-gold-deep",
  } as Record<AccentToken, string>,
  /** Fill for an element inside a `group` that reacts to the group's hover. */
  groupFill: {
    red: "group-hover:bg-red",
    "red-bright": "group-hover:bg-red-bright",
    ember: "group-hover:bg-ember",
    rust: "group-hover:bg-rust",
    copper: "group-hover:bg-copper",
    gold: "group-hover:bg-gold",
    "gold-bright": "group-hover:bg-gold-bright",
    "gold-deep": "group-hover:bg-gold-deep",
  } as Record<AccentToken, string>,
  /** Low-emphasis variant for ordinals and secondary labels. */
  dim: {
    red: "text-red/60",
    "red-bright": "text-red-bright/60",
    ember: "text-ember/60",
    rust: "text-rust/60",
    copper: "text-copper/60",
    gold: "text-gold/60",
    "gold-bright": "text-gold-bright/60",
    "gold-deep": "text-gold-deep/60",
  } as Record<AccentToken, string>,
};
