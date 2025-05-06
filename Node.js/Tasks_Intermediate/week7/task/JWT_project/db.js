import mongoose from 'mongoose';

const { MONGO_URL } = process.env;

if (!MONGO_URL) {
    throw new Error('Database URL is Not Found');
}

const connectDB = async () => {
    try {
        console.log('📡 Attempting to connect to MongoDB...');
        await mongoose.connect(MONGO_URL);
        console.log('✅ MongoDB connected successfully');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    }
};

export default connectDB;