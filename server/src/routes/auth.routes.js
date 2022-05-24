const router = require("express").Router();

const verifyToken = require("../middlewares/verifyToken");

const { signup } = require("../controllers/auth.controller");

router.post("/signup", verifyToken, signup);

module.exports = router;
