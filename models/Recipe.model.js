const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    img: String,
    title: String,
    ingredients: [String],
    steps: [String],
    category: String,
    time: String,
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    comments: [
      {
        text: String,
        author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        }
      }
    ]
  },
  { timestamps: true }
);


module.exports = mongoose.model("Recipe", recipeSchema);
