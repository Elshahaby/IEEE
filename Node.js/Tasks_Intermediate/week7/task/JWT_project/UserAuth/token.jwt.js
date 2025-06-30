import jwt from 'jsonwebtoken'
import createHttpError from 'http-errors'
import { redisClient } from './redis.config.js'
import { promisify } from 'util';

const signToken = promisify(jwt.sign);
const verifyToken = promisify(jwt.verify);

// require('crypto').randomBytes(64).toString('hex')
// run this twice to get two secret keys for access and refresh tokens

export async function signAccessToken(userId) {
  try {
    const payload = {userId, role: "admin"};
    const secret = process.env.ACCESS_TOKEN_SECRET;
    const options = {
        issuer: "google.com",
        audience: userId,
        expiresIn: '2m'
    }
    const accessToken = await signToken(payload, secret, options);
    return accessToken;
  } catch (error) {
    console.log("Internal Server ERROR sdfjgk: ", error.message)
    // throw error;
    throw createHttpError.InternalServerError();
  }
}

// without using promisify
// export async function signAccessToken(userId) {
//     return new Promise((resolve, reject) => {
//         const payload = {};
//         const secret = process.env.ACCESS_TOKEN_SECRET;
//         const options = {
//             issuer: "google.com",
//             aduience: userId,
//             expiresIn: '1m'
//         }
//         jwt.sign(payload, serect, options, (err, token) => {
//             if(err) return reject(err);
//             resolve(token)
//         })
        
//     })
// }

export async function  verifyAccessToken(req, res, next) {
  try {
    if(!req.headers['authorization']) {
      console.log("token file, authorization header is not found")
      return next(createHttpError.Unauthorized())
    }

    const authHeader = req.headers['authorization'].split(' ');
    const token = authHeader[1];

    const payload = await verifyToken(token, process.env.ACCESS_TOKEN_SECRET);
    req.payload = payload;

    next();
  } catch (error) {
    console.log("❌ Error from token file : ", error);
   
    const message = error.name === 'JsonWebTokenError' || 'TokenExpiredError' ? 'Unauthorized' : error.message;
    console.log("the MEessage: ", message, error.name)
    next(createHttpError.Unauthorized(message));
   
    // next(error);
   
    // if(error.name === 'JsonWebTokenError'){
    //   next(createHttpError.Unauthorized())
    // } else {
    //   next(createHttpError.Unauthorized(error.message))
    // }
  }
}

export async function signRefreshToken(userId) {
  try {
    const payload = {}
    const secret = process.env.REFRESH_TOKEN_SECRET;
    const options = {
      expiresIn: '1y' ,
      issuer: 'google.com', 
      audience: userId 
    }
    const refreshToken = await signToken(payload, secret, options);

    // this line overwrites the existing refresh token stored in Redis for that userId. 
    // This means only the most recently issued refresh token is ever active in your Redis database for a given user.
    await redisClient.set(userId, refreshToken, {
      EX: 365*24*60*60 // 1 year in seconds
    })// return OK for success

    return refreshToken;
  } catch (error) {
    console.log("Internal Server ERROR : ", error.message)
    // throw error;
    throw createHttpError.InternalServerError();
  }
}

export async function verifyRefreshToken(refreshToken) {
  try {
    const payload = await verifyToken(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const userId = payload.aud;

    const storedToken = await redisClient.GET(userId);
    console.log(storedToken); // gives null if not found the (userId key)

    // To validate refresh Tokens we get from redis
    if(storedToken === refreshToken){
      console.log("Redis stored refresh token match the acual refresh Token")
      return userId;
    } 
    else{
      // To detect if any edit happended on refreshToken at redis storage
      // or if the refresh token not found in redis storage
      
      // throw "NOT MATCH AT ALL";
      // console info will be like this :-
      // 1. Not Match
      // 2. ❌ Error when verify refreshToken:  NOT MATCH AT ALL
      // explain for third point in console: inside the function I throw a string and this throw code line go to catch Block with in his turn throw unauthorized to the route that the function called in it, so what ever you throw inside function it will send unauthorized to the route
      // 3. form refresh token route:  UnauthorizedError: Unauthorized
      
      // If Redis-stored token does not match the received token,
      // this may indicate tampering or that the user has logged out elsewhere.
      // Throwing here (whether a string or a custom error) will be caught in the
      // catch block, which throws an Unauthorized error to the calling route.
      // Therefore, the type of throw inside this function does not affect the final response.
  
      console.log("Not Match")
      // for security consedration
      throw createHttpError.Unauthorized();
    } 

  } catch (error) {
    console.log("❌ Error when verify refreshToken: ", error);
    throw (createHttpError.Unauthorized()); // that throw code line that affect the route error
  }
}