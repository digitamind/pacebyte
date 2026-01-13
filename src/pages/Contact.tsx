import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollReveal';
import { InteractiveButton } from '../components/InteractiveButton';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { FormField } from '../components/FormField';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const contactInfo = [
  {
    title: 'Email',
    value: 'contact@pacebyte.com',
    icon: '✉️',
  },
  {
    title: 'Phone',
    value: '+234 (0) 000 000 0000',
    icon: '📞',
  },
  {
    title: 'Office',
    value: 'Remote-first (Global)',
    icon: '📍',
  },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      void data;
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-dark-base relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 text-center leading-tight">
              Get in Touch
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Send us a message</h2>
              <p className="text-gray-300 mb-6">
                Choose how you'd like to reach us, or fill out the form below
              </p>
              
              {/* Quick Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <Link to="#form" className="block">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 bg-dark-elevated rounded-lg border border-dark-border hover:border-accent-cyan/50 transition-all text-center"
                  >
                    <div className="text-2xl mb-2">📧</div>
                    <div className="text-sm font-medium text-white">General Inquiry</div>
                  </motion.div>
                </Link>
                <Link to="#form" className="block">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 bg-dark-elevated rounded-lg border border-dark-border hover:border-accent-cyan/50 transition-all text-center"
                  >
                    <div className="text-2xl mb-2">📅</div>
                    <div className="text-sm font-medium text-white">Schedule Call</div>
                  </motion.div>
                </Link>
                <Link to="#form" className="block">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 bg-dark-elevated rounded-lg border border-dark-border hover:border-accent-cyan/50 transition-all text-center"
                  >
                    <div className="text-2xl mb-2">💰</div>
                    <div className="text-sm font-medium text-white">Get Estimate</div>
                  </motion.div>
                </Link>
              </div>

              <form id="form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                  error={errors.name?.message}
                />

                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  error={errors.email?.message}
                />

                <FormField
                  id="company"
                  label="Company"
                  type="text"
                  placeholder="Your company name"
                  {...register('company')}
                />

                <FormField
                  id="message"
                  label="Message"
                  isTextarea={true}
                  textareaProps={{
                    rows: 6,
                    placeholder: 'Tell us about your project...',
                    ...register('message', { required: 'Message is required' }),
                  }}
                  error={errors.message?.message}
                />

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                  >
                    ✓ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                  >
                    ✗ Something went wrong. Please try again.
                  </motion.div>
                )}

                <InteractiveButton
                  type="submit"
                  size="lg"
                  variant="primary"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full"
                >
                  Send Message
                </InteractiveButton>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="space-y-10"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Contact Information</h2>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-50px' }}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="flex items-start space-x-4 p-6 bg-dark-elevated rounded-2xl hover:bg-dark-base transition-colors border border-dark-border"
                  >
                    <div className="text-3xl text-accent-cyan">{info.icon}</div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{info.title}</h3>
                      <p className="text-base text-gray-200">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-xl border border-accent-cyan/30"
              >
                <h3 className="font-bold text-lg mb-4 text-white">Business Hours</h3>
                <div className="space-y-2">
                  <p className="text-gray-200">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-200">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-400">Sunday: Closed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
