import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export type TransitionDirection = 'forward' | 'backward' | 'initial';

interface PageTransitionProps {
  children: ReactNode;
  direction?: TransitionDirection;
}

// Route order for determining navigation direction
const routeOrder: Record<string, number> = {
  '/': 0,
  '/about': 1,
  '/services': 2,
  '/portfolio': 3,
  '/contact': 4,
  '/faq': 5,
};

const getRouteOrder = (path: string): number => {
  return routeOrder[path] ?? 999;
};

export const PageTransition = ({ children, direction = 'initial' }: PageTransitionProps) => {
  // Slide distance and blur amount
  const slideDistance = 40;
  const blurAmount = 10;

  // Define variants based on direction
  const variants = {
    initial: {
      opacity: 0,
      x: 0,
      filter: `blur(${blurAmount}px)`,
    },
    forward: {
      opacity: 0,
      x: slideDistance,
      filter: `blur(${blurAmount}px)`,
    },
    backward: {
      opacity: 0,
      x: -slideDistance,
      filter: `blur(${blurAmount}px)`,
    },
    animate: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
    },
    exitForward: {
      opacity: 0,
      x: -slideDistance,
      filter: `blur(${blurAmount}px)`,
    },
    exitBackward: {
      opacity: 0,
      x: slideDistance,
      filter: `blur(${blurAmount}px)`,
    },
  };

  // Determine initial and exit variants based on direction
  const getInitialVariant = () => {
    if (direction === 'forward') return 'forward';
    if (direction === 'backward') return 'backward';
    return 'initial';
  };

  const getExitVariant = () => {
    if (direction === 'forward') return 'exitForward';
    if (direction === 'backward') return 'exitBackward';
    return 'initial';
  };

  return (
    <motion.div
      initial={getInitialVariant()}
      animate="animate"
      exit={getExitVariant()}
      variants={variants}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier
        filter: {
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      style={{
        willChange: 'transform, opacity, filter',
      }}
    >
      {children}
    </motion.div>
  );
};

// Helper function to determine navigation direction
export const getTransitionDirection = (
  currentPath: string,
  previousPath: string | null
): TransitionDirection => {
  if (!previousPath) return 'initial';

  const currentOrder = getRouteOrder(currentPath);
  const previousOrder = getRouteOrder(previousPath);

  if (currentOrder > previousOrder) return 'forward';
  if (currentOrder < previousOrder) return 'backward';
  return 'initial';
};
