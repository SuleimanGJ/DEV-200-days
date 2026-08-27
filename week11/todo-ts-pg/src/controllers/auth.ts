// import { Jwt } from "jsonwebtoken";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import pool from "../config/database.js";
import { JWT_SECRET } from "../config/config.js";

const signup = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({
            message: "Email and password are required"
        });
    };

    const userExists = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);

    // console.log("Users from db: ", userExists.rows[0]);

    if (userExists.rows.length > 0) {
        return res.status(400).json({
            message: "User already exists"
        });
    };

    const hashPassword = await bcrypt.hash(password, 10);

    await pool.query(`
        INSERT INTO users(username, email, password) VALUES($1, $2, $3)`,
    [username, email, hashPassword]
    );

    // console.log(username);
    // console.log(email);
    // console.log(password);

    res.status(201).json({
        message: "Registration endpoint working",
        data: { username, email }
    });
}
const signin = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({
            message: "Email and password are required"
        });
    };

    const userExists = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);

    // console.log("Users from db: ", userExists.rows[0]);

    if (userExists.rows.length === 0) {
        return res.status(400).json({
            message: "Invalid Credential"
        });
    };
    
    const matchedPassword = await bcrypt.compare(password, userExists.rows[0].password);

    if (!matchedPassword) {
        return res.status(400).json({
            message: "Invalid Credential"
        });
    };  
    
    const token = jwt.sign({id: userExists.rows[0].id}, JWT_SECRET as string, {expiresIn: "7d"});
    
    // console.log(username);
    // console.log(email);
    // console.log(password);
    
    res.status(201).json({
        message: "Signin successfully",
        token: token
    });
};


export {signup, signin};