const express = require('express');
const cors = require('cors');
require("dotenv").config();
require('./config/db');

const app = express();

const authRoutes = require('./routes/auth.routes');
const recipeRoutes = require('./routes/recipe.routes');

app.use(cors());
app.use(express.json());

// rutas públicas
app.use("/api/auth", authRoutes);

// rutas protegidas
app.use("/api", recipeRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server running at PORT: 5005");
});
