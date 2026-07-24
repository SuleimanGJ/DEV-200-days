import express from "express";
import cors from "cors"
const app = express();
import { PORT } from "./config/config.js";
import { connectToDB } from "./config/db.js";

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("App is working");
})

let todos = [];
// let todos = [{
//     id: 1,
//     title: "hello",
//     description: "what are you learning"
// }];
let nextId = 1;
app.post("/todos", (req, res) => {
    const { title, description } = req.body;
    // const lastId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = { id: nextId++, title, description }
    todos.push(newTodo);
    res.status(201).json({ success: true, data: newTodo, message: "Todo added successfully" })
})


app.get("/todos", (req, res) => {
    res.json({ success: true, data: todos, message: "Todo fetched successfully" })
})

app.delete("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const deleteTodo = todos.find(t => t.id === id);
    // todos = todos.slice(0, id); // use index, have problem of inconsistent id
    todos = todos.filter(todo => todo.id !== id)
    res.json({ success: true, data: deleteTodo, message: "Todo deleted successfully" })
})

connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log(
            `Server is running successfully on port ${PORT} - http://localhost:${PORT}`,
        )
    })
})