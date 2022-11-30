const models = require('../models');

const createCategory = async (name) => {
  if (!name) return { status: 400, message: '"name" is required' };
  const category = await models.Category.create({ name });
  console.log(category);
  return { status: 201, category };
};

const getAllCategories = async () => {
  const categories = await models.Category.findAll();
  return { status: 200, categories };
};

module.exports = {
  createCategory,
  getAllCategories,
};