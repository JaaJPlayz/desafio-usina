import { createUserService, getAllUsers, getUserById, updateUserService, deleteUserService, loginUserService } from "../services/user.services";
import IUser from "../types/user.types";
import { Request, Response } from 'express';

export async function getAllUsersController(req: Request, res: Response): Promise<void> {
    const users = await getAllUsers();
    res.status(200).json({ users });
}

export async function getUserByIdController(req: Request<{ id: string }>, res: Response): Promise<void> {
    const { id } = req.params;
    const user = await getUserById(parseInt(id));
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.status(200).json({ user });
}

export async function createUserController(req: Request<{ body: IUser }>, res: Response): Promise<void> {
    const reqUser: IUser = req.body;
    const { user, token } = await createUserService(reqUser);
    res.status(201).json({ user, token });
}

export async function updateUserController(req: Request<{ id: string; body: IUser }>, res: Response): Promise<void> {
    const { id } = req.params;
    const reqUser: IUser = req.body;
    const { user, token } = await updateUserService(parseInt(id), reqUser);
    res.status(200).json({ user, token });
}

export async function deleteUserController(req: Request<{ id: string }>, res: Response): Promise<void> {
    const { id } = req.params;
    await deleteUserService(parseInt(id));
    res.status(204).json();
}

export async function loginUserController(req: Request<{ body: IUser }>, res: Response): Promise<void> {
    const reqUser: IUser = req.body;
    const { user, token } = await loginUserService(reqUser);
    res.status(200).json({ user, token });
}

export default {
    getAllUsersController,
    getUserByIdController,
    createUserController,
    updateUserController,
    deleteUserController,
};