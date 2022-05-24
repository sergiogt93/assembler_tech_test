// Import models
const CategoryModel = require("../models/Category");

// Return all gifs
async function getAllCategories(_req, res) {
  try {
    const categories = await CategoryModel.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  getAllCategories,
};
