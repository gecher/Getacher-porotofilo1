import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated Section Component
 * Provides consistent animations for page sections
 */
export function AnimatedSection({ 
  children, 
  className = '',
  animation = 'fadeUp',
  delay = 0,
  ...props 
}) {
  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay }
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.6, delay }
    },
    slideLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    },
    slideRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay }
    }
  };

  return (
    <motion.section
      className={className}
      initial={animations[animation].initial}
      animate={animations[animation].animate}
      transition={animations[animation].transition}
      {...props}
    >
      {children}
    </motion.section>
  );
}

/**
 * Container Component
 * Responsive container with consistent padding
 */
export function Container({ children, className = '', fluid = false, ...props }) {
  const containerClass = fluid 
    ? 'w-full px-4 sm:px-6 lg:px-8' 
    : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  return (
    <div className={`${containerClass} ${className}`} {...props}>
      {children}
    </div>
  );
}

/**
 * Grid Component
 * Responsive grid system
 */
export function Grid({ children, cols = 1, gap = 4, className = '', ...props }) {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  };

  const gapClasses = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8'
  };

  return (
    <div 
      className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Card Component
 * Reusable card with consistent styling
 */
export function Card({ children, className = '', elevated = false, ...props }) {
  const elevationClass = elevated 
    ? 'shadow-xl hover:shadow-2xl' 
    : 'shadow-lg hover:shadow-xl';

  return (
    <div 
      className={`bg-gray-800 rounded-xl p-6 transition-all duration-300 ${elevationClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}