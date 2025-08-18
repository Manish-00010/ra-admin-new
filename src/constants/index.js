/**
 * Application Constants
 */

// Application Info
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'RA Admin Dashboard';
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';
export const API_TIMEOUT = 30000; // 30 seconds

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_PREFERENCES: 'userPreferences',
  THEME: 'theme',
  SIDEBAR_STATE: 'sidebarState',
  LANGUAGE: 'language',
  LAYOUT_CONFIG: 'layoutConfig'
};

// Theme Configuration
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

// Layout Configuration
export const LAYOUT_TYPES = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
  COLLAPSED: 'collapsed'
};

// Product View Types
export const PRODUCT_VIEW_TYPES = {
  GRID: 'grid',
  LIST: 'list'
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 25, 50, 100]
};

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_DOCUMENTS: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
};

// Chart Colors
export const CHART_COLORS = {
  PRIMARY: '#6366f1',
  SECONDARY: '#64748b',
  SUCCESS: '#10b981',
  DANGER: '#ef4444',
  WARNING: '#f59e0b',
  INFO: '#3b82f6',
  LIGHT: '#f8fafc',
  DARK: '#1e293b'
};

// Breakpoints
export const BREAKPOINTS = {
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1400
};

// Routes
export const ROUTES = {
  DASHBOARD: {
    AMAZON: '/Amazon/Dashboard',
    D2C: '/D2C/Dashboard'
  },
  PRODUCTS: {
    AMAZON: '/Amazon/Products',
    D2C: '/D2C/Products'
  },
  BRANDS: {
    AMAZON: '/Amazon/Brands',
    D2C: '/D2C/Brands'
  },
  ORDERS: {
    AMAZON: '/Amazon/Orders',
    D2C: '/D2C/Orders'
  },
  REPORTS: {
    AMAZON: '/Amazon/Reports',
    D2C: '/D2C/Reports'
  }
};

// Status Colors
export const STATUS_COLORS = {
  ACTIVE: 'success',
  INACTIVE: 'secondary',
  PENDING: 'warning',
  CANCELLED: 'danger',
  COMPLETED: 'info'
};

export default {
  APP_NAME,
  APP_VERSION,
  API_BASE_URL,
  API_TIMEOUT,
  STORAGE_KEYS,
  THEMES,
  LAYOUT_TYPES,
  PRODUCT_VIEW_TYPES,
  PAGINATION,
  FILE_UPLOAD,
  CHART_COLORS,
  BREAKPOINTS,
  ROUTES,
  STATUS_COLORS
};
