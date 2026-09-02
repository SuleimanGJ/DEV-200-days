import express from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";
const authRouter = express.Router();
import "dotenv/config"
import { auth } from "../middleware/auth.js";
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
}

authRouter.post("/signup", async (req, res) => {
    try {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(411).json({message: "Invalid Inputs"});
        return;
    }
    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [{email}, {username}]
        }
    });

    if(existingUser){
        res.status(403).json({message: "User already exists"})
    }

    const newUser = await prisma.user.create({
        data: {
            username, email, password
        }
    });

    const token = jwt.sign({id: newUser.id}, JWT_SECRET, {expiresIn: "1d"});
    res.status(201).json({message: "User successfully created", token: token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Server Error"});
    }
});


authRouter.post("/signin", async (req, res) => {
    try {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(411).json({message: "Invalid Inputs"});
    }
    const existingUser = await prisma.user.findFirst({
        where: {
            email, password
        }
    });

    if(!existingUser){
        res.status(403).json({message: "Invalid credentials"});
        return;
    }

    const token = jwt.sign({id: existingUser.id}, JWT_SECRET, {expiresIn: "1d"});
    res.status(201).json({message: "User successfully logged in", token: token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Server Error"});
    }
});

authRouter.get("/me", auth, async (req, res) => {
    
    try {
        const userId = req.userId;
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        if(!user){
            res.status(404).json({message: "User not found"});
            return;
        }
        
        res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Server Error"});
    }
})

export { authRouter };