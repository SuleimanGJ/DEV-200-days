import { getClient } from "./utils.js";

async function createEntries() {
    const client = await getClient();
    const insertUserText = 'INSERT INTO users (email, possword) VALUES ($1, $2) RETURNING id';
    const userValues = ['doe@gmail.com', 'hashed_password_here'];

    let response = await client.query(insertUserText, userValues);
    const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todoValues = ['Buy groceries', 'Milk, bread, and eggs', response.rows[0].id, false];
    await client.query(insertTodoText, todoValues);

    console.log("Entries created!");
    console.log(response.rows);
    console.log(response.rows[0]);
}



createEntries();