import e from "express";
import dotenv from "dotenv"
import adminRouter from "./routes/admin.js";
import userRouter from "./routes/user.js";
import {connectDB} from "./db/config.js";
dotenv.config();
const app = e();


app.use(e.json());

app.use("/api/admin", adminRouter)
app.use("/api/user", userRouter)


const PORT = process.env.PORT || 3000;
connectDB().then(
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} and http://localhost:${PORT}`)
    })
)