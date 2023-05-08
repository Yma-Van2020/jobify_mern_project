import { register, login, updateUser } from '../controllers/authController.js'
import express from 'express'
import authenticateUser from '../middleware/auth.js'

const router = express.Router();
import rateLimiter from 'express-rate-limiter'

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 
    'Too many requests from this IP address. please try again in 15 mins'
})

//public routes
router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)

router.route('/updateUser').patch(authenticateUser, updateUser)

export default router;