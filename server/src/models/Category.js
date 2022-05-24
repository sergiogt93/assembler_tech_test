const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Required name"],
      unique: [true, "Required name"],
    },
  },
  { versionKey: false }
);

module.exports = model("Category", categorySchema);
