const Recipe = require("../models/Recipe.model");

// GET ALL
exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
      .populate("creator", "username"); // solo info necesaria

    res.json(recipes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error getting recipes" });
  }
};

// GET ONE (SIEMPRE SE PUEDE VER, ESTÉS LOGUEADA O NO)
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
      .populate("creator", "username")     // esto sí
      .populate("likedBy", "_id");         // SOLO _id → evita errores

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json(recipe);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error getting recipe" });
  }
};

// CREATE
exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      creator: req.user._id
    });

    res.json(newRecipe);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating recipe" });
  }
};

// UPDATE
exports.updateRecipe = async (req, res) => {
  try {
    const updated = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error updating recipe" });
  }
};

// DELETE
exports.deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error deleting recipe" });
  }
};
