import dotenv from "dotenv";
dotenv.config();


const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;

export { PORT, DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT};