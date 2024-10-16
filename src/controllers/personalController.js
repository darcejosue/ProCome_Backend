import Personal from "../model/Personal.js";

export class PersonalController{
    static createPersonal = async(req, res) =>{
        const personal = new Personal(req.body);
        try {
            await personal.save();
            res.send('personal create success');
        } catch (error) {
            console.log(error);
        }
    }

    static getAllPersonals = async(req, res) =>{
        try {
            const personal = await Personal.find({})
            res.json(personal);
        } catch (error) {
            console.log(error);
        }
    }

    static getPersonalById = async(req, res) =>{
        const {id} = req.params
        try {
            const personal = await Personal.findById(id)
            if (!personal) {
                const error = new Error('Personal not found')
                return res.status(404).json({error: error})
            }
            res.json(personal);
        } catch (error) {
            console.log(error);
        }
    }

    static updatePersonal = async(req, res) =>{
        const {id} = req.params;
        try {
            const personal = await Personal.findByIdAndUpdate(id, req.body)
            await personal.save()
            res.send('Personal updated successfully')
        } catch (error) {
            console.log(error);
        }
    }

    static deletePersonal = async(req, res) =>{
        const {id} = req.params
        try {
            const personal = await Personal.findById(id)
            if (!personal) {
                const error = new Error('Personal not found')
                return res.status(404).json({error: error})
            }
            await personal.deleteOne();
            res.send('Personal deleted successfull')
        } catch (error) {
            console.log(error)
        }
    }
}