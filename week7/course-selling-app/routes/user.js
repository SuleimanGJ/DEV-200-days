import e from "express";
import jwt from "jsonwebtoken";
import { User } from "../db/index.js";
const router = e.Router();
const SECRET = "supersecret0";

router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    // do zod logic here
    const hashedPassword = await bcrypt.hash(password, 5);
    await User.create({ username, email, password: hashedPassword });
    res.json({ message: "User created successfully" });
})


router.post("/signin", async (req, res) => {
    const { username, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (!userExists) {
        return res.json({ message: "User doesn't exists" })
    }
    const isMatchPassword = await bcrypt.compare(password, userExists.password)
    if (!isMatchPassword) {
        return res.json({ message: "Incorrect password" })
    }
    const token = jwt.sign({ id: userExists._id }, SECRET) // to use userId - decoded.id

    // Do cookie logic
    res.json({ message: "User signed successfully", token: token });
})

export default router;