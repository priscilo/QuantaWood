import styles from './Header.module.scss'
import { translate } from '@/i18n/utils'

export default function Header({ language = 'es', theme = 'default' }) {
    return (
        <header className={`${styles.header} theme--${theme}`} role="banner">
            <h1>{translate('Quantawood', language)}</h1>
            <p>{translate('Plataforma de gestión y análisis de madera', language)}</p>
        </header>
    )
}