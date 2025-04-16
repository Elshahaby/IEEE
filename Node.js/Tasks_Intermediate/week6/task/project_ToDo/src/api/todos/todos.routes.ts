import { Router } from 'express';
import * as todoControllers from './todos.controller'
import { todoBodyZodSchema, IdParamsZodSchema } from './todos.schema'; // body zodSchema
import { validateRequest } from '../../middlewares/validateRequestWithZod'

const router = Router();

export interface IdParams {

}

router.get('/', todoControllers.findAll);

router.post('/',
    validateRequest({
        bodySchema: todoBodyZodSchema
    }),
    todoControllers.createOne);

router.get('/:id',
    validateRequest({
        paramsSchema: IdParamsZodSchema
    }),
    todoControllers.findOne);

router.put('/:id',
    validateRequest({
        paramsSchema: IdParamsZodSchema,
        bodySchema: todoBodyZodSchema
    }),
    todoControllers.updateOne);

router.delete('/:id',
    validateRequest({
        paramsSchema: IdParamsZodSchema
    }),
    todoControllers.deleteOne);


export default router;







// another way to make req,res Typed 
// router.get<{}, Todo[]>('/', (req, res) => {
//     res.json([{
//         content: 'Learning Typescript',
//         done: false,
//     }]);
// })