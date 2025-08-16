import { StatusCodes } from 'http-status-codes';
import app from './app'
import AppError from './errors/appError';
import prisma from './lib/prisma'; // Import prisma client to ensure connection


const {PORT} = process.env || { PORT: 3000 };

if(!PORT){
    throw new AppError('PORT is Not Found', StatusCodes.NOT_FOUND);
}

// Test DB connection
prisma.$connect()
  .then(() => console.log('Prisma connected to MongoDB successfully!'))
  .catch((err) => console.error('Prisma DB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} http://localhost:3000/api`);
});