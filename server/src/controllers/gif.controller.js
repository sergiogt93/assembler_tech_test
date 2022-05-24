// Import models
const GifModel = require("../models/Gif");
const CategoryModel = require("../models/Category");

// Return all gifs
async function getAllGifs(_req, res) {
  try {
    const gifs = await GifModel.find().populate("category");
    res.status(200).json(gifs);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function createGif(req, res) {
  try {
    const { category, url } = req.body;

    const gif = await GifModel.findOne({ url });
    if (gif) res.status(404).json(error);

    const foundCategory = await CategoryModel.findById(category);
    if (!foundCategory) res.status(404).json(error);

    const newGif = await GifModel.create({ url, category });

    res.status(201).json(newGif);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function getGifsByCategory(req, res) {
  try {
    const { category } = req.params;

    const foundCategory = await CategoryModel.findOne({ name: category });
    if (!foundCategory) res.status(404).json(error);

    const gifs = await GifModel.find({ category: foundCategory._id }).populate(
      "category"
    );

    res.status(200).json(gifs);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  getAllGifs,
  createGif,
  getGifsByCategory,
};
