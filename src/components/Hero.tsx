import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { InteractiveButton } from './InteractiveButton';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { GradientMesh } from './GradientMesh';
import { KineticText } from './KineticText';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

export const Hero = ({
  title = 'Technology Solutions at the Speed of Innovation',
  subtitle,
  description = 'We accelerate your journey into the digital future, delivering byte-sized solutions that keep you ahead of the competition.',
  ctaText = 'Get Started',
  ctaLink = '/contact',
}: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-base"
    >
      <GradientMesh intensity="strong" />
      
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="text-accent-cyan font-bold text-sm uppercase tracking-widest mb-6"
            >
              {subtitle}
            </motion.p>
          )}

          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
            <KineticText intensity={0.3} enableCursor={true}>
              {title}
            </KineticText>
          </div>

          <motion.p
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
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
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent-cyan/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-accent-cyan rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
