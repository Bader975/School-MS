import { number } from 'zod';
import { prisma } from '../config/db';
import express, { Application, Request, Response } from "express";
const app: Application = express();
app.use(express.json());




// Loging


export const Login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await prisma.user.findFirst({
        where: {
          username,
          password,
        },
      });
//   ES6 if else
    !user ? res.json({ message: "worng username or password !!"}): res.json({message: `weclome back ${username}`});
    } catch (error) {
      console.log(error);
    }
  };



// Creat
export const createUser = async (req: Request, res: Response) => {
    const user = req.body
    const profile = req.body

    const newUser = await prisma.user.create({
        data: user

    })
    const newProfile = await prisma.profile.create({
        data: profile

    })
    res.json({ "msg": "The user has been created", newUser })
}






// Read 
export const getallUsers = async (req: Request, res: Response) => {
    let users = await prisma.user.findMany()
    let profiles = await prisma.profile.findMany()
    res.json({users,profiles});
    // res.json();
}

export const getUserById = async (req: Request, res: Response) => {

    try {
        let { id } = req.body
        let user_one = await prisma.user.findFirst({
            where: {
                id,
            },
       
            select: {
                email: true,
                username: true,

             
            },

        })
        res.json(user_one);
    } catch (error) {
        res.json(error)

    }

}



export const getUserByEmail = async (req: Request, res: Response) => {

    try {
        let { email } = req.body
        let user_one = await prisma.user.findFirst({
            where: {
                email,
            },
       
            select: {
                email: true,
                username: true,

             
            },

        })
        res.json(user_one);
    } catch (error) {
        res.json(error)

    }

}
