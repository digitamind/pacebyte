import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, lazy, Suspense, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { PageTransition, TransitionDirection } from './components/PageTransition';
import { ScrollProgress } from './components/ScrollProgress';
import { SkeletonLoader } from './components/SkeletonLoader';
import { ErrorBoundary } from './components/ErrorBoundary';
import './styles/globals.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Portfolio = lazy(() => import('./pages/Portfolio').then(module => ({ default: module.Portfolio })));
const FAQ = lazy(() => import('./pages/FAQ').then(module => ({ default: module.FAQ })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

function AppContent() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const pathnameHistoryRef = useRef<string[]>([]);

  // Compute direction synchronously during render
  const currentPath = location.pathname;
  const history = pathnameHistoryRef.current;

  // Determine direction based on navigation type and history
  let transitionDirection: TransitionDirection = 'initial';

  if (navigationType === 'PUSH') {
    // New page navigation - always forward
    transitionDirection = 'forward';
    // Add to history stack (will be committed in useEffect)
    pathnameHistoryRef.current = [...history, currentPath];
  } else if (navigationType === 'POP') {
    // Browser back/forward button
    const currentIndex = history.indexOf(currentPath);
    const lastIndex = history.length - 1;

    if (currentIndex === -1) {
      // Path not in history (e.g., direct navigation or refresh)
      transitionDirection = 'initial';
      pathnameHistoryRef.current = [currentPath];
    } else if (currentIndex < lastIndex) {
      // Going back in history
      transitionDirection = 'backward';
      // Trim history to current position
      pathnameHistoryRef.current = history.slice(0, currentIndex + 1);
    } else if (currentIndex > lastIndex) {
      // Going forward in history (shouldn't happen, but handle it)
      transitionDirection = 'forward';
      pathnameHistoryRef.current = history.slice(0, currentIndex + 1);
    } else {
      // Same position
      transitionDirection = 'initial';
    }
  } else {
    // REPLACE - no transition
    transitionDirection = 'initial';
    // Update last entry in history
    if (history.length > 0) {
      pathnameHistoryRef.current = [...history.slice(0, -1), currentPath];
    } else {
      pathnameHistoryRef.current = [currentPath];
    }
  }

  useEffect(() => {
    // Only scroll to top if there's no hash (hash-based scrolling is handled by individual pages)
    // Wait a bit to ensure page transition has started
    if (!location.hash) {
      const timeoutId = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navigation />
      <main className="flex-grow">
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center bg-dark-base">
                <div className="text-center">
                  <SkeletonLoader variant="circular" width="60px" height="60px" className="mx-auto mb-4" />
                  <SkeletonLoader variant="rectangular" width="200px" height="24px" className="mx-auto mb-2" />
                  <SkeletonLoader variant="rectangular" width="150px" height="20px" className="mx-auto" />
                </div>
              </div>
            }
          >
            <AnimatePresence mode="wait" initial={false}>
              <PageTransition key={location.pathname} direction={transitionDirection}>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </PageTransition>
            </AnimatePresence>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
