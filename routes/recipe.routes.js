const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe.controller");
const verifyToken = require("../middlewares/verifyToken");
const uploader = require("../middlewares/cloudinary.config.js");

router.post("/upload", uploader.single("imageUrl"), (req, res, next) => {
  console.log("file is: ", req.file);

  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }

  res.json({ imageUrl: req.file.path });
});

module.exports = router;
// Rutas públicas
router.get("/recipes", recipeController.getRecipes);
router.get("/recipes/:id", recipeController.getRecipeById);

// Rutas protegidas
router.post("/recipes", verifyToken, recipeController.createRecipe);
router.put("/recipes/:id", verifyToken, recipeController.updateRecipe);
router.delete("/recipes/:id", verifyToken, recipeController.deleteRecipe);

module.exports = router;
