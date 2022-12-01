const models = require('../models');
const categoriesService = require('./categoriesService');

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

const createPost = async (req) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return { status: 400, message: 'Some required fields are missing' };
  }
  const findCategories = await Promise.all(categoryIds.map(async (category) => {
    const { message } = await categoriesService.getCategoryById(category);
    if (message) return false;
    return true;
  }));
  const verifyCategories = findCategories.some((category) => category === false);
  if (verifyCategories) return { status: 400, message: 'one or more "categoryIds" not found' };
  const { id } = req.currentUser.data;
  const post = await models.BlogPost.create({ userId: id, title, content, categoryIds });
  const postId = post.id;
  await Promise.all(categoryIds.map(async (category) => (
    categoriesService.createPostCategory(postId, category))));
  return { status: 201, post };
};

const updatePost = async (req) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { post } = await getPostById(id);
  const userID = req.currentUser.data.id;
  if (post.userId !== userID) return { status: 401, message: 'Unauthorized user' };
  if (!title || !content) {
    return { status: 400, message: 'Some required fields are missing' };
  }
  await models.BlogPost.update({ title, content }, { where: { id } });
  const postUpdated = await getPostById(id);
  return { status: 200, postUpdated: postUpdated.post };
};

const deletePost = async (req) => {
  const { id } = req.params;
  const { post, status, message } = await getPostById(id);
  if (message) return { status, message };
  const { data } = req.currentUser;
  if (post.userId !== data.id) return { status: 401, message: 'Unauthorized user' };
  // await models.BlogPost.destroy({ where: { id } });
  return { status: 204 };
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};