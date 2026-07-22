import express from "express";
const app = express();
import { PORT } from "./config/config.js";
import { connectToDB } from "./config/db.js";

app.use(express.json());

app.get("/", (req, res) => {
    res.send("App is working");
})

let todos = [{
    id: 1,
    title: "hello",
    description: "what are you learning"
}];

app.post("/todos", (req, res) => {
    const { title, description } = req.body;
    const lastId = todos[todos.length - 1].id + 1 || 0;
    const newTodo = { id: lastId, title, description }
    todos.push(newTodo);
    res.status(201).json({ success: true, data: newTodo, message: "Todo added successfully" })
})


app.get("/todos", (req, res) => {
    res.json({ success: true, data: todos, message: "Todo deleted successfully" })
})

app.delete("/todos/:id", (req, res) => {
    const { id } = req.params;
    const deleteTodo = todos[id];
    todos = todos.slice(0, id); // use index, have problem of inconsistent id
    // todos = todos.filter(todo => todo.id !== id)
    res.json({ success: true, data: deleteTodo, message: "Todo deleted successfully" })
})

connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log(
            `Server is running successfully on port ${PORT} - http://localhost:${PORT}`,
        )
    })
})