const express = require('express');
const postController = require('../controllers/postController');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.get('/:id', validateToken, postController.getPostById);
router.get('/', validateToken, postController.getAllPosts);

module.exports = router;