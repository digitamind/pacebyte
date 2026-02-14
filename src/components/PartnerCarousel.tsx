import { motion, useMotionValue } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';

interface Partner {
  name: string;
  logo: string;
  category?: string;
  url?: string;
}

interface PartnerCarouselProps {
  partners: Partner[];
  autoPlay?: boolean;
  speed?: number; // pixels per second
}

export const PartnerCarousel = ({
  partners,
  autoPlay = true,
  speed = 50, // Default: 50 pixels per second
}: PartnerCarouselProps) => {
  const [itemWidth, setItemWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(Date.now());
  const isPausedRef = useRef(false);

  // Calculate item width based on screen size
  useEffect(() => {
    const calculateItemsPerView = () => {
      if (typeof window === 'undefined') return 5;
      if (window.innerWidth >= 1024) return 5; // Desktop: 5 partners
      if (window.innerWidth >= 768) return 4;  // Tablet: 4 partners
      return 2; // Mobile: 2 partners
    };

    const updateDimensions = () => {
      const itemsPerView = calculateItemsPerView();
      
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gap = 24; // 1.5rem = 24px
        const newItemWidth = (containerWidth - (gap * (itemsPerView - 1))) / itemsPerView;
        setItemWidth(newItemWidth);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Create infinite loop by tripling the partners array
  const infinitePartners = [...partners, ...partners, ...partners];
  const totalItems = partners.length;
  const gap = 24;
  const itemWidthWithGap = itemWidth + gap;
  const totalWidth = totalItems * itemWidthWithGap;
  const middleSectionStart = totalItems * itemWidthWithGap;
  const middleSectionEnd = totalItems * 2 * itemWidthWithGap;

  // Continuous scroll animation
  const startContinuousScroll = useCallback(() => {
    if (!autoPlay || isDragging || itemWidth === 0) return;

    const animate = () => {
      if (isPausedRef.current || isDragging) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const now = Date.now();
      const deltaTime = (now - lastTimeRef.current) / 1000; // Convert to seconds
      lastTimeRef.current = now;

      const currentX = x.get();
      const newX = currentX - (speed * deltaTime); // Move left (negative x = scroll right)

      // Check if we've scrolled past the end of the middle section
      const absoluteX = Math.abs(newX);
      if (absoluteX >= middleSectionEnd) {
        // Reset to beginning of middle section seamlessly
        const offset = totalWidth;
        x.set(newX + offset);
      } else {
        x.set(newX);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    lastTimeRef.current = Date.now();
    animationRef.current = requestAnimationFrame(animate);
  }, [autoPlay, isDragging, itemWidth, speed, x, totalWidth, middleSectionEnd]);

  const stopContinuousScroll = useCallback(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  // Initialize position to middle section
  useEffect(() => {
    if (itemWidth > 0) {
      x.set(-middleSectionStart);
    }
  }, [itemWidth, x, middleSectionStart]);

  // Start/stop continuous scroll
  useEffect(() => {
    if (autoPlay && !isDragging && itemWidth > 0) {
      startContinuousScroll();
    } else {
      stopContinuousScroll();
    }
    return () => stopContinuousScroll();
  }, [autoPlay, isDragging, itemWidth, startContinuousScroll, stopContinuousScroll]);

  const handleDragStart = () => {
    setIsDragging(true);
    isPausedRef.current = true;
    stopContinuousScroll();
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent) => {
    setIsDragging(false);
    isPausedRef.current = false;
    
    // After drag, resume continuous scroll
    if (autoPlay && itemWidth > 0) {
      // Reset position if needed after drag
      const currentX = x.get();
      const absoluteX = Math.abs(currentX);
      
      if (absoluteX >= middleSectionEnd) {
        const offset = totalWidth;
        x.set(currentX + offset);
      } else if (absoluteX < middleSectionStart) {
        const offset = totalWidth;
        x.set(currentX - offset);
      }
      
      startContinuousScroll();
    }
  };

  const pauseAutoPlay = () => {
    isPausedRef.current = true;
  };

  const resumeAutoPlay = () => {
    if (autoPlay && !isDragging) {
      isPausedRef.current = false;
      lastTimeRef.current = Date.now();
    }
  };

  return (
    <div 
      className="relative w-full"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div 
        ref={containerRef}
        className="relative overflow-hidden"
      >
        <motion.div
          className="flex"
          style={{
            x,
            gap: `${gap}px`,
          }}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0.2}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          {infinitePartners.map((partner, index) => {
            const cardContent = (
              <motion.div
                key={`partner-${index}`}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group bg-dark-elevated rounded-xl p-6 border border-dark-border hover:border-accent-cyan/50 transition-all text-center flex flex-col items-center justify-center h-full"
              >
                {partner.url ? (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline w-full h-full flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl mb-3 bg-white/5 group-hover:bg-white transition-colors duration-300 p-2">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-sm md:text-base font-semibold text-white">{partner.name}</h3>
                    {partner.category && (
                      <span className="text-xs text-gray-400 mt-1">{partner.category}</span>
                    )}
                  </a>
                ) : (
                  <>
                    <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl mb-3 bg-white/5 group-hover:bg-white transition-colors duration-300 p-2">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-sm md:text-base font-semibold text-white">{partner.name}</h3>
                    {partner.category && (
                      <span className="text-xs text-gray-400 mt-1">{partner.category}</span>
                    )}
                  </>
                )}
              </motion.div>
            );

            return (
              <motion.div
                key={`partner-wrapper-${index}`}
                className="flex-shrink-0"
                style={{
                  width: `${itemWidth}px`,
                }}
              >
                {cardContent}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
