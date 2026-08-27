import pool from "./config/database.js";

async function createTables() {
    const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
    )`;

    await pool.query(createUsersTableQuery);

    const createTodosTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    user_id INTEGER REFERENCES users(id),
    done BOOLEAN DEFAULT FALSE
    )`;

    await pool.query(createTodosTableQuery);
    console.log("Both Tables are created successfully!");
}

createTables();