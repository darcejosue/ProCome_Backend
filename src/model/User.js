import mongoose, {Schema} from "mongoose";

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    userEmail: {
        type: String, 
        require: true,
        trim: true
    },
    userPass: {
        type: String,
        required: true,
        trim: true
    },
    userRol: {
        type: String,
        required: true,
        trim: true
    }
})

const User = mongoose.model('User', UserSchema)
export default User