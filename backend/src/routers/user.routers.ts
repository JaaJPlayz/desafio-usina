import { Router, Request, Response, NextFunction } from "express";
import { createUserController, deleteUserController, getAllUsersController, getUserByIdController, loginUserController, updateUserController } from "../controllers/user.controllers";
import authenticate from "../middlewares/authMiddleware";

export const userRouter = Router();

// AKA Register
userRouter.post("/", createUserController)

// AKA Login
userRouter.post("/login", loginUserController)

userRouter.use((req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next)
})

userRouter.get("/:id", getUserByIdController)
userRouter.get("/", getAllUsersController)
userRouter.put("/:id", updateUserController)
userRouter.delete("/:id", deleteUserController)