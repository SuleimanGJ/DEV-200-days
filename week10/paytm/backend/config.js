import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin1User:ZzPUjiRx2y8q0Lls@cluster1.jlmcjaa.mongodb.net/basic-paytm");
        console.log("Database connected");
    } catch (error) {
        console.log("Database failed");
        console.error(error);
        process.exit(1);
    }
}

export const JWT_SECRET = "supersecret000";