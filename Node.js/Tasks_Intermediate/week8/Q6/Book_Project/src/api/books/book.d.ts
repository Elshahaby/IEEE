import { Book } from "@prisma/client";

export interface PaginatedBooksResult {
    books: Partial<Book>[];  // Because of select, some fields may be excluded
    totalDocuments: number;
    page: number;
    limit: number;
}

export interface getAllControllerResponse {
    status: "success";
    results: number;
    total: number;
    page: number;
    limit: number;
    data: {
        books: Partial<Book>[];
    };
}

export interface BookMainResponse {
    status: "success";
    data: {
        book: Book
    }
}

export interface DeleteBook {
    status: "success";
    data: null;
}