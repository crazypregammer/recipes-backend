const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    img: {
        type: String,
        required: true
    },
    title: {
      type: String,
      required: true
    },

    ingredients: {
      type: [String],
      required: true
    },

    steps: {
      type: [String],
      required: true
    },

    category: {
      type: String,
      required: true
    },

    time: {
      type: String,
      required: true
    },

    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
