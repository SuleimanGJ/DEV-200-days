import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const transactionSchema = Schema({
  userId: { type: ObjectId, ref: "user" },
  categoryId: { type: ObjectId, ref: "category" }, 
  title: String,
  amount: Number,
  type: { type: String, enum: ["income", "expense"], required: true },
  note: String,
  date: { type: Date, required: true, default: Date.now },
});

// confused with categoryId(use populate()) and type - i decide to store categoryId then i realize if i store type users maybe he change (the type he previous selected in category)

const transactionModel = mongoose.model("transaction", transactionSchema);

export { transactionModel };
