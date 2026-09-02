import express from "express";
import { main } from "./routes/index.js";
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.json({ message: 'Todo API is running' });
});

app.use("/api/v1", main)

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})