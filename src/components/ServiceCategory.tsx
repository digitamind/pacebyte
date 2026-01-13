import { motion, AnimatePresence } from 'framer-motion';
import { useState, ReactNode } from 'react';

interface ServiceCategoryProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  isHighlighted?: boolean;
  defaultOpen?: boolean;
  index?: number;
  id?: string;
}

export const ServiceCategory = ({
  title,
  icon,
  children,
  isHighlighted = false,
  defaultOpen = false,
  index = 0,
  id,
}: ServiceCategoryProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-dark-elevated rounded-2xl border ${
        isHighlighted
          ? 'border-accent-cyan/50 shadow-lg shadow-accent-cyan/10'
          : 'border-dark-border'
      } overflow-hidden scroll-mt-24`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full px-6 py-5 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-dark-surface transition-colors hover:bg-dark-surface/50"
      >
        <div className="flex items-center space-x-4">
          {icon && <div className="text-2xl">{icon}</div>}
          <h3 className="text-xl font-extrabold text-white">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg
            className="w-6 h-6 text-accent-cyan"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 py-6 border-t border-dark-border">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
