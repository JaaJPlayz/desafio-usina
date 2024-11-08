import {
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
} from "../models/movie.models"

export const getMoviesService = async () => {
    try {
        const movies = await getMovies();
        return movies;
    } catch (error) {
        throw error;
    }
};

export const getMovieService = async (id: number) => {
    try {
        const movie = await getMovie(id);
        return movie;
    } catch (error) {
        throw error;
    }
};

export const getMoviesByTitleService = async (title: string) => {
    try {
        const movies = await getMoviesByTitle(title);
        return movies;
    } catch (error) {
        throw error;
    }
};

export const getMoviesByGenreService = async (genre: string) => {
    try {
        const movies = await getMoviesByGenre(genre);
        return movies;
    } catch (error) {
        throw error;
    }
};

export const getMoviesByDurationService = async (duration: number) => {
    try {
        const movies = await getMoviesByDuration(duration);
        return movies;
    } catch (error) {
        throw error;
    }
};

export const getMoviesByDescriptionService = async (description: string) => {
    try {
        const movies = await getMoviesByDescription(description);
        return movies;
    } catch (error) {
        throw error;
    }
};

export const getMoviesByReleaseYearService = async (releaseYear: number) => {
    try {
        const movies = await getMoviesByReleaseYear(releaseYear);
        return movies;
    } catch (error) {
        throw error;
    }
};

export const createMovieService = async (movie: any) => {
    try {
        const newMovie = await createMovie(movie);
        return newMovie;
    } catch (error) {
        throw error;
    }
};

export const updateMovieService = async (id: number, movie: any) => {
    try {
        const updatedMovie = await updateMovie(id, movie);
        return updatedMovie;
    } catch (error) {
        throw error;
    }
};

export const deleteMovieService = async (id: number) => {
    try {
        await deleteMovie(id);
    } catch (error) {
        throw error;
    }
}