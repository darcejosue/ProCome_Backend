import mongoose, {Schema} from "mongoose";

const ReporteShema = new Schema({
    reporteIngrediente: { 
        type: String,
        required: true,
        trim: true
    },
    reporteDay: { 
        type: Date,
        required: true,
        trim: true
    },
    reporteCantidad: { 
        type:Number, 
        required: true,
        trim: true
    },
    reporteUnidad: { 
        type:String, 
        required: true,
        trim: true
    },
    reportePrecio: { 
        type: Number,
        required: true,
        trim: true
    },
})

const Reporte = mongoose.model('Reporte', ReporteShema)
export default Reporte