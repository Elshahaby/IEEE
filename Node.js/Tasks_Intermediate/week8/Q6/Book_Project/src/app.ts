import express from 'express';
import dotenv from 'dotenv';
import path from 'path'
dotenv.config();
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
// import mongoSanitize from 'express-mongo-sanitize';
import apiRoutes from './api';
import errorHandler from './middlewares/errorHandler';
import morgan from 'morgan';
import { notfound } from './middlewares/notFound';


const app = express();

app.use(morgan('dev'));

app.use(helmet());

const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*', // Be more restrictive in production
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again after 15 minutes',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', limiter);

app.use(express.json({ limit: '10kb' }));
// app.use(mongoSanitize());



app.use('/api', apiRoutes);

// Unhandled routes
app.use(notfound);
// This middleware catches all errors passed via next(error)
app.use(errorHandler)

export default app;