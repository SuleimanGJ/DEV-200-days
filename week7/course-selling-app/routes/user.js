import e from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Purchase, User, Course } from "../db/index.js";
import userAuth from "../middleware/user.js";
import { JWT_USER_SECRET } from "../db/config.js";
const router = e.Router();

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
    const token = jwt.sign({ id: userExists._id }, JWT_USER_SECRET) // to use userId - decoded.id

    // Do cookie logic
    res.json({ message: "User signed successfully", token: token });
})

router.get('/courses', async (req, res) => {
    const courses = await Course.find({});
    res.json({ courses: courses })
});

router.post('/courses/:courseId', userAuth, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const { userId } = req;
    await Purchase.updateOne({userId: userId}, {$push: {courseId: courseId}})
    res.json({message: "Purchase complete"})
});

router.get('/purchasedCourses', userAuth,  async (req, res) => {
    // Implement fetching purchased courses logic
    const { userId } = req;
    const purchasedUser = await Purchase.findOne({userId})
    if(!purchasedUser){
        return res.json({message: "User not found"});
    }
    const purchasedCourses = await Course.find({_id: {
        $in : purchasedUser.map(x => x.courseId)
    }})
    // console.log(purchasedCourses)
    res.json(purchasedCourses)
});

export default router;