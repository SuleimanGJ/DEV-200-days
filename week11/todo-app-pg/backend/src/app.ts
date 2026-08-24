import express from "express";
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.send({message: "App is working"})
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Server error"})
  }
});




export default app;