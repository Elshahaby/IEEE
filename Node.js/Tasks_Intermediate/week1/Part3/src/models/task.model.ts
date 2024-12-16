import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name:{
        type: String,
        required: true,
        minlength: [10,'the min length of the task name must be at least 10 characters'],
        maxlength: [150, 'the maximum length of the task name must be at most 150 characters']
    },
    date:{
        type: Date,
        required: true
    },
    description:{
        type: String,
        require: true
    }
},{timestamps:true})

export const Task = mongoose.model('Task',TaskSchema);
