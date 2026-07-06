import e from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Admin, Course } from "../db/index.js";
import adminAuth from "../middleware/admin.js";
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

router.post("/course", adminAuth, async (req, res) => {
    const {title, description, imageUrl, price } = req.body;
    const course = await Course.create({ title, description, imageUrl, price });
    res.json({
        message: "Course created successfully",
        courseId: course._id
    })
})

router.put("/course", adminAuth, async (req, res) => {
    const { adminId } = req.headers;
    const {title, description, imageUrl, price, courseId } = req.body;
    const course = await Course.findIne({ _id: courseId });
    if(!course){
        return res.json({meassage: "Course not found or you don't have access"});
    }

    const updatedCourse = await Course.updateOne({creatorId: adminId},{ title, description, imageUrl, price });

    res.json({
        message: "Course updated successfully",
        courseId: updatedCourse._id
    })
})

router.get("/course", adminAuth, async (req, res) => {
    const adminId = req.headers.adminId;
    const courses = await Course.find({creatorId: adminId});
    res.json({courses: courses})
})

export default router;