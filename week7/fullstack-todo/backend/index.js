import e from "express";
import cors from "cors"
import { createTodoSchema, updateTodoSchema } from "./types.js"
import {Todo} from "./db.js"

const app = e();
app.use(e.json())
app.use(cors())
// origin: "http://localhost:5173"
// origin: "http://127.0.0.1:5173"


app.get("/", (req, res) => {
    res.send("APP IS WORKING")
})

app.post("/todo", async (req, res) => {
    
    const parsedBody = createTodoSchema.safeParse(req.body);
    
    if(!parsedBody.success){
        return res.json({
            message: "Invalid input"
        })
    }
    console.log(parsedBody.data)
    // put it in mongoose
    await Todo.create({
        title: parsedBody.data.title,
        description: parsedBody.data.description,
        completed: false
    })
    res.json({
        message: "Todo is created"
    })
})
app.get("/todo", async (req, res) => {
    const todo = await Todo.find({})
    res.json({todo})
})
app.put("/completed", async (req, res) => {
    const parsedBody = updateTodoSchema.safeParse(req.body);
    if (parsedBody.success) {
        return res.json({
            message: "Invalid input"
        })
    }
    const updatedTodo = await Todo.findByIdAndUpdate({_id: req.body.id}, {completed: true})
    res.json({
        message: "Todo is updated",
        todo: updatedTodo
    })
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000 and http://localhost:3000`)
})