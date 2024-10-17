import Menu from "../model/Menu.js";

export class MenuController{

    static createMenu = async(req,res)=>{
        const menu = new Menu(req.body);
        try {
            await menu.save()
            res.send('Menu create successfully')
        } catch (error) {
            console.error(error);
        }
    }

    static getAllMenu = async(req, res)=>{
        try {
            const menu = await Menu.find({}).populate('menuSaucer').exec();
            res.json(menu);            
        } catch (error) {
            console.error(error);
        }
    }

    
    static getMenuById = async(req, res)=>{
        const {id} = req.params
        try {
            const menu = await Menu.findById(id).populate('menuSaucer').exec();
            if (!menu) {
                const error = new Error('menu not found')
                res.status(404).json({error: error})
            }
            res.json(menu)
        } catch (error) {
            console.error(error);
        }
    }
    
   


    static updateMenu = async(req, res)=>{
        const {id} = req.params
        try {
            const menu = await Menu.findByIdAndUpdate(id, req.body)
            await menu.save()
            res.send('Updated menu successfully')
        } catch (error) {
            console.error(error);
        }
    }

    static deleteMenu = async(req, res)=>{
        const {id} = req.params
        try {
            const menu = await Menu.findById(id)
            if (!menu) {
                const error = new Error('menu not found')
                res.status(404).json({error: error})
            }
            await Menu.deleteOne()
            res.send('Deleted menu successfully')
        } catch (error) {
            console.error(error);
        }
    }
}