import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
    if (!children) {
        console.warn('[Layout] No children provided');
        return <div className={styles.layout}>⚠️ No content available</div>;
    }

    return (
        <div className={styles.layout}>
            <Header />
            <main role="main">{children}</main>
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};