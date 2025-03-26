import { RequestHandler } from "express";
import { AppError } from "./errorHandler.middleware";

export const isAuth: RequestHandler = (req, res, next) => {
    if(!req.session.userId){
        req.flash('errors', "login to get Gallery")
        res.redirect('/auth/login')
        // return next(new AppError("User not authenticated", 401));
    }

    next();
};