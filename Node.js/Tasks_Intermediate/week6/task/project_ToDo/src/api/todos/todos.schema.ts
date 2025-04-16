import z from 'zod';
import { ObjectId } from 'mongodb'

export const todoBodyZodSchema = z.object({
    content: z.string().min(1, 'content must be at least one character'),
    done: z.boolean().default(false)
})

// ensure that the incoming MongoDB ID is well-formed before querying the database
//  Refinement functions should not throw. Instead they should return a falsy value to signal failure.
// if Types.ObjectId.isValid is true the validation passes, if it is false send zodError with message Invalid ObjectId
export const zodObjectId = z.string().refine(ObjectId.isValid, {
    message: 'Invalid ObjectId'
});

export const IdParamsZodSchema = z.object({   // for params requestValidator
    id: zodObjectId
});


export type todoReqBodyType = z.infer<typeof todoBodyZodSchema>; // for req.body
export type IdReqParamsType = z.infer<typeof IdParamsZodSchema>  // for req.params