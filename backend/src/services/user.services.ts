import { getUsers, getUser, createUser, updateUser, deleteUser, getUserByEmail } from "../models/user.models";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import IUser from "../types/user.types";

const jwtSecret = process.env.JWT_SECRET || "secret";
const saltRounds = 12;

export const getAllUsers = async (): Promise<IUser[] | null> => {
    try {
        return await getUsers();
    } catch (error) {
        throw error;
    }
};

export const getUserById = async (id: number): Promise<IUser | null> => {
    try {
        if (!getUser) {
            throw new Error("User not found");
        }
        return await getUser(id);
    } catch (error) {
        throw error;
    }
};

export const createUserService = async (user: IUser) => {
    try {
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
        await createUser(user);
        const token = jwt.sign({ user }, jwtSecret, { expiresIn: "1h" });
        return { user, token };
    } catch (error) {
        throw error;
    }
};

export const updateUserService = async (id: number, user: IUser) => {
    try {
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
        await updateUser(id, user);
        const token = jwt.sign({ user }, jwtSecret, { expiresIn: "1h" });
        return { user, token };
    } catch (error) {
        throw error;
    }
};

export const deleteUserService = async (id: number): Promise<void> => {
    try {
        await deleteUser(id);
    } catch (error) {
        throw error;
    }
};

export const loginUserService = async (user: IUser) => {
    try {
        const dbUser = await getUserByEmail(user.email);
        if (!dbUser) {
            throw new Error("User not found");
        }
        const isPasswordValid = await bcrypt.compare(user.password, dbUser.password);
        if (!isPasswordValid) {
            throw new Error("Invalid password");
        }
        const token = jwt.sign({ user: dbUser }, jwtSecret, { expiresIn: "1h" });
        return { user: dbUser, token };
    } catch (error) {
        throw error;
    }
};