const postService = require('../services/postService');

const getAllPosts = async (req, res) => {
  const { status, posts } = await postService.getAllPosts(req);
  res.status(status).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { status, message, post } = await postService.getPostById(id);
  if (message) return res.status(status).json({ message });
  res.status(status).json(post);
};

const createPost = async (req, res) => {
  const { status, message, post } = await postService.createPost(req);
  if (message) return res.status(status).json({ message });
  res.status(status).json(post);
};

const updatePost = async (req, res) => {
  const { status, message, postUpdated } = await postService.updatePost(req);
  if (message) return res.status(status).json({ message });
  res.status(status).json(postUpdated);
};

const deletePost = async (req, res) => {
  const { status, message, postDeleted } = await postService.deletePost(req);
  if (message) return res.status(status).json({ message });
  res.status(status).json(postDeleted);
};
 
module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};