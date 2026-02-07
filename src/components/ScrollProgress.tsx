import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-200 z-50 origin-left"
      style={{ scaleX }}
    >
      <div className="h-full bg-gradient-to-r from-primary-500 to-primary-600" />
    </motion.div>
  );
};
