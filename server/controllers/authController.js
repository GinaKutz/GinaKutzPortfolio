const jwt = require('jsonwebtoken');
const config = require('../config');

// Dummy user data for demonstration
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, config.jwtSecret, {
    expiresIn: '1h',
  });
};

// Controller function for user login
const login = (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Find user in dummy data
  const user = users.find((u) => u.username === username && u.password === password);

  // If user not found, return error
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Generate JWT token
  const token = generateToken(user);

  // Return token
  res.status(200).json({ token });
};

module.exports = { login };
