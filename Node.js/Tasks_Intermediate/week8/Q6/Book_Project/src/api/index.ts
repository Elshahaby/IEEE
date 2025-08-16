import express from "express";
import books from '../api/books/book.route'
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'hello from api.'
    })
})

router.use('/books', books)

export default router