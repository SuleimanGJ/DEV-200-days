import express from "express";
import auth from "../middleware/auth.js";
import { createTodo, getTodo, getTodos } from "../controllers/todo.js";

const todoRoute = express.Router();

todoRoute.post("/", auth, createTodo);
todoRoute.get("/", auth, getTodos);
todoRoute.get("/:id", auth, getTodo);

export default todoRoute;