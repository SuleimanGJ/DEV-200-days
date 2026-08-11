import express from "express";
import zod from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Account, User } from "../db.js";
import { JWT_SECRET } from "../config.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

const signupSchema = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string(),
});

userRouter.post("signup", async (req, res) => {
    const parsedBody = signupSchema.safeParse(req.body);
    if (!parsedBody.success){
        res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const {username, firstName, lastName, password} = parsedBody.data;
    const existingUser = await User.findOne({username});
    if(existingUser){
        res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({ username, firstName, lastName, password: hashedPassword });

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 1000
    });

    const token = jwt.sign(userId, JWT_SECRET);

    res.status(201).json({
        message: "User created successfully",
        token: token
    });
});



const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

userRouter.post("signin", async (req, res) => {
    const parsedBody = signupSchema.safeParse(req.body);
    if (!parsedBody.success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    const {username, password} = parsedBody.data;
    const existingUser = await User.findOne({username, password});
    if(existingUser){
        
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if(!isMatch){
            return res.status(411).json({
                message: "Incorrect inputs"
            });
        }
        const userId = existingUser._id;
        const token = jwt.sign(userId, JWT_SECRET);
        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })
});

const updateInfoSchema = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional(),
});

userRouter.put("/", authMiddleware, async (req, res) => {
    const parsedBody = updateInfoSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Error while updating information"
        });
    }

    const {firstName, lastName, password} = parsedBody.data;
    
    await User.updateOne({firstName, lastName, password}, {_id: req.userId});

    res.status(200).json({
        message: "Updated successfully"
    })
});

userRouter.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            },
            lastName: {
                "$regex": filter
            }
        }]
    });

    res.status(200).json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        })) 
    })
})

export { userRouter };