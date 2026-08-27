import type {Request, Response, NextFunction} from "express";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config/config.js";

const auth = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.json({message: "Invalid input"});
    }
    try {
        const token = authHeader.split(" ")[1];
        if(!token){
            return res.status(401).json({message: "Unauthorized"})
        }
        const decoded = jwt.sign(token, JWT_SECRET)
        console.log(decoded);
        // req.userId = decoded;
        req.headers["userId"] = decoded;
        next();
    } catch (error) {
        res.json({ message: "Forbiden/Invalid Token" });
    }
}

export default auth;