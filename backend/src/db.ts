
import mongoose from 'mongoose'
import {Schema} from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId;


const blogSchema = new Schema({
    title: String,
    content:String
})

export const blogModel = mongoose.model("Blog",blogSchema)