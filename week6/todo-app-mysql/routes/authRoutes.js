// import { Router } from "express";
import express from "express";
import { login, register } from "../controllers/authControllers.js";
const router = express.Router();

router.post("/signup", register);
router.post("/signin", login);

export default router;