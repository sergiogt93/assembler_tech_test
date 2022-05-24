const router = require("express").Router();

const verifyToken = require("../middlewares/verifyToken");

const {
  getAllGifs,
  createGif,
  getGifsByCategory,
} = require("../controllers/gif.controller");

router.route("/").get(getAllGifs).post(verifyToken, createGif);

router.get("/search/:category", getGifsByCategory);

module.exports = router;
