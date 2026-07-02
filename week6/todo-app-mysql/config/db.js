import mysql from "mysql2/promise";

const pool = mysql.createPool(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "todo_db",
    waitForConnections: true,
    connectionLimit: 10,
  }
);

export default pool;




// const mysql = require("mysql2");

// const conn = mysql.createConnection({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });

// conn.connect((err) => {
  // if (err) throw err;
  // console.log("DB connected");
// });

// module.exports = conn;