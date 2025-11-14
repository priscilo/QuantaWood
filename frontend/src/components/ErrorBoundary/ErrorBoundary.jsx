import React, { Component } from 'react';
import fallbackMessages from './fallback.config';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.error('[ErrorBoundary]', error);
        return { hasError: true };
    }

    render() {
        const { language = 'en' } = this.props;
        const message = fallbackMessages[language] || fallbackMessages['en'];

        if (this.state.hasError) {
            return <div role="alert">⚠️ {message}</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;