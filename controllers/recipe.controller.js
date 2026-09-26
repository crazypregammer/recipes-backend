const Recipe = require('../models/Recipe.model');

exports.getRecipes = async (req, res) => {
    try {
        const allRecipes = await Recipe.find();
        res.status(200).json(allRecipes);
    } catch (error) {
        console.log("error");
    }
}

exports.getRecipeById = async (req, res) => {
    try {
        const foundRecipe = await Recipe.findById(req.params.id);
        res.status(200).json(foundRecipe);
    } catch (error) {
        console.log(error);
    }
}

exports.createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;

    if (!title || !ingredients || !instructions) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const newRecipe = await Recipe.create({
      title,
      ingredients,
      instructions,
      owner: req.user._id   // viene del verifyToken
    });

    res.status(201).json(newRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating recipe" });
  }
};

// 📌 Editar receta (PROTEGIDA)
exports.updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating recipe" });
  }
};

// 📌 Eliminar receta (PROTEGIDA)
exports.deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting recipe" });
  }
};