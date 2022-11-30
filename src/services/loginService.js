const jwt = require('jsonwebtoken');
const models = require('../models');

const logUserIn = async (email, password) => {
  const user = await models.User.findOne({ where: { email } });
  if (!user || password !== user.password) return { status: 400, message: 'Invalid fields' };
  const payload = { data: user };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return { status: 200, token };
};

module.exports = {
  logUserIn,
};