import mongoose from "mongoose";
const MONGO_URI = "mongodb://localhost:27017/expense-tracker-app";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`Database connected successfully`);
    } catch (error) {
        console.log(`Database connection failed`);
    }
}

export default connectDB;