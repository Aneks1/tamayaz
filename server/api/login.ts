import { defineEventHandler, getQuery } from 'h3'
import userModel from './mongoSchemas/userSchema'
import { v4 } from 'uuid'

export default defineEventHandler(async (event) => {
    const req = getQuery(event)
    const data = await userModel.findOne({ email: req.email, phone: req.phone });
    if(!data) return {  status: 401, error: 'Invalid email or phone number' }
    console.log(data)
    const token = v4()
    return { status: 200, data: { user: data, token: token } }
})