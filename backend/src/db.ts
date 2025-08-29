
import mongoose from 'mongoose'
import {Schema} from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId;



const blogsSchema = new Schema({
    title:String,
    blog:String
})
export const blogsModel = mongoose.model("Blog",blogsSchema)