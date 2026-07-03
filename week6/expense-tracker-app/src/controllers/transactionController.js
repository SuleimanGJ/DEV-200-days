import {transactionModel} from "../models/Transaction.js"
import {categoryModel} from "../models/Category.js"

    // Transactions
    //     GET    /transactions
    //     GET    /transactions/:id
    //     POST   /transactions
    //     PUT    /transactions/:id
    //     DELETE /transactions/:id

const getAllTransactions = async (req, res) => {
    const transactions = await transactionModel
      .find({ userId: req.userId })
      .populate("categoryId", "name type")
      .sort({ date: -1 });
    //   .sort({ createdAt: -1 });
    //   .sort({date: -1}) // sort in desc 
    //   .sort({createdAt: 1}) // sort in asc
    res.json({transactions});
}
const getTransactionById = async (req, res) => {
    const id = req.params.id;
  const transaction = await transactionModel.findOne({
    _id: id,
    userId: req.userId,
  });
  if(!transaction){
    return res.status(404).json({message: "You have no access"})
  }
  res.json({ transaction });
};

const createTransaction = async (req, res) => {
    const userId = req.userId;
    const category = await categoryModel.findOne({ userId: req.userId });
    if(!categories){
        return res.status(404).json({message: "Catrgory not found or not allowed"})
    }
    const {title, amount, type, note} = req.body;
    type = category.type;
    const newTransaction = await transactionModel.create({name, type, userId});
  res.json({ message: "Transaction created successfully" ,transactions: newTransaction });
};

const updateTransaction = async (req, res) => {
  const userId = req.userId;
  const { name, type } = req.body;
  const result = await transactionModel.findOneAndUpdate({ userId }, {name, type});
  if(result.deletedCount === 0){
    return res.status(404).json({message: "Transaction not found"})
  }
  res.json({
    message: "Transaction updated successfully"
  });
};
const deleteTransaction = async (req, res) => {
  const id = req.params.find;
  const userId = req.userId;
  await transactionModel.findOneAndDelete({ id, userId });
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