import express, { NextFunction } from "express";
import mongoose from 'mongoose';
import {config} from 'dotenv';
import TasksRoutes from './routes/TasksRoutes'
import {errorHandler} from './middlewares/errorHandler.middleware'
import path from 'path';



export const app = express();
config();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'..','views'));
app.use(express.urlencoded({ extended: true }));    
app.use(express.static('public'))
app.use(express.json());  
app.use('/task',TasksRoutes);

const URL = process.env.MONGO_URL;

if(!URL){
    throw new Error('Data Base URL is Not Found');
}

mongoose.connect(URL)
.then(() => {
    app.listen(3000, () => {
        console.log('listen on port 3000');
    })
}).catch((err) => { console.log(err) } );


    app.all('*', (next: NextFunction) => {
        next(new Error());
    })

app.use(errorHandler);