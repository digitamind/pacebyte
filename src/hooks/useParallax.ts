import { useEffect, useRef } from 'react';
import { useMobile } from './useMobile';

export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  useEffect(() => {
    if (isMobile) return; // Disable parallax on mobile for performance

    const handleScroll = () => {
      if (!elementRef.current) return;
      const scrolled = window.pageYOffset;
      elementRef.current.style.transform = `translateY(${scrolled * speed}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, isMobile]);

  return elementRef;
};
