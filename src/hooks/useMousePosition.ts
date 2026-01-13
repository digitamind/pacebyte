import { useState, useEffect, useRef, useCallback } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

/**
 * Optimized mouse position hook with throttling to reduce re-renders.
 * Uses requestAnimationFrame for smooth 60fps updates while preventing excessive state updates.
 */
export const useMousePosition = (throttleMs: number = 16) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const lastUpdateRef = useRef<number>(0);
  const positionRef = useRef<MousePosition>({ x: 0, y: 0 });

  const updatePosition = useCallback(() => {
    setMousePosition({ ...positionRef.current });
    rafRef.current = null;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };

      const now = Date.now();
      if (now - lastUpdateRef.current >= throttleMs) {
        lastUpdateRef.current = now;
        if (rafRef.current === null) {
          rafRef.current = requestAnimationFrame(updatePosition);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [throttleMs, updatePosition]);

  return mousePosition;
};
