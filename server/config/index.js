const express = require('express');
const config = require('./config.json');

const app = express();

// Set up routes, middleware, and other server configurations

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
