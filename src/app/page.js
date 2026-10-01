import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.pageContainer}>
            <h1 className={styles.pageTitle}>Home page</h1>
        </main>
    );
}