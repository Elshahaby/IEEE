import { Router } from 'express'
import { validateRequest } from '../validateRequestWithZod.js';
import { registerSchema, loginSchema } from './user.zod_validation.schema.js';
import * as AuthController from './auth.controller.js'

const router = Router();

router.post('/register' , validateRequest({ bodySchema: registerSchema }) , AuthController.register)


router.post('/login' , validateRequest({ bodySchema: loginSchema }) , AuthController.login)


router.post('/refresh-token', AuthController.refresh_token)


router.delete('/logout', AuthController.logout)




export default router;