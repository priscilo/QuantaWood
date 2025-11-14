// components/ErrorBoundary.tsx
import { Component, ReactNode } from 'react';
import { getFallbackMessage } from '../config/fallback.config';

interface Props {
    children: ReactNode;
    language: string;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: any) {
        console.error('[ErrorBoundary]', error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div className="error">{getFallbackMessage(this.props.language)}</div>;
        }

        return this.props.children;
    }
}