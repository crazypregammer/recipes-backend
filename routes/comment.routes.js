const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");

const {
  addComment,
  deleteComment,
  editComment
} = require("../controllers/comment.controller");

// Crear comentario
router.post("/:id/comments", verifyToken, addComment);

// Borrar comentario
router.delete("/:id/comments/:commentId", isAuthenticated, deleteComment);

// Editar comentario
router.put("/:id/comments/:commentId", isAuthenticated, editComment);

module.exports = router;
