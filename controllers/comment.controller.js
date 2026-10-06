const Comment = require("../models/Comment.model");
const Recipe = require("../models/Recipe.model");

exports.addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const recipeId = req.params.id;

    if (!text || text.trim() === "") {
      return res.status(400).json({ message: "Comment text is required" });
    }

    // Verificar que la receta existe
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    const newComment = await Comment.create({
      text,
      author: req.user._id,
      recipe: recipeId
    });

    const populatedComment = await newComment.populate("author", "username email");

    res.status(201).json(populatedComment);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error adding comment" });
  }
};

exports.getCommentsByRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;

    const comments = await Comment.find({ recipe: recipeId })
      .populate("author", "username email")
      .sort({ createdAt: -1 });

    res.json(comments);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching comments" });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (String(comment.author) !== String(req.user._id)) {
      return res.status(403).json({ message: "Not allowed to delete this comment" });
    }

    await Comment.findByIdAndDelete(commentId);

    res.json({ message: "Comment deleted" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error deleting comment" });
  }
};

exports.editComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { text } = req.body;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (String(comment.author) !== String(req.user._id)) {
      return res.status(403).json({ message: "Not allowed to edit this comment" });
    }

    comment.text = text;
    await comment.save();

    res.json({ message: "Comment updated", comment });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error editing comment" });
  }
};
