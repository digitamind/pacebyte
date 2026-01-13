import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyCardProps {
  title: string;
  description: string;
  year: string;
  role: string;
  services: string[];
  technologies?: string[];
  metrics?: Metric[];
  image?: ReactNode;
  index?: number;
}

export const CaseStudyCard = ({
  title,
  description,
  year,
  role,
  services,
  technologies,
  metrics,
  image,
  index = 0,
}: CaseStudyCardProps) => {
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
        scale: 1.01,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
      }}
      className="bg-dark-elevated rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group border border-dark-border"
    >
      {image && (
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20">
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            {image}
          </motion.div>
          <div className="absolute top-3 left-3 bg-accent-cyan text-dark-base px-3 py-1 rounded-full text-xs font-extrabold">
            {String(index + 1).padStart(2, '0')} / {String(6).padStart(2, '0')}
          </div>
        </div>
      )}

      <div className="p-8">
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="text-sm text-gray-300 font-medium">Year: {year}</span>
          <span className="text-sm text-gray-300">•</span>
          <span className="text-sm text-gray-300 font-medium">Role: {role}</span>
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-3 leading-tight">{title}</h3>
        <p className="text-base text-gray-200 mb-6 leading-relaxed">{description}</p>

        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-dark-surface rounded-lg p-4 border border-dark-border">
                <div className="text-3xl font-extrabold text-accent-cyan mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-200 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-bold text-white mb-2">Services</h4>
            <div className="flex flex-wrap gap-2">
              {services.map((service, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-dark-surface text-gray-200 rounded-full text-sm font-medium border border-dark-border"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {technologies && technologies.length > 0 && (
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-accent-cyan/10 text-accent-cyan rounded-full text-sm font-medium border border-accent-cyan/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
