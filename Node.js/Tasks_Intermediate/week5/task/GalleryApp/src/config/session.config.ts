import dotenv from 'dotenv';
import path from 'path';
import MongoStore from 'connect-mongo';
import env from 'env-var'
import { AppError } from '../middlewares/errorHandler.middleware'


dotenv.config({ path: path.resolve(__dirname, './config.env') });

let sessionSecret: string;
let mongoUri: string;
try{
    sessionSecret = env.get("SESSION_SECRET").required().asString();
    mongoUri = env.get("MONGO_URL").required().asString();
}catch(error){
    if (error instanceof Error) throw new AppError(error.message, 500);
    else throw new AppError("An unknown error occurred", 500);
}

export const sessionConfig = {
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: mongoUri,
        ttl: 60*60*24*30,
    }),
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000*60*60*24*30,
    },
};