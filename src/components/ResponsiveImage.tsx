import { useState } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
  width?: number;
  height?: number;
}

// Helper to get WebP version if available
const getWebPSrc = (src: string): string => {
  // If src already has format, return as is
  if (src.includes('.webp') || src.includes('.avif')) return src;
  // For placeholder images, return as is
  if (src.includes('placeholder') || src.includes('via.placeholder')) return src;
  // Otherwise, try to use WebP (browser will fallback if not supported)
  return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
};

export const ResponsiveImage = ({
  src,
  alt,
  className = '',
  lazy = true,
  width,
  height,
}: ResponsiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true });

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true); // Show original if WebP fails
  };

  const webpSrc = getWebPSrc(src);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {(!lazy || isVisible) && (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <motion.img
            src={hasError ? src : webpSrc}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            width={width}
            height={height}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
            loading={lazy ? 'lazy' : 'eager'}
            decoding="async"
            style={{ willChange: 'opacity, transform' }}
          />
        </picture>
      )}
    </div>
  );
};
