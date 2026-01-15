import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

// Map footer service labels to service page anchor IDs
const serviceAnchorMap: Record<string, string> = {
  'Enterprise Development': 'enterprise-development',
  'Fintech Solutions': 'fintech-payment-solutions',
  'Cloud & DevOps': 'cloud-infrastructure-devops',
  'AI & ML': 'ai-machine-learning',
};

const footerLinks = {
  company: [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ],
  services: [
    { label: 'Enterprise Development', anchor: serviceAnchorMap['Enterprise Development'] },
    { label: 'Fintech Solutions', anchor: serviceAnchorMap['Fintech Solutions'] },
    { label: 'Cloud & DevOps', anchor: serviceAnchorMap['Cloud & DevOps'] },
    { label: 'AI & ML', anchor: serviceAnchorMap['AI & ML'] },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', href: 'https://x.com', icon: 'twitter' },
  { name: 'GitHub', href: 'https://github.com', icon: 'github' },
];

const scrollToAndFocus = (element: HTMLElement, button: HTMLButtonElement | null) => {
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

export const Footer = () => {
  const { scrollToTop } = useSmoothScroll();

  return (
    <footer className="bg-dark-base border-t border-dark-border text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan bg-clip-text text-transparent mb-4 tracking-tighter" style={{ letterSpacing: '-0.025em' }}>
              Pacebyte
            </h3>
            <p className="text-sm text-gray-400">
              Technology solutions at the speed of innovation. Accelerating your journey into the digital future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  {service.anchor ? (
                    <Link
                      to={`/services#${service.anchor}`}
                      className="text-sm hover:text-accent-cyan transition-colors"
                      onClick={(e) => {
                        // If we're already on the services page, handle smooth scroll
                        if (window.location.pathname === '/services') {
                          e.preventDefault();
                          const element = document.getElementById(service.anchor!);
                          if (element) {
                            const button = element.querySelector('button') as HTMLButtonElement;
                            
                            // Open the category if it's closed (do this first)
                            if (button && button.getAttribute('aria-expanded') === 'false') {
                              button.click();
                              // Wait for accordion to open before scrolling
                              setTimeout(() => {
                                scrollToAndFocus(element, button);
                              }, 350);
                            } else {
                              scrollToAndFocus(element, button);
                            }
                          }
                        }
                      }}
                    >
                      {service.label}
                    </Link>
                  ) : (
                    <span className="text-sm text-gray-400">{service.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-elevated hover:bg-accent-cyan transition-colors border border-dark-border"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Pacebyte. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 px-4 py-2 text-sm text-gray-400 hover:text-accent-cyan transition-colors flex items-center space-x-2"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span>Back to top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
