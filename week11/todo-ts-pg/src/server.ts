import express from "express";
import { PORT } from "./config/config.js";
import authRoute from "./routes/auth.js";
import todoRoute from "./routes/todo.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    try {
    res.json({
        message: "App is working!"
    });
    } catch (error) {
        console.error(error)
        console.log("error")
    }
});

app.use("/api/auth", authRoute);
app.use("/api/todo", todoRoute);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT} - http://localhost:${PORT}`);
})