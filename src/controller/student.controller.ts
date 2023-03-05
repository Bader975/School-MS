import { number } from 'zod';
import { prisma } from '../config/db';
import express, { Application, Request, Response } from "express";
const app: Application = express();
app.use(express.json());







// Creat
export const CreateStudent = async (req: Request, res: Response) => {
    const student = req.body

    const newStudent = await prisma.student.create({
        data: student

    })
    res.json({ "msg": "The Student has been created", newStudent })
}






// Read 
export const getallStudent= async (req: Request, res: Response) => {
    let AllStudents = await prisma.student.findMany()
    res.json(AllStudents);
}

export const getStudentById = async (req: Request, res: Response) => {

    try {
        let { id } = req.body
        let student_one = await prisma.student.findFirst({
            where: {
                id,
            },
       
            

        })
        res.json(student_one);
    } catch (error) {
        res.json(error)

    }

}


