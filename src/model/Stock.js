import mongoose, {Schema} from "mongoose";

const StockSchema = new Schema({
    stockName: {
        type: String,
        required: true,
        trim: true
    },
    stockCategory: { //fruta, verdura, carne, aceite, granos, etc
        type: String,
        required: true,
        trim: true
    },
    stockUnitMesure: { //litros, libras, unidades, etc
        type: String,
        required: true,
        trim: true
    },
    stockDescription: { //opcional
        type: String,
        trim: true
    },
    stockQuantity: { //cuanto de este producto esta entrando
        type: Number,
        required: true,
        trim: true

    },
    stockPrice: { //precio individual del producto
        type: Number,
        required: true,
        trim: true
    },
    stockSupplier:{ //precio individual del producto
        type: Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true,
    },
    stockAlert:{
        type: Number,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
} 
)

const Stock = mongoose.model('Stock', StockSchema);
export default Stock;
