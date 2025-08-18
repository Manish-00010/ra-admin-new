import { useEffect } from 'react';

/**
 * Custom hook to ensure the body always has an 'active' class
 * This hook can be used in any React component to maintain the active state
 */
export const useActiveBody = () => {
  useEffect(() => {
    const addActiveClass = () => {
      document.body.classList.add('active');
    };

    // Add the class immediately
    addActiveClass();

    // Create a MutationObserver to watch for class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (!document.body.classList.contains('active')) {
            addActiveClass();
          }
        }
      });
    });

    // Start observing the body element
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Backup interval to ensure class persistence
    const interval = setInterval(() => {
      if (!document.body.classList.contains('active')) {
        addActiveClass();
      }
    }, 2000);

    // Cleanup function
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);
};

export default useActiveBody;
