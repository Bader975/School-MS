import {prisma,connectDB} from "./config/db"
import  express,{Application} from "express";
import  RouterSchool  from "./routes/school.routes";
import * as dotenv from 'dotenv' 
dotenv.config()

const app:Application= express();
app.use(express.json());
connectDB();

app.use('/school',RouterSchool);

// Port
app.listen(3008, () => console.log("Server Started"));