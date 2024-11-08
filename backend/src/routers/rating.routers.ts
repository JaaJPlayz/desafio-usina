
import { Router } from "express";
import { getRatingsController, getRatingController, createRatingController, updateRatingController, deleteRatingController } from "../controllers/rating.controllers";

export const ratingRouter = Router();

ratingRouter.get("/", getRatingsController)
ratingRouter.get("/:id", getRatingController)
ratingRouter.post("/", createRatingController)
ratingRouter.put("/:id", updateRatingController)
ratingRouter.delete("/:id", deleteRatingController)
