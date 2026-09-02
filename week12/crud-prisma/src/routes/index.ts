import express from "express";
import { authRouter } from "./auth.js";
const main = express.Router();

main.use("/auth", authRouter);

export { main };