import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB is connected")).catch((err) => console.log("DB is failed", err))

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    description: String,
    completed: { type: Boolean, default: false}
})

const Todo = mongoose.model("todos", todoSchema);

export { Todo }