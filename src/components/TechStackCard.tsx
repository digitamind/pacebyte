import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TechStackCardProps {
  name: string;
  category: string;
  icon?: ReactNode;
  index?: number;
}

export const TechStackCard = ({
  name,
  category,
  icon,
  index = 0,
}: TechStackCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ 
        duration: 0.2, 
        delay: index * 0.02,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="bg-dark-elevated rounded-xl p-4 hover:bg-dark-surface border border-dark-border hover:border-accent-cyan/30 transition-colors duration-200 hover:shadow-lg hover:shadow-accent-cyan/10"
    >
      <div className="flex flex-col items-center text-center">
        {icon && (
          <div className="w-12 h-12 mb-3 flex items-center justify-center text-3xl">
            {icon}
          </div>
        )}
        <h3 className="font-semibold text-white mb-1 text-sm">{name}</h3>
        <span className="text-xs text-gray-400">{category}</span>
      </div>
    </motion.div>
  );
};
