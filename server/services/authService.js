const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const generateAuthToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isMatch = await comparePasswords(password, user.password);

    if (!isMatch) {
      throw new Error('Invalid email or password');
    }

    const token = generateAuthToken(user._id);
    return { user, token };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { loginUser, hashPassword };
