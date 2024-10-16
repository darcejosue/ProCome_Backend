import Supplier from "../model/Supplier.js";

export class SupplierController{
    static createSupplier = async(req, res) =>{
        const supplier = new Supplier(req.body);
        try {
            await supplier.save();
            res.send('supplier create success');
        } catch (error) {
            console.log(error);
        }
    }

    static getAllSuppliers = async(req, res) =>{
        try {
            const supplier = await Supplier.find({})
            res.json(supplier);
        } catch (error) {
            console.log(error);
        }
    }

    static getSupplierById = async(req, res) =>{
        const {id} = req.params
        try {
            const supplier = await Supplier.findById(id)
            if (!supplier) {
                const error = new Error('Supplier not found')
                return res.status(404).json({error: error})
            }
            res.json(supplier);
        } catch (error) {
            console.log(error);
        }
    }

    static updateSupplier = async(req, res) =>{
        const {id} = req.params;
        try {
            const supplier = await Supplier.findByIdAndUpdate(id, req.body)
            await supplier.save()
            res.send('Supplier updated successfully')
        } catch (error) {
            console.log(error);
        }
    }

    static deleteSupplier = async(req, res) =>{
        const {id} = req.params
        try {
            const supplier = await Supplier.findById(id)
            if (!supplier) {
                const error = new Error('Supplier not found')
                return res.status(404).json({error: error})
            }
            await supplier.deleteOne();
            res.send('Supplier deleted successfull')
        } catch (error) {
            console.log(error)
        }
    }
}