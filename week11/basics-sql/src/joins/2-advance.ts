import { getClient } from "../utils.js";

async function getUserAndTodosSeparateQueries(userId: number){
    const client = await getClient();

    // user details
    const joinsQuery = `
    SELECT users.*, todos.title, todos.description, todos.done 
    FROM users
    FULL OUTER JOIN todos ON users.id = todos.user_id
    WHERE users.id = $1`;

    // INNER JOIN = JOIN
    // JOIN todos 
    // RIGHT JOIN 
    // FULL OUTER JOIN 

    const response = await client.query(joinsQuery, [userId]);
    const result = response.rows;
    

    console.log(`Todos with User Details:: ${result}`);
    console.log(result);
};

getUserAndTodosSeparateQueries(1);

// JOIN
// - clause is used to combine rows from two or more tables, based on a related column between them.

// TYPES OF JOIN

// INNER JOIN: Returns only the rows that have matching values in both tables.
// What it does: Picks records that exist in both the users and orders todos.
// The INNER JOIN keyword selects records that have matching values in both tables.
// INNER JOIN = JOIN



// LEFT JOIN: Returns all rows from the left table and the matched rows from the right table (unmatched right values show as NULL).
// What it does: Picks every users, even if they have never placed an order (missing orders display as NULL).
// The LEFT JOIN keyword selects ALL records from the "left" table, and the matching records from the "right" table. The result is 0 records from the right side if there is no match.



// RIGHT JOIN: Returns all rows from the right table and the matched rows from the left table (unmatched left values show as NULL).
// The RIGHT JOIN keyword selects ALL records from the "right" table, and the matching records from the "left" table. The result is 0 records from the left side if there is no match.



// FULL OUTER JOIN: Returns all records when there is a match in either the left or right table, filling with NULL where data is missing on either side.
// The FULL JOIN keyword selects ALL records from both tables, even if there is not a match. For rows with a match the values from both tables are available, if there is not a match the empty fields will get the value NULL.