import { defineEventHandler, getQuery, readBody } from 'h3'
import userModel from './mongoSchemas/userSchema'
import mongoose from "mongoose";
mongoose.connect(process.env.MONGO_URL as string);
export default defineEventHandler(async (event) => {
    const req = await readBody(event)
    mongoose.connect(process.env.MONGO_URL as string);
    console.log(req)
    if (
        await userModel.findOne({ email: req.email, phone: req.phone })
    ) return { status: 201, data: { user: await userModel.findOne({ email: req.email, phone: req.phone }) } }

    if (
        await userModel.findOne({ email: req.email }) || 
        await userModel.findOne({ phone: req.phone }) 
    ) return { status: 409, error: 'Email or phone is already in use' }
    else {
        return { status: 200, mesage: 'no' }
    }
    const data = new userModel({ email: req.email, phone: req.phone });
    await data.save();
    return { status: 201, data: { user: data } }
})