/**
 * Performance Monitoring Utilities
 * Tools for monitoring and improving application performance
 */

/**
 * Measure component render performance
 * @param {string} componentName - Name of component being measured
 * @returns {Function} - Stop timing function
 */
export function measureRenderPerformance(componentName) {
  const startTime = performance.now();
  
  return () => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    // Log performance in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`%c${componentName} rendered in ${renderTime.toFixed(2)}ms`, 
        'color: #4CAF50; font-weight: bold;');
    }
    
    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && typeof gtag !== 'undefined') {
      gtag('event', 'render_time', {
        'event_category': 'performance',
        'event_label': componentName,
        'value': Math.round(renderTime)
      });
    }
    
    return renderTime;
  };
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Limit in milliseconds
 * @returns {Function} - Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Memory usage monitoring
 * @returns {Object} - Memory usage information
 */
export function getMemoryUsage() {
  if ('memory' in performance) {
    return {
      used: Math.round(performance.memory.usedJSHeapSize / 1048576),
      total: Math.round(performance.memory.totalJSHeapSize / 1048576),
      limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576)
    };
  }
  return null;
}

/**
 * Monitor FPS (Frames Per Second)
 * @param {Function} callback - Callback to receive FPS data
 * @param {number} interval - Interval in milliseconds
 * @returns {Function} - Stop monitoring function
 */
export function monitorFPS(callback, interval = 1000) {
  let frameCount = 0;
  let lastTime = performance.now();
  let running = true;

  function loop() {
    if (!running) return;
    
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= interval) {
      const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
      callback(fps);
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  return () => {
    running = false;
  };
}