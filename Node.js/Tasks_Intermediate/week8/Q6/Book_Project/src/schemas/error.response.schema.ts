import { z } from 'zod';

export const errorResponseSchema = z.object({
  status: z.enum(["fail","error", "dlf"]), // 'fail' for operational, 'error' for programming
  message: z.string(),
  errors: z.array(z.object({ // For validation errors (from ZodError)
    path: z.string(),
    message: z.string(),
  })).optional(),
  stack: z.string().optional(), // Only in development for security
});

export type ErrorResponse = z.infer<typeof errorResponseSchema>;