import { getClient } from "../utils.js";

async function getAllTodosWithUserDetails(){
    const client = await getClient();

    const joinsQuery = `
    SELECT users.*, todos.title, todos.description, todos.done 
    FROM users
    FULL OUTER JOIN todos ON users.id = todos.user_id`;

    const response = await client.query(joinsQuery);
    const result = response.rows;
    

    console.log(`Todos with User Details:: ${result}`);
    console.log(result);
};

getAllTodosWithUserDetails();