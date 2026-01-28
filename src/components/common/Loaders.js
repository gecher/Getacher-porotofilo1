import React, { useState } from 'react';

/**
 * Loading Spinner Component
 * Displays a customizable loading spinner
 */
export function LoadingSpinner({ size = 'md', color = 'blue', className = '' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'text-blue-500',
    white: 'text-white',
    gray: 'text-gray-500',
    green: 'text-green-500',
    red: 'text-red-500'
  };

  return (
    <div className={`inline-block ${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <svg className="animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  );
}

/**
 * Skeleton Loader Component
 * Displays skeleton loading states
 */
export function Skeleton({ className = '', type = 'text' }) {
  const baseClasses = 'animate-pulse bg-gray-700 rounded';
  
  const typeClasses = {
    text: 'h-4',
    circle: 'rounded-full',
    card: 'h-32',
    avatar: 'w-12 h-12 rounded-full'
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${className}`} />
  );
}

/**
 * Lazy Image Component
 * Handles image loading with placeholders
 */
export function LazyImage({ src, alt, className = '', placeholder, ...props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse rounded" />
      )}
      
      {hasError ? (
        <div className="bg-gray-800 text-gray-500 rounded flex items-center justify-center h-full">
          Failed to load image
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          {...props}
        />
      )}
    </div>
  );
}