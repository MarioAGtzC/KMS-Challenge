const { Router } = require('express');
const MealPlansController = require('../controller/mealPlans.controller');

const router = Router();

router.post('/', MealPlansController.createMealPlan);

router.get('/', MealPlansController.getAllMealPlans);

router.delete('/:id', MealPlansController.deleteMealPlan);

module.exports = router;