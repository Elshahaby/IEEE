import { Document } from 'mongoose';

export interface ITodo extends Document {
  content: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}