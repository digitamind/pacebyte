import { motion } from 'framer-motion';
import { useState } from 'react';
import { useMobile } from '../hooks/useMobile';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  index?: number;
}

export const ServiceCard = ({
  title,
  description,
  icon,
  index = 0,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
        scale: { duration: 0.5 }
      }}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTap={() => isMobile && setIsHovered(!isHovered)}
      className="relative group"
    >
      <motion.div
        className="bg-white rounded-xl shadow-lg p-6 h-full transition-all duration-300 border border-gray-100 hover:border-primary-200"
        whileHover={!isMobile ? { 
          y: -12, 
          scale: 1.03,
          transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
        } : {}}
        whileTap={{ scale: 0.98 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {icon && (
          <motion.div
            className="mb-4 text-primary-600"
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-b-xl"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};
