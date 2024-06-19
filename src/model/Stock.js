import mongoose, {Schema, Document} from "mongoose";

const StockSchema = new Schema({
    stockName: {
        type: String,
        required: true,
        trim: true
    },
    stockDescription: {
        type: String,
        required: true,
        trim: true
    },
    stockQuantity: {
        type: Number,
        required: true,
        trim: true
    },stockPrice: {
        type: Number,
        required: true,
        trim: true
    }

})

const Stock = mongoose.model('Stock', StockSchema);
export default Stock;
