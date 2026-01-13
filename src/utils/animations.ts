// Enhanced easing functions for smoother animations
export const smoothEase = [0.25, 0.1, 0.25, 1]; // Custom cubic-bezier
export const springEase = { type: 'spring', stiffness: 100, damping: 15 };
export const smoothOut = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };
export const quickOut = { duration: 0.4, ease: [0.16, 1, 0.3, 1] };

export const fadeInUp = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { ...smoothOut },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { ...smoothOut },
};

export const scaleIn = {
  initial: { scale: 0.85, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { ...quickOut },
};

export const slideInLeft = {
  initial: { x: -60, opacity: 0, scale: 0.95 },
  animate: { x: 0, opacity: 1, scale: 1 },
  transition: { ...smoothOut },
};

export const slideInRight = {
  initial: { x: 60, opacity: 0, scale: 0.95 },
  animate: { x: 0, opacity: 1, scale: 1 },
  transition: { ...smoothOut },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const getStaggerDelay = (index: number, delay: number = 0.08) => ({
  transition: { delay: index * delay, ...smoothOut },
});

// Text reveal animation
export const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

// Image reveal with blur effect
export const imageReveal = {
  initial: { opacity: 0, scale: 1.1, filter: 'blur(10px)' },
  animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

// Card hover animation
export const cardHover = {
  whileHover: { 
    y: -8, 
    scale: 1.02,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  },
  whileTap: { scale: 0.98 },
};
