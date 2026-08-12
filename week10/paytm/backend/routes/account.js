import express from "express";
import { Account } from "../db.js";
import mongoose from "mongoose";
import { authMiddleware } from "../middleware/authMiddleware.js";

const accountRouter = express.Router();

accountRouter.get("/balance", authMiddleware, async (req, res) => {
    const userId = req.userId;

    const account = await Account.findOne({userId});

    res.status(200).json({
        balance: account.balance
    });
});

// Bad solution - transaction in db

// accountRouter.post("/transfer", async (req, res) => {
//     const {amount, to} = req.body;

//     const userId = req.userId;
//     const account = await Account.findOne({userId});

//     if(account.balance < amount){
//         return res.status(400).json({message: "Insufficient balance"});
//     }

//     const toAccount = await Account.findOne({userId: to});

//     if(!toAccount){
//         return res.status(400).json({ message: "Invalid account" });
//     }

//     await Account.updateOne({userId: userId}, {$inc: {balance: -amount}})

//     await Account.updateOne({userId: to}, {$inc: {balance: amount}})

//     res.status(200).json({
//         message: "Transfer successfully"
//     });
// });

// Bad solution - transaction in db

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    await session.startTransaction();
    const {amount, to} = req.body;

    const userId = req.userId;
    const account = await Account.findOne({userId}).session(session);

    if(account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({message: "Insufficient balance"});
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({ message: "Invalid account" });
    }

    await Account.updateOne({ userId: userId }, { $inc: { balance: -amount } }).session(session);

    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction();
    res.status(200).json({
        message: "Transfer successfully"
    });
});

// usage for transfer route
// ({
//     userId: "65ac44e10ab2ec750ca666a5", // from req.userId
//     body: {
//         to: "65ac44e40ab2ec750ca666aa",
//         amount: 100
//     }
// })

export { accountRouter };