import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'primary', 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    small: 'spinner-sm',
    medium: 'spinner-md',
    large: 'spinner-lg'
  };

  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    danger: 'text-danger',
    warning: 'text-warning',
    info: 'text-info'
  };

  const spinnerContent = (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className={`spinner-border ${colorClasses[color]} ${sizeClasses[size]}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      {text && (
        <div className={`mt-3 ${colorClasses[color]} fw-medium`}>
          {text}
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="loading-overlay">
        <div className="loading-content">
          {spinnerContent}
        </div>
      </div>
    );
  }

  return (
    <div className="loading-spinner-container p-4">
      {spinnerContent}
    </div>
  );
};

export default LoadingSpinner;
