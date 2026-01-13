import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  parallax?: boolean;
  parallaxSpeed?: number;
}

export const ScrollSection = ({
  children,
  className = '',
  parallax = false,
  parallaxSpeed = 0.5,
}: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? [50 * parallaxSpeed, -50 * parallaxSpeed] : [0, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ y: parallax ? y : undefined, opacity, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
