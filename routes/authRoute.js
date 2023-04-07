import express from 'express'
import { registerController } from '../controller/authcontroller.js'

//router object 
const router = express.Router()

//routing 
//REGISTER|| METHODE POST
router.post('/register', registerController)




export default router;