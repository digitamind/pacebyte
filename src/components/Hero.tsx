import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InteractiveButton } from './InteractiveButton';
import { useParallax } from '../hooks/useParallax';
import { fadeInUp, staggerContainer } from '../utils/animations';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const Hero = ({
  title = 'Technology Solutions at the Speed of Innovation',
  subtitle = 'Pacebyte',
  description = 'We accelerate your journey into the digital future, delivering byte-sized solutions that keep you ahead of the competition.',
  ctaText = 'Get Started',
  ctaLink = '/contact',
}: HeroProps) => {
  const parallaxRef = useParallax(0.3);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          ref={parallaxRef}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(24, 144, 255, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(24, 144, 255, 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            {subtitle}
          </motion.p>

          <motion.h1
            variants={{
              initial: { opacity: 0, y: 40, scale: 0.95 },
              animate: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to={ctaLink}>
              <InteractiveButton size="lg" variant="primary">
                {ctaText}
              </InteractiveButton>
            </Link>
            <Link to="/services">
              <InteractiveButton size="lg" variant="outline">
                Our Services
              </InteractiveButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
