import { CreateStudent, getallStudent, getStudentById } from '../controller/student.controller';

import express from "express";
import { validate } from '../middleware/validate';
import { userVaild } from '../zod.schema/school.zod';
import { CreateClass, getClassById, getallClass } from '../controller/class.controller';
import { CreateTeacher, getallTeacher, getTeacherById } from '../controller/teacher.controller';

let router = express.Router();

// Get all students
router.get('/student', getallStudent)
// Add new student
router.post('/student', CreateStudent)
// Get student by the id
router.get('/student/id', getStudentById)
// -----------------------------------------------------------------------------------------
// Get all classs
router.get('/class',getallClass )
// Get a class by id
router.get('/class/id',getClassById )
// Add new class
router.post('/class', CreateClass)
// -------------------------------------------------------------------------------------------
// Get all teachers
router.get('/teacher', getallTeacher)
// get teacher by id
router.get('/teacher/id',getTeacherById )
// Add new teacher
router.post('/teacher', CreateTeacher)




export default router;