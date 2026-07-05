import e from "express";
import adminRouter from "./routes/admin.js";
import userRouter from "./routes/user.js";

const app = e();


app.use(e.json());

app.use("/api/admin", adminRouter)
app.use("/api/user", userRouter)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} and http://localhost:${PORT}`)
})