import {
    getMoviesService,
    getMovieService,
    createMovieService,
    updateMovieService,
    deleteMovieService,
    getMoviesByDescriptionService,
    getMoviesByGenreService,
    getMoviesByDurationService,
    getMoviesByTitleService,
    getMoviesByReleaseYearService
} from "../services/movie.services";

export const getMoviesController = async (req: any, res: any) => {
    const movies = await getMoviesService();
    res.status(200).json(movies);
};

export const getMovieController = async (req: any, res: any) => {
    const { id } = req.params;
    const movie = await getMovieService(id);
    res.status(200).json(movie);
};

export const getMoviesByDescriptionController = async (req: any, res: any) => {
    const { description } = req.params;
    const movies = await getMoviesByDescriptionService(description);
    res.status(200).json(movies);
};

export const getMoviesByGenreController = async (req: any, res: any) => {
    const { genre } = req.params;
    const movies = await getMoviesByGenreService(genre);
    res.status(200).json(movies);
};

export const getMoviesByDurationController = async (req: any, res: any) => {
    const { duration } = req.params;
    const movies = await getMoviesByDurationService(duration);
    res.status(200).json(movies);
};

export const getMoviesByTitleController = async (req: any, res: any) => {
    const { title } = req.params;
    const movies = await getMoviesByTitleService(title);
    res.status(200).json(movies);
};

export const getMoviesByReleaseYearController = async (req: any, res: any) => {
    const { releaseYear } = req.params;
    const movies = await getMoviesByReleaseYearService(releaseYear);
    res.status(200).json(movies);
};

export const createMovieController = async (req: any, res: any) => {
    const movie = req.body;
    const newMovie = await createMovieService(movie);
    res.status(201).json(newMovie);
};

export const updateMovieController = async (req: any, res: any) => {
    const { id } = req.params;
    const movie = req.body;
    const updatedMovie = await updateMovieService(id, movie);
    res.status(200).json(updatedMovie);
};

export const deleteMovieController = async (req: any, res: any) => {
    const { id } = req.params;
    await deleteMovieService(id);
    res.status(204).end();
};