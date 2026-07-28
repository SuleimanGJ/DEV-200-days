import { Todos } from "../models/todoModel.js";


const getAllTodo = async (req, res) => {
    const todos = await Todos.find({});
    res.json({ success: true, data: todos, message: "Todo fetched successfully" });
}
const createTodo = async (req, res) => {
    const { title, description } = req.body;
    const newTodo = await Todos.create({ title, description });
    res.status(201).json({ success: true, data: newTodo, message: "Todo added successfully" });
}
const updateTodo = async (req, res) => {
    const id = req.params.id;
    const updateTodo = await Todos.findByIdAndUpdate(id, { title: req.body.title, description: req.body.description }, { new: true });
    res.json({ success: true, data: updateTodo, message: "Todo updated successfully" });
}
const deleteTodo = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    const deleteTodo = await Todos.findByIdAndDelete({ _id: id });
    // const deleteTodo = await Todos.deleteOne({ _id: id });
    console.log(deleteTodo)
    res.json({ success: true, data: deleteTodo, message: "Todo deleted successfully" });
}


export { getAllTodo, createTodo, updateTodo, deleteTodo}