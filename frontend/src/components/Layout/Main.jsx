import styles from './Main.module.scss'

export default function Main({ children, theme = 'default' }) {
    return (
        <main className={`${styles.main} theme--${theme}`} role="main">
            {children || <p className={styles.fallback}>Contenido no disponible</p>}
        </main>
    )
}