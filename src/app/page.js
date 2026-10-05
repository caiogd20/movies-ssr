import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <main className={styles.pageContainer}>
                <h1 className={styles.pageTitle}>Discover popular movies</h1>
                <p className={styles.pageDescription}>
                    Browse trending titles, check ratings and read synopses.
                    Built with Next.js and server-side rendering, powered by the
                    TMDB API.
                </p>
                <div className={styles.pageLinks}>
                    <Link className={styles.pageLink} href="/movies">
                        Browse movies
                    </Link>
                </div>
            </main>
        </>
    );
}
