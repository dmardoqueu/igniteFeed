import { useTheme } from '../components/ThemeContext';
import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    const { theme, toggleTheme } = useTheme();

    const headerTheme = theme === 'dark' ? styles.headerDark : styles.headerLight;

    return (
        <header className={`${styles.header} ${headerTheme}`}>
            <img src={igniteLogo} alt="Logotipo ignite" />
            <div className={styles['toggle-switch']}>
                <label className={styles['switch-label']}>
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                    />
                    <span className={styles.slider}></span>
                </label>
            </div>
        </header>
    );
}
