import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { useTheme } from './ThemeContext'; // Importando o hook useTheme

export function Sidebar() {
    const { theme } = useTheme(); // Pegando o tema atual

    // Definindo a classe de acordo com o tema
    const sidebarClass = theme === 'dark' ? styles.sidebarLight : styles.sidebarDark;

    return (
        <aside className={`${styles.sidebar} ${sidebarClass}`}> {/* Aplicando a classe baseada no tema */}
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=60&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Capa do perfil"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/dmardoqueu.png" />

                <strong>Diôgo Mardoqueu</strong>
                <span>Desenvolvedor de software</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
