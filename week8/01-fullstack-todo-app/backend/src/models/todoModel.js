import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const todoSchema = new Schema({
    title: {type: String},
    description: {type: String},
    completed: {type: Boolean, default: false}
})

const Todos = mongoose.model("todos", todoSchema)

export { Todos }
