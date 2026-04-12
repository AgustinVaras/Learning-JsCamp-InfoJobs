import { Link } from "./Link.jsx";
import styles from "./Header.module.css";

export function Header () {
    return (
        <header className={styles.header}>
            <Link href="/" >
                <h1 className={styles.title}>
                        <svg className={styles.header__logo} 
                            fill="none" 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2"
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                        DevJobs
                </h1>
            </Link>
            <nav className={styles.header__nav}>
                <Link href="/">Inicio</Link>
                <Link href="/search">Empleos</Link>
                <Link href="/contact">Contacto</Link>
            </nav>
            <div className={styles.header__actions}>
                {/* <Link className={styles.header__button} href="">Publicar un empleo</Link>
                <Link className={styles.header__button} href="">Iniciar Sesión</Link> */}
            </div>
        </header>
    );
};