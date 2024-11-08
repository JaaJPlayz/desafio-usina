import { IReview } from "../interfaces/IMovie";
import { pool } from "../server";

const getRatings = async (): Promise<IReview[]> => {
    try {
        const { rows } = await pool.query("SELECT rating, comment FROM movies");
        return rows as IReview[];
    } catch (error) {
        throw error;
    }
};


const getRating = async (id: number): Promise<IReview | null> => {
    try {
        const { rows } = await pool.query("SELECT rating, comment FROM movies WHERE id = $1", [id]);
        return rows[0] as IReview | null;
    } catch (error) {
        throw error;
    }
};


const createRating = async (rating: IReview): Promise<IReview> => {
    try {
        const { rating: ratingValue, comment } = rating;
        const { rows } = await pool.query("INSERT INTO movies (rating, comment) VALUES ($1, $2) RETURNING *", [ratingValue, comment]);
        return rows[0] as IReview;
    } catch (error) {
        throw error;
    }
};


const updateRating = async (id: number, rating: IReview): Promise<IReview | null> => {
    try {
        const { rating: ratingValue, comment } = rating;
        const { rows } = await pool.query("UPDATE movies SET rating = $1, comment = $2 WHERE id = $3 RETURNING *", [ratingValue, comment, id]);
        return rows[0] as IReview | null;
    } catch (error) {
        throw error;
    }
};


const deleteRating = async (id: number): Promise<void> => {
    try {
        await pool.query("DELETE (rating, comment) FROM movies WHERE id = $1", [id]);
    } catch (error) {
        throw error;
    }
};

export { getRatings, getRating, createRating, updateRating, deleteRating };