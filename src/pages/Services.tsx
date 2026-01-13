import { motion } from 'framer-motion';
import { ServiceCard } from '../components/ServiceCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { Link } from 'react-router-dom';
import { staggerContainer } from '../utils/animations';

const services = [
  {
    title: 'Enterprise Application Development',
    description: 'Custom enterprise-grade web and mobile applications tailored to business needs, built with modern frameworks and scalable architectures.',
  },
  {
    title: 'Payment Integration & Fintech Solutions',
    description: 'Seamless payment gateway integrations, payment processing solutions, and comprehensive fintech platform development.',
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    description: 'Cloud migration (AWS, Azure, GCP), infrastructure automation, CI/CD pipelines, containerization, and deployment strategies.',
  },
  {
    title: 'Machine Learning & AI Automation',
    description: 'AI/ML model development, automation solutions, intelligent systems, and predictive analytics.',
  },
  {
    title: 'Solution Architecture & Technical Consulting',
    description: 'Technical architecture design, system planning, technology strategy, architecture reviews, and technical advisory services.',
  },
  {
    title: 'API Development & Integration',
    description: 'RESTful APIs, GraphQL, microservices architecture, third-party system integrations, and API gateway solutions.',
  },
  {
    title: 'Security & Compliance',
    description: 'Security audits, compliance implementation (GDPR, PCI-DSS, SOC 2), secure coding practices, and cybersecurity consulting.',
  },
  {
    title: 'Data Analytics & Business Intelligence',
    description: 'Data pipelines, analytics dashboards, BI solutions, data warehousing, and business intelligence platforms.',
  },
  {
    title: 'UI/UX Design Services',
    description: 'User interface and experience design, design systems, user research, and design consultation for applications.',
  },
  {
    title: 'Quality Assurance & Testing',
    description: 'Automated testing frameworks, QA strategies, test automation, performance testing, and quality assurance consulting.',
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategic consulting for digital transformation initiatives, technology modernization, and digital strategy.',
  },
];

export const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-base relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 text-center leading-tight">
              Our Services
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </motion.div>

          <ScrollReveal direction="up">
            <div className="text-center bg-dark-elevated rounded-2xl p-10 border border-dark-border">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <Link to="/contact">
                <InteractiveButton size="lg" variant="primary">
                  Get in Touch
                </InteractiveButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-cyan/20 via-accent-purple/20 to-accent-green/20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh-strong opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <Link to="/contact">
              <InteractiveButton size="lg" variant="secondary">
                Start Your Project
              </InteractiveButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
