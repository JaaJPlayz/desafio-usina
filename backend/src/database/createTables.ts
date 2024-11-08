import { pool } from "../server";

const createDatabase = async (): Promise<void> => {
    try {
        // Check if the database exists
        const result = await pool.query("SELECT 1 FROM pg_database WHERE datname = 'desafio'");
        if (result.rowCount === 0) {
            // Database does not exist, so create it
            await pool.query("CREATE DATABASE desafio");
            console.log("Database 'desafio' created");
        } else {
            console.log("Database 'desafio' already exists");
        }

        pool.database = 'desafio';
        console.log("Switched to 'desafio' database");
    } catch (error) {
        console.error("Error creating or switching to database:", error);
        throw error;
    }
};


const createTables = async (): Promise<void> => {
    try {
        await pool.query(`
                CREATE TABLE IF NOT EXISTS users (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(255),
                    email VARCHAR(255),
                    password VARCHAR(255)
                )
            `);
        console.log("Users table created");

        await pool.query(`
                CREATE TABLE IF NOT EXISTS movies (
                    id SERIAL PRIMARY KEY,
                    title VARCHAR(255),
                    description VARCHAR(255),
                    genre VARCHAR(255),
                    releaseYear INTEGER,
                    duration INTEGER,
                    rating INTEGER,
                    comment VARCHAR(255)
                )
            `);
        console.log("Movies table created");
    } catch (error) {
        console.error('Error creating database:', error);
        throw error;
    }
};

export {
    createDatabase,
    createTables
};