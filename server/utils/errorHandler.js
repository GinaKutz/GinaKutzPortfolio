const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
  
    if (err.name === 'ValidationError') {
      statusCode = 400;
      message = 'Validation Error';
    }
  
    if (err.name === 'UnauthorizedError') {
      statusCode = 401;
      message = 'Unauthorized';
    }
  
    if (err.code === 11000) {
      statusCode = 400;
      message = 'Duplicate key error';
    }
  
    res.status(statusCode).json({ error: message });
  };
  
  module.exports = errorHandler;
  