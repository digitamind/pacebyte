import { useEffect, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: options.threshold || 0.1,
    rootMargin: options.rootMargin || '0px',
    triggerOnce: options.triggerOnce !== false,
  });

  return { ref, isVisible };
};
