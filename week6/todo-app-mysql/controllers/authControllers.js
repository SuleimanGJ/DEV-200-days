import bcrypt from 'bcrypt';
import pool from '../config/db.js';

import jwt from "jsonwebtoken";
const SECRET = process.env.SECRET || "ilovecoding";



const register = async (req, res) => {
    const {username, email, password} = req.body;
    const [users] = await pool.query(`SELECT * FROM users WHERE email=?`,[email]);
    // console.log("Users from db: ",users);
    if(users.length > 0){
        return res.status(400).json({message: "User already exists"})
    };
    // console.log(password);
    // console.log(typeof password);
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      `INSERT INTO users(username, email, password) VALUES(?,?,?)`,
      [username, email, hashedPassword],
    );

    res.json({message: "Signup successfully"});
}

const login = async (req, res) => {
    const {username, email, password} = req.body;
    const [users] = await pool.query(`SELECT * FROM users WHERE email=?`,[email]);
    // console.log("Users from db: ",users);
    if(users.length === 0){
        return res.status(400).json({message: "Invalid credentials"})
    };

    const user = users[0];

    const matchedPassword = await bcrypt.compare(password, user.password);
    if(!matchedPassword){
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({id: user.id}, SECRET, {expiresIn: "7d"});

    res.json({message: "Signin successfully", token: token});
}




export {register, login}