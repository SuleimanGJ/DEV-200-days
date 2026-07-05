import e from "express";
import jwt from "jsonwebtoken";
import { Admin } from "../db";
const router = e.Router();
const SECRET = "supersecret0";

router.post("/signup", async(req, res) => {
    const {username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);
    await Admin.create({ username, email, password: hashedPassword });
    res.json({ message: "Admin created successfully" });
})



router.post("/signin", async(req, res) => {
    const {username, email, password } = req.body;
    const adminExists = await Admin.findOne({email});
    if(!adminExists){
        return res.json({message: "Admin doesn't exists"})
    }
    const isMatchPassword = await bcrypt.compare(password, adminExists.password)
    if(!isMatchPassword){
        return res.json({ message: "Incorrect password" })
    }
    const token = jwt.sign({id: adminExists._id}, SECRET) // to use userId - decoded.id

    // Do cookie logic
    res.json({ message: "Admin signed successfully", token: token});
})

export default router;