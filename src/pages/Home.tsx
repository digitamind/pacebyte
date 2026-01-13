import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { TestimonialCard } from '../components/TestimonialCard';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { KineticText } from '../components/KineticText';
import { ScrollSection } from '../components/ScrollSection';

const featuredServices = [
  {
    title: 'Blockchain & Web3 Development',
    description: 'Smart contracts, DeFi platforms, NFT marketplaces, and Web3 applications.',
    benefits: [
      'Smart contract development',
      'DeFi & NFT solutions',
      'Web3 integration',
      'Blockchain expertise',
    ],
    process: [
      'Requirements analysis',
      'Blockchain architecture',
      'Development & testing',
      'Deployment & support',
    ],
    idealClient: 'Businesses exploring blockchain solutions and Web3 technologies.',
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    description: 'Cloud migration, infrastructure automation, and CI/CD pipelines with flexible agile methodologies.',
    benefits: [
      'Cloud migration expertise',
      'Infrastructure automation',
      'CI/CD pipelines',
      'Process alignment',
    ],
    process: [
      'Infrastructure assessment',
      'Migration planning',
      'Implementation',
      'Optimization & support',
    ],
    idealClient: 'Organizations seeking cloud solutions that align with existing processes.',
  },
  {
    title: 'Enterprise Application Development',
    description: 'Custom enterprise-grade applications with agile methodologies that adapt to your organization.',
    benefits: [
      'Scalable architecture',
      'Agile development',
      'Process integration',
      'Modern frameworks',
    ],
    process: [
      'Discovery & planning',
      'Design & development',
      'Testing & deployment',
      'Ongoing support',
    ],
    idealClient: 'Businesses needing custom applications that respect existing workflows.',
  },
];

const stats = [
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 2, suffix: '+', label: 'Years in Business' },
  { value: 24, suffix: '/7', label: 'Support' },
];

const valueProps = [
  {
    title: 'Rapid Innovation',
    description: 'We move at the speed of progress, adapting quickly to industry shifts.',
    icon: '⚡',
  },
  {
    title: 'Agile & Flexible',
    description: 'We adopt agile methodologies, seamlessly adapting to your existing organizational structure and processes while enhancing workflows where valuable.',
    icon: '🔄',
  },
  {
    title: 'Data-Driven Solutions',
    description: 'Harnessing the power of technology to transform data into meaningful insights.',
    icon: '📊',
  },
  {
    title: 'Cutting-Edge Technology',
    description: 'Always at the forefront of the digital revolution with latest technologies including Blockchain & Web3.',
    icon: '🚀',
  },
];

const testimonials = [
  {
    quote: 'Pacebyte transformed our digital infrastructure with their cloud migration expertise. The team\'s professionalism and technical depth exceeded our expectations.',
    author: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp Inc.',
  },
  {
    quote: 'Working with Pacebyte on our fintech solution was seamless. They delivered a robust payment integration system that increased our transaction volume by 40%.',
    author: 'Michael Chen',
    role: 'Product Director',
    company: 'FinanceFlow',
  },
  {
    quote: 'Pacebyte\'s AI automation solutions revolutionized our operations. Their machine learning models reduced processing time by 60% and improved accuracy significantly.',
    author: 'Emily Rodriguez',
    role: 'Operations Manager',
    company: 'DataSystems Ltd.',
  },
  {
    quote: 'The enterprise application developed by Pacebyte has been a game-changer for our business. Their attention to detail and scalable architecture is impressive.',
    author: 'David Thompson',
    role: 'CEO',
    company: 'Enterprise Solutions',
  },
  {
    quote: 'Pacebyte\'s DevOps implementation streamlined our deployment process. We now deploy 5x faster with zero downtime. Outstanding work!',
    author: 'Lisa Wang',
    role: 'Engineering Lead',
    company: 'CloudFirst',
  },
  {
    quote: 'Their solution architecture consulting helped us make critical technology decisions. Pacebyte\'s expertise saved us months of trial and error.',
    author: 'Robert Martinez',
    role: 'VP of Engineering',
    company: 'InnovateTech',
  },
];

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Stats Section */}
      <section className="py-20 bg-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-base text-gray-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-dark-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white mb-12 leading-tight">
              <KineticText intensity={0.2} enableCursor={true}>
                Why Choose Pacebyte?
              </KineticText>
            </div>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
                className="bg-dark-elevated rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-dark-border"
              >
                <div className="text-5xl mb-4">{prop.icon}</div>
                <h3 className="text-xl font-extrabold text-white mb-3">{prop.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">{prop.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How We Work Process Section */}
      <section className="py-20 bg-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white mb-4 leading-tight">
              <KineticText intensity={0.2} enableCursor={true}>
                How We Work
              </KineticText>
            </div>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
              We adopt agile methodologies, seamlessly adapting to your organizational structure and processes while enhancing workflows where valuable.
            </p>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                step: '01',
                title: 'Assess where you are',
                description: 'Understand your current processes and structure, identify areas for enhancement.',
                icon: '🔍',
              },
              {
                step: '02',
                title: 'Choose a technology path',
                description: 'Align with your existing workflows, recommend improvements where beneficial.',
                icon: '🛤️',
              },
              {
                step: '03',
                title: 'Prepare for the journey',
                description: 'Adapt our agile methodologies to your organization, integrate seamlessly with your existing processes.',
                icon: '📋',
              },
              {
                step: '04',
                title: 'Build & Deploy',
                description: 'Iterative development with continuous feedback, flexible to adjust based on your needs.',
                icon: '🚀',
              },
              {
                step: '05',
                title: 'Operate & Support',
                description: 'Ongoing support aligned with your operational structure, continuous workflow enhancement.',
                icon: '⚙️',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-dark-elevated rounded-2xl p-6 border border-dark-border hover:border-accent-cyan/50 transition-all text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-2xl font-extrabold text-accent-cyan mb-2">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white mb-12 leading-tight">
              <KineticText intensity={0.2} enableCursor={true}>
                Our Services
              </KineticText>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                benefits={service.benefits}
                process={service.process}
                idealClient={service.idealClient}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal direction="up">
            <div className="text-center space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services">
                  <InteractiveButton size="lg" variant="primary">
                    View All Services
                  </InteractiveButton>
                </Link>
                <Link to="/contact">
                  <InteractiveButton size="lg" variant="outline">
                    Get Project Estimate
                  </InteractiveButton>
                </Link>
                <Link to="/portfolio">
                  <InteractiveButton size="lg" variant="outline">
                    View Portfolio
                  </InteractiveButton>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white mb-12 leading-tight">
              <KineticText intensity={0.2} enableCursor={true}>
                Testimonials
              </KineticText>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-cyan/20 via-accent-purple/20 to-accent-green/20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh-strong opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollSection parallax={true} parallaxSpeed={0.2}>
            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              <KineticText intensity={0.2} enableCursor={true}>
                Ready to Accelerate Your Digital Future?
              </KineticText>
            </div>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how we can align our expertise with your organization's structure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <InteractiveButton size="lg" variant="secondary">
                  Schedule Free Consultation
                </InteractiveButton>
              </Link>
              <Link to="/contact">
                <InteractiveButton size="lg" variant="outline">
                  Get in Touch
                </InteractiveButton>
              </Link>
            </div>
          </ScrollSection>
        </div>
      </section>
    </div>
  );
};
