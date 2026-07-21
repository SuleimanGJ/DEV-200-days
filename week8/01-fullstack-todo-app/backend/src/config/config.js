import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3001
const JWT_SECRET = process.env.JWT_SECRET
const MONGO_URI = process.env.MONGO_URI

export { PORT, JWT_SECRET, MONGO_URI }