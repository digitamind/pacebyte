import { motion } from 'framer-motion';

interface GradientMeshProps {
  intensity?: 'normal' | 'strong';
  className?: string;
}

export const GradientMesh = ({ intensity = 'normal', className = '' }: GradientMeshProps) => {
  const gradientClass = intensity === 'strong' ? 'bg-gradient-mesh-strong' : 'bg-gradient-mesh';

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className={`absolute inset-0 ${gradientClass}`}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-accent-cyan opacity-20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple opacity-20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent-green opacity-15 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};
