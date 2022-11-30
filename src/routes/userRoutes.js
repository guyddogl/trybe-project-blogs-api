const express = require('express');
const userController = require('../controllers/userController');
const { 
  validateDisplayName, 
  validateEmail, 
  validatePassword, 
} = require('../middlewares/validateSignUp');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateDisplayName, validateEmail, validatePassword, userController.userSignUp);
router.get('/:id', validateToken, userController.getUserById);
router.get('/', validateToken, userController.getAllUsers);

module.exports = router;