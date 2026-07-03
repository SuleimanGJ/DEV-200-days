import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const categorySchema = Schema(
  {
    name: String,
    type: { type: String, enum: ["income", "expense"], required: true },
    userId: { type: ObjectId, ref: "user" },
  },
  { timestamps: true },
);


const categoryModel = mongoose.model("category", categorySchema);


export {categoryModel}