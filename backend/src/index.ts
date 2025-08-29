
import express from 'express'
import mongoose from "mongoose"
import type { Request, Response } from 'express';
import dotenv from "dotenv"
import cors from "cors";
import { v4 as uuid } from "uuid";
import { blogsModel } from './db.js';

dotenv.config()
const app = express();

const PORT = Number(process.env.PORT) || 3001
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    throw new Error("MONGO_URI environment variable is not defined.");
}
mongoose.connect(MONGO_URI)


app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send("backend is running")
})

app.get("/blog",async(req:Request,res:Response)=>{
    try{
        const blogs = await blogsModel.find();
        res.status(202).json({message:"fetch blog successfullt",blogs}) 
    }catch(err){
        console.error(err);
        res.status(404).json({message:"Server error"})
    }
})
app.post("/blog", async (req: Request, res: Response) => {

    try {
        const { title, blog } = req.body;
        if (!title || !blog) {
            res.status(403).json({ message: "blog must be provided!" })
        }
        await blogsModel.create({ title, blog })
        res.status(202).json({ message: "blog created successfuly!" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "sever error!" })
    }

})
app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`)
})

