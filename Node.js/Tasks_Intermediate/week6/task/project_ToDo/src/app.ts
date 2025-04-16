import express, { Request, Response, NextFunction} from 'express';

import dotenv from 'dotenv';
import path from 'path'
dotenv.config({path: path.join(__dirname, '../config.env')})

import api from './api'
import * as lastMiddlewares from './middlewares/notFoundErrorHandler.middlewares';

const app = express();

app.use(express.json());


app.use('/api', api);

app.use(lastMiddlewares.notFound);
app.use(lastMiddlewares.errorHandler);

export default app;

// this /(.*)/ instead of this * in express new version
// app.all(/(.*)/, (req: Request, res: Response, next: NextFunction) => next(new Error('Route Not found')));

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     console.error("Error:", err.message);
//     res.status(500).json({ success: false, message: err.message });
// })
