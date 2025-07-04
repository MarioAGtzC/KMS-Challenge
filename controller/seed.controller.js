const { db } = require("../db");

class SeedController {
  static async generateSeedData(req, res) {
    await db.serialize(() => {
      db.run("DROP TABLE IF EXISTS meal_plans");
      db.run("DROP TABLE IF EXISTS recipes");

      db.run(`CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        instructions TEXT NOT NULL,
        ingredients TEXT NOT NULL,
        prep_time INTEGER NOT NULL
      )`);

      db.run(`CREATE TABLE IF NOT EXISTS meal_plans (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        date TEXT NOT NULL,
        recipe_ids TEXT NOT NULL,
        notes TEXT
      )`);

      const recipes = [
        {
          name: "Spaghetti Bolognese",
          category: "Dinner",
          instructions: "Cook pasta. Simmer meat sauce. Combine and serve.",
          ingredients: "Spaghetti, ground beef, tomato sauce, onion, garlic",
          prep_time: 30,
        },
        {
          name: "Grilled Chicken",
          category: "Dinner",
          instructions: "Season chicken. Grill until cooked through.",
          ingredients: "Chicken breast, olive oil, herbs, salt, pepper",
          prep_time: 25,
        },
        {
          name: "Chocolate Cake",
          category: "Dessert",
          instructions:
            "Mix batter. Bake at 350°F for 30 minutes. Let cool and frost.",
          ingredients: "Flour, sugar, cocoa, eggs, butter, baking powder",
          prep_time: 45,
        },
        {
          name: "Fruit Salad",
          category: "Dessert",
          instructions: "Chop fruits and mix with lemon juice and mint.",
          ingredients: "Strawberries, bananas, grapes, apple, lemon juice",
          prep_time: 10,
        },
        {
          name: "Omelette",
          category: "Breakfast",
          instructions:
            "Whisk eggs. Cook in pan with fillings. Fold and serve.",
          ingredients: "Eggs, cheese, ham, bell peppers, onion",
          prep_time: 10,
        },
        {
          name: "Pancakes",
          category: "Breakfast",
          instructions: "Mix batter. Cook on griddle until golden.",
          ingredients: "Flour, milk, eggs, sugar, baking powder",
          prep_time: 20,
        },
      ];

      const insertRecipe = db.prepare(
        `INSERT INTO recipes (name, category, instructions, ingredients, prep_time) VALUES (?, ?, ?, ?, ?)`
      );
      for (const r of recipes) {
        insertRecipe.run(
          r.name,
          r.category,
          r.instructions,
          r.ingredients,
          r.prep_time
        );
      }
      insertRecipe.finalize();

      const mealPlans = [
        {
          name: "Lunes Ligero",
          date: "2025-07-07",
          recipe_ids: "1,2",
          notes: "Comidas fáciles para arrancar la semana",
        },
        {
          name: "Martes de Pasta",
          date: "2025-07-08",
          recipe_ids: "3,6",
          notes: "Recetas italianas",
        },
        {
          name: "Desayunos Rápidos",
          date: "2025-07-09",
          recipe_ids: "4,5",
          notes: "Para empezar el día",
        },
        {
          name: "Repetidos para Prueba",
          date: "2025-07-10",
          recipe_ids: "2,3,2",
          notes: "Prueba con IDs repetidos",
        },
        {
          name: "Todo en Uno",
          date: "2025-07-11",
          recipe_ids: "1,2,3,4,5,6",
          notes: "Incluye todas las recetas disponibles",
        },
      ];

      const insertMealPlan = db.prepare(
        `INSERT INTO meal_plans (name, date, recipe_ids, notes) VALUES (?, ?, ?, ?)`
      );
      for (const m of mealPlans) {
        insertMealPlan.run(m.name, m.date, m.recipe_ids, m.notes);
      }
      insertMealPlan.finalize();
    });
    res.json({ message: "Seed completed" });
  }
}

module.exports = SeedController;
