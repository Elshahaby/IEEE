import flash from 'connect-flash';
import { RequestHandler } from 'express';

// Configure flash 
export const flashMiddleware: RequestHandler = flash();

// Make flash messages availabale in all EJS templetes
export const flahsLocalMiddleware: RequestHandler = (req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.errors   = req.flash('errors');
    res.locals.user  = req.session.userId || null;

    next();
};