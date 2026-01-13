import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
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

  useEffect(() => {
    // Ensure route changes start at the top of the page
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navigation />
      <AnimatePresence mode="wait">
        <main key={location.pathname} className="flex-grow">
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
            <ErrorBoundary>
              <Routes location={location}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
                <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </main>
      </AnimatePresence>
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
