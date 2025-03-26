import { ErrorRequestHandler } from "express";

// Custom error class
class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Express error-handling middleware
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error(`❌ Error: ${message}`);
  res.status(statusCode).json({ success: false, message });
};

export { errorHandler, AppError };
