const loginService = require('../services/loginService');

const logUserIn = async (req, res) => {
  const { email, password } = req.body;
  const { status, message, token } = await loginService.logUserIn(email, password);
  if (message) return res.status(status).json({ message });
  res.status(status).json({ token });
};

module.exports = {
  logUserIn,
};