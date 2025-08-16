import asyncHandler from 'express-async-handler';
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { bookService } from './book.service';;
import { BookMainResponse, DeleteBook, getAllControllerResponse } from './book';

export class BookController {
  // Wrap each method with asyncHandler
  createBook = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const newBook = await bookService.create(req.body);
    const responseBody: BookMainResponse ={
        status: "success",
        data: {
            book: newBook,
        }
    }
    res.status(StatusCodes.CREATED).json(responseBody);
  });

  getBook = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const book = await bookService.getById(req.params.id);
    const responseBody: BookMainResponse ={
        status: "success",
        data: {
            book: book,
        }
    }
    res.status(StatusCodes.OK).json(responseBody);
  });

  getAllBooks = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { books, totalDocuments, page, limit } = await bookService.getAll(req.query);
    const responseBody: getAllControllerResponse = {
        status: 'success',
        results: books.length,
        total: totalDocuments,
        page,
        limit,
        data: {
          books,
        },
      };
      res.status(StatusCodes.OK).json(responseBody);
  });

  updateBook = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const updatedBook = await bookService.update(req.params.id, req.body);
    const responseBody: BookMainResponse = {
      status: 'success',
      data: {
        book: updatedBook,
      },
    }
    res.status(StatusCodes.OK).json(responseBody);
  });

  deleteBook = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await bookService.remove(req.params.id);
    const responseBody: DeleteBook = {
        status: "success",
        data: null
    }
    res.status(StatusCodes.NO_CONTENT).json(responseBody);
  });
}

export const bookController = new BookController();