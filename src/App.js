import React, { Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './Layout/Layout';
import Display from './components/Display';
import Slidebar from './components/SlideBar';
import ErrorBoundary from './components/common/ErrorBoundary';
import { LoadingSpinner } from './components/common/Loaders';

/**
 * Main App Component
 * Root component with providers and error boundaries
 */
export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <LoadingSpinner size="lg" color="white" />
          </div>
        }>
          <Layout>
            <Slidebar />
            <Display />
          </Layout>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
