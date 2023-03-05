import { number } from 'zod';
import { prisma } from '../config/db';
import express, { Application, Request, Response } from "express";
const app: Application = express();
app.use(express.json());


// Creat
export const CreateClass = async (req: Request, res: Response) => {
    const classroom = req.body

    const NewClass = await prisma.classroom.create({
        data: classroom

    })
    res.json({ "msg": "The Student has been created", NewClass })
};



// Read 
export const getallClass= async (req: Request, res: Response) => {
    let AllClass = await prisma.classroom.findMany()
    res.json(AllClass);
}

export const getClassById = async (req: Request, res: Response) => {

    try {
        let { id } = req.body
        let class_one = await prisma.classroom.findFirst({
            where: {
                id,
            },
       
            

        })
        res.json(class_one);
    } catch (error) {
        res.json(error)

    }

}

