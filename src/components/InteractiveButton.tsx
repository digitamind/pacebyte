import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface InteractiveButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  to?: string; // If provided, renders as Link instead of button
}

export const InteractiveButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  isLoading = false,
  to,
}: InteractiveButtonProps) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-surface disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-accent-cyan to-accent-purple text-white hover:from-accent-purple hover:to-accent-cyan focus:ring-accent-cyan shadow-lg hover:shadow-xl glow-cyan',
    secondary: 'bg-accent-purple text-white hover:bg-accent-purple/90 focus:ring-accent-purple shadow-lg hover:shadow-xl glow-purple',
    outline: 'border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 focus:ring-accent-cyan',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const motionProps = {
    whileHover: { 
      scale: disabled || isLoading ? 1 : 1.05,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
    },
    whileTap: { 
      scale: disabled || isLoading ? 1 : 0.92,
      transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const content = isLoading ? (
    <span className="flex items-center justify-center">
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Loading...
    </span>
  ) : (
    children
  );

  // If `to` prop is provided, render as Link (styled as button)
  if (to) {
    return (
      <motion.div
        {...motionProps}
        className="inline-block"
      >
        <Link
          to={to}
          className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} inline-block text-center ${disabled || isLoading ? 'pointer-events-none' : ''}`}
          aria-disabled={disabled || isLoading}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};
