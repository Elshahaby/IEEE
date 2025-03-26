import dotenv from 'dotenv'
import path from 'path'
import express, { NextFunction, Request, Response } from 'express'
import env from 'env-var'
import {v2 as cloudinary, ResourceApiResponse, UploadApiResponse} from 'cloudinary'
import mongoose from 'mongoose'
import { errorHandler, AppError } from './middlewares/errorHandler.middleware'
import { upload } from './config/multer.config'
import sessionMiddleware from './middlewares/session.middleware'
import authRoutes from './routes/auth.routes'
import galleryRoutes from './routes/gallery.routes'
import { flahsLocalMiddleware, flashMiddleware } from './middlewares/flash.middleware'
import { isAuth } from './middlewares/isAuth.middleware'

dotenv.config({path: path.resolve(__dirname, './config/config.env')});

const app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use(sessionMiddleware);
app.use(flashMiddleware);
app.use(flahsLocalMiddleware);

app.use('/auth', authRoutes);
app.use('/gallery', isAuth, galleryRoutes)


let Mongo_URL: string;
let port:number;
try {
    Mongo_URL = env.get("MONGO_URL").required().asString();
    port = env.get("PORT").required().asIntPositive();
}catch (error) {
    if (error instanceof Error)  throw new AppError(error.message, 500);
    else  throw new AppError("An unknown error occurred", 500);
}
    

mongoose.connect(Mongo_URL).then( () => {
    console.log("✅ Connected to MongoDB successfully");

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}/gallery`);
    });
}).catch((error) => {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1); // Exit if DB connection fails
});

app.all('*', (req: Request, res: Response, next: NextFunction) => next(new Error('Route Not found')));
app.use(errorHandler);





