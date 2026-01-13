import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

interface KineticTextProps {
  children: string;
  className?: string;
  intensity?: number;
  enableCursor?: boolean;
}

/**
 * KineticText (safe): applies subtle 3D tilt to the whole line of text.
 * Avoids per-word scaling to prevent overlap / layout shifts.
 */
export const KineticText = ({
  children,
  className = '',
  intensity = 0.35,
  enableCursor = true,
}: KineticTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { x: mouseX, y: mouseY } = useMousePosition();

  const mouseXSpring = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });
  const mouseYSpring = useSpring(useMotionValue(0), { stiffness: 160, damping: 18 });

  useEffect(() => {
    if (!ref.current || !enableCursor) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (mouseX - centerX) * intensity * 0.01;
    const deltaY = (mouseY - centerY) * intensity * 0.01;

    mouseXSpring.set(deltaX);
    mouseYSpring.set(deltaY);
  }, [mouseX, mouseY, intensity, enableCursor, mouseXSpring, mouseYSpring]);

  const rotateX = useTransform(mouseYSpring, [-30, 30], [4, -4]);
  const rotateY = useTransform(mouseXSpring, [-30, 30], [-4, 4]);

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        rotateX: enableCursor ? rotateX : 0,
        rotateY: enableCursor ? rotateY : 0,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {children}
    </motion.span>
  );
};
