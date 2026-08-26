import { Result } from "pg";
import pool from "./config/database"

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const userExists = `SELECT id FROM users WHERE id = $1`;
    const user = await pool.query(userExists, [userId]);

    if(user.rows.length === 0){
        throw new Error("User does not exist");
    }

    const insertTodoText = `INSERT INTO todos (user_id, title, description, done) VALUES ($1, $2, $3, $4) RETURNING title, description, done, id`;
    const todo = await pool.query(insertTodoText, [userId,title, description, false]);
    return todo.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    // this has error, ex updateTodo(999) -> result.rows -> [] -> rows[0] -> undefined
    // const updateTodo = `UPDATE todos SET done = $1 WHERE id = $2 RETURNING title, description, done, id`;
    // const result = await pool.query(updateTodo, [true, todoId]);

    const updateTodo = `UPDATE todos SET done = TRUE WHERE id = $1 RETURNING title, description, done, id`;
    const result = await pool.query(updateTodo, [todoId]);
    console.log(`Todo with ID ${todoId} updated to done!`);
    return result.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const todo = `SELECT * FROM todos WHERE user_id = $1`;
    const result = await pool.query(todo, [userId]);
    return result.rows;
}