import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, lazy, Suspense } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { ScrollProgress } from './components/ScrollProgress';
import { SkeletonLoader } from './components/SkeletonLoader';
import './styles/globals.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Portfolio = lazy(() => import('./pages/Portfolio').then(module => ({ default: module.Portfolio })));

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
              <div className="min-h-screen flex items-center justify-center">
                <SkeletonLoader variant="rectangular" width="200px" height="40px" />
              </div>
            }
          >
            <Routes location={location}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </Suspense>
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
