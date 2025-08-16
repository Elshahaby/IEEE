import { Router } from 'express';
import { bookController } from './book.controller';
import { validate } from '../../middlewares/validateRequest';
import { createBookSchema, getBooksQuerySchema } from './book.schema';
import { idSchema } from '../common.schema';

const bookRouter = Router();

bookRouter.route('/')
  .post(validate({ body: createBookSchema }), bookController.createBook)
  .get(validate({ query: getBooksQuerySchema }), bookController.getAllBooks);

bookRouter.route('/:id')
  .get(validate({ params: idSchema }), bookController.createBook)
  .put(validate({ params: idSchema, body: createBookSchema.partial() }), bookController.updateBook) // Allow partial updates
  .delete(validate({ params: idSchema }), bookController.deleteBook);

export default bookRouter;