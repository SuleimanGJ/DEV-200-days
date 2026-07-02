import express from "express";
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/todoControllers.js";
const router = express.Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.get("/:id", getTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
