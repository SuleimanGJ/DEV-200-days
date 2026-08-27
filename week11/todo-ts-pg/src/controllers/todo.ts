import type { Request, Response } from "express";
import pool from "../config/database.js"

const createTodo = async (req: Request, res: Response) => {
    const {title, description, done } = req.body;
}

const getTodos = async (req: Request, res: Response) => {
    const userId = req.headers["userId"].id;
    const todos = await pool.query(`
        SELECT * FROM users WHERE user_id=$1`,
        [userId]);
    
        console.log(todos.rows);

    res.json({
        success: true,
        data: todos.rows
    });
}

const getTodo = async (req: Request, res: Response) => {
    // const todoId = req.params.id;
    const userId = req.headers["userId"].id;
    const todo = await pool.query(`
        SELECT * FROM todos WHERE id=$1 AND user_id=$2`,
        [req.params.id, userId]);
    
        console.log(todo.rows[0]);

    res.json({
        success: true,
        data: todo.rows[0]
    });
}




export { createTodo, getTodos, getTodo}