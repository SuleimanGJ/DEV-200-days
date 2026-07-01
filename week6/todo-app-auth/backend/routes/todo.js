import express from "express";
import { Todo } from "../db/index.js";
import { authenticateJwt } from "../middleware/auth.js";
import { logger } from "../middleware/logger.js"

const router = express.Router();
router.use(logger);
router.use(authenticateJwt);

router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.userId });
        res.json({
          message: "Todo getted successfully",
          todos: todos,
        });
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
    
})
router.patch("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const {completed} = req.body;
        if (typeof completed === "undefined") {
          return res.status(400).json({
            msg: "You must provide a completed status.",
          });
        }
        await Todo.updateOne({ _id: id }, {completed: completed});
        res.json({
          message: "Todo marked as completed.",
        });
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
    
})
router.post("/", async (req, res) => {
    try {
        const {title} = req.body;
        const newTodo = await Todo.create({
            userId: req.userId,
            title: title,
            completed: false,
        });

        res.json({
            message: "Todo created successfully",
            todos: newTodo
        })
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
    
})


export default router;