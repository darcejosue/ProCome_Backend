import Stock from '../model/Stock.js'


export class StockController{

    static createStock = async(req, res)=>{
        const stock = new Stock(req.body);
        try {
            await stock.save()
            res.send('create success')
        }
        catch (e) {
            console.log(e.message);
        }
    }

    static getAllStock = async(req, res)=>{
        try {
            const stock = await Stock.find({}).populate('stockSupplier').exec();
            res.json(stock)
        } catch (error) {
            console.log(error.message);
        }
    }

    static getStockById = async(req, res)=>{

        const {id} = req.params
        try {
            const stock = await Stock.findById(id)
            if(!stock){
                const err = new Error('Stock not found')
                return res.status(404).json({error: err.message})
            }
            res.json(stock)
        } 
        catch (error) {
            console.log(error.message);
        }
    }

    static updateStockById = async(req, res)=>{

        const {id} = req.params
        try {
            const stock = await Stock.findByIdAndUpdate(id, req.body)
            
            await stock.save()
            res.send('Stock updated successfully')
        } catch (error) {
            console.log(error.message);
        }
    }

    static deleteStockById = async(req, res)=>{

        const {id} = req.params
        try {
           const stock = await Stock.findById(id)
           if(!stock){
            const err = new Error('Stock not found')
            return res.status(404).json({error: err.message})
        }
           await stock.deleteOne()
           res.send('Stock deleted')
        } catch (error) {
            console.log(error.message);
        }
    }

    
}