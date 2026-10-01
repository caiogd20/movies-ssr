import Image from "next/image";
import styles from "./movie.module.css";
import { getMovie } from "@/services/movies.services";

export default async function Movie({ params }) {
    const { movieId } = await params;
    const movie = await getMovie(movieId);

    if (!movie?.data) {
        return <p>Carregando...</p>;
    }

    const movieData = movie.data;

    return (
        <article className={styles.movie}>
            <div className={styles.moviePoster}>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                    alt={movieData.title || "Poster do filme"}
                    width={500}
                    height={750}
                    unoptimized
                />
            </div>

            <div className={styles.movieContent}>
                <h1 className={styles.movieTitle}>{movieData.title}</h1>
                <p className={styles.movieOverview}>{movieData.overview}</p>
                <div className={styles.movieRating}>
                    <span className={styles.movieRatingStar}>★</span>
                    <span>{movieData.vote_average}</span>
                </div>
            </div>
        </article>
    );
}
