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
  console.log('MEU TESTE', users[0].password);
  return { status: 200, users };
};

module.exports = {
  userSignUp,
  getAllUsers,
};