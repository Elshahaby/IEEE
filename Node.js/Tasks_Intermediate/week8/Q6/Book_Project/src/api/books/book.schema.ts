// src/schemas/book.schema.ts
import { z } from 'zod';
import { queryFeaturesSchema } from '../common.schema';

// Schema for creating a new book
export const createBookSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  genre: z.string().min(1, 'Genre is required'),
  publishedDate: z
  .string({  // zod 4
  error: (issue) => issue.input === undefined
    ? "Published date is a required feild" 
    : "Date should be a string" 
  })
  .refine(
      (val) => {
        // YYYY-MM-DD strict format check
        if (!/^\d{4}-\d{2}-\d{2}$/.test(val)) return false;
        // Validate actual date
        const [year, month, day] = val.split("-").map(Number);
        const date = new Date(val);
        return (
          date.getFullYear() === year &&
          date.getMonth() + 1 === month &&
          date.getDate() === day
        );
      },
      { error: "Published date must be a real, valid calendar date in YYYY-MM-DD format", abort: true }
  )
  .pipe(z.coerce.date({
    error: "Published date must be a valid date string(e.g, 2023/01/10, 2023-01-10)", // handle empty string too //z.coerce.date() tries to coerce undefined into a Date object so issue.input will not be undefined forever
  }))
  .refine((date) => date <= new Date(), {
    message: 'Published date cannot be in the future',       // This makes sure the book's publishedAt is either today or a past date — not a future year or day.
  }),
  pages: z.coerce.number('Pages must be a valid number').int('Pages must be an intger number').positive('Pages must be a positive integer'),
});

// Schema for filtering, sorting, and searching books
export const getBooksQuerySchema = queryFeaturesSchema.extend({
  genre: z.string().optional(),
  // For date range filtering, e.g., publishedDate[gte]=2020-01-01
  publishedDate: z.object({
    gte: z.string().transform(str => new Date(str)).optional(),
    gt: z.string().transform(str => new Date(str)).optional(),
    lte: z.string().transform(str => new Date(str)).optional(),
    lt: z.string().transform(str => new Date(str)).optional(),
  }).optional(),
});

export type CreateBookInput = z.infer<typeof createBookSchema>;
export type GetBooksQueryInput = z.infer<typeof getBooksQuerySchema>;