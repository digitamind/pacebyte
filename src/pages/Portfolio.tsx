import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { PageMeta } from '../components/PageMeta';

const caseStudies = [
  {
    title: 'Enterprise Cloud Migration for a Financial Services Client',
    description: 'Pacebyte migrated a legacy financial system to cloud infrastructure, improving scalability and reducing operational costs by 40%. Pacebyte implemented CI/CD pipelines and automated deployment processes.',
    summary: 'Scalable cloud infrastructure and DevOps for a financial services client.',
    year: '2024',
    industry: 'Financial Services',
    clientType: 'Traditional financial institution',
    services: ['Cloud Infrastructure & DevOps', 'Solution Architecture', 'Enterprise Development'],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Java Spring Boot'],
    metrics: [
      { value: '40%', label: 'Cost Reduction' },
      { value: '5x', label: 'Faster Deployments' },
    ],
  },
  {
    title: 'Payment Platform for a Fintech Client',
    description: 'Pacebyte developed a comprehensive payment integration platform with multiple gateway support for a fintech client. Delivered a 300% increase in transaction processing capacity and reduced payment failures by 60%.',
    summary: 'Multi-gateway payment platform for a fintech company.',
    year: '2024',
    industry: 'Fintech',
    clientType: 'Fintech company',
    services: ['Payment Integration & Fintech Solutions', 'API Development', 'Security & Compliance'],
    technologies: ['Java Spring Boot', 'React.js', 'SQL Server', 'Redis'],
    metrics: [
      { value: '300%', label: 'Capacity Increase' },
      { value: '60%', label: 'Failure Reduction' },
    ],
  },
  {
    title: 'AI-Powered Analytics Platform for Enterprise',
    description: 'Pacebyte built an intelligent analytics platform using machine learning to predict customer behavior and optimize business processes. Improved decision-making speed by 50% and increased revenue by 25%.',
    summary: 'ML and analytics platform for enterprise decision-making.',
    year: '2025',
    industry: 'Technology',
    clientType: 'Enterprise',
    services: ['Machine Learning & AI Automation', 'Data Analytics & BI', 'Enterprise Development'],
    technologies: ['Python', 'TensorFlow', 'Elasticsearch', 'Kibana', 'Beats', 'Kafka'],
    metrics: [
      { value: '50%', label: 'Faster Decisions' },
      { value: '25%', label: 'Revenue Increase' },
    ],
  },
  {
    title: 'E-commerce and Omnichannel Modernization for Retail',
    description: 'Pacebyte led a digital transformation for an enterprise retailer, modernizing their e-commerce platform and implementing omnichannel solutions. Delivered a 72% increase in online sales and 45% improvement in customer satisfaction.',
    summary: 'Digital transformation and e-commerce for a retail client.',
    year: '2023',
    industry: 'Retail',
    clientType: 'Enterprise retailer',
    services: ['Digital Transformation Consulting', 'Enterprise Development', 'UI/UX Design'],
    technologies: ['Node.js', 'React.js', 'Azure', 'MongoDB', 'MySQL'],
    metrics: [
      { value: '72%', label: 'Sales Increase' },
      { value: '45%', label: 'Satisfaction Boost' },
    ],
  },
  {
    title: 'Healthcare Data Management System',
    description: 'Pacebyte developed a secure, HIPAA-compliant healthcare data management system with real-time analytics. Reduced data processing time by 65% and improved patient care coordination.',
    summary: 'HIPAA-compliant data management and analytics for healthcare.',
    year: '2023',
    industry: 'Healthcare',
    clientType: 'Healthcare provider',
    services: ['Enterprise Development', 'Security & Compliance', 'Data Analytics'],
    technologies: ['Node.js', 'React.js', 'PostgreSQL', 'AWS'],
    metrics: [
      { value: '65%', label: 'Faster Processing' },
      { value: '100%', label: 'HIPAA Compliance' },
    ],
  },
  {
    title: 'Mobile Banking Application Redesign',
    description: 'Pacebyte redesigned and rebuilt a mobile banking application with enhanced security and improved user experience for a bank. Increased daily active users by 35% and reduced support tickets by 50%.',
    summary: 'Mobile app redesign and security for a bank.',
    year: '2022',
    industry: 'Financial Services',
    clientType: 'Bank',
    services: ['Enterprise Development', 'UI/UX Design', 'Security & Compliance'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    metrics: [
      { value: '35%', label: 'User Growth' },
      { value: '50%', label: 'Support Reduction' },
    ],
  },
  {
    title: 'Capital Markets Investor Platform',
    description: 'Pacebyte designed and built a secure investor platform for a capital markets client, enabling portfolio visibility, reporting, and compliance workflows. Manual reporting time dropped by 55% and investor onboarding improved by 3x.',
    summary: 'Investor portal and reporting platform for capital markets.',
    year: '2024',
    industry: 'Financial Services',
    clientType: 'Asset manager',
    services: ['Enterprise Development', 'Solution Architecture', 'Security & Compliance', 'Data Analytics & BI'],
    technologies: ['React.js', 'Java Spring Boot', 'PostgreSQL', 'AWS', 'Redis'],
    metrics: [
      { value: '55%', label: 'Faster Reporting' },
      { value: '3x', label: 'Faster Onboarding' },
    ],
  },
  {
    title: 'Digital Platform for a Cooperative Society',
    description: 'Pacebyte delivered a member portal and digital platform for a cooperative society, including membership management, events, and governance tools. Member engagement increased by 40% and administrative overhead was reduced by 50%.',
    summary: 'Member portal and digital operations for a cooperative society.',
    year: '2023',
    industry: 'Technology',
    clientType: 'Cooperative society',
    services: ['Enterprise Development', 'Digital Transformation Consulting', 'UI/UX Design'],
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Azure'],
    metrics: [
      { value: '40%', label: 'Member Engagement Increase' },
      { value: '50%', label: 'Less Admin Overhead' },
    ],
  },
  {
    title: 'Registrar Operations and Share Registration Platform',
    description: 'Pacebyte built an operational platform for a capital market registrar to manage share registration, dividend tracking and claiming, corporate actions (AGMs, EGMs), and shareholder data management. Manual processing time dropped by 45% and efficiency of dividend declaration and compliance workflows improved.',
    summary: 'Operational platform for share registration, dividends, and corporate actions.',
    year: '2024',
    industry: 'Financial Services',
    clientType: 'Capital market registrar',
    services: ['Enterprise Development', 'Digital Transformation Consulting', 'Solution Architecture', 'Data Analytics & BI', 'Security & Compliance'],
    technologies: ['React.js', 'ASP.NET', 'PostgreSQL', 'AWS', 'Redis'],
    metrics: [
      { value: '45%', label: 'Faster Processing' },
      { value: '60%', label: 'Manual Work Reduction' },
    ],
  },
  {
    title: 'Blockchain-Powered Payment Infrastructure for a Fintech Client',
    description: 'Pacebyte designed and built a blockchain-based payment infrastructure for a digital payments client, enabling secure, scalable payment flows and settlement for cross-border and digital payments. The platform reduced transaction costs by 35% and increased settlement throughput.',
    summary: 'Blockchain-based payment infrastructure for a fintech client.',
    year: '2024',
    industry: 'Fintech',
    clientType: 'Digital payments / fintech company',
    services: ['Payment Integration & Fintech Solutions', 'Enterprise Development', 'Solution Architecture', 'Security & Compliance'],
    technologies: ['Solidity', 'ASP.NET', 'PostgreSQL', 'AWS', 'Web3'],
    metrics: [
      { value: '35%', label: 'Transaction Cost Reduction' },
      { value: '4x', label: 'Settlement Throughput' },
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

// Map filter labels to service keywords for better matching
const filterToKeywords: Record<string, string[]> = {
  'Enterprise Development': ['Enterprise Development', 'Enterprise App'],
  'Fintech Solutions': ['Fintech', 'Payment Integration', 'Payment'],
  'Cloud & DevOps': ['Cloud Infrastructure', 'DevOps', 'Cloud'],
  'AI & ML': ['Machine Learning', 'AI Automation', 'AI', 'ML'],
  'Digital Transformation': ['Digital Transformation'],
};

export const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredCaseStudies =
    selectedFilter === 'All'
      ? caseStudies
      : caseStudies.filter((study) => {
          const keywords = filterToKeywords[selectedFilter] || [selectedFilter];
          return study.services.some((service) =>
            keywords.some((keyword) =>
              service.toLowerCase().includes(keyword.toLowerCase())
            )
          );
        });

  return (
    <div className="min-h-screen pt-20">
      <PageMeta
        title="Our Portfolio"
        description="Explore Pacebyte's portfolio of successful projects including enterprise cloud migrations, fintech and blockchain payment infrastructure, AI-powered analytics, capital market and registrar solutions, digital transformations, and more."
        path="/portfolio"
      />
      {/* Hero Section */}
      <section className="py-20 bg-dark-base relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative z-10 container-content">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 text-center leading-tight">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mx-auto">
              Proven outcomes across fintech, healthcare, retail, and enterprise. See how we deliver for our clients.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-6 glass-nav sticky top-20 z-20">
        <div className="container-content">
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
        <div className="container-content">
          <AnimatePresence mode="wait">
            {filteredCaseStudies.length > 0 ? (
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
                    summary={study.summary}
                    year={study.year}
                    industry={study.industry}
                    clientType={study.clientType}
                    services={study.services}
                    technologies={study.technologies}
                    metrics={study.metrics}
                    index={index}
                    totalCount={filteredCaseStudies.length}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-gray-300 text-lg font-medium mb-2">No case studies found</p>
                <p className="text-gray-300 text-sm">Try selecting a different filter</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-cyan/20 via-accent-purple/20 to-accent-green/20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh-strong opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Discuss a similar project?
            </h2>
            <InteractiveButton size="lg" variant="secondary" to="/contact">
              Get a proposal
            </InteractiveButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
