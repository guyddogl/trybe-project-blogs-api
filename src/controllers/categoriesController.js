const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { status, message, category } = await categoriesService.createCategory(name);
  if (message) return res.status(status).json({ message });
  res.status(status).json(category);
};

const getAllCategories = async (req, res) => {
  const { status, categories } = await categoriesService.getAllCategories(req);
  res.status(status).json(categories);
};

const getCategoryById = async (req, res) => {
  const { id } = req.params;
  const { status, message, category } = await categoriesService.getCategoryById(id);
  if (message) return res.status(status).json({ message });
  res.status(status).json(category);
};

const createPostCategory = async (req, res) => {
  const { postId, categoryId } = req;
  const { status, postCategory } = await categoriesService.create(postId, categoryId);
  res.status(status).json(postCategory);
};
 
module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  createPostCategory,
};