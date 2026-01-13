import { useState, useEffect } from 'react';

export const useScrollDepth = () => {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const updateScrollDepth = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const depth = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollDepth(Math.min(100, Math.max(0, depth)));
    };

    window.addEventListener('scroll', updateScrollDepth, { passive: true });
    updateScrollDepth(); // Initial calculation
    return () => window.removeEventListener('scroll', updateScrollDepth);
  }, []);

  return scrollDepth;
};
