import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });

  const variants = {
    up: {
      initial: { opacity: 0, y: 60, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
    },
    down: {
      initial: { opacity: 0, y: -60, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 },
    },
    left: {
      initial: { opacity: 0, x: -60, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
    },
    right: {
      initial: { opacity: 0, x: 60, scale: 0.95 },
      animate: { opacity: 1, x: 0, scale: 1 },
    },
    fade: {
      initial: { opacity: 0, scale: 0.98 },
      animate: { opacity: 1, scale: 1 },
    },
  };

  const variant = variants[direction];

  return (
    <motion.div
      ref={ref}
      initial={variant.initial}
      animate={isVisible ? variant.animate : variant.initial}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smoother animation
        scale: { duration: 0.6 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
