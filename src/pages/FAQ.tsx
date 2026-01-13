import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Accordion } from '../components/Accordion';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { GradientMesh } from '../components/GradientMesh';
import { fadeInUp, staggerContainer } from '../utils/animations';

const faqCategories = [
  {
    category: 'Services',
    items: [
      {
        question: 'What services does Pacebyte offer?',
        answer: 'Pacebyte offers a comprehensive range of IT consultancy services including Enterprise Application Development, Cloud Infrastructure & DevOps, Blockchain & Web3 Development, AI & Machine Learning, Fintech & Payment Solutions, Security & Compliance, Professional Services, and Assessments & Consulting. We also provide specialized services like UI/UX Design, Quality Assurance, and Digital Transformation Consulting.',
      },
      {
        question: 'Do you offer Blockchain and Web3 development services?',
        answer: 'Yes! Blockchain & Web3 Development is one of our core service categories. We provide Smart Contract Development, DeFi Platform Development, NFT Marketplace Development, Blockchain Integration, Web3 Application Development, and Token Development & ICO Support.',
      },
      {
        question: 'Can you work with startups?',
        answer: 'Absolutely! We work with businesses of all sizes, from startups to large enterprises. We understand the unique challenges startups face and offer flexible engagement models, competitive pricing, and agile methodologies that adapt to your needs and budget.',
      },
    ],
  },
  {
    category: 'Process',
    items: [
      {
        question: 'What development methodology do you use?',
        answer: 'We adopt agile methodologies, seamlessly adapting to your existing organizational structure and processes while enhancing workflows where valuable. We believe in seamless integration with your team\'s way of working, adapting our approach to fit your operational structure.',
      },
      {
        question: 'Can you work with our existing processes?',
        answer: 'Yes, we adapt our approach to integrate seamlessly with your current workflows and team structure. We respect your organization\'s existing processes and enhance them where beneficial, ensuring smooth collaboration without disrupting your operations.',
      },
      {
        question: 'How do you handle integration with our team?',
        answer: 'We align with your organization\'s structure and enhance workflows where beneficial, ensuring smooth collaboration. Our team integrates with yours, adopting your communication channels, meeting schedules, and reporting structures while bringing our technical expertise to the table.',
      },
      {
        question: 'What is your typical project timeline?',
        answer: 'Project timelines vary based on scope and complexity. Small projects may take 2-4 weeks, while larger enterprise solutions can take 3-6 months or more. We provide detailed timelines during the discovery phase and maintain transparency throughout the project with regular updates and milestone reviews.',
      },
    ],
  },
  {
    category: 'Pricing',
    items: [
      {
        question: 'How much do projects cost?',
        answer: 'Project costs vary based on scope, complexity, and requirements. We provide custom quotes tailored to your specific needs. We offer flexible pricing models including fixed-price projects, time & materials, and retainer-based engagements. Contact us for a detailed estimate.',
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment options including milestone-based payments, monthly retainers, and custom payment schedules that align with your budget and project timeline. We work with you to find a payment structure that suits your financial situation.',
      },
      {
        question: 'What is included in your pricing?',
        answer: 'Our pricing typically includes project planning, development, testing, deployment, and initial support. Specific inclusions vary by project type and are detailed in our proposals. Additional services like ongoing maintenance, hosting, and extended support are available as separate engagements.',
      },
    ],
  },
  {
    category: 'Technical',
    items: [
      {
        question: 'What technologies do you specialize in?',
        answer: 'We work with a wide range of modern technologies including React.js, Node.js, Python, Java, .NET, AWS, Azure, GCP, Docker, Kubernetes, and blockchain technologies like Solidity, Ethereum, and Web3 frameworks. We stay current with the latest technologies and can recommend the best stack for your project.',
      },
      {
        question: 'Do you provide ongoing support and maintenance?',
        answer: 'Yes, we offer comprehensive support and maintenance services including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 monitoring. We provide flexible support packages tailored to your needs.',
      },
      {
        question: 'How do you ensure code quality?',
        answer: 'We follow industry best practices including code reviews, automated testing, continuous integration/continuous deployment (CI/CD), and quality assurance processes. We maintain high code quality standards and provide documentation for all deliverables.',
      },
    ],
  },
  {
    category: 'General',
    items: [
      {
        question: 'Where is Pacebyte located?',
        answer: 'Pacebyte operates as a remote-first company, allowing us to work with clients globally. We have team members across different time zones, enabling us to provide flexible support and collaboration regardless of your location.',
      },
      {
        question: 'How do I get started?',
        answer: 'Getting started is easy! You can schedule a free consultation through our contact page, request a project estimate, or simply reach out to discuss your needs. We\'ll schedule an initial discovery call to understand your requirements and provide recommendations.',
      },
      {
        question: 'What makes Pacebyte different?',
        answer: 'Pacebyte combines technical expertise with flexible, client-aligned methodologies. We offer Blockchain & Web3 development as a core service, adopt agile methodologies that align with your existing processes, and provide personalized service with direct access to our team. We focus on building long-term partnerships rather than just delivering projects.',
      },
    ],
  },
];

export const FAQ = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-base relative overflow-hidden">
        <GradientMesh intensity="normal" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services, processes, and how we work
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {faqCategories.map((category, catIndex) => (
              <motion.div key={catIndex} variants={fadeInUp}>
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                    {category.category}
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full mb-4" />
                </div>
                <Accordion items={category.items} allowMultiple={true} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-dark-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-dark-elevated rounded-2xl p-10 md:p-12 border border-dark-border"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're here to help! Get in touch with us and we'll respond as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <InteractiveButton size="lg" variant="primary">
                  Contact Us
                </InteractiveButton>
              </Link>
              <Link to="/services">
                <InteractiveButton size="lg" variant="outline">
                  View Our Services
                </InteractiveButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
