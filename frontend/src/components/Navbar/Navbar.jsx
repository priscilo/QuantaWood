import React from 'react';
import PropTypes from 'prop-types';
import { navItems } from './nav.config';
import styles from './Navbar.module.scss';

export default function Navbar({ language = 'en', theme = 'default' }) {
    const items = navItems[language] || navItems['en'];

    if (!items || !Array.isArray(items)) {
        console.warn('[Navbar] No navigation items found for language:', language);
        return <nav className={styles.nav}>⚠️ Navigation unavailable</nav>;
    }

    return (
        <nav className={`${styles.nav} ${styles[theme]}`} aria-label="Main navigation">
            <ul>
                {items.map(({ label, path }, i) => (
                    <li key={i}>
                        <a href={path}>{label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Navbar.propTypes = {
    language: PropTypes.string,
    theme: PropTypes.string,
};