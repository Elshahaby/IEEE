import express from 'express';
import { signup, signupPost } from '../controllers/authControllers';

const router = express.Router();

router.get('/signup', signup);
router.post('/signup', signupPost);

export default router;