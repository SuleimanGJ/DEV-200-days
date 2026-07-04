import { transactionModel } from "../models/Transaction.js"
import { categoryModel } from "../models/Category.js"

// Transactions
//     GET    /transactions
//     GET    /transactions/:id
//     POST   /transactions
//     PUT    /transactions/:id
//     DELETE /transactions/:id

const getAllTransactions = async (req, res) => {
  const userId = req.userId;
  // Base query
  const query = {
    userId: req.user.id
  };

  // filters dynamically - category filter
  if (req.query.categoryId) {
    query.categoryId = req.query.categoryId
  }

  // date range filter
  if (req.query.startDate && req.query.endDate) {
    query.date = {
      $gte: new Date(req.query.startDate),
      $lte: new Date(req.query.endDate)
    };
  }

  // sorting
  let sort = {};

  if (req.query.sort) {
    sort[req.query.sort] = req.query.order === "desc" ? -1 : 1;
  } else {
    sort.date = -1; // default
  }

  const transactions = await Transaction.find(query)
    .populate("categoryId")
    .sort(sort);

  // const transactions = await transactionModel
  //   .find({ userId })
  //   .populate("categoryId", "name type")
  //   .sort({ createdAt: -1 });

  res.json({
    message: "Transactions fetched successfully", transactions
  });
}


const getTransactionById = async (req, res) => {
  const userId = req.userId;
  const transactionId = req.params.id;
  const transaction = await transactionModel.findOne({
    _id: transactionId,
    userId: userId,
  });
  if (!transaction) {
    return res.status(404).json({ message: "You have no access" })
  }
  res.json({
    message: "Transaction fetched successfully",
    transaction
  });
};

const createTransaction = async (req, res) => {
  const userId = req.userId;
  const { categoryId } = req.body;
  const category = await categoryModel.findOne({
    _id: categoryId,
    userId: userId,
  });
  if (!category) {
    return res.status(404).json({ message: "Catrgory not found or not allowed" })
  }
  const { title, amount, note } = req.body;

  const newTransaction = await transactionModel.create({
    title,
    amount,
    type: category.type,
    note,
    userId,
    categoryId,
  });

  await newTransaction.populate("categoryId", "name type");
  res.json({ message: "Transaction created successfully", transactions: newTransaction });
};

const updateTransaction = async (req, res) => {
  const userId = req.userId;
  const transactionId = req.params.id;
  const { title, amount, note } = req.body;

  const result = await transactionModel.findOneAndUpdate(
    { _id: transactionId, userId },
    { title, amount, note },
    { new: true },
  ).populate("categoryId", "name type");

  if (!result) {
    return res.status(404).json({ message: "Transaction not found" })
  }
  res.json({
    message: "Transaction updated successfully",
    transaction: result,
  });
};
const deleteTransaction = async (req, res) => {
  const transactionId = req.params.find;
  const userId = req.userId;
  await transactionModel.findOneAndDelete({ transactionId, userId });
  res.json({
    message: "Transaction Deleted successfully",
  });
};

export {
  getAllTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};