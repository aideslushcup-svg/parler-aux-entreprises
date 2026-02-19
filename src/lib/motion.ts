/**
 * Returns motion props for whileInView animations.
 * On mobile (< 768px): elements start visible, no animation.
 * On desktop: fade-in-up effect as element scrolls into view.
 */
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

export function fadeInUp(delay = 0) {
  if (isMobile) return {};
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export function fadeInUp30(delay = 0) {
  if (isMobile) return {};
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}
