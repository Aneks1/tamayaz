import { model, Schema } from "mongoose"

const userSchema = new Schema({
    email: String,
    phone: String,
})

const userModel = model("User", userSchema)
export default userModel