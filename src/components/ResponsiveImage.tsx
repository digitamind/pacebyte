import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
}

export const ResponsiveImage = ({
  src,
  alt,
  className = '',
  lazy = true,
}: ResponsiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {(!lazy || isVisible) && (
        <motion.img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
          loading={lazy ? 'lazy' : 'eager'}
        />
      )}
    </div>
  );
};
