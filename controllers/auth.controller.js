const bcrypt = require("bcryptjs");
const User = require('../models/User.model');
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Provide email, password and username" });
    }

    const foundUsername = await User.findOne({ username });
    if (foundUsername) {
      return res.status(401).json({ message: "Username already exists." });
    }

    const foundEmail = await User.findOne({ email });
    if (foundEmail) {
      return res.status(401).json({ message: "Email already exists." });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const createdUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    const { _id } = createdUser;

    return res.status(200).json({
      user: { _id, username, email }
    });

  } catch (error) {
    console.log(error);

    if (error.code === 11000) {
      return res.status(400).json({ message: "Duplicate field" });
    }

    return res.status(500).json({ message: "Server error during register" });
  }
};


exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Provide username and password." });
    }

    const foundUser = await User.findOne({ username });

    if (!foundUser) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const passwordCorrect = bcrypt.compareSync(password, foundUser.password);

    if (!passwordCorrect) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const { _id, email, username: userName } = foundUser;

    const payload = { _id, email, username: userName };

    const authToken = jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { algorithm: 'HS256', expiresIn: "6h" }
    );

    return res.status(200).json({ authToken });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error during login" });
  }
};


