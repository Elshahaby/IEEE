import express from 'express'
import morgan from 'morgan'
import createError from 'http-errors'
import dotenv from 'dotenv'
import authRoutes from './UserAuth/auth.routes.js'
import { verifyAccessToken } from './UserAuth/token.jwt.js'
import setupSwagger from './swagger/swaggerDoc.js';
// import './UserAuth/redis.config.js'
dotenv.config();

const app = express();

app.use(morgan('dev'));


app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {NODE_ENV} = process.env;
if(NODE_ENV === 'development'){
    setupSwagger(app);
}

app.get('/',verifyAccessToken ,async(req, res, next) => {
    try {
        console.log('req.payload : ', req.payload)
        res.send({message: 'Hello from express.'});
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
            status: err.statusCode || 400,
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
