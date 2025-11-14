import styles from './Footer.module.scss'
import { translate } from '@/i18n/utils'

export default function Footer({ language = 'es', theme = 'default' }) {
    return (
        <footer className={`${styles.footer} theme--${theme}`} role="contentinfo">
            <small>{translate('© 2025 Quantawood. Todos los derechos reservados.', language)}</small>
        </footer>
    )
}