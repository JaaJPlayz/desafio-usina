import { IMovie } from '../interfaces/IMovie'
import MovieCard from './MovieCard'
import styles from './styles/moviecontainer.module.css'

function MovieContainer({ movies }: { movies: IMovie[] }) {
    return (
        <div className={styles["movie-container"]}>
            {movies.map((movie: IMovie) => (
                <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
    )
}

export default MovieContainer