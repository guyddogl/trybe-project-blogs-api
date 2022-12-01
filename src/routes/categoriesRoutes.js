const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, categoriesController.createCategory);
router.get('/:id', validateToken, categoriesController.getCategoryById);
router.get('/', validateToken, categoriesController.getAllCategories);

module.exports = router;