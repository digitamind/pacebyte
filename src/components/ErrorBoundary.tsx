import { Component, ReactNode, ErrorInfo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InteractiveButton } from './InteractiveButton';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });

    // In production, you would send this to an error reporting service
    // Example: Sentry.captureException(error, { contexts: { react: { componentStack: errorInfo.componentStack } } });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-dark-base flex items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl w-full"
          >
            <div className="bg-dark-elevated rounded-3xl p-8 md:p-12 border border-dark-border shadow-2xl relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-accent-purple/10 to-accent-green/10 opacity-50" />
              
              <div className="relative z-10">
                {/* Error Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center border-2 border-red-500/30"
                >
                  <svg
                    className="w-10 h-10 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </motion.div>

                {/* Error Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center mb-8"
                >
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Something Went Wrong
                  </h1>
                  <p className="text-lg text-gray-300 mb-2">
                    We encountered an unexpected error while processing your request.
                  </p>
                  <p className="text-base text-gray-400">
                    Our team has been notified and is working to resolve this issue.
                  </p>
                </motion.div>

                {/* Error Details (Development Only) */}
                {import.meta.env.DEV && this.state.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-8 p-4 bg-dark-surface rounded-lg border border-red-500/30 overflow-auto max-h-64"
                  >
                    <p className="text-sm font-mono text-red-400 mb-2">
                      {this.state.error.toString()}
                    </p>
                    {this.state.errorInfo && (
                      <pre className="text-xs text-gray-400 font-mono whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )}
                  </motion.div>
                )}

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <InteractiveButton
                    onClick={this.handleReset}
                    variant="primary"
                    size="lg"
                  >
                    Try Again
                  </InteractiveButton>
                  <Link to="/">
                    <InteractiveButton variant="outline" size="lg">
                      Go Home
                    </InteractiveButton>
                  </Link>
                </motion.div>

                {/* Support Information */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8 pt-8 border-t border-dark-border text-center"
                >
                  <p className="text-sm text-gray-400 mb-2">
                    Need immediate assistance?
                  </p>
                  <Link
                    to="/contact"
                    className="text-accent-cyan hover:text-accent-purple transition-colors font-medium"
                  >
                    Contact Support →
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-10 left-10 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-40 h-40 bg-accent-purple/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}
