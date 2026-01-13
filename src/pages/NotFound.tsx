import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InteractiveButton } from '../components/InteractiveButton';
import { GradientMesh } from '../components/GradientMesh';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-dark-base relative overflow-hidden">
      <GradientMesh intensity="strong" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Animated 404 Number */}
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <motion.h1
              className="text-8xl md:text-9xl lg:text-[12rem] font-extrabold bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-green bg-clip-text text-transparent leading-none"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              404
            </motion.h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              The page you're looking for seems to have vanished into the digital void.
              <br />
              Let's get you back on track.
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="mb-12 flex justify-center gap-4"
          >
            <motion.div
              className="w-2 h-2 bg-accent-cyan rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="w-2 h-2 bg-accent-purple rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.3,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="w-2 h-2 bg-accent-green rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.6,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link to="/">
              <InteractiveButton size="lg" variant="primary">
                Go Home
              </InteractiveButton>
            </Link>
            <Link to="/contact">
              <InteractiveButton size="lg" variant="outline">
                Contact Us
              </InteractiveButton>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="border-t border-dark-border pt-8"
          >
            <p className="text-sm text-gray-400 mb-4">Or explore our site:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/services', label: 'Services' },
                { path: '/portfolio', label: 'Portfolio' },
              ].map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-accent-cyan hover:text-accent-purple transition-colors font-medium text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent-purple/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
};
