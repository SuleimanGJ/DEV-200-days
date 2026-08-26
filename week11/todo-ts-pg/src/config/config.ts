import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 6000;
const DB_PORT = Number(process.env.DB_PORT);
const DB_HOST = process.env.DB_HOST;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

export { PORT, DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT};