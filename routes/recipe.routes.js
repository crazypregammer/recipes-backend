const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe.model");
const recipeController = require("../controllers/recipe.controller");
const verifyToken = require("../middlewares/verifyToken");

// LIKE
router.post("/:id/like", verifyToken, async (req, res) => {
  const userId = req.user._id;

  const recipe = await Recipe.findById(req.params.id);

  const alreadyLiked = recipe.likedBy.some(
    u => u.toString() === userId.toString()
  );

  let updated;

  if (alreadyLiked) {
    updated = await Recipe.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { likedBy: userId },
        $inc: { likes: -1 }
      },
      { new: true }
    );
  } else {
    updated = await Recipe.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { likedBy: userId },
        $inc: { likes: 1 }
      },
      { new: true }
    );
  }

  res.json(updated);
});



// SEARCH
router.get("/search", async (req, res) => {
  const { query, category } = req.query;

  const filter = {};

  if (query) {
    filter.$or = [
      { title: new RegExp(query, "i") },
      { ingredients: { $elemMatch: { $regex: query, $options: "i" } } }
    ];
  }

  if (category) {
    filter.category = new RegExp(category, "i");
  }

  const recipes = await Recipe.find(filter);
  res.json(recipes);
});

// PUBLIC
router.get("/", recipeController.getRecipes);
router.get("/:id", recipeController.getRecipeById);

// PROTECTED
router.post("/", verifyToken, recipeController.createRecipe);
router.put("/:id", verifyToken, recipeController.updateRecipe);
router.delete("/:id", verifyToken, recipeController.deleteRecipe);

module.exports = router;
