import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: '1x1' | '2x1' | '1x2' | '2x2';
  index?: number;
  delay?: number;
}

const spanClasses = {
  '1x1': 'col-span-1 row-span-1',
  '2x1': 'col-span-1 md:col-span-2 row-span-1',
  '1x2': 'col-span-1 row-span-1 md:row-span-2',
  '2x2': 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
};

export const BentoCard = ({
  children,
  className = '',
  span = '1x1',
  index = 0,
  delay = 0,
}: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: delay + index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
      className={`${spanClasses[span]} ${className}`}
    >
      <div className="h-full bg-dark-elevated rounded-3xl p-6 md:p-8 border border-dark-border hover:border-accent-cyan/30 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group">
        {/* Subtle gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        <div className="relative z-10 h-full flex flex-col">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
