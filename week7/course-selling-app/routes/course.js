import e from "express";
import { Purchase, Course } from "../db/index.js";
import userAuth from "../middleware/user.js";
const router = e.Router();


router.post('/courses/:courseId', userAuth, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const { userId } = req;
    // you should check that the user has actually paid the price in real app
    await Purchase.updateOne({userId: userId}, {$push: {courseId: courseId}})
    res.json({message: "Purchase complete"})
});


router.get('/preveiw', async (req, res) => {
    const courses = await Course.find({});
    res.json({ courses: courses })
});

export default router;