const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const verifyToken = require("../middlewares/verifyToken");

// GET user
router.get("/:userId", verifyToken, async (req, res) => {
  const user = await User.findById(req.params.userId).populate("favorites");
  res.json({user});
});

// ADD favorite
router.post("/:userId/favorites/:recipeId", verifyToken, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $addToSet: { favorites: req.params.recipeId } },
      { new: true }
    ).populate("favorites");

    res.json({user});
  } catch (err) {
    res.status(500).json({ message: "Error adding favorite" });
  }
});

// REMOVE favorite
router.delete("/:userId/favorites/:recipeId", verifyToken, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { $pull: { favorites: req.params.recipeId } },
      { new: true }
    ).populate("favorites");

    res.json({user});
  } catch (err) {
    res.status(500).json({ message: "Error removing favorite" });
  }
});

module.exports = router;
