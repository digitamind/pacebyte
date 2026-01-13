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
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              About Pacebyte
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              In the bustling world of technology and innovation, where the pace of change is relentless, 
              Pacebyte stands out with a commitment to pushing the boundaries of what's possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <ScrollReveal direction="up" delay={0.1}>
              <p>
                Pacebyte is not just a name; it's a commitment to pushing the boundaries of what's possible 
                in the tech industry. When you think of "pace," you think of speed, progress, and forward momentum. 
                Pacebyte signifies the rapid advancement and evolution that define the technology landscape.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p>
                At Pacebyte, we're not content with the status quo. We thrive on challenges, adapt quickly to 
                industry shifts, and keep our finger on the pulse of emerging trends. Our team of brilliant 
                minds is always in motion, tirelessly working to develop the next generation of innovative solutions.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p>
                The "byte" in Pacebyte represents the core of our business—data, information, and digital 
                transformation. It symbolizes our dedication to harnessing the power of technology to transform 
                data into meaningful insights, creating solutions that are not only efficient but also impactful.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Journey
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-0.5"></div>
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
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <div className="text-primary-600 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 -translate-x-1/2"></div>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Values
            </h2>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Technology Stack
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We work with a wide range of modern technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {techStackCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.name}</h3>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Pacebyte?
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-400 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg text-primary-100">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
