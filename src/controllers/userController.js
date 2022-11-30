const userService = require('../services/userService');

const userSignUp = async (req, res) => {
  const { status, message, token } = await userService.userSignUp(req);
  if (message) return res.status(status).json({ message });
  res.status(status).json({ token });
};

const getAllUsers = async (req, res) => {
  const { status, users } = await userService.getAllUsers(req);
  res.status(status).json(users);
};

module.exports = {
  userSignUp,
  getAllUsers,
};