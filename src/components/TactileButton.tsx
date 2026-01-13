import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ReactNode, useRef, useState, useEffect } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

interface TactileButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'jelly' | 'clay' | 'chrome';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
}

export const TactileButton = ({
  children,
  onClick,
  variant = 'jelly',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  isLoading = false,
}: TactileButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const mouseXSpring = useSpring(useMotionValue(0), { stiffness: 500, damping: 30 });
  const mouseYSpring = useSpring(useMotionValue(0), { stiffness: 500, damping: 30 });

  useEffect(() => {
    if (!ref.current || !isHovered) {
      mouseXSpring.set(0);
      mouseYSpring.set(0);
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (mouseX - centerX) * 0.1;
    const deltaY = (mouseY - centerY) * 0.1;

    mouseXSpring.set(deltaX);
    mouseYSpring.set(deltaY);
  }, [mouseX, mouseY, isHovered, mouseXSpring, mouseYSpring]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading) return;

    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { id: Date.now(), x, y };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== newRipple.id)), 600);
    }

    onClick?.();
  };

  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-surface disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';

  const variantStyles = {
    jelly: 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white hover:from-accent-purple hover:to-accent-cyan focus:ring-accent-cyan shadow-lg hover:shadow-xl glow-cyan',
    clay: 'bg-gradient-to-br from-dark-elevated to-dark-surface text-white border border-accent-cyan/30 hover:border-accent-cyan/50 focus:ring-accent-cyan shadow-lg hover:shadow-xl',
    chrome: 'bg-gradient-to-br from-gray-700 to-gray-800 text-white border border-gray-600 hover:border-gray-500 focus:ring-gray-500 shadow-lg hover:shadow-xl',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={handleClick}
      disabled={disabled || isLoading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      style={{
        x: isHovered ? mouseXSpring : 0,
        y: isHovered ? mouseYSpring : 0,
      }}
      whileHover={{
        scale: disabled || isLoading ? 1 : 1.05,
        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
      }}
      whileTap={{
        scale: disabled || isLoading ? 1 : 0.92,
        transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            x: '-50%',
            y: '-50%',
          }}
          initial={{ width: 0, height: 0, opacity: 0.6 }}
          animate={{ width: 200, height: 200, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      ))}

      {/* Content */}
      <span className="relative z-10">
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </span>
    </motion.button>
  );
};
