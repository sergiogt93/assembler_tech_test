//Import models
const User = require("../models/User");

//Register a new user
async function signup(req, res) {
  try {
    const { uid, email } = req.user;
    try {
      const user = await User.findOne({ email: email });

      if (user) {
        return res.status(404).json({ error: "User exist" });
      }

      const newUser = await User.create({
        uid: uid,
        email: email,
      });

      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  } catch (error) {
    res.status(404).json(error);
  }
}

module.exports = {
  signup,
};
