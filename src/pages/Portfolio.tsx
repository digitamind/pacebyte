import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    title: 'Enterprise Cloud Migration for FinanceFlow',
    description: 'Migrated a legacy financial system to AWS cloud infrastructure, improving scalability and reducing operational costs by 40%. Implemented CI/CD pipelines and automated deployment processes.',
    year: '2024',
    role: 'Lead Architect',
    services: ['Cloud Infrastructure & DevOps', 'Solution Architecture', 'Enterprise Development'],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Node.js'],
    metrics: [
      { value: '40%', label: 'Cost Reduction' },
      { value: '5x', label: 'Faster Deployments' },
    ],
  },
  {
    title: 'Fintech Payment Platform Development',
    description: 'Developed a comprehensive payment integration platform with multiple gateway support. Increased transaction processing capacity by 300% and reduced payment failures by 60%.',
    year: '2024',
    role: 'Technical Lead',
    services: ['Payment Integration & Fintech Solutions', 'API Development', 'Security & Compliance'],
    technologies: ['Java Spring Boot', 'React.js', 'PostgreSQL', 'Redis'],
    metrics: [
      { value: '300%', label: 'Capacity Increase' },
      { value: '60%', label: 'Failure Reduction' },
    ],
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Built an intelligent analytics platform using machine learning to predict customer behavior and optimize business processes. Improved decision-making speed by 50% and increased revenue by 25%.',
    year: '2023',
    role: 'ML Engineer',
    services: ['Machine Learning & AI Automation', 'Data Analytics & BI', 'Enterprise Development'],
    technologies: ['Python', 'TensorFlow', 'React.js', 'PostgreSQL', 'Elasticsearch'],
    metrics: [
      { value: '50%', label: 'Faster Decisions' },
      { value: '25%', label: 'Revenue Increase' },
    ],
  },
  {
    title: 'Digital Transformation for Retail Chain',
    description: 'Led digital transformation initiative for a major retail chain, modernizing their e-commerce platform and implementing omnichannel solutions. Increased online sales by 72% and improved customer satisfaction by 45%.',
    year: '2023',
    role: 'Solution Architect',
    services: ['Digital Transformation Consulting', 'Enterprise Development', 'UI/UX Design'],
    technologies: ['ASP.NET', 'React.js', 'Azure', 'MongoDB'],
    metrics: [
      { value: '72%', label: 'Sales Increase' },
      { value: '45%', label: 'Satisfaction Boost' },
    ],
  },
  {
    title: 'Healthcare Data Management System',
    description: 'Developed a secure, HIPAA-compliant healthcare data management system with real-time analytics. Reduced data processing time by 65% and improved patient care coordination.',
    year: '2023',
    role: 'Full Stack Developer',
    services: ['Enterprise Development', 'Security & Compliance', 'Data Analytics'],
    technologies: ['Node.js', 'React.js', 'PostgreSQL', 'AWS'],
    metrics: [
      { value: '65%', label: 'Processing Time Reduction' },
      { value: '100%', label: 'HIPAA Compliance' },
    ],
  },
  {
    title: 'Mobile Banking App Redesign',
    description: 'Redesigned and rebuilt a mobile banking application with enhanced security features and improved user experience. Increased daily active users by 35% and reduced support tickets by 50%.',
    year: '2022',
    role: 'Mobile Lead',
    services: ['Enterprise Development', 'UI/UX Design', 'Security & Compliance'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    metrics: [
      { value: '35%', label: 'User Growth' },
      { value: '50%', label: 'Support Reduction' },
    ],
  },
];

const serviceFilters = [
  'All',
  'Enterprise Development',
  'Fintech Solutions',
  'Cloud & DevOps',
  'AI & ML',
  'Digital Transformation',
];

export const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredCaseStudies =
    selectedFilter === 'All'
      ? caseStudies
      : caseStudies.filter((study) =>
          study.services.some((service) => service.includes(selectedFilter.split(' ')[0]))
        );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-base relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 text-center leading-tight">
              Our Portfolio
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 glass border-b border-dark-border sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {serviceFilters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-dark-surface ${
                  selectedFilter === filter
                    ? 'bg-accent-cyan text-dark-base shadow-lg glow-cyan'
                    : 'bg-dark-elevated text-gray-200 hover:bg-dark-surface hover:text-white border border-dark-border'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {filteredCaseStudies.map((study, index) => (
                <CaseStudyCard
                  key={`${study.title}-${index}`}
                  title={study.title}
                  description={study.description}
                  year={study.year}
                  role={study.role}
                  services={study.services}
                  technologies={study.technologies}
                  metrics={study.metrics}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No case studies found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-cyan/20 via-accent-purple/20 to-accent-green/20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh-strong opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Start Your Project?
            </h2>
            <Link to="/contact">
              <InteractiveButton size="lg" variant="secondary">
                Get in Touch
              </InteractiveButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
