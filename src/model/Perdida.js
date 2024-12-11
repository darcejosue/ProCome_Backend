import mongoose, {Schema} from "mongoose";

const PerdidaShema = new Schema({
    perdidaIngrediente: { 
        type: String,
        required: true,
        trim: true
    },
    perdidaDay: { 
        type: Date,
        required: true,
        trim: true
    },
    perdidaCantidad: { 
        type:Number, 
        required: true,
        trim: true
    },
    perdidaUnidad: { 
        type:String, 
        required: true,
        trim: true
    },
    perdidaPrecio: { 
        type: Number,
        required: true,
        trim: true
    },
    perdidaMotivo: { 
        type:String, 
        required: true,
        trim: true
    },
})

const Perdida = mongoose.model('Perdida', PerdidaShema)
export default Perdida