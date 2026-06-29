import express from "express";
import jwt from "jsonwebtoken"
import { User } from "../db/index.js";
import { SECRET } from "../middleware/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("user route its fine");
})

router.post("/signup", async (req, res) => {
  const {username, password} = req.body;

  console.log(username, password)
  const userExists = await User.findOne({username})

  if(userExists){
    return res.json({
        message: "User already exists"
    })
  }

  await User.create({username, password});

  res.status(201).json({
    message: "User signed up successfully",
  });
  
})
router.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username: username, password: password});
    if(!user) {
        return res.status(401).json({
        message: "Invalid username or password",
        });
    }
    
    const token = jwt.sign({userId: user._id}, SECRET);
    
      res.status(200).json({
        message: "User signed in successfully",
        token: token
      });
})


export default router;