const { db } =  require('../db');

class MealPlansController {
  static createMealPlan(req, res) {
    const { name, date = new Date().toISOString().split('T')[0], recipe_ids, notes } = req.body;
    
    db.run('INSERT INTO meal_plans (name, date, recipe_ids, notes) VALUES (?, ?, ?, ?)', [name, date, recipe_ids, notes], (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json('Meal plan created successfully');
    });
  }

  static getAllMealPlans(req, res) {
    db.all('SELECT * FROM meal_plans', (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json(results);
    });
  }

  static deleteMealPlan(req, res) {
    const { id } = req.params;
    
    db.run('DELETE FROM meal_plans WHERE id = ?', [id], function(err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(400).json({ error: 'No meal plan with that id' });
      res.status(200).json('Meal plan deleted successfully');
    });
  }
}

module.exports = MealPlansController;