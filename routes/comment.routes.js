const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");

const {
  getCommentsByRecipe,
  addComment,
  editComment,
  deleteComment
} = require("../controllers/comment.controller");

// GET comentarios de una receta
router.get("/recipe/:recipeId", getCommentsByRecipe);

// POST crear comentario
router.post("/recipe/:recipeId", verifyToken, addComment);

// PUT editar comentario
router.put("/:commentId", verifyToken, editComment);

// DELETE borrar comentario
router.delete("/:commentId", verifyToken, deleteComment);

module.exports = router;
