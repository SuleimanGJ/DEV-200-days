import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const JWT_ADMIN_SECRET = "adminsupersecret1";
const JWT_USER_SECRET = "usersupersecret1";


const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI) // for cloud mongodb
        await mongoose.connect(process.env.MONGO_URI) // for local host
        console.log("DB is Connected");
    } catch (error) {
        console.log("DB is not Connected", error);
    }
}


export {JWT_ADMIN_SECRET, JWT_USER_SECRET, connectDB}