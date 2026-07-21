import express from "express";
const app = express();
import { PORT } from "./config/config.js";
import { connectToDB } from "./config/db.js";

app.use(express.json());

app.get("/", (req, res) => {
    res.send("App is working");
})

connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log(
            `Server is running successfully on port ${PORT} - http://localhost:${PORT}`,
        )
    })
})