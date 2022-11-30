const models = require('../models');

const getAllPosts = async () => {
  const posts = await models.BlogPost.findAll({ 
    include: [
      { model: models.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: models.Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, posts };
};

const getPostById = async (id) => {
  const post = await models.BlogPost.findByPk(id, { 
    include: [
      { model: models.User, as: 'user', attributes: { exclude: ['password'] } },
      { model: models.Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) return { status: 404, message: 'Post does not exist' };
  return { status: 200, post };
};

module.exports = {
  getAllPosts,
  getPostById,
};