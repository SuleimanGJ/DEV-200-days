import express from "express";
import { userRouter } from "./user.js";
import { accountRouter } from "./account.js";

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/account", accountRouter);

export { rootRouter };