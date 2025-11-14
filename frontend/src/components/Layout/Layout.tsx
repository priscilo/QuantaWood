// components/Layout.tsx
import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './Layout.scss';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    if (!children) {
        console.error('[Layout] No children provided');
    }

    return (
        <div className="layout">
            <header><Navbar /></header>
            <main>{children || <div className="layout__fallback">Contenido no disponible</div>}</main>
            <footer><Footer /></footer>
        </div>
    );
}