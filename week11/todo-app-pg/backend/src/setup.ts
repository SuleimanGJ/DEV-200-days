import pool from "./config/database.js";

// Both can work
// old PostgreSQL
// id SERIAL PRIMARY KEY

// modern PostgreSQL, I'd recommend:
// id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY

async function createTables() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        done BOOLEAN NOT NULL DEFAULT FALSE
      );
    `);

    console.log("Both tables created successfully");
  } catch (error) {
    console.error("Error creating tables:", error);
    throw error;
  }
}

// Why ON DELETE CASCADE?
// I added:
// ON DELETE CASCADE

// It means:
// Delete User
//     ↓
// Delete that user's Todos

// For example:
// users
// 1 | Suleiman

// todos
// 1 | 1 | Learn PostgreSQL
// 2 | 1 | Learn Node.js

// If user 1 is deleted:
// DELETE FROM users WHERE id = 1;

// PostgreSQL automatically deletes:
// todos
// 1 | 1 | Learn PostgreSQL
// 2 | 1 | Learn Node.js

// Without ON DELETE CASCADE, PostgreSQL would normally prevent deleting the user while those todos still reference them.


async function dropTables() {
  try {
    await pool.query(`DROP TABLE IF EXISTS todos;`);
    await pool.query(`DROP TABLE IF EXISTS users;`);

    console.log("Both tables dropped successfully");
  } catch (error) {
    console.error("Error dropping tables:", error);
    throw error;
  }
}

export { createTables, dropTables };