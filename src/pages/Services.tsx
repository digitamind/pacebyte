import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ServiceCard } from '../components/ServiceCard';
import { ServiceCategory } from '../components/ServiceCategory';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { Link } from 'react-router-dom';
import { staggerContainer } from '../utils/animations';
import { GradientMesh } from '../components/GradientMesh';

interface Service {
  title: string;
  description: string;
  benefits?: string[];
  process?: string[];
  idealClient?: string;
}

interface ServiceCategoryData {
  category: string;
  icon: string;
  isHighlighted?: boolean;
  services: Service[];
}

const serviceCategories: ServiceCategoryData[] = [
  {
    category: 'Enterprise Development',
    icon: '🏢',
    services: [
      {
        title: 'Web Application Development',
        description: 'Custom web applications built with modern frameworks and scalable architectures, tailored to your business needs.',
        benefits: [
          'Faster time-to-market',
          'Scalable architecture',
          'Flexible agile methodology',
          'Seamless integration with existing workflows',
        ],
        process: [
          'Discovery & Planning (aligned with your structure)',
          'Design & Prototyping',
          'Agile Development (adaptable to your processes)',
          'Deployment & Integration',
        ],
        idealClient: 'Organizations looking to build modern web solutions while maintaining their existing operational structure.',
      },
      {
        title: 'Mobile Application Development',
        description: 'Native and cross-platform mobile applications for iOS and Android, delivering exceptional user experiences.',
        benefits: [
          'Cross-platform compatibility',
          'Native performance',
          'Seamless team integration',
          'Agile development approach',
        ],
        process: [
          'Requirements gathering (aligned with your processes)',
          'UI/UX Design',
          'Iterative development',
          'Testing & Deployment',
        ],
        idealClient: 'Businesses seeking mobile solutions that integrate with their existing systems and workflows.',
      },
      {
        title: 'Full-Stack Solutions',
        description: 'End-to-end development services covering frontend, backend, and infrastructure for complete digital solutions.',
        benefits: [
          'Unified technology stack',
          'Consistent development approach',
          'Workflow alignment',
          'Comprehensive support',
        ],
        process: [
          'Architecture design (respecting your structure)',
          'Full-stack development',
          'Integration with existing systems',
          'Ongoing maintenance',
        ],
        idealClient: 'Companies needing complete digital transformation while preserving their operational processes.',
      },
      {
        title: 'Legacy System Modernization',
        description: 'Transform outdated systems into modern, scalable solutions while maintaining business continuity.',
        benefits: [
          'Reduced technical debt',
          'Improved performance',
          'Process preservation',
          'Gradual migration approach',
        ],
        process: [
          'System assessment (understanding your workflows)',
          'Modernization strategy',
          'Phased implementation',
          'Team training & support',
        ],
        idealClient: 'Organizations with legacy systems seeking modernization without disrupting operations.',
      },
    ],
  },
  {
    category: 'Cloud Infrastructure & DevOps',
    icon: '☁️',
    services: [
      {
        title: 'Cloud Migration',
        description: 'Seamless migration to AWS, Azure, or GCP with minimal downtime and maximum efficiency.',
        benefits: [
          'Reduced infrastructure costs',
          'Improved scalability',
          'Flexible deployment options',
          'Process-aligned migration',
        ],
        process: [
          'Assessment (aligned with your infrastructure)',
          'Migration planning',
          'Phased migration',
          'Optimization & support',
        ],
        idealClient: 'Businesses ready to leverage cloud benefits while maintaining their operational structure.',
      },
      {
        title: 'Infrastructure Automation',
        description: 'Automate infrastructure provisioning and management using Infrastructure as Code (IaC) principles.',
        benefits: [
          'Faster deployments',
          'Consistent environments',
          'Reduced manual errors',
          'Workflow integration',
        ],
        process: [
          'Infrastructure analysis (understanding your setup)',
          'Automation design',
          'Implementation',
          'Team training',
        ],
        idealClient: 'Organizations seeking infrastructure automation that aligns with their DevOps practices.',
      },
      {
        title: 'CI/CD Pipeline Setup',
        description: 'Establish continuous integration and continuous deployment pipelines tailored to your development workflow.',
        benefits: [
          'Automated testing',
          'Faster releases',
          'Quality assurance',
          'Process alignment',
        ],
        process: [
          'Workflow analysis (respecting your processes)',
          'Pipeline design',
          'Implementation & testing',
          'Documentation & training',
        ],
        idealClient: 'Development teams looking to enhance their deployment processes while maintaining existing workflows.',
      },
      {
        title: 'Containerization & Orchestration',
        description: 'Docker and Kubernetes solutions for scalable, portable application deployment.',
        benefits: [
          'Application portability',
          'Resource optimization',
          'Scalability',
          'Team collaboration',
        ],
        process: [
          'Containerization strategy (aligned with your needs)',
          'Orchestration setup',
          'Deployment automation',
          'Monitoring & optimization',
        ],
        idealClient: 'Companies needing containerized solutions that integrate with their existing infrastructure.',
      },
      {
        title: 'Cloud Cost Optimization',
        description: 'Analyze and optimize cloud spending while maintaining performance and reliability.',
        benefits: [
          'Reduced cloud costs',
          'Improved resource utilization',
          'Performance optimization',
          'Budget alignment',
        ],
        process: [
          'Cost analysis (understanding your usage)',
          'Optimization recommendations',
          'Implementation',
          'Ongoing monitoring',
        ],
        idealClient: 'Organizations seeking to optimize cloud spending while maintaining service quality.',
      },
    ],
  },
  {
    category: 'Blockchain & Web3 Development',
    icon: '⛓️',
    services: [
      {
        title: 'Smart Contract Development',
        description: 'Secure, audited smart contracts for Ethereum, Polygon, and other blockchain networks.',
        benefits: [
          'Secure & audited code',
          'Gas optimization',
          'Cross-chain compatibility',
          'Agile development approach',
        ],
        process: [
          'Requirements analysis (aligned with your goals)',
          'Smart contract design',
          'Development & testing',
          'Audit & deployment',
        ],
        idealClient: 'Businesses exploring blockchain solutions and seeking expert smart contract development.',
      },
      {
        title: 'DeFi Platform Development',
        description: 'Decentralized finance platforms including DEXs, lending protocols, and yield farming solutions.',
        benefits: [
          'Decentralized architecture',
          'Security-first approach',
          'Scalable solutions',
          'Process integration',
        ],
        process: [
          'Platform architecture (respecting your structure)',
          'Protocol development',
          'Security audits',
          'Mainnet deployment',
        ],
        idealClient: 'Fintech companies and startups building decentralized financial products.',
      },
      {
        title: 'NFT Marketplace Development',
        description: 'Custom NFT marketplaces with minting, trading, and auction capabilities.',
        benefits: [
          'Custom marketplace features',
          'Multi-chain support',
          'User-friendly interface',
          'Seamless integration',
        ],
        process: [
          'Marketplace design (aligned with your vision)',
          'Smart contract development',
          'Frontend development',
          'Testing & launch',
        ],
        idealClient: 'Creators and businesses launching NFT marketplaces and digital collectible platforms.',
      },
      {
        title: 'Blockchain Integration',
        description: 'Integrate blockchain technology into existing systems and applications.',
        benefits: [
          'Hybrid solutions',
          'Legacy system compatibility',
          'Workflow preservation',
          'Gradual adoption',
        ],
        process: [
          'Integration assessment (understanding your systems)',
          'Blockchain strategy',
          'Phased integration',
          'Team training',
        ],
        idealClient: 'Organizations seeking to add blockchain capabilities to existing applications.',
      },
      {
        title: 'Web3 Application Development',
        description: 'Decentralized applications (dApps) with wallet integration and blockchain connectivity.',
        benefits: [
          'User-friendly dApps',
          'Wallet integration',
          'Blockchain connectivity',
          'Modern UX/UI',
        ],
        process: [
          'dApp architecture (aligned with your needs)',
          'Frontend & smart contract development',
          'Testing & optimization',
          'Deployment & support',
        ],
        idealClient: 'Startups and businesses building Web3 applications and decentralized platforms.',
      },
      {
        title: 'Token Development & ICO Support',
        description: 'ERC-20, ERC-721, and custom token development with ICO/IDO launch support.',
        benefits: [
          'Standard-compliant tokens',
          'Security audits',
          'Launch support',
          'Ongoing maintenance',
        ],
        process: [
          'Token economics design (respecting your model)',
          'Token development',
          'Security audit',
          'Launch & marketing support',
        ],
        idealClient: 'Projects launching tokens and conducting token sales with expert guidance.',
      },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: '🤖',
    services: [
      {
        title: 'AI/ML Model Development',
        description: 'Custom machine learning models tailored to your business needs and data.',
        benefits: [
          'Custom ML solutions',
          'Data-driven insights',
          'Scalable models',
          'Process integration',
        ],
        process: [
          'Data analysis (aligned with your data structure)',
          'Model design & training',
          'Validation & optimization',
          'Deployment & monitoring',
        ],
        idealClient: 'Organizations with data looking to leverage AI/ML for business insights.',
      },
      {
        title: 'Intelligent Automation',
        description: 'AI-powered automation solutions to streamline business processes and workflows.',
        benefits: [
          'Process efficiency',
          'Cost reduction',
          'Workflow enhancement',
          'Seamless integration',
        ],
        process: [
          'Process analysis (understanding your workflows)',
          'Automation design',
          'Implementation',
          'Optimization & support',
        ],
        idealClient: 'Companies seeking to automate repetitive tasks while maintaining operational control.',
      },
      {
        title: 'Predictive Analytics',
        description: 'Advanced analytics solutions for forecasting and data-driven decision making.',
        benefits: [
          'Data-driven decisions',
          'Forecasting accuracy',
          'Business insights',
          'Process alignment',
        ],
        process: [
          'Analytics requirements (aligned with your needs)',
          'Model development',
          'Integration with existing systems',
          'Training & support',
        ],
        idealClient: 'Businesses needing predictive insights to improve decision-making processes.',
      },
      {
        title: 'Natural Language Processing',
        description: 'NLP solutions for chatbots, sentiment analysis, and text processing applications.',
        benefits: [
          'Enhanced user experience',
          'Automated text processing',
          'Sentiment analysis',
          'Workflow integration',
        ],
        process: [
          'NLP requirements (respecting your use cases)',
          'Model training',
          'Integration & testing',
          'Deployment & optimization',
        ],
        idealClient: 'Organizations seeking intelligent text processing and conversational AI solutions.',
      },
      {
        title: 'Computer Vision Solutions',
        description: 'Image and video analysis solutions for object detection, recognition, and processing.',
        benefits: [
          'Automated image processing',
          'Real-time analysis',
          'Accuracy optimization',
          'System integration',
        ],
        process: [
          'Vision requirements (aligned with your needs)',
          'Model development',
          'Integration & testing',
          'Deployment & monitoring',
        ],
        idealClient: 'Companies needing automated image/video analysis and recognition capabilities.',
      },
    ],
  },
  {
    category: 'Fintech & Payment Solutions',
    icon: '💳',
    services: [
      {
        title: 'Payment Gateway Integration',
        description: 'Seamless integration of payment gateways including Stripe, PayPal, and custom solutions.',
        benefits: [
          'Multiple payment options',
          'Secure transactions',
          'Process alignment',
          'Compliance support',
        ],
        process: [
          'Payment requirements (understanding your needs)',
          'Gateway selection',
          'Integration & testing',
          'Compliance & security',
        ],
        idealClient: 'Businesses needing secure payment processing integrated with existing systems.',
      },
      {
        title: 'Payment Processing Systems',
        description: 'Custom payment processing solutions with fraud detection and transaction management.',
        benefits: [
          'Custom payment flows',
          'Fraud prevention',
          'Transaction management',
          'Workflow integration',
        ],
        process: [
          'Payment flow design (aligned with your processes)',
          'System development',
          'Security implementation',
          'Testing & deployment',
        ],
        idealClient: 'Fintech companies and businesses building custom payment solutions.',
      },
      {
        title: 'Financial Platform Development',
        description: 'Comprehensive financial platforms including banking, lending, and investment solutions.',
        benefits: [
          'Comprehensive solutions',
          'Regulatory compliance',
          'Scalable architecture',
          'Process preservation',
        ],
        process: [
          'Platform architecture (respecting your structure)',
          'Development & compliance',
          'Security audits',
          'Launch & support',
        ],
        idealClient: 'Financial institutions and fintech startups building comprehensive financial platforms.',
      },
      {
        title: 'Cryptocurrency Integration',
        description: 'Integrate cryptocurrency payments and blockchain-based financial services.',
        benefits: [
          'Crypto payment support',
          'Blockchain integration',
          'Multi-currency support',
          'Seamless integration',
        ],
        process: [
          'Integration strategy (aligned with your goals)',
          'Blockchain integration',
          'Payment processing setup',
          'Testing & deployment',
        ],
        idealClient: 'Businesses seeking to accept cryptocurrency payments and blockchain-based services.',
      },
    ],
  },
  {
    category: 'Security & Compliance',
    icon: '🔒',
    services: [
      {
        title: 'Security Audits',
        description: 'Comprehensive security assessments and vulnerability analysis for applications and infrastructure.',
        benefits: [
          'Vulnerability identification',
          'Security recommendations',
          'Compliance alignment',
          'Process integration',
        ],
        process: [
          'Security assessment (understanding your setup)',
          'Vulnerability analysis',
          'Recommendations & remediation',
          'Follow-up audits',
        ],
        idealClient: 'Organizations seeking to identify and remediate security vulnerabilities.',
      },
      {
        title: 'Compliance Implementation',
        description: 'GDPR, PCI-DSS, SOC 2, and other regulatory compliance implementation and certification.',
        benefits: [
          'Regulatory compliance',
          'Risk mitigation',
          'Process alignment',
          'Certification support',
        ],
        process: [
          'Compliance assessment (aligned with your requirements)',
          'Gap analysis',
          'Implementation',
          'Certification & maintenance',
        ],
        idealClient: 'Companies needing to achieve and maintain regulatory compliance.',
      },
      {
        title: 'Secure Coding Practices',
        description: 'Security-focused development practices and secure code review services.',
        benefits: [
          'Secure applications',
          'Best practices',
          'Team training',
          'Workflow integration',
        ],
        process: [
          'Code review (respecting your processes)',
          'Security recommendations',
          'Implementation support',
          'Training & documentation',
        ],
        idealClient: 'Development teams seeking to improve application security and coding practices.',
      },
      {
        title: 'Cybersecurity Consulting',
        description: 'Strategic cybersecurity consulting and security architecture design.',
        benefits: [
          'Security strategy',
          'Risk assessment',
          'Architecture design',
          'Process alignment',
        ],
        process: [
          'Security assessment (understanding your needs)',
          'Strategy development',
          'Implementation planning',
          'Ongoing support',
        ],
        idealClient: 'Organizations seeking expert cybersecurity guidance and strategic planning.',
      },
    ],
  },
  {
    category: 'Professional Services',
    icon: '👥',
    services: [
      {
        title: 'Solution Architecture',
        description: 'Technical architecture design and system planning for scalable, maintainable solutions.',
        benefits: [
          'Scalable architecture',
          'Best practices',
          'Process alignment',
          'Technical guidance',
        ],
        process: [
          'Requirements analysis (aligned with your structure)',
          'Architecture design',
          'Review & refinement',
          'Implementation support',
        ],
        idealClient: 'Organizations needing expert architecture guidance for complex technical solutions.',
      },
      {
        title: 'Technical Consulting',
        description: 'Expert technical consulting for technology strategy, architecture reviews, and technical advisory.',
        benefits: [
          'Expert guidance',
          'Technology strategy',
          'Process integration',
          'Risk mitigation',
        ],
        process: [
          'Consultation (understanding your challenges)',
          'Analysis & recommendations',
          'Strategy development',
          'Implementation support',
        ],
        idealClient: 'Businesses seeking expert technical guidance and strategic technology advice.',
      },
      {
        title: 'API Development & Integration',
        description: 'RESTful APIs, GraphQL, microservices architecture, and third-party system integrations.',
        benefits: [
          'Modern API design',
          'System integration',
          'Scalable architecture',
          'Workflow alignment',
        ],
        process: [
          'API requirements (respecting your systems)',
          'Design & development',
          'Integration & testing',
          'Documentation & support',
        ],
        idealClient: 'Organizations needing API solutions and system integrations.',
      },
      {
        title: 'Data Analytics & BI',
        description: 'Data pipelines, analytics dashboards, BI solutions, and data warehousing.',
        benefits: [
          'Data-driven insights',
          'Real-time analytics',
          'Scalable solutions',
          'Process integration',
        ],
        process: [
          'Data analysis (aligned with your data structure)',
          'Pipeline & dashboard development',
          'Integration & testing',
          'Training & support',
        ],
        idealClient: 'Companies seeking to leverage data for business intelligence and analytics.',
      },
      {
        title: 'UI/UX Design Services',
        description: 'User interface and experience design, design systems, and user research.',
        benefits: [
          'User-centered design',
          'Modern interfaces',
          'Design systems',
          'Process collaboration',
        ],
        process: [
          'User research (understanding your users)',
          'Design & prototyping',
          'User testing',
          'Implementation support',
        ],
        idealClient: 'Organizations seeking exceptional user experiences and modern interface design.',
      },
      {
        title: 'Quality Assurance & Testing',
        description: 'Automated testing frameworks, QA strategies, and comprehensive testing services.',
        benefits: [
          'Quality assurance',
          'Automated testing',
          'Process integration',
          'Risk reduction',
        ],
        process: [
          'Testing strategy (aligned with your processes)',
          'Test development',
          'Execution & reporting',
          'Continuous improvement',
        ],
        idealClient: 'Development teams seeking comprehensive testing and quality assurance.',
      },
      {
        title: 'Agile Methodology Implementation',
        description: 'Process alignment with existing structures, workflow enhancement, and team integration.',
        benefits: [
          'Flexible agile approach',
          'Process alignment',
          'Workflow enhancement',
          'Team collaboration',
        ],
        process: [
          'Process assessment (understanding your structure)',
          'Agile implementation plan',
          'Team training & integration',
          'Continuous improvement',
        ],
        idealClient: 'Organizations seeking to adopt agile methodologies while preserving their operational structure.',
      },
    ],
  },
  {
    category: 'Assessments & Consulting',
    icon: '📊',
    services: [
      {
        title: 'Technology Assessment',
        description: 'Comprehensive assessment of your current technology stack and recommendations for improvement.',
        benefits: [
          'Technology audit',
          'Improvement recommendations',
          'Process alignment',
          'Strategic guidance',
        ],
        process: [
          'Assessment (understanding your technology)',
          'Analysis & recommendations',
          'Report & presentation',
          'Implementation support',
        ],
        idealClient: 'Organizations seeking to evaluate and improve their technology infrastructure.',
      },
      {
        title: 'Architecture Review',
        description: 'Expert review of system architecture with recommendations for scalability and maintainability.',
        benefits: [
          'Architecture evaluation',
          'Best practices',
          'Scalability recommendations',
          'Process integration',
        ],
        process: [
          'Architecture analysis (respecting your structure)',
          'Review & recommendations',
          'Report & discussion',
          'Implementation guidance',
        ],
        idealClient: 'Companies needing expert architecture review and improvement recommendations.',
      },
      {
        title: 'Cost Optimization Assessment',
        description: 'Analyze technology costs and identify opportunities for optimization and savings.',
        benefits: [
          'Cost reduction',
          'Resource optimization',
          'Budget alignment',
          'Process efficiency',
        ],
        process: [
          'Cost analysis (understanding your spending)',
          'Optimization opportunities',
          'Recommendations & planning',
          'Implementation support',
        ],
        idealClient: 'Organizations seeking to optimize technology costs and resource utilization.',
      },
      {
        title: 'Digital Transformation Consulting',
        description: 'Strategic consulting for digital transformation initiatives and technology modernization.',
        benefits: [
          'Transformation strategy',
          'Technology roadmap',
          'Process alignment',
          'Change management',
        ],
        process: [
          'Transformation assessment (aligned with your goals)',
          'Strategy development',
          'Roadmap planning',
          'Implementation support',
        ],
        idealClient: 'Businesses embarking on digital transformation journeys seeking expert guidance.',
      },
    ],
  },
];

export const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to anchor when page loads with hash
    if (location.hash) {
      const hash = location.hash.substring(1); // Remove the #
      
      // Wait for DOM to be ready and animations to settle
      const handleScrollAndFocus = () => {
        const element = document.getElementById(hash);
        if (element) {
          // Open the category if it's closed (do this first)
          const button = element.querySelector('button');
          if (button && button.getAttribute('aria-expanded') === 'false') {
            button.click();
            // Wait for the accordion to open before scrolling
            setTimeout(() => {
              scrollToElement(element, button);
            }, 350); // Wait for accordion animation
          } else {
            scrollToElement(element, button);
          }
        }
      };

      const scrollToElement = (element: HTMLElement, button: HTMLButtonElement | null) => {
        // Calculate offset for navigation header (80px)
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Set focus on the button after scrolling
        setTimeout(() => {
          if (button) {
            button.focus();
            // Add a visual focus indicator by briefly highlighting
            button.classList.add('ring-2', 'ring-accent-cyan', 'ring-offset-2');
            setTimeout(() => {
              button.classList.remove('ring-2', 'ring-accent-cyan', 'ring-offset-2');
            }, 2000);
          }
        }, 500); // Wait for scroll to complete
      };

      // Initial delay for page load
      setTimeout(handleScrollAndFocus, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-base relative overflow-hidden">
        <GradientMesh intensity="normal" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 text-center leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              Comprehensive IT consultancy services with flexible agile methodologies that align with your organization's structure
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {serviceCategories.map((category, catIndex) => {
              // Generate URL-friendly ID from category name
              const categoryId = category.category
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
              
              return (
                <ServiceCategory
                  key={category.category}
                  id={categoryId}
                  title={category.category}
                  icon={category.icon}
                  isHighlighted={category.isHighlighted}
                  defaultOpen={catIndex === 0}
                  index={catIndex}
                >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <ServiceCard
                      key={service.title}
                      title={service.title}
                      description={service.description}
                      benefits={service.benefits}
                      process={service.process}
                      idealClient={service.idealClient}
                      category={category.category}
                      index={serviceIndex}
                    />
                  ))}
                </div>
              </ServiceCategory>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center bg-dark-elevated rounded-2xl p-10 border border-dark-border mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We adapt our agile methodologies to align with your existing processes and enhance workflows where beneficial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <InteractiveButton size="lg" variant="primary">
                    Get in Touch
                  </InteractiveButton>
                </Link>
                <Link to="/contact">
                  <InteractiveButton size="lg" variant="outline">
                    Schedule Consultation
                  </InteractiveButton>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-cyan/20 via-accent-purple/20 to-accent-green/20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh-strong opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how we can align our expertise with your organization's structure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <InteractiveButton size="lg" variant="secondary">
                  Start Your Project
                </InteractiveButton>
              </Link>
              <Link to="/faq">
                <InteractiveButton size="lg" variant="outline">
                  View FAQ
                </InteractiveButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
