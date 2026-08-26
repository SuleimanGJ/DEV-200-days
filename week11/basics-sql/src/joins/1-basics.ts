import { getClient } from "../utils.js";

async function getUserAndTodosSeparateQueries(userId: number){
    const client = await getClient();

    // user details
    const userQuery = `SELECT * FROM users WHERE id = $1`;
    const userResponse = await client.query(userQuery, [userId]);
    const user = userResponse.rows[0];
    

    // todo details
    const todoQuery = `SELECT * FROM todos WHERE user_id = $1`;
    const todoResponse = await client.query(todoQuery, [userId]);
    const todo = todoResponse.rows[0];
    

    console.log(`User Details: ${{user}}`);
    console.log(user);
    console.log(`Todo Details: ${todo}`);
    console.log(todo);
};

getUserAndTodosSeparateQueries(2);