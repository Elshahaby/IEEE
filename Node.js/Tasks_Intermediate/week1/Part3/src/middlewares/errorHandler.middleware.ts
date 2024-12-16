import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { DatabaseGetError } from '../errors/DatabaseGetError'
import { DatabasePostError } from '../errors/DatabasePostError'

export const errorHandler: ErrorRequestHandler = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // error handling logic
    if(error instanceof DatabaseGetError){
        res.status(error.StatusCode).json({message: error.message})
    }
    if(error instanceof DatabasePostError){
        res.status(error.StatusCode).json({message: error.message})
    }
    if(error instanceof Error){
        res.status(404).json({message: error.message })
    }
    
    next();
}
