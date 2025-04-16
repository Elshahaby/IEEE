import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { requestValidators } from '../interfaces/requestValidatiors.interface'


// pass an object of body zodSchema or params zodSchema or query zodSchema 
export function validateRequest(validators: requestValidators) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            
            if(validators.bodySchema)     
                req.body   = await validators.bodySchema.parseAsync(req.body);
            if(validators.paramsSchema) {
                req.params = await validators.paramsSchema.parseAsync(req.params);
            }
            if(validators.querySchema)  
                req.query  = await validators.querySchema.parseAsync(req.query);

            next();
        }catch(error){
            if(error instanceof ZodError){
                console.log(error.errors[0].message)
                res.status(422);
            }
            next(error);
        }
    }
}