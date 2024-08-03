import { defineEventHandler, getQuery, readBody } from 'h3'
import userModel from './mongoSchemas/userSchema'

export default defineEventHandler(async (event) => {
    const req = await readBody(event)
    console.log(req)
    return { status: 200, data: req, mongo: process.env.MONGO_URL, model: userModel }
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