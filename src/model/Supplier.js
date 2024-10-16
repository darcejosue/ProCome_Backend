import mongoose, {Schema} from "mongoose";

const SupplierSchema = new Schema({
    supplierName: {
        type: String,
        required: true,
        trim: true
    },
    supplierTel: {
        type: String,
        required: true,
        trim: true
    }
})

const Supplier = mongoose.model('Supplier', SupplierSchema)
export default Supplier