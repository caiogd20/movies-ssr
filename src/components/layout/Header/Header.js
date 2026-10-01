
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>Aplicaçao de filmes</h1>
            <nav className={styles.headerNav}>
                <Link href="/">Home</Link>
                <Link href="/movies">Movies</Link>
            </nav>
        </header>);
}
