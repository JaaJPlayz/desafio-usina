import { pool } from "../server";
import { IMovie } from "../interfaces/IMovie";

const getMovies = async (): Promise<IMovie[]> => {
    try {
        const { rows } = await pool.query("SELECT * FROM movies");
        return rows as IMovie[];
    } catch (error) {
        throw error;
    }
};

const getMovie = async (id: number): Promise<IMovie | null> => {
    try {
        const { rows } = await pool.query("SELECT * FROM movies WHERE id = $1", [id]);
        return rows[0] as IMovie | null;
    } catch (error) {
        throw error;
    }
};

const getMoviesByGenre = async (genre: string): Promise<IMovie[]> => {
    try {
        const { rows } = await pool.query("SELECT * FROM movies WHERE genre = $1", [genre]);
        return rows as IMovie[];
    } catch (error) {
        throw error;
    }
}

const getMoviesByTitle = async (title: string): Promise<IMovie[]> => {
    try {
        const { rows } = await pool.query("SELECT * FROM movies WHERE title = $1", [title]);
        return rows as IMovie[];
    } catch (error) {
        throw error;
    }
}

const getMoviesByReleaseYear = async (releaseyear: number): Promise<IMovie[]> => {
    try {
        const { rows } = await pool.query("SELECT * FROM movies WHERE releaseyear = $1", [releaseyear]);
        return rows as IMovie[];
    } catch (error) {
        throw error;
    }
}

const getMoviesByDuration = async (duration: number): Promise<IMovie[]> => {
    try {
        const { rows } = await pool.query("SELECT * FROM movies WHERE duration = $1", [duration]);
        return rows as IMovie[];
    } catch (error) {
        throw error;
    }
}

const getMoviesByDescription = async (description: string): Promise<IMovie[]> => {
    try {
        const { rows } = await pool.query("SELECT * FROM movies WHERE description = $1", [description]);
        return rows as IMovie[];
    } catch (error) {
        throw error;
    }
}



const createMovie = async (movie: IMovie): Promise<IMovie> => {
    try {
        if (!movie.title || !movie.description || !movie.genre || !movie.releaseyear || !movie.duration || !movie.rating) {
            throw new Error("Invalid movie data");
        }
        if (!movie.comment) movie.comment = "";
        const { rows } = await pool.query(
            "INSERT INTO movies (title, description, genre, releaseyear, duration, rating, comment) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [movie.title, movie.description, movie.genre, movie.releaseyear, movie.duration, movie.rating, movie.comment]
        );
        return rows[0] as IMovie;
    } catch (error) {
        throw error;
    }
};

const updateMovie = async (id: number, movie: IMovie): Promise<IMovie> => {
    try {
        if (!movie.title || !movie.description || !movie.genre || !movie.releaseyear || !movie.duration || !movie.rating) {
            throw new Error("Invalid movie data");
        }
        if (!movie.comment) movie.comment = "";
        const { rows } = await pool.query(
            "UPDATE movies SET title = $1, description = $2, genre = $3, releaseyear = $4, duration = $5, rating = $6, comment = $7 WHERE id = $8 RETURNING *",
            [movie.title, movie.description, movie.genre, movie.releaseyear, movie.duration, movie.rating, movie.comment, id]
        );
        return rows[0] as IMovie;
    } catch (error) {
        throw error;
    }
};

const deleteMovie = async (id: number): Promise<void> => {
    try {
        await pool.query("DELETE FROM movies WHERE id = $1", [id]);
    } catch (error) {
        throw error;
    }
};

export {
    getMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie,
    getMoviesByTitle,
    getMoviesByGenre,
    getMoviesByDuration,
    getMoviesByDescription,
    getMoviesByReleaseYear
};