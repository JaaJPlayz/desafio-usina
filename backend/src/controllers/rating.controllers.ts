import { getRatingsService, getRatingService, createRatingService, updateRatingService, deleteRatingService } from "../services/rating.services";

export const getRatingsController = async (req: any, res: any) => {
    const ratings = await getRatingsService();
    res.json(ratings);
};

export const getRatingController = async (req: any, res: any) => {
    const { id } = req.params;
    const rating = await getRatingService(id);
    res.json(rating);
};

export const createRatingController = async (req: any, res: any) => {
    const rating = req.body;
    const createdRating = await createRatingService(rating);
    res.status(201).json(createdRating);
};

export const updateRatingController = async (req: any, res: any) => {
    const { id } = req.params;
    const rating = req.body;
    const updatedRating = await updateRatingService(id, rating);
    res.json(updatedRating);
};

export const deleteRatingController = async (req: any, res: any) => {
    const { id } = req.params;
    await deleteRatingService(id);
    res.status(204).end();
};

