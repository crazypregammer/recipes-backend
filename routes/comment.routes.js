const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");

const {
  addComment,
  deleteComment,
  editComment,
  getCommentsByRecipe
} = require("../controllers/comment.controller");

// Obtener comentarios de una receta
router.get("/recipe/:recipeId", getCommentsByRecipe);

// Crear comentario
router.post("/recipe/:recipeId", verifyToken, addComment);

// Editar comentario
router.put("/:commentId", verifyToken, editComment);

// Borrar comentario
router.delete("/:commentId", verifyToken, deleteComment);

module.exports = router;
