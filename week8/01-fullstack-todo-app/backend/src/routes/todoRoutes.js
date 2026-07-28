import express from "express";
const todoRouter = express.Router();
import {getAllTodo, createTodo, updateTodo, deleteTodo} from '../controllers/todoControllers.js';


todoRouter.get("/", getAllTodo);
todoRouter.post("/", createTodo);
todoRouter.put("/:id", updateTodo);
todoRouter.delete("/:id", deleteTodo);

export {todoRouter}