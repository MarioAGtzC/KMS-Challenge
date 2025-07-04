const { Router } = require('express');
const seedRoutes = require('./seed.routes');
const recipesRoutes = require('./recipes.routes');
const mealPlansRoutes = require('./mealPlans.routes');

const router = Router();

router.use('/recipes', recipesRoutes);
router.use('/meal-plans', mealPlansRoutes);
router.use('/seed', seedRoutes);

module.exports = router;