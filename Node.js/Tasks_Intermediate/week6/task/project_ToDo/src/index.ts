
import app from './app'
import connectDB from './db'


const {PORT} = process.env || { PORT: 3000 };

if(!PORT){
    throw new Error('PORT is Not Found');
}

connectDB()
.then( () => {
    app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}/api/todos`);
        })
    })
    .catch((err) => {
        console.log(err);
    })

