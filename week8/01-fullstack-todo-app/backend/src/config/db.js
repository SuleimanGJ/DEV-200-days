import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

const connectToDB = async () => {
    try {
        console.log("MONGO_URI =", MONGO_URI);
        await mongoose.connect(MONGO_URI);
        console.log("✅ Database connected using mongoose");
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1);
    }
}
export { connectToDB }