import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console or error reporting service
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <Card className="text-center" style={{ maxWidth: '500px' }}>
            <CardBody className="p-4">
              <div className="mb-3">
                <i className="ti ti-alert-triangle text-danger" style={{ fontSize: '4rem' }}></i>
              </div>
              <h4 className="text-danger mb-3">Something went wrong!</h4>
              <p className="text-muted mb-4">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <div className="d-flex gap-2 justify-content-center">
                <Button color="primary" onClick={this.handleRetry}>
                  Try Again
                </Button>
                <Button color="secondary" onClick={() => window.location.reload()}>
                  Refresh Page
                </Button>
              </div>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-4 text-start">
                  <summary className="text-danger cursor-pointer">Error Details (Dev Mode)</summary>
                  <pre className="text-danger mt-2 small">
                    {this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </CardBody>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
