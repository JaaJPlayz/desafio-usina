import { pool } from "../server";

const populateDatabase = async (): Promise<void> => {
    try {
        await pool.query(`
        INSERT INTO users (name, email, password) VALUES
        ('User 1', 'QqGKv@example.com', 'user1'),
        ('User 2', 'XKwK8@example.com', 'user2'),
        ('User 3', '3uH9y@example.com', 'user3'),
        ('User 4', '4X9lq@example.com', 'user4'),
        ('User 5', '5X9lq@example.com', 'user5')
        `);
    } catch (error) {
        console.error('Error populating database:', error);
        throw error;
    }

    try {
        await pool.query(`
        INSERT INTO movies (title, description, genre, releaseYear, duration, rating, comment) VALUES
        ('Movie 1', 'Description 1', 'Genre 1', 2020, 120, 5, 'Comment 1'),
        ('Movie 2', 'Description 2', 'Genre 2', 2021, 90, 4, ''),
        ('Movie 3', 'Description 3', 'Genre 3', 2022, 60, 3, 'Comment 3'),
        ('Movie 4', 'Description 4', 'Genre 4', 2023, 180, 2, 'Comment 4'),
        ('Movie 5', 'Description 5', 'Genre 5', 2024, 150, 1, '')
        `);
    } catch (error) {
        console.error('Error populating database:', error);
        throw error;
    }
};

export default populateDatabase;