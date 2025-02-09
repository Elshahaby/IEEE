import {NextFunction, Request,Response} from 'express'
import {Task} from '../models/task.model'
import { DatabaseGetError } from '../errors/DatabaseGetError';
import { DatabasePostError } from '../errors/DatabasePostError';
import { DatabaseDeleteError } from '../errors/DatabaseDeleteError';

export const getAddTask = async (req: Request, res: Response) => {
    res.render('add_task',{ errors: [] });  
}

export const getSpecificTask = async (req: Request, res: Response,next: NextFunction) => {
    try{
        const ID = req.params.mohsen;
        const task = await Task.findById(ID); 
        res.render('specific_task',{task});
    }catch{
        next(new DatabaseGetError('Can not get the document from Database'));
    }
}

export const getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const tasks = await Task.find();
        res.render('tasks',{tasks});

    }catch{
        next(new DatabaseGetError('Can not get the document from Database'));
    }
}

export const storeAddedTask = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const newTask = new Task(req.body);
        await newTask.save();
        res.redirect('/task/allTasks');

    }catch{
        next(new DatabasePostError('Can not post the document to Database'));
    }
}

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    try{    
        const ID = req.params.mohsen;
        await Task.findByIdAndDelete(ID);
        res.redirect('/task/allTasks');
    }catch{
        next(new DatabaseDeleteError('Can not Delete the Task form Database'));
    }
}