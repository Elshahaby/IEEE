import express from "express";
// import firstResponse from "../interfaces/firstResponse";
import todos from './todos/todos.routes'
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'hello from api.'
    })
})

router.use('/todos', todos)

export default router