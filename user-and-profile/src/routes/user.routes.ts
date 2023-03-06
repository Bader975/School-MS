import { getallUsers, createUser,  getUserByEmail, getUserById, Login} from '../controller/user.controller';

import express from "express";
import { validate } from '../middleware/validate';
import { userVaild } from '../zod.schema/user.zod';

let router = express.Router();


// Get all Users
router.get('/', getallUsers)
// LOging By Username and Password
router.get('/login', Login)
// Get user by ID
router.get('/id', getUserById)
// Get user by Email
router.get('/email', getUserByEmail)

//POST Creat
router.post('/',validate(userVaild), createUser)



    


export default router;