import {categoryModel} from "../models/Category.js"

const getCategory = async (req, res) => {
    const categories = await categoryModel.find({ userId: req.userId }).sort({date: 1});
    res.json({categories});
}

const createCategory = async (req, res) => {
    const userId = req.userId;
    const {name, type} = req.body;
    const newCategory = await categoryModel.create({name, type, userId});
  res.json({ message: "Category created successfully" ,categories: newCategory });
};

const updateCategory = async (req, res) => {
  const userId = req.userId;
  const { name, type } = req.body;
  const result = await categoryModel.findOneAndUpdate(
    { userId },
    { name, type },
  );
  if(result.deletedCount === 0){
    return res.status(404).json({message: "Category not found"})
  }
  res.json({
    message: "Category updated successfully"
  });
};
const deleteCategory = async (req, res) => {
  const id = req.params.id;
  const userId = req.userId;
  await categoryModel.findOneAndDelete({ id, userId });
  res.json({
    message: "Category Deleted successfully",
  });
};

export { getCategory, createCategory, updateCategory, deleteCategory };