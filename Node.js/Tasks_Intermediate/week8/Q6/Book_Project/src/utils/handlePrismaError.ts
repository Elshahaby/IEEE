// src/utils/handlePrismaError.ts
import { Prisma } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

interface PrismaErrorDetails {
  statusCode: number;
  message: string;
}

// Define a map for user-friendly messages for specific unique constraints
const UNIQUE_CONSTRAINT_MESSAGES: { [key: string]: string } = {
  // Use the exact `target` string provided by Prisma in the error.meta.target
  // For your case, it's 'Book_title_author_pages_genre_key'
  'Book_title_author_pages_genre_key': 'title, author, pages, and genre',
  // Add other unique constraints if you have them in your schema:
  // 'User_email_key': 'email address',
  // 'Product_sku_key': 'product SKU',
  // 'AnotherModel_fieldA_fieldB_key': 'combination of fieldA and fieldB',
};

export function handlePrismaError(error: Prisma.PrismaClientKnownRequestError): PrismaErrorDetails {
  let statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR;
  let message: string = 'A database error occurred.';

  // console.log("Prisma Error: ", error)

  switch (error.code) {
    case 'P2002': // Unique constraint violation
      const target = error.meta?.target;
      let fieldNames = 'a unique field'; // Default generic message

      if (typeof target === 'string') {
        // Check if we have a custom message for this specific unique constraint key
        fieldNames = UNIQUE_CONSTRAINT_MESSAGES[target] || target;
      } else if (Array.isArray(target)) {
        // Fallback for cases where target might be an array of field names (e.g., for @@unique([field1, field2]) syntax)
        fieldNames = target.join(', ');
      }

      message = `Duplicate entry: A record with this ${fieldNames} already exists.`;
      statusCode = StatusCodes.CONFLICT; // 409 Conflict
      break;
    case 'P2025': // Record not found
      message = `Resource not found: ${error.meta?.cause || 'record does not exist'}.`;
      statusCode = StatusCodes.NOT_FOUND; // 404 Not Found
      break;
    case 'P2003': // Foreign key constraint violation
      message = `Invalid input data due to a foreign key constraint: ${error.meta?.field_name || 'unknown field'}.`;
      statusCode = StatusCodes.BAD_REQUEST; // 400 Bad Request
      break;
    // Add more cases as needed for other Prisma error codes
    default:
      // For unhandled Prisma errors, log the full error in development
      console.error('Unhandled Prisma error code:', error.code, error.message);
      message = 'An unexpected database operation error occurred.';
      statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
      break;
  }

  return { statusCode, message };
}