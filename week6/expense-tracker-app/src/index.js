import e from "express";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import authMiddleware from "./middleware/authMiddleware.js";
import authRoute from "./routes/authRouter.js"
import categoryRoute from "./routes/categoryRouter.js"
import transactionRoute from "./routes/transactionRouter.js"
// import dashboardRoute from "./routes/dashboardRouter.js"
const app = e();
const PORT = process.env.PORT || 3000;

app.use(e.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/categories", authMiddleware, categoryRoute);
app.use("/api/transactions", authMiddleware, transactionRoute);
// app.use("/api/dashboard", authMiddleware, dashboardRoute);

connectDB().then(()=> {
    app.listen(PORT, () => {
      console.log(
        `Server is running successfully on port ${PORT} - http://localhost:${PORT}`,
      );
    });
})
