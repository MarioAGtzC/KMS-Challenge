const { db } =  require('../db');

class RecipesController {
  static getAllRecipes(req, res) {
    const { category } = req.query;
    db.all('SELECT * FROM recipes WHERE category = ?', [category], (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      res.status(200).json(results);
    });
  }

  static getRecipeById(req, res) {
    const { id } = req.params;    
    db.get('SELECT * FROM recipes WHERE id = ?', [id], (err, result) => {
      if (err || !result) return res.status(404).json({ error: 'Recipe not found' });
      res.status(200).json(result);
    });
  }

  static createRecipe(req, res) {
    const { name, category, instructions, ingredients, prep_time } = req.body;
    db.run('INSERT INTO recipes (name, category, instructions, ingredients, prep_time) VALUES (?, ?, ?, ?, ?)', [
      name, category, instructions, ingredients, prep_time
    ], (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.status(201).json('Recipe created successfully');
    });
  }
}

module.exports = RecipesController;