import { useState, useEffect } from 'react';

/**
 * Custom hook for media query detection
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the media query matches
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

/**
 * Hook to detect mobile devices
 * @returns {boolean} - True if device is mobile
 */
export function useIsMobile() {
  return useMediaQuery('(max-width: 768px)');
}

/**
 * Hook to detect tablet devices
 * @returns {boolean} - True if device is tablet
 */
export function useIsTablet() {
  return useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
}

/**
 * Hook to detect desktop devices
 * @returns {boolean} - True if device is desktop
 */
export function useIsDesktop() {
  return useMediaQuery('(min-width: 1025px)');
}