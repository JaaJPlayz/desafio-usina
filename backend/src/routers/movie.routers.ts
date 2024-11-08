import {
    getMoviesController,
    getMovieController,
    getMoviesByDescriptionController,
    getMoviesByGenreController,
    getMoviesByDurationController,
    getMoviesByTitleController,
    getMoviesByReleaseYearController,
    createMovieController,
    updateMovieController,
    deleteMovieController
} from "../controllers/movie.controllers";
import { Router } from "express"

export const movieRouter = Router();

movieRouter.get("/all", getMoviesController)
movieRouter.get("/:id", getMovieController)
movieRouter.get("/description/:description", getMoviesByDescriptionController)
movieRouter.get("/genre/:genre", getMoviesByGenreController)
movieRouter.get("/duration/:duration", getMoviesByDurationController)
movieRouter.get("/title/:title", getMoviesByTitleController)
movieRouter.get("/releaseYear/:releaseYear", getMoviesByReleaseYearController)
movieRouter.post("/", createMovieController)
movieRouter.put("/:id", updateMovieController)
movieRouter.delete("/:id", deleteMovieController)