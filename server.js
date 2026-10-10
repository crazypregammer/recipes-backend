const express = require('express');
const cors = require('cors');
require("dotenv").config();
require('./config/db');

const app = express();

const userRoutes = require("./routes/user.routes");
const authRoutes = require('./routes/auth.routes');
const recipeRoutes = require('./routes/recipe.routes');
const commentRoutes = require("./routes/comment.routes");

app.use(cors());
app.use(express.json());

// rutas públicas
app.use("/api/auth", authRoutes);

// rutas de recetas
app.use("/api/recipes", recipeRoutes);
app.use("/api/users", userRoutes);


// rutas de comentarios
app.use("/api/comments", commentRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server running at PORT: 5005");
});
