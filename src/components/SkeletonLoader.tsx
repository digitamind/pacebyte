import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string;
  height?: string;
}

export const SkeletonLoader = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
}: SkeletonLoaderProps) => {
  const baseStyles = 'bg-dark-elevated rounded-lg';
  
  const variantStyles = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const style = {
    width: width || (variant === 'circular' ? '100%' : '100%'),
    height: height || (variant === 'circular' ? '100%' : '1rem'),
    aspectRatio: variant === 'circular' ? '1 / 1' : undefined,
  };

  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
      animate={{
        background: [
          'linear-gradient(90deg, rgba(26, 26, 36, 1) 0%, rgba(37, 37, 48, 1) 50%, rgba(26, 26, 36, 1) 100%)',
          'linear-gradient(90deg, rgba(26, 26, 36, 1) 0%, rgba(0, 212, 255, 0.1) 50%, rgba(26, 26, 36, 1) 100%)',
          'linear-gradient(90deg, rgba(26, 26, 36, 1) 0%, rgba(37, 37, 48, 1) 50%, rgba(26, 26, 36, 1) 100%)',
        ],
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};
