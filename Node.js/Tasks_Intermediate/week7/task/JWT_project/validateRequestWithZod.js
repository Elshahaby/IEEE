import { ZodError } from 'zod';

// pass an object of body zodSchema or params zodSchema or query zodSchema 
export function validateRequest(validators) {
    return async (req, res, next) => {
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

            if (error instanceof ZodError) {
                const formattedErrors = error.errors.map(err => ({
                    path: err.path.join('.'),
                    message: err.message
                }));

                // Pass formatted error to error handler
                return next({
                    name: 'ValidationError',
                    statusCode: 422,
                    errors: formattedErrors
                });
            }
            next(error);
        }
    }
}