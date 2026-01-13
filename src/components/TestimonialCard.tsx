import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  index?: number;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  index = 0,
}: TestimonialCardProps) => {
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
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }}
      className="bg-dark-elevated rounded-2xl shadow-xl p-8 h-full flex flex-col hover:shadow-2xl transition-shadow border border-dark-border"
    >
      <div className="flex-1 mb-6">
        <svg
          className="w-12 h-12 text-accent-cyan/30 mb-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-200 text-lg leading-relaxed italic">"{quote}"</p>
      </div>
      <div className="border-t border-dark-border pt-6">
        <p className="font-bold text-base text-white">{author}</p>
        <p className="text-sm text-gray-300 mt-1">
          {role}
          {company && `, ${company}`}
        </p>
      </div>
    </motion.div>
  );
};
