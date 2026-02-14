import type { ReactNode } from 'react';
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
  { name: 'X (Twitter)', href: 'https://x.com', icon: 'x' },
  { name: 'GitHub', href: 'https://github.com', icon: 'github' },
];

const socialIcons: Record<string, ReactNode> = {
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  x: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
};

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
      <div className="container-content py-12">
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
            <p className="text-sm text-gray-300 mb-4">
              Technology solutions at the speed of innovation. Accelerating your journey into the digital future.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:contact@pacebyte.com"
                className="text-sm text-gray-300 hover:text-accent-cyan transition-colors flex items-center space-x-2"
              >
                <span>✉️</span>
                <span>contact@pacebyte.com</span>
              </a>
              <a
                href="tel:+2348081960633"
                className="text-sm text-gray-300 hover:text-accent-cyan transition-colors flex items-center space-x-2"
              >
                <span>📞</span>
                <span>+234 (0) 808 196 0633</span>
              </a>
            </div>
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
                    <span className="text-sm text-gray-300">{service.label}</span>
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
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-elevated hover:bg-accent-cyan transition-colors border border-dark-border text-gray-300 hover:text-dark-base"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="sr-only">{social.name}</span>
                  {socialIcons[social.icon]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Pacebyte. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 px-4 py-2 text-sm text-gray-300 hover:text-accent-cyan transition-colors flex items-center space-x-2"
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
