import e from "express";
import authRouter from "./routes/authRoutes.js";
import todoRouter from "./routes/todoRoutes.js";
import auth from "./middleware/auth.js";
const app = e();
const PORT = process.env.PORT || 3000;


app.use(e.json())
app.get("/", (req, res) => {
    console.log("Index route is working");
    res.send("Index route is working");
});

app.use("/api/auth", authRouter);
app.use("/api/todo", auth, todoRouter);

app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT} - http://localhost:${PORT}`)
})