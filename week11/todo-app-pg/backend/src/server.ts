import dotenv from "dotenv";
dotenv.config();

import pool from "./config/database.js";
import app from "./app.js";
import { PORT } from "./config/config.js";

async function start() {
  try {
    const result = await pool.query("SELECT NOW()");

    console.log("PostgreSQL connected!");
    console.log(result.rows[0]);
    console.log(result.rows[0].now);

  } catch (error) {
    console.error("PostgreSQL connection failed:");
    console.error(error);
  }
}

start();

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});