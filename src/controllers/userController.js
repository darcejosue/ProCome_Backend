import User from "../model/User.js";

export class UserController{
    static createUser = async(req, res) =>{
        const user = new User(req.body);
        try {
            await user.save();
            res.send('user create success');
        } catch (error) {
            console.log(error);
        }
    }

    static getAllUsers = async(req, res) =>{
        try {
            const user = await User.find({})
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    }

    static getUserById = async(req, res) =>{
        const {id} = req.params
        try {
            const user = await User.findById(id)
            if (!user) {
                const error = new Error('User not found')
                return res.status(404).json({error: error})
            }
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    }

    static updateUser = async(req, res) =>{
        const {id} = req.params;
        try {
            const user = await User.findByIdAndUpdate(id, req.body)
            await user.save()
            res.send('User updated successfully')
        } catch (error) {
            console.log(error);
        }
    }

    static deleteUser = async(req, res) =>{
        const {id} = req.params
        try {
            const user = await User.findById(id)
            if (!user) {
                const error = new Error('User not found')
                return res.status(404).json({error: error})
            }
            await user.deleteOne();
            res.send('User deleted successfull')
        } catch (error) {
            console.log(error)
        }
    }
}