const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe.controller");
const verifyToken = require("../middlewares/verifyToken");

// ❌ Rutas públicas (NO llevan verifyToken)
router.get("/recipes", recipeController.getRecipes);
router.get("/recipes/:id", recipeController.getRecipeById);

// ✅ Rutas protegidas (SÍ llevan verifyToken)
router.post("/recipes", verifyToken, recipeController.createRecipe);
router.put("/recipes/:id", verifyToken, recipeController.updateRecipe);
router.delete("/recipes/:id", verifyToken, recipeController.deleteRecipe);

module.exports = router;
