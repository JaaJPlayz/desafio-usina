import { IReview } from "../interfaces/IMovie";
import { getRatings, getRating, createRating, updateRating, deleteRating } from "../models/rating.models";

const getRatingsService = async (): Promise<IReview[]> => {
    return await getRatings();
};
const getRatingService = async (id: number): Promise<IReview | null> => {
    return await getRating(id);
};

const createRatingService = async (rating: IReview): Promise<IReview> => {
    return await createRating(rating);
};

const updateRatingService = async (id: number, rating: IReview): Promise<IReview | null> => {
    return await updateRating(id, rating);
};

const deleteRatingService = async (id: number): Promise<void> => {
    await deleteRating(id);
};

export { getRatingsService, getRatingService, createRatingService, updateRatingService, deleteRatingService };