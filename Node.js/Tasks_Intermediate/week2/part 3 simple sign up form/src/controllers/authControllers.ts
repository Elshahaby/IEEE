import {Request,Response,NextFunction} from "express"
import {UserInput,userSchema} from '../models/userModel'
import { errorHandlerFunction } from "../utils/validationErrorHandler";


export const signup = (req: Request, res: Response) => {
    res.render('signup');
}

export const signupPost = (req: Request, res: Response) => {
    try{
        const userInput: UserInput = userSchema.parse(req.body);
        req.flash('success', 'Singup successful!');
        res.redirect('/signup');
    }catch(error){
        errorHandlerFunction(error,req,res, 'signup');
    }
}