
import app from './app.js'
import connectDB from './db.js'


const {PORT} = process.env || { PORT: 3000 };

if(!PORT){
    throw new Error('PORT is Not Found');
}

connectDB()
.then( () => {
    app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })