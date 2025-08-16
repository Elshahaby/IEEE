// src/lib/apiFeatures.ts
import { Prisma } from '@prisma/client';
import { GetBooksQueryInput } from '../api/books/book.schema';

class APIFeatures {
  public query: Prisma.BookFindManyArgs; // Type for Prisma findMany arguments
  private queryString: GetBooksQueryInput;

  constructor(queryString: GetBooksQueryInput) {
    this.query = {}; // Initialize as an empty object for Prisma query arguments
    this.queryString = queryString;
  }

  filter(): APIFeatures {
    const { genre, publishedDate } = this.queryString; // Destructure only direct filters
    const where: Prisma.BookWhereInput = {};
    
    if (genre) {
      where.genre = genre;
    }
    
    if (publishedDate) {
      where.publishedDate = {}; // intial value for first time executed, makes you able to spread it later
      
      if (publishedDate.gte) where.publishedDate = { ...where.publishedDate , gte: publishedDate.gte };
      if (publishedDate.gt)  where.publishedDate = { ...where.publishedDate , gt:  publishedDate.gt  };
      if (publishedDate.lte) where.publishedDate = { ...where.publishedDate , lte: publishedDate.lte };
      if (publishedDate.lt)  where.publishedDate = { ...where.publishedDate , lt:  publishedDate.lt  };
    }

    if (Object.keys(where).length > 0) {
      this.query.where = { ...this.query.where, ...where };
    }

    return this;
  }

  search(): APIFeatures {
    if (this.queryString.search) {
      const searchKeyword = this.queryString.search;
      // Using 'contains' for basic case-insensitive substring search.
      // For true full-text search, ensure a text index exists in MongoDB
      // and consider using Prisma's `$text` if available for MongoDB.
      this.query.where = {
        OR: [
          { title: { contains: searchKeyword, mode: 'insensitive' } },
          { author: { contains: searchKeyword, mode: 'insensitive' } },
        ],
      };
    }
    return this;
  }

  sort(): APIFeatures {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').map(field => {
        const direction = field.startsWith('-') ? 'desc' : 'asc';
        const name = field.replace(/^-/, '');
        return { [name]: direction };
      });
      this.query.orderBy = sortBy as Prisma.BookOrderByWithRelationInput[];
    } else {
      this.query.orderBy = { publishedDate: 'desc' };
    }
    return this;
  }

  limitFields(): APIFeatures {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').reduce((acc, field) => {
        acc[field.trim()] = true;
        return acc;
      }, {} as { [key: string]: boolean });
      this.query.select = { ...fields, id: true };
    }
    return this;
  }

  paginate(): APIFeatures {
    const page = this.queryString.page || 1;
    const limit = this.queryString.limit || 10;
    const skip = (page - 1) * limit;

    this.query.skip = skip;
    this.query.take = limit;
    return this;
  }
}

export default APIFeatures;