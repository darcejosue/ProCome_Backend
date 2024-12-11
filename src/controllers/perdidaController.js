import Perdida from "../model/Perdida.js";

export class PerdidaController{

    static createPerdida = async(req,res)=>{
        const perdida = new Perdida(req.body);
        try {
            await perdida.save()
            res.send('Perdida create successfully')
        } catch (error) {
            console.error(error);
        }
    }

    static getAllPerdida = async(req, res)=>{
        try {
            const perdida = await Perdida.find();
            res.json(perdida);            
        } catch (error) {
            console.error(error);
        }
    }

    
    static getPerdidaById = async(req, res)=>{
        const {id} = req.params
        try {
            const perdida = await Perdida.findById(id);
            if (!perdida) {
                const error = new Error('perdida not found')
                res.status(404).json({error: error})
            }
            res.json(perdida)
        } catch (error) {
            console.error(error);
        }
    }
    
   


    static updatePerdida = async(req, res)=>{
        const {id} = req.params
        try {
            const perdida = await Perdida.findByIdAndUpdate(id, req.body)
            await perdida.save()
            res.send('Updated perdida successfully')
        } catch (error) {
            console.error(error);
        }
    }

    static deletePerdida = async(req, res)=>{
        const {id} = req.params
        try {
            const perdida = await Perdida.findById(id)
            if (!perdida) {
                const error = new Error('perdida not found')
                res.status(404).json({error: error})
            }
            await Perdida.deleteOne()
            res.send('Deleted perdida successfully')
        } catch (error) {
            console.error(error);
        }
    }
}