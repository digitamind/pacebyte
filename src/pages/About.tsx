import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { TechStackCard } from '../components/TechStackCard';
import { fadeInUp, staggerContainer } from '../utils/animations';

const timeline = [
  {
    year: '2014',
    title: 'Foundation',
    description: 'Pacebyte was founded with a vision to push the boundaries of what\'s possible in the tech industry.',
  },
  {
    year: '2016',
    title: 'Expansion',
    description: 'Expanded our services to include enterprise solutions and cloud infrastructure.',
  },
  {
    year: '2019',
    title: 'AI Integration',
    description: 'Launched our AI and Machine Learning division to help clients leverage intelligent automation.',
  },
  {
    year: '2024',
    title: 'Today',
    description: 'Leading digital transformation for businesses worldwide, delivering innovative solutions at the speed of progress.',
  },
];

const values = [
  {
    title: 'Innovation First',
    description: 'We thrive on challenges and adapt quickly to industry shifts, always keeping our finger on the pulse of emerging trends.',
    icon: '💡',
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our success. We build solutions tailored to your unique business needs.',
    icon: '🤝',
  },
  {
    title: 'Excellence',
    description: 'We\'re committed to delivering technology solutions that move at the speed of progress.',
    icon: '⭐',
  },
  {
    title: 'Transparency',
    description: 'Clear communication and honest partnerships are at the core of everything we do.',
    icon: '🔍',
  },
];

const whyChoose = [
  'Expert team of brilliant minds always in motion',
  'Cutting-edge solutions using latest technologies',
  'Proven track record of successful projects',
  'Comprehensive service portfolio',
  '24/7 support and maintenance',
  'Agile and responsive development approach',
];

const techStackCategories = [
  {
    name: 'Backend Frameworks',
    technologies: [
      { name: 'Java Spring Boot', icon: '☕' },
      { name: 'ASP.NET', icon: '🔷' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python Django', icon: '🐍' },
      { name: 'Python Flask', icon: '🐍' },
      { name: 'Ruby on Rails', icon: '💎' },
    ],
  },
  {
    name: 'Frontend Frameworks',
    technologies: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Vue.js', icon: '💚' },
      { name: 'Angular', icon: '🅰️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Svelte', icon: '🧡' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    technologies: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Azure', icon: '🔵' },
      { name: 'GCP', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '⚓' },
      { name: 'Terraform', icon: '🏗️' },
    ],
  },
  {
    name: 'Databases',
    technologies: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🗄️' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔴' },
      { name: 'Elasticsearch', icon: '🔍' },
      { name: 'Cassandra', icon: '📊' },
    ],
  },
  {
    name: 'Mobile Development',
    technologies: [
      { name: 'React Native', icon: '📱' },
      { name: 'Flutter', icon: '🎯' },
      { name: 'iOS (Swift)', icon: '🍎' },
      { name: 'Android (Kotlin)', icon: '🤖' },
      { name: 'Ionic', icon: '⚡' },
      { name: 'Xamarin', icon: '💜' },
    ],
  },
  {
    name: 'AI & Machine Learning',
    technologies: [
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'PyTorch', icon: '🔥' },
      { name: 'Scikit-learn', icon: '📈' },
      { name: 'OpenAI API', icon: '🤖' },
      { name: 'Hugging Face', icon: '🤗' },
      { name: 'MLflow', icon: '📊' },
    ],
  },
];

export const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-base relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 text-center leading-tight">
              About Pacebyte
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Our Story
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Pushing the boundaries of what's possible in technology
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                icon: '⚡',
                title: 'Pace',
                subtitle: 'Speed & Innovation',
                description: 'We move at the speed of progress, adapting quickly to industry shifts and emerging trends.',
                gradient: 'from-accent-cyan/20 to-accent-cyan/10',
                border: 'border-accent-cyan/30',
              },
              {
                icon: '💾',
                title: 'Byte',
                subtitle: 'Data & Technology',
                description: 'Harnessing the power of technology to transform data into meaningful, impactful insights.',
                gradient: 'from-accent-purple/20 to-accent-purple/10',
                border: 'border-accent-purple/30',
              },
              {
                icon: '🎯',
                title: 'Mission',
                subtitle: 'What We Do',
                description: 'Delivering cutting-edge solutions that keep businesses ahead of the competition.',
                gradient: 'from-accent-green/20 to-accent-green/10',
                border: 'border-accent-green/30',
              },
              {
                icon: '🚀',
                title: 'Vision',
                subtitle: 'Where We\'re Going',
                description: 'Leading the digital revolution, one innovative solution at a time.',
                gradient: 'from-accent-cyan/20 to-accent-purple/20',
                border: 'border-accent-cyan/30',
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-6 border ${card.border} h-full flex flex-col`}
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-extrabold text-white mb-1">{card.title}</h3>
                <p className="text-sm text-accent-cyan font-semibold mb-3">{card.subtitle}</p>
                <p className="text-sm text-gray-200 leading-relaxed flex-grow">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-dark-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-12 text-center leading-tight">
              Our Journey
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-cyan/30 transform md:-translate-x-0.5"></div>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative mb-12 flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-dark-elevated rounded-lg shadow-lg p-6 border border-dark-border">
                      <div className="text-accent-cyan font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-200">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-accent-cyan rounded-full border-4 border-dark-base shadow-lg transform md:-translate-x-1/2 -translate-x-1/2"></div>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-12 text-center leading-tight">
              Our Values
            </h2>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center p-6 rounded-2xl bg-dark-elevated border border-dark-border hover:border-accent-cyan/50 transition-colors"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-extrabold text-white mb-3">{value.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-dark-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-12 text-center leading-tight">
              Our Technology Stack
            </h2>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-10"
          >
            {techStackCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={fadeInUp}
              >
                <h3 className="text-xl font-extrabold text-white mb-6">{category.name}</h3>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: '-50px' }}
                  className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                  {category.technologies.map((tech, techIndex) => (
                    <TechStackCard
                      key={techIndex}
                      name={tech.name}
                      category={category.name}
                      icon={tech.icon}
                      index={catIndex * 10 + techIndex}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gradient-to-r from-accent-cyan/20 via-accent-purple/20 to-accent-green/20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh-strong opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-12 text-center leading-tight">
              Why Choose Pacebyte?
            </h2>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ x: 8 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-accent-cyan rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-dark-base" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base text-gray-200 font-medium">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
