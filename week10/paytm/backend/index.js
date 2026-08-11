import express from "express";
import cors from "cors"
import { rootRouter } from "./routes/index.js";
import { connectDB } from "./config.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter)

connectDB().then(()=> {
    app.listen(3000, () => {
        console.log(`Server listening http//localhost:3000`);
    })
})