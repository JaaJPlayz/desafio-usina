import express from 'express';
import { Client } from 'pg';
import { createTables, createDatabase } from './database/createTables';
import populateDatabase from './database/populateTables';
import cors from 'cors';
import { movieRouter } from './routers/movie.routers';
import { userRouter } from './routers/user.routers';
import { ratingRouter } from './routers/rating.routers';

const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/movies', movieRouter);
app.use('/users', userRouter);
app.use("/rate", ratingRouter)

const PORT = process.env.PORT || 3001;

export const pool = new Client({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'desafio',
});

pool.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .then(() => createDatabase())
    .then(() => createTables())
    .then(() => populateDatabase())
    .catch(err => console.error('Connection error', err.stack));


app.get('/', (_req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
