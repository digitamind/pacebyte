import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useMobile } from '../hooks/useMobile';
import { Link } from 'react-router-dom';
import { InteractiveButton } from './InteractiveButton';

interface ServiceCardProps {
  title: string;
  description: string;
  benefits?: string[];
  process?: string[];
  idealClient?: string;
  icon?: React.ReactNode;
  index?: number;
  category?: string;
}

export const ServiceCard = ({
  title,
  description,
  benefits,
  process,
  idealClient,
  icon,
  index = 0,
  category,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
      {category && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 text-xs font-semibold bg-accent-cyan/20 text-accent-cyan rounded-full border border-accent-cyan/30">
            {category}
          </span>
        </div>
      )}
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
          <p className="text-base text-gray-200 leading-relaxed mb-4">{description}</p>

          {/* Expandable Details */}
          {(benefits || process || idealClient) && (
            <div className="mt-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-accent-cyan hover:text-accent-purple font-medium flex items-center space-x-1 transition-colors"
              >
                <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                <motion.svg
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden mt-4 space-y-4"
                  >
                    {benefits && benefits.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-white mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-start">
                              <span className="text-accent-cyan mr-2">•</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {process && process.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-white mb-2">Our Process:</h4>
                        <ol className="space-y-1">
                          {process.map((step, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-start">
                              <span className="text-accent-cyan mr-2 font-bold">{idx + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {idealClient && (
                      <div>
                        <h4 className="text-sm font-bold text-white mb-2">Ideal For:</h4>
                        <p className="text-sm text-gray-300">{idealClient}</p>
                      </div>
                    )}

                    <div className="pt-2">
                      <Link to="/contact">
                        <InteractiveButton size="sm" variant="outline" className="w-full">
                          Get Started
                        </InteractiveButton>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
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
