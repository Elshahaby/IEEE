import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: './config.env' });
import express from 'express'
import jwt from 'jsonwebtoken'
import { promisify } from 'util';

const verifyToken = promisify(jwt.verify);

const app = express();

app.use(express.json());

let refreshTokens = []

app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token);
    return res.status(204);
})

app.post('/token', async (req, res) => {
    const refreshToken = req.body.token;
    if(refreshToken == null) return res.status(401).json({ message: 'No token provided. Access denied.' });
    if(!refreshTokens.includes(refreshToken)) return res.status(403).json({ message: 'Invalid token. Access forbidden.' });
    try{
        const user = await verifyToken(refreshToken, process.env.REFRESH_TOKEN_SECRET)
        const accessToken = generateAccessToken({ username: user.username })
        res.json({ accessToken })
    }catch(error){
        return res.status(403).json({ message: 'Invalid token. Access forbidden.' });
    }

})

app.post('/login', (req, res)=> {
    // Authentecate User

    const username = req.body.username;
    const user = { username };
    console.log("login user is: ", user);

    // the two servers share the same access token secret that allow users to connect at any server of the both.
    // you can't do this with session based authentication
    const accessToken = generateAccessToken(user);
    console.log("REFRESH: ", process.env.REFRESH_TOKEN_SECRET);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken);
    res.json({ accessToken, refreshToken })
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '22s' })
}

app.listen(4000, () => {
     console.log("Listen to port 4000")
})