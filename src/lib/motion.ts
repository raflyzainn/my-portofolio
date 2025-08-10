import type { Variants } from "framer-motion";

export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: EASE_OUT },
  },
});

export const stagger = (
  staggerChildren = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren, delayChildren },
  },
});

export const pop: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 6 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};
