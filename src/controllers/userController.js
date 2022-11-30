const userService = require('../services/userService');

const userSignUp = async (req, res) => {
  const { status, message, token } = await userService.userSignUp(req);
  if (message) return res.status(status).json({ message });
  res.status(status).json({ token });
};

module.exports = {
  userSignUp,
};