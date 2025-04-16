import { NextFunction, Request, Response } from 'express';

import ErrorResponse from '../interfaces/errorResponse';
import { ZodError } from 'zod';


export function notFound(req: Request, res: Response, next: NextFunction) {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
}

export function errorHandler(err: Error, req: Request, res: Response<ErrorResponse>, next: NextFunction) {
    let statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    if(err instanceof ZodError) statusCode = 422;
    res.status(statusCode);
    res.json({
      message: err instanceof ZodError? err.errors[0].message : err.message,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
}