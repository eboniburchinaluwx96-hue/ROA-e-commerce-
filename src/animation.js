export const fadeUp = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 100,
    y: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: "easeInOut" },
  },
};

export const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5, delayChildren: 0.9 } },
};
