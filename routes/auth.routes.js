const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/verify", verifyToken, authController.verify);

module.exports = router;
