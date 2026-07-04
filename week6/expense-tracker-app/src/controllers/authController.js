import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userModel } from "../models/User.js";
const SECRET = process.env.SECRET || "yoursupersecret0"

const register = async (req, res) => {
    const {username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
        username,
        email,
        password: hashedPassword
    });
    res.json({message: "User registered successfully"})
};


const login = async (req, res) => {
    const { email, password } = req.body;
    const userExists = userModel.findOne({email});
    if(!userExists){
        res.status(401).json({message: "User doesnot exists"})
    }

    const isMatch = await bcrypt.compare(password, userExists.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({id: userExists._id}, SECRET);

    res.json({message: "User logged in successfully", token: token})
};


export { register, login };