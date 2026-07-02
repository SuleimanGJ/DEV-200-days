import express from "express"
import cors from "cors"
import { connectToDB } from "./db/index.js"
import todoRouter  from "./routes/todo.js";
import userRouter from "./routes/user.js";


const app = express();
// app.use(cors({origin: "*"}))
app.use(express.json());
app.use(cors())
app.use(express.static("public"));

app.use("/todo", todoRouter);
app.use("/user", userRouter);

app.get("/hello", (req, res) => {
        console.log("App is working properly");
        res.send("App is working properly");
})

connectToDB().then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, ()=> {
        console.log(
          `Server is running on port ${PORT} - http://localhost:${PORT}`,
        );
    })
})