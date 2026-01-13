import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ClientLogoProps {
  name: string;
  logo?: ReactNode;
  index?: number;
  category?: 'fintech' | 'enterprise' | 'retail' | 'healthcare' | 'tech' | 'consulting';
}

export const ClientLogo = ({ name, logo, index = 0, category = 'tech' }: ClientLogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all grayscale hover:grayscale-0 opacity-70 hover:opacity-100 border border-gray-100 hover:border-primary-200"
    >
      {logo ? (
        <div className="w-full h-16 flex items-center justify-center">{logo}</div>
      ) : (
        <div className="flex flex-col items-center">
          <div className={`w-12 h-12 rounded-lg mb-2 flex items-center justify-center ${
            category === 'fintech' ? 'bg-blue-100' :
            category === 'enterprise' ? 'bg-purple-100' :
            category === 'retail' ? 'bg-green-100' :
            category === 'healthcare' ? 'bg-red-100' :
            category === 'consulting' ? 'bg-yellow-100' :
            'bg-gray-100'
          }`}>
            <span className="text-2xl font-bold text-gray-700">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="text-xs text-gray-500 font-medium text-center">{name}</span>
        </div>
      )}
    </motion.div>
  );
};
