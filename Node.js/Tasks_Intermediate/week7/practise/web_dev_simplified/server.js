import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: './config.env' });
import express from 'express'
import jwt from 'jsonwebtoken'
import { promisify } from 'util';

const verifyToken = promisify(jwt.verify);

const app = express();

app.use(express.json());

const posts = [
    {
        username: 'Kyle',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        title: 'Post 2'
    }
];


app.get('/posts', authentecateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.username));
})


// middleware to sure the token is valid token
async function  authentecateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    // Bearer TOKEN
    const token = authHeader && authHeader.split(" ")[1]

    // 401 Unauthorized = the client is NOT authenticated.
    if(!token) return res.status(401).json({ message: 'No token provided. Access denied.' });

    try{
        const user = await verifyToken(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = user;
        next();
    }catch(error){
        return res.status(403).json({ message: 'Invalid token. Access forbidden.' });
    }

    // you could write it without using async/await and promisify
    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    //     if(err) return res.status(403).json({ message: 'Invalid token. Access forbidden.' });

    //     req.user = user;  // // Save user info into request object
    //     next();  // // Pass control to next handler
    // })

}

app.listen(3000, () => {
     console.log("Listen to port 3000")
})