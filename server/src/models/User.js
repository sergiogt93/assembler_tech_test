const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    uid: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Required username"],
      unique: [true, "Required unique username"],
    },
  },
  { versionKey: false }
);

module.exports = model("User", userSchema);
