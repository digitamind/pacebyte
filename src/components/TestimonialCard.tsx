import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  index?: number;
  progress?: number;
  isActive?: boolean;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  progress = 0,
  isActive = false,
}: TestimonialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    setDisplayProgress(progress);
  }, [progress]);

  return (
    <motion.div
      className="bg-dark-elevated rounded-2xl shadow-xl p-8 h-full flex flex-col border border-dark-border relative overflow-hidden group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        rotateX: 2,
        rotateY: -2,
        transition: {
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 opacity-0 rounded-2xl pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? '0 0 30px rgba(0, 212, 255, 0.3), 0 0 60px rgba(168, 85, 247, 0.2), inset 0 0 0 1px rgba(0, 212, 255, 0.5)'
            : 'none',
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 flex-1 mb-6">
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            color: isHovered ? 'rgba(0, 212, 255, 0.6)' : 'rgba(0, 212, 255, 0.3)',
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-12 h-12 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </motion.div>
        <motion.p
          className="text-gray-200 text-lg leading-relaxed italic"
          animate={{
            color: isHovered ? 'rgba(229, 231, 235, 1)' : 'rgba(229, 231, 235, 0.9)',
          }}
          transition={{ duration: 0.3 }}
        >
          "{quote}"
        </motion.p>
      </div>

      <div className="relative z-10 border-t border-dark-border pt-6">
        <motion.p
          className="font-bold text-base text-white"
          animate={{
            color: isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.95)',
          }}
          transition={{ duration: 0.3 }}
        >
          {author}
        </motion.p>
        <p className="text-sm text-gray-300 mt-1">
          {role}
          {company && `, ${company}`}
        </p>
      </div>

      {/* Progress indicator */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark-border rounded-b-2xl overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-cyan to-accent-purple"
            initial={{ width: 0 }}
            animate={{ width: `${displayProgress * 100}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
          />
        </div>
      )}
    </motion.div>
  );
};
