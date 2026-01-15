import { motion, useMotionValue, animate, PanInfo } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { TestimonialCard } from './TestimonialCard';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const TestimonialCarousel = ({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) => {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [itemWidth, setItemWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(testimonials.length); // Start in middle section
  const [isDragging, setIsDragging] = useState(false);
  const [autoPlayProgress, setAutoPlayProgress] = useState(0);
  const autoPlayRef = useRef<number | null>(null);
  const progressIntervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const isAnimating = useRef(false);
  const lastSlideTimeRef = useRef<number>(Date.now());

  // Calculate items per view based on screen size (minimum 3 on desktop)
  useEffect(() => {
    const calculateItemsPerView = () => {
      if (typeof window === 'undefined') return 3;
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    };

    const updateDimensions = () => {
      const newItemsPerView = calculateItemsPerView();
      setItemsPerView(newItemsPerView);
      
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gap = 24; // 1.5rem = 24px
        const newItemWidth = (containerWidth - (gap * (newItemsPerView - 1))) / newItemsPerView;
        setItemWidth(newItemWidth);
      }
    };

    updateDimensions();

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create infinite loop by tripling the testimonials array
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const totalItems = testimonials.length;
  const gap = 24; // 1.5rem = 24px

  const slideToIndex = useCallback((index: number, immediate = false) => {
    if (isAnimating.current && !immediate || itemWidth === 0) return;
    
    // Normalize index to stay within the middle section (totalItems to totalItems * 2 - 1)
    let normalizedIndex = index;
    
    if (index >= totalItems * 2) {
      // Past the end, wrap to middle section
      normalizedIndex = index - totalItems;
    } else if (index < totalItems) {
      // Before the start, wrap to middle section
      normalizedIndex = index + totalItems;
    }
    
    // If we need to wrap, do it immediately without animation
    if (normalizedIndex !== index && !immediate) {
      const currentX = x.get();
      const offset = (normalizedIndex - index) * (itemWidth + gap);
      x.set(currentX + offset);
      setCurrentIndex(normalizedIndex);
      index = normalizedIndex;
    }
    
    isAnimating.current = true;
    const targetX = -(index * (itemWidth + gap));
    
    if (immediate) {
      x.set(targetX);
      isAnimating.current = false;
    } else {
      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    }
    
    setCurrentIndex(index);
  }, [x, itemWidth, gap, totalItems]);

  const nextSlide = useCallback(() => {
    slideToIndex(currentIndex + 1);
    setAutoPlayProgress(0);
    lastSlideTimeRef.current = Date.now();
  }, [currentIndex, slideToIndex]);

  const prevSlide = useCallback(() => {
    slideToIndex(currentIndex - 1);
    setAutoPlayProgress(0);
    lastSlideTimeRef.current = Date.now();
  }, [currentIndex, slideToIndex]);

  // Initialize position when dimensions change
  useEffect(() => {
    if (containerRef.current && itemWidth > 0) {
      const targetX = -(currentIndex * (itemWidth + gap));
      x.set(targetX);
    }
  }, [itemsPerView, itemWidth, x, gap, currentIndex]);

  // Progress tracking
  useEffect(() => {
    if (progressIntervalRef.current !== null) {
      clearInterval(progressIntervalRef.current);
    }
    if (autoPlay && !isDragging) {
      progressIntervalRef.current = window.setInterval(() => {
        const elapsed = Date.now() - lastSlideTimeRef.current;
        const progress = Math.min(elapsed / autoPlayInterval, 1);
        setAutoPlayProgress(progress);
      }, 100); // Update every 100ms for smooth animation
    }
    return () => {
      if (progressIntervalRef.current !== null) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, isDragging]);

  // Auto-play
  useEffect(() => {
    if (autoPlayRef.current !== null) {
      clearInterval(autoPlayRef.current);
    }
    if (autoPlay && !isDragging) {
      autoPlayRef.current = window.setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
      lastSlideTimeRef.current = Date.now();
      setAutoPlayProgress(0);
    }
    return () => {
      if (autoPlayRef.current !== null) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, nextSlide, isDragging]);

  const handleDragStart = () => {
    setIsDragging(true);
    if (autoPlayRef.current !== null) {
      clearInterval(autoPlayRef.current);
    }
    if (progressIntervalRef.current !== null) {
      clearInterval(progressIntervalRef.current);
    }
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    
    if (itemWidth === 0) return;
    
    const swipeThreshold = 50;
    const velocityThreshold = 500;
    
    if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.velocity.x) > velocityThreshold) {
      if (info.offset.x > 0 || info.velocity.x > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    } else {
      // Snap back to current position
      const currentX = x.get();
      const targetIndex = Math.round(-currentX / (itemWidth + gap));
      slideToIndex(Math.max(0, Math.min(infiniteTestimonials.length - itemsPerView, targetIndex)));
      setAutoPlayProgress(0);
      lastSlideTimeRef.current = Date.now();
    }
  };

  const pauseAutoPlay = useCallback(() => {
    if (autoPlayRef.current !== null) {
      clearInterval(autoPlayRef.current);
    }
    if (progressIntervalRef.current !== null) {
      clearInterval(progressIntervalRef.current);
    }
  }, []);

  const resumeAutoPlay = useCallback(() => {
    if (autoPlay && !isDragging) {
      autoPlayRef.current = window.setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
      lastSlideTimeRef.current = Date.now();
      setAutoPlayProgress(0);
      
      progressIntervalRef.current = window.setInterval(() => {
        const elapsed = Date.now() - lastSlideTimeRef.current;
        const progress = Math.min(elapsed / autoPlayInterval, 1);
        setAutoPlayProgress(progress);
      }, 100);
    }
  }, [autoPlay, autoPlayInterval, nextSlide, isDragging]);

  // Calculate current page for indicators
  const actualIndex = currentIndex % totalItems;
  const totalPages = Math.ceil(totalItems / itemsPerView);
  const currentPage = Math.floor(actualIndex / itemsPerView);

  // Calculate which testimonials are currently visible
  const getVisibleIndices = () => {
    const visibleIndices: Set<number> = new Set();
    for (let i = 0; i < itemsPerView; i++) {
      const index = currentIndex + i;
      if (index < infiniteTestimonials.length) {
        visibleIndices.add(index);
      }
    }
    return visibleIndices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div 
      className="relative w-full"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {/* Carousel Container */}
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
          {infiniteTestimonials.map((testimonial, index) => {
            const isVisible = visibleIndices.has(index);
            const isActive = isVisible && index === currentIndex;
            const progress = isActive && autoPlay ? autoPlayProgress : 0;

            return (
              <motion.div
                key={`testimonial-${index}`}
                className="flex-shrink-0"
                style={{
                  width: `${itemWidth}px`,
                }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  index={index}
                  progress={progress}
                  isActive={isActive}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      {totalPages > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-dark-elevated hover:bg-dark-surface rounded-full p-3 shadow-lg border border-dark-border hover:border-accent-cyan/50 transition-all group"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-300 group-hover:text-accent-cyan transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-dark-elevated hover:bg-dark-surface rounded-full p-3 shadow-lg border border-dark-border hover:border-accent-cyan/50 transition-all group"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-gray-300 group-hover:text-accent-cyan transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => {
            const isActive = currentPage === index;

            return (
              <button
                key={index}
                onClick={() => {
                  const targetIndex = index * itemsPerView + totalItems;
                  slideToIndex(targetIndex);
                }}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-8 h-2 bg-gradient-to-r from-accent-cyan to-accent-purple'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
