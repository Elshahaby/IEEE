import express from 'express'
import morgan from 'morgan'
import createError from 'http-errors'
import dotenv from 'dotenv'
import authRoutes from './UserAuth/auth.routes.js'
import { verifyAccessToken } from './UserAuth/token.jwt.js'
// import './UserAuth/redis.config.js'
dotenv.config();

const app = express();

app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/',verifyAccessToken ,async(req, res, next) => {
    try {
        console.log('req.payload : ', req.payload)
        res.send('Hello from express.');
    } catch (error) {
        console.log('from main route : ', error);
        next(error);
    }
})

app.use('/auth', authRoutes);

app.use(async(req, res, next) => {
    next(createError.NotFound('This route does not exist'));
})

app.use((err, req, res, next) => {
    // console.log("General ERROR HANDLER")
    if (err.name === 'ValidationError') {
        return res.status(err.statusCode || 400).json({
            message: 'Validation failed',
            errors: err.errors
        });
    }

    res.status(err.status || 500).json({
        error:{
            status: err.status || 500,
            message: err.message || 'Internal server error',
        }
    })
})

export default app;
