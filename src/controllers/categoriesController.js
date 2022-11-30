const categoriesService = require('../services/categoriesService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { status, message, category } = await categoriesService.createCategory(name);
  if (message) return res.status(status).json({ message });
  res.status(status).json(category);
};
 
module.exports = {
  createCategory,
};