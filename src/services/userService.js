const jwt = require('jsonwebtoken');
const models = require('../models');

const userSignUp = async (req) => {
  const { displayName, email, password, image } = req.body;
  const user = await models.User.findOne({ where: { email } });
  if (user) return { status: 409, message: 'User already registered' };
  await models.User.create({ displayName, email, password, image });
  const payload = { data: user };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return { status: 201, token };
};

const getAllUsers = async () => {
  const users = await models.User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, users };
};

const getUserById = async (id) => {
  const user = await models.User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return { status: 404, message: 'User does not exist' };
  return { status: 200, user };
};

const deleteUser = async (req) => {
  const { id } = req.currentUser.data;
  await models.User.destroy({ where: { id } });
  return { status: 204 };
};

module.exports = {
  userSignUp,
  getAllUsers,
  getUserById,
  deleteUser,
};