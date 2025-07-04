const { Router } = require('express');
const RecipesController = require('../controller/recipes.controller');

const router = Router();

router.get('/', RecipesController.getAllRecipes);

router.get('/:id', RecipesController.getRecipeById);

router.post('/', RecipesController.createRecipe);

module.exports = router;