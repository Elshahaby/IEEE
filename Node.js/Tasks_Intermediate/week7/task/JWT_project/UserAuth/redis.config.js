import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();

export const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

redisClient.on('connect', () => console.log('Client Connected to redis....'));
redisClient.on('ready', () => console.log('Client Connected to redis and ready to use ...'));
redisClient.on('error', err => console.log('Redis Client Error', ));
redisClient.on('end', () => console.log('Client disConnected from redis ...'));

process.on('SIGINT', () => {
    redisClient.quit();
})



await redisClient.connect();

// await redisClient.connect();
// await redisClient.SET("foo", "bar")
// const value = await redisClient.GET("foo")
// console.log(value)
// await redisClient.DEL('foo')
// await redisClient.close()


