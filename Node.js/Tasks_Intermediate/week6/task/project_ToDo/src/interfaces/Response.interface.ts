import { ZodFormattedError } from 'zod';

export interface ErrResponse{
  success: false;
  message: string;
//   errors?: ZodFormattedError<any, string> | string | null;
};

export interface SuccessResponse<T>  {
  success: true;
  message?: string;
  data: T;
};
