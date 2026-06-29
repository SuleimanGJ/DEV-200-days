import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Database connected using mongoose");
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1); 
    }
}

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    username: String,
    password: Number,
});
const TodoSchema = new Schema({
    userId: ObjectId,
    title: String,
    completed: Boolean
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

export  {
    connectToDB,
    User,
    Todo
}