import IUser from "../types/user.types";
import { pool } from "../server";

const getUsers = async (): Promise<IUser[]> => {
    try {
        const { rows } = await pool.query("SELECT * FROM users");
        return rows as IUser[];
    } catch (error) {
        throw error;
    }
};

const getUser = async (id: number): Promise<IUser | null> => {
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        return rows[0] as IUser | null;
    } catch (error) {
        throw error;
    }
};

const createUser = async (user: IUser): Promise<IUser> => {
    try {
        console.log("User na model:", user);
        if (!user.name || !user.email || !user.password) {
            throw new Error("Invalid user data");
        }
        const { rows } = await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
            [user.name, user.email, user.password]
        );
        return rows[0] as IUser;
    } catch (error) {
        throw error;
    }
};

const updateUser = async (id: number, user: IUser): Promise<IUser> => {
    try {
        if (!user.name || !user.email || !user.password) {
            throw new Error("Invalid user data");
        }
        const { rows } = await pool.query(
            "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
            [user.name, user.email, user.password, id]
        );
        return rows[0] as IUser;
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (id: number): Promise<void> => {
    try {
        await pool.query("DELETE FROM users WHERE id = $1", [id]);
    } catch (error) {
        throw error;
    }
};

const getUserByEmail = async (email: string): Promise<IUser | null> => {
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        return rows[0] as IUser | null;
    } catch (error) {
        throw error;
    }
};

export {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail
};