import { Response, Request, NextFunction } from 'express';
import { todoReqBodyType, IdReqParamsType} from './todos.schema';
import { TodosModel } from './todos.model'
import { SuccessResponse, ErrResponse } from '../../interfaces/Response.interface';
import { ITodo } from './todosResAndmodel.interface';
import { InsertOneResult } from 'mongodb';
import { noUnrecognized } from 'zod';

export async function findAll (req: Request, res: Response<SuccessResponse<ITodo[]> | ErrResponse>, next: NextFunction) {
    try{
        const result = await TodosModel.find();
        if(!result){
            res.json({success: false, message: 'todos not found'});
        }
        res.json({
            success: true,
            message: 'todos get successfully',
            data: result
        });
    }catch(error){
        next(error)
    }
}

// InsertOneResult (comes from mongodb) or SuccessResponse at type of response
export async function createOne (req: Request<{},SuccessResponse<ITodo> | ErrResponse, todoReqBodyType>,
    res: Response<SuccessResponse<ITodo> | ErrResponse>,
    next: NextFunction) 
    {
        try{
            const insertReslut = await TodosModel.insertOne(req.body);
            res.status(201)
               .json({success: true, data: insertReslut, message: 'todo added successfully'});
        }catch(error){
            next(error)
        }   
    }


export async function findOne(req: Request<IdReqParamsType, SuccessResponse<ITodo> | ErrResponse, {}>,
    res: Response<SuccessResponse<ITodo> | ErrResponse>, 
    next: NextFunction) 
    {
        try{
            const findResult = await TodosModel.findById(req.params.id);
            if(!findResult){
                res.status(404).json({success: false, message: 'todo not found'});
                throw new Error(`Todo with id "${req.params.id}" not found`);
            }
            res.status(200).json({success: true, data: findResult, message:"todo get successfully"})
        }catch(error){
            next(error);
        }
    }


export async function  updateOne (req: Request<IdReqParamsType, SuccessResponse<ITodo> | ErrResponse, todoReqBodyType>, 
    res: Response<SuccessResponse<ITodo> | ErrResponse>, next: NextFunction) 
    {
        try{
            const updateReslut = await TodosModel.findByIdAndUpdate(req.params.id, req.body , 
                {new: true}
            )
            if(!updateReslut){
                res.status(404).json({success: false, message: 'todo not found to be updated'});
                throw new Error(`Todo with id "${req.params.id}" not found to be updated`);
            }
            res.json({success: true, data: updateReslut, message:"todo updated successfully"})
        }catch(error){
            next(error);
        }
        
    }


export async function deleteOne(req: Request<IdReqParamsType, {},{}>, 
    res: Response<{}>, next: NextFunction) {
    try{
        const deleteResult = await TodosModel.findByIdAndDelete(req.params.id);
        if(!deleteResult){
            res.status(404).json({success: false, message: 'todo not found to be delete'});
            throw new Error(`Todo with id "${req.params.id}" not found to be delete`);
        }
        res.status(204).end(); // deleted
    }catch(error){
        next(error);
    }
}
