import express from "express";
import cors from "cors"
const app = express();
import { PORT } from "./config/config.js";
import { connectToDB } from "./config/db.js";
import { todoRouter } from "./routes/todoRoutes.js";

// import { fileURLToPath } from 'url';
// import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.send("App is working");
})

app.use("/todos", todoRouter);

connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log(
            `Server is running successfully on port ${PORT} - http://localhost:${PORT}`,
        )
    })
})