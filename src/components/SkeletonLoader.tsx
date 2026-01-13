import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string;
  height?: string;
  count?: number;
}

export const SkeletonLoader = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  count = 1,
}: SkeletonLoaderProps) => {
  const baseStyles = 'bg-dark-elevated rounded-lg';
  
  const variantStyles = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-2xl',
  };

  const style = {
    width: width || (variant === 'circular' ? '100%' : variant === 'card' ? '100%' : '100%'),
    height: height || (variant === 'circular' ? '100%' : variant === 'card' ? '200px' : '1rem'),
    aspectRatio: variant === 'circular' ? '1 / 1' : undefined,
  };

  const skeleton = (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={style}
      animate={{
        background: [
          'linear-gradient(90deg, rgba(26, 26, 36, 1) 0%, rgba(37, 37, 48, 1) 50%, rgba(26, 26, 36, 1) 100%)',
          'linear-gradient(90deg, rgba(26, 26, 36, 1) 0%, rgba(0, 212, 255, 0.15) 50%, rgba(26, 26, 36, 1) 100%)',
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

  if (count > 1) {
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: count }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {skeleton}
          </motion.div>
        ))}
      </div>
    );
  }

  return skeleton;
};
