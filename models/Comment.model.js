const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },

    // Usuario que escribió el comentario
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Receta a la que pertenece el comentario
    recipe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
      required: true,
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Comment", commentSchema);
