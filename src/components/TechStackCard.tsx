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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-primary-200"
    >
      <div className="flex flex-col items-center text-center">
        {icon && (
          <div className="w-16 h-16 mb-4 flex items-center justify-center text-4xl">
            {icon}
          </div>
        )}
        <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
        <span className="text-sm text-gray-500">{category}</span>
      </div>
    </motion.div>
  );
};
