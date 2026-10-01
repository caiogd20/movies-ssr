import { getPopularMovies } from "@/services/movies.services";
import styles from "./Movies.module.css";
import MovieCard from "@/components/MovieCard/MovieCard";

export const dynamic = "force-dynamic";

export default async function Movies() {
    const {data} = await getPopularMovies();

    return (
        <div className={styles.moviesGrid}>
            {data.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
