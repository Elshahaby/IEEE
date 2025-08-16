import { statusEnum } from "../middlewares/errorHandler";

class AppError extends Error {
  public statusCode: number;
  public status: statusEnum;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // Mark as operational errors (expected errors)

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;