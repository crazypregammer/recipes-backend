const express = require('express');
const User = require("../models/User.model");
const router = express.Router();
const authController = require('../controllers/auth.controller');
const verifyToken = require("../middlewares/verifyToken");   // ⭐ FALTABA ESTO

// ❗ NO proteger login ni register
router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/verify", verifyToken, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.status(200).json({ user });
});


module.exports = router;
