import { ServiceCard } from '../components/ServiceCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { Link } from 'react-router-dom';

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
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Comprehensive technology solutions to accelerate your digital transformation. 
              From enterprise applications to AI automation, we deliver byte-sized solutions that keep you ahead.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal direction="up">
            <div className="text-center bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team of experts can help you build a tailored solution that fits your unique business needs. 
                Let's discuss how we can accelerate your digital transformation.
              </p>
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
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Partner with Pacebyte and experience technology solutions at the speed of innovation.
            </p>
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
