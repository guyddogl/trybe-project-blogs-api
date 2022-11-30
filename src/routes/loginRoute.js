const express = require('express');
const loginController = require('../controllers/loginController');
const { validateLoginForm } = require('../middlewares/validateLoginForm');

const router = express.Router();

router.post('/', validateLoginForm, loginController.logUserIn);

module.exports = router;