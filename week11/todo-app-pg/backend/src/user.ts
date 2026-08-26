import pool from "./config/database.js";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    // const {username, password, name} = req.body;
    const insertText = `INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING id, username, password, name`;
    const insertValues = [username, password, name];
    const result = await pool.query(insertText, insertValues);
    return result.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    const user = `SELECT username, password, name FROM users WHERE id = $1`;
    const result = await pool.query(user, [userId]);
    return result.rows[0];
}