import mongoose from "mongoose";
const schema = mongoose.Schema;
import { ITodo } from './todosResAndmodel.interface'

const todoSchema = new schema<ITodo>(
    {
        content: {
            type: String,
            required: true
        },
        done: {
            type: Boolean,
            required: true
        }
    },
    { timestamps: true }
)
export const TodosModel = mongoose.model<ITodo>('Todo', todoSchema)