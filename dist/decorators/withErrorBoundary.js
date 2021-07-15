import React, { Component } from 'react';
const withErrorBoundary = (WrappedComponent, ErrComponent) => class ErrorBoundary extends Component {
    constructor(props) {
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
    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }
    render() {
        const { hasError, ...errorInfo } = this.state;
        if (hasError) {
            return React.createElement(ErrComponent, { ...errorInfo });
        }
        return React.createElement(WrappedComponent, { ...this.props });
    }
};
export default withErrorBoundary;
