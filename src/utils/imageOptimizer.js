/**
 * Image Optimization Utilities
 * Helper functions for optimizing and loading images efficiently
 */

/**
 * Convert image to webp format for better performance
 * @param {string} src - Original image source
 * @returns {string} - Optimized image source
 */
export function optimizeImage(src) {
  // In production, you might want to use a service like Cloudinary or Imgix
  // For now, we'll just return the original source
  return src;
}

/**
 * Generate responsive image sources
 * @param {string} baseSrc - Base image path
 * @param {Array} sizes - Array of size descriptors
 * @returns {Array} - Array of responsive image sources
 */
export function generateResponsiveImages(baseSrc, sizes = ['300w', '600w', '1200w']) {
  return sizes.map(size => ({
    src: `${baseSrc}?w=${size.replace('w', '')}`,
    size: size
  }));
}

/**
 * Preload critical images
 * @param {Array} imageUrls - Array of image URLs to preload
 */
export function preloadImages(imageUrls) {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Lazy load images with intersection observer
 * @param {string} selector - CSS selector for images to lazy load
 */
export function lazyLoadImages(selector = 'img[data-src]') {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll(selector).forEach(img => {
    imageObserver.observe(img);
  });
}

/**
 * Compress image data URL
 * @param {string} dataUrl - Data URL of image
 * @param {number} quality - Quality factor (0-1)
 * @returns {Promise<string>} - Compressed data URL
 */
export function compressImageData(dataUrl, quality = 0.8) {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    
    img.src = dataUrl;
  });
}