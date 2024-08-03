import { defineEventHandler, getQuery, readBody } from 'h3'
import userModel from './mongoSchemas/userSchema'
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    mongoose.connect(process.env.MONGO_URL as string);
    const req = await readBody(event)
    console.log(req)

    if (
        await userModel.findOne({ email: req.email, phone: req.phone })
    ) return { status: 201, data: { user: await userModel.findOne({ email: req.email, phone: req.phone }) } }

    if (
        await userModel.findOne({ email: req.email }) || 
        await userModel.findOne({ phone: req.phone }) 
    ) return { status: 409, error: 'Email or phone is already in use' }

    const data = new userModel({ email: req.email, phone: req.phone });
    await data.save();
    return { status: 201, data: { user: data } }
})