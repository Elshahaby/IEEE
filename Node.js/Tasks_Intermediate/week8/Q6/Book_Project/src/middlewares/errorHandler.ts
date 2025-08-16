import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import z, { ZodError } from 'zod';
import { Prisma } from '@prisma/client';

import AppError from '../errors/appError'; 
import { ErrorResponse } from '../schemas/error.response.schema'; 
import { handlePrismaError } from '../utils/handlePrismaError'; 

export type statusEnum = "fail" | "error";

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let status: statusEnum = 'error';
  let message = 'Something went wrong!';
  let errors: { path: string; message: string; }[] | undefined;
  let stack: string | undefined;

  if (err instanceof ZodError) {
    statusCode = StatusCodes.UNPROCESSABLE_ENTITY;
    status = 'fail';
    message = 'Request validation failed';
    errors = err.issues.map(e => ({ path: e.path.join('.'), message: e.message }));
  }
  else if (err instanceof AppError) {
    statusCode = err.statusCode;
    status = err.status;
    message = err.message;
  }
  else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    console.error('PRISMA DATABASE ERROR:', err); // Log the raw Prisma error
    const prismaErrorDetails = handlePrismaError(err);
    statusCode = prismaErrorDetails.statusCode;
    status = 'fail'; // Prisma errors are operational failures
    message = prismaErrorDetails.message;
  }
  else {
    console.error('UNHANDLED PROGRAMMING ERROR 💥:', err); // Log the full error for debugging
    if (process.env.NODE_ENV === 'production') {
      message = 'An unexpected internal server error occurred.'; // Generic message for production
    }
  }

  if (process.env.NODE_ENV === 'development') {
    stack = err.stack;
  }

  const errorResponse: ErrorResponse = {
    status,
    message,
    ...(errors && { errors }),
    ...(stack && { stack }),
  };

  res.status(statusCode).json(errorResponse);
};

export default errorHandler;