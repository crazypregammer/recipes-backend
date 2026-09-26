const express = require('express');
const User = require("../models/User.model");
const router = express.Router();
const authController = require('../controllers/auth.controller');
const verifyToken = require("../middlewares/verifyToken");   // ⭐ FALTABA ESTO

// ❗ NO proteger login ni register
router.post("/register", authController.register);
router.post("/login", authController.login);

// ✔ Ruta verify funcionando
router.get("/verify", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Error verifying user" });
  }
});

module.exports = router;
