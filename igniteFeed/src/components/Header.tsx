import { useTheme } from '../components/ThemeContext'; // Importando o contexto de tema
import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    const { theme, toggleTheme } = useTheme(); // Pegando o tema e a função para alternar o tema

    const headerTheme = theme === 'dark' ? styles.headerDark : styles.headerLight;

    return (
        <header className={`${styles.header} ${headerTheme}`}>
            <img src={igniteLogo} alt="Logotipo ignite" />
            <div className={styles['toggle-switch']}>
                <label className={styles['switch-label']}>
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={theme === 'dark'} // Se o tema for 'dark', o checkbox ficará marcado
                        onChange={toggleTheme} // Alterna o tema quando clicado
                    />
                    <span className={styles.slider}></span>
                </label>
            </div>
        </header>
    );
}
