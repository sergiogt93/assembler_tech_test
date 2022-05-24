const { Schema, model, Types } = require("mongoose");

const gifSchema = new Schema(
  {
    url: {
      type: String,
      required: [true, "Required url"],
      unique: [true, "Required unique url"],
    },
    category: {
      type: Types.ObjectId,
      ref: "Category",
      required: [true, "The category is required"],
    },
  },
  { versionKey: false }
);

module.exports = model("Gif", gifSchema);
