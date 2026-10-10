const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    img: String,
    title: String,
    ingredients: [String],
    steps: [String],
    category: String,
    time: String,
    likes: { type: Number, default: 0 },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
