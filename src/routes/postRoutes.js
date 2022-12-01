const express = require('express');
const postController = require('../controllers/postController');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router.get('/:id', validateToken, postController.getPostById);
router.put('/:id', validateToken, postController.updatePost);
router.delete('/:id', validateToken, postController.deletePost);
router.get('/', validateToken, postController.getAllPosts);
router.post('/', validateToken, postController.createPost);

module.exports = router;