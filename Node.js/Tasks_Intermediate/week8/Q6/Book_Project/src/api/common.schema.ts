import { z } from 'zod';

export const idSchema = z.string().refine((val) => {
  // Basic MongoDB ObjectId validation (24 hex characters)
  return /^[0-9a-fA-F]{24}$/.test(val);
}, { message: 'Invalid ID format' });

export const queryFeaturesSchema = z.object({
  page: z.string().optional().default('1').transform(Number),
  limit: z.string().optional().default('10').transform(Number),
  sort: z.string().optional(),
  fields: z.string().optional(),
  search: z.string().optional(), 
}).partial(); // Allow all these to be optional