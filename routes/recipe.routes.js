const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe.controller");
const verifyToken = require("../middlewares/verifyToken");

// ❌ Rutas públicas (NO llevan verifyToken)
router.get("/recipes", recipeController.getRecipes);
router.get("/recipes/:id", recipeController.getRecipeById);
router.post("/:id/comments", verifyToken, async (req, res) => {
  try {
    const { text } = req.body;

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: { text, author: req.user._id }
        }
      },
      { new: true }
    ).populate("comments.author");

    res.json(updatedRecipe);
  } catch (err) {
    res.status(500).json({ message: "Error adding comment" });
  }
});

// ✅ Rutas protegidas (SÍ llevan verifyToken)
router.post("/recipes", verifyToken, recipeController.createRecipe);
router.put("/recipes/:id", verifyToken, recipeController.updateRecipe);
router.delete("/recipes/:id", verifyToken, recipeController.deleteRecipe);

module.exports = router;
