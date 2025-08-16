import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/appError';
import { StatusCodes } from 'http-status-codes';


export function notfound(req: Request, res: Response, next: NextFunction) {
    res.status(404);
    const error = new AppError(`Can't find ${req.originalUrl} on this server!`, StatusCodes.NOT_FOUND);
    next(error);
}