import mongoose, {Schema} from "mongoose";

const PersonalSchema = new Schema({
    personalNombre: {
        type: String,
        required: true,
        trim: true
    },
    personalCargo: {
        type: String, 
        require: true,
        trim: true
    },
    personalHorario: {
        type: String,
        required: true,
        trim: true
    },
    personalTel: {
        type: String,
        required: true,
        trim: true
    },
    personalSalary: {
        type: Number,
        required: true,
        trim: true
    },
    personalVacacionesS: {
        type: Date,
        required: true,
        trim: true
    },
    personalVacacionesE: {
        type: Date,
        required: true,
        trim: true
    }
})

const Personal = mongoose.model('Personal', PersonalSchema)
export default Personal