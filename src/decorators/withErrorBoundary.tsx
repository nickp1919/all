import React, { Component, ComponentType, ErrorInfo } from 'react';

interface IErrComponentProps {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}
export interface IErrorBoundaryState extends IErrComponentProps {
  hasError: boolean;
}

const withErrorBoundary = (
  WrappedComponent: ComponentType<any>,
  ErrComponent: ComponentType<IErrComponentProps>
) =>
  class ErrorBoundary<T extends {}> extends Component<T, IErrorBoundaryState> {
    constructor(props: T) {
      super(props);
      this.state = {
        error: null,
        errorInfo: null,
        hasError: false,
      };
    }

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      this.setState({
        error,
        errorInfo,
      });
    }

    render() {
      const { hasError, ...errorInfo } = this.state;

      if (hasError) {
        return <ErrComponent {...errorInfo} />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };

export default withErrorBoundary;
