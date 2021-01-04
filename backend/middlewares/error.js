import ErrorResponse from '../utils/errorResponse.js';

const notFound = (req, res, next) => {
  next(new ErrorResponse(`Not Found ${req.originalUrl}`, 404));
};

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  //Log to console for dev
  console.log(err.stack.red);

  //Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found`;
    error = new ErrorResponse(message, 404);
  }

  //Mongoose duplicate key
  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }

  //Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
