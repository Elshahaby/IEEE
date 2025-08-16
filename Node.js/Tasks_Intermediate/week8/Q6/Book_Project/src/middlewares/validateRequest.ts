import type { RequestHandler } from 'express';
import type { z } from 'zod';
import asyncHandler from 'express-async-handler';

export const validate =
    <
        P extends z.ZodSchema,
        B extends z.ZodSchema,
        Q extends z.ZodSchema,
    >
    (schema: {
        params?: P;
        body?: B;
        query?: Q;
    }): RequestHandler =>
        asyncHandler(async (req, _res, next) => {
            if (schema.params) {
                Object.defineProperty(req, 'params', {
                    value: await schema.params.parseAsync(req.params),
                });
            }

            if (schema.query) {
                Object.defineProperty(req, 'query', {
                    value: await schema.query.parseAsync(req.query),
                });
            }

            if (schema.body) {
                Object.defineProperty(req, 'body', {
                    value: await schema.body.parseAsync(req.body),
                });
            }

            next();
        });