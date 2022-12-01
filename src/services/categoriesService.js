const models = require('../models');

const createCategory = async (name) => {
  if (!name) return { status: 400, message: '"name" is required' };
  const category = await models.Category.create({ name });
  return { status: 201, category };
};

const getAllCategories = async () => {
  const categories = await models.Category.findAll();
  return { status: 200, categories };
};

const getCategoryById = async (id) => {
  const category = await models.Category.findByPk(id);
  if (!category) return { status: 400, message: 'Category not found' };
  return { status: 200, category };
};

const createPostCategory = async (postId, categoryId) => {
  const postCategory = await models.PostCategory.create({ postId, categoryId });
  return { status: 200, postCategory };
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  createPostCategory,
};