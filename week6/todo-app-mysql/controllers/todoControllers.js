import pool from "../config/db.js";

const createTodo = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.userId;

  // Check if the user exists
  const [user] = await pool.query(`SELECT * FROM users WHERE id = ?`, [userId]);

  console.log("userId from db: ", user);

  if (user.length === 0) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  // Create the todo
  await pool.query(
    `INSERT INTO todos(title, description, user_id) VALUES(?,?,?)`,
    [title, description, userId],
  );

  res.json({ message: "Todo created successfully" });
};

const getTodos = async (req, res) => {
    const userId = req.userId;
  // get the todos
  let todos = await pool.query(
    `SELECT * FROM todos WHERE user_id=?`,
    [userId],
  );

  todos = todos[0]

  res.json({ message: "Todo gotted successfully", todos});
}

const getTodo = async (req, res) => {
    const id = req.params.id;
    const userId = req.userId;
  // get the todos
  let [todos] = await pool.query(
    `SELECT * FROM todos WHERE id=? AND user_id=?`,
    [id, userId],
  );

  res.json({ message: "Todo gotted successfully", todos});
}

const updateTodo = async (req, res) => {
  const { title, description, completed } = req.body;
  const id = req.params.id;
  const userId = req.userId;

  // update the todo
  const [result] = await pool.query(
    `UPDATE todos SET title=?, description=?, completed=? WHERE id=? AND user_id=?`,
    [title, description, completed, id, userId],
  );

  if (result.affectedRows === 0) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  res.json({ message: "Todo updated successfully" , result});
};
const deleteTodo = async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;

  // delete the todo
  const [result] = await pool.query(
    `DELETE FROM todos WHERE id=? AND user_id=?`,
    [id, userId],
  );

  if (result.affectedRows === 0) {
    return res.status(404).json({
      message: "Todo not found",
    });
  }

  res.json({ message: "Todo deleted successfully" , result});
};

export { createTodo, getTodos, getTodo, updateTodo, deleteTodo };
