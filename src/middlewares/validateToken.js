const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const result = jwt.verify(token, secret);
    req.currentUser = result;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};