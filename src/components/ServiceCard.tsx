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
        className="bg-dark-elevated rounded-2xl shadow-xl p-8 h-full transition-all duration-300 border border-dark-border hover:border-accent-cyan/50 relative overflow-hidden group"
        whileHover={!isMobile ? { 
          y: -8, 
          scale: 1.02,
          transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
        } : {}}
        whileTap={{ scale: 0.96 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Magnetic hover effect background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          initial={false}
        />
        <div className="relative z-10">
          {icon && (
            <motion.div
              className="mb-4 text-accent-cyan text-4xl"
              animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {icon}
            </motion.div>
          )}

          <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-accent-cyan transition-colors duration-300">{title}</h3>
          <p className="text-base text-gray-200 leading-relaxed">{description}</p>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-b-xl"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};
