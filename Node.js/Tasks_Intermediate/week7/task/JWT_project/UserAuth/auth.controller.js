import createError from 'http-errors'
import { User } from './User.model.js'
import { signAccessToken, signRefreshToken, verifyRefreshToken } from './token.jwt.js';
import bcrypt from 'bcrypt'
import { redisClient } from './redis.config.js'


export async function register (req, res, next) {
    console.log("from route : ", req.body); 
    try{
        const {email, password} = req.body;

        const doesExist = await User.findOne({ email });
        if(doesExist) throw createError.Conflict(`${email} is already been registered`);

        const newUser = new User({email, password});
        await newUser.save();

        const accessToken = await signAccessToken(newUser.id);
        const refreshToken = await signRefreshToken(newUser.id);

        res.json( {accessToken, refreshToken} ) ;

    }catch(error){
        next(error);
    }
}


export async function login (req, res, next) {
    try {
        const {email, password} = req.body;
        
        const user = await User.findOne({email});
        if(!user) throw createError.NotFound('User is not registered');

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) throw createError.Unauthorized('password not correct');

        const accessToken = await signAccessToken(user.id);
        const refreshToken = await signRefreshToken(user.id);

        res.json({ accessToken, refreshToken });
    } catch (error) {
        console.log('from login route: ', error.message)
        next(error);
    }
}

export async function refresh_token (req, res, next) {
    try {
        const { refreshToken } = req.body;
        if(!refreshToken) throw createError.BadRequest();
        const userId =  await verifyRefreshToken(refreshToken);
        
        const accessToken = await signAccessToken(userId);
        const refToken = await signRefreshToken(userId);

        res.json({ 
            accessToken: accessToken,
            refreshToken: refToken
        });
    } catch (error) {
        console.log("form refresh token route: ", error);
        next(error);
    }
}

export async function logout (req, res, next) {
    try {
        const {refreshToken} = req.body;
        if(!refreshToken) throw createError.BadRequest();

        // if I logout with refreshToken that is not stored at redis, function will throw unauthorized error
        const userId = await verifyRefreshToken(refreshToken);
        try {
            const val = await redisClient.DEL(userId);
            console.log("Is loged out : ", val);
            res.status(204);
        } catch (error) {
            console.log("delete from redis")
            throw createError.InternalServerError();
        }

    } catch (error) {
        console.log("FROM LogOut route : ", error.message)
        next(error);
    }
}