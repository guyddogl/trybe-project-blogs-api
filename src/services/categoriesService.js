const models = require('../models');

const createCategory = async (name) => {
  if (!name) return { status: 400, message: '"name" is required' };
  const category = await models.Category.create({ name });
  console.log(category);
  return { status: 201, category };
};

module.exports = {
  createCategory,
};