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
  industry: string;
  clientType?: string;
  summary?: string;
  services: string[];
  technologies?: string[];
  metrics?: Metric[];
  image?: ReactNode;
  index?: number;
  totalCount?: number;
}

export const CaseStudyCard = ({
  title,
  description,
  year,
  industry,
  clientType,
  summary,
  services,
  technologies,
  metrics,
  image,
  index = 0,
  totalCount,
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
      <div className="relative h-20 overflow-hidden bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 flex items-center justify-center">
        {image ? (
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            {image}
          </motion.div>
        ) : null}
        <span className="text-sm font-bold text-white/90 uppercase tracking-wider relative z-10">
          {industry}
        </span>
        {typeof totalCount === 'number' && totalCount > 0 && (
          <div className="absolute top-1.5 right-2 bg-dark-base/80 text-gray-200 px-2 py-0.5 rounded-full text-xs font-medium">
            {index + 1} / {totalCount}
          </div>
        )}
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="text-sm text-gray-300 font-medium">{year}</span>
          {clientType && (
            <>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-400 font-medium">{clientType}</span>
            </>
          )}
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-3 leading-tight">{title}</h3>
        {summary && (
          <p className="text-sm text-accent-cyan/90 mb-2 font-medium">{summary}</p>
        )}
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
