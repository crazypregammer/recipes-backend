const mongoose = require("mongoose");
const Recipe = require("../models/Recipe.model");

const MONGO_URI = "mongodb://127.0.0.1:27017/recipesDB";

const userId = new mongoose.Types.ObjectId("6ac52af47aee7fb345559e15");

const recipes = [
  {
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    title: "Creamy Garlic Chicken Pasta",
    ingredients: [
      "250 g pasta",
      "2 chicken breasts",
      "3 cloves garlic, minced",
      "1 cup heavy cream",
      "1/2 cup grated Parmesan cheese",
      "1 tablespoon olive oil",
      "1 tablespoon butter",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1 tablespoon chopped parsley"
    ],
    steps: [
      "Cook the pasta according to the package instructions.",
      "Cut the chicken breasts into bite-sized pieces.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Cook the chicken for 5 to 7 minutes until golden and fully cooked.",
      "Add butter and garlic and cook for 1 minute.",
      "Pour in the heavy cream and bring to a gentle simmer.",
      "Add Parmesan cheese, salt, and black pepper.",
      "Add the cooked pasta and mix until well coated.",
      "Garnish with parsley and serve."
    ],
    category: "Pasta",
    time: "30 minutes",
    creator: userId
  },

  {
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    title: "Fresh Mediterranean Salad",
    ingredients: [
      "2 cups lettuce, chopped",
      "1 cucumber, diced",
      "2 tomatoes, diced",
      "1/2 red onion, sliced",
      "1/2 cup Kalamata olives",
      "100 g feta cheese",
      "2 tablespoons olive oil",
      "1 tablespoon lemon juice",
      "1 teaspoon dried oregano",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper"
    ],
    steps: [
      "Wash and prepare all the vegetables.",
      "Place the lettuce, cucumber, tomatoes, onion, and olives in a large bowl.",
      "Add the feta cheese.",
      "Mix olive oil, lemon juice, oregano, salt, and pepper in a small bowl.",
      "Pour the dressing over the salad.",
      "Toss gently until everything is combined.",
      "Serve immediately."
    ],
    category: "Salad",
    time: "15 minutes",
    creator: userId
  },

  {
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    title: "Classic Margherita Pizza",
    ingredients: [
      "300 g pizza dough",
      "150 g tomato sauce",
      "200 g fresh mozzarella",
      "10 fresh basil leaves",
      "1 tablespoon olive oil",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper"
    ],
    steps: [
      "Preheat the oven to 250°C (480°F).",
      "Stretch the pizza dough into a round shape.",
      "Spread tomato sauce evenly over the dough.",
      "Add mozzarella cheese.",
      "Season with salt and black pepper.",
      "Bake for 8 to 12 minutes until golden.",
      "Add fresh basil leaves.",
      "Drizzle with olive oil and serve hot."
    ],
    category: "Pizza",
    time: "25 minutes",
    creator: userId
  },

  {
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    title: "Creamy Tomato Soup",
    ingredients: [
      "800 g crushed tomatoes",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "2 tablespoons olive oil",
      "2 cups vegetable broth",
      "1/2 cup heavy cream",
      "1 teaspoon dried basil",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper"
    ],
    steps: [
      "Heat olive oil in a large pot.",
      "Add the onion and cook until soft.",
      "Add garlic and cook for 1 minute.",
      "Add tomatoes, vegetable broth, basil, salt, and pepper.",
      "Simmer for 15 minutes.",
      "Blend until smooth.",
      "Add heavy cream and cook for another 2 minutes.",
      "Serve hot."
    ],
    category: "Soup",
    time: "30 minutes",
    creator: userId
  },

  {
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    title: "Classic Beef Burger",
    ingredients: [
      "500 g ground beef",
      "4 burger buns",
      "4 slices cheddar cheese",
      "1 tomato, sliced",
      "4 lettuce leaves",
      "1/2 red onion, sliced",
      "2 tablespoons mayonnaise",
      "2 tablespoons ketchup",
      "1 tablespoon mustard",
      "1 teaspoon salt",
      "1/2 teaspoon black pepper"
    ],
    steps: [
      "Divide the ground beef into four portions.",
      "Shape each portion into a burger patty.",
      "Season both sides with salt and pepper.",
      "Cook the patties for 4 to 5 minutes per side.",
      "Add cheddar cheese during the last minute.",
      "Toast the burger buns.",
      "Spread mayonnaise, ketchup, and mustard on the buns.",
      "Add lettuce, tomato, onion, and the beef patty.",
      "Serve immediately."
    ],
    category: "Burgers",
    time: "25 minutes",
    creator: userId
  },

  {
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    title: "Chocolate Chip Cookies",
    ingredients: [
      "1 cup all-purpose flour",
      "1/2 cup butter, softened",
      "1/2 cup brown sugar",
      "1/4 cup white sugar",
      "1 large egg",
      "1 teaspoon vanilla extract",
      "1/2 teaspoon baking soda",
      "1/4 teaspoon salt",
      "1 cup chocolate chips"
    ],
    steps: [
      "Preheat the oven to 180°C (350°F).",
      "Cream together butter and both sugars.",
      "Add the egg and vanilla extract.",
      "Mix flour, baking soda, and salt separately.",
      "Gradually add the dry ingredients to the wet ingredients.",
      "Fold in the chocolate chips.",
      "Place spoonfuls of dough on a baking sheet.",
      "Bake for 10 to 12 minutes.",
      "Let the cookies cool before serving."
    ],
    category: "Dessert",
    time: "25 minutes",
    creator: userId
  },

  {
    img: "https://images.unsplash.com/photo-1556761223-4c4282c73f77",
    title: "Classic Spaghetti Bolognese",
    ingredients: [
      "300 g spaghetti",
      "400 g ground beef",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 carrot, diced",
      "1 celery stalk, diced",
      "400 g crushed tomatoes",
      "2 tablespoons tomato paste",
      "1 tablespoon olive oil",
      "1 teaspoon dried oregano",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "50 g Parmesan cheese"
    ],
    steps: [
      "Cook the spaghetti according to the package instructions.",
      "Heat olive oil in a large pan.",
      "Add onion, carrot, and celery and cook for 5 minutes.",
      "Add garlic and cook for 1 minute.",
      "Add ground beef and cook until browned.",
      "Add tomato paste and cook for 1 minute.",
      "Add crushed tomatoes and seasonings.",
      "Simmer for 20 minutes.",
      "Add spaghetti to the sauce and mix well.",
      "Serve with Parmesan cheese."
    ],
    category: "Pasta",
    time: "40 minutes",
    creator: userId
  },

  {
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
    title: "Strawberry Cheesecake",
    ingredients: [
      "200 g digestive biscuits",
      "100 g melted butter",
      "500 g cream cheese",
      "100 g powdered sugar",
      "1 teaspoon vanilla extract",
      "200 ml heavy cream",
      "250 g fresh strawberries",
      "2 tablespoons strawberry jam"
    ],
    steps: [
      "Crush the digestive biscuits into fine crumbs.",
      "Mix the crumbs with melted butter.",
      "Press the mixture into a springform pan.",
      "Refrigerate for 30 minutes.",
      "Beat cream cheese, powdered sugar, and vanilla until smooth.",
      "Whip the heavy cream until stiff.",
      "Fold the whipped cream into the cream cheese mixture.",
      "Spread the filling over the crust.",
      "Refrigerate for at least 4 hours.",
      "Top with strawberries and strawberry jam."
    ],
    category: "Dessert",
    time: "4 hours 30 minutes",
    creator: userId
  },

  {
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    title: "Avocado Toast with Poached Egg",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tablespoon lemon juice",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1/4 teaspoon chili flakes",
      "1 teaspoon olive oil"
    ],
    steps: [
      "Toast the sourdough bread until golden.",
      "Mash the avocado with lemon juice, salt, and pepper.",
      "Bring a pot of water to a gentle simmer.",
      "Crack each egg into the water and poach for 3 to 4 minutes.",
      "Spread mashed avocado over the toast.",
      "Place a poached egg on each slice.",
      "Sprinkle with chili flakes.",
      "Drizzle with olive oil and serve."
    ],
    category: "Breakfast",
    time: "15 minutes",
    creator: userId
  },

  {
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    title: "Creamy Chicken Curry",
    ingredients: [
      "500 g chicken breast",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 tablespoon curry powder",
      "1 teaspoon paprika",
      "400 ml coconut milk",
      "200 g crushed tomatoes",
      "1 tablespoon olive oil",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1 tablespoon chopped cilantro"
    ],
    steps: [
      "Cut the chicken into bite-sized pieces.",
      "Heat olive oil in a large skillet.",
      "Cook the onion until softened.",
      "Add garlic, curry powder, and paprika.",
      "Add the chicken and cook until lightly browned.",
      "Pour in the coconut milk and crushed tomatoes.",
      "Season with salt and pepper.",
      "Simmer for 15 to 20 minutes until the chicken is fully cooked.",
      "Garnish with fresh cilantro.",
      "Serve with rice."
    ],
    category: "Main Course",
    time: "35 minutes",
    creator: userId
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected");
    console.log("Database:", mongoose.connection.name);

    // Borra las recetas anteriores para evitar duplicados
    await Recipe.deleteMany({});

    const insertedRecipes = await Recipe.insertMany(recipes);

    console.log(`${insertedRecipes.length} recipes inserted successfully`);

    const total = await Recipe.countDocuments();

    console.log(`Total recipes in database: ${total}`);

    await mongoose.disconnect();

    console.log("MongoDB disconnected");
  } catch (error) {
    console.error("Seed error:", error);

    if (mongoose.connection.readyState) {
      await mongoose.disconnect();
    }

    process.exit(1);
  }
}

seed();
