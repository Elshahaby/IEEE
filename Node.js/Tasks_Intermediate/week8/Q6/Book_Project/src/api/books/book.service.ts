import { Prisma, Book } from '@prisma/client';
import prisma from '../../lib/prisma';
import AppError from '../../errors/appError';
import { handlePrismaError } from '../../utils/handlePrismaError';
import APIFeatures from '../../lib/apiFeatures';
import { PaginatedBooksResult } from './book';
import { GetBooksQueryInput, CreateBookInput } from './book.schema';
import { StatusCodes } from 'http-status-codes';


export const BookService = {

  /**
   * Get all books based on query filters
   * @param query - Query parameters for search, filter, pagination, etc. (GetBooksQueryInput)
   * @returns {Promise<PaginatedBooksResult>}
   */
  async getAll(query: GetBooksQueryInput): Promise<PaginatedBooksResult> {
    try {
        const features = new APIFeatures(query)
        .filter()
        .search()
        .sort()
        .limitFields()
        .paginate();

        // Execute queries concurrently
        const [books, totalDocuments] = await Promise.all([
        prisma.book.findMany(features.query), // Use the built prismaOptions
        prisma.book.count({ where: features.query.where }),
        ]);

        return {
        totalDocuments,
        page: query.page || 1,
        limit: query.limit || 10,
        books: books,
        };
    } catch (err: any) {
        throw err;
    }
  },

  /**
   * Get a book by ID
   * @param id - MongoDB ObjectId string
   * @returns {Promise<Book>} - Returns Book directly, throws AppError if not found
   */
  async getById(id: string): Promise<Book> {
    try {
        const book = await prisma.book.findUnique({ where: { id } });
        if (!book) {
        throw new AppError('Book not found', StatusCodes.NOT_FOUND); 
        }
        return book;
    } catch (err: any) {
        throw err;
    }
  },

  /**
   * Create a new book
   * @param data - Prisma.BookCreateInput
   * @returns {Promise<Book>}
   */
  async create(data: CreateBookInput): Promise<Book> {
    try {
        // const existingBook = await prisma.book.findFirst({
        //     where: {
        //         title: data.title,
        //         author: data.author,
        //         genre: data.genre,
        //         pages: data.pages
        //     },
        // });

        // if (existingBook) {
        //     throw new AppError(`A book with the title '${data.title}' by '${data.author}' and number of pages '${data.pages}' and genre '${data.genre}' already exists.`
        //         ,StatusCodes.CONFLICT); // 409 Conflict
        // }
        
        return await prisma.book.create({ data });
    } catch (err: any) {
        throw err;
    }
  },

  /**
   * Update a book by ID
   * @param id - MongoDB ObjectId string
   * @param data - Prisma.BookUpdateInput
   * @returns {Promise<Book>}
   */
  async update(id: string, data: Prisma.BookUpdateInput): Promise<Book> {
    try {
        const existingBook = await prisma.book.findUnique({ where: { id } });
        if (!existingBook) {
            throw new AppError('Book not found for update', StatusCodes.NOT_FOUND);
        }
        return await prisma.book.update({ where: { id }, data });
    } catch (err: any) {
        throw err;
    }
  },

  /**
   * Delete a book by ID
   * @param id - MongoDB ObjectId string
   * @returns {Promise<Book>}
   */
  async remove(id: string): Promise<Book> {
    try {
      const existingBook = await prisma.book.findUnique({ where: { id } });
      if (!existingBook) {
        throw new AppError('Book not found for deletion', StatusCodes.NOT_FOUND);
      }
      return await prisma.book.delete({ where: { id } });
    } catch (err: any) {
        throw err;
    }
  },
};

export const bookService = BookService;