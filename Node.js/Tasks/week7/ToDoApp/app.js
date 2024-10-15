const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Task = require('./models/task.model.js')  

const app = express();

// connect to mongoDB
mongoose.connect('mongodb+srv://Elshahaby:KUBrgQyLy36_LGs@learn-mongodb.zbvwf.mongodb.net/ToDoApp?retryWrites=true&w=majority&appName=learn-mongodb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('mongodb server started')
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));  // Serve static files

// Set the view engine to EJS
app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    res.redirect('/tasks');
})

app.get('/tasks',async (req,res)=>{
    try{
        const tasks = await Task.find();
        res.render('tasks',{tasks});
    }catch(err){
        res.status(500).send('Erorr fetching tasks: ' + err.message);
    }
});

app.get('/add-task', (req, res) => {
    res.render('add-task');
});

app.post('/add-task', async (req, res) => {
    const newTask = new Task({ name: req.body.taskName});   
    try {
      await Task.insertMany(newTask);
      // or
      //await newTask.save();          
      res.redirect('/tasks'); 
    } catch (err) {
      res.status(500).send('Error adding task: ' + err.message);
    }
});

app.post('/delete-task/:id', async (req, res) => {
    try {
      console.log(req.params.id);
      await Task.findByIdAndDelete(req.params.id);  
      res.redirect('/tasks');
    } catch (err) {
      res.status(500).send('Error deleting task: ' + err.message);
    }
});

app.use((req, res, next) => {
    res.status(404).send('404 not found , Not found Page');
});

app.listen(3000,() => {
    console.log('Server is running on http://localhost:3000');
});