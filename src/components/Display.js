import React, { lazy, Suspense } from 'react';
import "../App.css";
import { LoadingSpinner } from './common/Loaders';

// Lazy load components for better performance
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Resume = lazy(() => import('./Resume'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));

/**
 * Display Component
 * Main content wrapper with lazy-loaded sections
 */
export default function Display() {
  const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <LoadingSpinner size="lg" color="white" />
        <p className="mt-4 text-gray-400">Loading content...</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Suspense fallback={<LoadingFallback />}>        <Home />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}
