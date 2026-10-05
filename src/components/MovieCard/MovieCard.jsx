import Image from "next/image";
import Link from "next/link";
import styles from "./MovieCard.module.css";


export default function MovieCard({ movie }) {
    return (
        <article className={styles.movieCard}>
            <Link href={`/movies/${movie.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={500}
                    height={750}
                    unoptimized
                />
            </Link>
            <div className={styles.movieCardContent}>
                <h3>{movie.title}</h3>
                <span>★ {movie.vote_average.toFixed(1)}</span>
            </div>
        </article>
    );
}
