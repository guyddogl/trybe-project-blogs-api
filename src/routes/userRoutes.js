const express = require('express');
const userController = require('../controllers/userController');
const { 
  validateDisplayName, 
  validateEmail, 
  validatePassword, 
} = require('../middlewares/validateSignUp');

const router = express.Router();

router.post('/', validateDisplayName, validateEmail, validatePassword, userController.userSignUp);

module.exports = router;