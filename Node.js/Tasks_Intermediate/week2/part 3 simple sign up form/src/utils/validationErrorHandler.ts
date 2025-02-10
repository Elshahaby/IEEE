import {Request, Response} from 'express' 
import { ZodError } from 'zod'


export const errorHandlerFunction = (error: unknown,req: Request, res: Response, redirectPath: string) => {
    if(error instanceof ZodError){
        const errors = error.errors.map(err => JSON.stringify(err));
        
        // expects the second parameter to be a string or an array of strings.
        req.flash('errors', errors);  // Flahs Validation errors
        res.redirect(redirectPath);

    }else{
        console.error(error);
    }
}