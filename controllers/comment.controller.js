const Recipe = require("../models/Recipe.model");

// ⭐ Crear comentario
exports.addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const recipeId = req.params.id;

    if (!text || text.trim() === "") {
      return res.status(400).json({ message: "Comment text is required" });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      recipeId,
      {
        $push: {
          comments: {
            text,
            author: req.user._id
          }
        }
      },
      { new: true }
    ).populate("comments.author", "username email");

    res.json(updatedRecipe);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error adding comment" });
  }
};

// ⭐ Borrar comentario
exports.deleteComment = async (req, res) => {
  try {
    const { id, commentId } = req.params;

    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    const comment = recipe.comments.id(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Solo el autor del comentario puede borrarlo
    if (String(comment.author) !== String(req.user._id)) {
      return res.status(403).json({ message: "Not allowed to delete this comment" });
    }

    comment.remove();
    await recipe.save();

    res.json({ message: "Comment deleted", recipe });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error deleting comment" });
  }
};

// ⭐ Editar comentario (opcional)
exports.editComment = async (req, res) => {
  try {
    const { id, commentId } = req.params;
    const { text } = req.body;

    const recipe = await Recipe.findById(id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    const comment = recipe.comments.id(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Solo el autor puede editar
    if (String(comment.author) !== String(req.user._id)) {
      return res.status(403).json({ message: "Not allowed to edit this comment" });
    }

    comment.text = text;
    await recipe.save();

    res.json({ message: "Comment updated", recipe });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error editing comment" });
  }
};
