import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch (error) {
        console.log("Database failed");
        console.error(error);
        process.exit(1);
    }
}

export const JWT_SECRET = "supersecret000";