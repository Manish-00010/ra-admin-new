/**
 * Body Active Class Manager
 * Utility functions to manage the 'active' class on the body element
 */

class BodyActiveManager {
  constructor() {
    this.observer = null;
    this.interval = null;
    this.isInitialized = false;
  }

  /**
   * Initialize the body active class manager
   */
  init() {
    if (this.isInitialized) return;
    
    this.addActiveClass();
    this.setupObserver();
    this.setupInterval();
    this.setupEventListeners();
    
    this.isInitialized = true;
    console.log('BodyActiveManager initialized - body will always have "active" class');
  }

  /**
   * Add active class to body
   */
  addActiveClass() {
    if (document.body) {
      document.body.classList.add('active');
    }
  }

  /**
   * Setup MutationObserver to watch for class changes
   */
  setupObserver() {
    if (!window.MutationObserver || this.observer) return;

    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (!document.body.classList.contains('active')) {
            this.addActiveClass();
          }
        }
      });
    });

    if (document.body) {
      this.observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
      });
    }
  }

  /**
   * Setup interval as backup to ensure class persistence
   */
  setupInterval() {
    if (this.interval) return;

    this.interval = setInterval(() => {
      if (!document.body.classList.contains('active')) {
        this.addActiveClass();
      }
    }, 3000); // Check every 3 seconds
  }

  /**
   * Setup event listeners for page state changes
   */
  setupEventListeners() {
    // On DOM content loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.addActiveClass());
    }

    // On window load
    window.addEventListener('load', () => this.addActiveClass());

    // On focus (when user returns to tab)
    window.addEventListener('focus', () => this.addActiveClass());

    // For SPA navigation
    if (window.history && window.history.pushState) {
      const originalPushState = window.history.pushState;
      window.history.pushState = (...args) => {
        originalPushState.apply(window.history, args);
        setTimeout(() => this.addActiveClass(), 100);
      };

      window.addEventListener('popstate', () => {
        setTimeout(() => this.addActiveClass(), 100);
      });
    }
  }

  /**
   * Force add active class (can be called manually)
   */
  forceActive() {
    this.addActiveClass();
  }

  /**
   * Destroy the manager and clean up
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }

    this.isInitialized = false;
  }

  /**
   * Check if body has active class
   */
  isActive() {
    return document.body && document.body.classList.contains('active');
  }
}

// Create a global instance
const bodyActiveManager = new BodyActiveManager();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => bodyActiveManager.init());
} else {
  bodyActiveManager.init();
}

// Make it globally available
window.BodyActiveManager = bodyActiveManager;

export default bodyActiveManager;
