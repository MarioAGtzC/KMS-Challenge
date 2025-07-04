const { Router } = require('express');
const SeedController = require('../controller/seed.controller');

const router = Router();

router.get('/', SeedController.generateSeedData);

module.exports = router;