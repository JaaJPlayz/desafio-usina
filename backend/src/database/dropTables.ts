import { pool } from "../server";

const dropTables = async (): Promise<void> => {
    try {
        await pool.query("DROP TABLE IF EXISTS ratings");
        await pool.query("DROP TABLE IF EXISTS movies");
        await pool.query("DROP TABLE IF EXISTS users");
    } catch (error) {
        throw error;
    }
};

const dropDatabase = async (): Promise<void> => {
    try {
        pool.query("DROP DATABASE IF EXISTS moviedb");
        await pool.end();
    } catch (error) {
        throw error;
    }
};

export { dropTables, dropDatabase };