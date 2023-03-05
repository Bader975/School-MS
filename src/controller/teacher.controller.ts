import { number } from 'zod';
import { prisma } from '../config/db';
import express, { Application, Request, Response } from "express";
const app: Application = express();
app.use(express.json());


// Creat
export const CreateTeacher = async (req: Request, res: Response) => {
    const teacher = req.body

    const NewTeacher = await prisma.teacher.create({
        data: teacher

    })
    res.json({ "msg": "The teacher has been created", NewTeacher })
};



// Read 
export const getallTeacher= async (req: Request, res: Response) => {
    let AllTeacher = await prisma.teacher.findMany()
    res.json(AllTeacher);
}

export const getTeacherById = async (req: Request, res: Response) => {

    try {
        let { id } = req.body
        let teacher_one = await prisma.teacher.findFirst({
            where: {
                id,
            },
       
            

        })
        teacher_one?  res.json(teacher_one):res.json({"msg":"Not Found"});
    } catch (error) {
        res.json({error:"Not Found"});

    }

}

